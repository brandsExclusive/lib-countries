import { getCountries } from "./";

function assert(desc: string, value?: any): void {
  if (!value) {
    throw new Error(`fail: ${desc}`);
  }

  console.log(`pass: ${desc}`);
}

function refute(desc: string, value?: any): void {
  if (value) {
    throw new Error(`fail: ${desc}`);
  }

  console.log(`pass: ${desc}`);
}

assert(
  "returns true if supported in region code",
  getCountries().length === 253,
);
