
import { Suspense } from "react";
import { getNames } from "./api/name";
import { Use } from "./Use";

export function UseWrapper() {
  const names = getNames();

  return <Suspense fallback={<p>⌛Downloading names...</p>}>
    <Use namesPromise={names} />
  </Suspense>;
}