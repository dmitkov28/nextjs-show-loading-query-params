import { Country } from "@/app/types";
import { SearchParams } from "next/dist/server/request/search-params";

const delay = async (delayMs: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delayMs);
  });
};

const searchCountry = async (countryName: string): Promise<Country[]> => {
  await delay(1500); // fake delay to show loading ui
  const endpoint = "https://restcountries.com/v3.1/name";
  const res = await fetch(`${endpoint}/${countryName}`);
  const data = await res.json();
  return data as Country[];
};

export default async function page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const query = (await searchParams)?.query;
  if (!query) return null;
  const countries = await searchCountry(query as string);

  return (
    <div className="grid items-center justify-center">
      <h2 className="mb-4">
        Results for: <b>{query}</b>
      </h2>

      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}
