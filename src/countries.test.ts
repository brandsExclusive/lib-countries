import { getCountryNames, getCountryObjs, isoLookup } from './countries';

describe('country data', () => {
  test('correctly returns a list of country names', () => {
    const names = getCountryNames();

    expect(names[0]).toEqual('Afghanistan');
    expect(names[names.length - 1]).toEqual('Zimbabwe');
  })

  test('ISO lookup returns the correct country object', () => {
    const result = isoLookup('AU')

    const expected = {
      countryName: 'Australia',
      iso2: 'AU',
      phonePrefix: '61',
      sizeOfNSN: { min: 9, max: 9 }
    };

    expect(result).toEqual(expected);
  })

  test('correctly returns a list of country objects', () => {
    const objects = getCountryObjs();

    const firstObj = {
      countryName: 'Afghanistan',
      officialName: '‫افغانستان‬‎',
      iso2: 'AF',
      phonePrefix: '93',
      sizeOfNSN: { min: 9, max: 9 }
    };

    const lastObj = {
      countryName: 'Zimbabwe',
      iso2: 'ZW',
      phonePrefix: '263',
      sizeOfNSN: { min: 9, max: 9 }
    };

    expect(objects[0]).toEqual(firstObj);
    expect(objects[objects.length - 1]).toEqual(lastObj);
  })

  test('isoLookup returns correct country object for all ISO codes', () => {
    const countries = getCountryObjs();
    const isoCodes = countries.map(country => country.iso2);

    isoCodes.forEach(isoCode => {
      const expectedCountry = countries.find(country => country.iso2 === isoCode);
      const result = isoLookup(isoCode);

      expect(result).toEqual(expectedCountry);
    });
  });


  test('All country names are unique', () => {
    const names = getCountryNames();
    const uniqueNames = new Set(names);
    expect(uniqueNames.size).toEqual(names.length);
  });

  test('All ISO codes are unique and are two uppercase letters', () => {
    const countries = getCountryObjs();
    const isoCodes = countries.map(country => country.iso2);
    const uniqueIsoCodes = new Set(isoCodes);

    expect(uniqueIsoCodes.size).toEqual(isoCodes.length);
    isoCodes.forEach(isoCode => {
      expect(isoCode).toMatch(/^[A-Z]{2}$/);
    });
  });

  test('isoLookup returns undefined for invalid ISO codes', () => {
    expect(isoLookup('INVALID')).toBeUndefined();
    expect(isoLookup('')).toBeUndefined();
    expect(isoLookup('ZZ')).toBeUndefined();
  });
})
