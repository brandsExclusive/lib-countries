import { countries, Country } from "./countries";

/*
 * Return a list of country names
 */
export function getCountries(): string[] {
  return Object.values(countries).map((c) => c.countryName)
}

export function getCountryObjs(): Country[] {
  return Object.values(countries)
}

export function isoLookup(key: string): Country | undefined {
  return countries[key]
}
