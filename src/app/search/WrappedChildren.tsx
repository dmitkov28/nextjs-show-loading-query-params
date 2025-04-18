"use client";

import { useSearchParams } from "next/navigation";
import { ReactNode, Suspense } from "react";

export default function WrappedChildren({ children }: { children: ReactNode }) {
  const params = useSearchParams();

  return <Suspense key={params.get("query")}>{children} </Suspense>;
}
