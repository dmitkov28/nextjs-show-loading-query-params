import { ReactNode, Suspense } from "react";
import WrappedChildren from "./WrappedChildren";

export default function layout({
  children,
  data,
}: {
  children: ReactNode;
  data: ReactNode;
}) {
  return (
    <>
      {children}
      {/* This is needed because we're using useSearchParams in WrappedChildren */}
      <Suspense fallback={null}> 
        <WrappedChildren>{data}</WrappedChildren>
      </Suspense>
    </>
  );
}
