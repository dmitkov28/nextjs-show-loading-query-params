"use client";
import Form from "next/form";

export default function SearchForm() {
  return <Form action={"/search"} className="w-fit grid gap-3 p-4 border border-gray-400 rounded-md">
    <h2 className="text-xl font-bold text-center">Search Form</h2>
    <input name="query" placeholder="search..." required className="border border-gray-400 p-2 rounded-md" autoComplete="off"/>
    <button className="border border-black rounded-md flex w-full justify-center">Search</button>
  </Form>;
}
