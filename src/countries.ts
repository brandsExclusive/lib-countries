export interface Country {
  countryName: string,
  officialName?: string,
  iso2: string,
  phonePrefix: string
  sizeOfNSN: { min: number, max: number }
}

interface CountryMap {
  [isoKey: string]: Country
}

/*
 * Return a list of country names
 * @deprecated
 */
export function getCountries(): string[] {
  return Object.values(countries).map((c) => c.countryName)
}

export function getCountryNames(): string[] {
  return Object.values(countries).map((c) => c.countryName)
}

export function getCountryObjs(): Country[] {
  return Object.values(countries)
}

export function isoLookup(key: string): Country | undefined {
  return countries[key]
}

/*
 * Table of data extracted from:
 * https://en.wikipedia.org/wiki/List_of_mobile_telephone_prefixes_by_country
 *
 * See "Size of NSN" column.
 */
const countries: CountryMap = {
  AF: {
    countryName: 'Afghanistan',
    officialName: '‫افغانستان‬‎',
    iso2: 'AF',
    phonePrefix: '93',
    sizeOfNSN: { min: 9, max: 9 }
  },
  AX: {
    countryName: 'Åland Islands',
    iso2: 'AX',
    phonePrefix: '358',
    sizeOfNSN: { min: 9, max: 9 }
  },
  AL: {
    countryName: 'Albania',
    officialName: 'Shqipëri',
    iso2: 'AL',
    phonePrefix: '355',
    sizeOfNSN: { min: 3, max: 9 }
  },
  DZ: {
    countryName: 'Algeria',
    officialName: '‫الجزائر‬‎',
    iso2: 'DZ',
    phonePrefix: '213',
    sizeOfNSN: { min: 9, max: 9 }
  },
  AS: {
    countryName: 'American Samoa',
    iso2: 'AS',
    phonePrefix: '1684',
    sizeOfNSN: { min: 10, max: 10 }
  },
  AD: {
    countryName: 'Andorra',
    iso2: 'AD',
    phonePrefix: '376',
    sizeOfNSN: { min: 6, max: 9 } // http://www.wtng.info/wtng-376-ad.html
  },
  AO: {
    countryName: 'Angola',
    iso2: 'AO',
    phonePrefix: '244',
    sizeOfNSN: { min: 9, max: 9 }
  },
  AI: {
    countryName: 'Anguilla',
    iso2: 'AI',
    phonePrefix: '1264',
    sizeOfNSN: { min: 10, max: 10 }
  },
  AQ: {
    countryName: 'Antarctica',
    iso2: 'AQ',
    phonePrefix: '672',
    sizeOfNSN: { min: 7, max: 15 } // http://www.country-dialing-codes.net/Antarctica/
  },
  AG: {
    countryName: 'Antigua and Barbuda',
    iso2: 'AG',
    phonePrefix: '1268',
    sizeOfNSN: { min: 10, max: 10 }
  },
  AR: {
    countryName: 'Argentina',
    iso2: 'AR',
    phonePrefix: '54',
    sizeOfNSN: { min: 10, max: 10 }
  },
  AM: {
    countryName: 'Armenia',
    officialName: 'Հայաստան',
    iso2: 'AM',
    phonePrefix: '374',
    sizeOfNSN: { min: 10, max: 10 }
  },
  AW: {
    countryName: 'Aruba',
    iso2: 'AW',
    phonePrefix: '297',
    sizeOfNSN: { min: 7, max: 7 }
  },
  AU: {
    countryName: 'Australia',
    iso2: 'AU',
    phonePrefix: '61',
    sizeOfNSN: { min: 9, max: 9 }
  },
  AT: {
    countryName: 'Austria',
    officialName: 'Österreich',
    iso2: 'AT',
    phonePrefix: '43',
    sizeOfNSN: { min: 10, max: 11 }
  },
  AZ: {
    countryName: 'Azerbaijan',
    officialName: 'Azərbaycan',
    iso2: 'AZ',
    phonePrefix: '994',
    sizeOfNSN: { min: 9, max: 9 }
  },
  BS: {
    countryName: 'Bahamas',
    iso2: 'BS',
    phonePrefix: '1242',
    sizeOfNSN: { min: 10, max: 10 }
  },
  BH: {
    countryName: 'Bahrain',
    officialName: '‫البحرين‬‎',
    iso2: 'BH',
    phonePrefix: '973',
    sizeOfNSN: { min: 8, max: 8 }
  },
  BD: {
    countryName: 'Bangladesh',
    officialName: 'বাংলাদেশ',
    iso2: 'BD',
    phonePrefix: '880',
    sizeOfNSN: { min: 10, max: 10 }
  },
  BB: {
    countryName: 'Barbados',
    iso2: 'BB',
    phonePrefix: '1246',
    sizeOfNSN: { min: 10, max: 10 }
  },
  BY: {
    countryName: 'Belarus',
    officialName: 'Беларусь',
    iso2: 'BY',
    phonePrefix: '375',
    sizeOfNSN: { min: 9, max: 9 }
  },
  BE: {
    countryName: 'Belgium',
    officialName: 'België',
    iso2: 'BE',
    phonePrefix: '32',
    sizeOfNSN: { min: 9, max: 9 }
  },
  BZ: {
    countryName: 'Belize',
    iso2: 'BZ',
    phonePrefix: '501',
    sizeOfNSN: { min: 10, max: 10 }
  },
  BJ: {
    countryName: 'Benin',
    officialName: 'Bénin',
    iso2: 'BJ',
    phonePrefix: '229',
    sizeOfNSN: { min: 9, max: 9 }
  },
  BM: {
    countryName: 'Bermuda',
    iso2: 'BM',
    phonePrefix: '1441',
    sizeOfNSN: { min: 10, max: 10 }
  },
  BT: {
    countryName: 'Bhutan',
    officialName: 'འབྲུག',
    iso2: 'BT',
    phonePrefix: '975',
    sizeOfNSN: { min: 7, max: 7 }
  },
  BO: {
    countryName: 'Bolivia',
    iso2: 'BO',
    phonePrefix: '591',
    sizeOfNSN: { min: 8, max: 8 }
  },
  BA: {
    countryName: 'Bosnia and Herzegovina',
    officialName: 'Босна и Херцеговина',
    iso2: 'BA',
    phonePrefix: '387',
    sizeOfNSN: { min: 8, max: 8 }
  },
  BW: {
    countryName: 'Botswana',
    iso2: 'BW',
    phonePrefix: '267',
    sizeOfNSN: { min: 7, max: 7 }
  },
  BV: {
    countryName: 'Bouvet Island',
    iso2: 'BV',
    phonePrefix: '47',
    sizeOfNSN: { min: 7, max: 8 } // http://www.country-dialing-codes.net/BVT/
  },
  BR: {
    countryName: 'Brazil',
    officialName: 'Brasil',
    iso2: 'BR',
    phonePrefix: '55',
    sizeOfNSN: { min: 11, max: 11 }
  },
  IO: {
    countryName: 'British Indian Ocean Territory',
    iso2: 'IO',
    phonePrefix: '246',
    sizeOfNSN: { min: 7, max: 7 }
  },
  VG: {
    countryName: 'British Virgin Islands',
    iso2: 'VG',
    phonePrefix: '1284',
    sizeOfNSN: { min: 10, max: 10 }
  },
  BN: {
    countryName: 'Brunei',
    iso2: 'BN',
    phonePrefix: '673',
    sizeOfNSN: { min: 7, max: 7 }
  },
  BG: {
    countryName: 'Bulgaria',
    officialName: 'България',
    iso2: 'BG',
    phonePrefix: '359',
    sizeOfNSN: { min: 9, max: 9 }
  },
  BF: {
    countryName: 'Burkina Faso',
    iso2: 'BF',
    phonePrefix: '226',
    sizeOfNSN: { min: 8, max: 8 }
  },
  BI: {
    countryName: 'Burundi',
    officialName: 'Uburundi',
    iso2: 'BI',
    phonePrefix: '257',
    sizeOfNSN: { min: 8, max: 8 }
  },
  KH: {
    countryName: 'Cambodia',
    officialName: 'កម្ពុជា',
    iso2: 'KH',
    phonePrefix: '855',
    sizeOfNSN: { min: 9, max: 9 }
  },
  CM: {
    countryName: 'Cameroon',
    officialName: 'Cameroun',
    iso2: 'CM',
    phonePrefix: '237',
    sizeOfNSN: { min: 9, max: 9 }
  },
  CA: {
    countryName: 'Canada',
    iso2: 'CA',
    phonePrefix: '1',
    sizeOfNSN: { min: 10, max: 10 }
  },
  CV: {
    countryName: 'Cape Verde',
    officialName: 'Kabu Verdi',
    iso2: 'CV',
    phonePrefix: '238',
    sizeOfNSN: { min: 7, max: 7 }
  },
  BQ: {
    countryName: 'Caribbean Netherlands',
    iso2: 'BQ',
    phonePrefix: '599',
    sizeOfNSN: { min: 7, max: 9 }
  },
  KY: {
    countryName: 'Cayman Islands',
    iso2: 'KY',
    phonePrefix: '1345',
    sizeOfNSN: { min: 10, max: 10 }
  },
  CF: {
    countryName: 'Central African Republic',
    officialName: 'République centrafricaine',
    iso2: 'CF',
    phonePrefix: '236',
    sizeOfNSN: { min: 8, max: 8 }
  },
  TD: {
    countryName: 'Chad',
    officialName: 'Tchad',
    iso2: 'TD',
    phonePrefix: '235',
    sizeOfNSN: { min: 8, max: 8 }
  },
  CL: {
    countryName: 'Chile',
    iso2: 'CL',
    phonePrefix: '56',
    sizeOfNSN: { min: 9, max: 9 }
  },
  CN: {
    countryName: 'China',
    officialName: '中国',
    iso2: 'CN',
    phonePrefix: '86',
    sizeOfNSN: { min: 11, max: 13 }
  },
  CX: {
    countryName: 'Christmas Island',
    iso2: 'CX',
    phonePrefix: '61',
    sizeOfNSN: { min: 9, max: 9 }
  },
  CC: {
    countryName: 'Cocos (Keeling) Islands',
    iso2: 'CC',
    phonePrefix: '61',
    sizeOfNSN: { min: 9, max: 9 }
  },
  CO: {
    countryName: 'Colombia',
    iso2: 'CO',
    phonePrefix: '57',
    sizeOfNSN: { min: 10, max: 10 }
  },
  KM: {
    countryName: 'Comoros',
    officialName: '‫جزر القمر‬‎',
    iso2: 'KM',
    phonePrefix: '269',
    sizeOfNSN: { min: 7, max: 7 }
  },
  CD: {
    countryName: 'Congo (DRC)',
    officialName: 'Jamhuri ya Kidemokrasia ya Kongo',
    iso2: 'CD',
    phonePrefix: '242',
    sizeOfNSN: { min: 9, max: 9 }
  },
  CG: {
    countryName: 'Congo (Republic)',
    officialName: 'Congo-Brazzaville',
    iso2: 'CG',
    phonePrefix: '243',
    sizeOfNSN: { min: 9, max: 9 }
  },
  CK: {
    countryName: 'Cook Islands',
    iso2: 'CK',
    phonePrefix: '682',
    sizeOfNSN: { min: 5, max: 5 }
  },
  CR: {
    countryName: 'Costa Rica',
    iso2: 'CR',
    phonePrefix: '506',
    sizeOfNSN: { min: 8, max: 8 }
  },
  CI: {
    countryName: 'Côte d’Ivoire',
    iso2: 'CI',
    phonePrefix: '225',
    sizeOfNSN: { min: 10, max: 10 }
  },
  HR: {
    countryName: 'Croatia',
    officialName: 'Hrvatska',
    iso2: 'HR',
    phonePrefix: '385',
    sizeOfNSN: { min: 9, max: 9 }
  },
  CU: {
    countryName: 'Cuba',
    iso2: 'CU',
    phonePrefix: '53',
    sizeOfNSN: { min: 6, max: 8 }
  },
  CW: {
    countryName: 'Curaçao',
    iso2: 'CW',
    phonePrefix: '599',
    sizeOfNSN: { min: 6, max: 7 } // http://www.wtng.info/wtng-599-an.html
  },
  CY: {
    countryName: 'Cyprus',
    officialName: 'Κύπρος',
    iso2: 'CY',
    phonePrefix: '357',
    sizeOfNSN: { min: 8, max: 8 }
  },
  CZ: {
    countryName: 'Czech Republic',
    officialName: 'Česká republika',
    iso2: 'CZ',
    phonePrefix: '420',
    sizeOfNSN: { min: 9, max: 9 }
  },
  DK: {
    countryName: 'Denmark',
    officialName: 'Danmark',
    iso2: 'DK',
    phonePrefix: '45',
    sizeOfNSN: { min: 8, max: 8 }
  },
  DJ: {
    countryName: 'Djibouti',
    iso2: 'DJ',
    phonePrefix: '253',
    sizeOfNSN: { min: 8, max: 8 }
  },
  DM: {
    countryName: 'Dominica',
    iso2: 'DM',
    phonePrefix: '1767',
    sizeOfNSN: { min: 10, max: 10 }
  },
  DO: {
    countryName: 'Dominican Republic',
    officialName: 'República Dominicana',
    iso2: 'DO',
    phonePrefix: '1',
    sizeOfNSN: { min: 10, max: 10 }
  },
  EC: {
    countryName: 'Ecuador',
    iso2: 'EC',
    phonePrefix: '593',
    sizeOfNSN: { min: 9, max: 9 }
  },
  EG: {
    countryName: 'Egypt',
    officialName: '‫مصر‬‎',
    iso2: 'EG',
    phonePrefix: '20',
    sizeOfNSN: { min: 10, max: 10 }
  },
  SV: {
    countryName: 'El Salvador',
    iso2: 'SV',
    phonePrefix: '503',
    sizeOfNSN: { min: 8, max: 8 }
  },
  GQ: {
    countryName: 'Equatorial Guinea',
    officialName: 'Guinea Ecuatorial',
    iso2: 'GQ',
    phonePrefix: '240',
    sizeOfNSN: { min: 9, max: 9 }
  },
  ER: {
    countryName: 'Eritrea',
    iso2: 'ER',
    phonePrefix: '291',
    sizeOfNSN: { min: 7, max: 7 }
  },
  EE: {
    countryName: 'Estonia',
    officialName: 'Eesti',
    iso2: 'EE',
    phonePrefix: '372',
    sizeOfNSN: { min: 7, max: 12 }
  },
  ET: {
    countryName: 'Ethiopia',
    iso2: 'ET',
    phonePrefix: '251',
    sizeOfNSN: { min: 9, max: 9 }
  },
  FK: {
    countryName: 'Falkland Islands',
    officialName: 'Islas Malvinas',
    iso2: 'FK',
    phonePrefix: '500',
    sizeOfNSN: { min: 8, max: 8 }
  },
  FO: {
    countryName: 'Faroe Islands',
    officialName: 'Føroyar',
    iso2: 'FO',
    phonePrefix: '298',
    sizeOfNSN: { min: 5, max: 5 }
  },
  FJ: {
    countryName: 'Fiji',
    iso2: 'FJ',
    phonePrefix: '679',
    sizeOfNSN: { min: 7, max: 7 }
  },
  FI: {
    countryName: 'Finland',
    officialName: 'Suomi',
    iso2: 'FI',
    phonePrefix: '358',
    sizeOfNSN: { min: 5, max: 12 }
  },
  FR: {
    countryName: 'France',
    iso2: 'FR',
    phonePrefix: '33',
    sizeOfNSN: { min: 9, max: 9 }
  },
  GF: {
    countryName: 'French Guiana',
    officialName: 'Guyane française',
    iso2: 'GF',
    phonePrefix: '594',
    sizeOfNSN: { min: 9, max: 12 }
  },
  PF: {
    countryName: 'French Polynesia',
    officialName: 'Polynésie française',
    iso2: 'PF',
    phonePrefix: '689',
    sizeOfNSN: { min: 6, max: 6 }
  },
  TF: {
    countryName: 'French Southern and Antarctic Lands',
    iso2: 'TF',
    phonePrefix: '262',
    sizeOfNSN: { min: 7, max: 15 } // http://www.country-dialing-codes.net/French-Southern-Territories/
  },
  GA: {
    countryName: 'Gabon',
    iso2: 'GA',
    phonePrefix: '241',
    sizeOfNSN: { min: 7, max: 7 }
  },
  GM: {
    countryName: 'Gambia',
    iso2: 'GM',
    phonePrefix: '220',
    sizeOfNSN: { min: 7, max: 7 }
  },
  GE: {
    countryName: 'Georgia',
    officialName: 'საქართველო',
    iso2: 'GE',
    phonePrefix: '995',
    sizeOfNSN: { min: 9, max: 9 }
  },
  DE: {
    countryName: 'Germany',
    officialName: 'Deutschland',
    iso2: 'DE',
    phonePrefix: '49',
    sizeOfNSN: { min: 11, max: 11 }
  },
  GH: {
    countryName: 'Ghana',
    officialName: 'Gaana',
    iso2: 'GH',
    phonePrefix: '233',
    sizeOfNSN: { min: 9, max: 9 }
  },
  GI: {
    countryName: 'Gibraltar',
    iso2: 'GI',
    phonePrefix: '350',
    sizeOfNSN: { min: 8, max: 8 }
  },
  GR: {
    countryName: 'Greece',
    officialName: 'Ελλάδα',
    iso2: 'GR',
    phonePrefix: '30',
    sizeOfNSN: { min: 10, max: 10 }
  },
  GL: {
    countryName: 'Greenland',
    officialName: 'Kalaallit Nunaat',
    iso2: 'GL',
    phonePrefix: '299',
    sizeOfNSN: { min: 6, max: 6 }
  },
  GD: {
    countryName: 'Grenada',
    iso2: 'GD',
    phonePrefix: '1473',
    sizeOfNSN: { min: 10, max: 10 }
  },
  GP: {
    countryName: 'Guadeloupe',
    iso2: 'GP',
    phonePrefix: '590',
    sizeOfNSN: { min: 9, max: 12 }
  },
  GU: {
    countryName: 'Guam',
    iso2: 'GU',
    phonePrefix: '1671',
    sizeOfNSN: { min: 10, max: 10 }
  },
  GT: {
    countryName: 'Guatemala',
    iso2: 'GT',
    phonePrefix: '502',
    sizeOfNSN: { min: 8, max: 8 }
  },
  GG: {
    countryName: 'Guernsey',
    iso2: 'GG',
    phonePrefix: '44',
    sizeOfNSN: { min: 10, max: 10 }
  },
  GN: {
    countryName: 'Guinea',
    officialName: 'Guinée',
    iso2: 'GN',
    phonePrefix: '224',
    sizeOfNSN: { min: 10, max: 10 }
  },
  GW: {
    countryName: 'Guinea-Bissau',
    officialName: 'Guiné Bissau',
    iso2: 'GW',
    phonePrefix: '245',
    sizeOfNSN: { min: 12, max: 12 }
  },
  GY: {
    countryName: 'Guyana',
    iso2: 'GY',
    phonePrefix: '592',
    sizeOfNSN: { min: 7, max: 7 }
  },
  HT: {
    countryName: 'Haiti',
    iso2: 'HT',
    phonePrefix: '509',
    sizeOfNSN: { min: 8, max: 8 }
  },
  HM: {
    countryName: 'Heard Island and McDonald Islands',
    iso2: 'HM',
    phonePrefix: '672',
    sizeOfNSN: { min: 6, max: 7 } // http://www.country-dialing-codes.net/HMD/
  },
  HN: {
    countryName: 'Honduras',
    iso2: 'HN',
    phonePrefix: '504',
    sizeOfNSN: { min: 8, max: 8 }
  },
  HK: {
    countryName: 'Hong Kong',
    officialName: '香港',
    iso2: 'HK',
    phonePrefix: '852',
    sizeOfNSN: { min: 8, max: 8 }
  },
  HU: {
    countryName: 'Hungary',
    officialName: 'Magyarország',
    iso2: 'HU',
    phonePrefix: '36',
    sizeOfNSN: { min: 9, max: 9 }
  },
  IS: {
    countryName: 'Iceland',
    officialName: 'Ísland',
    iso2: 'IS',
    phonePrefix: '354',
    sizeOfNSN: { min: 7, max: 7 }
  },
  IN: {
    countryName: 'India',
    officialName: 'भारत',
    iso2: 'IN',
    phonePrefix: '91',
    sizeOfNSN: { min: 10, max: 10 }
  },
  ID: {
    countryName: 'Indonesia',
    iso2: 'ID',
    phonePrefix: '62',
    sizeOfNSN: { min: 9, max: 11 }
  },
  IR: {
    countryName: 'Iran',
    officialName: '‫ایران‬‎',
    iso2: 'IR',
    phonePrefix: '98',
    sizeOfNSN: { min: 10, max: 10 }
  },
  IQ: {
    countryName: 'Iraq',
    officialName: '‫العراق‬‎',
    iso2: 'IQ',
    phonePrefix: '964',
    sizeOfNSN: { min: 6, max: 10 }
  },
  IE: {
    countryName: 'Ireland',
    iso2: 'IE',
    phonePrefix: '353',
    sizeOfNSN: { min: 9, max: 9 }
  },
  IM: {
    countryName: 'Isle of Man',
    iso2: 'IM',
    phonePrefix: '44',
    sizeOfNSN: { min: 10, max: 10 }
  },
  IL: {
    countryName: 'Israel',
    officialName: '‫ישראל‬‎',
    iso2: 'IL',
    phonePrefix: '972',
    sizeOfNSN: { min: 9, max: 9 }
  },
  IT: {
    countryName: 'Italy',
    officialName: 'Italia',
    iso2: 'IT',
    phonePrefix: '39',
    sizeOfNSN: { min: 9, max: 13 }
  },
  JM: {
    countryName: 'Jamaica',
    iso2: 'JM',
    phonePrefix: '1876',
    sizeOfNSN: { min: 10, max: 10 }
  },
  JP: {
    countryName: 'Japan',
    officialName: '日本',
    iso2: 'JP',
    phonePrefix: '81',
    sizeOfNSN: { min: 10, max: 10 }
  },
  JE: {
    countryName: 'Jersey',
    iso2: 'JE',
    phonePrefix: '44',
    sizeOfNSN: { min: 10, max: 10 }
  },
  JO: {
    countryName: 'Jordan',
    officialName: '‫الأردن‬‎',
    iso2: 'JO',
    phonePrefix: '962',
    sizeOfNSN: { min: 9, max: 9 }
  },
  KZ: {
    countryName: 'Kazakhstan',
    officialName: 'Казахстан',
    iso2: 'KZ',
    phonePrefix: '7',
    sizeOfNSN: { min: 10, max: 10 }
  },
  KE: {
    countryName: 'Kenya',
    iso2: 'KE',
    phonePrefix: '254',
    sizeOfNSN: { min: 10, max: 10 }
  },
  KI: {
    countryName: 'Kiribati',
    iso2: 'KI',
    phonePrefix: '686',
    sizeOfNSN: { min: 8, max: 8 }
  },
  XK: {
    countryName: 'Kosovo',
    iso2: 'XK',
    phonePrefix: '383',
    sizeOfNSN: { min: 8, max: 8 }
  },
  KW: {
    countryName: 'Kuwait',
    officialName: '‫الكويت‬‎',
    iso2: 'KW',
    phonePrefix: '965',
    sizeOfNSN: { min: 8, max: 8 }
  },
  KG: {
    countryName: 'Kyrgyzstan',
    officialName: 'Кыргызстан',
    iso2: 'KG',
    phonePrefix: '996',
    sizeOfNSN: { min: 9, max: 9 }
  },
  LA: {
    countryName: 'Laos',
    officialName: 'ລາວ',
    iso2: 'LA',
    phonePrefix: '856',
    sizeOfNSN: { min: 6, max: 12 }
  },
  LV: {
    countryName: 'Latvia',
    officialName: 'Latvija',
    iso2: 'LV',
    phonePrefix: '371',
    sizeOfNSN: { min: 8, max: 8 }
  },
  LB: {
    countryName: 'Lebanon',
    officialName: '‫لبنان‬‎',
    iso2: 'LB',
    phonePrefix: '961',
    sizeOfNSN: { min: 7, max: 8 }
  },
  LS: {
    countryName: 'Lesotho',
    iso2: 'LS',
    phonePrefix: '266',
    sizeOfNSN: { min: 8, max: 8 }
  },
  LR: {
    countryName: 'Liberia',
    iso2: 'LR',
    phonePrefix: '231',
    sizeOfNSN: { min: 7, max: 7 }
  },
  LY: {
    countryName: 'Libya',
    officialName: '‫ليبيا‬‎',
    iso2: 'LY',
    phonePrefix: '218',
    sizeOfNSN: { min: 10, max: 10 }
  },
  LI: {
    countryName: 'Liechtenstein',
    iso2: 'LI',
    phonePrefix: '423',
    sizeOfNSN: { min: 7, max: 9 }
  },
  LT: {
    countryName: 'Lithuania',
    officialName: 'Lietuva',
    iso2: 'LT',
    phonePrefix: '370',
    sizeOfNSN: { min: 8, max: 8 }
  },
  LU: {
    countryName: 'Luxembourg',
    iso2: 'LU',
    phonePrefix: '352',
    sizeOfNSN: { min: 9, max: 9 }
  },
  MO: {
    countryName: 'Macau',
    officialName: '澳門',
    iso2: 'MO',
    phonePrefix: '853',
    sizeOfNSN: { min: 8, max: 8 }
  },
  MK: {
    countryName: 'Republic of North Macedonia',
    officialName: 'Република Северна Македонија',
    iso2: 'MK',
    phonePrefix: '389',
    sizeOfNSN: { min: 8, max: 8 }
  },
  MG: {
    countryName: 'Madagascar',
    officialName: 'Madagasikara',
    iso2: 'MG',
    phonePrefix: '261',
    sizeOfNSN: { min: 7, max: 7 }
  },
  MW: {
    countryName: 'Malawi',
    iso2: 'MW',
    phonePrefix: '265',
    sizeOfNSN: { min: 7, max: 9 }
  },
  MY: {
    countryName: 'Malaysia',
    iso2: 'MY',
    phonePrefix: '60',
    sizeOfNSN: { min: 7, max: 8 }
  },
  MV: {
    countryName: 'Maldives',
    iso2: 'MV',
    phonePrefix: '960',
    sizeOfNSN: { min: 7, max: 7 }
  },
  ML: {
    countryName: 'Mali',
    iso2: 'ML',
    phonePrefix: '223',
    sizeOfNSN: { min: 8, max: 8 }
  },
  MT: {
    countryName: 'Malta',
    iso2: 'MT',
    phonePrefix: '356',
    sizeOfNSN: { min: 8, max: 8 }
  },
  MH: {
    countryName: 'Marshall Islands',
    iso2: 'MH',
    phonePrefix: '692',
    sizeOfNSN: { min: 7, max: 7 }
  },
  MQ: {
    countryName: 'Martinique',
    iso2: 'MQ',
    phonePrefix: '596',
    sizeOfNSN: { min: 9, max: 12 }
  },
  MR: {
    countryName: 'Mauritania',
    officialName: '‫موريتانيا‬‎',
    iso2: 'MR',
    phonePrefix: '222',
    sizeOfNSN: { min: 8, max: 8 }
  },
  MU: {
    countryName: 'Mauritius',
    officialName: 'Moris',
    iso2: 'MU',
    phonePrefix: '230',
    sizeOfNSN: { min: 8, max: 8 }
  },
  Mayotte: {
    countryName: 'Mayotte',
    iso2: 'YT',
    phonePrefix: '262',
    sizeOfNSN: { min: 10, max: 10 }
  },
  MX: {
    countryName: 'Mexico',
    officialName: 'México',
    iso2: 'MX',
    phonePrefix: '52',
    sizeOfNSN: { min: 10, max: 10 }
  },
  FM: {
    countryName: 'Micronesia',
    iso2: 'FM',
    phonePrefix: '691',
    sizeOfNSN: { min: 7, max: 7 }
  },
  MD: {
    countryName: 'Moldova',
    officialName: 'Republica Moldova',
    iso2: 'MD',
    phonePrefix: '373',
    sizeOfNSN: { min: 8, max: 8 }
  },
  MC: {
    countryName: 'Monaco',
    officialName: 'Principauté de Monaco',
    iso2: 'MC',
    phonePrefix: '377',
    sizeOfNSN: { min: 8, max: 8 }
  },
  MN: {
    countryName: 'Mongolia',
    officialName: 'Монгол',
    iso2: 'MN',
    phonePrefix: '976',
    sizeOfNSN: { min: 8, max: 8 }
  },
  ME: {
    countryName: 'Montenegro',
    officialName: 'Crna Gora',
    iso2: 'ME',
    phonePrefix: '382',
    sizeOfNSN: { min: 8, max: 8 }
  },
  MS: {
    countryName: 'Montserrat',
    iso2: 'MS',
    phonePrefix: '1664',
    sizeOfNSN: { min: 10, max: 10 }
  },
  MA: {
    countryName: 'Morocco',
    officialName: '‫المغرب‬‎',
    iso2: 'MA',
    phonePrefix: '212',
    sizeOfNSN: { min: 9, max: 9 }
  },
  MZ: {
    countryName: 'Mozambique',
    officialName: 'Moçambique',
    iso2: 'MZ',
    phonePrefix: '258',
    sizeOfNSN: { min: 12, max: 12 }
  },
  MM: {
    countryName: 'Myanmar (Burma)',
    officialName: 'မြန်မာ',
    iso2: 'MM',
    phonePrefix: '95',
    sizeOfNSN: { min: 8, max: 10 }
  },
  NA: {
    countryName: 'Namibia',
    officialName: 'Namibië',
    iso2: 'NA',
    phonePrefix: '264',
    sizeOfNSN: { min: 8, max: 10 }
  },
  NR: {
    countryName: 'Nauru',
    iso2: 'NR',
    phonePrefix: '674',
    sizeOfNSN: { min: 7, max: 7 }
  },
  NP: {
    countryName: 'Nepal',
    officialName: 'नेपाल',
    iso2: 'NP',
    phonePrefix: '977',
    sizeOfNSN: { min: 10, max: 10 }
  },
  NL: {
    countryName: 'Netherlands',
    officialName: 'Nederland',
    iso2: 'NL',
    phonePrefix: '31',
    sizeOfNSN: { min: 9, max: 9 }
  },
  NC: {
    countryName: 'New Caledonia',
    officialName: 'Nouvelle-Calédonie',
    iso2: 'NC',
    phonePrefix: '687',
    sizeOfNSN: { min: 6, max: 6 }
  },
  NZ: {
    countryName: 'New Zealand',
    iso2: 'NZ',
    phonePrefix: '64',
    sizeOfNSN: { min: 8, max: 10 }
  },
  NI: {
    countryName: 'Nicaragua',
    iso2: 'NI',
    phonePrefix: '505',
    sizeOfNSN: { min: 8, max: 8 }
  },
  NE: {
    countryName: 'Niger',
    officialName: 'Nijar',
    iso2: 'NE',
    phonePrefix: '227',
    sizeOfNSN: { min: 8, max: 8 }
  },
  NG: {
    countryName: 'Nigeria',
    iso2: 'NG',
    phonePrefix: '234',
    sizeOfNSN: { min: 8, max: 8 }
  },
  NU: {
    countryName: 'Niue',
    iso2: 'NU',
    phonePrefix: '683',
    sizeOfNSN: { min: 4, max: 4 }
  },
  NF: {
    countryName: 'Norfolk Island',
    iso2: 'NF',
    phonePrefix: '672',
    sizeOfNSN: { min: 6, max: 6 }
  },
  KP: {
    countryName: 'North Korea',
    officialName: '조선 민주주의 인민 공화국',
    iso2: 'KP',
    phonePrefix: '850',
    sizeOfNSN: { min: 4, max: 13 }
  },
  MP: {
    countryName: 'Northern Mariana Islands',
    iso2: 'MP',
    phonePrefix: '1670',
    sizeOfNSN: { min: 10, max: 10 }
  },
  NO: {
    countryName: 'Norway',
    officialName: 'Norge',
    iso2: 'NO',
    phonePrefix: '47',
    sizeOfNSN: { min: 8, max: 8 }
  },
  OM: {
    countryName: 'Oman',
    officialName: '‫عُمان‬‎',
    iso2: 'OM',
    phonePrefix: '968',
    sizeOfNSN: { min: 8, max: 8 }
  },
  PK: {
    countryName: 'Pakistan',
    officialName: '‫پاکستان‬‎',
    iso2: 'PK',
    phonePrefix: '92',
    sizeOfNSN: { min: 10, max: 10 }
  },
  PW: {
    countryName: 'Palau',
    iso2: 'PW',
    phonePrefix: '680',
    sizeOfNSN: { min: 7, max: 7 }
  },
  PS: {
    countryName: 'Palestine',
    officialName: '‫فلسطين‬‎',
    iso2: 'PS',
    phonePrefix: '970',
    sizeOfNSN: { min: 9, max: 9 }
  },
  PA: {
    countryName: 'Panama',
    officialName: 'Panamá',
    iso2: 'PA',
    phonePrefix: '507',
    sizeOfNSN: { min: 8, max: 8 }
  },
  PG: {
    countryName: 'Papua New Guinea',
    iso2: 'PG',
    phonePrefix: '675',
    sizeOfNSN: { min: 7, max: 8 }
  },
  PY: {
    countryName: 'Paraguay',
    iso2: 'PY',
    phonePrefix: '595',
    sizeOfNSN: { min: 9, max: 9 }
  },
  PE: {
    countryName: 'Peru',
    officialName: 'Perú',
    iso2: 'PE',
    phonePrefix: '51',
    sizeOfNSN: { min: 9, max: 9 }
  },
  PH: {
    countryName: 'Philippines',
    iso2: 'PH',
    phonePrefix: '63',
    sizeOfNSN: { min: 10, max: 10 }
  },
  PN: {
    countryName: 'Pitcairn Islands',
    iso2: 'PN',
    phonePrefix: '64',
    sizeOfNSN: { min: 8, max: 8 }
  },
  PL: {
    countryName: 'Poland',
    officialName: 'Polska',
    iso2: 'PL',
    phonePrefix: '48',
    sizeOfNSN: { min: 9, max: 9 }
  },
  PT: {
    countryName: 'Portugal',
    iso2: 'PT',
    phonePrefix: '351',
    sizeOfNSN: { min: 9, max: 9 }
  },
  PR: {
    countryName: 'Puerto Rico',
    iso2: 'PR',
    phonePrefix: '1',
    sizeOfNSN: { min: 10, max: 10 }
  },
  QA: {
    countryName: 'Qatar',
    officialName: '‫قطر‬‎',
    iso2: 'QA',
    phonePrefix: '974',
    sizeOfNSN: { min: 8, max: 8 }
  },
  RE: {
    countryName: 'Réunion',
    officialName: 'La Réunion',
    iso2: 'RE',
    phonePrefix: '262',
    sizeOfNSN: { min: 9, max: 12 }
  },
  RO: {
    countryName: 'Romania',
    officialName: 'România',
    iso2: 'RO',
    phonePrefix: '40',
    sizeOfNSN: { min: 10, max: 10 }
  },
  RU: {
    countryName: 'Russia',
    officialName: 'Россия',
    iso2: 'RU',
    phonePrefix: '7',
    sizeOfNSN: { min: 10, max: 10 }
  },
  RW: {
    countryName: 'Rwanda',
    iso2: 'RW',
    phonePrefix: '250',
    sizeOfNSN: { min: 8, max: 9 }
  },
  BL: {
    countryName: 'Saint Barthélemy',
    officialName: 'Saint-Barthélemy',
    iso2: 'BL',
    phonePrefix: '590',
    sizeOfNSN: { min: 12, max: 12 }
  },
  SH: {
    countryName: 'Saint Helena',
    iso2: 'SH',
    phonePrefix: '290',
    sizeOfNSN: { min: 4, max: 4 }
  },
  KN: {
    countryName: 'Saint Kitts and Nevis',
    iso2: 'KN',
    phonePrefix: '1869',
    sizeOfNSN: { min: 10, max: 10 }
  },
  LC: {
    countryName: 'Saint Lucia',
    iso2: 'LC',
    phonePrefix: '1758',
    sizeOfNSN: { min: 10, max: 10 }
  },
  MF: {
    countryName: 'Collectivity of Saint Martin',
    officialName: 'Saint-Martin (partie française)',
    iso2: 'MF',
    phonePrefix: '590',
    sizeOfNSN: { min: 12, max: 12 }
  },
  PM: {
    countryName: 'Saint Pierre and Miquelon',
    officialName: 'Saint-Pierre-et-Miquelon',
    iso2: 'PM',
    phonePrefix: '508',
    sizeOfNSN: { min: 6, max: 6 } // https://www.globalcallforwarding.com/international-call-prefixes/
  },
  VC: {
    countryName: 'Saint Vincent and the Grenadines',
    iso2: 'VC',
    phonePrefix: '1784',
    sizeOfNSN: { min: 10, max: 10 }
  },
  WS: {
    countryName: 'Samoa',
    iso2: 'WS',
    phonePrefix: '685',
    sizeOfNSN: { min: 5, max: 5 }
  },
  SM: {
    countryName: 'San Marino',
    iso2: 'SM',
    phonePrefix: '378',
    sizeOfNSN: { min: 6, max: 10 }
  },
  ST: {
    countryName: 'São Tomé and Príncipe',
    officialName: 'São Tomé e Príncipe',
    iso2: 'ST',
    phonePrefix: '239',
    sizeOfNSN: { min: 7, max: 7 }
  },
  SA: {
    countryName: 'Saudi Arabia',
    officialName: '‫المملكة العربية السعودية‬‎',
    iso2: 'SA',
    phonePrefix: '966',
    sizeOfNSN: { min: 9, max: 9 }
  },
  SN: {
    countryName: 'Senegal',
    officialName: 'Sénégal',
    iso2: 'SN',
    phonePrefix: '221',
    sizeOfNSN: { min: 8, max: 8 }
  },
  RS: {
    countryName: 'Serbia',
    officialName: 'Србија',
    iso2: 'RS',
    phonePrefix: '381',
    sizeOfNSN: { min: 9, max: 9 }
  },
  SC: {
    countryName: 'Seychelles',
    iso2: 'SC',
    phonePrefix: '248',
    sizeOfNSN: { min: 7, max: 7 }
  },
  SL: {
    countryName: 'Sierra Leone',
    iso2: 'SL',
    phonePrefix: '232',
    sizeOfNSN: { min: 8, max: 8 }
  },
  SG: {
    countryName: 'Singapore',
    iso2: 'SG',
    phonePrefix: '65',
    sizeOfNSN: { min: 8, max: 8 }
  },
  SX: {
    countryName: 'Sint Maarten',
    iso2: 'SX',
    phonePrefix: '1721',
    sizeOfNSN: { min: 10, max: 10 }
  },
  SK: {
    countryName: 'Slovakia',
    officialName: 'Slovensko',
    iso2: 'SK',
    phonePrefix: '421',
    sizeOfNSN: { min: 9, max: 9 }
  },
  SI: {
    countryName: 'Slovenia',
    officialName: 'Slovenija',
    iso2: 'SI',
    phonePrefix: '386',
    sizeOfNSN: { min: 9, max: 9 }
  },
  SB: {
    countryName: 'Solomon Islands',
    iso2: 'SB',
    phonePrefix: '677',
    sizeOfNSN: { min: 7, max: 7 }
  },
  SO: {
    countryName: 'Somalia',
    officialName: 'Soomaaliya',
    iso2: 'SO',
    phonePrefix: '252',
    sizeOfNSN: { min: 7, max: 8 }
  },
  ZA: {
    countryName: 'South Africa',
    iso2: 'ZA',
    phonePrefix: '27',
    sizeOfNSN: { min: 9, max: 9 }
  },
  GS: {
    countryName: 'South Georgia and the South Sandwich Islands',
    iso2: 'GS',
    phonePrefix: '500',
    sizeOfNSN: { min: 5, max: 5 }
  },
  KR: {
    countryName: 'South Korea',
    officialName: '대한민국',
    iso2: 'KR',
    phonePrefix: '82',
    sizeOfNSN: { min: 9, max: 9 }
  },
  SS: {
    countryName: 'South Sudan',
    officialName: '‫جنوب السودان‬‎',
    iso2: 'SS',
    phonePrefix: '211',
    sizeOfNSN: { min: 7, max: 9 }
  },
  ES: {
    countryName: 'Spain',
    officialName: 'España',
    iso2: 'ES',
    phonePrefix: '34',
    sizeOfNSN: { min: 9, max: 9 }
  },
  LK: {
    countryName: 'Sri Lanka',
    officialName: 'ශ්‍රී ලංකාව',
    iso2: 'LK',
    phonePrefix: '94',
    sizeOfNSN: { min: 7, max: 7 }
  },
  SD: {
    countryName: 'Sudan',
    officialName: '‫السودان‬‎',
    iso2: 'SD',
    phonePrefix: '249',
    sizeOfNSN: { min: 7, max: 9 }
  },
  SR: {
    countryName: 'Suriname',
    iso2: 'SR',
    phonePrefix: '597',
    sizeOfNSN: { min: 6, max: 7 }
  },
  SJ: {
    countryName: 'Svalbard and Jan Mayen',
    iso2: 'SJ',
    phonePrefix: '47',
    sizeOfNSN: { min: 8, max: 8 }
  },
  SZ: {
    countryName: 'Swaziland',
    iso2: 'SZ',
    phonePrefix: '268',
    sizeOfNSN: { min: 8, max: 8 }
  },
  SE: {
    countryName: 'Sweden',
    officialName: 'Sverige',
    iso2: 'SE',
    phonePrefix: '46',
    sizeOfNSN: { min: 7, max: 7 }
  },
  CH: {
    countryName: 'Switzerland',
    officialName: 'Schweiz',
    iso2: 'CH',
    phonePrefix: '41',
    sizeOfNSN: { min: 9, max: 9 }
  },
  SY: {
    countryName: 'Syria',
    officialName: '‫سوريا‬‎',
    iso2: 'SY',
    phonePrefix: '963',
    sizeOfNSN: { min: 9, max: 9 }
  },
  TW: {
    countryName: 'Taiwan',
    officialName: '台灣',
    iso2: 'TW',
    phonePrefix: '886',
    sizeOfNSN: { min: 9, max: 9 }
  },
  TJ: {
    countryName: 'Tajikistan',
    iso2: 'TJ',
    phonePrefix: '992',
    sizeOfNSN: { min: 4, max: 9 }
  },
  TZ: {
    countryName: 'Tanzania',
    iso2: 'TZ',
    phonePrefix: '255',
    sizeOfNSN: { min: 9, max: 9 }
  },
  TH: {
    countryName: 'Thailand',
    officialName: 'ไทย',
    iso2: 'TH',
    phonePrefix: '66',
    sizeOfNSN: { min: 9, max: 9 }
  },
  TL: {
    countryName: 'Timor-Leste',
    iso2: 'TL',
    phonePrefix: '670',
    sizeOfNSN: { min: 8, max: 8 }
  },
  TG : {
    countryName: 'Togo',
    iso2: 'TG',
    phonePrefix: '228',
    sizeOfNSN: { min: 8, max: 8 }
  },
  TK: {
    countryName: 'Tokelau',
    iso2: 'TK',
    phonePrefix: '690',
    sizeOfNSN: { min: 5, max: 5 }
  },
  TO: {
    countryName: 'Tonga',
    iso2: 'TO',
    phonePrefix: '676',
    sizeOfNSN: { min: 5, max: 5 }
  },
  TT: {
    countryName: 'Trinidad and Tobago',
    iso2: 'TT',
    phonePrefix: '1868',
    sizeOfNSN: { min: 10, max: 10 }
  },
  TN: {
    countryName: 'Tunisia',
    officialName: '‫تونس‬‎',
    iso2: 'TN',
    phonePrefix: '216',
    sizeOfNSN: { min: 8, max: 8 }
  },
  TR: {
    countryName: 'Turkey',
    officialName: 'Türkiye',
    iso2: 'TR',
    phonePrefix: '90',
    sizeOfNSN: { min: 11, max: 11 }
  },
  TM: {
    countryName: 'Turkmenistan',
    iso2: 'TM',
    phonePrefix: '993',
    sizeOfNSN: { min: 5, max: 5 }
  },
  TC: {
    countryName: 'Turks and Caicos Islands',
    iso2: 'TC',
    phonePrefix: '1649',
    sizeOfNSN: { min: 10, max: 10 }
  },
  TV: {
    countryName: 'Tuvalu',
    iso2: 'TV',
    phonePrefix: '688',
    sizeOfNSN: { min: 5, max: 5 }
  },
  VI: {
    countryName: 'U.S. Virgin Islands',
    iso2: 'VI',
    phonePrefix: '1340',
    sizeOfNSN: { min: 10, max: 10 }
  },
  UG: {
    countryName: 'Uganda',
    iso2: 'UG',
    phonePrefix: '256',
    sizeOfNSN: { min: 9, max: 9 } // https://www.globalcallforwarding.com/international-call-prefixes/
  },
  UA: {
    countryName: 'Ukraine',
    officialName: 'Україна',
    iso2: 'UA',
    phonePrefix: '380',
    sizeOfNSN: { min: 9, max: 9 }
  },
  AE: {
    countryName: 'United Arab Emirates',
    officialName: '‫الإمارات العربية المتحدة‬‎',
    iso2: 'AE',
    phonePrefix: '971',
    sizeOfNSN: { min: 9, max: 9 }
  },
  GB: {
    countryName: 'United Kingdom',
    iso2: 'GB',
    phonePrefix: '44',
    sizeOfNSN: { min: 10, max: 10 }
  },
  US: {
    countryName: 'United States',
    iso2: 'US',
    phonePrefix: '1',
    sizeOfNSN: { min: 10, max: 10 }
  },
  UM: {
    countryName: 'United States Minor Outlying Islands',
    iso2: 'UM',
    phonePrefix: '1',
    sizeOfNSN: { min: 10, max: 10 }
  },
  UY: {
    countryName: 'Uruguay',
    iso2: 'UY',
    phonePrefix: '598',
    sizeOfNSN: { min: 8, max: 8 }
  },
  UZ: {
    countryName: 'Uzbekistan',
    officialName: 'Oʻzbekiston',
    iso2: 'UZ',
    phonePrefix: '998',
    sizeOfNSN: { min: 9, max: 9 }
  },
  VU: {
    countryName: 'Vanuatu',
    iso2: 'VU',
    phonePrefix: '678',
    sizeOfNSN: { min: 5, max: 5 }
  },
  VA: {
    countryName: 'Vatican City',
    officialName: 'Città del Vaticano',
    iso2: 'VA',
    phonePrefix: '39',
    sizeOfNSN: { min: 10, max: 10 }
  },
  VE: {
    countryName: 'Venezuela',
    iso2: 'VE',
    phonePrefix: '58',
    sizeOfNSN: { min: 7, max: 7 }
  },
  VN: {
    countryName: 'Vietnam',
    officialName: 'Việt Nam',
    iso2: 'VN',
    phonePrefix: '84',
    sizeOfNSN: { min: 9, max: 9 }
  },
  WF: {
    countryName: 'Wallis and Futuna',
    iso2: 'WF',
    phonePrefix: '681',
    sizeOfNSN: { min: 6, max: 6 }
  },
  EH: {
    countryName: 'Western Sahara',
    iso2: 'EH',
    phonePrefix: '212',
    sizeOfNSN: { min: 9, max: 9 }
  },
  YE: {
    countryName: 'Yemen',
    officialName: '‫اليمن‬‎',
    iso2: 'YE',
    phonePrefix: '967',
    sizeOfNSN: { min: 9, max: 9 }
  },
  ZM: {
    countryName: 'Zambia',
    iso2: 'ZM',
    phonePrefix: '260',
    sizeOfNSN: { min: 9, max: 9 }
  },
  ZW: {
    countryName: 'Zimbabwe',
    iso2: 'ZW',
    phonePrefix: '263',
    sizeOfNSN: { min: 9, max: 9 }
  }
}
