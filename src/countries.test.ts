import { getCountryNames, getCountryObjs, isoLookup } from './countries';

describe('country data', () => {
  test('correctly returns a list of country names', () => {
    const names = getCountryNames();

    expect(names[0]).toEqual('Afghanistan');
    expect(names[names.length-1]).toEqual('Zimbabwe');
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
    expect(objects[objects.length-1]).toEqual(lastObj);
  })
})
