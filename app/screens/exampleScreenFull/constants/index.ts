type ArrItem = {
  id: number;
  pos: {
    lat: number;
    lon: number;
  };
  apartTariffs: {
    code: string;
    priceHour: number;
    priceDay: number;
    priceFewDays: number;
    hourAmount: number;
  }[];
  apartmentAccessType: {
    id: number;
    title: string;
    __typename: string;
  };
};

const arr: ArrItem[] = [
  {
    id: 4679,
    point: {
      lat: 56.368799,
      lon: 41.309864,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '50₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 50,
      },
      {
        code: 'per_3h',
        title: '40₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 40,
      },
      {
        code: 'sum',
        title: '50 ₽',
        hourAmount: 24,
        priceFewDays: 50,
      },
    ],
  },
  {
    id: 26,
    point: {
      lat: 48.456121206020725,
      lon: 135.09997681049825,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 28,
    point: {
      lat: 48.45609266047378,
      lon: 135.09969786076073,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 33,
    point: {
      lat: 48.4569308,
      lon: 135.1040283,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2900₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2900,
      },
      {
        code: 'per_3h',
        title: '2320₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2320,
      },
      {
        code: 'sum',
        title: '2900 ₽',
        hourAmount: 24,
        priceFewDays: 2900,
      },
    ],
  },
  {
    id: 41,
    point: {
      lat: 48.45840157389498,
      lon: 135.10395049999994,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2650₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2650,
      },
      {
        code: 'per_3h',
        title: '2120₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2120,
      },
      {
        code: 'sum',
        title: '2650 ₽',
        hourAmount: 24,
        priceFewDays: 2650,
      },
    ],
  },
  {
    id: 42,
    point: {
      lat: 48.4576247,
      lon: 135.1018515,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1800,
      },
      {
        code: 'per_3h',
        title: '1440₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1440,
      },
      {
        code: 'sum',
        title: '1800 ₽',
        hourAmount: 24,
        priceFewDays: 1800,
      },
    ],
  },
  {
    id: 54,
    point: {
      lat: 48.471672,
      lon: 135.070864,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2500,
      },
      {
        code: 'per_3h',
        title: '2000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2000,
      },
      {
        code: 'sum',
        title: '2500 ₽',
        hourAmount: 24,
        priceFewDays: 2500,
      },
    ],
  },
  {
    id: 59,
    point: {
      lat: 48.52435284107813,
      lon: 135.0249452790985,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '15000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 15000,
      },
      {
        code: 'per_3h',
        title: '12000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 12000,
      },
      {
        code: 'sum',
        title: '15000 ₽',
        hourAmount: 24,
        priceFewDays: 15000,
      },
    ],
  },
  {
    id: 79,
    point: {
      lat: 48.438244,
      lon: 135.130676,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1990₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1990,
      },
      {
        code: 'per_3h',
        title: '1592₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1592,
      },
      {
        code: 'sum',
        title: '1990 ₽',
        hourAmount: 24,
        priceFewDays: 1990,
      },
    ],
  },
  {
    id: 80,
    point: {
      lat: 48.475439,
      lon: 135.076148,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2125₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2125,
      },
      {
        code: 'per_3h',
        title: '1700₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1700,
      },
      {
        code: 'sum',
        title: '2125 ₽',
        hourAmount: 24,
        priceFewDays: 2125,
      },
    ],
  },
  {
    id: 89,
    point: {
      lat: 48.538492,
      lon: 135.044464,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3100₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3100,
      },
      {
        code: 'per_3h',
        title: '2480₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2480,
      },
      {
        code: 'sum',
        title: '3100 ₽',
        hourAmount: 24,
        priceFewDays: 3100,
      },
    ],
  },
  {
    id: 111,
    point: {
      lat: 48.493468,
      lon: 135.07233,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 112,
    point: {
      lat: 48.479954,
      lon: 135.075384,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 113,
    point: {
      lat: 48.45828739676939,
      lon: 135.1040256018523,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2500,
      },
      {
        code: 'per_3h',
        title: '2000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2000,
      },
      {
        code: 'sum',
        title: '2500 ₽',
        hourAmount: 24,
        priceFewDays: 2500,
      },
    ],
  },
  {
    id: 117,
    point: {
      lat: 48.474985,
      lon: 135.08373,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2400,
      },
      {
        code: 'per_3h',
        title: '1920₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1920,
      },
      {
        code: 'sum',
        title: '2400 ₽',
        hourAmount: 24,
        priceFewDays: 2400,
      },
    ],
  },
  {
    id: 124,
    point: {
      lat: 48.483257,
      lon: 135.101687,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2500,
      },
      {
        code: 'per_3h',
        title: '2000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2000,
      },
      {
        code: 'sum',
        title: '2500 ₽',
        hourAmount: 24,
        priceFewDays: 2500,
      },
    ],
  },
  {
    id: 138,
    point: {
      lat: 55.715444,
      lon: 37.404483,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3400,
      },
      {
        code: 'per_3h',
        title: '2720₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2720,
      },
      {
        code: 'sum',
        title: '3400 ₽',
        hourAmount: 24,
        priceFewDays: 3400,
      },
    ],
  },
  {
    id: 140,
    point: {
      lat: 48.433599,
      lon: 135.106753,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3500,
      },
      {
        code: 'per_3h',
        title: '2800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2800,
      },
      {
        code: 'sum',
        title: '3500 ₽',
        hourAmount: 24,
        priceFewDays: 3500,
      },
    ],
  },
  {
    id: 145,
    point: {
      lat: 48.48607,
      lon: 135.073121,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2100₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2100,
      },
      {
        code: 'per_3h',
        title: '1680₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1680,
      },
      {
        code: 'sum',
        title: '2100 ₽',
        hourAmount: 24,
        priceFewDays: 2100,
      },
    ],
  },
  {
    id: 154,
    point: {
      lat: 48.476138,
      lon: 135.05731,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2500,
      },
      {
        code: 'per_3h',
        title: '2000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2000,
      },
      {
        code: 'sum',
        title: '2500 ₽',
        hourAmount: 24,
        priceFewDays: 2500,
      },
    ],
  },
  {
    id: 162,
    point: {
      lat: 55.72452,
      lon: 37.413161,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3600,
      },
      {
        code: 'per_3h',
        title: '2880₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2880,
      },
      {
        code: 'sum',
        title: '3600 ₽',
        hourAmount: 24,
        priceFewDays: 3600,
      },
    ],
  },
  {
    id: 169,
    point: {
      lat: 48.438274,
      lon: 135.10731,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1950,
      },
      {
        code: 'per_3h',
        title: '1560₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1560,
      },
      {
        code: 'sum',
        title: '1950 ₽',
        hourAmount: 24,
        priceFewDays: 1950,
      },
    ],
  },
  {
    id: 173,
    point: {
      lat: 48.476329,
      lon: 135.060778,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2500,
      },
      {
        code: 'per_3h',
        title: '2000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2000,
      },
      {
        code: 'sum',
        title: '2500 ₽',
        hourAmount: 24,
        priceFewDays: 2500,
      },
    ],
  },
  {
    id: 175,
    point: {
      lat: 48.476101533947464,
      lon: 135.05719579629513,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2500,
      },
      {
        code: 'per_3h',
        title: '2000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2000,
      },
      {
        code: 'sum',
        title: '2500 ₽',
        hourAmount: 24,
        priceFewDays: 2500,
      },
    ],
  },
  {
    id: 188,
    point: {
      lat: 48.432224,
      lon: 135.106709,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2000,
      },
      {
        code: 'per_3h',
        title: '1600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1600,
      },
      {
        code: 'sum',
        title: '2000 ₽',
        hourAmount: 24,
        priceFewDays: 2000,
      },
    ],
  },
  {
    id: 203,
    point: {
      lat: 48.483012,
      lon: 135.066725,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2700,
      },
      {
        code: 'per_3h',
        title: '2160₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2160,
      },
      {
        code: 'sum',
        title: '2700 ₽',
        hourAmount: 24,
        priceFewDays: 2700,
      },
    ],
  },
  {
    id: 232,
    point: {
      lat: 48.51398,
      lon: 135.15511,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2500,
      },
      {
        code: 'per_3h',
        title: '2000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2000,
      },
      {
        code: 'sum',
        title: '2500 ₽',
        hourAmount: 24,
        priceFewDays: 2500,
      },
    ],
  },
  {
    id: 233,
    point: {
      lat: 48.49863732991804,
      lon: 135.1073431362457,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2500,
      },
      {
        code: 'per_3h',
        title: '2000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2000,
      },
      {
        code: 'sum',
        title: '2500 ₽',
        hourAmount: 24,
        priceFewDays: 2500,
      },
    ],
  },
  {
    id: 275,
    point: {
      lat: 48.503821,
      lon: 135.113536,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2700,
      },
      {
        code: 'per_3h',
        title: '2160₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2160,
      },
      {
        code: 'sum',
        title: '2700 ₽',
        hourAmount: 24,
        priceFewDays: 2700,
      },
    ],
  },
  {
    id: 279,
    point: {
      lat: 48.490071,
      lon: 135.053977,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2650₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2650,
      },
      {
        code: 'per_3h',
        title: '2120₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2120,
      },
      {
        code: 'sum',
        title: '2650 ₽',
        hourAmount: 24,
        priceFewDays: 2650,
      },
    ],
  },
  {
    id: 370,
    point: {
      lat: 48.490214,
      lon: 135.054391,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2850₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2850,
      },
      {
        code: 'per_3h',
        title: '2280₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2280,
      },
      {
        code: 'sum',
        title: '2850 ₽',
        hourAmount: 24,
        priceFewDays: 2850,
      },
    ],
  },
  {
    id: 1043,
    point: {
      lat: 48.438686,
      lon: 135.0983,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3500,
      },
      {
        code: 'per_3h',
        title: '2800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2800,
      },
      {
        code: 'sum',
        title: '3500 ₽',
        hourAmount: 24,
        priceFewDays: 3500,
      },
    ],
  },
  {
    id: 1044,
    point: {
      lat: 48.398162,
      lon: 135.105999,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2400,
      },
      {
        code: 'per_3h',
        title: '1920₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1920,
      },
      {
        code: 'sum',
        title: '2400 ₽',
        hourAmount: 24,
        priceFewDays: 2400,
      },
    ],
  },
  {
    id: 1046,
    point: {
      lat: 48.556475,
      lon: 135.058739,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2700,
      },
      {
        code: 'per_3h',
        title: '2160₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2160,
      },
      {
        code: 'sum',
        title: '2700 ₽',
        hourAmount: 24,
        priceFewDays: 2700,
      },
    ],
  },
  {
    id: 1102,
    point: {
      lat: 48.479094,
      lon: 135.096629,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4990₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4990,
      },
      {
        code: 'per_3h',
        title: '3992₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3992,
      },
      {
        code: 'sum',
        title: '4990 ₽',
        hourAmount: 24,
        priceFewDays: 4990,
      },
    ],
  },
  {
    id: 1177,
    point: {
      lat: 48.460517,
      lon: 135.089497,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2000,
      },
      {
        code: 'per_3h',
        title: '1600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1600,
      },
      {
        code: 'sum',
        title: '2000 ₽',
        hourAmount: 24,
        priceFewDays: 2000,
      },
    ],
  },
  {
    id: 1508,
    point: {
      lat: 48.457398,
      lon: 135.10272,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2500,
      },
      {
        code: 'per_3h',
        title: '2000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2000,
      },
      {
        code: 'sum',
        title: '2500 ₽',
        hourAmount: 24,
        priceFewDays: 2500,
      },
    ],
  },
  {
    id: 2009,
    point: {
      lat: 55.781828,
      lon: 49.14947,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2800,
      },
      {
        code: 'per_3h',
        title: '2240₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2240,
      },
      {
        code: 'sum',
        title: '2800 ₽',
        hourAmount: 24,
        priceFewDays: 2800,
      },
    ],
  },
  {
    id: 2031,
    point: {
      lat: 55.780203,
      lon: 49.149255,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2700,
      },
      {
        code: 'per_3h',
        title: '2160₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2160,
      },
      {
        code: 'sum',
        title: '2700 ₽',
        hourAmount: 24,
        priceFewDays: 2700,
      },
    ],
  },
  {
    id: 2032,
    point: {
      lat: 55.78829663720104,
      lon: 49.15261265855552,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2500,
      },
      {
        code: 'per_3h',
        title: '2000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2000,
      },
      {
        code: 'sum',
        title: '2500 ₽',
        hourAmount: 24,
        priceFewDays: 2500,
      },
    ],
  },
  {
    id: 2033,
    point: {
      lat: 55.822771,
      lon: 49.143272,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2600,
      },
      {
        code: 'per_3h',
        title: '2080₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2080,
      },
      {
        code: 'sum',
        title: '2600 ₽',
        hourAmount: 24,
        priceFewDays: 2600,
      },
    ],
  },
  {
    id: 2110,
    point: {
      lat: 55.826281,
      lon: 49.144521,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2200,
      },
      {
        code: 'per_3h',
        title: '1760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1760,
      },
      {
        code: 'sum',
        title: '2200 ₽',
        hourAmount: 24,
        priceFewDays: 2200,
      },
    ],
  },
  {
    id: 2371,
    point: {
      lat: 55.781099,
      lon: 49.149237,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2600,
      },
      {
        code: 'per_3h',
        title: '2080₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2080,
      },
      {
        code: 'sum',
        title: '2600 ₽',
        hourAmount: 24,
        priceFewDays: 2600,
      },
    ],
  },
  {
    id: 2564,
    point: {
      lat: 55.821052,
      lon: 49.14541,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2480₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2480,
      },
      {
        code: 'per_3h',
        title: '1984₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1984,
      },
      {
        code: 'sum',
        title: '2480 ₽',
        hourAmount: 24,
        priceFewDays: 2480,
      },
    ],
  },
  {
    id: 3026,
    point: {
      lat: 55.81823,
      lon: 49.065406,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2700,
      },
      {
        code: 'per_3h',
        title: '2160₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2160,
      },
      {
        code: 'sum',
        title: '2700 ₽',
        hourAmount: 24,
        priceFewDays: 2700,
      },
    ],
  },
  {
    id: 3027,
    point: {
      lat: 55.822696,
      lon: 49.153279,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2500,
      },
      {
        code: 'per_3h',
        title: '2000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2000,
      },
      {
        code: 'sum',
        title: '2500 ₽',
        hourAmount: 24,
        priceFewDays: 2500,
      },
    ],
  },
  {
    id: 3247,
    point: {
      lat: 55.819853,
      lon: 49.109621,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2700,
      },
      {
        code: 'per_3h',
        title: '2160₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2160,
      },
      {
        code: 'sum',
        title: '2700 ₽',
        hourAmount: 24,
        priceFewDays: 2700,
      },
    ],
  },
  {
    id: 3270,
    point: {
      lat: 55.838096,
      lon: 49.152354,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2600,
      },
      {
        code: 'per_3h',
        title: '2080₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2080,
      },
      {
        code: 'sum',
        title: '2600 ₽',
        hourAmount: 24,
        priceFewDays: 2600,
      },
    ],
  },
  {
    id: 3795,
    point: {
      lat: 55.821052,
      lon: 49.14541,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2620₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2620,
      },
      {
        code: 'per_3h',
        title: '2096₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2096,
      },
      {
        code: 'sum',
        title: '2620 ₽',
        hourAmount: 24,
        priceFewDays: 2620,
      },
    ],
  },
  {
    id: 3899,
    point: {
      lat: 55.788338,
      lon: 49.215721,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2500,
      },
      {
        code: 'per_3h',
        title: '2000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2000,
      },
      {
        code: 'sum',
        title: '2500 ₽',
        hourAmount: 24,
        priceFewDays: 2500,
      },
    ],
  },
  {
    id: 4228,
    point: {
      lat: 55.824147,
      lon: 49.153405,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2790₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2790,
      },
      {
        code: 'per_3h',
        title: '2232₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2232,
      },
      {
        code: 'sum',
        title: '2790 ₽',
        hourAmount: 24,
        priceFewDays: 2790,
      },
    ],
  },
  {
    id: 4365,
    point: {
      lat: 48.458007,
      lon: 135.094393,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 4367,
    point: {
      lat: 48.449892,
      lon: 135.107095,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1990₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1990,
      },
      {
        code: 'per_3h',
        title: '1592₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1592,
      },
      {
        code: 'sum',
        title: '1990 ₽',
        hourAmount: 24,
        priceFewDays: 1990,
      },
    ],
  },
  {
    id: 4718,
    point: {
      lat: 48.534489,
      lon: 135.046854,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2100₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2100,
      },
      {
        code: 'per_3h',
        title: '1680₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1680,
      },
      {
        code: 'sum',
        title: '2100 ₽',
        hourAmount: 24,
        priceFewDays: 2100,
      },
    ],
  },
  {
    id: 4925,
    point: {
      lat: 48.449313,
      lon: 135.113203,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2400,
      },
      {
        code: 'per_3h',
        title: '1920₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1920,
      },
      {
        code: 'sum',
        title: '2400 ₽',
        hourAmount: 24,
        priceFewDays: 2400,
      },
    ],
  },
  {
    id: 5072,
    point: {
      lat: 48.55128,
      lon: 135.062619,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 5915,
    point: {
      lat: 48.460797,
      lon: 135.098507,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 6166,
    point: {
      lat: 48.436588,
      lon: 135.098705,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4200,
      },
      {
        code: 'per_3h',
        title: '3360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3360,
      },
      {
        code: 'sum',
        title: '4200 ₽',
        hourAmount: 24,
        priceFewDays: 4200,
      },
    ],
  },
  {
    id: 6696,
    point: {
      lat: 48.489121,
      lon: 135.0627,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4600,
      },
      {
        code: 'per_3h',
        title: '3680₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3680,
      },
      {
        code: 'sum',
        title: '4600 ₽',
        hourAmount: 24,
        priceFewDays: 4600,
      },
    ],
  },
  {
    id: 6817,
    point: {
      lat: 48.440013,
      lon: 135.098992,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2600,
      },
      {
        code: 'per_3h',
        title: '2080₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2080,
      },
      {
        code: 'sum',
        title: '2600 ₽',
        hourAmount: 24,
        priceFewDays: 2600,
      },
    ],
  },
  {
    id: 6896,
    point: {
      lat: 55.751047,
      lon: 37.534164,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '11990₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 11990,
      },
      {
        code: 'per_3h',
        title: '9592₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 9592,
      },
      {
        code: 'sum',
        title: '11990 ₽',
        hourAmount: 24,
        priceFewDays: 11990,
      },
    ],
  },
  {
    id: 6897,
    point: {
      lat: 48.463749,
      lon: 135.079759,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3500,
      },
      {
        code: 'per_3h',
        title: '2800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2800,
      },
      {
        code: 'sum',
        title: '3500 ₽',
        hourAmount: 24,
        priceFewDays: 3500,
      },
    ],
  },
  {
    id: 6898,
    point: {
      lat: 48.440485,
      lon: 135.102747,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3700,
      },
      {
        code: 'per_3h',
        title: '2960₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2960,
      },
      {
        code: 'sum',
        title: '3700 ₽',
        hourAmount: 24,
        priceFewDays: 3700,
      },
    ],
  },
  {
    id: 7293,
    point: {
      lat: 48.436989,
      lon: 135.101004,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2850₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2850,
      },
      {
        code: 'per_3h',
        title: '2280₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2280,
      },
      {
        code: 'sum',
        title: '2850 ₽',
        hourAmount: 24,
        priceFewDays: 2850,
      },
    ],
  },
  {
    id: 7340,
    point: {
      lat: 55.784749,
      lon: 49.215802,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2700,
      },
      {
        code: 'per_3h',
        title: '2160₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2160,
      },
      {
        code: 'sum',
        title: '2700 ₽',
        hourAmount: 24,
        priceFewDays: 2700,
      },
    ],
  },
  {
    id: 7368,
    point: {
      lat: 48.437126,
      lon: 135.102774,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 7397,
    point: {
      lat: 48.484141,
      lon: 135.069411,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2600,
      },
      {
        code: 'per_3h',
        title: '2080₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2080,
      },
      {
        code: 'sum',
        title: '2600 ₽',
        hourAmount: 24,
        priceFewDays: 2600,
      },
    ],
  },
  {
    id: 7623,
    point: {
      lat: 48.514392,
      lon: 135.066302,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2450,
      },
      {
        code: 'per_3h',
        title: '1960₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1960,
      },
      {
        code: 'sum',
        title: '2450 ₽',
        hourAmount: 24,
        priceFewDays: 2450,
      },
    ],
  },
  {
    id: 60,
    point: {
      lat: 43.102919,
      lon: 131.954871,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 76,
    point: {
      lat: 43.158015,
      lon: 131.932341,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4000,
      },
      {
        code: 'per_3h',
        title: '3200₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3200,
      },
      {
        code: 'sum',
        title: '4000 ₽',
        hourAmount: 24,
        priceFewDays: 4000,
      },
    ],
  },
  {
    id: 88,
    point: {
      lat: 43.099258,
      lon: 131.898509,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3500,
      },
      {
        code: 'per_3h',
        title: '2800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2800,
      },
      {
        code: 'sum',
        title: '3500 ₽',
        hourAmount: 24,
        priceFewDays: 3500,
      },
    ],
  },
  {
    id: 116,
    point: {
      lat: 43.082562,
      lon: 131.853505,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3500,
      },
      {
        code: 'per_3h',
        title: '2800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2800,
      },
      {
        code: 'sum',
        title: '3500 ₽',
        hourAmount: 24,
        priceFewDays: 3500,
      },
    ],
  },
  {
    id: 185,
    point: {
      lat: 43.12133,
      lon: 131.90245,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4000,
      },
      {
        code: 'per_3h',
        title: '3200₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3200,
      },
      {
        code: 'sum',
        title: '4000 ₽',
        hourAmount: 24,
        priceFewDays: 4000,
      },
    ],
  },
  {
    id: 191,
    point: {
      lat: 55.79917928669273,
      lon: 37.37750268650816,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 192,
    point: {
      lat: 43.151517,
      lon: 131.905463,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4000,
      },
      {
        code: 'per_3h',
        title: '3200₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3200,
      },
      {
        code: 'sum',
        title: '4000 ₽',
        hourAmount: 24,
        priceFewDays: 4000,
      },
    ],
  },
  {
    id: 204,
    point: {
      lat: 43.122755,
      lon: 131.928361,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 226,
    point: {
      lat: 43.121452,
      lon: 131.902463,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4000,
      },
      {
        code: 'per_3h',
        title: '3200₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3200,
      },
      {
        code: 'sum',
        title: '4000 ₽',
        hourAmount: 24,
        priceFewDays: 4000,
      },
    ],
  },
  {
    id: 234,
    point: {
      lat: 43.112028,
      lon: 131.875837,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4000,
      },
      {
        code: 'per_3h',
        title: '3200₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3200,
      },
      {
        code: 'sum',
        title: '4000 ₽',
        hourAmount: 24,
        priceFewDays: 4000,
      },
    ],
  },
  {
    id: 241,
    point: {
      lat: 43.0985834704659,
      lon: 131.89860565461794,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3500,
      },
      {
        code: 'per_3h',
        title: '2800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2800,
      },
      {
        code: 'sum',
        title: '3500 ₽',
        hourAmount: 24,
        priceFewDays: 3500,
      },
    ],
  },
  {
    id: 242,
    point: {
      lat: 43.09859133258735,
      lon: 131.8987290362326,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3500,
      },
      {
        code: 'per_3h',
        title: '2800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2800,
      },
      {
        code: 'sum',
        title: '3500 ₽',
        hourAmount: 24,
        priceFewDays: 3500,
      },
    ],
  },
  {
    id: 249,
    point: {
      lat: 43.09853236665173,
      lon: 131.89860565461794,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4500,
      },
      {
        code: 'per_3h',
        title: '3600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3600,
      },
      {
        code: 'sum',
        title: '4500 ₽',
        hourAmount: 24,
        priceFewDays: 4500,
      },
    ],
  },
  {
    id: 264,
    point: {
      lat: 43.108375,
      lon: 131.876151,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4500,
      },
      {
        code: 'per_3h',
        title: '3600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3600,
      },
      {
        code: 'sum',
        title: '4500 ₽',
        hourAmount: 24,
        priceFewDays: 4500,
      },
    ],
  },
  {
    id: 266,
    point: {
      lat: 43.09839622838653,
      lon: 131.89844460978688,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3500,
      },
      {
        code: 'per_3h',
        title: '2800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2800,
      },
      {
        code: 'sum',
        title: '3500 ₽',
        hourAmount: 24,
        priceFewDays: 3500,
      },
    ],
  },
  {
    id: 268,
    point: {
      lat: 55.79833628114515,
      lon: 37.37737778593203,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2990₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2990,
      },
      {
        code: 'per_3h',
        title: '2392₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2392,
      },
      {
        code: 'sum',
        title: '2990 ₽',
        hourAmount: 24,
        priceFewDays: 2990,
      },
    ],
  },
  {
    id: 274,
    point: {
      lat: 55.79836894519046,
      lon: 37.37713858399189,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2850₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2850,
      },
      {
        code: 'per_3h',
        title: '2280₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2280,
      },
      {
        code: 'sum',
        title: '2850 ₽',
        hourAmount: 24,
        priceFewDays: 2850,
      },
    ],
  },
  {
    id: 299,
    point: {
      lat: 55.79882177196829,
      lon: 37.37412815424734,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2490₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2490,
      },
      {
        code: 'per_3h',
        title: '1992₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1992,
      },
      {
        code: 'sum',
        title: '2490 ₽',
        hourAmount: 24,
        priceFewDays: 2490,
      },
    ],
  },
  {
    id: 310,
    point: {
      lat: 55.798186,
      lon: 37.37739,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2490₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2490,
      },
      {
        code: 'per_3h',
        title: '1992₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1992,
      },
      {
        code: 'sum',
        title: '2490 ₽',
        hourAmount: 24,
        priceFewDays: 2490,
      },
    ],
  },
  {
    id: 4368,
    point: {
      lat: 43.114443,
      lon: 131.878361,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6000,
      },
      {
        code: 'per_3h',
        title: '4800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4800,
      },
      {
        code: 'sum',
        title: '6000 ₽',
        hourAmount: 24,
        priceFewDays: 6000,
      },
    ],
  },
  {
    id: 4675,
    point: {
      lat: 43.119826,
      lon: 131.88765,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4500,
      },
      {
        code: 'per_3h',
        title: '3600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3600,
      },
      {
        code: 'sum',
        title: '4500 ₽',
        hourAmount: 24,
        priceFewDays: 4500,
      },
    ],
  },
  {
    id: 5073,
    point: {
      lat: 55.79893,
      lon: 37.373958,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2950,
      },
      {
        code: 'per_3h',
        title: '2360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2360,
      },
      {
        code: 'sum',
        title: '2950 ₽',
        hourAmount: 24,
        priceFewDays: 2950,
      },
    ],
  },
  {
    id: 5919,
    point: {
      lat: 43.121419,
      lon: 131.902346,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4000,
      },
      {
        code: 'per_3h',
        title: '3200₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3200,
      },
      {
        code: 'sum',
        title: '4000 ₽',
        hourAmount: 24,
        priceFewDays: 4000,
      },
    ],
  },
  {
    id: 5933,
    point: {
      lat: 43.115424,
      lon: 131.876097,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '7000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 7000,
      },
      {
        code: 'per_3h',
        title: '5600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5600,
      },
      {
        code: 'sum',
        title: '7000 ₽',
        hourAmount: 24,
        priceFewDays: 7000,
      },
    ],
  },
  {
    id: 6165,
    point: {
      lat: 43.09836726172781,
      lon: 131.89861101903597,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3500,
      },
      {
        code: 'per_3h',
        title: '2800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2800,
      },
      {
        code: 'sum',
        title: '3500 ₽',
        hourAmount: 24,
        priceFewDays: 3500,
      },
    ],
  },
  {
    id: 6935,
    point: {
      lat: 43.154128,
      lon: 131.913934,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6000,
      },
      {
        code: 'per_3h',
        title: '4800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4800,
      },
      {
        code: 'sum',
        title: '6000 ₽',
        hourAmount: 24,
        priceFewDays: 6000,
      },
    ],
  },
  {
    id: 7125,
    point: {
      lat: 55.798976,
      lon: 37.378845,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2700,
      },
      {
        code: 'per_3h',
        title: '2160₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2160,
      },
      {
        code: 'sum',
        title: '2700 ₽',
        hourAmount: 24,
        priceFewDays: 2700,
      },
    ],
  },
  {
    id: 7454,
    point: {
      lat: 43.125288,
      lon: 131.935763,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2000,
      },
      {
        code: 'per_3h',
        title: '1600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1600,
      },
      {
        code: 'sum',
        title: '2000 ₽',
        hourAmount: 24,
        priceFewDays: 2000,
      },
    ],
  },
  {
    id: 7642,
    point: {
      lat: 45.051991,
      lon: 39.041043,
    },
    apartment_access_type: {
      id: 1,
      title: 'Бесконтактная аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2990₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2990,
      },
      {
        code: 'per_3h',
        title: '2392₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2392,
      },
      {
        code: 'sum',
        title: '2990 ₽',
        hourAmount: 24,
        priceFewDays: 2990,
      },
    ],
  },
  {
    id: 320,
    point: {
      lat: 55.812186,
      lon: 37.639383,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5498₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5498,
      },
      {
        code: 'per_3h',
        title: '4398₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4398,
      },
      {
        code: 'sum',
        title: '5498 ₽',
        hourAmount: 24,
        priceFewDays: 5498,
      },
    ],
  },
  {
    id: 321,
    point: {
      lat: 55.840462,
      lon: 37.535278,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3717₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3717,
      },
      {
        code: 'per_3h',
        title: '2974₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2974,
      },
      {
        code: 'sum',
        title: '3717 ₽',
        hourAmount: 24,
        priceFewDays: 3717,
      },
    ],
  },
  {
    id: 322,
    point: {
      lat: 55.722593,
      lon: 37.645806,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5959₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5959,
      },
      {
        code: 'per_3h',
        title: '4767₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4767,
      },
      {
        code: 'sum',
        title: '5959 ₽',
        hourAmount: 24,
        priceFewDays: 5959,
      },
    ],
  },
  {
    id: 323,
    point: {
      lat: 55.840118,
      lon: 37.546579,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5422₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5422,
      },
      {
        code: 'per_3h',
        title: '4338₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4338,
      },
      {
        code: 'sum',
        title: '5422 ₽',
        hourAmount: 24,
        priceFewDays: 5422,
      },
    ],
  },
  {
    id: 324,
    point: {
      lat: 55.76915758530566,
      lon: 37.472340377049896,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5959₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5959,
      },
      {
        code: 'per_3h',
        title: '4767₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4767,
      },
      {
        code: 'sum',
        title: '5959 ₽',
        hourAmount: 24,
        priceFewDays: 5959,
      },
    ],
  },
  {
    id: 366,
    point: {
      lat: 55.7691900689516,
      lon: 37.4726739999999,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5498₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5498,
      },
      {
        code: 'per_3h',
        title: '4398₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4398,
      },
      {
        code: 'sum',
        title: '5498 ₽',
        hourAmount: 24,
        priceFewDays: 5498,
      },
    ],
  },
  {
    id: 367,
    point: {
      lat: 55.714333,
      lon: 37.51777,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '7994₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 7994,
      },
      {
        code: 'per_3h',
        title: '6395₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 6395,
      },
      {
        code: 'sum',
        title: '7994 ₽',
        hourAmount: 24,
        priceFewDays: 7994,
      },
    ],
  },
  {
    id: 368,
    point: {
      lat: 55.776143,
      lon: 37.672792,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '13994₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 13994,
      },
      {
        code: 'per_3h',
        title: '11195₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 11195,
      },
      {
        code: 'sum',
        title: '13994 ₽',
        hourAmount: 24,
        priceFewDays: 13994,
      },
    ],
  },
  {
    id: 1174,
    point: {
      lat: 55.76919992231341,
      lon: 37.47311285324621,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '11918₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 11918,
      },
      {
        code: 'per_3h',
        title: '9534₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 9534,
      },
      {
        code: 'sum',
        title: '11918 ₽',
        hourAmount: 24,
        priceFewDays: 11918,
      },
    ],
  },
  {
    id: 2595,
    point: {
      lat: 55.79021,
      lon: 37.472324,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4495₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4495,
      },
      {
        code: 'per_3h',
        title: '3596₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3596,
      },
      {
        code: 'sum',
        title: '4495 ₽',
        hourAmount: 24,
        priceFewDays: 4495,
      },
    ],
  },
  {
    id: 2596,
    point: {
      lat: 55.899795,
      lon: 37.460834,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3499₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3499,
      },
      {
        code: 'per_3h',
        title: '2799₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2799,
      },
      {
        code: 'sum',
        title: '3499 ₽',
        hourAmount: 24,
        priceFewDays: 3499,
      },
    ],
  },
  {
    id: 2597,
    point: {
      lat: 55.886973,
      lon: 37.429429,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3499₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3499,
      },
      {
        code: 'per_3h',
        title: '2799₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2799,
      },
      {
        code: 'sum',
        title: '3499 ₽',
        hourAmount: 24,
        priceFewDays: 3499,
      },
    ],
  },
  {
    id: 4490,
    point: {
      lat: 55.8090216947132,
      lon: 37.647380678573626,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5959₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5959,
      },
      {
        code: 'per_3h',
        title: '4767₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4767,
      },
      {
        code: 'sum',
        title: '5959 ₽',
        hourAmount: 24,
        priceFewDays: 5959,
      },
    ],
  },
  {
    id: 4786,
    point: {
      lat: 55.808982422117744,
      lon: 37.64696225396729,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4495₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4495,
      },
      {
        code: 'per_3h',
        title: '3596₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3596,
      },
      {
        code: 'sum',
        title: '4495 ₽',
        hourAmount: 24,
        priceFewDays: 4495,
      },
    ],
  },
  {
    id: 4788,
    point: {
      lat: 55.794517,
      lon: 37.514311,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '7994₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 7994,
      },
      {
        code: 'per_3h',
        title: '6395₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 6395,
      },
      {
        code: 'sum',
        title: '7994 ₽',
        hourAmount: 24,
        priceFewDays: 7994,
      },
    ],
  },
  {
    id: 5069,
    point: {
      lat: 55.776294,
      lon: 37.672172,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5994₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5994,
      },
      {
        code: 'per_3h',
        title: '4795₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4795,
      },
      {
        code: 'sum',
        title: '5994 ₽',
        hourAmount: 24,
        priceFewDays: 5994,
      },
    ],
  },
  {
    id: 5078,
    point: {
      lat: 55.753073,
      lon: 37.713261,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5498₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5498,
      },
      {
        code: 'per_3h',
        title: '4398₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4398,
      },
      {
        code: 'sum',
        title: '5498 ₽',
        hourAmount: 24,
        priceFewDays: 5498,
      },
    ],
  },
  {
    id: 6959,
    point: {
      lat: 55.763923,
      lon: 37.659461,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5959₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5959,
      },
      {
        code: 'per_3h',
        title: '4767₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4767,
      },
      {
        code: 'sum',
        title: '5959 ₽',
        hourAmount: 24,
        priceFewDays: 5959,
      },
    ],
  },
  {
    id: 7126,
    point: {
      lat: 55.761335,
      lon: 37.651169,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '9617₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 9617,
      },
      {
        code: 'per_3h',
        title: '7694₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 7694,
      },
      {
        code: 'sum',
        title: '9617 ₽',
        hourAmount: 24,
        priceFewDays: 9617,
      },
    ],
  },
  {
    id: 278,
    point: {
      lat: 55.017601,
      lon: 82.932665,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3360₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3360,
      },
      {
        code: 'per_3h',
        title: '2688₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2688,
      },
      {
        code: 'sum',
        title: '3360 ₽',
        hourAmount: 24,
        priceFewDays: 3360,
      },
    ],
  },
  {
    id: 283,
    point: {
      lat: 55.019444,
      lon: 82.949706,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2760,
      },
      {
        code: 'per_3h',
        title: '2208₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2208,
      },
      {
        code: 'sum',
        title: '2760 ₽',
        hourAmount: 24,
        priceFewDays: 2760,
      },
    ],
  },
  {
    id: 284,
    point: {
      lat: 55.025617,
      lon: 82.895672,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3360₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3360,
      },
      {
        code: 'per_3h',
        title: '2688₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2688,
      },
      {
        code: 'sum',
        title: '3360 ₽',
        hourAmount: 24,
        priceFewDays: 3360,
      },
    ],
  },
  {
    id: 287,
    point: {
      lat: 55.010509,
      lon: 82.932341,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2520₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2520,
      },
      {
        code: 'per_3h',
        title: '2016₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2016,
      },
      {
        code: 'sum',
        title: '2520 ₽',
        hourAmount: 24,
        priceFewDays: 2520,
      },
    ],
  },
  {
    id: 288,
    point: {
      lat: 55.022407,
      lon: 82.929422,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3360₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3360,
      },
      {
        code: 'per_3h',
        title: '2688₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2688,
      },
      {
        code: 'sum',
        title: '3360 ₽',
        hourAmount: 24,
        priceFewDays: 3360,
      },
    ],
  },
  {
    id: 289,
    point: {
      lat: 55.018654,
      lon: 82.952122,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2640₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2640,
      },
      {
        code: 'per_3h',
        title: '2112₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2112,
      },
      {
        code: 'sum',
        title: '2640 ₽',
        hourAmount: 24,
        priceFewDays: 2640,
      },
    ],
  },
  {
    id: 295,
    point: {
      lat: 55.0260411,
      lon: 82.9478051,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2760,
      },
      {
        code: 'per_3h',
        title: '2208₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2208,
      },
      {
        code: 'sum',
        title: '2760 ₽',
        hourAmount: 24,
        priceFewDays: 2760,
      },
    ],
  },
  {
    id: 296,
    point: {
      lat: 59.821956,
      lon: 30.332298,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4140₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4140,
      },
      {
        code: 'per_3h',
        title: '3312₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3312,
      },
      {
        code: 'sum',
        title: '4140 ₽',
        hourAmount: 24,
        priceFewDays: 4140,
      },
    ],
  },
  {
    id: 5112,
    point: {
      lat: 59.840854463670176,
      lon: 30.311790685180664,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2587₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2587,
      },
      {
        code: 'per_3h',
        title: '2070₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2070,
      },
      {
        code: 'sum',
        title: '2587 ₽',
        hourAmount: 24,
        priceFewDays: 2587,
      },
    ],
  },
  {
    id: 5113,
    point: {
      lat: 59.84085986304441,
      lon: 30.312262753967293,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2587₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2587,
      },
      {
        code: 'per_3h',
        title: '2070₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2070,
      },
      {
        code: 'sum',
        title: '2587 ₽',
        hourAmount: 24,
        priceFewDays: 2587,
      },
    ],
  },
  {
    id: 5114,
    point: {
      lat: 59.862095,
      lon: 30.414279,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3933₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3933,
      },
      {
        code: 'per_3h',
        title: '3146₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3146,
      },
      {
        code: 'sum',
        title: '3933 ₽',
        hourAmount: 24,
        priceFewDays: 3933,
      },
    ],
  },
  {
    id: 5115,
    point: {
      lat: 59.88344,
      lon: 30.433269,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3933₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3933,
      },
      {
        code: 'per_3h',
        title: '3146₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3146,
      },
      {
        code: 'sum',
        title: '3933 ₽',
        hourAmount: 24,
        priceFewDays: 3933,
      },
    ],
  },
  {
    id: 5116,
    point: {
      lat: 59.881972603001046,
      lon: 30.42862877585485,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2898₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2898,
      },
      {
        code: 'per_3h',
        title: '2318₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2318,
      },
      {
        code: 'sum',
        title: '2898 ₽',
        hourAmount: 24,
        priceFewDays: 2898,
      },
    ],
  },
  {
    id: 5117,
    point: {
      lat: 59.909856,
      lon: 30.455727,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3622₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3622,
      },
      {
        code: 'per_3h',
        title: '2898₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2898,
      },
      {
        code: 'sum',
        title: '3622 ₽',
        hourAmount: 24,
        priceFewDays: 3622,
      },
    ],
  },
  {
    id: 5118,
    point: {
      lat: 59.91736611246672,
      lon: 30.33373764395827,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3622₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3622,
      },
      {
        code: 'per_3h',
        title: '2898₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2898,
      },
      {
        code: 'sum',
        title: '3622 ₽',
        hourAmount: 24,
        priceFewDays: 3622,
      },
    ],
  },
  {
    id: 5119,
    point: {
      lat: 59.88271492339082,
      lon: 30.429619925270057,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3622₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3622,
      },
      {
        code: 'per_3h',
        title: '2898₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2898,
      },
      {
        code: 'sum',
        title: '3622 ₽',
        hourAmount: 24,
        priceFewDays: 3622,
      },
    ],
  },
  {
    id: 5120,
    point: {
      lat: 59.905357,
      lon: 30.342404,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4657₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4657,
      },
      {
        code: 'per_3h',
        title: '3726₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3726,
      },
      {
        code: 'sum',
        title: '4657 ₽',
        hourAmount: 24,
        priceFewDays: 4657,
      },
    ],
  },
  {
    id: 5121,
    point: {
      lat: 59.882725708511586,
      lon: 30.429786222228977,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3622₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3622,
      },
      {
        code: 'per_3h',
        title: '2898₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2898,
      },
      {
        code: 'sum',
        title: '3622 ₽',
        hourAmount: 24,
        priceFewDays: 3622,
      },
    ],
  },
  {
    id: 5122,
    point: {
      lat: 59.88266908658846,
      lon: 30.42976476455687,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2380₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2380,
      },
      {
        code: 'per_3h',
        title: '1904₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1904,
      },
      {
        code: 'sum',
        title: '2380 ₽',
        hourAmount: 24,
        priceFewDays: 2380,
      },
    ],
  },
  {
    id: 5123,
    point: {
      lat: 59.839895,
      lon: 30.304019,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3622₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3622,
      },
      {
        code: 'per_3h',
        title: '2898₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2898,
      },
      {
        code: 'sum',
        title: '3622 ₽',
        hourAmount: 24,
        priceFewDays: 3622,
      },
    ],
  },
  {
    id: 5124,
    point: {
      lat: 59.987771,
      lon: 30.327753,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4657₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4657,
      },
      {
        code: 'per_3h',
        title: '3726₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3726,
      },
      {
        code: 'sum',
        title: '4657 ₽',
        hourAmount: 24,
        priceFewDays: 4657,
      },
    ],
  },
  {
    id: 5125,
    point: {
      lat: 59.8147805462465,
      lon: 30.343561247360217,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5123₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5123,
      },
      {
        code: 'per_3h',
        title: '4098₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4098,
      },
      {
        code: 'sum',
        title: '5123 ₽',
        hourAmount: 24,
        priceFewDays: 5123,
      },
    ],
  },
  {
    id: 5126,
    point: {
      lat: 59.87722174722754,
      lon: 30.2479522920128,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2277₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2277,
      },
      {
        code: 'per_3h',
        title: '1822₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1822,
      },
      {
        code: 'sum',
        title: '2277 ₽',
        hourAmount: 24,
        priceFewDays: 2277,
      },
    ],
  },
  {
    id: 5127,
    point: {
      lat: 59.87730399732204,
      lon: 30.247866461324328,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2277₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2277,
      },
      {
        code: 'per_3h',
        title: '1822₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1822,
      },
      {
        code: 'sum',
        title: '2277 ₽',
        hourAmount: 24,
        priceFewDays: 2277,
      },
    ],
  },
  {
    id: 5128,
    point: {
      lat: 59.995264,
      lon: 30.308053,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2277₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2277,
      },
      {
        code: 'per_3h',
        title: '1822₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1822,
      },
      {
        code: 'sum',
        title: '2277 ₽',
        hourAmount: 24,
        priceFewDays: 2277,
      },
    ],
  },
  {
    id: 5129,
    point: {
      lat: 59.87731478420455,
      lon: 30.24780208830796,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2380₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2380,
      },
      {
        code: 'per_3h',
        title: '1904₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1904,
      },
      {
        code: 'sum',
        title: '2380 ₽',
        hourAmount: 24,
        priceFewDays: 2380,
      },
    ],
  },
  {
    id: 5130,
    point: {
      lat: 59.88261785714601,
      lon: 30.429684298286425,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4140₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4140,
      },
      {
        code: 'per_3h',
        title: '3312₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3312,
      },
      {
        code: 'sum',
        title: '4140 ₽',
        hourAmount: 24,
        priceFewDays: 4140,
      },
    ],
  },
  {
    id: 5131,
    point: {
      lat: 59.88263942744722,
      lon: 30.429866688499423,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2898₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2898,
      },
      {
        code: 'per_3h',
        title: '2318₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2318,
      },
      {
        code: 'sum',
        title: '2898 ₽',
        hourAmount: 24,
        priceFewDays: 2898,
      },
    ],
  },
  {
    id: 5132,
    point: {
      lat: 59.8825477535701,
      lon: 30.429850595245345,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3105₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3105,
      },
      {
        code: 'per_3h',
        title: '2484₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2484,
      },
      {
        code: 'sum',
        title: '3105 ₽',
        hourAmount: 24,
        priceFewDays: 3105,
      },
    ],
  },
  {
    id: 5934,
    point: {
      lat: 59.904053,
      lon: 30.347659,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '7245₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 7245,
      },
      {
        code: 'per_3h',
        title: '5796₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5796,
      },
      {
        code: 'sum',
        title: '7245 ₽',
        hourAmount: 24,
        priceFewDays: 7245,
      },
    ],
  },
  {
    id: 5935,
    point: {
      lat: 59.88193485420482,
      lon: 30.42887017466619,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2587₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2587,
      },
      {
        code: 'per_3h',
        title: '2070₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2070,
      },
      {
        code: 'sum',
        title: '2587 ₽',
        hourAmount: 24,
        priceFewDays: 2587,
      },
    ],
  },
  {
    id: 5936,
    point: {
      lat: 59.88176768044726,
      lon: 30.428816530485875,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2277₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2277,
      },
      {
        code: 'per_3h',
        title: '1822₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1822,
      },
      {
        code: 'sum',
        title: '2277 ₽',
        hourAmount: 24,
        priceFewDays: 2277,
      },
    ],
  },
  {
    id: 5937,
    point: {
      lat: 59.88242911641131,
      lon: 30.429952519187896,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4657₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4657,
      },
      {
        code: 'per_3h',
        title: '3726₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3726,
      },
      {
        code: 'sum',
        title: '4657 ₽',
        hourAmount: 24,
        priceFewDays: 4657,
      },
    ],
  },
  {
    id: 5938,
    point: {
      lat: 59.88236979767256,
      lon: 30.429802695732338,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3622₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3622,
      },
      {
        code: 'per_3h',
        title: '2898₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2898,
      },
      {
        code: 'sum',
        title: '3622 ₽',
        hourAmount: 24,
        priceFewDays: 3622,
      },
    ],
  },
  {
    id: 5939,
    point: {
      lat: 60.009426,
      lon: 30.330897,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2898₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2898,
      },
      {
        code: 'per_3h',
        title: '2318₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2318,
      },
      {
        code: 'sum',
        title: '2898 ₽',
        hourAmount: 24,
        priceFewDays: 2898,
      },
    ],
  },
  {
    id: 5940,
    point: {
      lat: 60.013605,
      lon: 30.3329,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4140₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4140,
      },
      {
        code: 'per_3h',
        title: '3312₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3312,
      },
      {
        code: 'sum',
        title: '4140 ₽',
        hourAmount: 24,
        priceFewDays: 4140,
      },
    ],
  },
  {
    id: 5980,
    point: {
      lat: 59.904053,
      lon: 30.347659,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4140₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4140,
      },
      {
        code: 'per_3h',
        title: '3312₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3312,
      },
      {
        code: 'sum',
        title: '4140 ₽',
        hourAmount: 24,
        priceFewDays: 4140,
      },
    ],
  },
  {
    id: 6557,
    point: {
      lat: 60.009426,
      lon: 30.330897,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5692₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5692,
      },
      {
        code: 'per_3h',
        title: '4554₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4554,
      },
      {
        code: 'sum',
        title: '5692 ₽',
        hourAmount: 24,
        priceFewDays: 5692,
      },
    ],
  },
  {
    id: 6713,
    point: {
      lat: 59.881694878708466,
      lon: 30.428956005354664,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 6733,
    point: {
      lat: 59.990242,
      lon: 30.292584,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2277₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2277,
      },
      {
        code: 'per_3h',
        title: '1822₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1822,
      },
      {
        code: 'sum',
        title: '2277 ₽',
        hourAmount: 24,
        priceFewDays: 2277,
      },
    ],
  },
  {
    id: 114,
    point: {
      lat: 48.524155,
      lon: 135.025213,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '12000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 12000,
      },
      {
        code: 'per_3h',
        title: '9600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 9600,
      },
      {
        code: 'sum',
        title: '12000 ₽',
        hourAmount: 24,
        priceFewDays: 12000,
      },
    ],
  },
  {
    id: 250,
    point: {
      lat: 48.52429404550418,
      lon: 135.02509548280332,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '10000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 10000,
      },
      {
        code: 'per_3h',
        title: '8000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 8000,
      },
      {
        code: 'sum',
        title: '10000 ₽',
        hourAmount: 24,
        priceFewDays: 10000,
      },
    ],
  },
  {
    id: 313,
    point: {
      lat: 55.043943,
      lon: 82.944226,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4200,
      },
      {
        code: 'per_3h',
        title: '3360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3360,
      },
      {
        code: 'sum',
        title: '4200 ₽',
        hourAmount: 24,
        priceFewDays: 4200,
      },
    ],
  },
  {
    id: 314,
    point: {
      lat: 55.04144702138919,
      lon: 82.97096420862064,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2400,
      },
      {
        code: 'per_3h',
        title: '1920₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1920,
      },
      {
        code: 'sum',
        title: '2400 ₽',
        hourAmount: 24,
        priceFewDays: 2400,
      },
    ],
  },
  {
    id: 315,
    point: {
      lat: 55.683234,
      lon: 37.727562,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4485₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4485,
      },
      {
        code: 'per_3h',
        title: '3588₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3588,
      },
      {
        code: 'sum',
        title: '4485 ₽',
        hourAmount: 24,
        priceFewDays: 4485,
      },
    ],
  },
  {
    id: 316,
    point: {
      lat: 55.683996,
      lon: 37.721678,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4600,
      },
      {
        code: 'per_3h',
        title: '3680₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3680,
      },
      {
        code: 'sum',
        title: '4600 ₽',
        hourAmount: 24,
        priceFewDays: 4600,
      },
    ],
  },
  {
    id: 317,
    point: {
      lat: 55.793419,
      lon: 37.711994,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4600,
      },
      {
        code: 'per_3h',
        title: '3680₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3680,
      },
      {
        code: 'sum',
        title: '4600 ₽',
        hourAmount: 24,
        priceFewDays: 4600,
      },
    ],
  },
  {
    id: 325,
    point: {
      lat: 55.687086,
      lon: 37.860639,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4779₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4779,
      },
      {
        code: 'per_3h',
        title: '3823₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3823,
      },
      {
        code: 'sum',
        title: '4779 ₽',
        hourAmount: 24,
        priceFewDays: 4779,
      },
    ],
  },
  {
    id: 326,
    point: {
      lat: 55.724981,
      lon: 37.741612,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4720₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4720,
      },
      {
        code: 'per_3h',
        title: '3776₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3776,
      },
      {
        code: 'sum',
        title: '4720 ₽',
        hourAmount: 24,
        priceFewDays: 4720,
      },
    ],
  },
  {
    id: 363,
    point: {
      lat: 59.944238,
      lon: 30.352771,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3400,
      },
      {
        code: 'per_3h',
        title: '2720₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2720,
      },
      {
        code: 'sum',
        title: '3400 ₽',
        hourAmount: 24,
        priceFewDays: 3400,
      },
    ],
  },
  {
    id: 371,
    point: {
      lat: 55.041444432030694,
      lon: 82.97029120667635,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2160₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2160,
      },
      {
        code: 'per_3h',
        title: '1728₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1728,
      },
      {
        code: 'sum',
        title: '2160 ₽',
        hourAmount: 24,
        priceFewDays: 2160,
      },
    ],
  },
  {
    id: 375,
    point: {
      lat: 55.845703738595596,
      lon: 37.57623683068847,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3680₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3680,
      },
      {
        code: 'per_3h',
        title: '2944₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2944,
      },
      {
        code: 'sum',
        title: '3680 ₽',
        hourAmount: 24,
        priceFewDays: 3680,
      },
    ],
  },
  {
    id: 377,
    point: {
      lat: 52.347417,
      lon: 104.161121,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2988₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2988,
      },
      {
        code: 'per_3h',
        title: '2390₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2390,
      },
      {
        code: 'sum',
        title: '2988 ₽',
        hourAmount: 24,
        priceFewDays: 2988,
      },
    ],
  },
  {
    id: 379,
    point: {
      lat: 55.025219135188365,
      lon: 82.89655759259024,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3600,
      },
      {
        code: 'per_3h',
        title: '2880₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2880,
      },
      {
        code: 'sum',
        title: '3600 ₽',
        hourAmount: 24,
        priceFewDays: 3600,
      },
    ],
  },
  {
    id: 380,
    point: {
      lat: 55.725621429448815,
      lon: 84.93007874536886,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2530₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2530,
      },
      {
        code: 'per_3h',
        title: '2024₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2024,
      },
      {
        code: 'sum',
        title: '2530 ₽',
        hourAmount: 24,
        priceFewDays: 2530,
      },
    ],
  },
  {
    id: 381,
    point: {
      lat: 55.713557,
      lon: 84.925909,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 382,
    point: {
      lat: 55.726228,
      lon: 84.931057,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 383,
    point: {
      lat: 55.72577885727936,
      lon: 84.93033623743428,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3105₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3105,
      },
      {
        code: 'per_3h',
        title: '2484₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2484,
      },
      {
        code: 'sum',
        title: '3105 ₽',
        hourAmount: 24,
        priceFewDays: 3105,
      },
    ],
  },
  {
    id: 384,
    point: {
      lat: 55.712381,
      lon: 84.941468,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3105₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3105,
      },
      {
        code: 'per_3h',
        title: '2484₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2484,
      },
      {
        code: 'sum',
        title: '3105 ₽',
        hourAmount: 24,
        priceFewDays: 3105,
      },
    ],
  },
  {
    id: 385,
    point: {
      lat: 55.717812,
      lon: 84.915327,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4025₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4025,
      },
      {
        code: 'per_3h',
        title: '3220₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3220,
      },
      {
        code: 'sum',
        title: '4025 ₽',
        hourAmount: 24,
        priceFewDays: 4025,
      },
    ],
  },
  {
    id: 386,
    point: {
      lat: 55.727323,
      lon: 84.939339,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2415₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2415,
      },
      {
        code: 'per_3h',
        title: '1932₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1932,
      },
      {
        code: 'sum',
        title: '2415 ₽',
        hourAmount: 24,
        priceFewDays: 2415,
      },
    ],
  },
  {
    id: 387,
    point: {
      lat: 55.712604,
      lon: 84.92608,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 388,
    point: {
      lat: 55.71055,
      lon: 84.925469,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2530₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2530,
      },
      {
        code: 'per_3h',
        title: '2024₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2024,
      },
      {
        code: 'sum',
        title: '2530 ₽',
        hourAmount: 24,
        priceFewDays: 2530,
      },
    ],
  },
  {
    id: 389,
    point: {
      lat: 55.720012,
      lon: 84.938863,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2415₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2415,
      },
      {
        code: 'per_3h',
        title: '1932₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1932,
      },
      {
        code: 'sum',
        title: '2415 ₽',
        hourAmount: 24,
        priceFewDays: 2415,
      },
    ],
  },
  {
    id: 390,
    point: {
      lat: 55.720063,
      lon: 84.93483,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3335₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3335,
      },
      {
        code: 'per_3h',
        title: '2668₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2668,
      },
      {
        code: 'sum',
        title: '3335 ₽',
        hourAmount: 24,
        priceFewDays: 3335,
      },
    ],
  },
  {
    id: 392,
    point: {
      lat: 55.71733,
      lon: 84.937435,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 393,
    point: {
      lat: 55.723998,
      lon: 84.929548,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2530₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2530,
      },
      {
        code: 'per_3h',
        title: '2024₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2024,
      },
      {
        code: 'sum',
        title: '2530 ₽',
        hourAmount: 24,
        priceFewDays: 2530,
      },
    ],
  },
  {
    id: 394,
    point: {
      lat: 55.713684,
      lon: 84.924652,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 395,
    point: {
      lat: 55.711894,
      lon: 84.91389,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 396,
    point: {
      lat: 55.700892,
      lon: 84.92264,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3795₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3795,
      },
      {
        code: 'per_3h',
        title: '3036₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3036,
      },
      {
        code: 'sum',
        title: '3795 ₽',
        hourAmount: 24,
        priceFewDays: 3795,
      },
    ],
  },
  {
    id: 397,
    point: {
      lat: 55.708795,
      lon: 84.935611,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 398,
    point: {
      lat: 55.722948,
      lon: 84.93615,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2415₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2415,
      },
      {
        code: 'per_3h',
        title: '1932₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1932,
      },
      {
        code: 'sum',
        title: '2415 ₽',
        hourAmount: 24,
        priceFewDays: 2415,
      },
    ],
  },
  {
    id: 399,
    point: {
      lat: 55.710697,
      lon: 84.911698,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2415₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2415,
      },
      {
        code: 'per_3h',
        title: '1932₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1932,
      },
      {
        code: 'sum',
        title: '2415 ₽',
        hourAmount: 24,
        priceFewDays: 2415,
      },
    ],
  },
  {
    id: 400,
    point: {
      lat: 55.705752,
      lon: 84.909821,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 401,
    point: {
      lat: 55.712254,
      lon: 84.93368,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3335₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3335,
      },
      {
        code: 'per_3h',
        title: '2668₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2668,
      },
      {
        code: 'sum',
        title: '3335 ₽',
        hourAmount: 24,
        priceFewDays: 3335,
      },
    ],
  },
  {
    id: 403,
    point: {
      lat: 56.850614,
      lon: 53.244908,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1593₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1593,
      },
      {
        code: 'per_3h',
        title: '1274₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1274,
      },
      {
        code: 'sum',
        title: '1593 ₽',
        hourAmount: 24,
        priceFewDays: 1593,
      },
    ],
  },
  {
    id: 404,
    point: {
      lat: 56.868674,
      lon: 53.293093,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1829₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1829,
      },
      {
        code: 'per_3h',
        title: '1463₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1463,
      },
      {
        code: 'sum',
        title: '1829 ₽',
        hourAmount: 24,
        priceFewDays: 1829,
      },
    ],
  },
  {
    id: 405,
    point: {
      lat: 56.850132,
      lon: 53.269899,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1593₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1593,
      },
      {
        code: 'per_3h',
        title: '1274₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1274,
      },
      {
        code: 'sum',
        title: '1593 ₽',
        hourAmount: 24,
        priceFewDays: 1593,
      },
    ],
  },
  {
    id: 422,
    point: {
      lat: 59.931006306356466,
      lon: 30.286817013494822,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '22000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 22000,
      },
      {
        code: 'per_3h',
        title: '17600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 17600,
      },
      {
        code: 'sum',
        title: '22000 ₽',
        hourAmount: 24,
        priceFewDays: 22000,
      },
    ],
  },
  {
    id: 423,
    point: {
      lat: 59.937504,
      lon: 30.355735,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2750₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2750,
      },
      {
        code: 'per_3h',
        title: '2200₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2200,
      },
      {
        code: 'sum',
        title: '2750 ₽',
        hourAmount: 24,
        priceFewDays: 2750,
      },
    ],
  },
  {
    id: 424,
    point: {
      lat: 59.826008,
      lon: 30.341632,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2530₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2530,
      },
      {
        code: 'per_3h',
        title: '2024₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2024,
      },
      {
        code: 'sum',
        title: '2530 ₽',
        hourAmount: 24,
        priceFewDays: 2530,
      },
    ],
  },
  {
    id: 425,
    point: {
      lat: 59.95623471401933,
      lon: 30.25253881282806,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3190₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3190,
      },
      {
        code: 'per_3h',
        title: '2552₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2552,
      },
      {
        code: 'sum',
        title: '3190 ₽',
        hourAmount: 24,
        priceFewDays: 3190,
      },
    ],
  },
  {
    id: 427,
    point: {
      lat: 59.903733,
      lon: 30.320171,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1650₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1650,
      },
      {
        code: 'per_3h',
        title: '1320₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1320,
      },
      {
        code: 'sum',
        title: '1650 ₽',
        hourAmount: 24,
        priceFewDays: 1650,
      },
    ],
  },
  {
    id: 428,
    point: {
      lat: 59.935669,
      lon: 30.359194,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2970₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2970,
      },
      {
        code: 'per_3h',
        title: '2376₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2376,
      },
      {
        code: 'sum',
        title: '2970 ₽',
        hourAmount: 24,
        priceFewDays: 2970,
      },
    ],
  },
  {
    id: 429,
    point: {
      lat: 59.9311517961122,
      lon: 30.358358859455098,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4180₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4180,
      },
      {
        code: 'per_3h',
        title: '3344₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3344,
      },
      {
        code: 'sum',
        title: '4180 ₽',
        hourAmount: 24,
        priceFewDays: 4180,
      },
    ],
  },
  {
    id: 432,
    point: {
      lat: 59.851078,
      lon: 30.334715,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2530₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2530,
      },
      {
        code: 'per_3h',
        title: '2024₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2024,
      },
      {
        code: 'sum',
        title: '2530 ₽',
        hourAmount: 24,
        priceFewDays: 2530,
      },
    ],
  },
  {
    id: 433,
    point: {
      lat: 59.949132,
      lon: 30.360299,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4180₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4180,
      },
      {
        code: 'per_3h',
        title: '3344₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3344,
      },
      {
        code: 'sum',
        title: '4180 ₽',
        hourAmount: 24,
        priceFewDays: 4180,
      },
    ],
  },
  {
    id: 434,
    point: {
      lat: 55.86194326866766,
      lon: 37.54952109259034,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3304₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3304,
      },
      {
        code: 'per_3h',
        title: '2643₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2643,
      },
      {
        code: 'sum',
        title: '3304 ₽',
        hourAmount: 24,
        priceFewDays: 3304,
      },
    ],
  },
  {
    id: 435,
    point: {
      lat: 55.876448373617116,
      lon: 37.31443346560668,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3186₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3186,
      },
      {
        code: 'per_3h',
        title: '2549₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2549,
      },
      {
        code: 'sum',
        title: '3186 ₽',
        hourAmount: 24,
        priceFewDays: 3186,
      },
    ],
  },
  {
    id: 436,
    point: {
      lat: 55.653766,
      lon: 37.416754,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2714₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2714,
      },
      {
        code: 'per_3h',
        title: '2171₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2171,
      },
      {
        code: 'sum',
        title: '2714 ₽',
        hourAmount: 24,
        priceFewDays: 2714,
      },
    ],
  },
  {
    id: 437,
    point: {
      lat: 55.63025582514643,
      lon: 37.51417721527481,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4720₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4720,
      },
      {
        code: 'per_3h',
        title: '3776₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3776,
      },
      {
        code: 'sum',
        title: '4720 ₽',
        hourAmount: 24,
        priceFewDays: 4720,
      },
    ],
  },
  {
    id: 438,
    point: {
      lat: 55.751351,
      lon: 37.536544,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '11210₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 11210,
      },
      {
        code: 'per_3h',
        title: '8968₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 8968,
      },
      {
        code: 'sum',
        title: '11210 ₽',
        hourAmount: 24,
        priceFewDays: 11210,
      },
    ],
  },
  {
    id: 441,
    point: {
      lat: 55.77499102937225,
      lon: 37.47047805055669,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3658₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3658,
      },
      {
        code: 'per_3h',
        title: '2926₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2926,
      },
      {
        code: 'sum',
        title: '3658 ₽',
        hourAmount: 24,
        priceFewDays: 3658,
      },
    ],
  },
  {
    id: 453,
    point: {
      lat: 55.67910114158019,
      lon: 37.69530893430325,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3068₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3068,
      },
      {
        code: 'per_3h',
        title: '2454₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2454,
      },
      {
        code: 'sum',
        title: '3068 ₽',
        hourAmount: 24,
        priceFewDays: 3068,
      },
    ],
  },
  {
    id: 454,
    point: {
      lat: 55.75152306009715,
      lon: 37.53557272090145,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '8260₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 8260,
      },
      {
        code: 'per_3h',
        title: '6608₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 6608,
      },
      {
        code: 'sum',
        title: '8260 ₽',
        hourAmount: 24,
        priceFewDays: 8260,
      },
    ],
  },
  {
    id: 455,
    point: {
      lat: 55.847861,
      lon: 37.650055,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2714₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2714,
      },
      {
        code: 'per_3h',
        title: '2171₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2171,
      },
      {
        code: 'sum',
        title: '2714 ₽',
        hourAmount: 24,
        priceFewDays: 2714,
      },
    ],
  },
  {
    id: 456,
    point: {
      lat: 55.84786156888539,
      lon: 37.65018424603269,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3186₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3186,
      },
      {
        code: 'per_3h',
        title: '2549₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2549,
      },
      {
        code: 'sum',
        title: '3186 ₽',
        hourAmount: 24,
        priceFewDays: 3186,
      },
    ],
  },
  {
    id: 463,
    point: {
      lat: 55.91686,
      lon: 37.758186,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3335₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3335,
      },
      {
        code: 'per_3h',
        title: '2668₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2668,
      },
      {
        code: 'sum',
        title: '3335 ₽',
        hourAmount: 24,
        priceFewDays: 3335,
      },
    ],
  },
  {
    id: 464,
    point: {
      lat: 55.917455,
      lon: 37.722891,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3105₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3105,
      },
      {
        code: 'per_3h',
        title: '2484₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2484,
      },
      {
        code: 'sum',
        title: '3105 ₽',
        hourAmount: 24,
        priceFewDays: 3105,
      },
    ],
  },
  {
    id: 465,
    point: {
      lat: 55.92033,
      lon: 37.712129,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4025₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4025,
      },
      {
        code: 'per_3h',
        title: '3220₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3220,
      },
      {
        code: 'sum',
        title: '4025 ₽',
        hourAmount: 24,
        priceFewDays: 4025,
      },
    ],
  },
  {
    id: 466,
    point: {
      lat: 55.91861,
      lon: 37.720906,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3105₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3105,
      },
      {
        code: 'per_3h',
        title: '2484₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2484,
      },
      {
        code: 'sum',
        title: '3105 ₽',
        hourAmount: 24,
        priceFewDays: 3105,
      },
    ],
  },
  {
    id: 467,
    point: {
      lat: 55.919498,
      lon: 37.715219,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 468,
    point: {
      lat: 55.853233,
      lon: 37.66406,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 469,
    point: {
      lat: 55.908888,
      lon: 37.72175,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 470,
    point: {
      lat: 55.919347,
      lon: 37.724247,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3335₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3335,
      },
      {
        code: 'per_3h',
        title: '2668₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2668,
      },
      {
        code: 'sum',
        title: '3335 ₽',
        hourAmount: 24,
        priceFewDays: 3335,
      },
    ],
  },
  {
    id: 471,
    point: {
      lat: 55.908858,
      lon: 37.718444,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 472,
    point: {
      lat: 55.918045,
      lon: 37.713953,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3565₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3565,
      },
      {
        code: 'per_3h',
        title: '2852₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2852,
      },
      {
        code: 'sum',
        title: '3565 ₽',
        hourAmount: 24,
        priceFewDays: 3565,
      },
    ],
  },
  {
    id: 474,
    point: {
      lat: 55.855083,
      lon: 37.660063,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 475,
    point: {
      lat: 55.92194,
      lon: 37.72643,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3335₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3335,
      },
      {
        code: 'per_3h',
        title: '2668₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2668,
      },
      {
        code: 'sum',
        title: '3335 ₽',
        hourAmount: 24,
        priceFewDays: 3335,
      },
    ],
  },
  {
    id: 476,
    point: {
      lat: 55.914938,
      lon: 37.738692,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 477,
    point: {
      lat: 55.90857,
      lon: 37.706973,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3335₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3335,
      },
      {
        code: 'per_3h',
        title: '2668₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2668,
      },
      {
        code: 'sum',
        title: '3335 ₽',
        hourAmount: 24,
        priceFewDays: 3335,
      },
    ],
  },
  {
    id: 478,
    point: {
      lat: 55.836458,
      lon: 37.632305,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3680₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3680,
      },
      {
        code: 'per_3h',
        title: '2944₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2944,
      },
      {
        code: 'sum',
        title: '3680 ₽',
        hourAmount: 24,
        priceFewDays: 3680,
      },
    ],
  },
  {
    id: 479,
    point: {
      lat: 55.84890321176957,
      lon: 37.58751735648342,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3105₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3105,
      },
      {
        code: 'per_3h',
        title: '2484₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2484,
      },
      {
        code: 'sum',
        title: '3105 ₽',
        hourAmount: 24,
        priceFewDays: 3105,
      },
    ],
  },
  {
    id: 480,
    point: {
      lat: 55.914696,
      lon: 37.40751,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2760,
      },
      {
        code: 'per_3h',
        title: '2208₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2208,
      },
      {
        code: 'sum',
        title: '2760 ₽',
        hourAmount: 24,
        priceFewDays: 2760,
      },
    ],
  },
  {
    id: 482,
    point: {
      lat: 51.52984298615529,
      lon: 46.01971112698361,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 483,
    point: {
      lat: 51.530016975019755,
      lon: 46.01978622883603,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2070₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2070,
      },
      {
        code: 'per_3h',
        title: '1656₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1656,
      },
      {
        code: 'sum',
        title: '2070 ₽',
        hourAmount: 24,
        priceFewDays: 2070,
      },
    ],
  },
  {
    id: 484,
    point: {
      lat: 51.5301909632158,
      lon: 46.01990424603269,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2070₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2070,
      },
      {
        code: 'per_3h',
        title: '1656₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1656,
      },
      {
        code: 'sum',
        title: '2070 ₽',
        hourAmount: 24,
        priceFewDays: 2070,
      },
    ],
  },
  {
    id: 487,
    point: {
      lat: 44.694092,
      lon: 37.788055,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 489,
    point: {
      lat: 44.720658,
      lon: 37.762363,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 490,
    point: {
      lat: 44.69271138398978,
      lon: 37.79125833795928,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 492,
    point: {
      lat: 44.692585721009,
      lon: 37.79157848862719,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4025₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4025,
      },
      {
        code: 'per_3h',
        title: '3220₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3220,
      },
      {
        code: 'sum',
        title: '4025 ₽',
        hourAmount: 24,
        priceFewDays: 4025,
      },
    ],
  },
  {
    id: 493,
    point: {
      lat: 44.678564,
      lon: 37.784964,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 494,
    point: {
      lat: 44.69237908951714,
      lon: 37.791857438364715,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 495,
    point: {
      lat: 44.69212926757494,
      lon: 37.79193987706846,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 497,
    point: {
      lat: 60.040501,
      lon: 30.219614,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3600,
      },
      {
        code: 'per_3h',
        title: '2880₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2880,
      },
      {
        code: 'sum',
        title: '3600 ₽',
        hourAmount: 24,
        priceFewDays: 3600,
      },
    ],
  },
  {
    id: 498,
    point: {
      lat: 59.965903,
      lon: 30.311197,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5175₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5175,
      },
      {
        code: 'per_3h',
        title: '4140₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4140,
      },
      {
        code: 'sum',
        title: '5175 ₽',
        hourAmount: 24,
        priceFewDays: 5175,
      },
    ],
  },
  {
    id: 499,
    point: {
      lat: 60.006426,
      lon: 30.255582,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3680₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3680,
      },
      {
        code: 'per_3h',
        title: '2944₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2944,
      },
      {
        code: 'sum',
        title: '3680 ₽',
        hourAmount: 24,
        priceFewDays: 3680,
      },
    ],
  },
  {
    id: 501,
    point: {
      lat: 59.988149,
      lon: 30.21275,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 503,
    point: {
      lat: 59.91853,
      lon: 30.506185,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 507,
    point: {
      lat: 59.87720487990069,
      lon: 30.247806313491807,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2784₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2784,
      },
      {
        code: 'per_3h',
        title: '2227₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2227,
      },
      {
        code: 'sum',
        title: '2784 ₽',
        hourAmount: 24,
        priceFewDays: 2784,
      },
    ],
  },
  {
    id: 508,
    point: {
      lat: 56.13208444519275,
      lon: 40.400255126983616,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2509₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2509,
      },
      {
        code: 'per_3h',
        title: '2007₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2007,
      },
      {
        code: 'sum',
        title: '2509 ₽',
        hourAmount: 24,
        priceFewDays: 2509,
      },
    ],
  },
  {
    id: 509,
    point: {
      lat: 56.13193465784014,
      lon: 40.400394601852405,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2194₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2194,
      },
      {
        code: 'per_3h',
        title: '1755₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1755,
      },
      {
        code: 'sum',
        title: '2194 ₽',
        hourAmount: 24,
        priceFewDays: 2194,
      },
    ],
  },
  {
    id: 521,
    point: {
      lat: 56.85732898647889,
      lon: 53.21218027116393,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1439₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1439,
      },
      {
        code: 'per_3h',
        title: '1151₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1151,
      },
      {
        code: 'sum',
        title: '1439 ₽',
        hourAmount: 24,
        priceFewDays: 1439,
      },
    ],
  },
  {
    id: 522,
    point: {
      lat: 56.85746710857503,
      lon: 53.21227683068846,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1416₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1416,
      },
      {
        code: 'per_3h',
        title: '1133₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1133,
      },
      {
        code: 'sum',
        title: '1416 ₽',
        hourAmount: 24,
        priceFewDays: 1416,
      },
    ],
  },
  {
    id: 523,
    point: {
      lat: 56.857528822537596,
      lon: 53.21217490674591,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1475₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1475,
      },
      {
        code: 'per_3h',
        title: '1180₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1180,
      },
      {
        code: 'sum',
        title: '1475 ₽',
        hourAmount: 24,
        priceFewDays: 1475,
      },
    ],
  },
  {
    id: 535,
    point: {
      lat: 60.048472,
      lon: 30.435488,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 536,
    point: {
      lat: 59.95604101228326,
      lon: 30.25253881282806,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 537,
    point: {
      lat: 60.064807,
      lon: 30.444237,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 538,
    point: {
      lat: 59.983707,
      lon: 30.358673,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 547,
    point: {
      lat: 59.928771,
      lon: 30.3678,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4025₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4025,
      },
      {
        code: 'per_3h',
        title: '3220₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3220,
      },
      {
        code: 'sum',
        title: '4025 ₽',
        hourAmount: 24,
        priceFewDays: 4025,
      },
    ],
  },
  {
    id: 553,
    point: {
      lat: 59.99818,
      lon: 30.217988,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2990₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2990,
      },
      {
        code: 'per_3h',
        title: '2392₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2392,
      },
      {
        code: 'sum',
        title: '2990 ₽',
        hourAmount: 24,
        priceFewDays: 2990,
      },
    ],
  },
  {
    id: 559,
    point: {
      lat: 55.86207299263056,
      lon: 37.54929042261506,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3304₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3304,
      },
      {
        code: 'per_3h',
        title: '2643₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2643,
      },
      {
        code: 'sum',
        title: '3304 ₽',
        hourAmount: 24,
        priceFewDays: 3304,
      },
    ],
  },
  {
    id: 560,
    point: {
      lat: 55.861753207192244,
      lon: 37.54981077116395,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3304₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3304,
      },
      {
        code: 'per_3h',
        title: '2643₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2643,
      },
      {
        code: 'sum',
        title: '3304 ₽',
        hourAmount: 24,
        priceFewDays: 3304,
      },
    ],
  },
  {
    id: 561,
    point: {
      lat: 55.87622521042578,
      lon: 37.31469095767213,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3186₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3186,
      },
      {
        code: 'per_3h',
        title: '2549₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2549,
      },
      {
        code: 'sum',
        title: '3186 ₽',
        hourAmount: 24,
        priceFewDays: 3186,
      },
    ],
  },
  {
    id: 562,
    point: {
      lat: 55.87600807743568,
      lon: 37.31490553439331,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4130₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4130,
      },
      {
        code: 'per_3h',
        title: '3304₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3304,
      },
      {
        code: 'sum',
        title: '4130 ₽',
        hourAmount: 24,
        priceFewDays: 4130,
      },
    ],
  },
  {
    id: 563,
    point: {
      lat: 55.7517026707032,
      lon: 37.535623603459136,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '9440₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 9440,
      },
      {
        code: 'per_3h',
        title: '7552₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 7552,
      },
      {
        code: 'sum',
        title: '9440 ₽',
        hourAmount: 24,
        priceFewDays: 9440,
      },
    ],
  },
  {
    id: 564,
    point: {
      lat: 55.84792192762849,
      lon: 37.65130004498286,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3186₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3186,
      },
      {
        code: 'per_3h',
        title: '2549₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2549,
      },
      {
        code: 'sum',
        title: '3186 ₽',
        hourAmount: 24,
        priceFewDays: 3186,
      },
    ],
  },
  {
    id: 565,
    point: {
      lat: 55.679580781549035,
      lon: 37.695379423189564,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3304₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3304,
      },
      {
        code: 'per_3h',
        title: '2643₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2643,
      },
      {
        code: 'sum',
        title: '3304 ₽',
        hourAmount: 24,
        priceFewDays: 3304,
      },
    ],
  },
  {
    id: 566,
    point: {
      lat: 55.67989600930593,
      lon: 37.69565837292711,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3540₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3540,
      },
      {
        code: 'per_3h',
        title: '2832₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2832,
      },
      {
        code: 'sum',
        title: '3540 ₽',
        hourAmount: 24,
        priceFewDays: 3540,
      },
    ],
  },
  {
    id: 567,
    point: {
      lat: 55.77502126555214,
      lon: 37.47056924566319,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3540₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3540,
      },
      {
        code: 'per_3h',
        title: '2832₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2832,
      },
      {
        code: 'sum',
        title: '3540 ₽',
        hourAmount: 24,
        priceFewDays: 3540,
      },
    ],
  },
  {
    id: 568,
    point: {
      lat: 55.77505452532283,
      lon: 37.47049414381077,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3422₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3422,
      },
      {
        code: 'per_3h',
        title: '2738₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2738,
      },
      {
        code: 'sum',
        title: '3422 ₽',
        hourAmount: 24,
        priceFewDays: 3422,
      },
    ],
  },
  {
    id: 569,
    point: {
      lat: 55.77509987950963,
      lon: 37.47049414381077,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3422₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3422,
      },
      {
        code: 'per_3h',
        title: '2738₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2738,
      },
      {
        code: 'sum',
        title: '3422 ₽',
        hourAmount: 24,
        priceFewDays: 3422,
      },
    ],
  },
  {
    id: 570,
    point: {
      lat: 55.77509987950963,
      lon: 37.4705638812451,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4956₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4956,
      },
      {
        code: 'per_3h',
        title: '3965₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3965,
      },
      {
        code: 'sum',
        title: '4956 ₽',
        hourAmount: 24,
        priceFewDays: 4956,
      },
    ],
  },
  {
    id: 571,
    point: {
      lat: 55.77515430446385,
      lon: 37.47055315240911,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3658₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3658,
      },
      {
        code: 'per_3h',
        title: '2926₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2926,
      },
      {
        code: 'sum',
        title: '3658 ₽',
        hourAmount: 24,
        priceFewDays: 3658,
      },
    ],
  },
  {
    id: 572,
    point: {
      lat: 53.21888808147168,
      lon: 50.18982944047542,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2978₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2978,
      },
      {
        code: 'per_3h',
        title: '2382₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2382,
      },
      {
        code: 'sum',
        title: '2978 ₽',
        hourAmount: 24,
        priceFewDays: 2978,
      },
    ],
  },
  {
    id: 573,
    point: {
      lat: 53.242047,
      lon: 50.180934,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2518₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2518,
      },
      {
        code: 'per_3h',
        title: '2014₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2014,
      },
      {
        code: 'sum',
        title: '2518 ₽',
        hourAmount: 24,
        priceFewDays: 2518,
      },
    ],
  },
  {
    id: 574,
    point: {
      lat: 53.221713681694425,
      lon: 50.16838467790979,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3323₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3323,
      },
      {
        code: 'per_3h',
        title: '2658₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2658,
      },
      {
        code: 'sum',
        title: '3323 ₽',
        hourAmount: 24,
        priceFewDays: 3323,
      },
    ],
  },
  {
    id: 575,
    point: {
      lat: 53.22159046143631,
      lon: 50.16908362698356,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3208₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3208,
      },
      {
        code: 'per_3h',
        title: '2566₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2566,
      },
      {
        code: 'sum',
        title: '3208 ₽',
        hourAmount: 24,
        priceFewDays: 3208,
      },
    ],
  },
  {
    id: 576,
    point: {
      lat: 53.22150353340372,
      lon: 50.16924992394247,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3208₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3208,
      },
      {
        code: 'per_3h',
        title: '2566₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2566,
      },
      {
        code: 'sum',
        title: '3208 ₽',
        hourAmount: 24,
        priceFewDays: 3208,
      },
    ],
  },
  {
    id: 577,
    point: {
      lat: 53.231026,
      lon: 50.187644,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2748₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2748,
      },
      {
        code: 'per_3h',
        title: '2198₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2198,
      },
      {
        code: 'sum',
        title: '2748 ₽',
        hourAmount: 24,
        priceFewDays: 2748,
      },
    ],
  },
  {
    id: 578,
    point: {
      lat: 53.24423,
      lon: 50.185982,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2518₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2518,
      },
      {
        code: 'per_3h',
        title: '2014₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2014,
      },
      {
        code: 'sum',
        title: '2518 ₽',
        hourAmount: 24,
        priceFewDays: 2518,
      },
    ],
  },
  {
    id: 579,
    point: {
      lat: 53.242241,
      lon: 50.17955,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2518₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2518,
      },
      {
        code: 'per_3h',
        title: '2014₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2014,
      },
      {
        code: 'sum',
        title: '2518 ₽',
        hourAmount: 24,
        priceFewDays: 2518,
      },
    ],
  },
  {
    id: 580,
    point: {
      lat: 53.244101,
      lon: 50.194903,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2518₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2518,
      },
      {
        code: 'per_3h',
        title: '2014₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2014,
      },
      {
        code: 'sum',
        title: '2518 ₽',
        hourAmount: 24,
        priceFewDays: 2518,
      },
    ],
  },
  {
    id: 581,
    point: {
      lat: 53.242802,
      lon: 50.18114,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2518₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2518,
      },
      {
        code: 'per_3h',
        title: '2014₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2014,
      },
      {
        code: 'sum',
        title: '2518 ₽',
        hourAmount: 24,
        priceFewDays: 2518,
      },
    ],
  },
  {
    id: 582,
    point: {
      lat: 53.21875285143802,
      lon: 50.19020494973747,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2863₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2863,
      },
      {
        code: 'per_3h',
        title: '2290₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2290,
      },
      {
        code: 'sum',
        title: '2863 ₽',
        hourAmount: 24,
        priceFewDays: 2863,
      },
    ],
  },
  {
    id: 583,
    point: {
      lat: 53.242856,
      lon: 50.178751,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3323₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3323,
      },
      {
        code: 'per_3h',
        title: '2658₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2658,
      },
      {
        code: 'sum',
        title: '3323 ₽',
        hourAmount: 24,
        priceFewDays: 3323,
      },
    ],
  },
  {
    id: 584,
    point: {
      lat: 53.223236,
      lon: 50.194022,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2863₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2863,
      },
      {
        code: 'per_3h',
        title: '2290₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2290,
      },
      {
        code: 'sum',
        title: '2863 ₽',
        hourAmount: 24,
        priceFewDays: 2863,
      },
    ],
  },
  {
    id: 585,
    point: {
      lat: 53.23752114846949,
      lon: 50.18128492327876,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2518₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2518,
      },
      {
        code: 'per_3h',
        title: '2014₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2014,
      },
      {
        code: 'sum',
        title: '2518 ₽',
        hourAmount: 24,
        priceFewDays: 2518,
      },
    ],
  },
  {
    id: 587,
    point: {
      lat: 53.22271861828625,
      lon: 50.18982833928673,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1943₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1943,
      },
      {
        code: 'per_3h',
        title: '1554₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1554,
      },
      {
        code: 'sum',
        title: '1943 ₽',
        hourAmount: 24,
        priceFewDays: 1943,
      },
    ],
  },
  {
    id: 588,
    point: {
      lat: 53.22252223026969,
      lon: 50.1897103220901,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1943₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1943,
      },
      {
        code: 'per_3h',
        title: '1554₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1554,
      },
      {
        code: 'sum',
        title: '1943 ₽',
        hourAmount: 24,
        priceFewDays: 1943,
      },
    ],
  },
  {
    id: 589,
    point: {
      lat: 53.21084972600547,
      lon: 50.1647599146805,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2863₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2863,
      },
      {
        code: 'per_3h',
        title: '2290₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2290,
      },
      {
        code: 'sum',
        title: '2863 ₽',
        hourAmount: 24,
        priceFewDays: 2863,
      },
    ],
  },
  {
    id: 590,
    point: {
      lat: 53.21058887566523,
      lon: 50.16511396627045,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2863₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2863,
      },
      {
        code: 'per_3h',
        title: '2290₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2290,
      },
      {
        code: 'sum',
        title: '2863 ₽',
        hourAmount: 24,
        priceFewDays: 2863,
      },
    ],
  },
  {
    id: 591,
    point: {
      lat: 53.218184,
      lon: 50.170244,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2748₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2748,
      },
      {
        code: 'per_3h',
        title: '2198₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2198,
      },
      {
        code: 'sum',
        title: '2748 ₽',
        hourAmount: 24,
        priceFewDays: 2748,
      },
    ],
  },
  {
    id: 592,
    point: {
      lat: 53.248029,
      lon: 50.193178,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2518₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2518,
      },
      {
        code: 'per_3h',
        title: '2014₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2014,
      },
      {
        code: 'sum',
        title: '2518 ₽',
        hourAmount: 24,
        priceFewDays: 2518,
      },
    ],
  },
  {
    id: 595,
    point: {
      lat: 59.727091,
      lon: 30.42169,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4760,
      },
      {
        code: 'per_3h',
        title: '3808₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3808,
      },
      {
        code: 'sum',
        title: '4760 ₽',
        hourAmount: 24,
        priceFewDays: 4760,
      },
    ],
  },
  {
    id: 596,
    point: {
      lat: 59.725131,
      lon: 30.415132,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5301₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5301,
      },
      {
        code: 'per_3h',
        title: '4241₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4241,
      },
      {
        code: 'sum',
        title: '5301 ₽',
        hourAmount: 24,
        priceFewDays: 5301,
      },
    ],
  },
  {
    id: 602,
    point: {
      lat: 55.059688,
      lon: 82.914195,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3228₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3228,
      },
      {
        code: 'per_3h',
        title: '2582₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2582,
      },
      {
        code: 'sum',
        title: '3228 ₽',
        hourAmount: 24,
        priceFewDays: 3228,
      },
    ],
  },
  {
    id: 603,
    point: {
      lat: 55.062179,
      lon: 82.902778,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3228₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3228,
      },
      {
        code: 'per_3h',
        title: '2582₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2582,
      },
      {
        code: 'sum',
        title: '3228 ₽',
        hourAmount: 24,
        priceFewDays: 3228,
      },
    ],
  },
  {
    id: 604,
    point: {
      lat: 55.00138,
      lon: 83.027392,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2868₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2868,
      },
      {
        code: 'per_3h',
        title: '2294₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2294,
      },
      {
        code: 'sum',
        title: '2868 ₽',
        hourAmount: 24,
        priceFewDays: 2868,
      },
    ],
  },
  {
    id: 605,
    point: {
      lat: 53.336505,
      lon: 83.778985,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '8280₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 8280,
      },
      {
        code: 'per_3h',
        title: '6624₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 6624,
      },
      {
        code: 'sum',
        title: '8280 ₽',
        hourAmount: 24,
        priceFewDays: 8280,
      },
    ],
  },
  {
    id: 606,
    point: {
      lat: 55.06031989827821,
      lon: 82.90293046804713,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '10680₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 10680,
      },
      {
        code: 'per_3h',
        title: '8544₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 8544,
      },
      {
        code: 'sum',
        title: '10680 ₽',
        hourAmount: 24,
        priceFewDays: 10680,
      },
    ],
  },
  {
    id: 607,
    point: {
      lat: 55.00215186769563,
      lon: 83.01517499999996,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3016₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3016,
      },
      {
        code: 'per_3h',
        title: '2413₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2413,
      },
      {
        code: 'sum',
        title: '3016 ₽',
        hourAmount: 24,
        priceFewDays: 3016,
      },
    ],
  },
  {
    id: 608,
    point: {
      lat: 54.990679,
      lon: 82.904997,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '7080₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 7080,
      },
      {
        code: 'per_3h',
        title: '5664₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5664,
      },
      {
        code: 'sum',
        title: '7080 ₽',
        hourAmount: 24,
        priceFewDays: 7080,
      },
    ],
  },
  {
    id: 609,
    point: {
      lat: 55.050808,
      lon: 82.900325,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '9480₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 9480,
      },
      {
        code: 'per_3h',
        title: '7584₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 7584,
      },
      {
        code: 'sum',
        title: '9480 ₽',
        hourAmount: 24,
        priceFewDays: 9480,
      },
    ],
  },
  {
    id: 610,
    point: {
      lat: 54.938214,
      lon: 83.110837,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1908₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1908,
      },
      {
        code: 'per_3h',
        title: '1526₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1526,
      },
      {
        code: 'sum',
        title: '1908 ₽',
        hourAmount: 24,
        priceFewDays: 1908,
      },
    ],
  },
  {
    id: 611,
    point: {
      lat: 55.058946,
      lon: 82.918615,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3468₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3468,
      },
      {
        code: 'per_3h',
        title: '2774₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2774,
      },
      {
        code: 'sum',
        title: '3468 ₽',
        hourAmount: 24,
        priceFewDays: 3468,
      },
    ],
  },
  {
    id: 612,
    point: {
      lat: 55.040384,
      lon: 82.94384,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3108₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3108,
      },
      {
        code: 'per_3h',
        title: '2486₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2486,
      },
      {
        code: 'sum',
        title: '3108 ₽',
        hourAmount: 24,
        priceFewDays: 3108,
      },
    ],
  },
  {
    id: 613,
    point: {
      lat: 55.052522794978024,
      lon: 82.90434222883593,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '10680₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 10680,
      },
      {
        code: 'per_3h',
        title: '8544₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 8544,
      },
      {
        code: 'sum',
        title: '10680 ₽',
        hourAmount: 24,
        priceFewDays: 10680,
      },
    ],
  },
  {
    id: 614,
    point: {
      lat: 55.041483,
      lon: 82.921957,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '8280₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 8280,
      },
      {
        code: 'per_3h',
        title: '6624₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 6624,
      },
      {
        code: 'sum',
        title: '8280 ₽',
        hourAmount: 24,
        priceFewDays: 8280,
      },
    ],
  },
  {
    id: 615,
    point: {
      lat: 55.001545,
      lon: 83.013872,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3176₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3176,
      },
      {
        code: 'per_3h',
        title: '2541₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2541,
      },
      {
        code: 'sum',
        title: '3176 ₽',
        hourAmount: 24,
        priceFewDays: 3176,
      },
    ],
  },
  {
    id: 616,
    point: {
      lat: 55.00183117618551,
      lon: 83.01503552513117,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3336₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3336,
      },
      {
        code: 'per_3h',
        title: '2669₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2669,
      },
      {
        code: 'sum',
        title: '3336 ₽',
        hourAmount: 24,
        priceFewDays: 3336,
      },
    ],
  },
  {
    id: 617,
    point: {
      lat: 55.042932,
      lon: 82.938459,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3228₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3228,
      },
      {
        code: 'per_3h',
        title: '2582₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2582,
      },
      {
        code: 'sum',
        title: '3228 ₽',
        hourAmount: 24,
        priceFewDays: 3228,
      },
    ],
  },
  {
    id: 618,
    point: {
      lat: 55.062411,
      lon: 82.904071,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3228₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3228,
      },
      {
        code: 'per_3h',
        title: '2582₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2582,
      },
      {
        code: 'sum',
        title: '3228 ₽',
        hourAmount: 24,
        priceFewDays: 3228,
      },
    ],
  },
  {
    id: 619,
    point: {
      lat: 55.040858,
      lon: 82.973367,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3228₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3228,
      },
      {
        code: 'per_3h',
        title: '2582₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2582,
      },
      {
        code: 'sum',
        title: '3228 ₽',
        hourAmount: 24,
        priceFewDays: 3228,
      },
    ],
  },
  {
    id: 620,
    point: {
      lat: 55.059121,
      lon: 82.891971,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2628₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2628,
      },
      {
        code: 'per_3h',
        title: '2102₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2102,
      },
      {
        code: 'sum',
        title: '2628 ₽',
        hourAmount: 24,
        priceFewDays: 2628,
      },
    ],
  },
  {
    id: 621,
    point: {
      lat: 54.87388,
      lon: 83.106632,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2388₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2388,
      },
      {
        code: 'per_3h',
        title: '1910₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1910,
      },
      {
        code: 'sum',
        title: '2388 ₽',
        hourAmount: 24,
        priceFewDays: 2388,
      },
    ],
  },
  {
    id: 622,
    point: {
      lat: 55.035751,
      lon: 82.917241,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3108₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3108,
      },
      {
        code: 'per_3h',
        title: '2486₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2486,
      },
      {
        code: 'sum',
        title: '3108 ₽',
        hourAmount: 24,
        priceFewDays: 3108,
      },
    ],
  },
  {
    id: 623,
    point: {
      lat: 55.035132,
      lon: 82.976934,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3348₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3348,
      },
      {
        code: 'per_3h',
        title: '2678₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2678,
      },
      {
        code: 'sum',
        title: '3348 ₽',
        hourAmount: 24,
        priceFewDays: 3348,
      },
    ],
  },
  {
    id: 624,
    point: {
      lat: 54.989445,
      lon: 82.90629,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2748₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2748,
      },
      {
        code: 'per_3h',
        title: '2198₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2198,
      },
      {
        code: 'sum',
        title: '2748 ₽',
        hourAmount: 24,
        priceFewDays: 2748,
      },
    ],
  },
  {
    id: 625,
    point: {
      lat: 55.01293,
      lon: 82.943355,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2748₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2748,
      },
      {
        code: 'per_3h',
        title: '2198₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2198,
      },
      {
        code: 'sum',
        title: '2748 ₽',
        hourAmount: 24,
        priceFewDays: 2748,
      },
    ],
  },
  {
    id: 626,
    point: {
      lat: 54.810792,
      lon: 83.176351,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '13080₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 13080,
      },
      {
        code: 'per_3h',
        title: '10464₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 10464,
      },
      {
        code: 'sum',
        title: '13080 ₽',
        hourAmount: 24,
        priceFewDays: 13080,
      },
    ],
  },
  {
    id: 627,
    point: {
      lat: 54.98972713644653,
      lon: 82.91709664418029,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3348₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3348,
      },
      {
        code: 'per_3h',
        title: '2678₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2678,
      },
      {
        code: 'sum',
        title: '3348 ₽',
        hourAmount: 24,
        priceFewDays: 3348,
      },
    ],
  },
  {
    id: 628,
    point: {
      lat: 55.051907,
      lon: 82.905589,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '9480₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 9480,
      },
      {
        code: 'per_3h',
        title: '7584₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 7584,
      },
      {
        code: 'sum',
        title: '9480 ₽',
        hourAmount: 24,
        priceFewDays: 9480,
      },
    ],
  },
  {
    id: 629,
    point: {
      lat: 54.975672,
      lon: 83.083761,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2868₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2868,
      },
      {
        code: 'per_3h',
        title: '2294₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2294,
      },
      {
        code: 'sum',
        title: '2868 ₽',
        hourAmount: 24,
        priceFewDays: 2868,
      },
    ],
  },
  {
    id: 630,
    point: {
      lat: 55.043345,
      lon: 82.927104,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3228₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3228,
      },
      {
        code: 'per_3h',
        title: '2582₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2582,
      },
      {
        code: 'sum',
        title: '3228 ₽',
        hourAmount: 24,
        priceFewDays: 3228,
      },
    ],
  },
  {
    id: 631,
    point: {
      lat: 54.9376353041353,
      lon: 83.10340022883595,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2218₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2218,
      },
      {
        code: 'per_3h',
        title: '1774₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1774,
      },
      {
        code: 'sum',
        title: '2218 ₽',
        hourAmount: 24,
        priceFewDays: 2218,
      },
    ],
  },
  {
    id: 632,
    point: {
      lat: 55.003033,
      lon: 83.028165,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2628₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2628,
      },
      {
        code: 'per_3h',
        title: '2102₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2102,
      },
      {
        code: 'sum',
        title: '2628 ₽',
        hourAmount: 24,
        priceFewDays: 2628,
      },
    ],
  },
  {
    id: 633,
    point: {
      lat: 54.986728,
      lon: 82.899876,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3588₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3588,
      },
      {
        code: 'per_3h',
        title: '2870₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2870,
      },
      {
        code: 'sum',
        title: '3588 ₽',
        hourAmount: 24,
        priceFewDays: 3588,
      },
    ],
  },
  {
    id: 634,
    point: {
      lat: 54.98930147055252,
      lon: 82.91709664418029,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3814₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3814,
      },
      {
        code: 'per_3h',
        title: '3051₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3051,
      },
      {
        code: 'sum',
        title: '3814 ₽',
        hourAmount: 24,
        priceFewDays: 3814,
      },
    ],
  },
  {
    id: 635,
    point: {
      lat: 54.996345,
      lon: 82.957153,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3108₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3108,
      },
      {
        code: 'per_3h',
        title: '2486₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2486,
      },
      {
        code: 'sum',
        title: '3108 ₽',
        hourAmount: 24,
        priceFewDays: 3108,
      },
    ],
  },
  {
    id: 636,
    point: {
      lat: 54.93708026747163,
      lon: 83.1010318308394,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2857₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2857,
      },
      {
        code: 'per_3h',
        title: '2286₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2286,
      },
      {
        code: 'sum',
        title: '2857 ₽',
        hourAmount: 24,
        priceFewDays: 2857,
      },
    ],
  },
  {
    id: 637,
    point: {
      lat: 54.860451,
      lon: 83.080473,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2628₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2628,
      },
      {
        code: 'per_3h',
        title: '2102₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2102,
      },
      {
        code: 'sum',
        title: '2628 ₽',
        hourAmount: 24,
        priceFewDays: 2628,
      },
    ],
  },
  {
    id: 638,
    point: {
      lat: 54.938079,
      lon: 83.105186,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2148₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2148,
      },
      {
        code: 'per_3h',
        title: '1718₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1718,
      },
      {
        code: 'sum',
        title: '2148 ₽',
        hourAmount: 24,
        priceFewDays: 2148,
      },
    ],
  },
  {
    id: 639,
    point: {
      lat: 54.9377403143246,
      lon: 83.10384011111442,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2538₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2538,
      },
      {
        code: 'per_3h',
        title: '2030₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2030,
      },
      {
        code: 'sum',
        title: '2538 ₽',
        hourAmount: 24,
        priceFewDays: 2538,
      },
    ],
  },
  {
    id: 640,
    point: {
      lat: 54.866751,
      lon: 83.089609,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2508₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2508,
      },
      {
        code: 'per_3h',
        title: '2006₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2006,
      },
      {
        code: 'sum',
        title: '2508 ₽',
        hourAmount: 24,
        priceFewDays: 2508,
      },
    ],
  },
  {
    id: 641,
    point: {
      lat: 54.937427,
      lon: 83.106372,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2028₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2028,
      },
      {
        code: 'per_3h',
        title: '1622₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1622,
      },
      {
        code: 'sum',
        title: '2028 ₽',
        hourAmount: 24,
        priceFewDays: 2028,
      },
    ],
  },
  {
    id: 642,
    point: {
      lat: 55.044151411691765,
      lon: 82.93373487301625,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1908₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1908,
      },
      {
        code: 'per_3h',
        title: '1526₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1526,
      },
      {
        code: 'sum',
        title: '1908 ₽',
        hourAmount: 24,
        priceFewDays: 1908,
      },
    ],
  },
  {
    id: 643,
    point: {
      lat: 55.04433623024619,
      lon: 82.93367586441795,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2148₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2148,
      },
      {
        code: 'per_3h',
        title: '1718₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1718,
      },
      {
        code: 'sum',
        title: '2148 ₽',
        hourAmount: 24,
        priceFewDays: 2148,
      },
    ],
  },
  {
    id: 644,
    point: {
      lat: 54.977212,
      lon: 83.049005,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2748₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2748,
      },
      {
        code: 'per_3h',
        title: '2198₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2198,
      },
      {
        code: 'sum',
        title: '2748 ₽',
        hourAmount: 24,
        priceFewDays: 2748,
      },
    ],
  },
  {
    id: 645,
    point: {
      lat: 54.973817,
      lon: 83.074338,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2628₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2628,
      },
      {
        code: 'per_3h',
        title: '2102₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2102,
      },
      {
        code: 'sum',
        title: '2628 ₽',
        hourAmount: 24,
        priceFewDays: 2628,
      },
    ],
  },
  {
    id: 646,
    point: {
      lat: 54.937284113354764,
      lon: 83.10131614499501,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2148₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2148,
      },
      {
        code: 'per_3h',
        title: '1718₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1718,
      },
      {
        code: 'sum',
        title: '2148 ₽',
        hourAmount: 24,
        priceFewDays: 2148,
      },
    ],
  },
  {
    id: 647,
    point: {
      lat: 54.998979,
      lon: 82.951826,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3108₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3108,
      },
      {
        code: 'per_3h',
        title: '2486₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2486,
      },
      {
        code: 'sum',
        title: '3108 ₽',
        hourAmount: 24,
        priceFewDays: 3108,
      },
    ],
  },
  {
    id: 648,
    point: {
      lat: 55.033419,
      lon: 82.913135,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3588₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3588,
      },
      {
        code: 'per_3h',
        title: '2870₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2870,
      },
      {
        code: 'sum',
        title: '3588 ₽',
        hourAmount: 24,
        priceFewDays: 3588,
      },
    ],
  },
  {
    id: 649,
    point: {
      lat: 55.04457275374002,
      lon: 82.93360592239299,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2028₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2028,
      },
      {
        code: 'per_3h',
        title: '1622₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1622,
      },
      {
        code: 'sum',
        title: '2028 ₽',
        hourAmount: 24,
        priceFewDays: 2028,
      },
    ],
  },
  {
    id: 650,
    point: {
      lat: 54.989863,
      lon: 82.918247,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3108₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3108,
      },
      {
        code: 'per_3h',
        title: '2486₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2486,
      },
      {
        code: 'sum',
        title: '3108 ₽',
        hourAmount: 24,
        priceFewDays: 3108,
      },
    ],
  },
  {
    id: 651,
    point: {
      lat: 54.991062,
      lon: 82.917052,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3108₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3108,
      },
      {
        code: 'per_3h',
        title: '2486₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2486,
      },
      {
        code: 'sum',
        title: '3108 ₽',
        hourAmount: 24,
        priceFewDays: 3108,
      },
    ],
  },
  {
    id: 652,
    point: {
      lat: 55.039153289064814,
      lon: 82.97165894907373,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3468₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3468,
      },
      {
        code: 'per_3h',
        title: '2774₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2774,
      },
      {
        code: 'sum',
        title: '3468 ₽',
        hourAmount: 24,
        priceFewDays: 3468,
      },
    ],
  },
  {
    id: 653,
    point: {
      lat: 55.057682,
      lon: 82.912444,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3228₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3228,
      },
      {
        code: 'per_3h',
        title: '2582₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2582,
      },
      {
        code: 'sum',
        title: '3228 ₽',
        hourAmount: 24,
        priceFewDays: 3228,
      },
    ],
  },
  {
    id: 654,
    point: {
      lat: 55.039034269639494,
      lon: 82.9719357831996,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3468₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3468,
      },
      {
        code: 'per_3h',
        title: '2774₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2774,
      },
      {
        code: 'sum',
        title: '3468 ₽',
        hourAmount: 24,
        priceFewDays: 3468,
      },
    ],
  },
  {
    id: 655,
    point: {
      lat: 55.060205972624516,
      lon: 82.90258178087517,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '9000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 9000,
      },
      {
        code: 'per_3h',
        title: '7200₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 7200,
      },
      {
        code: 'sum',
        title: '9000 ₽',
        hourAmount: 24,
        priceFewDays: 9000,
      },
    ],
  },
  {
    id: 656,
    point: {
      lat: 55.90974731495519,
      lon: 37.39079367233315,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3100₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3100,
      },
      {
        code: 'per_3h',
        title: '2480₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2480,
      },
      {
        code: 'sum',
        title: '3100 ₽',
        hourAmount: 24,
        priceFewDays: 3100,
      },
    ],
  },
  {
    id: 657,
    point: {
      lat: 55.90981360336841,
      lon: 37.39061128212015,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3200,
      },
      {
        code: 'per_3h',
        title: '2560₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2560,
      },
      {
        code: 'sum',
        title: '3200 ₽',
        hourAmount: 24,
        priceFewDays: 3200,
      },
    ],
  },
  {
    id: 658,
    point: {
      lat: 55.9098979702752,
      lon: 37.390799036751204,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3500,
      },
      {
        code: 'per_3h',
        title: '2800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2800,
      },
      {
        code: 'sum',
        title: '3500 ₽',
        hourAmount: 24,
        priceFewDays: 3500,
      },
    ],
  },
  {
    id: 659,
    point: {
      lat: 55.90996124533434,
      lon: 37.390605917702125,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 660,
    point: {
      lat: 55.91001548101678,
      lon: 37.39080440116923,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 662,
    point: {
      lat: 55.91010888673576,
      lon: 37.39064883304636,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 665,
    point: {
      lat: 55.91016312221082,
      lon: 37.39078830791512,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 666,
    point: {
      lat: 55.910235436059104,
      lon: 37.390654197464386,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3200,
      },
      {
        code: 'per_3h',
        title: '2560₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2560,
      },
      {
        code: 'sum',
        title: '3200 ₽',
        hourAmount: 24,
        priceFewDays: 3200,
      },
    ],
  },
  {
    id: 667,
    point: {
      lat: 55.910271592932446,
      lon: 37.39082585884133,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 668,
    point: {
      lat: 55.91022307719185,
      lon: 37.390681501632464,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3200,
      },
      {
        code: 'per_3h',
        title: '2560₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2560,
      },
      {
        code: 'sum',
        title: '3200 ₽',
        hourAmount: 24,
        priceFewDays: 3200,
      },
    ],
  },
  {
    id: 669,
    point: {
      lat: 55.91013871099537,
      lon: 37.39089607835367,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3300,
      },
      {
        code: 'per_3h',
        title: '2640₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2640,
      },
      {
        code: 'sum',
        title: '3300 ₽',
        hourAmount: 24,
        priceFewDays: 3300,
      },
    ],
  },
  {
    id: 670,
    point: {
      lat: 55.91021102488934,
      lon: 37.391067739730616,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 671,
    point: {
      lat: 55.91012607208092,
      lon: 37.391280742988016,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2900₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2900,
      },
      {
        code: 'per_3h',
        title: '2320₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2320,
      },
      {
        code: 'sum',
        title: '2900 ₽',
        hourAmount: 24,
        priceFewDays: 2900,
      },
    ],
  },
  {
    id: 672,
    point: {
      lat: 55.91019838599858,
      lon: 37.391430946692836,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2800,
      },
      {
        code: 'per_3h',
        title: '2240₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2240,
      },
      {
        code: 'sum',
        title: '2800 ₽',
        hourAmount: 24,
        priceFewDays: 2800,
      },
    ],
  },
  {
    id: 673,
    point: {
      lat: 55.91012607208092,
      lon: 37.3916026080698,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3300,
      },
      {
        code: 'per_3h',
        title: '2640₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2640,
      },
      {
        code: 'sum',
        title: '3300 ₽',
        hourAmount: 24,
        priceFewDays: 3300,
      },
    ],
  },
  {
    id: 674,
    point: {
      lat: 55.910210438305015,
      lon: 37.39168843875828,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3200,
      },
      {
        code: 'per_3h',
        title: '2560₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2560,
      },
      {
        code: 'sum',
        title: '3200 ₽',
        hourAmount: 24,
        priceFewDays: 3200,
      },
    ],
  },
  {
    id: 675,
    point: {
      lat: 55.91013812440993,
      lon: 37.39188155780736,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3500,
      },
      {
        code: 'per_3h',
        title: '2800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2800,
      },
      {
        code: 'sum',
        title: '3500 ₽',
        hourAmount: 24,
        priceFewDays: 3500,
      },
    ],
  },
  {
    id: 679,
    point: {
      lat: 55.91013812440993,
      lon: 37.39188155780736,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2700,
      },
      {
        code: 'per_3h',
        title: '2160₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2160,
      },
      {
        code: 'sum',
        title: '2700 ₽',
        hourAmount: 24,
        priceFewDays: 2700,
      },
    ],
  },
  {
    id: 680,
    point: {
      lat: 55.910210438305015,
      lon: 37.39201030384007,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3200,
      },
      {
        code: 'per_3h',
        title: '2560₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2560,
      },
      {
        code: 'sum',
        title: '3200 ₽',
        hourAmount: 24,
        priceFewDays: 3200,
      },
    ],
  },
  {
    id: 681,
    point: {
      lat: 55.9100899150713,
      lon: 37.39211759220065,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6000,
      },
      {
        code: 'per_3h',
        title: '4800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4800,
      },
      {
        code: 'sum',
        title: '6000 ₽',
        hourAmount: 24,
        priceFewDays: 6000,
      },
    ],
  },
  {
    id: 682,
    point: {
      lat: 55.910074,
      lon: 37.392041,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2700,
      },
      {
        code: 'per_3h',
        title: '2160₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2160,
      },
      {
        code: 'sum',
        title: '2700 ₽',
        hourAmount: 24,
        priceFewDays: 2700,
      },
    ],
  },
  {
    id: 683,
    point: {
      lat: 55.910074,
      lon: 37.392041,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2800,
      },
      {
        code: 'per_3h',
        title: '2240₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2240,
      },
      {
        code: 'sum',
        title: '2800 ₽',
        hourAmount: 24,
        priceFewDays: 2800,
      },
    ],
  },
  {
    id: 684,
    point: {
      lat: 55.910069,
      lon: 37.390838,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 685,
    point: {
      lat: 55.910069,
      lon: 37.390838,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 686,
    point: {
      lat: 55.910074,
      lon: 37.392041,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 921,
    point: {
      lat: 55.7495187469957,
      lon: 37.53394179629509,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '23000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 23000,
      },
      {
        code: 'per_3h',
        title: '18400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 18400,
      },
      {
        code: 'sum',
        title: '23000 ₽',
        hourAmount: 24,
        priceFewDays: 23000,
      },
    ],
  },
  {
    id: 922,
    point: {
      lat: 55.74699713824093,
      lon: 37.538740457529315,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '23000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 23000,
      },
      {
        code: 'per_3h',
        title: '18400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 18400,
      },
      {
        code: 'sum',
        title: '23000 ₽',
        hourAmount: 24,
        priceFewDays: 23000,
      },
    ],
  },
  {
    id: 923,
    point: {
      lat: 55.746741347150255,
      lon: 37.53877589316486,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '18400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 18400,
      },
      {
        code: 'per_3h',
        title: '14720₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 14720,
      },
      {
        code: 'sum',
        title: '18400 ₽',
        hourAmount: 24,
        priceFewDays: 18400,
      },
    ],
  },
  {
    id: 924,
    point: {
      lat: 55.75170678259112,
      lon: 37.533467202938546,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '13800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 13800,
      },
      {
        code: 'per_3h',
        title: '11040₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 11040,
      },
      {
        code: 'sum',
        title: '13800 ₽',
        hourAmount: 24,
        priceFewDays: 13800,
      },
    ],
  },
  {
    id: 925,
    point: {
      lat: 55.74698341197326,
      lon: 37.53909775824665,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '18400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 18400,
      },
      {
        code: 'per_3h',
        title: '14720₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 14720,
      },
      {
        code: 'sum',
        title: '18400 ₽',
        hourAmount: 24,
        priceFewDays: 18400,
      },
    ],
  },
  {
    id: 927,
    point: {
      lat: 55.751694680857334,
      lon: 37.53391781405305,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '18400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 18400,
      },
      {
        code: 'per_3h',
        title: '14720₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 14720,
      },
      {
        code: 'sum',
        title: '18400 ₽',
        hourAmount: 24,
        priceFewDays: 18400,
      },
    ],
  },
  {
    id: 928,
    point: {
      lat: 55.751525256188344,
      lon: 37.533992915905465,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '18400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 18400,
      },
      {
        code: 'per_3h',
        title: '14720₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 14720,
      },
      {
        code: 'sum',
        title: '18400 ₽',
        hourAmount: 24,
        priceFewDays: 18400,
      },
    ],
  },
  {
    id: 929,
    point: {
      lat: 55.74954295181533,
      lon: 37.53423147486869,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '23000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 23000,
      },
      {
        code: 'per_3h',
        title: '18400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 18400,
      },
      {
        code: 'sum',
        title: '23000 ₽',
        hourAmount: 24,
        priceFewDays: 23000,
      },
    ],
  },
  {
    id: 930,
    point: {
      lat: 55.74950664458022,
      lon: 37.53384523677053,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '18400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 18400,
      },
      {
        code: 'per_3h',
        title: '14720₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 14720,
      },
      {
        code: 'sum',
        title: '18400 ₽',
        hourAmount: 24,
        priceFewDays: 18400,
      },
    ],
  },
  {
    id: 931,
    point: {
      lat: 55.7468411990725,
      lon: 37.53947863192678,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '18400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 18400,
      },
      {
        code: 'per_3h',
        title: '14720₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 14720,
      },
      {
        code: 'sum',
        title: '18400 ₽',
        hourAmount: 24,
        priceFewDays: 18400,
      },
    ],
  },
  {
    id: 933,
    point: {
      lat: 55.74927669796986,
      lon: 37.534016898147485,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '23000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 23000,
      },
      {
        code: 'per_3h',
        title: '18400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 18400,
      },
      {
        code: 'sum',
        title: '23000 ₽',
        hourAmount: 24,
        priceFewDays: 23000,
      },
    ],
  },
  {
    id: 935,
    point: {
      lat: 55.751370005398954,
      lon: 37.53341444930695,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '18400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 18400,
      },
      {
        code: 'per_3h',
        title: '14720₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 14720,
      },
      {
        code: 'sum',
        title: '18400 ₽',
        hourAmount: 24,
        priceFewDays: 18400,
      },
    ],
  },
  {
    id: 936,
    point: {
      lat: 55.7512429359044,
      lon: 37.53378995856903,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '18400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 18400,
      },
      {
        code: 'per_3h',
        title: '14720₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 14720,
      },
      {
        code: 'sum',
        title: '18400 ₽',
        hourAmount: 24,
        priceFewDays: 18400,
      },
    ],
  },
  {
    id: 937,
    point: {
      lat: 55.751611907598246,
      lon: 37.53548412859035,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '12650₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 12650,
      },
      {
        code: 'per_3h',
        title: '10120₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 10120,
      },
      {
        code: 'sum',
        title: '12650 ₽',
        hourAmount: 24,
        priceFewDays: 12650,
      },
    ],
  },
  {
    id: 938,
    point: {
      lat: 55.74711957277341,
      lon: 37.539575191451306,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '23000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 23000,
      },
      {
        code: 'per_3h',
        title: '18400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 18400,
      },
      {
        code: 'sum',
        title: '23000 ₽',
        hourAmount: 24,
        priceFewDays: 23000,
      },
    ],
  },
  {
    id: 939,
    point: {
      lat: 44.548847,
      lon: 38.077303,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3105₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3105,
      },
      {
        code: 'per_3h',
        title: '2484₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2484,
      },
      {
        code: 'sum',
        title: '3105 ₽',
        hourAmount: 24,
        priceFewDays: 3105,
      },
    ],
  },
  {
    id: 941,
    point: {
      lat: 44.589989,
      lon: 38.055932,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4600,
      },
      {
        code: 'per_3h',
        title: '3680₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3680,
      },
      {
        code: 'sum',
        title: '4600 ₽',
        hourAmount: 24,
        priceFewDays: 4600,
      },
    ],
  },
  {
    id: 942,
    point: {
      lat: 44.550986,
      lon: 38.057531,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3437₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3437,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3437 ₽',
        hourAmount: 24,
        priceFewDays: 3437,
      },
    ],
  },
  {
    id: 943,
    point: {
      lat: 44.54787,
      lon: 38.059418,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3333₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3333,
      },
      {
        code: 'per_3h',
        title: '2666₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2666,
      },
      {
        code: 'sum',
        title: '3333 ₽',
        hourAmount: 24,
        priceFewDays: 3333,
      },
    ],
  },
  {
    id: 944,
    point: {
      lat: 44.54987770434484,
      lon: 38.06144901719665,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4600,
      },
      {
        code: 'per_3h',
        title: '3680₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3680,
      },
      {
        code: 'sum',
        title: '4600 ₽',
        hourAmount: 24,
        priceFewDays: 4600,
      },
    ],
  },
  {
    id: 945,
    point: {
      lat: 44.549335,
      lon: 38.060855,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2965₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2965,
      },
      {
        code: 'per_3h',
        title: '2372₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2372,
      },
      {
        code: 'sum',
        title: '2965 ₽',
        hourAmount: 24,
        priceFewDays: 2965,
      },
    ],
  },
  {
    id: 946,
    point: {
      lat: 44.54987504036162,
      lon: 38.05716818650813,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3448₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3448,
      },
      {
        code: 'per_3h',
        title: '2758₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2758,
      },
      {
        code: 'sum',
        title: '3448 ₽',
        hourAmount: 24,
        priceFewDays: 3448,
      },
    ],
  },
  {
    id: 947,
    point: {
      lat: 54.978359,
      lon: 82.914061,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2774₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2774,
      },
      {
        code: 'per_3h',
        title: '2219₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2219,
      },
      {
        code: 'sum',
        title: '2774 ₽',
        hourAmount: 24,
        priceFewDays: 2774,
      },
    ],
  },
  {
    id: 948,
    point: {
      lat: 55.02106638021341,
      lon: 82.94702221230311,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3008₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3008,
      },
      {
        code: 'per_3h',
        title: '2406₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2406,
      },
      {
        code: 'sum',
        title: '3008 ₽',
        hourAmount: 24,
        priceFewDays: 3008,
      },
    ],
  },
  {
    id: 949,
    point: {
      lat: 55.039233,
      lon: 82.956227,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2542₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2542,
      },
      {
        code: 'per_3h',
        title: '2034₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2034,
      },
      {
        code: 'sum',
        title: '2542 ₽',
        hourAmount: 24,
        priceFewDays: 2542,
      },
    ],
  },
  {
    id: 950,
    point: {
      lat: 54.978028,
      lon: 82.914707,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3367₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3367,
      },
      {
        code: 'per_3h',
        title: '2694₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2694,
      },
      {
        code: 'sum',
        title: '3367 ₽',
        hourAmount: 24,
        priceFewDays: 3367,
      },
    ],
  },
  {
    id: 952,
    point: {
      lat: 55.00159003610703,
      lon: 82.94488730422971,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3846₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3846,
      },
      {
        code: 'per_3h',
        title: '3077₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3077,
      },
      {
        code: 'sum',
        title: '3846 ₽',
        hourAmount: 24,
        priceFewDays: 3846,
      },
    ],
  },
  {
    id: 953,
    point: {
      lat: 55.00161162132367,
      lon: 82.94504287235259,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3356₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3356,
      },
      {
        code: 'per_3h',
        title: '2685₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2685,
      },
      {
        code: 'sum',
        title: '3356 ₽',
        hourAmount: 24,
        priceFewDays: 3356,
      },
    ],
  },
  {
    id: 954,
    point: {
      lat: 55.055759,
      lon: 82.904206,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4644₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4644,
      },
      {
        code: 'per_3h',
        title: '3715₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3715,
      },
      {
        code: 'sum',
        title: '4644 ₽',
        hourAmount: 24,
        priceFewDays: 4644,
      },
    ],
  },
  {
    id: 956,
    point: {
      lat: 54.994997,
      lon: 82.909434,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3852₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3852,
      },
      {
        code: 'per_3h',
        title: '3082₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3082,
      },
      {
        code: 'sum',
        title: '3852 ₽',
        hourAmount: 24,
        priceFewDays: 3852,
      },
    ],
  },
  {
    id: 957,
    point: {
      lat: 55.03998896277668,
      lon: 82.90029942125507,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4774₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4774,
      },
      {
        code: 'per_3h',
        title: '3819₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3819,
      },
      {
        code: 'sum',
        title: '4774 ₽',
        hourAmount: 24,
        priceFewDays: 4774,
      },
    ],
  },
  {
    id: 958,
    point: {
      lat: 54.99008,
      lon: 82.911815,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3034₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3034,
      },
      {
        code: 'per_3h',
        title: '2427₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2427,
      },
      {
        code: 'sum',
        title: '3034 ₽',
        hourAmount: 24,
        priceFewDays: 3034,
      },
    ],
  },
  {
    id: 959,
    point: {
      lat: 54.969626,
      lon: 82.876762,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2557₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2557,
      },
      {
        code: 'per_3h',
        title: '2046₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2046,
      },
      {
        code: 'sum',
        title: '2557 ₽',
        hourAmount: 24,
        priceFewDays: 2557,
      },
    ],
  },
  {
    id: 960,
    point: {
      lat: 54.941136,
      lon: 82.888611,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2717₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2717,
      },
      {
        code: 'per_3h',
        title: '2174₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2174,
      },
      {
        code: 'sum',
        title: '2717 ₽',
        hourAmount: 24,
        priceFewDays: 2717,
      },
    ],
  },
  {
    id: 961,
    point: {
      lat: 55.02095234237484,
      lon: 82.94687200859826,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2776₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2776,
      },
      {
        code: 'per_3h',
        title: '2221₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2221,
      },
      {
        code: 'sum',
        title: '2776 ₽',
        hourAmount: 24,
        priceFewDays: 2776,
      },
    ],
  },
  {
    id: 963,
    point: {
      lat: 54.998638,
      lon: 82.90753,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2774₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2774,
      },
      {
        code: 'per_3h',
        title: '2219₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2219,
      },
      {
        code: 'sum',
        title: '2774 ₽',
        hourAmount: 24,
        priceFewDays: 2774,
      },
    ],
  },
  {
    id: 964,
    point: {
      lat: 55.03477585495129,
      lon: 82.93512010185232,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2656₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2656,
      },
      {
        code: 'per_3h',
        title: '2125₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2125,
      },
      {
        code: 'sum',
        title: '2656 ₽',
        hourAmount: 24,
        priceFewDays: 2656,
      },
    ],
  },
  {
    id: 965,
    point: {
      lat: 55.00151602956143,
      lon: 82.94503214351653,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3657₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3657,
      },
      {
        code: 'per_3h',
        title: '2926₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2926,
      },
      {
        code: 'sum',
        title: '3657 ₽',
        hourAmount: 24,
        priceFewDays: 3657,
      },
    ],
  },
  {
    id: 966,
    point: {
      lat: 55.053438,
      lon: 82.950344,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3322₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3322,
      },
      {
        code: 'per_3h',
        title: '2658₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2658,
      },
      {
        code: 'sum',
        title: '3322 ₽',
        hourAmount: 24,
        priceFewDays: 3322,
      },
    ],
  },
  {
    id: 968,
    point: {
      lat: 48.52417823583953,
      lon: 135.02517863128276,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '12000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 12000,
      },
      {
        code: 'per_3h',
        title: '9600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 9600,
      },
      {
        code: 'sum',
        title: '12000 ₽',
        hourAmount: 24,
        priceFewDays: 12000,
      },
    ],
  },
  {
    id: 969,
    point: {
      lat: 52.347417,
      lon: 104.161121,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4025₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4025,
      },
      {
        code: 'per_3h',
        title: '3220₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3220,
      },
      {
        code: 'sum',
        title: '4025 ₽',
        hourAmount: 24,
        priceFewDays: 4025,
      },
    ],
  },
  {
    id: 970,
    point: {
      lat: 44.549534,
      lon: 38.059427,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4366₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4366,
      },
      {
        code: 'per_3h',
        title: '3493₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3493,
      },
      {
        code: 'sum',
        title: '4366 ₽',
        hourAmount: 24,
        priceFewDays: 4366,
      },
    ],
  },
  {
    id: 971,
    point: {
      lat: 44.555553,
      lon: 38.074752,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4720₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4720,
      },
      {
        code: 'per_3h',
        title: '3776₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3776,
      },
      {
        code: 'sum',
        title: '4720 ₽',
        hourAmount: 24,
        priceFewDays: 4720,
      },
    ],
  },
  {
    id: 972,
    point: {
      lat: 44.5911048208538,
      lon: 38.05368915211482,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3186₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3186,
      },
      {
        code: 'per_3h',
        title: '2549₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2549,
      },
      {
        code: 'sum',
        title: '3186 ₽',
        hourAmount: 24,
        priceFewDays: 3186,
      },
    ],
  },
  {
    id: 973,
    point: {
      lat: 44.57320460572893,
      lon: 38.07427183388835,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4484₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4484,
      },
      {
        code: 'per_3h',
        title: '3587₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3587,
      },
      {
        code: 'sum',
        title: '4484 ₽',
        hourAmount: 24,
        priceFewDays: 4484,
      },
    ],
  },
  {
    id: 974,
    point: {
      lat: 44.591453,
      lon: 38.056319,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4602₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4602,
      },
      {
        code: 'per_3h',
        title: '3682₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3682,
      },
      {
        code: 'sum',
        title: '4602 ₽',
        hourAmount: 24,
        priceFewDays: 4602,
      },
    ],
  },
  {
    id: 975,
    point: {
      lat: 44.57252445749799,
      lon: 38.074103982803315,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5782₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5782,
      },
      {
        code: 'per_3h',
        title: '4626₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4626,
      },
      {
        code: 'sum',
        title: '5782 ₽',
        hourAmount: 24,
        priceFewDays: 5782,
      },
    ],
  },
  {
    id: 976,
    point: {
      lat: 44.57217935322147,
      lon: 38.074404390212976,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4484₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4484,
      },
      {
        code: 'per_3h',
        title: '3587₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3587,
      },
      {
        code: 'sum',
        title: '4484 ₽',
        hourAmount: 24,
        priceFewDays: 4484,
      },
    ],
  },
  {
    id: 977,
    point: {
      lat: 44.59085565926776,
      lon: 38.05400565277858,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3304₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3304,
      },
      {
        code: 'per_3h',
        title: '2643₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2643,
      },
      {
        code: 'sum',
        title: '3304 ₽',
        hourAmount: 24,
        priceFewDays: 3304,
      },
    ],
  },
  {
    id: 978,
    point: {
      lat: 44.590246,
      lon: 38.05666,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2950,
      },
      {
        code: 'per_3h',
        title: '2360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2360,
      },
      {
        code: 'sum',
        title: '2950 ₽',
        hourAmount: 24,
        priceFewDays: 2950,
      },
    ],
  },
  {
    id: 979,
    point: {
      lat: 44.54989406932405,
      lon: 38.06062757605742,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4130₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4130,
      },
      {
        code: 'per_3h',
        title: '3304₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3304,
      },
      {
        code: 'sum',
        title: '4130 ₽',
        hourAmount: 24,
        priceFewDays: 4130,
      },
    ],
  },
  {
    id: 980,
    point: {
      lat: 44.57351520263193,
      lon: 38.074016819532076,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4720₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4720,
      },
      {
        code: 'per_3h',
        title: '3776₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3776,
      },
      {
        code: 'sum',
        title: '4720 ₽',
        hourAmount: 24,
        priceFewDays: 4720,
      },
    ],
  },
  {
    id: 981,
    point: {
      lat: 44.579564,
      lon: 38.075246,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3186₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3186,
      },
      {
        code: 'per_3h',
        title: '2549₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2549,
      },
      {
        code: 'sum',
        title: '3186 ₽',
        hourAmount: 24,
        priceFewDays: 3186,
      },
    ],
  },
  {
    id: 982,
    point: {
      lat: 56.053271,
      lon: 92.924105,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2398₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2398,
      },
      {
        code: 'per_3h',
        title: '1918₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1918,
      },
      {
        code: 'sum',
        title: '2398 ₽',
        hourAmount: 24,
        priceFewDays: 2398,
      },
    ],
  },
  {
    id: 983,
    point: {
      lat: 56.031863633122654,
      lon: 92.9110402539672,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 984,
    point: {
      lat: 56.047506402964,
      lon: 92.90157606006979,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3600,
      },
      {
        code: 'per_3h',
        title: '2880₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2880,
      },
      {
        code: 'sum',
        title: '3600 ₽',
        hourAmount: 24,
        priceFewDays: 3600,
      },
    ],
  },
  {
    id: 985,
    point: {
      lat: 56.031722464750935,
      lon: 92.91119582209006,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2340₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2340,
      },
      {
        code: 'per_3h',
        title: '1872₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1872,
      },
      {
        code: 'sum',
        title: '2340 ₽',
        hourAmount: 24,
        priceFewDays: 2340,
      },
    ],
  },
  {
    id: 988,
    point: {
      lat: 56.045091,
      lon: 92.898188,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2640₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2640,
      },
      {
        code: 'per_3h',
        title: '2112₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2112,
      },
      {
        code: 'sum',
        title: '2640 ₽',
        hourAmount: 24,
        priceFewDays: 2640,
      },
    ],
  },
  {
    id: 989,
    point: {
      lat: 56.04736829441165,
      lon: 92.90177990795493,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3118₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3118,
      },
      {
        code: 'per_3h',
        title: '2494₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2494,
      },
      {
        code: 'sum',
        title: '3118 ₽',
        hourAmount: 24,
        priceFewDays: 3118,
      },
    ],
  },
  {
    id: 990,
    point: {
      lat: 56.04722418061027,
      lon: 92.9019944846761,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2998₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2998,
      },
      {
        code: 'per_3h',
        title: '2398₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2398,
      },
      {
        code: 'sum',
        title: '2998 ₽',
        hourAmount: 24,
        priceFewDays: 2998,
      },
    ],
  },
  {
    id: 991,
    point: {
      lat: 56.047086071043324,
      lon: 92.90226270557761,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2988₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2988,
      },
      {
        code: 'per_3h',
        title: '2390₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2390,
      },
      {
        code: 'sum',
        title: '2988 ₽',
        hourAmount: 24,
        priceFewDays: 2988,
      },
    ],
  },
  {
    id: 992,
    point: {
      lat: 56.04698999452997,
      lon: 92.90243436695457,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2998₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2998,
      },
      {
        code: 'per_3h',
        title: '2398₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2398,
      },
      {
        code: 'sum',
        title: '2998 ₽',
        hourAmount: 24,
        priceFewDays: 2998,
      },
    ],
  },
  {
    id: 993,
    point: {
      lat: 56.048922,
      lon: 92.915175,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3588₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3588,
      },
      {
        code: 'per_3h',
        title: '2870₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2870,
      },
      {
        code: 'sum',
        title: '3588 ₽',
        hourAmount: 24,
        priceFewDays: 3588,
      },
    ],
  },
  {
    id: 1002,
    point: {
      lat: 59.942723,
      lon: 30.342144,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4950,
      },
      {
        code: 'per_3h',
        title: '3960₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3960,
      },
      {
        code: 'sum',
        title: '4950 ₽',
        hourAmount: 24,
        priceFewDays: 4950,
      },
    ],
  },
  {
    id: 1003,
    point: {
      lat: 59.85536257173889,
      lon: 30.3496684920654,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4950,
      },
      {
        code: 'per_3h',
        title: '3960₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3960,
      },
      {
        code: 'sum',
        title: '4950 ₽',
        hourAmount: 24,
        priceFewDays: 4950,
      },
    ],
  },
  {
    id: 1004,
    point: {
      lat: 59.95299832167014,
      lon: 30.327696698256883,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4620₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4620,
      },
      {
        code: 'per_3h',
        title: '3696₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3696,
      },
      {
        code: 'sum',
        title: '4620 ₽',
        hourAmount: 24,
        priceFewDays: 4620,
      },
    ],
  },
  {
    id: 1005,
    point: {
      lat: 59.929348,
      lon: 30.415141,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4290₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4290,
      },
      {
        code: 'per_3h',
        title: '3432₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3432,
      },
      {
        code: 'sum',
        title: '4290 ₽',
        hourAmount: 24,
        priceFewDays: 4290,
      },
    ],
  },
  {
    id: 1006,
    point: {
      lat: 59.95284765009938,
      lon: 30.32787908846988,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 1007,
    point: {
      lat: 59.95263240380606,
      lon: 30.328082936355038,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4025₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4025,
      },
      {
        code: 'per_3h',
        title: '3220₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3220,
      },
      {
        code: 'sum',
        title: '4025 ₽',
        hourAmount: 24,
        priceFewDays: 4025,
      },
    ],
  },
  {
    id: 1008,
    point: {
      lat: 59.95699269456703,
      lon: 30.34346288888549,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4080₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4080,
      },
      {
        code: 'per_3h',
        title: '3264₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3264,
      },
      {
        code: 'sum',
        title: '4080 ₽',
        hourAmount: 24,
        priceFewDays: 4080,
      },
    ],
  },
  {
    id: 1009,
    point: {
      lat: 59.95713258634811,
      lon: 30.343591634918198,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3600,
      },
      {
        code: 'per_3h',
        title: '2880₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2880,
      },
      {
        code: 'sum',
        title: '3600 ₽',
        hourAmount: 24,
        priceFewDays: 3600,
      },
    ],
  },
  {
    id: 1010,
    point: {
      lat: 59.95730476003443,
      lon: 30.343763296295148,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1011,
    point: {
      lat: 60.00986477406718,
      lon: 30.404159203041065,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2200,
      },
      {
        code: 'per_3h',
        title: '1760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1760,
      },
      {
        code: 'sum',
        title: '2200 ₽',
        hourAmount: 24,
        priceFewDays: 2200,
      },
    ],
  },
  {
    id: 1012,
    point: {
      lat: 59.99395,
      lon: 30.332846,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '10450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 10450,
      },
      {
        code: 'per_3h',
        title: '8360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 8360,
      },
      {
        code: 'sum',
        title: '10450 ₽',
        hourAmount: 24,
        priceFewDays: 10450,
      },
    ],
  },
  {
    id: 1013,
    point: {
      lat: 59.932626,
      lon: 30.384311,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '33000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 33000,
      },
      {
        code: 'per_3h',
        title: '26400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 26400,
      },
      {
        code: 'sum',
        title: '33000 ₽',
        hourAmount: 24,
        priceFewDays: 33000,
      },
    ],
  },
  {
    id: 1014,
    point: {
      lat: 59.925867,
      lon: 30.310451,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '27500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 27500,
      },
      {
        code: 'per_3h',
        title: '22000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 22000,
      },
      {
        code: 'sum',
        title: '27500 ₽',
        hourAmount: 24,
        priceFewDays: 27500,
      },
    ],
  },
  {
    id: 1015,
    point: {
      lat: 59.93974024279019,
      lon: 30.323709788360585,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5390₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5390,
      },
      {
        code: 'per_3h',
        title: '4312₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4312,
      },
      {
        code: 'sum',
        title: '5390 ₽',
        hourAmount: 24,
        priceFewDays: 5390,
      },
    ],
  },
  {
    id: 1016,
    point: {
      lat: 59.937569007361446,
      lon: 30.322650322090134,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3190₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3190,
      },
      {
        code: 'per_3h',
        title: '2552₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2552,
      },
      {
        code: 'sum',
        title: '3190 ₽',
        hourAmount: 24,
        priceFewDays: 3190,
      },
    ],
  },
  {
    id: 1017,
    point: {
      lat: 59.93739579586949,
      lon: 30.322559364563997,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2970₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2970,
      },
      {
        code: 'per_3h',
        title: '2376₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2376,
      },
      {
        code: 'sum',
        title: '2970 ₽',
        hourAmount: 24,
        priceFewDays: 2970,
      },
    ],
  },
  {
    id: 1018,
    point: {
      lat: 59.9376084496323,
      lon: 30.322334059006735,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2530₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2530,
      },
      {
        code: 'per_3h',
        title: '2024₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2024,
      },
      {
        code: 'sum',
        title: '2530 ₽',
        hourAmount: 24,
        priceFewDays: 2530,
      },
    ],
  },
  {
    id: 1019,
    point: {
      lat: 59.937991,
      lon: 30.440141,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1870₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1870,
      },
      {
        code: 'per_3h',
        title: '1496₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1496,
      },
      {
        code: 'sum',
        title: '1870 ₽',
        hourAmount: 24,
        priceFewDays: 1870,
      },
    ],
  },
  {
    id: 1020,
    point: {
      lat: 59.95746617205015,
      lon: 30.343913499999985,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3840₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3840,
      },
      {
        code: 'per_3h',
        title: '3072₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3072,
      },
      {
        code: 'sum',
        title: '3840 ₽',
        hourAmount: 24,
        priceFewDays: 3840,
      },
    ],
  },
  {
    id: 1021,
    point: {
      lat: 59.964192,
      lon: 30.298863,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6325₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6325,
      },
      {
        code: 'per_3h',
        title: '5060₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5060,
      },
      {
        code: 'sum',
        title: '6325 ₽',
        hourAmount: 24,
        priceFewDays: 6325,
      },
    ],
  },
  {
    id: 1022,
    point: {
      lat: 59.956597,
      lon: 30.353301,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3850₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3850,
      },
      {
        code: 'per_3h',
        title: '3080₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3080,
      },
      {
        code: 'sum',
        title: '3850 ₽',
        hourAmount: 24,
        priceFewDays: 3850,
      },
    ],
  },
  {
    id: 1023,
    point: {
      lat: 58.74057621453221,
      lon: 33.47847792327878,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2420₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2420,
      },
      {
        code: 'per_3h',
        title: '1936₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1936,
      },
      {
        code: 'sum',
        title: '2420 ₽',
        hourAmount: 24,
        priceFewDays: 2420,
      },
    ],
  },
  {
    id: 1024,
    point: {
      lat: 59.93976892082096,
      lon: 30.323522561096006,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2860₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2860,
      },
      {
        code: 'per_3h',
        title: '2288₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2288,
      },
      {
        code: 'sum',
        title: '2860 ₽',
        hourAmount: 24,
        priceFewDays: 2860,
      },
    ],
  },
  {
    id: 1025,
    point: {
      lat: 59.93978776226176,
      lon: 30.323334806464956,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3190₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3190,
      },
      {
        code: 'per_3h',
        title: '2552₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2552,
      },
      {
        code: 'sum',
        title: '3190 ₽',
        hourAmount: 24,
        priceFewDays: 3190,
      },
    ],
  },
  {
    id: 1026,
    point: {
      lat: 59.939820061849524,
      lon: 30.323120229743772,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2860₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2860,
      },
      {
        code: 'per_3h',
        title: '2288₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2288,
      },
      {
        code: 'sum',
        title: '2860 ₽',
        hourAmount: 24,
        priceFewDays: 2860,
      },
    ],
  },
  {
    id: 1027,
    point: {
      lat: 59.93971239643416,
      lon: 30.32355474760419,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3520₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3520,
      },
      {
        code: 'per_3h',
        title: '2816₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2816,
      },
      {
        code: 'sum',
        title: '3520 ₽',
        hourAmount: 24,
        priceFewDays: 3520,
      },
    ],
  },
  {
    id: 1028,
    point: {
      lat: 58.74070119499722,
      lon: 33.478690213959716,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4180₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4180,
      },
      {
        code: 'per_3h',
        title: '3344₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3344,
      },
      {
        code: 'sum',
        title: '4180 ₽',
        hourAmount: 24,
        priceFewDays: 4180,
      },
    ],
  },
  {
    id: 1029,
    point: {
      lat: 58.740818320724706,
      lon: 33.47882432441045,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2200,
      },
      {
        code: 'per_3h',
        title: '1760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1760,
      },
      {
        code: 'sum',
        title: '2200 ₽',
        hourAmount: 24,
        priceFewDays: 2200,
      },
    ],
  },
  {
    id: 1030,
    point: {
      lat: 58.740932657362556,
      lon: 33.47902280787756,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3850₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3850,
      },
      {
        code: 'per_3h',
        title: '3080₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3080,
      },
      {
        code: 'sum',
        title: '3850 ₽',
        hourAmount: 24,
        priceFewDays: 3850,
      },
    ],
  },
  {
    id: 1031,
    point: {
      lat: 59.939735,
      lon: 30.322731,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5500,
      },
      {
        code: 'per_3h',
        title: '4400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4400,
      },
      {
        code: 'sum',
        title: '5500 ₽',
        hourAmount: 24,
        priceFewDays: 5500,
      },
    ],
  },
  {
    id: 1032,
    point: {
      lat: 60.036852,
      lon: 30.415572,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2280₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2280,
      },
      {
        code: 'per_3h',
        title: '1824₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1824,
      },
      {
        code: 'sum',
        title: '2280 ₽',
        hourAmount: 24,
        priceFewDays: 2280,
      },
    ],
  },
  {
    id: 1033,
    point: {
      lat: 59.95761682255306,
      lon: 30.34402078836059,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3190₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3190,
      },
      {
        code: 'per_3h',
        title: '2552₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2552,
      },
      {
        code: 'sum',
        title: '3190 ₽',
        hourAmount: 24,
        priceFewDays: 3190,
      },
    ],
  },
  {
    id: 1034,
    point: {
      lat: 59.931165,
      lon: 30.305466,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '9350₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 9350,
      },
      {
        code: 'per_3h',
        title: '7480₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 7480,
      },
      {
        code: 'sum',
        title: '9350 ₽',
        hourAmount: 24,
        priceFewDays: 9350,
      },
    ],
  },
  {
    id: 1038,
    point: {
      lat: 59.95777823304357,
      lon: 30.343956415344223,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3080₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3080,
      },
      {
        code: 'per_3h',
        title: '2464₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2464,
      },
      {
        code: 'sum',
        title: '3080 ₽',
        hourAmount: 24,
        priceFewDays: 3080,
      },
    ],
  },
  {
    id: 1039,
    point: {
      lat: 59.9578427970189,
      lon: 30.343698923278804,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3190₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3190,
      },
      {
        code: 'per_3h',
        title: '2552₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2552,
      },
      {
        code: 'sum',
        title: '3190 ₽',
        hourAmount: 24,
        priceFewDays: 3190,
      },
    ],
  },
  {
    id: 1040,
    point: {
      lat: 60.020898,
      lon: 30.673164,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '66000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 66000,
      },
      {
        code: 'per_3h',
        title: '52800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 52800,
      },
      {
        code: 'sum',
        title: '66000 ₽',
        hourAmount: 24,
        priceFewDays: 66000,
      },
    ],
  },
  {
    id: 1041,
    point: {
      lat: 60.025012,
      lon: 30.321887,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3630₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3630,
      },
      {
        code: 'per_3h',
        title: '2904₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2904,
      },
      {
        code: 'sum',
        title: '3630 ₽',
        hourAmount: 24,
        priceFewDays: 3630,
      },
    ],
  },
  {
    id: 1042,
    point: {
      lat: 59.951222,
      lon: 30.305672,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4070₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4070,
      },
      {
        code: 'per_3h',
        title: '3256₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3256,
      },
      {
        code: 'sum',
        title: '4070 ₽',
        hourAmount: 24,
        priceFewDays: 4070,
      },
    ],
  },
  {
    id: 1047,
    point: {
      lat: 55.773354022880376,
      lon: 37.21977334655761,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3145₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3145,
      },
      {
        code: 'per_3h',
        title: '2516₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2516,
      },
      {
        code: 'sum',
        title: '3145 ₽',
        hourAmount: 24,
        priceFewDays: 3145,
      },
    ],
  },
  {
    id: 1048,
    point: {
      lat: 55.557407077604026,
      lon: 36.698983906745845,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2975₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2975,
      },
      {
        code: 'per_3h',
        title: '2380₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2380,
      },
      {
        code: 'sum',
        title: '2975 ₽',
        hourAmount: 24,
        priceFewDays: 2975,
      },
    ],
  },
  {
    id: 1049,
    point: {
      lat: 55.662377953753456,
      lon: 37.28551014418027,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3995₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3995,
      },
      {
        code: 'per_3h',
        title: '3196₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3196,
      },
      {
        code: 'sum',
        title: '3995 ₽',
        hourAmount: 24,
        priceFewDays: 3995,
      },
    ],
  },
  {
    id: 1050,
    point: {
      lat: 55.66091870241026,
      lon: 37.29980143254088,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3145₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3145,
      },
      {
        code: 'per_3h',
        title: '2516₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2516,
      },
      {
        code: 'sum',
        title: '3145 ₽',
        hourAmount: 24,
        priceFewDays: 3145,
      },
    ],
  },
  {
    id: 1051,
    point: {
      lat: 55.77345078265431,
      lon: 37.22027760185242,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3145₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3145,
      },
      {
        code: 'per_3h',
        title: '2516₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2516,
      },
      {
        code: 'sum',
        title: '3145 ₽',
        hourAmount: 24,
        priceFewDays: 3145,
      },
    ],
  },
  {
    id: 1052,
    point: {
      lat: 55.77355963711162,
      lon: 37.22066383995055,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3145₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3145,
      },
      {
        code: 'per_3h',
        title: '2516₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2516,
      },
      {
        code: 'sum',
        title: '3145 ₽',
        hourAmount: 24,
        priceFewDays: 3145,
      },
    ],
  },
  {
    id: 1053,
    point: {
      lat: 55.593278,
      lon: 37.041195,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3825₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3825,
      },
      {
        code: 'per_3h',
        title: '3060₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3060,
      },
      {
        code: 'sum',
        title: '3825 ₽',
        hourAmount: 24,
        priceFewDays: 3825,
      },
    ],
  },
  {
    id: 1054,
    point: {
      lat: 55.701724353917925,
      lon: 37.361694771163926,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3145₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3145,
      },
      {
        code: 'per_3h',
        title: '2516₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2516,
      },
      {
        code: 'sum',
        title: '3145 ₽',
        hourAmount: 24,
        priceFewDays: 3145,
      },
    ],
  },
  {
    id: 1055,
    point: {
      lat: 55.70151230059804,
      lon: 37.361748415344216,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3145₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3145,
      },
      {
        code: 'per_3h',
        title: '2516₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2516,
      },
      {
        code: 'sum',
        title: '3145 ₽',
        hourAmount: 24,
        priceFewDays: 3145,
      },
    ],
  },
  {
    id: 1056,
    point: {
      lat: 55.7012881286892,
      lon: 37.36175914418027,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3145₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3145,
      },
      {
        code: 'per_3h',
        title: '2516₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2516,
      },
      {
        code: 'sum',
        title: '3145 ₽',
        hourAmount: 24,
        priceFewDays: 3145,
      },
    ],
  },
  {
    id: 1057,
    point: {
      lat: 55.701009426677544,
      lon: 37.36172695767208,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3145₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3145,
      },
      {
        code: 'per_3h',
        title: '2516₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2516,
      },
      {
        code: 'sum',
        title: '3145 ₽',
        hourAmount: 24,
        priceFewDays: 3145,
      },
    ],
  },
  {
    id: 1058,
    point: {
      lat: 55.55060131023605,
      lon: 36.69073931349178,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2975₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2975,
      },
      {
        code: 'per_3h',
        title: '2380₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2380,
      },
      {
        code: 'sum',
        title: '2975 ₽',
        hourAmount: 24,
        priceFewDays: 2975,
      },
    ],
  },
  {
    id: 1059,
    point: {
      lat: 55.550769,
      lon: 36.690771,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2975₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2975,
      },
      {
        code: 'per_3h',
        title: '2380₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2380,
      },
      {
        code: 'sum',
        title: '2975 ₽',
        hourAmount: 24,
        priceFewDays: 2975,
      },
    ],
  },
  {
    id: 1060,
    point: {
      lat: 55.550935827437165,
      lon: 36.690803686508154,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2975₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2975,
      },
      {
        code: 'per_3h',
        title: '2380₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2380,
      },
      {
        code: 'sum',
        title: '2975 ₽',
        hourAmount: 24,
        priceFewDays: 2975,
      },
    ],
  },
  {
    id: 1061,
    point: {
      lat: 55.70206892253016,
      lon: 37.364084956344534,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3145₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3145,
      },
      {
        code: 'per_3h',
        title: '2516₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2516,
      },
      {
        code: 'sum',
        title: '3145 ₽',
        hourAmount: 24,
        priceFewDays: 3145,
      },
    ],
  },
  {
    id: 1062,
    point: {
      lat: 55.702020453730924,
      lon: 37.36440682142632,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3145₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3145,
      },
      {
        code: 'per_3h',
        title: '2516₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2516,
      },
      {
        code: 'sum',
        title: '3145 ₽',
        hourAmount: 24,
        priceFewDays: 3145,
      },
    ],
  },
  {
    id: 1063,
    point: {
      lat: 55.70209921549902,
      lon: 37.36469649999992,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3145₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3145,
      },
      {
        code: 'per_3h',
        title: '2516₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2516,
      },
      {
        code: 'sum',
        title: '3145 ₽',
        hourAmount: 24,
        priceFewDays: 3145,
      },
    ],
  },
  {
    id: 1064,
    point: {
      lat: 55.702052583928314,
      lon: 37.365141920337834,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3145₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3145,
      },
      {
        code: 'per_3h',
        title: '2516₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2516,
      },
      {
        code: 'sum',
        title: '3145 ₽',
        hourAmount: 24,
        priceFewDays: 3145,
      },
    ],
  },
  {
    id: 1065,
    point: {
      lat: 55.6559688123505,
      lon: 37.26507248280329,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2975₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2975,
      },
      {
        code: 'per_3h',
        title: '2380₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2380,
      },
      {
        code: 'sum',
        title: '2975 ₽',
        hourAmount: 24,
        priceFewDays: 2975,
      },
    ],
  },
  {
    id: 1066,
    point: {
      lat: 55.65564125931928,
      lon: 37.26527633068842,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2975₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2975,
      },
      {
        code: 'per_3h',
        title: '2380₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2380,
      },
      {
        code: 'sum',
        title: '2975 ₽',
        hourAmount: 24,
        priceFewDays: 2975,
      },
    ],
  },
  {
    id: 1067,
    point: {
      lat: 55.55721991087797,
      lon: 36.698945024245376,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3655₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3655,
      },
      {
        code: 'per_3h',
        title: '2924₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2924,
      },
      {
        code: 'sum',
        title: '3655 ₽',
        hourAmount: 24,
        priceFewDays: 3655,
      },
    ],
  },
  {
    id: 1068,
    point: {
      lat: 55.555163,
      lon: 36.701138,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3485₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3485,
      },
      {
        code: 'per_3h',
        title: '2788₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2788,
      },
      {
        code: 'sum',
        title: '3485 ₽',
        hourAmount: 24,
        priceFewDays: 3485,
      },
    ],
  },
  {
    id: 1069,
    point: {
      lat: 55.557317,
      lon: 36.701452,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3485₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3485,
      },
      {
        code: 'per_3h',
        title: '2788₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2788,
      },
      {
        code: 'sum',
        title: '3485 ₽',
        hourAmount: 24,
        priceFewDays: 3485,
      },
    ],
  },
  {
    id: 1070,
    point: {
      lat: 55.66115523673726,
      lon: 37.3000589246063,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3485₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3485,
      },
      {
        code: 'per_3h',
        title: '2788₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2788,
      },
      {
        code: 'sum',
        title: '3485 ₽',
        hourAmount: 24,
        priceFewDays: 3485,
      },
    ],
  },
  {
    id: 1071,
    point: {
      lat: 55.5570952475499,
      lon: 36.69893429540932,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2975₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2975,
      },
      {
        code: 'per_3h',
        title: '2380₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2380,
      },
      {
        code: 'sum',
        title: '2975 ₽',
        hourAmount: 24,
        priceFewDays: 2975,
      },
    ],
  },
  {
    id: 1072,
    point: {
      lat: 55.55694929973427,
      lon: 36.69893429540932,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2975₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2975,
      },
      {
        code: 'per_3h',
        title: '2380₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2380,
      },
      {
        code: 'sum',
        title: '2975 ₽',
        hourAmount: 24,
        priceFewDays: 2975,
      },
    ],
  },
  {
    id: 1073,
    point: {
      lat: 55.556815513758366,
      lon: 36.6989289309913,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2975₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2975,
      },
      {
        code: 'per_3h',
        title: '2380₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2380,
      },
      {
        code: 'sum',
        title: '2975 ₽',
        hourAmount: 24,
        priceFewDays: 2975,
      },
    ],
  },
  {
    id: 1074,
    point: {
      lat: 55.688497,
      lon: 37.297637,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3995₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3995,
      },
      {
        code: 'per_3h',
        title: '3196₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3196,
      },
      {
        code: 'sum',
        title: '3995 ₽',
        hourAmount: 24,
        priceFewDays: 3995,
      },
    ],
  },
  {
    id: 1075,
    point: {
      lat: 55.60012154752594,
      lon: 37.047781101188676,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3825₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3825,
      },
      {
        code: 'per_3h',
        title: '3060₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3060,
      },
      {
        code: 'sum',
        title: '3825 ₽',
        hourAmount: 24,
        priceFewDays: 3825,
      },
    ],
  },
  {
    id: 1076,
    point: {
      lat: 55.662612825645276,
      lon: 37.28533369444456,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3995₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3995,
      },
      {
        code: 'per_3h',
        title: '3196₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3196,
      },
      {
        code: 'sum',
        title: '3995 ₽',
        hourAmount: 24,
        priceFewDays: 3995,
      },
    ],
  },
  {
    id: 1077,
    point: {
      lat: 55.654157,
      lon: 37.268011,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3995₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3995,
      },
      {
        code: 'per_3h',
        title: '3196₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3196,
      },
      {
        code: 'sum',
        title: '3995 ₽',
        hourAmount: 24,
        priceFewDays: 3995,
      },
    ],
  },
  {
    id: 1078,
    point: {
      lat: 55.66139176962876,
      lon: 37.30046662037658,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3995₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3995,
      },
      {
        code: 'per_3h',
        title: '3196₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3196,
      },
      {
        code: 'sum',
        title: '3995 ₽',
        hourAmount: 24,
        priceFewDays: 3995,
      },
    ],
  },
  {
    id: 1079,
    point: {
      lat: 55.6003058821212,
      lon: 37.0479295505121,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3825₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3825,
      },
      {
        code: 'per_3h',
        title: '3060₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3060,
      },
      {
        code: 'sum',
        title: '3825 ₽',
        hourAmount: 24,
        priceFewDays: 3825,
      },
    ],
  },
  {
    id: 1081,
    point: {
      lat: 55.66364695563274,
      lon: 37.30239038954925,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3145₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3145,
      },
      {
        code: 'per_3h',
        title: '2516₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2516,
      },
      {
        code: 'sum',
        title: '3145 ₽',
        hourAmount: 24,
        priceFewDays: 3145,
      },
    ],
  },
  {
    id: 1082,
    point: {
      lat: 55.66350140552277,
      lon: 37.302218728172306,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2975₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2975,
      },
      {
        code: 'per_3h',
        title: '2380₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2380,
      },
      {
        code: 'sum',
        title: '2975 ₽',
        hourAmount: 24,
        priceFewDays: 2975,
      },
    ],
  },
  {
    id: 1083,
    point: {
      lat: 55.66331946712087,
      lon: 37.3020899821396,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2975₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2975,
      },
      {
        code: 'per_3h',
        title: '2380₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2380,
      },
      {
        code: 'sum',
        title: '2975 ₽',
        hourAmount: 24,
        priceFewDays: 2975,
      },
    ],
  },
  {
    id: 1084,
    point: {
      lat: 55.663210303672024,
      lon: 37.30239038954925,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2975₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2975,
      },
      {
        code: 'per_3h',
        title: '2380₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2380,
      },
      {
        code: 'sum',
        title: '2975 ₽',
        hourAmount: 24,
        priceFewDays: 2975,
      },
    ],
  },
  {
    id: 1085,
    point: {
      lat: 55.695966,
      lon: 37.317158,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3485₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3485,
      },
      {
        code: 'per_3h',
        title: '2788₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2788,
      },
      {
        code: 'sum',
        title: '3485 ₽',
        hourAmount: 24,
        priceFewDays: 3485,
      },
    ],
  },
  {
    id: 1086,
    point: {
      lat: 55.677428,
      lon: 37.289562,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3485₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3485,
      },
      {
        code: 'per_3h',
        title: '2788₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2788,
      },
      {
        code: 'sum',
        title: '3485 ₽',
        hourAmount: 24,
        priceFewDays: 3485,
      },
    ],
  },
  {
    id: 1087,
    point: {
      lat: 55.60045388219435,
      lon: 37.0480563959712,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2975₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2975,
      },
      {
        code: 'per_3h',
        title: '2380₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2380,
      },
      {
        code: 'sum',
        title: '2975 ₽',
        hourAmount: 24,
        priceFewDays: 2975,
      },
    ],
  },
  {
    id: 1088,
    point: {
      lat: 55.6005814445316,
      lon: 37.04796520086468,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2975₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2975,
      },
      {
        code: 'per_3h',
        title: '2380₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2380,
      },
      {
        code: 'sum',
        title: '2975 ₽',
        hourAmount: 24,
        priceFewDays: 2975,
      },
    ],
  },
  {
    id: 1089,
    point: {
      lat: 55.60063915116638,
      lon: 37.04765406461897,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2975₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2975,
      },
      {
        code: 'per_3h',
        title: '2380₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2380,
      },
      {
        code: 'sum',
        title: '2975 ₽',
        hourAmount: 24,
        priceFewDays: 2975,
      },
    ],
  },
  {
    id: 1090,
    point: {
      lat: 55.696235,
      lon: 37.328548,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3485₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3485,
      },
      {
        code: 'per_3h',
        title: '2788₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2788,
      },
      {
        code: 'sum',
        title: '3485 ₽',
        hourAmount: 24,
        priceFewDays: 3485,
      },
    ],
  },
  {
    id: 1091,
    point: {
      lat: 55.681899,
      lon: 37.246209,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3655₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3655,
      },
      {
        code: 'per_3h',
        title: '2924₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2924,
      },
      {
        code: 'sum',
        title: '3655 ₽',
        hourAmount: 24,
        priceFewDays: 3655,
      },
    ],
  },
  {
    id: 1092,
    point: {
      lat: 55.70565,
      lon: 37.327632,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3995₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3995,
      },
      {
        code: 'per_3h',
        title: '3196₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3196,
      },
      {
        code: 'sum',
        title: '3995 ₽',
        hourAmount: 24,
        priceFewDays: 3995,
      },
    ],
  },
  {
    id: 1095,
    point: {
      lat: 56.161789,
      lon: 101.630621,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2124₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2124,
      },
      {
        code: 'per_3h',
        title: '1699₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1699,
      },
      {
        code: 'sum',
        title: '2124 ₽',
        hourAmount: 24,
        priceFewDays: 2124,
      },
    ],
  },
  {
    id: 1096,
    point: {
      lat: 56.14734,
      lon: 101.637942,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1888₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1888,
      },
      {
        code: 'per_3h',
        title: '1510₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1510,
      },
      {
        code: 'sum',
        title: '1888 ₽',
        hourAmount: 24,
        priceFewDays: 1888,
      },
    ],
  },
  {
    id: 1097,
    point: {
      lat: 56.158556,
      lon: 101.615197,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2124₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2124,
      },
      {
        code: 'per_3h',
        title: '1699₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1699,
      },
      {
        code: 'sum',
        title: '2124 ₽',
        hourAmount: 24,
        priceFewDays: 2124,
      },
    ],
  },
  {
    id: 1098,
    point: {
      lat: 56.14895,
      lon: 101.615835,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2124₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2124,
      },
      {
        code: 'per_3h',
        title: '1699₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1699,
      },
      {
        code: 'sum',
        title: '2124 ₽',
        hourAmount: 24,
        priceFewDays: 2124,
      },
    ],
  },
  {
    id: 1099,
    point: {
      lat: 56.160396,
      lon: 101.629265,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2124₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2124,
      },
      {
        code: 'per_3h',
        title: '1699₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1699,
      },
      {
        code: 'sum',
        title: '2124 ₽',
        hourAmount: 24,
        priceFewDays: 2124,
      },
    ],
  },
  {
    id: 1100,
    point: {
      lat: 56.161875,
      lon: 101.623237,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2478₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2478,
      },
      {
        code: 'per_3h',
        title: '1982₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1982,
      },
      {
        code: 'sum',
        title: '2478 ₽',
        hourAmount: 24,
        priceFewDays: 2478,
      },
    ],
  },
  {
    id: 1103,
    point: {
      lat: 55.78574291299641,
      lon: 49.13063939265134,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4400,
      },
      {
        code: 'per_3h',
        title: '3520₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3520,
      },
      {
        code: 'sum',
        title: '4400 ₽',
        hourAmount: 24,
        priceFewDays: 4400,
      },
    ],
  },
  {
    id: 1104,
    point: {
      lat: 55.76768954261918,
      lon: 49.09369009259023,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2750₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2750,
      },
      {
        code: 'per_3h',
        title: '2200₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2200,
      },
      {
        code: 'sum',
        title: '2750 ₽',
        hourAmount: 24,
        priceFewDays: 2750,
      },
    ],
  },
  {
    id: 1105,
    point: {
      lat: 55.7974410720041,
      lon: 49.18681416137699,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2420₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2420,
      },
      {
        code: 'per_3h',
        title: '1936₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1936,
      },
      {
        code: 'sum',
        title: '2420 ₽',
        hourAmount: 24,
        priceFewDays: 2420,
      },
    ],
  },
  {
    id: 1106,
    point: {
      lat: 55.787386,
      lon: 49.152192,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2420₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2420,
      },
      {
        code: 'per_3h',
        title: '1936₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1936,
      },
      {
        code: 'sum',
        title: '2420 ₽',
        hourAmount: 24,
        priceFewDays: 2420,
      },
    ],
  },
  {
    id: 1107,
    point: {
      lat: 55.84627994811997,
      lon: 49.241682752589746,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2310₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2310,
      },
      {
        code: 'per_3h',
        title: '1848₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1848,
      },
      {
        code: 'sum',
        title: '2310 ₽',
        hourAmount: 24,
        priceFewDays: 2310,
      },
    ],
  },
  {
    id: 1108,
    point: {
      lat: 55.777125,
      lon: 49.216709,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2200,
      },
      {
        code: 'per_3h',
        title: '1760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1760,
      },
      {
        code: 'sum',
        title: '2200 ₽',
        hourAmount: 24,
        priceFewDays: 2200,
      },
    ],
  },
  {
    id: 1109,
    point: {
      lat: 55.797356,
      lon: 49.180687,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2640₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2640,
      },
      {
        code: 'per_3h',
        title: '2112₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2112,
      },
      {
        code: 'sum',
        title: '2640 ₽',
        hourAmount: 24,
        priceFewDays: 2640,
      },
    ],
  },
  {
    id: 1111,
    point: {
      lat: 55.7854889985239,
      lon: 49.130510646618625,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2970₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2970,
      },
      {
        code: 'per_3h',
        title: '2376₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2376,
      },
      {
        code: 'sum',
        title: '2970 ₽',
        hourAmount: 24,
        priceFewDays: 2970,
      },
    ],
  },
  {
    id: 1112,
    point: {
      lat: 55.800281,
      lon: 49.17598,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1760,
      },
      {
        code: 'per_3h',
        title: '1408₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1408,
      },
      {
        code: 'sum',
        title: '1760 ₽',
        hourAmount: 24,
        priceFewDays: 1760,
      },
    ],
  },
  {
    id: 1113,
    point: {
      lat: 55.76788611434121,
      lon: 49.09388321163931,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2750₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2750,
      },
      {
        code: 'per_3h',
        title: '2200₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2200,
      },
      {
        code: 'sum',
        title: '2750 ₽',
        hourAmount: 24,
        priceFewDays: 2750,
      },
    ],
  },
  {
    id: 1114,
    point: {
      lat: 55.78862307473327,
      lon: 49.15251609903097,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2640₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2640,
      },
      {
        code: 'per_3h',
        title: '2112₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2112,
      },
      {
        code: 'sum',
        title: '2640 ₽',
        hourAmount: 24,
        priceFewDays: 2640,
      },
    ],
  },
  {
    id: 1115,
    point: {
      lat: 55.805346,
      lon: 49.17447,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1430₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1430,
      },
      {
        code: 'per_3h',
        title: '1144₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1144,
      },
      {
        code: 'sum',
        title: '1430 ₽',
        hourAmount: 24,
        priceFewDays: 1430,
      },
    ],
  },
  {
    id: 1116,
    point: {
      lat: 55.775069,
      lon: 49.139418,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2310₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2310,
      },
      {
        code: 'per_3h',
        title: '1848₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1848,
      },
      {
        code: 'sum',
        title: '2310 ₽',
        hourAmount: 24,
        priceFewDays: 2310,
      },
    ],
  },
  {
    id: 1117,
    point: {
      lat: 55.768962,
      lon: 49.146057,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1980₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1980,
      },
      {
        code: 'per_3h',
        title: '1584₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1584,
      },
      {
        code: 'sum',
        title: '1980 ₽',
        hourAmount: 24,
        priceFewDays: 1980,
      },
    ],
  },
  {
    id: 1118,
    point: {
      lat: 55.80281983976106,
      lon: 49.181259415344165,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2420₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2420,
      },
      {
        code: 'per_3h',
        title: '1936₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1936,
      },
      {
        code: 'sum',
        title: '2420 ₽',
        hourAmount: 24,
        priceFewDays: 2420,
      },
    ],
  },
  {
    id: 1120,
    point: {
      lat: 55.802934654717795,
      lon: 49.18129160185235,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2420₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2420,
      },
      {
        code: 'per_3h',
        title: '1936₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1936,
      },
      {
        code: 'sum',
        title: '2420 ₽',
        hourAmount: 24,
        priceFewDays: 2420,
      },
    ],
  },
  {
    id: 1121,
    point: {
      lat: 55.768025226035334,
      lon: 49.09417289021291,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2200,
      },
      {
        code: 'per_3h',
        title: '1760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1760,
      },
      {
        code: 'sum',
        title: '2200 ₽',
        hourAmount: 24,
        priceFewDays: 2200,
      },
    ],
  },
  {
    id: 1122,
    point: {
      lat: 55.76819457872923,
      lon: 49.09450011971273,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2420₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2420,
      },
      {
        code: 'per_3h',
        title: '1936₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1936,
      },
      {
        code: 'sum',
        title: '2420 ₽',
        hourAmount: 24,
        priceFewDays: 2420,
      },
    ],
  },
  {
    id: 1123,
    point: {
      lat: 59.94532422617134,
      lon: 30.26202752513118,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2189₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2189,
      },
      {
        code: 'per_3h',
        title: '1751₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1751,
      },
      {
        code: 'sum',
        title: '2189 ₽',
        hourAmount: 24,
        priceFewDays: 2189,
      },
    ],
  },
  {
    id: 1124,
    point: {
      lat: 59.945162754814724,
      lon: 30.262263559524495,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1320₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1320,
      },
      {
        code: 'per_3h',
        title: '1056₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1056,
      },
      {
        code: 'sum',
        title: '1320 ₽',
        hourAmount: 24,
        priceFewDays: 1320,
      },
    ],
  },
  {
    id: 1125,
    point: {
      lat: 60.711345,
      lon: 28.734294,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2964₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2964,
      },
      {
        code: 'per_3h',
        title: '2371₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2371,
      },
      {
        code: 'sum',
        title: '2964 ₽',
        hourAmount: 24,
        priceFewDays: 2964,
      },
    ],
  },
  {
    id: 1126,
    point: {
      lat: 59.945442637997985,
      lon: 30.262081169311497,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1650₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1650,
      },
      {
        code: 'per_3h',
        title: '1320₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1320,
      },
      {
        code: 'sum',
        title: '1650 ₽',
        hourAmount: 24,
        priceFewDays: 1650,
      },
    ],
  },
  {
    id: 1127,
    point: {
      lat: 59.94528654959203,
      lon: 30.26224210185239,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1980₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1980,
      },
      {
        code: 'per_3h',
        title: '1584₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1584,
      },
      {
        code: 'sum',
        title: '1980 ₽',
        hourAmount: 24,
        priceFewDays: 1980,
      },
    ],
  },
  {
    id: 1128,
    point: {
      lat: 55.802991483201644,
      lon: 37.59126746560669,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6543₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6543,
      },
      {
        code: 'per_3h',
        title: '5234₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5234,
      },
      {
        code: 'sum',
        title: '6543 ₽',
        hourAmount: 24,
        priceFewDays: 6543,
      },
    ],
  },
  {
    id: 1129,
    point: {
      lat: 55.80277025850876,
      lon: 37.59154826190183,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6428₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6428,
      },
      {
        code: 'per_3h',
        title: '5142₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5142,
      },
      {
        code: 'sum',
        title: '6428 ₽',
        hourAmount: 24,
        priceFewDays: 6428,
      },
    ],
  },
  {
    id: 1131,
    point: {
      lat: 55.80352672662103,
      lon: 37.59107891534421,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '9085₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 9085,
      },
      {
        code: 'per_3h',
        title: '7268₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 7268,
      },
      {
        code: 'sum',
        title: '9085 ₽',
        hourAmount: 24,
        priceFewDays: 9085,
      },
    ],
  },
  {
    id: 1132,
    point: {
      lat: 55.80308816907556,
      lon: 37.591675161376955,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '7118₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 7118,
      },
      {
        code: 'per_3h',
        title: '5694₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5694,
      },
      {
        code: 'sum',
        title: '7118 ₽',
        hourAmount: 24,
        priceFewDays: 7118,
      },
    ],
  },
  {
    id: 1133,
    point: {
      lat: 55.8029068828642,
      lon: 37.59135329629517,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6888₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6888,
      },
      {
        code: 'per_3h',
        title: '5510₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5510,
      },
      {
        code: 'sum',
        title: '6888 ₽',
        hourAmount: 24,
        priceFewDays: 6888,
      },
    ],
  },
  {
    id: 1134,
    point: {
      lat: 55.80544264266106,
      lon: 37.589847169975215,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6888₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6888,
      },
      {
        code: 'per_3h',
        title: '5510₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5510,
      },
      {
        code: 'sum',
        title: '6888 ₽',
        hourAmount: 24,
        priceFewDays: 6888,
      },
    ],
  },
  {
    id: 1135,
    point: {
      lat: 55.80391925985194,
      lon: 37.590456555386524,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '9188₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 9188,
      },
      {
        code: 'per_3h',
        title: '7350₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 7350,
      },
      {
        code: 'sum',
        title: '9188 ₽',
        hourAmount: 24,
        priceFewDays: 9188,
      },
    ],
  },
  {
    id: 1136,
    point: {
      lat: 55.80413679752311,
      lon: 37.590842793484654,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6888₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6888,
      },
      {
        code: 'per_3h',
        title: '5510₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5510,
      },
      {
        code: 'sum',
        title: '6888 ₽',
        hourAmount: 24,
        priceFewDays: 6888,
      },
    ],
  },
  {
    id: 1137,
    point: {
      lat: 55.80300356894909,
      lon: 37.591718076721186,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6658₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6658,
      },
      {
        code: 'per_3h',
        title: '5326₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5326,
      },
      {
        code: 'sum',
        title: '6658 ₽',
        hourAmount: 24,
        priceFewDays: 6658,
      },
    ],
  },
  {
    id: 1138,
    point: {
      lat: 55.80357506892071,
      lon: 37.59082142327877,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '8613₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 8613,
      },
      {
        code: 'per_3h',
        title: '6890₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 6890,
      },
      {
        code: 'sum',
        title: '8613 ₽',
        hourAmount: 24,
        priceFewDays: 8613,
      },
    ],
  },
  {
    id: 1139,
    point: {
      lat: 55.80243185412024,
      lon: 37.5917413809509,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '7118₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 7118,
      },
      {
        code: 'per_3h',
        title: '5694₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5694,
      },
      {
        code: 'sum',
        title: '7118 ₽',
        hourAmount: 24,
        priceFewDays: 7118,
      },
    ],
  },
  {
    id: 1140,
    point: {
      lat: 55.80364758225719,
      lon: 37.591186203704794,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6428₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6428,
      },
      {
        code: 'per_3h',
        title: '5142₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5142,
      },
      {
        code: 'sum',
        title: '6428 ₽',
        hourAmount: 24,
        priceFewDays: 6428,
      },
    ],
  },
  {
    id: 1141,
    point: {
      lat: 55.80301525211253,
      lon: 37.591784434912974,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '7935₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 7935,
      },
      {
        code: 'per_3h',
        title: '6348₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 6348,
      },
      {
        code: 'sum',
        title: '7935 ₽',
        hourAmount: 24,
        priceFewDays: 7935,
      },
    ],
  },
  {
    id: 1142,
    point: {
      lat: 43.587928,
      lon: 39.744747,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3690₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3690,
      },
      {
        code: 'per_3h',
        title: '2952₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2952,
      },
      {
        code: 'sum',
        title: '3690 ₽',
        hourAmount: 24,
        priceFewDays: 3690,
      },
    ],
  },
  {
    id: 1143,
    point: {
      lat: 43.587314,
      lon: 39.744181,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5535₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5535,
      },
      {
        code: 'per_3h',
        title: '4428₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4428,
      },
      {
        code: 'sum',
        title: '5535 ₽',
        hourAmount: 24,
        priceFewDays: 5535,
      },
    ],
  },
  {
    id: 1145,
    point: {
      lat: 43.58776861426955,
      lon: 39.7439855846557,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6150₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6150,
      },
      {
        code: 'per_3h',
        title: '4920₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4920,
      },
      {
        code: 'sum',
        title: '6150 ₽',
        hourAmount: 24,
        priceFewDays: 6150,
      },
    ],
  },
  {
    id: 1146,
    point: {
      lat: 43.628835,
      lon: 39.695582,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2706₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2706,
      },
      {
        code: 'per_3h',
        title: '2165₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2165,
      },
      {
        code: 'sum',
        title: '2706 ₽',
        hourAmount: 24,
        priceFewDays: 2706,
      },
    ],
  },
  {
    id: 1147,
    point: {
      lat: 43.629168,
      lon: 39.718328,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2684₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2684,
      },
      {
        code: 'per_3h',
        title: '2147₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2147,
      },
      {
        code: 'sum',
        title: '2684 ₽',
        hourAmount: 24,
        priceFewDays: 2684,
      },
    ],
  },
  {
    id: 1148,
    point: {
      lat: 43.58766723267581,
      lon: 39.744076779762196,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5124₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5124,
      },
      {
        code: 'per_3h',
        title: '4099₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4099,
      },
      {
        code: 'sum',
        title: '5124 ₽',
        hourAmount: 24,
        priceFewDays: 5124,
      },
    ],
  },
  {
    id: 1149,
    point: {
      lat: 55.725869680737794,
      lon: 84.9305132632293,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1150,
    point: {
      lat: 44.576584863366406,
      lon: 38.076119386763686,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5782₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5782,
      },
      {
        code: 'per_3h',
        title: '4626₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4626,
      },
      {
        code: 'sum',
        title: '5782 ₽',
        hourAmount: 24,
        priceFewDays: 5782,
      },
    ],
  },
  {
    id: 1151,
    point: {
      lat: 44.57218,
      lon: 38.072371,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5546₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5546,
      },
      {
        code: 'per_3h',
        title: '4437₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4437,
      },
      {
        code: 'sum',
        title: '5546 ₽',
        hourAmount: 24,
        priceFewDays: 5546,
      },
    ],
  },
  {
    id: 1152,
    point: {
      lat: 44.57298987694983,
      lon: 38.074464952937426,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5664₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5664,
      },
      {
        code: 'per_3h',
        title: '4531₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4531,
      },
      {
        code: 'sum',
        title: '5664 ₽',
        hourAmount: 24,
        priceFewDays: 5664,
      },
    ],
  },
  {
    id: 1153,
    point: {
      lat: 44.572051,
      lon: 38.073827,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5782₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5782,
      },
      {
        code: 'per_3h',
        title: '4626₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4626,
      },
      {
        code: 'sum',
        title: '5782 ₽',
        hourAmount: 24,
        priceFewDays: 5782,
      },
    ],
  },
  {
    id: 1166,
    point: {
      lat: 55.002057,
      lon: 82.945555,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2829₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2829,
      },
      {
        code: 'per_3h',
        title: '2263₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2263,
      },
      {
        code: 'sum',
        title: '2829 ₽',
        hourAmount: 24,
        priceFewDays: 2829,
      },
    ],
  },
  {
    id: 1167,
    point: {
      lat: 55.00141118672042,
      lon: 82.94562759391782,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2829₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2829,
      },
      {
        code: 'per_3h',
        title: '2263₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2263,
      },
      {
        code: 'sum',
        title: '2829 ₽',
        hourAmount: 24,
        priceFewDays: 2829,
      },
    ],
  },
  {
    id: 1169,
    point: {
      lat: 55.00139576863234,
      lon: 82.9457134246063,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2741₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2741,
      },
      {
        code: 'per_3h',
        title: '2193₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2193,
      },
      {
        code: 'sum',
        title: '2741 ₽',
        hourAmount: 24,
        priceFewDays: 2741,
      },
    ],
  },
  {
    id: 1170,
    point: {
      lat: 54.990252248037024,
      lon: 82.917682228836,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2924₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2924,
      },
      {
        code: 'per_3h',
        title: '2339₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2339,
      },
      {
        code: 'sum',
        title: '2924 ₽',
        hourAmount: 24,
        priceFewDays: 2924,
      },
    ],
  },
  {
    id: 1180,
    point: {
      lat: 54.19466,
      lon: 37.584964,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2700,
      },
      {
        code: 'per_3h',
        title: '2160₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2160,
      },
      {
        code: 'sum',
        title: '2700 ₽',
        hourAmount: 24,
        priceFewDays: 2700,
      },
    ],
  },
  {
    id: 1181,
    point: {
      lat: 54.188623,
      lon: 37.592914,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1182,
    point: {
      lat: 54.154976,
      lon: 37.579349,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2700,
      },
      {
        code: 'per_3h',
        title: '2160₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2160,
      },
      {
        code: 'sum',
        title: '2700 ₽',
        hourAmount: 24,
        priceFewDays: 2700,
      },
    ],
  },
  {
    id: 1183,
    point: {
      lat: 54.175452702761376,
      lon: 37.59730131349182,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2800,
      },
      {
        code: 'per_3h',
        title: '2240₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2240,
      },
      {
        code: 'sum',
        title: '2800 ₽',
        hourAmount: 24,
        priceFewDays: 2800,
      },
    ],
  },
  {
    id: 1184,
    point: {
      lat: 54.175650967730576,
      lon: 37.597515890213,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2800,
      },
      {
        code: 'per_3h',
        title: '2240₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2240,
      },
      {
        code: 'sum',
        title: '2800 ₽',
        hourAmount: 24,
        priceFewDays: 2800,
      },
    ],
  },
  {
    id: 1185,
    point: {
      lat: 54.183702,
      lon: 37.600594,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2900₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2900,
      },
      {
        code: 'per_3h',
        title: '2320₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2320,
      },
      {
        code: 'sum',
        title: '2900 ₽',
        hourAmount: 24,
        priceFewDays: 2900,
      },
    ],
  },
  {
    id: 1186,
    point: {
      lat: 54.16125,
      lon: 37.589024,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2800,
      },
      {
        code: 'per_3h',
        title: '2240₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2240,
      },
      {
        code: 'sum',
        title: '2800 ₽',
        hourAmount: 24,
        priceFewDays: 2800,
      },
    ],
  },
  {
    id: 1187,
    point: {
      lat: 54.196952,
      lon: 37.605355,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2800,
      },
      {
        code: 'per_3h',
        title: '2240₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2240,
      },
      {
        code: 'sum',
        title: '2800 ₽',
        hourAmount: 24,
        priceFewDays: 2800,
      },
    ],
  },
  {
    id: 1188,
    point: {
      lat: 54.198316,
      lon: 37.589419,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2900₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2900,
      },
      {
        code: 'per_3h',
        title: '2320₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2320,
      },
      {
        code: 'sum',
        title: '2900 ₽',
        hourAmount: 24,
        priceFewDays: 2900,
      },
    ],
  },
  {
    id: 1189,
    point: {
      lat: 54.19337,
      lon: 37.581864,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1190,
    point: {
      lat: 54.188028,
      lon: 37.600091,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1191,
    point: {
      lat: 54.188028,
      lon: 37.600091,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1192,
    point: {
      lat: 54.188028,
      lon: 37.600091,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2900₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2900,
      },
      {
        code: 'per_3h',
        title: '2320₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2320,
      },
      {
        code: 'sum',
        title: '2900 ₽',
        hourAmount: 24,
        priceFewDays: 2900,
      },
    ],
  },
  {
    id: 1193,
    point: {
      lat: 54.183072529412236,
      lon: 37.609892211639306,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2800,
      },
      {
        code: 'per_3h',
        title: '2240₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2240,
      },
      {
        code: 'sum',
        title: '2800 ₽',
        hourAmount: 24,
        priceFewDays: 2800,
      },
    ],
  },
  {
    id: 1194,
    point: {
      lat: 54.184261,
      lon: 37.604241,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2700,
      },
      {
        code: 'per_3h',
        title: '2160₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2160,
      },
      {
        code: 'sum',
        title: '2700 ₽',
        hourAmount: 24,
        priceFewDays: 2700,
      },
    ],
  },
  {
    id: 1195,
    point: {
      lat: 54.164166,
      lon: 37.588665,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2800,
      },
      {
        code: 'per_3h',
        title: '2240₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2240,
      },
      {
        code: 'sum',
        title: '2800 ₽',
        hourAmount: 24,
        priceFewDays: 2800,
      },
    ],
  },
  {
    id: 1196,
    point: {
      lat: 54.18684374707848,
      lon: 37.60881247274387,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1199,
    point: {
      lat: 54.193153884661534,
      lon: 37.59245216004943,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2800,
      },
      {
        code: 'per_3h',
        title: '2240₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2240,
      },
      {
        code: 'sum',
        title: '2800 ₽',
        hourAmount: 24,
        priceFewDays: 2800,
      },
    ],
  },
  {
    id: 1200,
    point: {
      lat: 54.197663,
      lon: 37.607179,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1201,
    point: {
      lat: 54.160697,
      lon: 37.592033,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2800,
      },
      {
        code: 'per_3h',
        title: '2240₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2240,
      },
      {
        code: 'sum',
        title: '2800 ₽',
        hourAmount: 24,
        priceFewDays: 2800,
      },
    ],
  },
  {
    id: 1202,
    point: {
      lat: 54.182807,
      lon: 37.606766,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1203,
    point: {
      lat: 54.183406055799196,
      lon: 37.61026772090138,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2800,
      },
      {
        code: 'per_3h',
        title: '2240₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2240,
      },
      {
        code: 'sum',
        title: '2800 ₽',
        hourAmount: 24,
        priceFewDays: 2800,
      },
    ],
  },
  {
    id: 1204,
    point: {
      lat: 54.193235673231676,
      lon: 37.5932568227539,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2700,
      },
      {
        code: 'per_3h',
        title: '2160₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2160,
      },
      {
        code: 'sum',
        title: '2700 ₽',
        hourAmount: 24,
        priceFewDays: 2700,
      },
    ],
  },
  {
    id: 1205,
    point: {
      lat: 54.19922337769972,
      lon: 37.6002275509261,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2700,
      },
      {
        code: 'per_3h',
        title: '2160₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2160,
      },
      {
        code: 'sum',
        title: '2700 ₽',
        hourAmount: 24,
        priceFewDays: 2700,
      },
    ],
  },
  {
    id: 1206,
    point: {
      lat: 54.19937749482245,
      lon: 37.60027583068836,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2700,
      },
      {
        code: 'per_3h',
        title: '2160₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2160,
      },
      {
        code: 'sum',
        title: '2700 ₽',
        hourAmount: 24,
        priceFewDays: 2700,
      },
    ],
  },
  {
    id: 1208,
    point: {
      lat: 54.196483,
      lon: 37.589931,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2700,
      },
      {
        code: 'per_3h',
        title: '2160₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2160,
      },
      {
        code: 'sum',
        title: '2700 ₽',
        hourAmount: 24,
        priceFewDays: 2700,
      },
    ],
  },
  {
    id: 1209,
    point: {
      lat: 54.196035,
      lon: 37.612434,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2700,
      },
      {
        code: 'per_3h',
        title: '2160₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2160,
      },
      {
        code: 'sum',
        title: '2700 ₽',
        hourAmount: 24,
        priceFewDays: 2700,
      },
    ],
  },
  {
    id: 1210,
    point: {
      lat: 54.190467,
      lon: 37.598869,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2800,
      },
      {
        code: 'per_3h',
        title: '2240₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2240,
      },
      {
        code: 'sum',
        title: '2800 ₽',
        hourAmount: 24,
        priceFewDays: 2800,
      },
    ],
  },
  {
    id: 1212,
    point: {
      lat: 54.197568,
      lon: 37.598223,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2800,
      },
      {
        code: 'per_3h',
        title: '2240₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2240,
      },
      {
        code: 'sum',
        title: '2800 ₽',
        hourAmount: 24,
        priceFewDays: 2800,
      },
    ],
  },
  {
    id: 1213,
    point: {
      lat: 54.184003,
      lon: 37.604915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2600,
      },
      {
        code: 'per_3h',
        title: '2080₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2080,
      },
      {
        code: 'sum',
        title: '2600 ₽',
        hourAmount: 24,
        priceFewDays: 2600,
      },
    ],
  },
  {
    id: 1214,
    point: {
      lat: 54.184001604791945,
      lon: 37.59931766071321,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2800,
      },
      {
        code: 'per_3h',
        title: '2240₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2240,
      },
      {
        code: 'sum',
        title: '2800 ₽',
        hourAmount: 24,
        priceFewDays: 2800,
      },
    ],
  },
  {
    id: 1215,
    point: {
      lat: 54.160797,
      lon: 37.586805,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2700,
      },
      {
        code: 'per_3h',
        title: '2160₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2160,
      },
      {
        code: 'sum',
        title: '2700 ₽',
        hourAmount: 24,
        priceFewDays: 2700,
      },
    ],
  },
  {
    id: 1216,
    point: {
      lat: 54.18408034300867,
      lon: 37.60020379695891,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2500,
      },
      {
        code: 'per_3h',
        title: '2000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2000,
      },
      {
        code: 'sum',
        title: '2500 ₽',
        hourAmount: 24,
        priceFewDays: 2500,
      },
    ],
  },
  {
    id: 1217,
    point: {
      lat: 54.183812897200255,
      lon: 37.5999141183853,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2900₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2900,
      },
      {
        code: 'per_3h',
        title: '2320₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2320,
      },
      {
        code: 'sum',
        title: '2900 ₽',
        hourAmount: 24,
        priceFewDays: 2900,
      },
    ],
  },
  {
    id: 1218,
    point: {
      lat: 54.186937,
      lon: 37.595851,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2900₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2900,
      },
      {
        code: 'per_3h',
        title: '2320₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2320,
      },
      {
        code: 'sum',
        title: '2900 ₽',
        hourAmount: 24,
        priceFewDays: 2900,
      },
    ],
  },
  {
    id: 1233,
    point: {
      lat: 51.71271309702072,
      lon: 39.19808715145106,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2298₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2298,
      },
      {
        code: 'per_3h',
        title: '1838₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1838,
      },
      {
        code: 'sum',
        title: '2298 ₽',
        hourAmount: 24,
        priceFewDays: 2298,
      },
    ],
  },
  {
    id: 1234,
    point: {
      lat: 51.6956260696416,
      lon: 39.184478134918166,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2288₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2288,
      },
      {
        code: 'per_3h',
        title: '1830₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1830,
      },
      {
        code: 'sum',
        title: '2288 ₽',
        hourAmount: 24,
        priceFewDays: 2288,
      },
    ],
  },
  {
    id: 1235,
    point: {
      lat: 51.703168083495044,
      lon: 39.19897493048671,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2185₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2185,
      },
      {
        code: 'per_3h',
        title: '1748₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1748,
      },
      {
        code: 'sum',
        title: '2185 ₽',
        hourAmount: 24,
        priceFewDays: 2185,
      },
    ],
  },
  {
    id: 1236,
    point: {
      lat: 51.712706432181136,
      lon: 39.199020560188245,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2068₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2068,
      },
      {
        code: 'per_3h',
        title: '1654₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1654,
      },
      {
        code: 'sum',
        title: '2068 ₽',
        hourAmount: 24,
        priceFewDays: 2068,
      },
    ],
  },
  {
    id: 1237,
    point: {
      lat: 51.712886382503434,
      lon: 39.19891327182764,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 1238,
    point: {
      lat: 51.7033447388475,
      lon: 39.19945236369134,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2068₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2068,
      },
      {
        code: 'per_3h',
        title: '1654₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1654,
      },
      {
        code: 'sum',
        title: '2068 ₽',
        hourAmount: 24,
        priceFewDays: 2068,
      },
    ],
  },
  {
    id: 1239,
    point: {
      lat: 51.711916,
      lon: 39.201814,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4828₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4828,
      },
      {
        code: 'per_3h',
        title: '3862₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3862,
      },
      {
        code: 'sum',
        title: '4828 ₽',
        hourAmount: 24,
        priceFewDays: 4828,
      },
    ],
  },
  {
    id: 1240,
    point: {
      lat: 51.66508313900528,
      lon: 39.21829441468049,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2758₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2758,
      },
      {
        code: 'per_3h',
        title: '2206₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2206,
      },
      {
        code: 'sum',
        title: '2758 ₽',
        hourAmount: 24,
        priceFewDays: 2758,
      },
    ],
  },
  {
    id: 1241,
    point: {
      lat: 51.66387,
      lon: 39.202111,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3105₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3105,
      },
      {
        code: 'per_3h',
        title: '2484₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2484,
      },
      {
        code: 'sum',
        title: '3105 ₽',
        hourAmount: 24,
        priceFewDays: 3105,
      },
    ],
  },
  {
    id: 1242,
    point: {
      lat: 51.674768,
      lon: 39.166942,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2873₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2873,
      },
      {
        code: 'per_3h',
        title: '2298₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2298,
      },
      {
        code: 'sum',
        title: '2873 ₽',
        hourAmount: 24,
        priceFewDays: 2873,
      },
    ],
  },
  {
    id: 1243,
    point: {
      lat: 51.695656072795295,
      lon: 39.18493411045069,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2298₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2298,
      },
      {
        code: 'per_3h',
        title: '1838₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1838,
      },
      {
        code: 'sum',
        title: '2298 ₽',
        hourAmount: 24,
        priceFewDays: 2298,
      },
    ],
  },
  {
    id: 1244,
    point: {
      lat: 51.760735,
      lon: 39.180901,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4025₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4025,
      },
      {
        code: 'per_3h',
        title: '3220₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3220,
      },
      {
        code: 'sum',
        title: '4025 ₽',
        hourAmount: 24,
        priceFewDays: 4025,
      },
    ],
  },
  {
    id: 1245,
    point: {
      lat: 51.717038,
      lon: 39.1575,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2298₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2298,
      },
      {
        code: 'per_3h',
        title: '1838₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1838,
      },
      {
        code: 'sum',
        title: '2298 ₽',
        hourAmount: 24,
        priceFewDays: 2298,
      },
    ],
  },
  {
    id: 1246,
    point: {
      lat: 51.66513317816543,
      lon: 39.218927416008015,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2288₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2288,
      },
      {
        code: 'per_3h',
        title: '1830₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1830,
      },
      {
        code: 'sum',
        title: '2288 ₽',
        hourAmount: 24,
        priceFewDays: 2288,
      },
    ],
  },
  {
    id: 1247,
    point: {
      lat: 51.665073131166594,
      lon: 39.218728932540905,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2298₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2298,
      },
      {
        code: 'per_3h',
        title: '1838₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1838,
      },
      {
        code: 'sum',
        title: '2298 ₽',
        hourAmount: 24,
        priceFewDays: 2298,
      },
    ],
  },
  {
    id: 1249,
    point: {
      lat: 51.665033099789596,
      lon: 39.218482169311514,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2873₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2873,
      },
      {
        code: 'per_3h',
        title: '2298₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2298,
      },
      {
        code: 'sum',
        title: '2873 ₽',
        hourAmount: 24,
        priceFewDays: 2873,
      },
    ],
  },
  {
    id: 1250,
    point: {
      lat: 51.664946365017464,
      lon: 39.21855190674591,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4600,
      },
      {
        code: 'per_3h',
        title: '3680₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3680,
      },
      {
        code: 'sum',
        title: '4600 ₽',
        hourAmount: 24,
        priceFewDays: 4600,
      },
    ],
  },
  {
    id: 1251,
    point: {
      lat: 51.665219912578074,
      lon: 39.21884158531952,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1252,
    point: {
      lat: 51.70327474341343,
      lon: 39.199843966207524,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4483₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4483,
      },
      {
        code: 'per_3h',
        title: '3586₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3586,
      },
      {
        code: 'sum',
        title: '4483 ₽',
        hourAmount: 24,
        priceFewDays: 4483,
      },
    ],
  },
  {
    id: 1253,
    point: {
      lat: 51.684624,
      lon: 39.253836,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 1254,
    point: {
      lat: 51.66505645143049,
      lon: 39.21807983795928,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2643₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2643,
      },
      {
        code: 'per_3h',
        title: '2114₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2114,
      },
      {
        code: 'sum',
        title: '2643 ₽',
        hourAmount: 24,
        priceFewDays: 2643,
      },
    ],
  },
  {
    id: 1255,
    point: {
      lat: 51.718383,
      lon: 39.159387,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4023₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4023,
      },
      {
        code: 'per_3h',
        title: '3218₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3218,
      },
      {
        code: 'sum',
        title: '4023 ₽',
        hourAmount: 24,
        priceFewDays: 4023,
      },
    ],
  },
  {
    id: 1256,
    point: {
      lat: 51.712793075018745,
      lon: 39.19855922023767,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1257,
    point: {
      lat: 51.714633,
      lon: 39.182105,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1258,
    point: {
      lat: 59.92370367263192,
      lon: 30.28741294883365,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '12200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 12200,
      },
      {
        code: 'per_3h',
        title: '9760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 9760,
      },
      {
        code: 'sum',
        title: '12200 ₽',
        hourAmount: 24,
        priceFewDays: 12200,
      },
    ],
  },
  {
    id: 1259,
    point: {
      lat: 59.858656,
      lon: 30.152087,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3658₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3658,
      },
      {
        code: 'per_3h',
        title: '2926₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2926,
      },
      {
        code: 'sum',
        title: '3658 ₽',
        hourAmount: 24,
        priceFewDays: 3658,
      },
    ],
  },
  {
    id: 1261,
    point: {
      lat: 59.90821044026744,
      lon: 30.342648017196606,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6100₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6100,
      },
      {
        code: 'per_3h',
        title: '4880₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4880,
      },
      {
        code: 'sum',
        title: '6100 ₽',
        hourAmount: 24,
        priceFewDays: 6100,
      },
    ],
  },
  {
    id: 1262,
    point: {
      lat: 59.90824815911663,
      lon: 30.34242807605737,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3658₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3658,
      },
      {
        code: 'per_3h',
        title: '2926₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2926,
      },
      {
        code: 'sum',
        title: '3658 ₽',
        hourAmount: 24,
        priceFewDays: 3658,
      },
    ],
  },
  {
    id: 1263,
    point: {
      lat: 59.923585182905825,
      lon: 30.287557788120466,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5490₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5490,
      },
      {
        code: 'per_3h',
        title: '4392₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4392,
      },
      {
        code: 'sum',
        title: '5490 ₽',
        hourAmount: 24,
        priceFewDays: 5490,
      },
    ],
  },
  {
    id: 1264,
    point: {
      lat: 59.935737,
      lon: 30.355744,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '9760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 9760,
      },
      {
        code: 'per_3h',
        title: '7808₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 7808,
      },
      {
        code: 'sum',
        title: '9760 ₽',
        hourAmount: 24,
        priceFewDays: 9760,
      },
    ],
  },
  {
    id: 1265,
    point: {
      lat: 44.54890723108855,
      lon: 38.061173313491814,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 1267,
    point: {
      lat: 44.55014687276026,
      lon: 38.05654166903821,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4255₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4255,
      },
      {
        code: 'per_3h',
        title: '3404₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3404,
      },
      {
        code: 'sum',
        title: '4255 ₽',
        hourAmount: 24,
        priceFewDays: 4255,
      },
    ],
  },
  {
    id: 1268,
    point: {
      lat: 44.550041383607294,
      lon: 38.05658458438245,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1269,
    point: {
      lat: 44.549956474268114,
      lon: 38.056345588068275,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 1271,
    point: {
      lat: 44.5513251183717,
      lon: 38.05852081282808,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6325₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6325,
      },
      {
        code: 'per_3h',
        title: '5060₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5060,
      },
      {
        code: 'sum',
        title: '6325 ₽',
        hourAmount: 24,
        priceFewDays: 6325,
      },
    ],
  },
  {
    id: 1272,
    point: {
      lat: 44.55134813369221,
      lon: 38.05925573809815,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5750₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5750,
      },
      {
        code: 'per_3h',
        title: '4600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4600,
      },
      {
        code: 'sum',
        title: '5750 ₽',
        hourAmount: 24,
        priceFewDays: 5750,
      },
    ],
  },
  {
    id: 1273,
    point: {
      lat: 44.55073824233986,
      lon: 38.05793913558195,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5175₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5175,
      },
      {
        code: 'per_3h',
        title: '4140₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4140,
      },
      {
        code: 'sum',
        title: '5175 ₽',
        hourAmount: 24,
        priceFewDays: 5175,
      },
    ],
  },
  {
    id: 1274,
    point: {
      lat: 44.55062429533857,
      lon: 38.057978382007356,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5175₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5175,
      },
      {
        code: 'per_3h',
        title: '4140₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4140,
      },
      {
        code: 'sum',
        title: '5175 ₽',
        hourAmount: 24,
        priceFewDays: 5175,
      },
    ],
  },
  {
    id: 1275,
    point: {
      lat: 44.55049387343484,
      lon: 38.05786572922875,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5175₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5175,
      },
      {
        code: 'per_3h',
        title: '4140₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4140,
      },
      {
        code: 'sum',
        title: '5175 ₽',
        hourAmount: 24,
        priceFewDays: 5175,
      },
    ],
  },
  {
    id: 1276,
    point: {
      lat: 44.5497068256135,
      lon: 38.05711069474736,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5405₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5405,
      },
      {
        code: 'per_3h',
        title: '4324₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4324,
      },
      {
        code: 'sum',
        title: '5405 ₽',
        hourAmount: 24,
        priceFewDays: 5405,
      },
    ],
  },
  {
    id: 1277,
    point: {
      lat: 44.549438,
      lon: 38.056741,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 1278,
    point: {
      lat: 44.54989406932405,
      lon: 38.06062757605742,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6900₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6900,
      },
      {
        code: 'per_3h',
        title: '5520₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5520,
      },
      {
        code: 'sum',
        title: '6900 ₽',
        hourAmount: 24,
        priceFewDays: 6900,
      },
    ],
  },
  {
    id: 1279,
    point: {
      lat: 44.54995310111403,
      lon: 38.059123084655745,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4600,
      },
      {
        code: 'per_3h',
        title: '3680₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3680,
      },
      {
        code: 'sum',
        title: '4600 ₽',
        hourAmount: 24,
        priceFewDays: 4600,
      },
    ],
  },
  {
    id: 1280,
    point: {
      lat: 44.55019093129531,
      lon: 38.05925719510651,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4025₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4025,
      },
      {
        code: 'per_3h',
        title: '3220₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3220,
      },
      {
        code: 'sum',
        title: '4025 ₽',
        hourAmount: 24,
        priceFewDays: 4025,
      },
    ],
  },
  {
    id: 1281,
    point: {
      lat: 44.54905300072711,
      lon: 38.061264508598335,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1282,
    point: {
      lat: 44.54912588540855,
      lon: 38.06116258465576,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '7475₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 7475,
      },
      {
        code: 'per_3h',
        title: '5980₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5980,
      },
      {
        code: 'sum',
        title: '7475 ₽',
        hourAmount: 24,
        priceFewDays: 7475,
      },
    ],
  },
  {
    id: 1283,
    point: {
      lat: 44.54861049264591,
      lon: 38.060736029430394,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1286,
    point: {
      lat: 44.54972042880494,
      lon: 38.0612612625656,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4600,
      },
      {
        code: 'per_3h',
        title: '3680₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3680,
      },
      {
        code: 'sum',
        title: '4600 ₽',
        hourAmount: 24,
        priceFewDays: 4600,
      },
    ],
  },
  {
    id: 1289,
    point: {
      lat: 48.71501,
      lon: 44.509375,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4190₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4190,
      },
      {
        code: 'per_3h',
        title: '3352₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3352,
      },
      {
        code: 'sum',
        title: '4190 ₽',
        hourAmount: 24,
        priceFewDays: 4190,
      },
    ],
  },
  {
    id: 1290,
    point: {
      lat: 48.713351,
      lon: 44.509573,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4190₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4190,
      },
      {
        code: 'per_3h',
        title: '3352₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3352,
      },
      {
        code: 'sum',
        title: '4190 ₽',
        hourAmount: 24,
        priceFewDays: 4190,
      },
    ],
  },
  {
    id: 1291,
    point: {
      lat: 48.711473000250734,
      lon: 44.50636927976225,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3996₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3996,
      },
      {
        code: 'per_3h',
        title: '3197₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3197,
      },
      {
        code: 'sum',
        title: '3996 ₽',
        hourAmount: 24,
        priceFewDays: 3996,
      },
    ],
  },
  {
    id: 1292,
    point: {
      lat: 48.714522,
      lon: 44.510858,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3060₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3060,
      },
      {
        code: 'per_3h',
        title: '2448₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2448,
      },
      {
        code: 'sum',
        title: '3060 ₽',
        hourAmount: 24,
        priceFewDays: 3060,
      },
    ],
  },
  {
    id: 1293,
    point: {
      lat: 48.714498,
      lon: 44.509286,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3996₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3996,
      },
      {
        code: 'per_3h',
        title: '3197₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3197,
      },
      {
        code: 'sum',
        title: '3996 ₽',
        hourAmount: 24,
        priceFewDays: 3996,
      },
    ],
  },
  {
    id: 1294,
    point: {
      lat: 48.713387,
      lon: 44.502934,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '11998₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 11998,
      },
      {
        code: 'per_3h',
        title: '9598₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 9598,
      },
      {
        code: 'sum',
        title: '11998 ₽',
        hourAmount: 24,
        priceFewDays: 11998,
      },
    ],
  },
  {
    id: 1295,
    point: {
      lat: 48.71228739233356,
      lon: 44.508532434462246,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3996₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3996,
      },
      {
        code: 'per_3h',
        title: '3197₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3197,
      },
      {
        code: 'sum',
        title: '3996 ₽',
        hourAmount: 24,
        priceFewDays: 3996,
      },
    ],
  },
  {
    id: 1296,
    point: {
      lat: 48.71132389562959,
      lon: 44.50634782209012,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4190₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4190,
      },
      {
        code: 'per_3h',
        title: '3352₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3352,
      },
      {
        code: 'sum',
        title: '4190 ₽',
        hourAmount: 24,
        priceFewDays: 4190,
      },
    ],
  },
  {
    id: 1297,
    point: {
      lat: 48.71253598413103,
      lon: 44.50858366491829,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3996₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3996,
      },
      {
        code: 'per_3h',
        title: '3197₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3197,
      },
      {
        code: 'sum',
        title: '3996 ₽',
        hourAmount: 24,
        priceFewDays: 3996,
      },
    ],
  },
  {
    id: 1298,
    point: {
      lat: 55.844925,
      lon: 37.367697,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4130₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4130,
      },
      {
        code: 'per_3h',
        title: '3304₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3304,
      },
      {
        code: 'sum',
        title: '4130 ₽',
        hourAmount: 24,
        priceFewDays: 4130,
      },
    ],
  },
  {
    id: 1299,
    point: {
      lat: 55.763407,
      lon: 37.605652,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5310₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5310,
      },
      {
        code: 'per_3h',
        title: '4248₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4248,
      },
      {
        code: 'sum',
        title: '5310 ₽',
        hourAmount: 24,
        priceFewDays: 5310,
      },
    ],
  },
  {
    id: 1300,
    point: {
      lat: 55.76539642400048,
      lon: 49.14356077909845,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2131₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2131,
      },
      {
        code: 'per_3h',
        title: '1705₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1705,
      },
      {
        code: 'sum',
        title: '2131 ₽',
        hourAmount: 24,
        priceFewDays: 2131,
      },
    ],
  },
  {
    id: 1301,
    point: {
      lat: 55.786759,
      lon: 49.14709,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '9929₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 9929,
      },
      {
        code: 'per_3h',
        title: '7943₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 7943,
      },
      {
        code: 'sum',
        title: '9929 ₽',
        hourAmount: 24,
        priceFewDays: 9929,
      },
    ],
  },
  {
    id: 1302,
    point: {
      lat: 55.823611,
      lon: 49.155399,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1954₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1954,
      },
      {
        code: 'per_3h',
        title: '1563₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1563,
      },
      {
        code: 'sum',
        title: '1954 ₽',
        hourAmount: 24,
        priceFewDays: 1954,
      },
    ],
  },
  {
    id: 1303,
    point: {
      lat: 55.783666,
      lon: 49.137684,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '18290₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 18290,
      },
      {
        code: 'per_3h',
        title: '14632₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 14632,
      },
      {
        code: 'sum',
        title: '18290 ₽',
        hourAmount: 24,
        priceFewDays: 18290,
      },
    ],
  },
  {
    id: 1304,
    point: {
      lat: 55.76548715489344,
      lon: 49.14384509325402,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2665₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2665,
      },
      {
        code: 'per_3h',
        title: '2132₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2132,
      },
      {
        code: 'sum',
        title: '2665 ₽',
        hourAmount: 24,
        priceFewDays: 2665,
      },
    ],
  },
  {
    id: 1305,
    point: {
      lat: 55.76577201052008,
      lon: 49.146100966270446,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2932₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2932,
      },
      {
        code: 'per_3h',
        title: '2346₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2346,
      },
      {
        code: 'sum',
        title: '2932 ₽',
        hourAmount: 24,
        priceFewDays: 2932,
      },
    ],
  },
  {
    id: 1306,
    point: {
      lat: 55.76598673787985,
      lon: 49.14590248280334,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2219₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2219,
      },
      {
        code: 'per_3h',
        title: '1775₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1775,
      },
      {
        code: 'sum',
        title: '2219 ₽',
        hourAmount: 24,
        priceFewDays: 2219,
      },
    ],
  },
  {
    id: 1307,
    point: {
      lat: 55.766309,
      lon: 49.144736,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2665₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2665,
      },
      {
        code: 'per_3h',
        title: '2132₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2132,
      },
      {
        code: 'sum',
        title: '2665 ₽',
        hourAmount: 24,
        priceFewDays: 2665,
      },
    ],
  },
  {
    id: 1308,
    point: {
      lat: 59.837042,
      lon: 30.110253,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2160₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2160,
      },
      {
        code: 'per_3h',
        title: '1728₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1728,
      },
      {
        code: 'sum',
        title: '2160 ₽',
        hourAmount: 24,
        priceFewDays: 2160,
      },
    ],
  },
  {
    id: 1309,
    point: {
      lat: 59.87704846924198,
      lon: 30.24772584722136,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2940₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2940,
      },
      {
        code: 'per_3h',
        title: '2352₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2352,
      },
      {
        code: 'sum',
        title: '2940 ₽',
        hourAmount: 24,
        priceFewDays: 2940,
      },
    ],
  },
  {
    id: 1310,
    point: {
      lat: 60.00204,
      lon: 30.212247,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2340₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2340,
      },
      {
        code: 'per_3h',
        title: '1872₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1872,
      },
      {
        code: 'sum',
        title: '2340 ₽',
        hourAmount: 24,
        priceFewDays: 2340,
      },
    ],
  },
  {
    id: 1312,
    point: {
      lat: 59.841929,
      lon: 30.101458,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2160₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2160,
      },
      {
        code: 'per_3h',
        title: '1728₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1728,
      },
      {
        code: 'sum',
        title: '2160 ₽',
        hourAmount: 24,
        priceFewDays: 2160,
      },
    ],
  },
  {
    id: 1317,
    point: {
      lat: 59.95584461908543,
      lon: 30.253273738098137,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4200,
      },
      {
        code: 'per_3h',
        title: '3360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3360,
      },
      {
        code: 'sum',
        title: '4200 ₽',
        hourAmount: 24,
        priceFewDays: 4200,
      },
    ],
  },
  {
    id: 1318,
    point: {
      lat: 59.977012,
      lon: 30.331741,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3600,
      },
      {
        code: 'per_3h',
        title: '2880₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2880,
      },
      {
        code: 'sum',
        title: '3600 ₽',
        hourAmount: 24,
        priceFewDays: 3600,
      },
    ],
  },
  {
    id: 1320,
    point: {
      lat: 59.90013152543175,
      lon: 30.312659449073763,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1321,
    point: {
      lat: 59.978192,
      lon: 30.335146,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1322,
    point: {
      lat: 59.900340318952075,
      lon: 30.31292543233973,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1325,
    point: {
      lat: 52.267614,
      lon: 104.325324,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3795₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3795,
      },
      {
        code: 'per_3h',
        title: '3036₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3036,
      },
      {
        code: 'sum',
        title: '3795 ₽',
        hourAmount: 24,
        priceFewDays: 3795,
      },
    ],
  },
  {
    id: 1326,
    point: {
      lat: 52.272048779744445,
      lon: 104.29796641447754,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3565₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3565,
      },
      {
        code: 'per_3h',
        title: '2852₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2852,
      },
      {
        code: 'sum',
        title: '3565 ₽',
        hourAmount: 24,
        priceFewDays: 3565,
      },
    ],
  },
  {
    id: 1328,
    point: {
      lat: 52.269921693532766,
      lon: 104.30306449999996,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3300,
      },
      {
        code: 'per_3h',
        title: '2640₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2640,
      },
      {
        code: 'sum',
        title: '3300 ₽',
        hourAmount: 24,
        priceFewDays: 3300,
      },
    ],
  },
  {
    id: 1347,
    point: {
      lat: 55.817163,
      lon: 49.134666,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3358₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3358,
      },
      {
        code: 'per_3h',
        title: '2686₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2686,
      },
      {
        code: 'sum',
        title: '3358 ₽',
        hourAmount: 24,
        priceFewDays: 3358,
      },
    ],
  },
  {
    id: 1348,
    point: {
      lat: 55.749248,
      lon: 49.184675,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2858₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2858,
      },
      {
        code: 'per_3h',
        title: '2286₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2286,
      },
      {
        code: 'sum',
        title: '2858 ₽',
        hourAmount: 24,
        priceFewDays: 2858,
      },
    ],
  },
  {
    id: 1349,
    point: {
      lat: 55.784865,
      lon: 49.133435,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3694₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3694,
      },
      {
        code: 'per_3h',
        title: '2955₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2955,
      },
      {
        code: 'sum',
        title: '3694 ₽',
        hourAmount: 24,
        priceFewDays: 3694,
      },
    ],
  },
  {
    id: 1350,
    point: {
      lat: 55.748979,
      lon: 49.183058,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2858₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2858,
      },
      {
        code: 'per_3h',
        title: '2286₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2286,
      },
      {
        code: 'sum',
        title: '2858 ₽',
        hourAmount: 24,
        priceFewDays: 2858,
      },
    ],
  },
  {
    id: 1351,
    point: {
      lat: 55.76762407303882,
      lon: 49.17316803372953,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2858₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2858,
      },
      {
        code: 'per_3h',
        title: '2286₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2286,
      },
      {
        code: 'sum',
        title: '2858 ₽',
        hourAmount: 24,
        priceFewDays: 2858,
      },
    ],
  },
  {
    id: 1352,
    point: {
      lat: 55.76773349356113,
      lon: 49.17338894999006,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2858₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2858,
      },
      {
        code: 'per_3h',
        title: '2286₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2286,
      },
      {
        code: 'sum',
        title: '2858 ₽',
        hourAmount: 24,
        priceFewDays: 2858,
      },
    ],
  },
  {
    id: 1353,
    point: {
      lat: 56.803539653370336,
      lon: 60.63096695767204,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2760,
      },
      {
        code: 'per_3h',
        title: '2208₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2208,
      },
      {
        code: 'sum',
        title: '2760 ₽',
        hourAmount: 24,
        priceFewDays: 2760,
      },
    ],
  },
  {
    id: 1355,
    point: {
      lat: 56.80344841981023,
      lon: 60.63087039814751,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 1356,
    point: {
      lat: 56.828784745178346,
      lon: 60.648407424781226,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '10235₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 10235,
      },
      {
        code: 'per_3h',
        title: '8188₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 8188,
      },
      {
        code: 'sum',
        title: '10235 ₽',
        hourAmount: 24,
        priceFewDays: 10235,
      },
    ],
  },
  {
    id: 1360,
    point: {
      lat: 56.851254,
      lon: 60.618226,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3335₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3335,
      },
      {
        code: 'per_3h',
        title: '2668₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2668,
      },
      {
        code: 'sum',
        title: '3335 ₽',
        hourAmount: 24,
        priceFewDays: 3335,
      },
    ],
  },
  {
    id: 1361,
    point: {
      lat: 56.82884331807529,
      lon: 60.64817317724607,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 1362,
    point: {
      lat: 56.85731453428152,
      lon: 60.587256083075616,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2760,
      },
      {
        code: 'per_3h',
        title: '2208₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2208,
      },
      {
        code: 'sum',
        title: '2760 ₽',
        hourAmount: 24,
        priceFewDays: 2760,
      },
    ],
  },
  {
    id: 1363,
    point: {
      lat: 56.78516942967348,
      lon: 60.635735228835976,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 1364,
    point: {
      lat: 56.907667,
      lon: 60.617705,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 1365,
    point: {
      lat: 56.78945566936353,
      lon: 60.61817855952452,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2760,
      },
      {
        code: 'per_3h',
        title: '2208₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2208,
      },
      {
        code: 'sum',
        title: '2760 ₽',
        hourAmount: 24,
        priceFewDays: 2760,
      },
    ],
  },
  {
    id: 1366,
    point: {
      lat: 56.828697737315125,
      lon: 60.648575508598306,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3105₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3105,
      },
      {
        code: 'per_3h',
        title: '2484₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2484,
      },
      {
        code: 'sum',
        title: '3105 ₽',
        hourAmount: 24,
        priceFewDays: 3105,
      },
    ],
  },
  {
    id: 1367,
    point: {
      lat: 56.828731559158555,
      lon: 60.64831533432385,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 1370,
    point: {
      lat: 56.86451682269563,
      lon: 60.665942626983586,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 1371,
    point: {
      lat: 56.806008,
      lon: 60.626643,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2760,
      },
      {
        code: 'per_3h',
        title: '2208₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2208,
      },
      {
        code: 'sum',
        title: '2760 ₽',
        hourAmount: 24,
        priceFewDays: 2760,
      },
    ],
  },
  {
    id: 1372,
    point: {
      lat: 56.837588,
      lon: 60.663581,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1373,
    point: {
      lat: 56.78642533566691,
      lon: 60.651257305557216,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1374,
    point: {
      lat: 56.85721167702892,
      lon: 60.587309727255935,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2760,
      },
      {
        code: 'per_3h',
        title: '2208₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2208,
      },
      {
        code: 'sum',
        title: '2760 ₽',
        hourAmount: 24,
        priceFewDays: 2760,
      },
    ],
  },
  {
    id: 1376,
    point: {
      lat: 56.883956,
      lon: 60.633614,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2990₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2990,
      },
      {
        code: 'per_3h',
        title: '2392₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2392,
      },
      {
        code: 'sum',
        title: '2990 ₽',
        hourAmount: 24,
        priceFewDays: 2990,
      },
    ],
  },
  {
    id: 1378,
    point: {
      lat: 56.78314,
      lon: 60.651167,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 1385,
    point: {
      lat: 56.81962537653381,
      lon: 60.61784789110802,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 1388,
    point: {
      lat: 56.79185168356894,
      lon: 60.61072635040773,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3910₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3910,
      },
      {
        code: 'per_3h',
        title: '3128₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3128,
      },
      {
        code: 'sum',
        title: '3910 ₽',
        hourAmount: 24,
        priceFewDays: 3910,
      },
    ],
  },
  {
    id: 1390,
    point: {
      lat: 56.786319338436975,
      lon: 60.65104809325408,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1391,
    point: {
      lat: 56.85534034949996,
      lon: 60.57529988496406,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2760,
      },
      {
        code: 'per_3h',
        title: '2208₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2208,
      },
      {
        code: 'sum',
        title: '2760 ₽',
        hourAmount: 24,
        priceFewDays: 2760,
      },
    ],
  },
  {
    id: 1392,
    point: {
      lat: 56.791423992427696,
      lon: 60.611106203041054,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3910₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3910,
      },
      {
        code: 'per_3h',
        title: '3128₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3128,
      },
      {
        code: 'sum',
        title: '3910 ₽',
        hourAmount: 24,
        priceFewDays: 3910,
      },
    ],
  },
  {
    id: 1395,
    point: {
      lat: 56.7850222062687,
      lon: 60.635767415344134,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 1396,
    point: {
      lat: 56.80158191800795,
      lon: 60.61137805952446,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2760,
      },
      {
        code: 'per_3h',
        title: '2208₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2208,
      },
      {
        code: 'sum',
        title: '2760 ₽',
        hourAmount: 24,
        priceFewDays: 2760,
      },
    ],
  },
  {
    id: 1398,
    point: {
      lat: 56.789925,
      lon: 60.617354,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2760,
      },
      {
        code: 'per_3h',
        title: '2208₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2208,
      },
      {
        code: 'sum',
        title: '2760 ₽',
        hourAmount: 24,
        priceFewDays: 2760,
      },
    ],
  },
  {
    id: 1403,
    point: {
      lat: 56.855250918928085,
      lon: 60.575574517196564,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2760,
      },
      {
        code: 'per_3h',
        title: '2208₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2208,
      },
      {
        code: 'sum',
        title: '2760 ₽',
        hourAmount: 24,
        priceFewDays: 2760,
      },
    ],
  },
  {
    id: 1405,
    point: {
      lat: 56.82881096684436,
      lon: 60.64820268154524,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 1406,
    point: {
      lat: 56.82880067326501,
      lon: 60.64844408035658,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 1407,
    point: {
      lat: 56.828633282117494,
      lon: 60.648758794162184,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3910₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3910,
      },
      {
        code: 'per_3h',
        title: '3128₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3128,
      },
      {
        code: 'sum',
        title: '3910 ₽',
        hourAmount: 24,
        priceFewDays: 3910,
      },
    ],
  },
  {
    id: 1411,
    point: {
      lat: 56.8287447937846,
      lon: 60.64858891964335,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 1414,
    point: {
      lat: 56.8286024012238,
      lon: 60.648705149981865,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3335₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3335,
      },
      {
        code: 'per_3h',
        title: '2668₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2668,
      },
      {
        code: 'sum',
        title: '3335 ₽',
        hourAmount: 24,
        priceFewDays: 3335,
      },
    ],
  },
  {
    id: 1417,
    point: {
      lat: 56.805027,
      lon: 60.612216,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4140₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4140,
      },
      {
        code: 'per_3h',
        title: '3312₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3312,
      },
      {
        code: 'sum',
        title: '4140 ₽',
        hourAmount: 24,
        priceFewDays: 4140,
      },
    ],
  },
  {
    id: 1418,
    point: {
      lat: 56.804436,
      lon: 60.630892,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3910₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3910,
      },
      {
        code: 'per_3h',
        title: '3128₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3128,
      },
      {
        code: 'sum',
        title: '3910 ₽',
        hourAmount: 24,
        priceFewDays: 3910,
      },
    ],
  },
  {
    id: 1419,
    point: {
      lat: 56.801937,
      lon: 60.593109,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4255₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4255,
      },
      {
        code: 'per_3h',
        title: '3404₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3404,
      },
      {
        code: 'sum',
        title: '4255 ₽',
        hourAmount: 24,
        priceFewDays: 4255,
      },
    ],
  },
  {
    id: 1420,
    point: {
      lat: 56.828666856474776,
      lon: 60.64872571230315,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3910₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3910,
      },
      {
        code: 'per_3h',
        title: '3128₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3128,
      },
      {
        code: 'sum',
        title: '3910 ₽',
        hourAmount: 24,
        priceFewDays: 3910,
      },
    ],
  },
  {
    id: 1421,
    point: {
      lat: 56.85711321435637,
      lon: 60.58740802527724,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3335₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3335,
      },
      {
        code: 'per_3h',
        title: '2668₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2668,
      },
      {
        code: 'sum',
        title: '3335 ₽',
        hourAmount: 24,
        priceFewDays: 3335,
      },
    ],
  },
  {
    id: 1422,
    point: {
      lat: 56.854635,
      lon: 60.576175,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 1424,
    point: {
      lat: 56.82871416052748,
      lon: 60.64884194264162,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4485₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4485,
      },
      {
        code: 'per_3h',
        title: '3588₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3588,
      },
      {
        code: 'sum',
        title: '4485 ₽',
        hourAmount: 24,
        priceFewDays: 4485,
      },
    ],
  },
  {
    id: 1425,
    point: {
      lat: 56.78616623079617,
      lon: 60.6509300760574,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1428,
    point: {
      lat: 56.828686220732955,
      lon: 60.64880975613346,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3910₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3910,
      },
      {
        code: 'per_3h',
        title: '3128₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3128,
      },
      {
        code: 'sum',
        title: '3910 ₽',
        hourAmount: 24,
        priceFewDays: 3910,
      },
    ],
  },
  {
    id: 1429,
    point: {
      lat: 56.828846259094895,
      lon: 60.648304605487795,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 1430,
    point: {
      lat: 56.82878743865877,
      lon: 60.648309969905824,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 1432,
    point: {
      lat: 56.860866,
      lon: 60.560266,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 1437,
    point: {
      lat: 56.82275,
      lon: 60.61774,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4370₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4370,
      },
      {
        code: 'per_3h',
        title: '3496₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3496,
      },
      {
        code: 'sum',
        title: '4370 ₽',
        hourAmount: 24,
        priceFewDays: 4370,
      },
    ],
  },
  {
    id: 1442,
    point: {
      lat: 56.82865656285564,
      lon: 60.648599648479404,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3910₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3910,
      },
      {
        code: 'per_3h',
        title: '3128₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3128,
      },
      {
        code: 'sum',
        title: '3910 ₽',
        hourAmount: 24,
        priceFewDays: 3910,
      },
    ],
  },
  {
    id: 1443,
    point: {
      lat: 56.860531,
      lon: 60.616537,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3335₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3335,
      },
      {
        code: 'per_3h',
        title: '2668₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2668,
      },
      {
        code: 'sum',
        title: '3335 ₽',
        hourAmount: 24,
        priceFewDays: 3335,
      },
    ],
  },
  {
    id: 1444,
    point: {
      lat: 56.86432877700291,
      lon: 60.66620548346703,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 1445,
    point: {
      lat: 56.82873597070109,
      lon: 60.64847626686474,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 1448,
    point: {
      lat: 56.83354967763405,
      lon: 60.59899875396723,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1449,
    point: {
      lat: 56.82879332070656,
      lon: 60.64810343981168,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 1452,
    point: {
      lat: 56.798326117865756,
      lon: 60.63970933068842,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 1453,
    point: {
      lat: 56.824766957794566,
      lon: 60.60678946627038,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1454,
    point: {
      lat: 56.828581,
      lon: 60.644429,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 1455,
    point: {
      lat: 56.828755087379385,
      lon: 60.64820536375423,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 1458,
    point: {
      lat: 56.798137738165046,
      lon: 60.63961277116389,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 1460,
    point: {
      lat: 56.79171435339079,
      lon: 60.610905695106396,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 1462,
    point: {
      lat: 56.805845,
      lon: 60.620992,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4140₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4140,
      },
      {
        code: 'per_3h',
        title: '3312₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3312,
      },
      {
        code: 'sum',
        title: '4140 ₽',
        hourAmount: 24,
        priceFewDays: 4140,
      },
    ],
  },
  {
    id: 1464,
    point: {
      lat: 54.63190462399157,
      lon: 39.77690286441793,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3009₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3009,
      },
      {
        code: 'per_3h',
        title: '2407₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2407,
      },
      {
        code: 'sum',
        title: '3009 ₽',
        hourAmount: 24,
        priceFewDays: 3009,
      },
    ],
  },
  {
    id: 1469,
    point: {
      lat: 54.625885,
      lon: 39.730194,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2714₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2714,
      },
      {
        code: 'per_3h',
        title: '2171₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2171,
      },
      {
        code: 'sum',
        title: '2714 ₽',
        hourAmount: 24,
        priceFewDays: 2714,
      },
    ],
  },
  {
    id: 1470,
    point: {
      lat: 54.603842,
      lon: 39.728254,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2537₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2537,
      },
      {
        code: 'per_3h',
        title: '2030₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2030,
      },
      {
        code: 'sum',
        title: '2537 ₽',
        hourAmount: 24,
        priceFewDays: 2537,
      },
    ],
  },
  {
    id: 1472,
    point: {
      lat: 54.647963,
      lon: 39.666432,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3127₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3127,
      },
      {
        code: 'per_3h',
        title: '2502₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2502,
      },
      {
        code: 'sum',
        title: '3127 ₽',
        hourAmount: 24,
        priceFewDays: 3127,
      },
    ],
  },
  {
    id: 1474,
    point: {
      lat: 54.620897,
      lon: 39.789043,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2596₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2596,
      },
      {
        code: 'per_3h',
        title: '2077₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2077,
      },
      {
        code: 'sum',
        title: '2596 ₽',
        hourAmount: 24,
        priceFewDays: 2596,
      },
    ],
  },
  {
    id: 1480,
    point: {
      lat: 54.630383,
      lon: 39.695546,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2419₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2419,
      },
      {
        code: 'per_3h',
        title: '1935₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1935,
      },
      {
        code: 'sum',
        title: '2419 ₽',
        hourAmount: 24,
        priceFewDays: 2419,
      },
    ],
  },
  {
    id: 1481,
    point: {
      lat: 54.631921,
      lon: 39.777877,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2832₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2832,
      },
      {
        code: 'per_3h',
        title: '2266₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2266,
      },
      {
        code: 'sum',
        title: '2832 ₽',
        hourAmount: 24,
        priceFewDays: 2832,
      },
    ],
  },
  {
    id: 1488,
    point: {
      lat: 54.63969,
      lon: 39.672208,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3009₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3009,
      },
      {
        code: 'per_3h',
        title: '2407₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2407,
      },
      {
        code: 'sum',
        title: '3009 ₽',
        hourAmount: 24,
        priceFewDays: 3009,
      },
    ],
  },
  {
    id: 1491,
    point: {
      lat: 54.629252,
      lon: 39.78112,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2832₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2832,
      },
      {
        code: 'per_3h',
        title: '2266₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2266,
      },
      {
        code: 'sum',
        title: '2832 ₽',
        hourAmount: 24,
        priceFewDays: 2832,
      },
    ],
  },
  {
    id: 1492,
    point: {
      lat: 54.63173968329551,
      lon: 39.77683312698356,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2714₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2714,
      },
      {
        code: 'per_3h',
        title: '2171₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2171,
      },
      {
        code: 'sum',
        title: '2714 ₽',
        hourAmount: 24,
        priceFewDays: 2714,
      },
    ],
  },
  {
    id: 1500,
    point: {
      lat: 54.634646,
      lon: 39.675756,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2419₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2419,
      },
      {
        code: 'per_3h',
        title: '1935₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1935,
      },
      {
        code: 'sum',
        title: '2419 ₽',
        hourAmount: 24,
        priceFewDays: 2419,
      },
    ],
  },
  {
    id: 1501,
    point: {
      lat: 54.63205400366479,
      lon: 39.77697260185232,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3422₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3422,
      },
      {
        code: 'per_3h',
        title: '2738₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2738,
      },
      {
        code: 'sum',
        title: '3422 ₽',
        hourAmount: 24,
        priceFewDays: 3422,
      },
    ],
  },
  {
    id: 1509,
    point: {
      lat: 45.037349,
      lon: 39.020696,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2832₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2832,
      },
      {
        code: 'per_3h',
        title: '2266₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2266,
      },
      {
        code: 'sum',
        title: '2832 ₽',
        hourAmount: 24,
        priceFewDays: 2832,
      },
    ],
  },
  {
    id: 1510,
    point: {
      lat: 45.046489,
      lon: 39.03338,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2360₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2360,
      },
      {
        code: 'per_3h',
        title: '1888₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1888,
      },
      {
        code: 'sum',
        title: '2360 ₽',
        hourAmount: 24,
        priceFewDays: 2360,
      },
    ],
  },
  {
    id: 1511,
    point: {
      lat: 45.05880419920601,
      lon: 39.02878967790982,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1770₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1770,
      },
      {
        code: 'per_3h',
        title: '1416₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1416,
      },
      {
        code: 'sum',
        title: '1770 ₽',
        hourAmount: 24,
        priceFewDays: 1770,
      },
    ],
  },
  {
    id: 1512,
    point: {
      lat: 45.05850763742904,
      lon: 39.02841416864774,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1888₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1888,
      },
      {
        code: 'per_3h',
        title: '1510₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1510,
      },
      {
        code: 'sum',
        title: '1888 ₽',
        hourAmount: 24,
        priceFewDays: 1888,
      },
    ],
  },
  {
    id: 1513,
    point: {
      lat: 45.05870914752303,
      lon: 39.028424897483795,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1770₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1770,
      },
      {
        code: 'per_3h',
        title: '1416₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1416,
      },
      {
        code: 'sum',
        title: '1770 ₽',
        hourAmount: 24,
        priceFewDays: 1770,
      },
    ],
  },
  {
    id: 1514,
    point: {
      lat: 45.052131,
      lon: 38.969717,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2832₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2832,
      },
      {
        code: 'per_3h',
        title: '2266₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2266,
      },
      {
        code: 'sum',
        title: '2832 ₽',
        hourAmount: 24,
        priceFewDays: 2832,
      },
    ],
  },
  {
    id: 1515,
    point: {
      lat: 45.05878899094741,
      lon: 39.02900425463103,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1770₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1770,
      },
      {
        code: 'per_3h',
        title: '1416₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1416,
      },
      {
        code: 'sum',
        title: '1770 ₽',
        hourAmount: 24,
        priceFewDays: 1770,
      },
    ],
  },
  {
    id: 1516,
    point: {
      lat: 59.903143020214145,
      lon: 30.31046950000001,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2714₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2714,
      },
      {
        code: 'per_3h',
        title: '2171₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2171,
      },
      {
        code: 'sum',
        title: '2714 ₽',
        hourAmount: 24,
        priceFewDays: 2714,
      },
    ],
  },
  {
    id: 1517,
    point: {
      lat: 59.904775,
      lon: 30.31082,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2950,
      },
      {
        code: 'per_3h',
        title: '2360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2360,
      },
      {
        code: 'sum',
        title: '2950 ₽',
        hourAmount: 24,
        priceFewDays: 2950,
      },
    ],
  },
  {
    id: 1518,
    point: {
      lat: 60.048211,
      lon: 30.32398,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2596₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2596,
      },
      {
        code: 'per_3h',
        title: '2077₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2077,
      },
      {
        code: 'sum',
        title: '2596 ₽',
        hourAmount: 24,
        priceFewDays: 2596,
      },
    ],
  },
  {
    id: 1519,
    point: {
      lat: 59.855656,
      lon: 30.237885,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2950,
      },
      {
        code: 'per_3h',
        title: '2360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2360,
      },
      {
        code: 'sum',
        title: '2950 ₽',
        hourAmount: 24,
        priceFewDays: 2950,
      },
    ],
  },
  {
    id: 1520,
    point: {
      lat: 60.012539,
      lon: 30.255591,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2596₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2596,
      },
      {
        code: 'per_3h',
        title: '2077₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2077,
      },
      {
        code: 'sum',
        title: '2596 ₽',
        hourAmount: 24,
        priceFewDays: 2596,
      },
    ],
  },
  {
    id: 1521,
    point: {
      lat: 59.885553,
      lon: 30.313074,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3186₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3186,
      },
      {
        code: 'per_3h',
        title: '2549₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2549,
      },
      {
        code: 'sum',
        title: '3186 ₽',
        hourAmount: 24,
        priceFewDays: 3186,
      },
    ],
  },
  {
    id: 1522,
    point: {
      lat: 57.135556,
      lon: 65.57141,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2990₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2990,
      },
      {
        code: 'per_3h',
        title: '2392₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2392,
      },
      {
        code: 'sum',
        title: '2990 ₽',
        hourAmount: 24,
        priceFewDays: 2990,
      },
    ],
  },
  {
    id: 1523,
    point: {
      lat: 57.141246,
      lon: 65.548117,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2760,
      },
      {
        code: 'per_3h',
        title: '2208₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2208,
      },
      {
        code: 'sum',
        title: '2760 ₽',
        hourAmount: 24,
        priceFewDays: 2760,
      },
    ],
  },
  {
    id: 1524,
    point: {
      lat: 55.03976586723583,
      lon: 82.9003265171965,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5002₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5002,
      },
      {
        code: 'per_3h',
        title: '4002₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4002,
      },
      {
        code: 'sum',
        title: '5002 ₽',
        hourAmount: 24,
        priceFewDays: 5002,
      },
    ],
  },
  {
    id: 1526,
    point: {
      lat: 54.712186,
      lon: 20.456265,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3540₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3540,
      },
      {
        code: 'per_3h',
        title: '2832₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2832,
      },
      {
        code: 'sum',
        title: '3540 ₽',
        hourAmount: 24,
        priceFewDays: 3540,
      },
    ],
  },
  {
    id: 1527,
    point: {
      lat: 54.690516214904555,
      lon: 20.522456635581932,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2360₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2360,
      },
      {
        code: 'per_3h',
        title: '1888₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1888,
      },
      {
        code: 'sum',
        title: '2360 ₽',
        hourAmount: 24,
        priceFewDays: 2360,
      },
    ],
  },
  {
    id: 1528,
    point: {
      lat: 54.729819,
      lon: 20.553481,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3540₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3540,
      },
      {
        code: 'per_3h',
        title: '2832₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2832,
      },
      {
        code: 'sum',
        title: '3540 ₽',
        hourAmount: 24,
        priceFewDays: 3540,
      },
    ],
  },
  {
    id: 1529,
    point: {
      lat: 54.68271019752002,
      lon: 20.48710608465571,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2124₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2124,
      },
      {
        code: 'per_3h',
        title: '1699₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1699,
      },
      {
        code: 'sum',
        title: '2124 ₽',
        hourAmount: 24,
        priceFewDays: 2124,
      },
    ],
  },
  {
    id: 1530,
    point: {
      lat: 54.748281,
      lon: 20.495737,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2950,
      },
      {
        code: 'per_3h',
        title: '2360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2360,
      },
      {
        code: 'sum',
        title: '2950 ₽',
        hourAmount: 24,
        priceFewDays: 2950,
      },
    ],
  },
  {
    id: 1531,
    point: {
      lat: 54.763836,
      lon: 20.601262,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2950,
      },
      {
        code: 'per_3h',
        title: '2360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2360,
      },
      {
        code: 'sum',
        title: '2950 ₽',
        hourAmount: 24,
        priceFewDays: 2950,
      },
    ],
  },
  {
    id: 1532,
    point: {
      lat: 54.68726881522109,
      lon: 20.52091619444273,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2950,
      },
      {
        code: 'per_3h',
        title: '2360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2360,
      },
      {
        code: 'sum',
        title: '2950 ₽',
        hourAmount: 24,
        priceFewDays: 2950,
      },
    ],
  },
  {
    id: 1533,
    point: {
      lat: 54.68271019752002,
      lon: 20.486719846557556,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2124₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2124,
      },
      {
        code: 'per_3h',
        title: '1699₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1699,
      },
      {
        code: 'sum',
        title: '2124 ₽',
        hourAmount: 24,
        priceFewDays: 2124,
      },
    ],
  },
  {
    id: 1534,
    point: {
      lat: 54.682878038669685,
      lon: 20.48745477182763,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2124₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2124,
      },
      {
        code: 'per_3h',
        title: '1699₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1699,
      },
      {
        code: 'sum',
        title: '2124 ₽',
        hourAmount: 24,
        priceFewDays: 2124,
      },
    ],
  },
  {
    id: 1535,
    point: {
      lat: 54.68278168550232,
      lon: 20.487293839286735,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2124₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2124,
      },
      {
        code: 'per_3h',
        title: '1699₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1699,
      },
      {
        code: 'sum',
        title: '2124 ₽',
        hourAmount: 24,
        priceFewDays: 2124,
      },
    ],
  },
  {
    id: 1538,
    point: {
      lat: 54.674658,
      lon: 20.570468,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2596₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2596,
      },
      {
        code: 'per_3h',
        title: '2077₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2077,
      },
      {
        code: 'sum',
        title: '2596 ₽',
        hourAmount: 24,
        priceFewDays: 2596,
      },
    ],
  },
  {
    id: 1539,
    point: {
      lat: 54.694956,
      lon: 20.477286,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2950,
      },
      {
        code: 'per_3h',
        title: '2360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2360,
      },
      {
        code: 'sum',
        title: '2950 ₽',
        hourAmount: 24,
        priceFewDays: 2950,
      },
    ],
  },
  {
    id: 1540,
    point: {
      lat: 54.763472,
      lon: 20.603741,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2950,
      },
      {
        code: 'per_3h',
        title: '2360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2360,
      },
      {
        code: 'sum',
        title: '2950 ₽',
        hourAmount: 24,
        priceFewDays: 2950,
      },
    ],
  },
  {
    id: 1541,
    point: {
      lat: 54.69028003847724,
      lon: 20.522478093254065,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2124₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2124,
      },
      {
        code: 'per_3h',
        title: '1699₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1699,
      },
      {
        code: 'sum',
        title: '2124 ₽',
        hourAmount: 24,
        priceFewDays: 2124,
      },
    ],
  },
  {
    id: 1547,
    point: {
      lat: 43.112633,
      lon: 131.923546,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4366₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4366,
      },
      {
        code: 'per_3h',
        title: '3493₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3493,
      },
      {
        code: 'sum',
        title: '4366 ₽',
        hourAmount: 24,
        priceFewDays: 4366,
      },
    ],
  },
  {
    id: 1549,
    point: {
      lat: 43.11196191757201,
      lon: 131.87577212698363,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4130₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4130,
      },
      {
        code: 'per_3h',
        title: '3304₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3304,
      },
      {
        code: 'sum',
        title: '4130 ₽',
        hourAmount: 24,
        priceFewDays: 4130,
      },
    ],
  },
  {
    id: 1550,
    point: {
      lat: 43.11206017238784,
      lon: 131.8759276951065,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3540₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3540,
      },
      {
        code: 'per_3h',
        title: '2832₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2832,
      },
      {
        code: 'sum',
        title: '3540 ₽',
        hourAmount: 24,
        priceFewDays: 3540,
      },
    ],
  },
  {
    id: 1551,
    point: {
      lat: 43.120307,
      lon: 131.88977,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5310₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5310,
      },
      {
        code: 'per_3h',
        title: '4248₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4248,
      },
      {
        code: 'sum',
        title: '5310 ₽',
        hourAmount: 24,
        priceFewDays: 5310,
      },
    ],
  },
  {
    id: 1552,
    point: {
      lat: 53.533099,
      lon: 49.330014,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1553,
    point: {
      lat: 53.537333,
      lon: 49.324992,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1554,
    point: {
      lat: 53.526131,
      lon: 49.339778,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3500,
      },
      {
        code: 'per_3h',
        title: '2800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2800,
      },
      {
        code: 'sum',
        title: '3500 ₽',
        hourAmount: 24,
        priceFewDays: 3500,
      },
    ],
  },
  {
    id: 1555,
    point: {
      lat: 53.530573,
      lon: 49.343075,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3500,
      },
      {
        code: 'per_3h',
        title: '2800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2800,
      },
      {
        code: 'sum',
        title: '3500 ₽',
        hourAmount: 24,
        priceFewDays: 3500,
      },
    ],
  },
  {
    id: 1556,
    point: {
      lat: 53.545535,
      lon: 49.367599,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3500,
      },
      {
        code: 'per_3h',
        title: '2800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2800,
      },
      {
        code: 'sum',
        title: '3500 ₽',
        hourAmount: 24,
        priceFewDays: 3500,
      },
    ],
  },
  {
    id: 1558,
    point: {
      lat: 53.527496,
      lon: 49.334802,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2500,
      },
      {
        code: 'per_3h',
        title: '2000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2000,
      },
      {
        code: 'sum',
        title: '2500 ₽',
        hourAmount: 24,
        priceFewDays: 2500,
      },
    ],
  },
  {
    id: 1559,
    point: {
      lat: 53.503439,
      lon: 49.29851,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1560,
    point: {
      lat: 53.545188,
      lon: 49.360538,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5000,
      },
      {
        code: 'per_3h',
        title: '4000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4000,
      },
      {
        code: 'sum',
        title: '5000 ₽',
        hourAmount: 24,
        priceFewDays: 5000,
      },
    ],
  },
  {
    id: 1561,
    point: {
      lat: 53.535037,
      lon: 49.355014,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6000,
      },
      {
        code: 'per_3h',
        title: '4800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4800,
      },
      {
        code: 'sum',
        title: '6000 ₽',
        hourAmount: 24,
        priceFewDays: 6000,
      },
    ],
  },
  {
    id: 1562,
    point: {
      lat: 53.522988,
      lon: 49.301384,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1563,
    point: {
      lat: 53.528984,
      lon: 49.341332,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5000,
      },
      {
        code: 'per_3h',
        title: '4000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4000,
      },
      {
        code: 'sum',
        title: '5000 ₽',
        hourAmount: 24,
        priceFewDays: 5000,
      },
    ],
  },
  {
    id: 1564,
    point: {
      lat: 53.5262,
      lon: 49.338961,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5000,
      },
      {
        code: 'per_3h',
        title: '4000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4000,
      },
      {
        code: 'sum',
        title: '5000 ₽',
        hourAmount: 24,
        priceFewDays: 5000,
      },
    ],
  },
  {
    id: 1565,
    point: {
      lat: 53.545568,
      lon: 49.36547,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4000,
      },
      {
        code: 'per_3h',
        title: '3200₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3200,
      },
      {
        code: 'sum',
        title: '4000 ₽',
        hourAmount: 24,
        priceFewDays: 4000,
      },
    ],
  },
  {
    id: 1566,
    point: {
      lat: 53.546194,
      lon: 49.335538,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3500,
      },
      {
        code: 'per_3h',
        title: '2800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2800,
      },
      {
        code: 'sum',
        title: '3500 ₽',
        hourAmount: 24,
        priceFewDays: 3500,
      },
    ],
  },
  {
    id: 1568,
    point: {
      lat: 53.535952,
      lon: 49.35558,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3500,
      },
      {
        code: 'per_3h',
        title: '2800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2800,
      },
      {
        code: 'sum',
        title: '3500 ₽',
        hourAmount: 24,
        priceFewDays: 3500,
      },
    ],
  },
  {
    id: 1569,
    point: {
      lat: 53.528491,
      lon: 49.337497,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1570,
    point: {
      lat: 53.543834,
      lon: 49.350352,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1571,
    point: {
      lat: 53.545782,
      lon: 49.345797,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1572,
    point: {
      lat: 53.526693,
      lon: 49.340793,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6000,
      },
      {
        code: 'per_3h',
        title: '4800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4800,
      },
      {
        code: 'sum',
        title: '6000 ₽',
        hourAmount: 24,
        priceFewDays: 6000,
      },
    ],
  },
  {
    id: 1573,
    point: {
      lat: 53.507258,
      lon: 49.249201,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1579,
    point: {
      lat: 45.107273,
      lon: 38.961713,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2360₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2360,
      },
      {
        code: 'per_3h',
        title: '1888₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1888,
      },
      {
        code: 'sum',
        title: '2360 ₽',
        hourAmount: 24,
        priceFewDays: 2360,
      },
    ],
  },
  {
    id: 1580,
    point: {
      lat: 45.10455,
      lon: 38.955101,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2478₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2478,
      },
      {
        code: 'per_3h',
        title: '1982₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1982,
      },
      {
        code: 'sum',
        title: '2478 ₽',
        hourAmount: 24,
        priceFewDays: 2478,
      },
    ],
  },
  {
    id: 1581,
    point: {
      lat: 48.766629,
      lon: 44.487852,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1583,
    point: {
      lat: 53.336984,
      lon: 83.762196,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2817₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2817,
      },
      {
        code: 'per_3h',
        title: '2254₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2254,
      },
      {
        code: 'sum',
        title: '2817 ₽',
        hourAmount: 24,
        priceFewDays: 2817,
      },
    ],
  },
  {
    id: 1584,
    point: {
      lat: 53.33944698762117,
      lon: 83.7709928802872,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2127₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2127,
      },
      {
        code: 'per_3h',
        title: '1702₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1702,
      },
      {
        code: 'sum',
        title: '2127 ₽',
        hourAmount: 24,
        priceFewDays: 2127,
      },
    ],
  },
  {
    id: 1585,
    point: {
      lat: 53.334871,
      lon: 83.773344,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2530₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2530,
      },
      {
        code: 'per_3h',
        title: '2024₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2024,
      },
      {
        code: 'sum',
        title: '2530 ₽',
        hourAmount: 24,
        priceFewDays: 2530,
      },
    ],
  },
  {
    id: 1586,
    point: {
      lat: 53.332916837958756,
      lon: 83.77187511904901,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2185₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2185,
      },
      {
        code: 'per_3h',
        title: '1748₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1748,
      },
      {
        code: 'sum',
        title: '2185 ₽',
        hourAmount: 24,
        priceFewDays: 2185,
      },
    ],
  },
  {
    id: 1588,
    point: {
      lat: 53.340179818995296,
      lon: 83.76911767546842,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2185₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2185,
      },
      {
        code: 'per_3h',
        title: '1748₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1748,
      },
      {
        code: 'sum',
        title: '2185 ₽',
        hourAmount: 24,
        priceFewDays: 2185,
      },
    ],
  },
  {
    id: 1589,
    point: {
      lat: 53.332788392222405,
      lon: 83.7716390846557,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2185₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2185,
      },
      {
        code: 'per_3h',
        title: '1748₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1748,
      },
      {
        code: 'sum',
        title: '2185 ₽',
        hourAmount: 24,
        priceFewDays: 2185,
      },
    ],
  },
  {
    id: 1590,
    point: {
      lat: 53.335978,
      lon: 83.763139,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2530₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2530,
      },
      {
        code: 'per_3h',
        title: '2024₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2024,
      },
      {
        code: 'sum',
        title: '2530 ₽',
        hourAmount: 24,
        priceFewDays: 2530,
      },
    ],
  },
  {
    id: 1591,
    point: {
      lat: 53.34009634359543,
      lon: 83.76926787917321,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2472₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2472,
      },
      {
        code: 'per_3h',
        title: '1978₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1978,
      },
      {
        code: 'sum',
        title: '2472 ₽',
        hourAmount: 24,
        priceFewDays: 2472,
      },
    ],
  },
  {
    id: 1592,
    point: {
      lat: 53.337484,
      lon: 83.778545,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2472₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2472,
      },
      {
        code: 'per_3h',
        title: '1978₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1978,
      },
      {
        code: 'sum',
        title: '2472 ₽',
        hourAmount: 24,
        priceFewDays: 2472,
      },
    ],
  },
  {
    id: 1593,
    point: {
      lat: 53.339491936621535,
      lon: 83.77125573677064,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2415₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2415,
      },
      {
        code: 'per_3h',
        title: '1932₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1932,
      },
      {
        code: 'sum',
        title: '2415 ₽',
        hourAmount: 24,
        priceFewDays: 2415,
      },
    ],
  },
  {
    id: 1594,
    point: {
      lat: 53.333666,
      lon: 83.772446,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2415₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2415,
      },
      {
        code: 'per_3h',
        title: '1932₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1932,
      },
      {
        code: 'sum',
        title: '2415 ₽',
        hourAmount: 24,
        priceFewDays: 2415,
      },
    ],
  },
  {
    id: 1595,
    point: {
      lat: 53.340147713091696,
      lon: 83.76939662520594,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2587₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2587,
      },
      {
        code: 'per_3h',
        title: '2070₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2070,
      },
      {
        code: 'sum',
        title: '2587 ₽',
        hourAmount: 24,
        priceFewDays: 2587,
      },
    ],
  },
  {
    id: 1596,
    point: {
      lat: 53.334779,
      lon: 83.780746,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2530₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2530,
      },
      {
        code: 'per_3h',
        title: '2024₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2024,
      },
      {
        code: 'sum',
        title: '2530 ₽',
        hourAmount: 24,
        priceFewDays: 2530,
      },
    ],
  },
  {
    id: 1597,
    point: {
      lat: 53.34023760956056,
      lon: 83.76935370986173,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2127₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2127,
      },
      {
        code: 'per_3h',
        title: '1702₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1702,
      },
      {
        code: 'sum',
        title: '2127 ₽',
        hourAmount: 24,
        priceFewDays: 2127,
      },
    ],
  },
  {
    id: 1598,
    point: {
      lat: 53.33960109828132,
      lon: 83.77104652446745,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2127₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2127,
      },
      {
        code: 'per_3h',
        title: '1702₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1702,
      },
      {
        code: 'sum',
        title: '2127 ₽',
        hourAmount: 24,
        priceFewDays: 2127,
      },
    ],
  },
  {
    id: 1600,
    point: {
      lat: 53.339148396624736,
      lon: 83.7712986521149,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1897₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1897,
      },
      {
        code: 'per_3h',
        title: '1518₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1518,
      },
      {
        code: 'sum',
        title: '1897 ₽',
        hourAmount: 24,
        priceFewDays: 1897,
      },
    ],
  },
  {
    id: 1601,
    point: {
      lat: 56.818671,
      lon: 60.635895,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2863₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2863,
      },
      {
        code: 'per_3h',
        title: '2290₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2290,
      },
      {
        code: 'sum',
        title: '2863 ₽',
        hourAmount: 24,
        priceFewDays: 2863,
      },
    ],
  },
  {
    id: 1602,
    point: {
      lat: 56.823991,
      lon: 60.552244,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1603,
    point: {
      lat: 56.813311056257064,
      lon: 60.58209359325401,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 1604,
    point: {
      lat: 56.842369,
      lon: 60.573714,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2530₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2530,
      },
      {
        code: 'per_3h',
        title: '2024₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2024,
      },
      {
        code: 'sum',
        title: '2530 ₽',
        hourAmount: 24,
        priceFewDays: 2530,
      },
    ],
  },
  {
    id: 1605,
    point: {
      lat: 56.81402505162536,
      lon: 60.5953598042297,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 1607,
    point: {
      lat: 56.80158191800795,
      lon: 60.61137805952446,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1608,
    point: {
      lat: 56.81408389533797,
      lon: 60.5960786362457,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 1609,
    point: {
      lat: 56.828292285664226,
      lon: 60.587332560951914,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 1612,
    point: {
      lat: 56.845775,
      lon: 60.581098,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 1613,
    point: {
      lat: 56.800345,
      lon: 60.597501,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 1614,
    point: {
      lat: 56.824098735079666,
      lon: 60.55332933813796,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1616,
    point: {
      lat: 56.824587,
      lon: 60.625412,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1617,
    point: {
      lat: 56.824328163089795,
      lon: 60.55315231234293,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1618,
    point: {
      lat: 56.82824522862391,
      lon: 60.58698387378,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1619,
    point: {
      lat: 56.805619,
      lon: 60.612863,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1620,
    point: {
      lat: 56.82835993005567,
      lon: 60.587380840714204,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2863₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2863,
      },
      {
        code: 'per_3h',
        title: '2290₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2290,
      },
      {
        code: 'sum',
        title: '2863 ₽',
        hourAmount: 24,
        priceFewDays: 2863,
      },
    ],
  },
  {
    id: 1621,
    point: {
      lat: 56.828333460525805,
      lon: 60.587048246796364,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 1622,
    point: {
      lat: 56.784062,
      lon: 60.653475,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 1625,
    point: {
      lat: 56.817321,
      lon: 60.589426,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2990₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2990,
      },
      {
        code: 'per_3h',
        title: '2392₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2392,
      },
      {
        code: 'sum',
        title: '2990 ₽',
        hourAmount: 24,
        priceFewDays: 2990,
      },
    ],
  },
  {
    id: 1626,
    point: {
      lat: 56.82433449515846,
      lon: 60.54467116247985,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2760,
      },
      {
        code: 'per_3h',
        title: '2208₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2208,
      },
      {
        code: 'sum',
        title: '2760 ₽',
        hourAmount: 24,
        priceFewDays: 2760,
      },
    ],
  },
  {
    id: 1627,
    point: {
      lat: 56.82463562381708,
      lon: 60.54418512698355,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1629,
    point: {
      lat: 52.27198625518246,
      lon: 104.33479077116388,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2863₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2863,
      },
      {
        code: 'per_3h',
        title: '2290₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2290,
      },
      {
        code: 'sum',
        title: '2863 ₽',
        hourAmount: 24,
        priceFewDays: 2863,
      },
    ],
  },
  {
    id: 1630,
    point: {
      lat: 52.28454856547887,
      lon: 104.25453443187713,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 1631,
    point: {
      lat: 52.27170982332185,
      lon: 104.33478004232784,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2794₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2794,
      },
      {
        code: 'per_3h',
        title: '2235₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2235,
      },
      {
        code: 'sum',
        title: '2794 ₽',
        hourAmount: 24,
        priceFewDays: 2794,
      },
    ],
  },
  {
    id: 1632,
    point: {
      lat: 52.28247283125156,
      lon: 104.24529642394255,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3070₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3070,
      },
      {
        code: 'per_3h',
        title: '2456₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2456,
      },
      {
        code: 'sum',
        title: '3070 ₽',
        hourAmount: 24,
        priceFewDays: 3070,
      },
    ],
  },
  {
    id: 1633,
    point: {
      lat: 52.282634044028605,
      lon: 104.24524277976224,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3323₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3323,
      },
      {
        code: 'per_3h',
        title: '2658₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2658,
      },
      {
        code: 'sum',
        title: '3323 ₽',
        hourAmount: 24,
        priceFewDays: 3323,
      },
    ],
  },
  {
    id: 1634,
    point: {
      lat: 52.28243993061239,
      lon: 104.24510866931152,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3093₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3093,
      },
      {
        code: 'per_3h',
        title: '2474₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2474,
      },
      {
        code: 'sum',
        title: '3093 ₽',
        hourAmount: 24,
        priceFewDays: 3093,
      },
    ],
  },
  {
    id: 1635,
    point: {
      lat: 52.272546,
      lon: 104.25548,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4140₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4140,
      },
      {
        code: 'per_3h',
        title: '3312₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3312,
      },
      {
        code: 'sum',
        title: '4140 ₽',
        hourAmount: 24,
        priceFewDays: 4140,
      },
    ],
  },
  {
    id: 1636,
    point: {
      lat: 52.25705985693613,
      lon: 104.32855376322934,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3415₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3415,
      },
      {
        code: 'per_3h',
        title: '2732₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2732,
      },
      {
        code: 'sum',
        title: '3415 ₽',
        hourAmount: 24,
        priceFewDays: 3415,
      },
    ],
  },
  {
    id: 1637,
    point: {
      lat: 52.27199283542038,
      lon: 104.29776793101041,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4485₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4485,
      },
      {
        code: 'per_3h',
        title: '3588₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3588,
      },
      {
        code: 'sum',
        title: '4485 ₽',
        hourAmount: 24,
        priceFewDays: 4485,
      },
    ],
  },
  {
    id: 1638,
    point: {
      lat: 52.266043,
      lon: 104.31794,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3011₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3011,
      },
      {
        code: 'per_3h',
        title: '2409₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2409,
      },
      {
        code: 'sum',
        title: '3011 ₽',
        hourAmount: 24,
        priceFewDays: 3011,
      },
    ],
  },
  {
    id: 1639,
    point: {
      lat: 52.283666,
      lon: 104.277157,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3829₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3829,
      },
      {
        code: 'per_3h',
        title: '3063₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3063,
      },
      {
        code: 'sum',
        title: '3829 ₽',
        hourAmount: 24,
        priceFewDays: 3829,
      },
    ],
  },
  {
    id: 1655,
    point: {
      lat: 52.267283,
      lon: 104.325828,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4025₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4025,
      },
      {
        code: 'per_3h',
        title: '3220₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3220,
      },
      {
        code: 'sum',
        title: '4025 ₽',
        hourAmount: 24,
        priceFewDays: 4025,
      },
    ],
  },
  {
    id: 1656,
    point: {
      lat: 55.159794,
      lon: 61.394864,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2760,
      },
      {
        code: 'per_3h',
        title: '2208₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2208,
      },
      {
        code: 'sum',
        title: '2760 ₽',
        hourAmount: 24,
        priceFewDays: 2760,
      },
    ],
  },
  {
    id: 1657,
    point: {
      lat: 55.156158,
      lon: 61.389699,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2760,
      },
      {
        code: 'per_3h',
        title: '2208₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2208,
      },
      {
        code: 'sum',
        title: '2760 ₽',
        hourAmount: 24,
        priceFewDays: 2760,
      },
    ],
  },
  {
    id: 1658,
    point: {
      lat: 55.17374,
      lon: 61.365085,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1659,
    point: {
      lat: 55.153298,
      lon: 61.383797,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2070₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2070,
      },
      {
        code: 'per_3h',
        title: '1656₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1656,
      },
      {
        code: 'sum',
        title: '2070 ₽',
        hourAmount: 24,
        priceFewDays: 2070,
      },
    ],
  },
  {
    id: 1660,
    point: {
      lat: 56.82450275501284,
      lon: 60.60667586656569,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3086₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3086,
      },
      {
        code: 'per_3h',
        title: '2469₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2469,
      },
      {
        code: 'sum',
        title: '3086 ₽',
        hourAmount: 24,
        priceFewDays: 3086,
      },
    ],
  },
  {
    id: 1661,
    point: {
      lat: 56.816075,
      lon: 60.593558,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3538₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3538,
      },
      {
        code: 'per_3h',
        title: '2830₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2830,
      },
      {
        code: 'sum',
        title: '3538 ₽',
        hourAmount: 24,
        priceFewDays: 3538,
      },
    ],
  },
  {
    id: 1662,
    point: {
      lat: 56.82478460583703,
      lon: 60.60654806745904,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3416₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3416,
      },
      {
        code: 'per_3h',
        title: '2733₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2733,
      },
      {
        code: 'sum',
        title: '3416 ₽',
        hourAmount: 24,
        priceFewDays: 3416,
      },
    ],
  },
  {
    id: 1663,
    point: {
      lat: 56.824899317909576,
      lon: 60.6064890588607,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3062₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3062,
      },
      {
        code: 'per_3h',
        title: '2450₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2450,
      },
      {
        code: 'sum',
        title: '3062 ₽',
        hourAmount: 24,
        priceFewDays: 3062,
      },
    ],
  },
  {
    id: 1664,
    point: {
      lat: 56.82442333815603,
      lon: 60.606858256778736,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2891₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2891,
      },
      {
        code: 'per_3h',
        title: '2313₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2313,
      },
      {
        code: 'sum',
        title: '2891 ₽',
        hourAmount: 24,
        priceFewDays: 2891,
      },
    ],
  },
  {
    id: 1665,
    point: {
      lat: 56.82486990459126,
      lon: 60.60672509325401,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3233₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3233,
      },
      {
        code: 'per_3h',
        title: '2586₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2586,
      },
      {
        code: 'sum',
        title: '3233 ₽',
        hourAmount: 24,
        priceFewDays: 3233,
      },
    ],
  },
  {
    id: 1666,
    point: {
      lat: 56.833432051502875,
      lon: 60.598741261901814,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3001₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3001,
      },
      {
        code: 'per_3h',
        title: '2401₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2401,
      },
      {
        code: 'sum',
        title: '3001 ₽',
        hourAmount: 24,
        priceFewDays: 3001,
      },
    ],
  },
  {
    id: 1667,
    point: {
      lat: 56.833506,
      lon: 60.599127,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3037₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3037,
      },
      {
        code: 'per_3h',
        title: '2430₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2430,
      },
      {
        code: 'sum',
        title: '3037 ₽',
        hourAmount: 24,
        priceFewDays: 3037,
      },
    ],
  },
  {
    id: 1668,
    point: {
      lat: 56.78166828115364,
      lon: 60.54720530555723,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2562₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2562,
      },
      {
        code: 'per_3h',
        title: '2050₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2050,
      },
      {
        code: 'sum',
        title: '2562 ₽',
        hourAmount: 24,
        priceFewDays: 2562,
      },
    ],
  },
  {
    id: 1669,
    point: {
      lat: 56.781850854475955,
      lon: 60.546819067459126,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2196₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2196,
      },
      {
        code: 'per_3h',
        title: '1757₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1757,
      },
      {
        code: 'sum',
        title: '2196 ₽',
        hourAmount: 24,
        priceFewDays: 2196,
      },
    ],
  },
  {
    id: 1670,
    point: {
      lat: 56.824614526599,
      lon: 60.60683143468856,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3294₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3294,
      },
      {
        code: 'per_3h',
        title: '2635₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2635,
      },
      {
        code: 'sum',
        title: '3294 ₽',
        hourAmount: 24,
        priceFewDays: 3294,
      },
    ],
  },
  {
    id: 1671,
    point: {
      lat: 56.82464636261428,
      lon: 60.60663926256554,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3172₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3172,
      },
      {
        code: 'per_3h',
        title: '2538₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2538,
      },
      {
        code: 'sum',
        title: '3172 ₽',
        hourAmount: 24,
        priceFewDays: 3172,
      },
    ],
  },
  {
    id: 1685,
    point: {
      lat: 55.175154,
      lon: 61.323322,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2070₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2070,
      },
      {
        code: 'per_3h',
        title: '1656₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1656,
      },
      {
        code: 'sum',
        title: '2070 ₽',
        hourAmount: 24,
        priceFewDays: 2070,
      },
    ],
  },
  {
    id: 1686,
    point: {
      lat: 55.216807,
      lon: 61.293866,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2070₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2070,
      },
      {
        code: 'per_3h',
        title: '1656₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1656,
      },
      {
        code: 'sum',
        title: '2070 ₽',
        hourAmount: 24,
        priceFewDays: 2070,
      },
    ],
  },
  {
    id: 1687,
    point: {
      lat: 55.176691,
      lon: 61.257754,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2070₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2070,
      },
      {
        code: 'per_3h',
        title: '1656₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1656,
      },
      {
        code: 'sum',
        title: '2070 ₽',
        hourAmount: 24,
        priceFewDays: 2070,
      },
    ],
  },
  {
    id: 1688,
    point: {
      lat: 55.173437,
      lon: 61.321759,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2070₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2070,
      },
      {
        code: 'per_3h',
        title: '1656₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1656,
      },
      {
        code: 'sum',
        title: '2070 ₽',
        hourAmount: 24,
        priceFewDays: 2070,
      },
    ],
  },
  {
    id: 1689,
    point: {
      lat: 55.176116,
      lon: 61.408276,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2070₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2070,
      },
      {
        code: 'per_3h',
        title: '1656₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1656,
      },
      {
        code: 'sum',
        title: '2070 ₽',
        hourAmount: 24,
        priceFewDays: 2070,
      },
    ],
  },
  {
    id: 1690,
    point: {
      lat: 55.76287,
      lon: 37.565398,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '7200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 7200,
      },
      {
        code: 'per_3h',
        title: '5760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5760,
      },
      {
        code: 'sum',
        title: '7200 ₽',
        hourAmount: 24,
        priceFewDays: 7200,
      },
    ],
  },
  {
    id: 1691,
    point: {
      lat: 56.14729588193852,
      lon: 40.42032505510763,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1760,
      },
      {
        code: 'per_3h',
        title: '1408₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1408,
      },
      {
        code: 'sum',
        title: '1760 ₽',
        hourAmount: 24,
        priceFewDays: 1760,
      },
    ],
  },
  {
    id: 1692,
    point: {
      lat: 56.137315,
      lon: 40.400652,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2970₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2970,
      },
      {
        code: 'per_3h',
        title: '2376₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2376,
      },
      {
        code: 'sum',
        title: '2970 ₽',
        hourAmount: 24,
        priceFewDays: 2970,
      },
    ],
  },
  {
    id: 1693,
    point: {
      lat: 56.119047,
      lon: 40.360398,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4620₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4620,
      },
      {
        code: 'per_3h',
        title: '3696₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3696,
      },
      {
        code: 'sum',
        title: '4620 ₽',
        hourAmount: 24,
        priceFewDays: 4620,
      },
    ],
  },
  {
    id: 1694,
    point: {
      lat: 56.137796,
      lon: 40.373289,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3850₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3850,
      },
      {
        code: 'per_3h',
        title: '3080₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3080,
      },
      {
        code: 'sum',
        title: '3850 ₽',
        hourAmount: 24,
        priceFewDays: 3850,
      },
    ],
  },
  {
    id: 1695,
    point: {
      lat: 56.136111,
      lon: 40.426434,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3289₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3289,
      },
      {
        code: 'per_3h',
        title: '2631₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2631,
      },
      {
        code: 'sum',
        title: '3289 ₽',
        hourAmount: 24,
        priceFewDays: 3289,
      },
    ],
  },
  {
    id: 1696,
    point: {
      lat: 56.128957,
      lon: 40.388848,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2750₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2750,
      },
      {
        code: 'per_3h',
        title: '2200₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2200,
      },
      {
        code: 'sum',
        title: '2750 ₽',
        hourAmount: 24,
        priceFewDays: 2750,
      },
    ],
  },
  {
    id: 1697,
    point: {
      lat: 56.138744,
      lon: 40.374915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3190₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3190,
      },
      {
        code: 'per_3h',
        title: '2552₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2552,
      },
      {
        code: 'sum',
        title: '3190 ₽',
        hourAmount: 24,
        priceFewDays: 3190,
      },
    ],
  },
  {
    id: 1698,
    point: {
      lat: 56.14715023997593,
      lon: 40.419731550262405,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1650₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1650,
      },
      {
        code: 'per_3h',
        title: '1320₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1320,
      },
      {
        code: 'sum',
        title: '1650 ₽',
        hourAmount: 24,
        priceFewDays: 1650,
      },
    ],
  },
  {
    id: 1699,
    point: {
      lat: 56.136652,
      lon: 40.425616,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2310₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2310,
      },
      {
        code: 'per_3h',
        title: '1848₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1848,
      },
      {
        code: 'sum',
        title: '2310 ₽',
        hourAmount: 24,
        priceFewDays: 2310,
      },
    ],
  },
  {
    id: 1700,
    point: {
      lat: 56.138298,
      lon: 40.413848,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2420₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2420,
      },
      {
        code: 'per_3h',
        title: '1936₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1936,
      },
      {
        code: 'sum',
        title: '2420 ₽',
        hourAmount: 24,
        priceFewDays: 2420,
      },
    ],
  },
  {
    id: 1701,
    point: {
      lat: 56.14723000175719,
      lon: 40.41997100351769,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2090₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2090,
      },
      {
        code: 'per_3h',
        title: '1672₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1672,
      },
      {
        code: 'sum',
        title: '2090 ₽',
        hourAmount: 24,
        priceFewDays: 2090,
      },
    ],
  },
  {
    id: 1702,
    point: {
      lat: 56.106765,
      lon: 40.358889,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1529₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1529,
      },
      {
        code: 'per_3h',
        title: '1223₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1223,
      },
      {
        code: 'sum',
        title: '1529 ₽',
        hourAmount: 24,
        priceFewDays: 1529,
      },
    ],
  },
  {
    id: 1703,
    point: {
      lat: 56.127502,
      lon: 40.399286,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4400,
      },
      {
        code: 'per_3h',
        title: '3520₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3520,
      },
      {
        code: 'sum',
        title: '4400 ₽',
        hourAmount: 24,
        priceFewDays: 4400,
      },
    ],
  },
  {
    id: 1716,
    point: {
      lat: 59.933613,
      lon: 30.367369,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4588₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4588,
      },
      {
        code: 'per_3h',
        title: '3670₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3670,
      },
      {
        code: 'sum',
        title: '4588 ₽',
        hourAmount: 24,
        priceFewDays: 4588,
      },
    ],
  },
  {
    id: 1717,
    point: {
      lat: 59.93243952393968,
      lon: 30.352260279098406,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 1718,
    point: {
      lat: 59.94234829557126,
      lon: 30.34815501469974,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4013₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4013,
      },
      {
        code: 'per_3h',
        title: '3210₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3210,
      },
      {
        code: 'sum',
        title: '4013 ₽',
        hourAmount: 24,
        priceFewDays: 4013,
      },
    ],
  },
  {
    id: 1719,
    point: {
      lat: 59.93236952583134,
      lon: 30.352544593253985,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 1720,
    point: {
      lat: 59.938802,
      lon: 30.319973,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5163₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5163,
      },
      {
        code: 'per_3h',
        title: '4130₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4130,
      },
      {
        code: 'sum',
        title: '5163 ₽',
        hourAmount: 24,
        priceFewDays: 5163,
      },
    ],
  },
  {
    id: 1721,
    point: {
      lat: 59.931150951847684,
      lon: 30.35833351454158,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5738₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5738,
      },
      {
        code: 'per_3h',
        title: '4590₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4590,
      },
      {
        code: 'sum',
        title: '5738 ₽',
        hourAmount: 24,
        priceFewDays: 5738,
      },
    ],
  },
  {
    id: 1722,
    point: {
      lat: 59.94257245170403,
      lon: 30.34817877116392,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5163₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5163,
      },
      {
        code: 'per_3h',
        title: '4130₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4130,
      },
      {
        code: 'sum',
        title: '5163 ₽',
        hourAmount: 24,
        priceFewDays: 5163,
      },
    ],
  },
  {
    id: 1723,
    point: {
      lat: 59.931567,
      lon: 30.369866,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5738₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5738,
      },
      {
        code: 'per_3h',
        title: '4590₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4590,
      },
      {
        code: 'sum',
        title: '5738 ₽',
        hourAmount: 24,
        priceFewDays: 5738,
      },
    ],
  },
  {
    id: 1724,
    point: {
      lat: 59.936557,
      lon: 30.318258,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4588₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4588,
      },
      {
        code: 'per_3h',
        title: '3670₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3670,
      },
      {
        code: 'sum',
        title: '4588 ₽',
        hourAmount: 24,
        priceFewDays: 4588,
      },
    ],
  },
  {
    id: 1725,
    point: {
      lat: 59.94414591203916,
      lon: 30.383016373636842,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5163₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5163,
      },
      {
        code: 'per_3h',
        title: '4130₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4130,
      },
      {
        code: 'sum',
        title: '5163 ₽',
        hourAmount: 24,
        priceFewDays: 5163,
      },
    ],
  },
  {
    id: 1726,
    point: {
      lat: 59.920645,
      lon: 30.371968,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4588₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4588,
      },
      {
        code: 'per_3h',
        title: '3670₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3670,
      },
      {
        code: 'sum',
        title: '4588 ₽',
        hourAmount: 24,
        priceFewDays: 4588,
      },
    ],
  },
  {
    id: 1727,
    point: {
      lat: 59.942962,
      lon: 30.347264,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5163₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5163,
      },
      {
        code: 'per_3h',
        title: '4130₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4130,
      },
      {
        code: 'sum',
        title: '5163 ₽',
        hourAmount: 24,
        priceFewDays: 5163,
      },
    ],
  },
  {
    id: 1728,
    point: {
      lat: 59.943242,
      lon: 30.359984,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4588₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4588,
      },
      {
        code: 'per_3h',
        title: '3670₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3670,
      },
      {
        code: 'sum',
        title: '4588 ₽',
        hourAmount: 24,
        priceFewDays: 4588,
      },
    ],
  },
  {
    id: 1729,
    point: {
      lat: 59.926298463563064,
      lon: 30.31924674536891,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5163₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5163,
      },
      {
        code: 'per_3h',
        title: '4130₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4130,
      },
      {
        code: 'sum',
        title: '5163 ₽',
        hourAmount: 24,
        priceFewDays: 5163,
      },
    ],
  },
  {
    id: 1730,
    point: {
      lat: 59.944323483502444,
      lon: 30.38292275769758,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4013₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4013,
      },
      {
        code: 'per_3h',
        title: '3210₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3210,
      },
      {
        code: 'sum',
        title: '4013 ₽',
        hourAmount: 24,
        priceFewDays: 4013,
      },
    ],
  },
  {
    id: 1731,
    point: {
      lat: 59.9363,
      lon: 30.316766,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4013₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4013,
      },
      {
        code: 'per_3h',
        title: '3210₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3210,
      },
      {
        code: 'sum',
        title: '4013 ₽',
        hourAmount: 24,
        priceFewDays: 4013,
      },
    ],
  },
  {
    id: 1732,
    point: {
      lat: 59.934565,
      lon: 30.362113,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5163₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5163,
      },
      {
        code: 'per_3h',
        title: '4130₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4130,
      },
      {
        code: 'sum',
        title: '5163 ₽',
        hourAmount: 24,
        priceFewDays: 5163,
      },
    ],
  },
  {
    id: 1733,
    point: {
      lat: 59.945909,
      lon: 30.347013,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5163₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5163,
      },
      {
        code: 'per_3h',
        title: '4130₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4130,
      },
      {
        code: 'sum',
        title: '5163 ₽',
        hourAmount: 24,
        priceFewDays: 5163,
      },
    ],
  },
  {
    id: 1734,
    point: {
      lat: 59.93183574228694,
      lon: 30.322817638393623,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4588₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4588,
      },
      {
        code: 'per_3h',
        title: '3670₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3670,
      },
      {
        code: 'sum',
        title: '4588 ₽',
        hourAmount: 24,
        priceFewDays: 4588,
      },
    ],
  },
  {
    id: 1735,
    point: {
      lat: 59.92620421780197,
      lon: 30.319531059524486,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5163₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5163,
      },
      {
        code: 'per_3h',
        title: '4130₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4130,
      },
      {
        code: 'sum',
        title: '5163 ₽',
        hourAmount: 24,
        priceFewDays: 5163,
      },
    ],
  },
  {
    id: 1736,
    point: {
      lat: 59.939081,
      lon: 30.360883,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5738₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5738,
      },
      {
        code: 'per_3h',
        title: '4590₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4590,
      },
      {
        code: 'sum',
        title: '5738 ₽',
        hourAmount: 24,
        priceFewDays: 5738,
      },
    ],
  },
  {
    id: 1737,
    point: {
      lat: 59.943683,
      lon: 30.363371,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4013₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4013,
      },
      {
        code: 'per_3h',
        title: '3210₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3210,
      },
      {
        code: 'sum',
        title: '4013 ₽',
        hourAmount: 24,
        priceFewDays: 4013,
      },
    ],
  },
  {
    id: 1738,
    point: {
      lat: 59.925367,
      lon: 30.318042,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5738₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5738,
      },
      {
        code: 'per_3h',
        title: '4590₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4590,
      },
      {
        code: 'sum',
        title: '5738 ₽',
        hourAmount: 24,
        priceFewDays: 5738,
      },
    ],
  },
  {
    id: 1739,
    point: {
      lat: 59.92607478835919,
      lon: 30.31973399062038,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5163₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5163,
      },
      {
        code: 'per_3h',
        title: '4130₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4130,
      },
      {
        code: 'sum',
        title: '5163 ₽',
        hourAmount: 24,
        priceFewDays: 5163,
      },
    ],
  },
  {
    id: 1740,
    point: {
      lat: 59.93470622848936,
      lon: 30.36293431349177,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4588₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4588,
      },
      {
        code: 'per_3h',
        title: '3670₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3670,
      },
      {
        code: 'sum',
        title: '4588 ₽',
        hourAmount: 24,
        priceFewDays: 4588,
      },
    ],
  },
  {
    id: 1741,
    point: {
      lat: 59.926246,
      lon: 30.366488,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 1742,
    point: {
      lat: 59.9348192942904,
      lon: 30.363041601852352,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 1743,
    point: {
      lat: 59.93492697564609,
      lon: 30.363116703704772,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 1744,
    point: {
      lat: 59.9369,
      lon: 30.35322,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5163₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5163,
      },
      {
        code: 'per_3h',
        title: '4130₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4130,
      },
      {
        code: 'sum',
        title: '5163 ₽',
        hourAmount: 24,
        priceFewDays: 5163,
      },
    ],
  },
  {
    id: 1746,
    point: {
      lat: 59.930498,
      lon: 30.373441,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 1747,
    point: {
      lat: 59.946202,
      lon: 30.365087,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4588₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4588,
      },
      {
        code: 'per_3h',
        title: '3670₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3670,
      },
      {
        code: 'sum',
        title: '4588 ₽',
        hourAmount: 24,
        priceFewDays: 4588,
      },
    ],
  },
  {
    id: 1748,
    point: {
      lat: 56.82653053949952,
      lon: 35.920477914016665,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 1749,
    point: {
      lat: 56.824749,
      lon: 35.867214,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2200,
      },
      {
        code: 'per_3h',
        title: '1760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1760,
      },
      {
        code: 'sum',
        title: '2200 ₽',
        hourAmount: 24,
        priceFewDays: 2200,
      },
    ],
  },
  {
    id: 1750,
    point: {
      lat: 56.86150823746897,
      lon: 35.879958703704794,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2200,
      },
      {
        code: 'per_3h',
        title: '1760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1760,
      },
      {
        code: 'sum',
        title: '2200 ₽',
        hourAmount: 24,
        priceFewDays: 2200,
      },
    ],
  },
  {
    id: 1751,
    point: {
      lat: 56.823262,
      lon: 35.864142,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2200,
      },
      {
        code: 'per_3h',
        title: '1760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1760,
      },
      {
        code: 'sum',
        title: '2200 ₽',
        hourAmount: 24,
        priceFewDays: 2200,
      },
    ],
  },
  {
    id: 1752,
    point: {
      lat: 56.844609,
      lon: 35.910863,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1800,
      },
      {
        code: 'per_3h',
        title: '1440₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1440,
      },
      {
        code: 'sum',
        title: '1800 ₽',
        hourAmount: 24,
        priceFewDays: 1800,
      },
    ],
  },
  {
    id: 1753,
    point: {
      lat: 56.860487,
      lon: 35.920197,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2000,
      },
      {
        code: 'per_3h',
        title: '1600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1600,
      },
      {
        code: 'sum',
        title: '2000 ₽',
        hourAmount: 24,
        priceFewDays: 2000,
      },
    ],
  },
  {
    id: 1756,
    point: {
      lat: 56.82667171693147,
      lon: 35.92074077050014,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2000,
      },
      {
        code: 'per_3h',
        title: '1600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1600,
      },
      {
        code: 'sum',
        title: '2000 ₽',
        hourAmount: 24,
        priceFewDays: 2000,
      },
    ],
  },
  {
    id: 1757,
    point: {
      lat: 56.8442,
      lon: 35.927329,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1700,
      },
      {
        code: 'per_3h',
        title: '1360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1360,
      },
      {
        code: 'sum',
        title: '1700 ₽',
        hourAmount: 24,
        priceFewDays: 1700,
      },
    ],
  },
  {
    id: 1758,
    point: {
      lat: 56.873529,
      lon: 35.907494,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1700,
      },
      {
        code: 'per_3h',
        title: '1360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1360,
      },
      {
        code: 'sum',
        title: '1700 ₽',
        hourAmount: 24,
        priceFewDays: 1700,
      },
    ],
  },
  {
    id: 1759,
    point: {
      lat: 56.861476,
      lon: 35.914205,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2200,
      },
      {
        code: 'per_3h',
        title: '1760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1760,
      },
      {
        code: 'sum',
        title: '2200 ₽',
        hourAmount: 24,
        priceFewDays: 2200,
      },
    ],
  },
  {
    id: 1760,
    point: {
      lat: 56.830635,
      lon: 35.942178,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2000,
      },
      {
        code: 'per_3h',
        title: '1600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1600,
      },
      {
        code: 'sum',
        title: '2000 ₽',
        hourAmount: 24,
        priceFewDays: 2000,
      },
    ],
  },
  {
    id: 1761,
    point: {
      lat: 56.861702174257,
      lon: 35.87967975396724,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2500,
      },
      {
        code: 'per_3h',
        title: '2000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2000,
      },
      {
        code: 'sum',
        title: '2500 ₽',
        hourAmount: 24,
        priceFewDays: 2500,
      },
    ],
  },
  {
    id: 1763,
    point: {
      lat: 56.88282,
      lon: 35.854709,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1700,
      },
      {
        code: 'per_3h',
        title: '1360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1360,
      },
      {
        code: 'sum',
        title: '1700 ₽',
        hourAmount: 24,
        priceFewDays: 1700,
      },
    ],
  },
  {
    id: 1765,
    point: {
      lat: 56.813123,
      lon: 35.886097,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1766,
    point: {
      lat: 56.871965,
      lon: 35.901835,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2200,
      },
      {
        code: 'per_3h',
        title: '1760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1760,
      },
      {
        code: 'sum',
        title: '2200 ₽',
        hourAmount: 24,
        priceFewDays: 2200,
      },
    ],
  },
  {
    id: 1767,
    point: {
      lat: 56.826586422296884,
      lon: 35.920762228172244,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2200,
      },
      {
        code: 'per_3h',
        title: '1760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1760,
      },
      {
        code: 'sum',
        title: '2200 ₽',
        hourAmount: 24,
        priceFewDays: 2200,
      },
    ],
  },
  {
    id: 1768,
    point: {
      lat: 55.239881,
      lon: 61.382952,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1984₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1984,
      },
      {
        code: 'per_3h',
        title: '1587₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1587,
      },
      {
        code: 'sum',
        title: '1984 ₽',
        hourAmount: 24,
        priceFewDays: 1984,
      },
    ],
  },
  {
    id: 1769,
    point: {
      lat: 55.157284,
      lon: 61.380949,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2182₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2182,
      },
      {
        code: 'per_3h',
        title: '1746₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1746,
      },
      {
        code: 'sum',
        title: '2182 ₽',
        hourAmount: 24,
        priceFewDays: 2182,
      },
    ],
  },
  {
    id: 1770,
    point: {
      lat: 55.171992,
      lon: 61.364375,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3100₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3100,
      },
      {
        code: 'per_3h',
        title: '2480₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2480,
      },
      {
        code: 'sum',
        title: '3100 ₽',
        hourAmount: 24,
        priceFewDays: 3100,
      },
    ],
  },
  {
    id: 1771,
    point: {
      lat: 55.241396,
      lon: 61.374885,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1984₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1984,
      },
      {
        code: 'per_3h',
        title: '1587₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1587,
      },
      {
        code: 'sum',
        title: '1984 ₽',
        hourAmount: 24,
        priceFewDays: 1984,
      },
    ],
  },
  {
    id: 1772,
    point: {
      lat: 55.162211,
      lon: 61.384974,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2106₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2106,
      },
      {
        code: 'per_3h',
        title: '1685₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1685,
      },
      {
        code: 'sum',
        title: '2106 ₽',
        hourAmount: 24,
        priceFewDays: 2106,
      },
    ],
  },
  {
    id: 1773,
    point: {
      lat: 55.162551,
      lon: 61.384057,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2294₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2294,
      },
      {
        code: 'per_3h',
        title: '1835₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1835,
      },
      {
        code: 'sum',
        title: '2294 ₽',
        hourAmount: 24,
        priceFewDays: 2294,
      },
    ],
  },
  {
    id: 1835,
    point: {
      lat: 55.988349,
      lon: 92.864483,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 1836,
    point: {
      lat: 55.988392596308785,
      lon: 92.86618463558194,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2530₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2530,
      },
      {
        code: 'per_3h',
        title: '2024₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2024,
      },
      {
        code: 'sum',
        title: '2530 ₽',
        hourAmount: 24,
        priceFewDays: 2530,
      },
    ],
  },
  {
    id: 1837,
    point: {
      lat: 55.987991,
      lon: 92.861043,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2530₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2530,
      },
      {
        code: 'per_3h',
        title: '2024₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2024,
      },
      {
        code: 'sum',
        title: '2530 ₽',
        hourAmount: 24,
        priceFewDays: 2530,
      },
    ],
  },
  {
    id: 1838,
    point: {
      lat: 55.98796560380146,
      lon: 92.866195364418,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 1839,
    point: {
      lat: 59.881372294811655,
      lon: 30.264383237434366,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2655₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2655,
      },
      {
        code: 'per_3h',
        title: '2124₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2124,
      },
      {
        code: 'sum',
        title: '2655 ₽',
        hourAmount: 24,
        priceFewDays: 2655,
      },
    ],
  },
  {
    id: 1840,
    point: {
      lat: 59.88132645615136,
      lon: 30.264646093917836,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2581₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2581,
      },
      {
        code: 'per_3h',
        title: '2065₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2065,
      },
      {
        code: 'sum',
        title: '2581 ₽',
        hourAmount: 24,
        priceFewDays: 2581,
      },
    ],
  },
  {
    id: 1841,
    point: {
      lat: 56.8265158334863,
      lon: 35.920772957008296,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2000,
      },
      {
        code: 'per_3h',
        title: '1600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1600,
      },
      {
        code: 'sum',
        title: '2000 ₽',
        hourAmount: 24,
        priceFewDays: 2000,
      },
    ],
  },
  {
    id: 1842,
    point: {
      lat: 56.82641877365366,
      lon: 35.92074613491817,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2000,
      },
      {
        code: 'per_3h',
        title: '1600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1600,
      },
      {
        code: 'sum',
        title: '2000 ₽',
        hourAmount: 24,
        priceFewDays: 2000,
      },
    ],
  },
  {
    id: 1846,
    point: {
      lat: 48.715711,
      lon: 44.501847,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1847,
    point: {
      lat: 48.766528,
      lon: 44.488292,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 1862,
    point: {
      lat: 56.837622,
      lon: 35.931659,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2596₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2596,
      },
      {
        code: 'per_3h',
        title: '2077₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2077,
      },
      {
        code: 'sum',
        title: '2596 ₽',
        hourAmount: 24,
        priceFewDays: 2596,
      },
    ],
  },
  {
    id: 1863,
    point: {
      lat: 56.858366,
      lon: 35.915391,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2596₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2596,
      },
      {
        code: 'per_3h',
        title: '2077₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2077,
      },
      {
        code: 'sum',
        title: '2596 ₽',
        hourAmount: 24,
        priceFewDays: 2596,
      },
    ],
  },
  {
    id: 1864,
    point: {
      lat: 56.843619,
      lon: 35.89941,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2596₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2596,
      },
      {
        code: 'per_3h',
        title: '2077₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2077,
      },
      {
        code: 'sum',
        title: '2596 ₽',
        hourAmount: 24,
        priceFewDays: 2596,
      },
    ],
  },
  {
    id: 1865,
    point: {
      lat: 56.86159639067958,
      lon: 35.87925060052485,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4720₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4720,
      },
      {
        code: 'per_3h',
        title: '3776₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3776,
      },
      {
        code: 'sum',
        title: '4720 ₽',
        hourAmount: 24,
        priceFewDays: 4720,
      },
    ],
  },
  {
    id: 1866,
    point: {
      lat: 54.76561757891201,
      lon: 56.032597134918156,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2904₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2904,
      },
      {
        code: 'per_3h',
        title: '2323₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2323,
      },
      {
        code: 'sum',
        title: '2904 ₽',
        hourAmount: 24,
        priceFewDays: 2904,
      },
    ],
  },
  {
    id: 1867,
    point: {
      lat: 54.717244484565306,
      lon: 55.98005544047544,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2904₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2904,
      },
      {
        code: 'per_3h',
        title: '2323₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2323,
      },
      {
        code: 'sum',
        title: '2904 ₽',
        hourAmount: 24,
        priceFewDays: 2904,
      },
    ],
  },
  {
    id: 1868,
    point: {
      lat: 54.763696,
      lon: 56.013812,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2574₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2574,
      },
      {
        code: 'per_3h',
        title: '2059₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2059,
      },
      {
        code: 'sum',
        title: '2574 ₽',
        hourAmount: 24,
        priceFewDays: 2574,
      },
    ],
  },
  {
    id: 1869,
    point: {
      lat: 54.738942,
      lon: 56.026864,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2519₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2519,
      },
      {
        code: 'per_3h',
        title: '2015₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2015,
      },
      {
        code: 'sum',
        title: '2519 ₽',
        hourAmount: 24,
        priceFewDays: 2519,
      },
    ],
  },
  {
    id: 1870,
    point: {
      lat: 54.727874,
      lon: 55.987123,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2794₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2794,
      },
      {
        code: 'per_3h',
        title: '2235₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2235,
      },
      {
        code: 'sum',
        title: '2794 ₽',
        hourAmount: 24,
        priceFewDays: 2794,
      },
    ],
  },
  {
    id: 1871,
    point: {
      lat: 54.765629986094595,
      lon: 56.03289754232783,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2464₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2464,
      },
      {
        code: 'per_3h',
        title: '1971₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1971,
      },
      {
        code: 'sum',
        title: '2464 ₽',
        hourAmount: 24,
        priceFewDays: 2464,
      },
    ],
  },
  {
    id: 1872,
    point: {
      lat: 54.76435929866048,
      lon: 56.01385092394257,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2519₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2519,
      },
      {
        code: 'per_3h',
        title: '2015₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2015,
      },
      {
        code: 'sum',
        title: '2519 ₽',
        hourAmount: 24,
        priceFewDays: 2519,
      },
    ],
  },
  {
    id: 1873,
    point: {
      lat: 54.717371,
      lon: 55.987132,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2574₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2574,
      },
      {
        code: 'per_3h',
        title: '2059₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2059,
      },
      {
        code: 'sum',
        title: '2574 ₽',
        hourAmount: 24,
        priceFewDays: 2574,
      },
    ],
  },
  {
    id: 1874,
    point: {
      lat: 54.739435,
      lon: 56.019875,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2684₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2684,
      },
      {
        code: 'per_3h',
        title: '2147₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2147,
      },
      {
        code: 'sum',
        title: '2684 ₽',
        hourAmount: 24,
        priceFewDays: 2684,
      },
    ],
  },
  {
    id: 1875,
    point: {
      lat: 54.76545008157309,
      lon: 56.03295118650815,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2519₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2519,
      },
      {
        code: 'per_3h',
        title: '2015₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2015,
      },
      {
        code: 'sum',
        title: '2519 ₽',
        hourAmount: 24,
        priceFewDays: 2519,
      },
    ],
  },
  {
    id: 1876,
    point: {
      lat: 54.722469328683125,
      lon: 56.014211830688375,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2904₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2904,
      },
      {
        code: 'per_3h',
        title: '2323₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2323,
      },
      {
        code: 'sum',
        title: '2904 ₽',
        hourAmount: 24,
        priceFewDays: 2904,
      },
    ],
  },
  {
    id: 1877,
    point: {
      lat: 54.714167,
      lon: 55.999439,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2574₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2574,
      },
      {
        code: 'per_3h',
        title: '2059₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2059,
      },
      {
        code: 'sum',
        title: '2574 ₽',
        hourAmount: 24,
        priceFewDays: 2574,
      },
    ],
  },
  {
    id: 1878,
    point: {
      lat: 54.71813,
      lon: 55.979828,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2519₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2519,
      },
      {
        code: 'per_3h',
        title: '2015₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2015,
      },
      {
        code: 'sum',
        title: '2519 ₽',
        hourAmount: 24,
        priceFewDays: 2519,
      },
    ],
  },
  {
    id: 1879,
    point: {
      lat: 54.76542526709329,
      lon: 56.033348153442354,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2519₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2519,
      },
      {
        code: 'per_3h',
        title: '2015₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2015,
      },
      {
        code: 'sum',
        title: '2519 ₽',
        hourAmount: 24,
        priceFewDays: 2519,
      },
    ],
  },
  {
    id: 1880,
    point: {
      lat: 54.710568,
      lon: 55.986719,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2684₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2684,
      },
      {
        code: 'per_3h',
        title: '2147₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2147,
      },
      {
        code: 'sum',
        title: '2684 ₽',
        hourAmount: 24,
        priceFewDays: 2684,
      },
    ],
  },
  {
    id: 1881,
    point: {
      lat: 54.76530119446503,
      lon: 56.0335198148193,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2519₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2519,
      },
      {
        code: 'per_3h',
        title: '2015₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2015,
      },
      {
        code: 'sum',
        title: '2519 ₽',
        hourAmount: 24,
        priceFewDays: 2519,
      },
    ],
  },
  {
    id: 1882,
    point: {
      lat: 54.716840765045866,
      lon: 55.980184186508176,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2519₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2519,
      },
      {
        code: 'per_3h',
        title: '2015₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2015,
      },
      {
        code: 'sum',
        title: '2519 ₽',
        hourAmount: 24,
        priceFewDays: 2519,
      },
    ],
  },
  {
    id: 1883,
    point: {
      lat: 54.764176286557976,
      lon: 56.01362025396728,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2904₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2904,
      },
      {
        code: 'per_3h',
        title: '2323₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2323,
      },
      {
        code: 'sum',
        title: '2904 ₽',
        hourAmount: 24,
        priceFewDays: 2904,
      },
    ],
  },
  {
    id: 1884,
    point: {
      lat: 54.714302,
      lon: 55.989944,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2574₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2574,
      },
      {
        code: 'per_3h',
        title: '2059₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2059,
      },
      {
        code: 'sum',
        title: '2574 ₽',
        hourAmount: 24,
        priceFewDays: 2574,
      },
    ],
  },
  {
    id: 1885,
    point: {
      lat: 54.7226370046635,
      lon: 56.014565882278376,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2574₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2574,
      },
      {
        code: 'per_3h',
        title: '2059₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2059,
      },
      {
        code: 'sum',
        title: '2574 ₽',
        hourAmount: 24,
        priceFewDays: 2574,
      },
    ],
  },
  {
    id: 1886,
    point: {
      lat: 54.713538,
      lon: 56.00049,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2574₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2574,
      },
      {
        code: 'per_3h',
        title: '2059₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2059,
      },
      {
        code: 'sum',
        title: '2574 ₽',
        hourAmount: 24,
        priceFewDays: 2574,
      },
    ],
  },
  {
    id: 1887,
    point: {
      lat: 54.748005,
      lon: 56.029793,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2519₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2519,
      },
      {
        code: 'per_3h',
        title: '2015₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2015,
      },
      {
        code: 'sum',
        title: '2519 ₽',
        hourAmount: 24,
        priceFewDays: 2519,
      },
    ],
  },
  {
    id: 1888,
    point: {
      lat: 54.738385,
      lon: 20.546339,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3540₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3540,
      },
      {
        code: 'per_3h',
        title: '2832₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2832,
      },
      {
        code: 'sum',
        title: '3540 ₽',
        hourAmount: 24,
        priceFewDays: 3540,
      },
    ],
  },
  {
    id: 1906,
    point: {
      lat: 46.333945,
      lon: 48.061763,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2090₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2090,
      },
      {
        code: 'per_3h',
        title: '1672₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1672,
      },
      {
        code: 'sum',
        title: '2090 ₽',
        hourAmount: 24,
        priceFewDays: 2090,
      },
    ],
  },
  {
    id: 1908,
    point: {
      lat: 46.37532082892713,
      lon: 48.048252322090114,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2530₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2530,
      },
      {
        code: 'per_3h',
        title: '2024₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2024,
      },
      {
        code: 'sum',
        title: '2530 ₽',
        hourAmount: 24,
        priceFewDays: 2530,
      },
    ],
  },
  {
    id: 1909,
    point: {
      lat: 46.355427,
      lon: 48.088865,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2090₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2090,
      },
      {
        code: 'per_3h',
        title: '1672₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1672,
      },
      {
        code: 'sum',
        title: '2090 ₽',
        hourAmount: 24,
        priceFewDays: 2090,
      },
    ],
  },
  {
    id: 1910,
    point: {
      lat: 46.354755,
      lon: 48.05985,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1760,
      },
      {
        code: 'per_3h',
        title: '1408₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1408,
      },
      {
        code: 'sum',
        title: '1760 ₽',
        hourAmount: 24,
        priceFewDays: 1760,
      },
    ],
  },
  {
    id: 1911,
    point: {
      lat: 46.352143,
      lon: 48.074582,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2640₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2640,
      },
      {
        code: 'per_3h',
        title: '2112₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2112,
      },
      {
        code: 'sum',
        title: '2640 ₽',
        hourAmount: 24,
        priceFewDays: 2640,
      },
    ],
  },
  {
    id: 1912,
    point: {
      lat: 46.375793,
      lon: 48.047534,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2420₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2420,
      },
      {
        code: 'per_3h',
        title: '1936₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1936,
      },
      {
        code: 'sum',
        title: '2420 ₽',
        hourAmount: 24,
        priceFewDays: 2420,
      },
    ],
  },
  {
    id: 1913,
    point: {
      lat: 46.361118,
      lon: 48.04863,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2530₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2530,
      },
      {
        code: 'per_3h',
        title: '2024₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2024,
      },
      {
        code: 'sum',
        title: '2530 ₽',
        hourAmount: 24,
        priceFewDays: 2530,
      },
    ],
  },
  {
    id: 1915,
    point: {
      lat: 46.375213153164,
      lon: 48.04828987301632,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1980₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1980,
      },
      {
        code: 'per_3h',
        title: '1584₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1584,
      },
      {
        code: 'sum',
        title: '1980 ₽',
        hourAmount: 24,
        priceFewDays: 1980,
      },
    ],
  },
  {
    id: 1916,
    point: {
      lat: 46.35465114432206,
      lon: 48.05165372023771,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2420₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2420,
      },
      {
        code: 'per_3h',
        title: '1936₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1936,
      },
      {
        code: 'sum',
        title: '2420 ₽',
        hourAmount: 24,
        priceFewDays: 2420,
      },
    ],
  },
  {
    id: 1917,
    point: {
      lat: 46.37522284450937,
      lon: 48.04734189814748,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1980₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1980,
      },
      {
        code: 'per_3h',
        title: '1584₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1584,
      },
      {
        code: 'sum',
        title: '1980 ₽',
        hourAmount: 24,
        priceFewDays: 1980,
      },
    ],
  },
  {
    id: 1918,
    point: {
      lat: 46.376894,
      lon: 48.048513,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2310₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2310,
      },
      {
        code: 'per_3h',
        title: '1848₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1848,
      },
      {
        code: 'sum',
        title: '2310 ₽',
        hourAmount: 24,
        priceFewDays: 2310,
      },
    ],
  },
  {
    id: 1919,
    point: {
      lat: 46.374866399143094,
      lon: 48.047320440475374,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1980₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1980,
      },
      {
        code: 'per_3h',
        title: '1584₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1584,
      },
      {
        code: 'sum',
        title: '1980 ₽',
        hourAmount: 24,
        priceFewDays: 1980,
      },
    ],
  },
  {
    id: 1921,
    point: {
      lat: 46.37546920044292,
      lon: 48.04878649140162,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2310₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2310,
      },
      {
        code: 'per_3h',
        title: '1848₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1848,
      },
      {
        code: 'sum',
        title: '2310 ₽',
        hourAmount: 24,
        priceFewDays: 2310,
      },
    ],
  },
  {
    id: 1922,
    point: {
      lat: 46.375328108405974,
      lon: 48.04876503372952,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1980₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1980,
      },
      {
        code: 'per_3h',
        title: '1584₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1584,
      },
      {
        code: 'sum',
        title: '1980 ₽',
        hourAmount: 24,
        priceFewDays: 1980,
      },
    ],
  },
  {
    id: 1923,
    point: {
      lat: 46.375628856779095,
      lon: 48.04881867790981,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2310₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2310,
      },
      {
        code: 'per_3h',
        title: '1848₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1848,
      },
      {
        code: 'sum',
        title: '2310 ₽',
        hourAmount: 24,
        priceFewDays: 2310,
      },
    ],
  },
  {
    id: 1924,
    point: {
      lat: 46.375923321075675,
      lon: 48.048399779762235,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2420₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2420,
      },
      {
        code: 'per_3h',
        title: '1936₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1936,
      },
      {
        code: 'sum',
        title: '2420 ₽',
        hourAmount: 24,
        priceFewDays: 2420,
      },
    ],
  },
  {
    id: 1926,
    point: {
      lat: 46.33808103104663,
      lon: 48.00493057539363,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3740₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3740,
      },
      {
        code: 'per_3h',
        title: '2992₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2992,
      },
      {
        code: 'sum',
        title: '3740 ₽',
        hourAmount: 24,
        priceFewDays: 3740,
      },
    ],
  },
  {
    id: 1928,
    point: {
      lat: 46.380813673221994,
      lon: 48.05723394907379,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2310₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2310,
      },
      {
        code: 'per_3h',
        title: '1848₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1848,
      },
      {
        code: 'sum',
        title: '2310 ₽',
        hourAmount: 24,
        priceFewDays: 2310,
      },
    ],
  },
  {
    id: 1929,
    point: {
      lat: 46.37470302756768,
      lon: 48.04772813624564,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2530₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2530,
      },
      {
        code: 'per_3h',
        title: '2024₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2024,
      },
      {
        code: 'sum',
        title: '2530 ₽',
        hourAmount: 24,
        priceFewDays: 2530,
      },
    ],
  },
  {
    id: 1930,
    point: {
      lat: 46.33738,
      lon: 48.006319,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2750₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2750,
      },
      {
        code: 'per_3h',
        title: '2200₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2200,
      },
      {
        code: 'sum',
        title: '2750 ₽',
        hourAmount: 24,
        priceFewDays: 2750,
      },
    ],
  },
  {
    id: 1931,
    point: {
      lat: 46.356528,
      lon: 48.080233,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2200,
      },
      {
        code: 'per_3h',
        title: '1760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1760,
      },
      {
        code: 'sum',
        title: '2200 ₽',
        hourAmount: 24,
        priceFewDays: 2200,
      },
    ],
  },
  {
    id: 1932,
    point: {
      lat: 46.37466887498115,
      lon: 48.04871050000002,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2310₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2310,
      },
      {
        code: 'per_3h',
        title: '1848₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1848,
      },
      {
        code: 'sum',
        title: '2310 ₽',
        hourAmount: 24,
        priceFewDays: 2310,
      },
    ],
  },
  {
    id: 1934,
    point: {
      lat: 46.364663,
      lon: 48.066228,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2310₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2310,
      },
      {
        code: 'per_3h',
        title: '1848₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1848,
      },
      {
        code: 'sum',
        title: '2310 ₽',
        hourAmount: 24,
        priceFewDays: 2310,
      },
    ],
  },
  {
    id: 1935,
    point: {
      lat: 46.354684573621775,
      lon: 48.051884390212976,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2420₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2420,
      },
      {
        code: 'per_3h',
        title: '1936₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1936,
      },
      {
        code: 'sum',
        title: '2420 ₽',
        hourAmount: 24,
        priceFewDays: 2420,
      },
    ],
  },
  {
    id: 1936,
    point: {
      lat: 46.37481368172071,
      lon: 48.04878023743441,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2530₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2530,
      },
      {
        code: 'per_3h',
        title: '2024₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2024,
      },
      {
        code: 'sum',
        title: '2530 ₽',
        hourAmount: 24,
        priceFewDays: 2530,
      },
    ],
  },
  {
    id: 1937,
    point: {
      lat: 46.37581007523723,
      lon: 48.048826945879966,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2310₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2310,
      },
      {
        code: 'per_3h',
        title: '1848₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1848,
      },
      {
        code: 'sum',
        title: '2310 ₽',
        hourAmount: 24,
        priceFewDays: 2310,
      },
    ],
  },
  {
    id: 1938,
    point: {
      lat: 46.33799185894766,
      lon: 48.005263169311476,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2310₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2310,
      },
      {
        code: 'per_3h',
        title: '1848₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1848,
      },
      {
        code: 'sum',
        title: '2310 ₽',
        hourAmount: 24,
        priceFewDays: 2310,
      },
    ],
  },
  {
    id: 1939,
    point: {
      lat: 46.38114037908412,
      lon: 48.05729295767213,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1980₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1980,
      },
      {
        code: 'per_3h',
        title: '1584₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1584,
      },
      {
        code: 'sum',
        title: '1980 ₽',
        hourAmount: 24,
        priceFewDays: 1980,
      },
    ],
  },
  {
    id: 1940,
    point: {
      lat: 46.375036460565454,
      lon: 48.04879633068849,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2310₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2310,
      },
      {
        code: 'per_3h',
        title: '1848₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1848,
      },
      {
        code: 'sum',
        title: '2310 ₽',
        hourAmount: 24,
        priceFewDays: 2310,
      },
    ],
  },
  {
    id: 1941,
    point: {
      lat: 46.365173,
      lon: 48.049609,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1980₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1980,
      },
      {
        code: 'per_3h',
        title: '1584₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1584,
      },
      {
        code: 'sum',
        title: '1980 ₽',
        hourAmount: 24,
        priceFewDays: 1980,
      },
    ],
  },
  {
    id: 1943,
    point: {
      lat: 46.415758,
      lon: 47.980016,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2200,
      },
      {
        code: 'per_3h',
        title: '1760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1760,
      },
      {
        code: 'sum',
        title: '2200 ₽',
        hourAmount: 24,
        priceFewDays: 2200,
      },
    ],
  },
  {
    id: 1945,
    point: {
      lat: 46.33790268670233,
      lon: 48.005692322753866,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2200,
      },
      {
        code: 'per_3h',
        title: '1760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1760,
      },
      {
        code: 'sum',
        title: '2200 ₽',
        hourAmount: 24,
        priceFewDays: 2200,
      },
    ],
  },
  {
    id: 1947,
    point: {
      lat: 55.18541,
      lon: 61.305455,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2100₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2100,
      },
      {
        code: 'per_3h',
        title: '1680₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1680,
      },
      {
        code: 'sum',
        title: '2100 ₽',
        hourAmount: 24,
        priceFewDays: 2100,
      },
    ],
  },
  {
    id: 1948,
    point: {
      lat: 55.18539984238847,
      lon: 61.30283490057534,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2050₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2050,
      },
      {
        code: 'per_3h',
        title: '1640₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1640,
      },
      {
        code: 'sum',
        title: '2050 ₽',
        hourAmount: 24,
        priceFewDays: 2050,
      },
    ],
  },
  {
    id: 1949,
    point: {
      lat: 55.185344593213415,
      lon: 61.30298510428018,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1900₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1900,
      },
      {
        code: 'per_3h',
        title: '1520₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1520,
      },
      {
        code: 'sum',
        title: '1900 ₽',
        hourAmount: 24,
        priceFewDays: 1900,
      },
    ],
  },
  {
    id: 1950,
    point: {
      lat: 55.185091332232055,
      lon: 61.30646949999995,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2050₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2050,
      },
      {
        code: 'per_3h',
        title: '1640₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1640,
      },
      {
        code: 'sum',
        title: '2050 ₽',
        hourAmount: 24,
        priceFewDays: 2050,
      },
    ],
  },
  {
    id: 1951,
    point: {
      lat: 55.18383214187633,
      lon: 61.30274983862302,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1850₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1850,
      },
      {
        code: 'per_3h',
        title: '1480₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1480,
      },
      {
        code: 'sum',
        title: '1850 ₽',
        hourAmount: 24,
        priceFewDays: 1850,
      },
    ],
  },
  {
    id: 1952,
    point: {
      lat: 55.18523102522301,
      lon: 61.30296901102611,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1850₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1850,
      },
      {
        code: 'per_3h',
        title: '1480₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1480,
      },
      {
        code: 'sum',
        title: '1850 ₽',
        hourAmount: 24,
        priceFewDays: 1850,
      },
    ],
  },
  {
    id: 1953,
    point: {
      lat: 55.18512359574366,
      lon: 61.30296364660808,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1850₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1850,
      },
      {
        code: 'per_3h',
        title: '1480₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1480,
      },
      {
        code: 'sum',
        title: '1850 ₽',
        hourAmount: 24,
        priceFewDays: 1850,
      },
    ],
  },
  {
    id: 1954,
    point: {
      lat: 55.184839638965045,
      lon: 61.30643731349179,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1850₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1850,
      },
      {
        code: 'per_3h',
        title: '1480₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1480,
      },
      {
        code: 'sum',
        title: '1850 ₽',
        hourAmount: 24,
        priceFewDays: 1850,
      },
    ],
  },
  {
    id: 1955,
    point: {
      lat: 55.18500081883959,
      lon: 61.30296364660808,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1850₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1850,
      },
      {
        code: 'per_3h',
        title: '1480₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1480,
      },
      {
        code: 'sum',
        title: '1850 ₽',
        hourAmount: 24,
        priceFewDays: 1850,
      },
    ],
  },
  {
    id: 1956,
    point: {
      lat: 55.18358657969423,
      lon: 61.30307170370481,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1840₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1840,
      },
      {
        code: 'per_3h',
        title: '1472₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1472,
      },
      {
        code: 'sum',
        title: '1840 ₽',
        hourAmount: 24,
        priceFewDays: 1840,
      },
    ],
  },
  {
    id: 1957,
    point: {
      lat: 55.184893388736825,
      lon: 61.30299046869821,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2050₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2050,
      },
      {
        code: 'per_3h',
        title: '1640₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1640,
      },
      {
        code: 'sum',
        title: '2050 ₽',
        hourAmount: 24,
        priceFewDays: 2050,
      },
    ],
  },
  {
    id: 1958,
    point: {
      lat: 55.18473014136889,
      lon: 61.30598196769818,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2000,
      },
      {
        code: 'per_3h',
        title: '1600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1600,
      },
      {
        code: 'sum',
        title: '2000 ₽',
        hourAmount: 24,
        priceFewDays: 2000,
      },
    ],
  },
  {
    id: 1959,
    point: {
      lat: 55.18482586109475,
      lon: 61.30301192637032,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1850₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1850,
      },
      {
        code: 'per_3h',
        title: '1480₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1480,
      },
      {
        code: 'sum',
        title: '1850 ₽',
        hourAmount: 24,
        priceFewDays: 1850,
      },
    ],
  },
  {
    id: 1960,
    point: {
      lat: 58.00174060240325,
      lon: 56.24206238161463,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2978₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2978,
      },
      {
        code: 'per_3h',
        title: '2382₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2382,
      },
      {
        code: 'sum',
        title: '2978 ₽',
        hourAmount: 24,
        priceFewDays: 2978,
      },
    ],
  },
  {
    id: 1961,
    point: {
      lat: 57.99973,
      lon: 56.268897,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4473₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4473,
      },
      {
        code: 'per_3h',
        title: '3578₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3578,
      },
      {
        code: 'sum',
        title: '4473 ₽',
        hourAmount: 24,
        priceFewDays: 4473,
      },
    ],
  },
  {
    id: 1962,
    point: {
      lat: 58.004240623897495,
      lon: 56.22471645389155,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2978₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2978,
      },
      {
        code: 'per_3h',
        title: '2382₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2382,
      },
      {
        code: 'sum',
        title: '2978 ₽',
        hourAmount: 24,
        priceFewDays: 2978,
      },
    ],
  },
  {
    id: 1963,
    point: {
      lat: 58.004143800273106,
      lon: 56.225059776645494,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3208₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3208,
      },
      {
        code: 'per_3h',
        title: '2566₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2566,
      },
      {
        code: 'sum',
        title: '3208 ₽',
        hourAmount: 24,
        priceFewDays: 3208,
      },
    ],
  },
  {
    id: 1964,
    point: {
      lat: 58.00179756134632,
      lon: 56.24180488954921,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2863₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2863,
      },
      {
        code: 'per_3h',
        title: '2290₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2290,
      },
      {
        code: 'sum',
        title: '2863 ₽',
        hourAmount: 24,
        priceFewDays: 2863,
      },
    ],
  },
  {
    id: 1965,
    point: {
      lat: 58.00120899240304,
      lon: 56.24199773359198,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2748₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2748,
      },
      {
        code: 'per_3h',
        title: '2198₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2198,
      },
      {
        code: 'sum',
        title: '2748 ₽',
        hourAmount: 24,
        priceFewDays: 2748,
      },
    ],
  },
  {
    id: 1966,
    point: {
      lat: 57.9900100199434,
      lon: 56.26516199073789,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2748₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2748,
      },
      {
        code: 'per_3h',
        title: '2198₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2198,
      },
      {
        code: 'sum',
        title: '2748 ₽',
        hourAmount: 24,
        priceFewDays: 2748,
      },
    ],
  },
  {
    id: 1967,
    point: {
      lat: 57.990744,
      lon: 56.259357,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2978₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2978,
      },
      {
        code: 'per_3h',
        title: '2382₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2382,
      },
      {
        code: 'sum',
        title: '2978 ₽',
        hourAmount: 24,
        priceFewDays: 2978,
      },
    ],
  },
  {
    id: 1968,
    point: {
      lat: 57.9900271132558,
      lon: 56.265816449737514,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2978₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2978,
      },
      {
        code: 'per_3h',
        title: '2382₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2382,
      },
      {
        code: 'sum',
        title: '2978 ₽',
        hourAmount: 24,
        priceFewDays: 2978,
      },
    ],
  },
  {
    id: 1975,
    point: {
      lat: 56.791926,
      lon: 60.513392,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2700,
      },
      {
        code: 'per_3h',
        title: '2160₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2160,
      },
      {
        code: 'sum',
        title: '2700 ₽',
        hourAmount: 24,
        priceFewDays: 2700,
      },
    ],
  },
  {
    id: 1976,
    point: {
      lat: 56.7913,
      lon: 60.514524,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 2010,
    point: {
      lat: 55.00134334708841,
      lon: 82.9456436871719,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3360₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3360,
      },
      {
        code: 'per_3h',
        title: '2688₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2688,
      },
      {
        code: 'sum',
        title: '3360 ₽',
        hourAmount: 24,
        priceFewDays: 3360,
      },
    ],
  },
  {
    id: 2011,
    point: {
      lat: 55.01121612185621,
      lon: 82.93205719577016,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3240₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3240,
      },
      {
        code: 'per_3h',
        title: '2592₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2592,
      },
      {
        code: 'sum',
        title: '3240 ₽',
        hourAmount: 24,
        priceFewDays: 3240,
      },
    ],
  },
  {
    id: 2012,
    point: {
      lat: 55.03496389953605,
      lon: 82.93533907050073,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3180₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3180,
      },
      {
        code: 'per_3h',
        title: '2544₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2544,
      },
      {
        code: 'sum',
        title: '3180 ₽',
        hourAmount: 24,
        priceFewDays: 3180,
      },
    ],
  },
  {
    id: 2013,
    point: {
      lat: 55.00150061151384,
      lon: 82.94527354232787,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3600,
      },
      {
        code: 'per_3h',
        title: '2880₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2880,
      },
      {
        code: 'sum',
        title: '3600 ₽',
        hourAmount: 24,
        priceFewDays: 3600,
      },
    ],
  },
  {
    id: 2014,
    point: {
      lat: 55.047524571909705,
      lon: 82.90620568650814,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3120₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3120,
      },
      {
        code: 'per_3h',
        title: '2496₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2496,
      },
      {
        code: 'sum',
        title: '3120 ₽',
        hourAmount: 24,
        priceFewDays: 3120,
      },
    ],
  },
  {
    id: 2019,
    point: {
      lat: 54.795001,
      lon: 56.039881,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3240₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3240,
      },
      {
        code: 'per_3h',
        title: '2592₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2592,
      },
      {
        code: 'sum',
        title: '3240 ₽',
        hourAmount: 24,
        priceFewDays: 3240,
      },
    ],
  },
  {
    id: 2020,
    point: {
      lat: 54.731004047628744,
      lon: 20.494951686508156,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2772₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2772,
      },
      {
        code: 'per_3h',
        title: '2218₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2218,
      },
      {
        code: 'sum',
        title: '2772 ₽',
        hourAmount: 24,
        priceFewDays: 2772,
      },
    ],
  },
  {
    id: 2021,
    point: {
      lat: 54.73122258692356,
      lon: 20.49546236689883,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2901₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2901,
      },
      {
        code: 'per_3h',
        title: '2321₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2321,
      },
      {
        code: 'sum',
        title: '2901 ₽',
        hourAmount: 24,
        priceFewDays: 2901,
      },
    ],
  },
  {
    id: 2022,
    point: {
      lat: 54.709533,
      lon: 20.492126,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3868₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3868,
      },
      {
        code: 'per_3h',
        title: '3094₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3094,
      },
      {
        code: 'sum',
        title: '3868 ₽',
        hourAmount: 24,
        priceFewDays: 3868,
      },
    ],
  },
  {
    id: 2029,
    point: {
      lat: 54.719607,
      lon: 55.989135,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2796₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2796,
      },
      {
        code: 'per_3h',
        title: '2237₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2237,
      },
      {
        code: 'sum',
        title: '2796 ₽',
        hourAmount: 24,
        priceFewDays: 2796,
      },
    ],
  },
  {
    id: 2030,
    point: {
      lat: 54.719108,
      lon: 55.99713,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3500,
      },
      {
        code: 'per_3h',
        title: '2800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2800,
      },
      {
        code: 'sum',
        title: '3500 ₽',
        hourAmount: 24,
        priceFewDays: 3500,
      },
    ],
  },
  {
    id: 2038,
    point: {
      lat: 55.648402,
      lon: 37.499624,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5416₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5416,
      },
      {
        code: 'per_3h',
        title: '4333₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4333,
      },
      {
        code: 'sum',
        title: '5416 ₽',
        hourAmount: 24,
        priceFewDays: 5416,
      },
    ],
  },
  {
    id: 2039,
    point: {
      lat: 55.64905580094672,
      lon: 37.53405895700633,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 2040,
    point: {
      lat: 55.64915893720994,
      lon: 37.533989219571936,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4140₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4140,
      },
      {
        code: 'per_3h',
        title: '3312₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3312,
      },
      {
        code: 'sum',
        title: '4140 ₽',
        hourAmount: 24,
        priceFewDays: 4140,
      },
    ],
  },
  {
    id: 2057,
    point: {
      lat: 52.25745,
      lon: 104.306119,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2310₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2310,
      },
      {
        code: 'per_3h',
        title: '1848₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1848,
      },
      {
        code: 'sum',
        title: '2310 ₽',
        hourAmount: 24,
        priceFewDays: 2310,
      },
    ],
  },
  {
    id: 2058,
    point: {
      lat: 52.257009,
      lon: 104.308894,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1870₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1870,
      },
      {
        code: 'per_3h',
        title: '1496₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1496,
      },
      {
        code: 'sum',
        title: '1870 ₽',
        hourAmount: 24,
        priceFewDays: 1870,
      },
    ],
  },
  {
    id: 2059,
    point: {
      lat: 52.257009,
      lon: 104.308894,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1650₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1650,
      },
      {
        code: 'per_3h',
        title: '1320₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1320,
      },
      {
        code: 'sum',
        title: '1650 ₽',
        hourAmount: 24,
        priceFewDays: 1650,
      },
    ],
  },
  {
    id: 2060,
    point: {
      lat: 52.257009,
      lon: 104.308894,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1870₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1870,
      },
      {
        code: 'per_3h',
        title: '1496₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1496,
      },
      {
        code: 'sum',
        title: '1870 ₽',
        hourAmount: 24,
        priceFewDays: 1870,
      },
    ],
  },
  {
    id: 2063,
    point: {
      lat: 52.257009,
      lon: 104.308894,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2090₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2090,
      },
      {
        code: 'per_3h',
        title: '1672₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1672,
      },
      {
        code: 'sum',
        title: '2090 ₽',
        hourAmount: 24,
        priceFewDays: 2090,
      },
    ],
  },
  {
    id: 2064,
    point: {
      lat: 52.257009,
      lon: 104.308894,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2420₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2420,
      },
      {
        code: 'per_3h',
        title: '1936₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1936,
      },
      {
        code: 'sum',
        title: '2420 ₽',
        hourAmount: 24,
        priceFewDays: 2420,
      },
    ],
  },
  {
    id: 2065,
    point: {
      lat: 52.257009,
      lon: 104.308894,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2640₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2640,
      },
      {
        code: 'per_3h',
        title: '2112₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2112,
      },
      {
        code: 'sum',
        title: '2640 ₽',
        hourAmount: 24,
        priceFewDays: 2640,
      },
    ],
  },
  {
    id: 2066,
    point: {
      lat: 52.256937,
      lon: 104.30955,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1980₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1980,
      },
      {
        code: 'per_3h',
        title: '1584₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1584,
      },
      {
        code: 'sum',
        title: '1980 ₽',
        hourAmount: 24,
        priceFewDays: 1980,
      },
    ],
  },
  {
    id: 2067,
    point: {
      lat: 52.256937,
      lon: 104.30955,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2365₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2365,
      },
      {
        code: 'per_3h',
        title: '1892₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1892,
      },
      {
        code: 'sum',
        title: '2365 ₽',
        hourAmount: 24,
        priceFewDays: 2365,
      },
    ],
  },
  {
    id: 2068,
    point: {
      lat: 52.257615,
      lon: 104.305562,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2310₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2310,
      },
      {
        code: 'per_3h',
        title: '1848₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1848,
      },
      {
        code: 'sum',
        title: '2310 ₽',
        hourAmount: 24,
        priceFewDays: 2310,
      },
    ],
  },
  {
    id: 2069,
    point: {
      lat: 52.257009,
      lon: 104.308894,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1980₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1980,
      },
      {
        code: 'per_3h',
        title: '1584₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1584,
      },
      {
        code: 'sum',
        title: '1980 ₽',
        hourAmount: 24,
        priceFewDays: 1980,
      },
    ],
  },
  {
    id: 2091,
    point: {
      lat: 57.908475,
      lon: 59.989234,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1840₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1840,
      },
      {
        code: 'per_3h',
        title: '1472₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1472,
      },
      {
        code: 'sum',
        title: '1840 ₽',
        hourAmount: 24,
        priceFewDays: 1840,
      },
    ],
  },
  {
    id: 2092,
    point: {
      lat: 57.908949,
      lon: 59.984958,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2185₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2185,
      },
      {
        code: 'per_3h',
        title: '1748₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1748,
      },
      {
        code: 'sum',
        title: '2185 ₽',
        hourAmount: 24,
        priceFewDays: 2185,
      },
    ],
  },
  {
    id: 2093,
    point: {
      lat: 57.910192,
      lon: 59.98061,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2185₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2185,
      },
      {
        code: 'per_3h',
        title: '1748₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1748,
      },
      {
        code: 'sum',
        title: '2185 ₽',
        hourAmount: 24,
        priceFewDays: 2185,
      },
    ],
  },
  {
    id: 2094,
    point: {
      lat: 52.753977,
      lon: 41.408005,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2125₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2125,
      },
      {
        code: 'per_3h',
        title: '1700₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1700,
      },
      {
        code: 'sum',
        title: '2125 ₽',
        hourAmount: 24,
        priceFewDays: 2125,
      },
    ],
  },
  {
    id: 2095,
    point: {
      lat: 52.78573,
      lon: 41.415586,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2500,
      },
      {
        code: 'per_3h',
        title: '2000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2000,
      },
      {
        code: 'sum',
        title: '2500 ₽',
        hourAmount: 24,
        priceFewDays: 2500,
      },
    ],
  },
  {
    id: 2096,
    point: {
      lat: 52.774902,
      lon: 41.401806,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1750₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1750,
      },
      {
        code: 'per_3h',
        title: '1400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1400,
      },
      {
        code: 'sum',
        title: '1750 ₽',
        hourAmount: 24,
        priceFewDays: 1750,
      },
    ],
  },
  {
    id: 2097,
    point: {
      lat: 52.733196,
      lon: 41.472612,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2250₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2250,
      },
      {
        code: 'per_3h',
        title: '1800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1800,
      },
      {
        code: 'sum',
        title: '2250 ₽',
        hourAmount: 24,
        priceFewDays: 2250,
      },
    ],
  },
  {
    id: 2098,
    point: {
      lat: 52.784058,
      lon: 41.419548,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1750₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1750,
      },
      {
        code: 'per_3h',
        title: '1400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1400,
      },
      {
        code: 'sum',
        title: '1750 ₽',
        hourAmount: 24,
        priceFewDays: 1750,
      },
    ],
  },
  {
    id: 2099,
    point: {
      lat: 52.645942,
      lon: 41.448456,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2125₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2125,
      },
      {
        code: 'per_3h',
        title: '1700₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1700,
      },
      {
        code: 'sum',
        title: '2125 ₽',
        hourAmount: 24,
        priceFewDays: 2125,
      },
    ],
  },
  {
    id: 2100,
    point: {
      lat: 52.76322,
      lon: 41.423644,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1375₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1375,
      },
      {
        code: 'per_3h',
        title: '1100₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1100,
      },
      {
        code: 'sum',
        title: '1375 ₽',
        hourAmount: 24,
        priceFewDays: 1375,
      },
    ],
  },
  {
    id: 2101,
    point: {
      lat: 52.640806,
      lon: 41.451618,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2125₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2125,
      },
      {
        code: 'per_3h',
        title: '1700₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1700,
      },
      {
        code: 'sum',
        title: '2125 ₽',
        hourAmount: 24,
        priceFewDays: 2125,
      },
    ],
  },
  {
    id: 2102,
    point: {
      lat: 52.779031,
      lon: 41.408894,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1875,
      },
      {
        code: 'per_3h',
        title: '1500₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1500,
      },
      {
        code: 'sum',
        title: '1875 ₽',
        hourAmount: 24,
        priceFewDays: 1875,
      },
    ],
  },
  {
    id: 2103,
    point: {
      lat: 52.75365,
      lon: 41.412829,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6000,
      },
      {
        code: 'per_3h',
        title: '4800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4800,
      },
      {
        code: 'sum',
        title: '6000 ₽',
        hourAmount: 24,
        priceFewDays: 6000,
      },
    ],
  },
  {
    id: 2105,
    point: {
      lat: 52.700558,
      lon: 41.465371,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2125₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2125,
      },
      {
        code: 'per_3h',
        title: '1700₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1700,
      },
      {
        code: 'sum',
        title: '2125 ₽',
        hourAmount: 24,
        priceFewDays: 2125,
      },
    ],
  },
  {
    id: 2106,
    point: {
      lat: 59.93481718364209,
      lon: 30.32859825529478,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5900₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5900,
      },
      {
        code: 'per_3h',
        title: '4720₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4720,
      },
      {
        code: 'sum',
        title: '5900 ₽',
        hourAmount: 24,
        priceFewDays: 5900,
      },
    ],
  },
  {
    id: 2107,
    point: {
      lat: 59.940587,
      lon: 30.281229,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5310₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5310,
      },
      {
        code: 'per_3h',
        title: '4248₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4248,
      },
      {
        code: 'sum',
        title: '5310 ₽',
        hourAmount: 24,
        priceFewDays: 5310,
      },
    ],
  },
  {
    id: 2108,
    point: {
      lat: 59.93492649696284,
      lon: 30.327733444391008,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '11800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 11800,
      },
      {
        code: 'per_3h',
        title: '9440₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 9440,
      },
      {
        code: 'sum',
        title: '11800 ₽',
        hourAmount: 24,
        priceFewDays: 11800,
      },
    ],
  },
  {
    id: 2113,
    point: {
      lat: 55.80243185412024,
      lon: 37.592020330688456,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5520₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5520,
      },
      {
        code: 'per_3h',
        title: '4416₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4416,
      },
      {
        code: 'sum',
        title: '5520 ₽',
        hourAmount: 24,
        priceFewDays: 5520,
      },
    ],
  },
  {
    id: 2114,
    point: {
      lat: 55.8030877664961,
      lon: 37.591655688880266,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5520₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5520,
      },
      {
        code: 'per_3h',
        title: '4416₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4416,
      },
      {
        code: 'sum',
        title: '5520 ₽',
        hourAmount: 24,
        priceFewDays: 5520,
      },
    ],
  },
  {
    id: 2115,
    point: {
      lat: 55.80256479905372,
      lon: 37.5920847037048,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5750₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5750,
      },
      {
        code: 'per_3h',
        title: '4600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4600,
      },
      {
        code: 'sum',
        title: '5750 ₽',
        hourAmount: 24,
        priceFewDays: 5750,
      },
    ],
  },
  {
    id: 2116,
    point: {
      lat: 55.84667240284183,
      lon: 37.58095238095089,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3565₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3565,
      },
      {
        code: 'per_3h',
        title: '2852₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2852,
      },
      {
        code: 'sum',
        title: '3565 ₽',
        hourAmount: 24,
        priceFewDays: 3565,
      },
    ],
  },
  {
    id: 2117,
    point: {
      lat: 55.845739,
      lon: 37.582574,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4255₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4255,
      },
      {
        code: 'per_3h',
        title: '3404₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3404,
      },
      {
        code: 'sum',
        title: '4255 ₽',
        hourAmount: 24,
        priceFewDays: 4255,
      },
    ],
  },
  {
    id: 2118,
    point: {
      lat: 55.84646114000905,
      lon: 37.5810811269836,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4025₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4025,
      },
      {
        code: 'per_3h',
        title: '3220₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3220,
      },
      {
        code: 'sum',
        title: '4025 ₽',
        hourAmount: 24,
        priceFewDays: 4025,
      },
    ],
  },
  {
    id: 2119,
    point: {
      lat: 55.84622573149422,
      lon: 37.58110258465573,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3795₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3795,
      },
      {
        code: 'per_3h',
        title: '3036₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3036,
      },
      {
        code: 'sum',
        title: '3795 ₽',
        hourAmount: 24,
        priceFewDays: 3795,
      },
    ],
  },
  {
    id: 2120,
    point: {
      lat: 55.846050683208915,
      lon: 37.58110258465573,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3565₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3565,
      },
      {
        code: 'per_3h',
        title: '2852₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2852,
      },
      {
        code: 'sum',
        title: '3565 ₽',
        hourAmount: 24,
        priceFewDays: 3565,
      },
    ],
  },
  {
    id: 2121,
    point: {
      lat: 55.845857525561556,
      lon: 37.58099529629512,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3565₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3565,
      },
      {
        code: 'per_3h',
        title: '2852₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2852,
      },
      {
        code: 'sum',
        title: '3565 ₽',
        hourAmount: 24,
        priceFewDays: 3565,
      },
    ],
  },
  {
    id: 2122,
    point: {
      lat: 55.845007132069206,
      lon: 37.576339406082134,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3795₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3795,
      },
      {
        code: 'per_3h',
        title: '3036₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3036,
      },
      {
        code: 'sum',
        title: '3795 ₽',
        hourAmount: 24,
        priceFewDays: 3795,
      },
    ],
  },
  {
    id: 2123,
    point: {
      lat: 55.84574887396135,
      lon: 37.581349347885094,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4025₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4025,
      },
      {
        code: 'per_3h',
        title: '3220₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3220,
      },
      {
        code: 'sum',
        title: '4025 ₽',
        hourAmount: 24,
        priceFewDays: 4025,
      },
    ],
  },
  {
    id: 2124,
    point: {
      lat: 55.84609444646911,
      lon: 37.58391931969842,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3565₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3565,
      },
      {
        code: 'per_3h',
        title: '2852₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2852,
      },
      {
        code: 'sum',
        title: '3565 ₽',
        hourAmount: 24,
        priceFewDays: 3565,
      },
    ],
  },
  {
    id: 2125,
    point: {
      lat: 55.846708619211654,
      lon: 37.58143517857357,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4025₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4025,
      },
      {
        code: 'per_3h',
        title: '3220₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3220,
      },
      {
        code: 'sum',
        title: '4025 ₽',
        hourAmount: 24,
        priceFewDays: 4025,
      },
    ],
  },
  {
    id: 2126,
    point: {
      lat: 55.84587714429376,
      lon: 37.584101709911415,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4025₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4025,
      },
      {
        code: 'per_3h',
        title: '3220₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3220,
      },
      {
        code: 'sum',
        title: '4025 ₽',
        hourAmount: 24,
        priceFewDays: 4025,
      },
    ],
  },
  {
    id: 2127,
    point: {
      lat: 55.84460873262478,
      lon: 37.57665054232784,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4025₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4025,
      },
      {
        code: 'per_3h',
        title: '3220₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3220,
      },
      {
        code: 'sum',
        title: '4025 ₽',
        hourAmount: 24,
        priceFewDays: 4025,
      },
    ],
  },
  {
    id: 2128,
    point: {
      lat: 45.048214,
      lon: 39.029859,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2124₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2124,
      },
      {
        code: 'per_3h',
        title: '1699₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1699,
      },
      {
        code: 'sum',
        title: '2124 ₽',
        hourAmount: 24,
        priceFewDays: 2124,
      },
    ],
  },
  {
    id: 2129,
    point: {
      lat: 45.046788,
      lon: 39.027317,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2242₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2242,
      },
      {
        code: 'per_3h',
        title: '1794₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1794,
      },
      {
        code: 'sum',
        title: '2242 ₽',
        hourAmount: 24,
        priceFewDays: 2242,
      },
    ],
  },
  {
    id: 2130,
    point: {
      lat: 59.946721,
      lon: 30.339458,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 2131,
    point: {
      lat: 54.712882,
      lon: 20.512185,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5850₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5850,
      },
      {
        code: 'per_3h',
        title: '4680₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4680,
      },
      {
        code: 'sum',
        title: '5850 ₽',
        hourAmount: 24,
        priceFewDays: 5850,
      },
    ],
  },
  {
    id: 2132,
    point: {
      lat: 54.712856,
      lon: 20.50958,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2860₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2860,
      },
      {
        code: 'per_3h',
        title: '2288₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2288,
      },
      {
        code: 'sum',
        title: '2860 ₽',
        hourAmount: 24,
        priceFewDays: 2860,
      },
    ],
  },
  {
    id: 2133,
    point: {
      lat: 54.721073,
      lon: 20.473441,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2860₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2860,
      },
      {
        code: 'per_3h',
        title: '2288₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2288,
      },
      {
        code: 'sum',
        title: '2860 ₽',
        hourAmount: 24,
        priceFewDays: 2860,
      },
    ],
  },
  {
    id: 2134,
    point: {
      lat: 54.744025,
      lon: 20.516479,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4940₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4940,
      },
      {
        code: 'per_3h',
        title: '3952₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3952,
      },
      {
        code: 'sum',
        title: '4940 ₽',
        hourAmount: 24,
        priceFewDays: 4940,
      },
    ],
  },
  {
    id: 2135,
    point: {
      lat: 54.733879,
      lon: 20.483762,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3900₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3900,
      },
      {
        code: 'per_3h',
        title: '3120₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3120,
      },
      {
        code: 'sum',
        title: '3900 ₽',
        hourAmount: 24,
        priceFewDays: 3900,
      },
    ],
  },
  {
    id: 2136,
    point: {
      lat: 55.60918389783766,
      lon: 38.0868675158691,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2580₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2580,
      },
      {
        code: 'per_3h',
        title: '2064₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2064,
      },
      {
        code: 'sum',
        title: '2580 ₽',
        hourAmount: 24,
        priceFewDays: 2580,
      },
    ],
  },
  {
    id: 2137,
    point: {
      lat: 55.609123167297284,
      lon: 38.087779466934144,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2700,
      },
      {
        code: 'per_3h',
        title: '2160₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2160,
      },
      {
        code: 'sum',
        title: '2700 ₽',
        hourAmount: 24,
        priceFewDays: 2700,
      },
    ],
  },
  {
    id: 2138,
    point: {
      lat: 53.33264710146355,
      lon: 83.77174637301633,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3240₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3240,
      },
      {
        code: 'per_3h',
        title: '2592₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2592,
      },
      {
        code: 'sum',
        title: '3240 ₽',
        hourAmount: 24,
        priceFewDays: 3240,
      },
    ],
  },
  {
    id: 2139,
    point: {
      lat: 53.339059,
      lon: 83.761711,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3600,
      },
      {
        code: 'per_3h',
        title: '2880₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2880,
      },
      {
        code: 'sum',
        title: '3600 ₽',
        hourAmount: 24,
        priceFewDays: 3600,
      },
    ],
  },
  {
    id: 2140,
    point: {
      lat: 53.333881,
      lon: 83.773137,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2640₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2640,
      },
      {
        code: 'per_3h',
        title: '2112₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2112,
      },
      {
        code: 'sum',
        title: '2640 ₽',
        hourAmount: 24,
        priceFewDays: 2640,
      },
    ],
  },
  {
    id: 2141,
    point: {
      lat: 53.33008446864098,
      lon: 83.76143086508175,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 2142,
    point: {
      lat: 53.3325571889176,
      lon: 83.77191803439328,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3600,
      },
      {
        code: 'per_3h',
        title: '2880₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2880,
      },
      {
        code: 'sum',
        title: '3600 ₽',
        hourAmount: 24,
        priceFewDays: 3600,
      },
    ],
  },
  {
    id: 2143,
    point: {
      lat: 53.329808291402685,
      lon: 83.76105535581965,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3000,
      },
      {
        code: 'per_3h',
        title: '2400₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2400,
      },
      {
        code: 'sum',
        title: '3000 ₽',
        hourAmount: 24,
        priceFewDays: 3000,
      },
    ],
  },
  {
    id: 2144,
    point: {
      lat: 57.62444176438723,
      lon: 39.85278231349183,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2040₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2040,
      },
      {
        code: 'per_3h',
        title: '1632₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1632,
      },
      {
        code: 'sum',
        title: '2040 ₽',
        hourAmount: 24,
        priceFewDays: 2040,
      },
    ],
  },
  {
    id: 2145,
    point: {
      lat: 57.629108,
      lon: 39.84543,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2160₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2160,
      },
      {
        code: 'per_3h',
        title: '1728₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1728,
      },
      {
        code: 'sum',
        title: '2160 ₽',
        hourAmount: 24,
        priceFewDays: 2160,
      },
    ],
  },
  {
    id: 2146,
    point: {
      lat: 57.625769,
      lon: 39.851278,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2400,
      },
      {
        code: 'per_3h',
        title: '1920₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1920,
      },
      {
        code: 'sum',
        title: '2400 ₽',
        hourAmount: 24,
        priceFewDays: 2400,
      },
    ],
  },
  {
    id: 2147,
    point: {
      lat: 57.623369,
      lon: 39.843283,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1800,
      },
      {
        code: 'per_3h',
        title: '1440₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1440,
      },
      {
        code: 'sum',
        title: '1800 ₽',
        hourAmount: 24,
        priceFewDays: 1800,
      },
    ],
  },
  {
    id: 2148,
    point: {
      lat: 57.62474683292323,
      lon: 39.852803771163956,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2400,
      },
      {
        code: 'per_3h',
        title: '1920₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1920,
      },
      {
        code: 'sum',
        title: '2400 ₽',
        hourAmount: 24,
        priceFewDays: 2400,
      },
    ],
  },
  {
    id: 2149,
    point: {
      lat: 57.631195,
      lon: 39.878452,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2400,
      },
      {
        code: 'per_3h',
        title: '1920₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1920,
      },
      {
        code: 'sum',
        title: '2400 ₽',
        hourAmount: 24,
        priceFewDays: 2400,
      },
    ],
  },
  {
    id: 2150,
    point: {
      lat: 57.585838,
      lon: 39.864097,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2400,
      },
      {
        code: 'per_3h',
        title: '1920₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1920,
      },
      {
        code: 'sum',
        title: '2400 ₽',
        hourAmount: 24,
        priceFewDays: 2400,
      },
    ],
  },
  {
    id: 2151,
    point: {
      lat: 57.597193,
      lon: 39.857225,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1800,
      },
      {
        code: 'per_3h',
        title: '1440₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1440,
      },
      {
        code: 'sum',
        title: '1800 ₽',
        hourAmount: 24,
        priceFewDays: 1800,
      },
    ],
  },
  {
    id: 2152,
    point: {
      lat: 57.627484,
      lon: 39.86072,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2040₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2040,
      },
      {
        code: 'per_3h',
        title: '1632₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1632,
      },
      {
        code: 'sum',
        title: '2040 ₽',
        hourAmount: 24,
        priceFewDays: 2040,
      },
    ],
  },
  {
    id: 2153,
    point: {
      lat: 57.600323,
      lon: 39.879306,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1980₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1980,
      },
      {
        code: 'per_3h',
        title: '1584₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1584,
      },
      {
        code: 'sum',
        title: '1980 ₽',
        hourAmount: 24,
        priceFewDays: 1980,
      },
    ],
  },
  {
    id: 2154,
    point: {
      lat: 57.62732680090527,
      lon: 39.85960341534418,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2400,
      },
      {
        code: 'per_3h',
        title: '1920₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1920,
      },
      {
        code: 'sum',
        title: '2400 ₽',
        hourAmount: 24,
        priceFewDays: 2400,
      },
    ],
  },
  {
    id: 2155,
    point: {
      lat: 57.577495,
      lon: 39.852922,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1800,
      },
      {
        code: 'per_3h',
        title: '1440₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1440,
      },
      {
        code: 'sum',
        title: '1800 ₽',
        hourAmount: 24,
        priceFewDays: 1800,
      },
    ],
  },
  {
    id: 2156,
    point: {
      lat: 57.621373,
      lon: 39.863001,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2400,
      },
      {
        code: 'per_3h',
        title: '1920₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1920,
      },
      {
        code: 'sum',
        title: '2400 ₽',
        hourAmount: 24,
        priceFewDays: 2400,
      },
    ],
  },
  {
    id: 2157,
    point: {
      lat: 57.627094,
      lon: 39.859381,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2280₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2280,
      },
      {
        code: 'per_3h',
        title: '1824₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1824,
      },
      {
        code: 'sum',
        title: '2280 ₽',
        hourAmount: 24,
        priceFewDays: 2280,
      },
    ],
  },
  {
    id: 2158,
    point: {
      lat: 57.631402,
      lon: 39.84799,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2400,
      },
      {
        code: 'per_3h',
        title: '1920₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1920,
      },
      {
        code: 'sum',
        title: '2400 ₽',
        hourAmount: 24,
        priceFewDays: 2400,
      },
    ],
  },
  {
    id: 2159,
    point: {
      lat: 57.626641,
      lon: 39.879171,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2520₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2520,
      },
      {
        code: 'per_3h',
        title: '2016₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2016,
      },
      {
        code: 'sum',
        title: '2520 ₽',
        hourAmount: 24,
        priceFewDays: 2520,
      },
    ],
  },
  {
    id: 2160,
    point: {
      lat: 57.580053,
      lon: 39.839043,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2100₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2100,
      },
      {
        code: 'per_3h',
        title: '1680₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1680,
      },
      {
        code: 'sum',
        title: '2100 ₽',
        hourAmount: 24,
        priceFewDays: 2100,
      },
    ],
  },
  {
    id: 2161,
    point: {
      lat: 59.89373737008941,
      lon: 30.316940708786163,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 2169,
    point: {
      lat: 59.924328997612044,
      lon: 30.284319144180248,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2440₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2440,
      },
      {
        code: 'per_3h',
        title: '1952₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1952,
      },
      {
        code: 'sum',
        title: '2440 ₽',
        hourAmount: 24,
        priceFewDays: 2440,
      },
    ],
  },
  {
    id: 2170,
    point: {
      lat: 59.932437,
      lon: 30.273611,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3050₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3050,
      },
      {
        code: 'per_3h',
        title: '2440₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2440,
      },
      {
        code: 'sum',
        title: '3050 ₽',
        hourAmount: 24,
        priceFewDays: 3050,
      },
    ],
  },
  {
    id: 2172,
    point: {
      lat: 59.94351867418759,
      lon: 30.279206302415957,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2440₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2440,
      },
      {
        code: 'per_3h',
        title: '1952₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1952,
      },
      {
        code: 'sum',
        title: '2440 ₽',
        hourAmount: 24,
        priceFewDays: 2440,
      },
    ],
  },
  {
    id: 2174,
    point: {
      lat: 59.939478,
      lon: 30.274734,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3050₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3050,
      },
      {
        code: 'per_3h',
        title: '2440₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2440,
      },
      {
        code: 'sum',
        title: '3050 ₽',
        hourAmount: 24,
        priceFewDays: 3050,
      },
    ],
  },
  {
    id: 2176,
    point: {
      lat: 59.94355635278278,
      lon: 30.279369917165866,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2440₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2440,
      },
      {
        code: 'per_3h',
        title: '1952₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1952,
      },
      {
        code: 'sum',
        title: '2440 ₽',
        hourAmount: 24,
        priceFewDays: 2440,
      },
    ],
  },
  {
    id: 2177,
    point: {
      lat: 59.930633,
      lon: 30.28431,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2440₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2440,
      },
      {
        code: 'per_3h',
        title: '1952₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1952,
      },
      {
        code: 'sum',
        title: '2440 ₽',
        hourAmount: 24,
        priceFewDays: 2440,
      },
    ],
  },
  {
    id: 2178,
    point: {
      lat: 59.926088,
      lon: 30.351693,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3660₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3660,
      },
      {
        code: 'per_3h',
        title: '2928₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2928,
      },
      {
        code: 'sum',
        title: '3660 ₽',
        hourAmount: 24,
        priceFewDays: 3660,
      },
    ],
  },
  {
    id: 2179,
    point: {
      lat: 59.926981,
      lon: 30.35402,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3050₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3050,
      },
      {
        code: 'per_3h',
        title: '2440₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2440,
      },
      {
        code: 'sum',
        title: '3050 ₽',
        hourAmount: 24,
        priceFewDays: 3050,
      },
    ],
  },
  {
    id: 2181,
    point: {
      lat: 59.92419242291904,
      lon: 30.284563116617328,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2440₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2440,
      },
      {
        code: 'per_3h',
        title: '1952₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1952,
      },
      {
        code: 'sum',
        title: '2440 ₽',
        hourAmount: 24,
        priceFewDays: 2440,
      },
    ],
  },
  {
    id: 2185,
    point: {
      lat: 55.797377,
      lon: 37.506594,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3162₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3162,
      },
      {
        code: 'per_3h',
        title: '2530₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2530,
      },
      {
        code: 'sum',
        title: '3162 ₽',
        hourAmount: 24,
        priceFewDays: 3162,
      },
    ],
  },
  {
    id: 2186,
    point: {
      lat: 55.795282,
      lon: 37.563673,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 2187,
    point: {
      lat: 59.912612,
      lon: 30.346069,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2440₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2440,
      },
      {
        code: 'per_3h',
        title: '1952₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1952,
      },
      {
        code: 'sum',
        title: '2440 ₽',
        hourAmount: 24,
        priceFewDays: 2440,
      },
    ],
  },
  {
    id: 2188,
    point: {
      lat: 59.92410894279909,
      lon: 30.284697227068065,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2440₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2440,
      },
      {
        code: 'per_3h',
        title: '1952₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1952,
      },
      {
        code: 'sum',
        title: '2440 ₽',
        hourAmount: 24,
        priceFewDays: 2440,
      },
    ],
  },
  {
    id: 2189,
    point: {
      lat: 59.93882,
      lon: 30.264502,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2684₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2684,
      },
      {
        code: 'per_3h',
        title: '2147₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2147,
      },
      {
        code: 'sum',
        title: '2684 ₽',
        hourAmount: 24,
        priceFewDays: 2684,
      },
    ],
  },
  {
    id: 2190,
    point: {
      lat: 55.801986,
      lon: 37.558688,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3335₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3335,
      },
      {
        code: 'per_3h',
        title: '2668₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2668,
      },
      {
        code: 'sum',
        title: '3335 ₽',
        hourAmount: 24,
        priceFewDays: 3335,
      },
    ],
  },
  {
    id: 2191,
    point: {
      lat: 55.78646,
      lon: 37.558634,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3565₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3565,
      },
      {
        code: 'per_3h',
        title: '2852₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2852,
      },
      {
        code: 'sum',
        title: '3565 ₽',
        hourAmount: 24,
        priceFewDays: 3565,
      },
    ],
  },
  {
    id: 2192,
    point: {
      lat: 55.806226,
      lon: 37.522701,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 2193,
    point: {
      lat: 55.775854,
      lon: 37.531702,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 2194,
    point: {
      lat: 55.799345,
      lon: 37.553558,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3335₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3335,
      },
      {
        code: 'per_3h',
        title: '2668₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2668,
      },
      {
        code: 'sum',
        title: '3335 ₽',
        hourAmount: 24,
        priceFewDays: 3335,
      },
    ],
  },
  {
    id: 2195,
    point: {
      lat: 55.782213,
      lon: 37.566395,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3680₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3680,
      },
      {
        code: 'per_3h',
        title: '2944₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2944,
      },
      {
        code: 'sum',
        title: '3680 ₽',
        hourAmount: 24,
        priceFewDays: 3680,
      },
    ],
  },
  {
    id: 2196,
    point: {
      lat: 55.799477,
      lon: 37.528567,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4140₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4140,
      },
      {
        code: 'per_3h',
        title: '3312₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3312,
      },
      {
        code: 'sum',
        title: '4140 ₽',
        hourAmount: 24,
        priceFewDays: 4140,
      },
    ],
  },
  {
    id: 2197,
    point: {
      lat: 44.719762,
      lon: 37.780904,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2082₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2082,
      },
      {
        code: 'per_3h',
        title: '1666₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1666,
      },
      {
        code: 'sum',
        title: '2082 ₽',
        hourAmount: 24,
        priceFewDays: 2082,
      },
    ],
  },
  {
    id: 2200,
    point: {
      lat: 44.70703207058536,
      lon: 37.78344888459583,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2082₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2082,
      },
      {
        code: 'per_3h',
        title: '1666₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1666,
      },
      {
        code: 'sum',
        title: '2082 ₽',
        hourAmount: 24,
        priceFewDays: 2082,
      },
    ],
  },
  {
    id: 2201,
    point: {
      lat: 44.554243,
      lon: 38.068212,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4743₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4743,
      },
      {
        code: 'per_3h',
        title: '3794₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3794,
      },
      {
        code: 'sum',
        title: '4743 ₽',
        hourAmount: 24,
        priceFewDays: 4743,
      },
    ],
  },
  {
    id: 2202,
    point: {
      lat: 43.579556,
      lon: 39.730006,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4199₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4199,
      },
      {
        code: 'per_3h',
        title: '3359₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3359,
      },
      {
        code: 'sum',
        title: '4199 ₽',
        hourAmount: 24,
        priceFewDays: 4199,
      },
    ],
  },
  {
    id: 2203,
    point: {
      lat: 44.71094201604267,
      lon: 37.77714247420504,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2193₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2193,
      },
      {
        code: 'per_3h',
        title: '1754₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1754,
      },
      {
        code: 'sum',
        title: '2193 ₽',
        hourAmount: 24,
        priceFewDays: 2193,
      },
    ],
  },
  {
    id: 2204,
    point: {
      lat: 44.707018681189844,
      lon: 37.78360981713672,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2057₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2057,
      },
      {
        code: 'per_3h',
        title: '1646₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1646,
      },
      {
        code: 'sum',
        title: '2057 ₽',
        hourAmount: 24,
        priceFewDays: 2057,
      },
    ],
  },
  {
    id: 2205,
    point: {
      lat: 44.70692112978545,
      lon: 37.78358835946459,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2021₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2021,
      },
      {
        code: 'per_3h',
        title: '1617₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1617,
      },
      {
        code: 'sum',
        title: '2021 ₽',
        hourAmount: 24,
        priceFewDays: 2021,
      },
    ],
  },
  {
    id: 2206,
    point: {
      lat: 44.707944,
      lon: 37.779619,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2402₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2402,
      },
      {
        code: 'per_3h',
        title: '1922₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1922,
      },
      {
        code: 'sum',
        title: '2402 ₽',
        hourAmount: 24,
        priceFewDays: 2402,
      },
    ],
  },
  {
    id: 2207,
    point: {
      lat: 44.549297,
      lon: 38.059939,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3314₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3314,
      },
      {
        code: 'per_3h',
        title: '2651₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2651,
      },
      {
        code: 'sum',
        title: '3314 ₽',
        hourAmount: 24,
        priceFewDays: 3314,
      },
    ],
  },
  {
    id: 2208,
    point: {
      lat: 44.71104529853602,
      lon: 37.77734900429918,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2402₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2402,
      },
      {
        code: 'per_3h',
        title: '1922₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1922,
      },
      {
        code: 'sum',
        title: '2402 ₽',
        hourAmount: 24,
        priceFewDays: 2402,
      },
    ],
  },
  {
    id: 2210,
    point: {
      lat: 44.709383693479246,
      lon: 37.78458544907379,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2821₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2821,
      },
      {
        code: 'per_3h',
        title: '2257₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2257,
      },
      {
        code: 'sum',
        title: '2821 ₽',
        hourAmount: 24,
        priceFewDays: 2821,
      },
    ],
  },
  {
    id: 2211,
    point: {
      lat: 44.69414420310737,
      lon: 37.761201999336244,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2200,
      },
      {
        code: 'per_3h',
        title: '1760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1760,
      },
      {
        code: 'sum',
        title: '2200 ₽',
        hourAmount: 24,
        priceFewDays: 2200,
      },
    ],
  },
  {
    id: 2212,
    point: {
      lat: 44.69124364465282,
      lon: 37.79161549468759,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2070₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2070,
      },
      {
        code: 'per_3h',
        title: '1656₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1656,
      },
      {
        code: 'sum',
        title: '2070 ₽',
        hourAmount: 24,
        priceFewDays: 2070,
      },
    ],
  },
  {
    id: 2213,
    point: {
      lat: 44.709276582608986,
      lon: 37.78466055092621,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2303₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2303,
      },
      {
        code: 'per_3h',
        title: '1842₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1842,
      },
      {
        code: 'sum',
        title: '2303 ₽',
        hourAmount: 24,
        priceFewDays: 2303,
      },
    ],
  },
  {
    id: 2214,
    point: {
      lat: 44.706936431977475,
      lon: 37.783751974214496,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1969₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1969,
      },
      {
        code: 'per_3h',
        title: '1575₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1575,
      },
      {
        code: 'sum',
        title: '1969 ₽',
        hourAmount: 24,
        priceFewDays: 1969,
      },
    ],
  },
  {
    id: 2215,
    point: {
      lat: 44.689485,
      lon: 37.793238,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2328₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2328,
      },
      {
        code: 'per_3h',
        title: '1862₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1862,
      },
      {
        code: 'sum',
        title: '2328 ₽',
        hourAmount: 24,
        priceFewDays: 2328,
      },
    ],
  },
  {
    id: 2218,
    point: {
      lat: 44.706831229325054,
      lon: 37.7836822367801,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1823₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1823,
      },
      {
        code: 'per_3h',
        title: '1458₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1458,
      },
      {
        code: 'sum',
        title: '1823 ₽',
        hourAmount: 24,
        priceFewDays: 1823,
      },
    ],
  },
  {
    id: 2219,
    point: {
      lat: 44.706827403770426,
      lon: 37.78382707606692,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2082₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2082,
      },
      {
        code: 'per_3h',
        title: '1666₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1666,
      },
      {
        code: 'sum',
        title: '2082 ₽',
        hourAmount: 24,
        priceFewDays: 2082,
      },
    ],
  },
  {
    id: 2220,
    point: {
      lat: 44.717949,
      lon: 37.781829,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1969₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1969,
      },
      {
        code: 'per_3h',
        title: '1575₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1575,
      },
      {
        code: 'sum',
        title: '1969 ₽',
        hourAmount: 24,
        priceFewDays: 1969,
      },
    ],
  },
  {
    id: 2222,
    point: {
      lat: 44.679295,
      lon: 37.792618,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2200,
      },
      {
        code: 'per_3h',
        title: '1760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1760,
      },
      {
        code: 'sum',
        title: '2200 ₽',
        hourAmount: 24,
        priceFewDays: 2200,
      },
    ],
  },
  {
    id: 2226,
    point: {
      lat: 44.694220731027734,
      lon: 37.76132538095093,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2205₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2205,
      },
      {
        code: 'per_3h',
        title: '1764₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1764,
      },
      {
        code: 'sum',
        title: '2205 ₽',
        hourAmount: 24,
        priceFewDays: 2205,
      },
    ],
  },
  {
    id: 2228,
    point: {
      lat: 44.719934,
      lon: 37.778847,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2082₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2082,
      },
      {
        code: 'per_3h',
        title: '1666₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1666,
      },
      {
        code: 'sum',
        title: '2082 ₽',
        hourAmount: 24,
        priceFewDays: 2082,
      },
    ],
  },
  {
    id: 2229,
    point: {
      lat: 44.573175,
      lon: 38.07344,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3930₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3930,
      },
      {
        code: 'per_3h',
        title: '3144₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3144,
      },
      {
        code: 'sum',
        title: '3930 ₽',
        hourAmount: 24,
        priceFewDays: 3930,
      },
    ],
  },
  {
    id: 2230,
    point: {
      lat: 44.576649,
      lon: 38.075911,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2439₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2439,
      },
      {
        code: 'per_3h',
        title: '1951₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1951,
      },
      {
        code: 'sum',
        title: '2439 ₽',
        hourAmount: 24,
        priceFewDays: 2439,
      },
    ],
  },
  {
    id: 2231,
    point: {
      lat: 44.675199,
      lon: 37.778748,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1589₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1589,
      },
      {
        code: 'per_3h',
        title: '1271₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1271,
      },
      {
        code: 'sum',
        title: '1589 ₽',
        hourAmount: 24,
        priceFewDays: 1589,
      },
    ],
  },
  {
    id: 2233,
    point: {
      lat: 44.679673,
      lon: 37.79242,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2032₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2032,
      },
      {
        code: 'per_3h',
        title: '1626₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1626,
      },
      {
        code: 'sum',
        title: '2032 ₽',
        hourAmount: 24,
        priceFewDays: 2032,
      },
    ],
  },
  {
    id: 2234,
    point: {
      lat: 44.694331696331396,
      lon: 37.76145412698364,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1712₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1712,
      },
      {
        code: 'per_3h',
        title: '1370₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1370,
      },
      {
        code: 'sum',
        title: '1712 ₽',
        hourAmount: 24,
        priceFewDays: 1712,
      },
    ],
  },
  {
    id: 2235,
    point: {
      lat: 44.71344,
      lon: 37.773879,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2057₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2057,
      },
      {
        code: 'per_3h',
        title: '1646₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1646,
      },
      {
        code: 'sum',
        title: '2057 ₽',
        hourAmount: 24,
        priceFewDays: 2057,
      },
    ],
  },
  {
    id: 2236,
    point: {
      lat: 44.70709961504732,
      lon: 37.78276731349177,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2070₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2070,
      },
      {
        code: 'per_3h',
        title: '1656₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1656,
      },
      {
        code: 'sum',
        title: '2070 ₽',
        hourAmount: 24,
        priceFewDays: 2070,
      },
    ],
  },
  {
    id: 2237,
    point: {
      lat: 44.70672411369935,
      lon: 37.783988008607814,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2932₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2932,
      },
      {
        code: 'per_3h',
        title: '2346₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2346,
      },
      {
        code: 'sum',
        title: '2932 ₽',
        hourAmount: 24,
        priceFewDays: 2932,
      },
    ],
  },
  {
    id: 2239,
    point: {
      lat: 44.69323064204985,
      lon: 37.763535474868746,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1601₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1601,
      },
      {
        code: 'per_3h',
        title: '1281₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1281,
      },
      {
        code: 'sum',
        title: '1601 ₽',
        hourAmount: 24,
        priceFewDays: 1601,
      },
    ],
  },
  {
    id: 2240,
    point: {
      lat: 44.662423,
      lon: 37.762731,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1700,
      },
      {
        code: 'per_3h',
        title: '1360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1360,
      },
      {
        code: 'sum',
        title: '1700 ₽',
        hourAmount: 24,
        priceFewDays: 1700,
      },
    ],
  },
  {
    id: 2241,
    point: {
      lat: 44.6910063954899,
      lon: 37.79183543582682,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1589₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1589,
      },
      {
        code: 'per_3h',
        title: '1271₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1271,
      },
      {
        code: 'sum',
        title: '1589 ₽',
        hourAmount: 24,
        priceFewDays: 1589,
      },
    ],
  },
  {
    id: 2242,
    point: {
      lat: 43.582185295162546,
      lon: 39.74298727546311,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1859₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1859,
      },
      {
        code: 'per_3h',
        title: '1487₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1487,
      },
      {
        code: 'sum',
        title: '1859 ₽',
        hourAmount: 24,
        priceFewDays: 1859,
      },
    ],
  },
  {
    id: 2243,
    point: {
      lat: 44.69366826420021,
      lon: 37.78864323677064,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1823₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1823,
      },
      {
        code: 'per_3h',
        title: '1458₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1458,
      },
      {
        code: 'sum',
        title: '1823 ₽',
        hourAmount: 24,
        priceFewDays: 1823,
      },
    ],
  },
  {
    id: 2244,
    point: {
      lat: 44.70694659337809,
      lon: 37.78296043254085,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2932₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2932,
      },
      {
        code: 'per_3h',
        title: '2346₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2346,
      },
      {
        code: 'sum',
        title: '2932 ₽',
        hourAmount: 24,
        priceFewDays: 2932,
      },
    ],
  },
  {
    id: 2245,
    point: {
      lat: 44.67308469391657,
      lon: 37.782107016532905,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1589₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1589,
      },
      {
        code: 'per_3h',
        title: '1271₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1271,
      },
      {
        code: 'sum',
        title: '1589 ₽',
        hourAmount: 24,
        priceFewDays: 1589,
      },
    ],
  },
  {
    id: 2247,
    point: {
      lat: 44.692840341873534,
      lon: 37.76326725396728,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1712₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1712,
      },
      {
        code: 'per_3h',
        title: '1370₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1370,
      },
      {
        code: 'sum',
        title: '1712 ₽',
        hourAmount: 24,
        priceFewDays: 1712,
      },
    ],
  },
  {
    id: 2248,
    point: {
      lat: 44.69335449606608,
      lon: 37.78907239021303,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1577₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1577,
      },
      {
        code: 'per_3h',
        title: '1262₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1262,
      },
      {
        code: 'sum',
        title: '1577 ₽',
        hourAmount: 24,
        priceFewDays: 1577,
      },
    ],
  },
  {
    id: 2249,
    point: {
      lat: 43.4620793860665,
      lon: 39.90909042824171,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1872₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1872,
      },
      {
        code: 'per_3h',
        title: '1498₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1498,
      },
      {
        code: 'sum',
        title: '1872 ₽',
        hourAmount: 24,
        priceFewDays: 1872,
      },
    ],
  },
  {
    id: 2250,
    point: {
      lat: 44.550308765698404,
      lon: 38.05834247420501,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1712₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1712,
      },
      {
        code: 'per_3h',
        title: '1370₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1370,
      },
      {
        code: 'sum',
        title: '1712 ₽',
        hourAmount: 24,
        priceFewDays: 1712,
      },
    ],
  },
  {
    id: 2251,
    point: {
      lat: 44.674686,
      lon: 37.776484,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2193₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2193,
      },
      {
        code: 'per_3h',
        title: '1754₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1754,
      },
      {
        code: 'sum',
        title: '2193 ₽',
        hourAmount: 24,
        priceFewDays: 2193,
      },
    ],
  },
  {
    id: 2252,
    point: {
      lat: 44.70664951519928,
      lon: 37.783915588964405,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2205₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2205,
      },
      {
        code: 'per_3h',
        title: '1764₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1764,
      },
      {
        code: 'sum',
        title: '2205 ₽',
        hourAmount: 24,
        priceFewDays: 2205,
      },
    ],
  },
  {
    id: 2253,
    point: {
      lat: 44.67308528394914,
      lon: 37.782536381892655,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1478₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1478,
      },
      {
        code: 'per_3h',
        title: '1182₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1182,
      },
      {
        code: 'sum',
        title: '1478 ₽',
        hourAmount: 24,
        priceFewDays: 1478,
      },
    ],
  },
  {
    id: 2254,
    point: {
      lat: 44.67474251813026,
      lon: 37.77535649140168,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1478₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1478,
      },
      {
        code: 'per_3h',
        title: '1182₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1182,
      },
      {
        code: 'sum',
        title: '1478 ₽',
        hourAmount: 24,
        priceFewDays: 1478,
      },
    ],
  },
  {
    id: 2255,
    point: {
      lat: 44.67093329468766,
      lon: 37.78092545767208,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2291₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2291,
      },
      {
        code: 'per_3h',
        title: '1833₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1833,
      },
      {
        code: 'sum',
        title: '2291 ₽',
        hourAmount: 24,
        priceFewDays: 2291,
      },
    ],
  },
  {
    id: 2256,
    point: {
      lat: 44.672094451810345,
      lon: 37.788825271163915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1478₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1478,
      },
      {
        code: 'per_3h',
        title: '1182₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1182,
      },
      {
        code: 'sum',
        title: '1478 ₽',
        hourAmount: 24,
        priceFewDays: 1478,
      },
    ],
  },
  {
    id: 2258,
    point: {
      lat: 43.58867352908021,
      lon: 39.73241216071319,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2416₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2416,
      },
      {
        code: 'per_3h',
        title: '1933₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1933,
      },
      {
        code: 'sum',
        title: '2416 ₽',
        hourAmount: 24,
        priceFewDays: 2416,
      },
    ],
  },
  {
    id: 2259,
    point: {
      lat: 44.668738,
      lon: 37.777383,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1810₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1810,
      },
      {
        code: 'per_3h',
        title: '1448₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1448,
      },
      {
        code: 'sum',
        title: '1810 ₽',
        hourAmount: 24,
        priceFewDays: 1810,
      },
    ],
  },
  {
    id: 2260,
    point: {
      lat: 44.71089993793663,
      lon: 37.777437517196674,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2328₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2328,
      },
      {
        code: 'per_3h',
        title: '1862₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1862,
      },
      {
        code: 'sum',
        title: '2328 ₽',
        hourAmount: 24,
        priceFewDays: 2328,
      },
    ],
  },
  {
    id: 2261,
    point: {
      lat: 44.67062705848892,
      lon: 37.78092545767208,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2328₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2328,
      },
      {
        code: 'per_3h',
        title: '1862₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1862,
      },
      {
        code: 'sum',
        title: '2328 ₽',
        hourAmount: 24,
        priceFewDays: 2328,
      },
    ],
  },
  {
    id: 2262,
    point: {
      lat: 44.96414070077559,
      lon: 37.280203905238515,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2464₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2464,
      },
      {
        code: 'per_3h',
        title: '1971₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1971,
      },
      {
        code: 'sum',
        title: '2464 ₽',
        hourAmount: 24,
        priceFewDays: 2464,
      },
    ],
  },
  {
    id: 2263,
    point: {
      lat: 43.58860626732962,
      lon: 39.7324899447746,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2200,
      },
      {
        code: 'per_3h',
        title: '1760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1760,
      },
      {
        code: 'sum',
        title: '2200 ₽',
        hourAmount: 24,
        priceFewDays: 2200,
      },
    ],
  },
  {
    id: 2264,
    point: {
      lat: 43.582098615474,
      lon: 39.74294079794928,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2277₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2277,
      },
      {
        code: 'per_3h',
        title: '1822₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1822,
      },
      {
        code: 'sum',
        title: '2277 ₽',
        hourAmount: 24,
        priceFewDays: 2277,
      },
    ],
  },
  {
    id: 2265,
    point: {
      lat: 43.57330201782383,
      lon: 39.73947781349171,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3150₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3150,
      },
      {
        code: 'per_3h',
        title: '2520₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2520,
      },
      {
        code: 'sum',
        title: '3150 ₽',
        hourAmount: 24,
        priceFewDays: 3150,
      },
    ],
  },
  {
    id: 2266,
    point: {
      lat: 44.6944924043227,
      lon: 37.7616096951065,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1823₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1823,
      },
      {
        code: 'per_3h',
        title: '1458₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1458,
      },
      {
        code: 'sum',
        title: '1823 ₽',
        hourAmount: 24,
        priceFewDays: 1823,
      },
    ],
  },
  {
    id: 2267,
    point: {
      lat: 44.70881739105967,
      lon: 37.7840432933235,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2303₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2303,
      },
      {
        code: 'per_3h',
        title: '1842₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1842,
      },
      {
        code: 'sum',
        title: '2303 ₽',
        hourAmount: 24,
        priceFewDays: 2303,
      },
    ],
  },
  {
    id: 2268,
    point: {
      lat: 43.5886871763827,
      lon: 39.7325583411045,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2079₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2079,
      },
      {
        code: 'per_3h',
        title: '1663₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1663,
      },
      {
        code: 'sum',
        title: '2079 ₽',
        hourAmount: 24,
        priceFewDays: 2079,
      },
    ],
  },
  {
    id: 2269,
    point: {
      lat: 44.69467058123383,
      lon: 37.76177841904411,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1823₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1823,
      },
      {
        code: 'per_3h',
        title: '1458₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1458,
      },
      {
        code: 'sum',
        title: '1823 ₽',
        hourAmount: 24,
        priceFewDays: 1823,
      },
    ],
  },
  {
    id: 2271,
    point: {
      lat: 44.673552,
      lon: 37.792097,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1700₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1700,
      },
      {
        code: 'per_3h',
        title: '1360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1360,
      },
      {
        code: 'sum',
        title: '1700 ₽',
        hourAmount: 24,
        priceFewDays: 1700,
      },
    ],
  },
  {
    id: 2272,
    point: {
      lat: 44.55048521935705,
      lon: 38.05871261904906,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1589₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1589,
      },
      {
        code: 'per_3h',
        title: '1271₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1271,
      },
      {
        code: 'sum',
        title: '1589 ₽',
        hourAmount: 24,
        priceFewDays: 1589,
      },
    ],
  },
  {
    id: 2274,
    point: {
      lat: 44.96416192177828,
      lon: 37.280575314155506,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2464₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2464,
      },
      {
        code: 'per_3h',
        title: '1971₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1971,
      },
      {
        code: 'sum',
        title: '2464 ₽',
        hourAmount: 24,
        priceFewDays: 2464,
      },
    ],
  },
  {
    id: 2275,
    point: {
      lat: 44.96418096374725,
      lon: 37.28048948346703,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2464₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2464,
      },
      {
        code: 'per_3h',
        title: '1971₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1971,
      },
      {
        code: 'sum',
        title: '2464 ₽',
        hourAmount: 24,
        priceFewDays: 2464,
      },
    ],
  },
  {
    id: 2276,
    point: {
      lat: 44.96407371899784,
      lon: 37.280458323801945,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2464₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2464,
      },
      {
        code: 'per_3h',
        title: '1971₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1971,
      },
      {
        code: 'sum',
        title: '2464 ₽',
        hourAmount: 24,
        priceFewDays: 2464,
      },
    ],
  },
  {
    id: 2278,
    point: {
      lat: 44.869597,
      lon: 37.346533,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1848₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1848,
      },
      {
        code: 'per_3h',
        title: '1478₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1478,
      },
      {
        code: 'sum',
        title: '1848 ₽',
        hourAmount: 24,
        priceFewDays: 1848,
      },
    ],
  },
  {
    id: 2279,
    point: {
      lat: 44.548211,
      lon: 38.060361,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2340₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2340,
      },
      {
        code: 'per_3h',
        title: '1872₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1872,
      },
      {
        code: 'sum',
        title: '2340 ₽',
        hourAmount: 24,
        priceFewDays: 2340,
      },
    ],
  },
  {
    id: 2280,
    point: {
      lat: 44.96428065949956,
      lon: 37.28043232663983,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2464₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2464,
      },
      {
        code: 'per_3h',
        title: '1971₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1971,
      },
      {
        code: 'sum',
        title: '2464 ₽',
        hourAmount: 24,
        priceFewDays: 2464,
      },
    ],
  },
  {
    id: 2281,
    point: {
      lat: 44.96433968945965,
      lon: 37.28038136466856,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2464₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2464,
      },
      {
        code: 'per_3h',
        title: '1971₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1971,
      },
      {
        code: 'sum',
        title: '2464 ₽',
        hourAmount: 24,
        priceFewDays: 2464,
      },
    ],
  },
  {
    id: 2282,
    point: {
      lat: 44.96422427642866,
      lon: 37.28033763133438,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2464₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2464,
      },
      {
        code: 'per_3h',
        title: '1971₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1971,
      },
      {
        code: 'sum',
        title: '2464 ₽',
        hourAmount: 24,
        priceFewDays: 2464,
      },
    ],
  },
  {
    id: 2283,
    point: {
      lat: 44.96426807289984,
      lon: 37.28026789390002,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2464₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2464,
      },
      {
        code: 'per_3h',
        title: '1971₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1971,
      },
      {
        code: 'sum',
        title: '2464 ₽',
        hourAmount: 24,
        priceFewDays: 2464,
      },
    ],
  },
  {
    id: 2284,
    point: {
      lat: 44.96421115605523,
      lon: 37.28015830768527,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2464₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2464,
      },
      {
        code: 'per_3h',
        title: '1971₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1971,
      },
      {
        code: 'sum',
        title: '2464 ₽',
        hourAmount: 24,
        priceFewDays: 2464,
      },
    ],
  },
  {
    id: 2285,
    point: {
      lat: 43.477991,
      lon: 39.900129,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1998₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1998,
      },
      {
        code: 'per_3h',
        title: '1598₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1598,
      },
      {
        code: 'sum',
        title: '1998 ₽',
        hourAmount: 24,
        priceFewDays: 1998,
      },
    ],
  },
  {
    id: 2287,
    point: {
      lat: 43.58871349617153,
      lon: 39.73267769940565,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2416₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2416,
      },
      {
        code: 'per_3h',
        title: '1933₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1933,
      },
      {
        code: 'sum',
        title: '2416 ₽',
        hourAmount: 24,
        priceFewDays: 2416,
      },
    ],
  },
  {
    id: 2288,
    point: {
      lat: 43.58861796503081,
      lon: 39.73269245155524,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2416₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2416,
      },
      {
        code: 'per_3h',
        title: '1933₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1933,
      },
      {
        code: 'sum',
        title: '2416 ₽',
        hourAmount: 24,
        priceFewDays: 2416,
      },
    ],
  },
  {
    id: 2289,
    point: {
      lat: 44.679269,
      lon: 37.77732,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2217₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2217,
      },
      {
        code: 'per_3h',
        title: '1774₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1774,
      },
      {
        code: 'sum',
        title: '2217 ₽',
        hourAmount: 24,
        priceFewDays: 2217,
      },
    ],
  },
  {
    id: 2290,
    point: {
      lat: 44.67502193874877,
      lon: 37.77544232209015,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1823₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1823,
      },
      {
        code: 'per_3h',
        title: '1458₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1458,
      },
      {
        code: 'sum',
        title: '1823 ₽',
        hourAmount: 24,
        priceFewDays: 1823,
      },
    ],
  },
  {
    id: 2291,
    point: {
      lat: 43.59744759225532,
      lon: 39.71581740895587,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2656₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2656,
      },
      {
        code: 'per_3h',
        title: '2125₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2125,
      },
      {
        code: 'sum',
        title: '2656 ₽',
        hourAmount: 24,
        priceFewDays: 2656,
      },
    ],
  },
  {
    id: 2292,
    point: {
      lat: 43.59728384842534,
      lon: 39.71553309480029,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2884₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2884,
      },
      {
        code: 'per_3h',
        title: '2307₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2307,
      },
      {
        code: 'sum',
        title: '2884 ₽',
        hourAmount: 24,
        priceFewDays: 2884,
      },
    ],
  },
  {
    id: 2293,
    point: {
      lat: 43.59735193960755,
      lon: 39.71523065463891,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2897₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2897,
      },
      {
        code: 'per_3h',
        title: '2318₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2318,
      },
      {
        code: 'sum',
        title: '2897 ₽',
        hourAmount: 24,
        priceFewDays: 2897,
      },
    ],
  },
  {
    id: 2294,
    point: {
      lat: 43.59732671088554,
      lon: 39.71568410289064,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2897₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2897,
      },
      {
        code: 'per_3h',
        title: '2318₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2318,
      },
      {
        code: 'sum',
        title: '2897 ₽',
        hourAmount: 24,
        priceFewDays: 2897,
      },
    ],
  },
  {
    id: 2295,
    point: {
      lat: 44.712800245349726,
      lon: 37.773260161376946,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2178₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2178,
      },
      {
        code: 'per_3h',
        title: '1742₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1742,
      },
      {
        code: 'sum',
        title: '2178 ₽',
        hourAmount: 24,
        priceFewDays: 2178,
      },
    ],
  },
  {
    id: 2296,
    point: {
      lat: 43.433688,
      lon: 39.928246,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2517₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2517,
      },
      {
        code: 'per_3h',
        title: '2014₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2014,
      },
      {
        code: 'sum',
        title: '2517 ₽',
        hourAmount: 24,
        priceFewDays: 2517,
      },
    ],
  },
  {
    id: 2297,
    point: {
      lat: 44.71241376496144,
      lon: 37.77292295379285,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2205₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2205,
      },
      {
        code: 'per_3h',
        title: '1764₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1764,
      },
      {
        code: 'sum',
        title: '2205 ₽',
        hourAmount: 24,
        priceFewDays: 2205,
      },
    ],
  },
  {
    id: 2298,
    point: {
      lat: 44.67030550872697,
      lon: 37.780936186508136,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1589₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1589,
      },
      {
        code: 'per_3h',
        title: '1271₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1271,
      },
      {
        code: 'sum',
        title: '1589 ₽',
        hourAmount: 24,
        priceFewDays: 1589,
      },
    ],
  },
  {
    id: 2299,
    point: {
      lat: 44.671642761957656,
      lon: 37.788835999999996,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1663₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1663,
      },
      {
        code: 'per_3h',
        title: '1330₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1330,
      },
      {
        code: 'sum',
        title: '1663 ₽',
        hourAmount: 24,
        priceFewDays: 1663,
      },
    ],
  },
  {
    id: 2302,
    point: {
      lat: 44.687114,
      lon: 37.787534,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1959₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1959,
      },
      {
        code: 'per_3h',
        title: '1567₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1567,
      },
      {
        code: 'sum',
        title: '1959 ₽',
        hourAmount: 24,
        priceFewDays: 1959,
      },
    ],
  },
  {
    id: 2303,
    point: {
      lat: 44.673116,
      lon: 37.790372,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1959₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1959,
      },
      {
        code: 'per_3h',
        title: '1567₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1567,
      },
      {
        code: 'sum',
        title: '1959 ₽',
        hourAmount: 24,
        priceFewDays: 1959,
      },
    ],
  },
  {
    id: 2304,
    point: {
      lat: 43.482734,
      lon: 39.894981,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4058₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4058,
      },
      {
        code: 'per_3h',
        title: '3246₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3246,
      },
      {
        code: 'sum',
        title: '4058 ₽',
        hourAmount: 24,
        priceFewDays: 4058,
      },
    ],
  },
  {
    id: 2305,
    point: {
      lat: 43.46195434660557,
      lon: 39.90898582209012,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2200,
      },
      {
        code: 'per_3h',
        title: '1760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1760,
      },
      {
        code: 'sum',
        title: '2200 ₽',
        hourAmount: 24,
        priceFewDays: 2200,
      },
    ],
  },
  {
    id: 2314,
    point: {
      lat: 45.04200050999945,
      lon: 38.99404401719663,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2714₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2714,
      },
      {
        code: 'per_3h',
        title: '2171₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2171,
      },
      {
        code: 'sum',
        title: '2714 ₽',
        hourAmount: 24,
        priceFewDays: 2714,
      },
    ],
  },
  {
    id: 2315,
    point: {
      lat: 45.050532,
      lon: 38.984521,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2714₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2714,
      },
      {
        code: 'per_3h',
        title: '2171₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2171,
      },
      {
        code: 'sum',
        title: '2714 ₽',
        hourAmount: 24,
        priceFewDays: 2714,
      },
    ],
  },
  {
    id: 2316,
    point: {
      lat: 45.041817956642596,
      lon: 38.9938401693115,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2714₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2714,
      },
      {
        code: 'per_3h',
        title: '2171₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2171,
      },
      {
        code: 'sum',
        title: '2714 ₽',
        hourAmount: 24,
        priceFewDays: 2714,
      },
    ],
  },
  {
    id: 2317,
    point: {
      lat: 45.042871,
      lon: 38.992722,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2714₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2714,
      },
      {
        code: 'per_3h',
        title: '2171₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2171,
      },
      {
        code: 'sum',
        title: '2714 ₽',
        hourAmount: 24,
        priceFewDays: 2714,
      },
    ],
  },
  {
    id: 2318,
    point: {
      lat: 45.05001,
      lon: 38.984368,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2714₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2714,
      },
      {
        code: 'per_3h',
        title: '2171₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2171,
      },
      {
        code: 'sum',
        title: '2714 ₽',
        hourAmount: 24,
        priceFewDays: 2714,
      },
    ],
  },
  {
    id: 2319,
    point: {
      lat: 45.042018,
      lon: 38.99327,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2714₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2714,
      },
      {
        code: 'per_3h',
        title: '2171₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2171,
      },
      {
        code: 'sum',
        title: '2714 ₽',
        hourAmount: 24,
        priceFewDays: 2714,
      },
    ],
  },
  {
    id: 2324,
    point: {
      lat: 57.163953,
      lon: 65.59597,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3333₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3333,
      },
      {
        code: 'per_3h',
        title: '2666₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2666,
      },
      {
        code: 'sum',
        title: '3333 ₽',
        hourAmount: 24,
        priceFewDays: 3333,
      },
    ],
  },
  {
    id: 2377,
    point: {
      lat: 55.127347,
      lon: 36.568592,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2950,
      },
      {
        code: 'per_3h',
        title: '2360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2360,
      },
      {
        code: 'sum',
        title: '2950 ₽',
        hourAmount: 24,
        priceFewDays: 2950,
      },
    ],
  },
  {
    id: 2378,
    point: {
      lat: 55.124058,
      lon: 36.578024,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2360₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2360,
      },
      {
        code: 'per_3h',
        title: '1888₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1888,
      },
      {
        code: 'sum',
        title: '2360 ₽',
        hourAmount: 24,
        priceFewDays: 2360,
      },
    ],
  },
  {
    id: 2379,
    point: {
      lat: 55.107102,
      lon: 36.620101,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4130₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4130,
      },
      {
        code: 'per_3h',
        title: '3304₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3304,
      },
      {
        code: 'sum',
        title: '4130 ₽',
        hourAmount: 24,
        priceFewDays: 4130,
      },
    ],
  },
  {
    id: 2380,
    point: {
      lat: 55.11285,
      lon: 36.622428,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2478₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2478,
      },
      {
        code: 'per_3h',
        title: '1982₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1982,
      },
      {
        code: 'sum',
        title: '2478 ₽',
        hourAmount: 24,
        priceFewDays: 2478,
      },
    ],
  },
  {
    id: 2382,
    point: {
      lat: 55.846517,
      lon: 37.365469,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3540₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3540,
      },
      {
        code: 'per_3h',
        title: '2832₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2832,
      },
      {
        code: 'sum',
        title: '3540 ₽',
        hourAmount: 24,
        priceFewDays: 3540,
      },
    ],
  },
  {
    id: 2383,
    point: {
      lat: 55.846037,
      lon: 37.366493,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4720₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4720,
      },
      {
        code: 'per_3h',
        title: '3776₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3776,
      },
      {
        code: 'sum',
        title: '4720 ₽',
        hourAmount: 24,
        priceFewDays: 4720,
      },
    ],
  },
  {
    id: 2385,
    point: {
      lat: 55.730639,
      lon: 49.169215,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4025₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4025,
      },
      {
        code: 'per_3h',
        title: '3220₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3220,
      },
      {
        code: 'sum',
        title: '4025 ₽',
        hourAmount: 24,
        priceFewDays: 4025,
      },
    ],
  },
  {
    id: 2386,
    point: {
      lat: 55.733457,
      lon: 49.17721,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 2391,
    point: {
      lat: 43.917766,
      lon: 39.338547,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1770₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1770,
      },
      {
        code: 'per_3h',
        title: '1416₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1416,
      },
      {
        code: 'sum',
        title: '1770 ₽',
        hourAmount: 24,
        priceFewDays: 1770,
      },
    ],
  },
  {
    id: 2392,
    point: {
      lat: 43.90972,
      lon: 39.3296,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2360₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2360,
      },
      {
        code: 'per_3h',
        title: '1888₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1888,
      },
      {
        code: 'sum',
        title: '2360 ₽',
        hourAmount: 24,
        priceFewDays: 2360,
      },
    ],
  },
  {
    id: 2393,
    point: {
      lat: 43.915532,
      lon: 39.342311,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2950,
      },
      {
        code: 'per_3h',
        title: '2360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2360,
      },
      {
        code: 'sum',
        title: '2950 ₽',
        hourAmount: 24,
        priceFewDays: 2950,
      },
    ],
  },
  {
    id: 2405,
    point: {
      lat: 55.355387,
      lon: 86.14425,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2750₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2750,
      },
      {
        code: 'per_3h',
        title: '2200₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2200,
      },
      {
        code: 'sum',
        title: '2750 ₽',
        hourAmount: 24,
        priceFewDays: 2750,
      },
    ],
  },
  {
    id: 2406,
    point: {
      lat: 55.3568790180766,
      lon: 86.14298317790974,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2420₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2420,
      },
      {
        code: 'per_3h',
        title: '1936₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1936,
      },
      {
        code: 'sum',
        title: '2420 ₽',
        hourAmount: 24,
        priceFewDays: 2420,
      },
    ],
  },
  {
    id: 2408,
    point: {
      lat: 55.356912,
      lon: 86.141977,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2750₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2750,
      },
      {
        code: 'per_3h',
        title: '2200₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2200,
      },
      {
        code: 'sum',
        title: '2750 ₽',
        hourAmount: 24,
        priceFewDays: 2750,
      },
    ],
  },
  {
    id: 2412,
    point: {
      lat: 59.731151,
      lon: 30.413713,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3605₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3605,
      },
      {
        code: 'per_3h',
        title: '2884₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2884,
      },
      {
        code: 'sum',
        title: '3605 ₽',
        hourAmount: 24,
        priceFewDays: 3605,
      },
    ],
  },
  {
    id: 2417,
    point: {
      lat: 44.061662,
      lon: 43.059782,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2950,
      },
      {
        code: 'per_3h',
        title: '2360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2360,
      },
      {
        code: 'sum',
        title: '2950 ₽',
        hourAmount: 24,
        priceFewDays: 2950,
      },
    ],
  },
  {
    id: 2418,
    point: {
      lat: 44.048698,
      lon: 43.060258,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2950,
      },
      {
        code: 'per_3h',
        title: '2360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2360,
      },
      {
        code: 'sum',
        title: '2950 ₽',
        hourAmount: 24,
        priceFewDays: 2950,
      },
    ],
  },
  {
    id: 2419,
    point: {
      lat: 44.05944,
      lon: 43.052802,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2950,
      },
      {
        code: 'per_3h',
        title: '2360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2360,
      },
      {
        code: 'sum',
        title: '2950 ₽',
        hourAmount: 24,
        priceFewDays: 2950,
      },
    ],
  },
  {
    id: 2423,
    point: {
      lat: 54.488389,
      lon: 36.197273,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2640₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2640,
      },
      {
        code: 'per_3h',
        title: '2112₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2112,
      },
      {
        code: 'sum',
        title: '2640 ₽',
        hourAmount: 24,
        priceFewDays: 2640,
      },
    ],
  },
  {
    id: 2424,
    point: {
      lat: 54.494173,
      lon: 36.210119,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2280₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2280,
      },
      {
        code: 'per_3h',
        title: '1824₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1824,
      },
      {
        code: 'sum',
        title: '2280 ₽',
        hourAmount: 24,
        priceFewDays: 2280,
      },
    ],
  },
  {
    id: 2425,
    point: {
      lat: 54.483687,
      lon: 36.192611,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2280₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2280,
      },
      {
        code: 'per_3h',
        title: '1824₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1824,
      },
      {
        code: 'sum',
        title: '2280 ₽',
        hourAmount: 24,
        priceFewDays: 2280,
      },
    ],
  },
  {
    id: 2427,
    point: {
      lat: 54.498549,
      lon: 36.184194,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2280₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2280,
      },
      {
        code: 'per_3h',
        title: '1824₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1824,
      },
      {
        code: 'sum',
        title: '2280 ₽',
        hourAmount: 24,
        priceFewDays: 2280,
      },
    ],
  },
  {
    id: 2428,
    point: {
      lat: 54.49857,
      lon: 36.1791,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2400,
      },
      {
        code: 'per_3h',
        title: '1920₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1920,
      },
      {
        code: 'sum',
        title: '2400 ₽',
        hourAmount: 24,
        priceFewDays: 2400,
      },
    ],
  },
  {
    id: 2429,
    point: {
      lat: 56.317452,
      lon: 44.054603,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2058₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2058,
      },
      {
        code: 'per_3h',
        title: '1646₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1646,
      },
      {
        code: 'sum',
        title: '2058 ₽',
        hourAmount: 24,
        priceFewDays: 2058,
      },
    ],
  },
  {
    id: 2430,
    point: {
      lat: 59.917804,
      lon: 30.278202,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2400,
      },
      {
        code: 'per_3h',
        title: '1920₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1920,
      },
      {
        code: 'sum',
        title: '2400 ₽',
        hourAmount: 24,
        priceFewDays: 2400,
      },
    ],
  },
  {
    id: 2445,
    point: {
      lat: 43.591369,
      lon: 39.733033,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2950,
      },
      {
        code: 'per_3h',
        title: '2360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2360,
      },
      {
        code: 'sum',
        title: '2950 ₽',
        hourAmount: 24,
        priceFewDays: 2950,
      },
    ],
  },
  {
    id: 2446,
    point: {
      lat: 43.58702,
      lon: 39.723708,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4248₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4248,
      },
      {
        code: 'per_3h',
        title: '3398₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3398,
      },
      {
        code: 'sum',
        title: '4248 ₽',
        hourAmount: 24,
        priceFewDays: 4248,
      },
    ],
  },
  {
    id: 2447,
    point: {
      lat: 43.585055,
      lon: 39.727697,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4720₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4720,
      },
      {
        code: 'per_3h',
        title: '3776₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3776,
      },
      {
        code: 'sum',
        title: '4720 ₽',
        hourAmount: 24,
        priceFewDays: 4720,
      },
    ],
  },
  {
    id: 2448,
    point: {
      lat: 43.593478,
      lon: 39.725829,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4720₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4720,
      },
      {
        code: 'per_3h',
        title: '3776₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3776,
      },
      {
        code: 'sum',
        title: '4720 ₽',
        hourAmount: 24,
        priceFewDays: 4720,
      },
    ],
  },
  {
    id: 2449,
    point: {
      lat: 43.603342,
      lon: 39.725164,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2950,
      },
      {
        code: 'per_3h',
        title: '2360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2360,
      },
      {
        code: 'sum',
        title: '2950 ₽',
        hourAmount: 24,
        priceFewDays: 2950,
      },
    ],
  },
  {
    id: 2450,
    point: {
      lat: 43.593478,
      lon: 39.725829,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3068₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3068,
      },
      {
        code: 'per_3h',
        title: '2454₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2454,
      },
      {
        code: 'sum',
        title: '3068 ₽',
        hourAmount: 24,
        priceFewDays: 3068,
      },
    ],
  },
  {
    id: 2451,
    point: {
      lat: 55.176445,
      lon: 61.452671,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1725₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1725,
      },
      {
        code: 'per_3h',
        title: '1380₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1380,
      },
      {
        code: 'sum',
        title: '1725 ₽',
        hourAmount: 24,
        priceFewDays: 1725,
      },
    ],
  },
  {
    id: 2452,
    point: {
      lat: 55.144459,
      lon: 61.412121,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 2453,
    point: {
      lat: 55.147407,
      lon: 61.410423,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1840₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1840,
      },
      {
        code: 'per_3h',
        title: '1472₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1472,
      },
      {
        code: 'sum',
        title: '1840 ₽',
        hourAmount: 24,
        priceFewDays: 1840,
      },
    ],
  },
  {
    id: 2454,
    point: {
      lat: 55.138073,
      lon: 61.39949,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 2455,
    point: {
      lat: 55.186016,
      lon: 61.470305,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1725₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1725,
      },
      {
        code: 'per_3h',
        title: '1380₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1380,
      },
      {
        code: 'sum',
        title: '1725 ₽',
        hourAmount: 24,
        priceFewDays: 1725,
      },
    ],
  },
  {
    id: 2456,
    point: {
      lat: 55.140888,
      lon: 61.383797,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1955₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1955,
      },
      {
        code: 'per_3h',
        title: '1564₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1564,
      },
      {
        code: 'sum',
        title: '1955 ₽',
        hourAmount: 24,
        priceFewDays: 1955,
      },
    ],
  },
  {
    id: 2457,
    point: {
      lat: 55.135778,
      lon: 61.427374,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2185₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2185,
      },
      {
        code: 'per_3h',
        title: '1748₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1748,
      },
      {
        code: 'sum',
        title: '2185 ₽',
        hourAmount: 24,
        priceFewDays: 2185,
      },
    ],
  },
  {
    id: 2462,
    point: {
      lat: 54.14917294393017,
      lon: 37.580027380950945,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5400,
      },
      {
        code: 'per_3h',
        title: '4320₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4320,
      },
      {
        code: 'sum',
        title: '5400 ₽',
        hourAmount: 24,
        priceFewDays: 5400,
      },
    ],
  },
  {
    id: 2464,
    point: {
      lat: 54.149349291980876,
      lon: 37.58047799206544,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3600₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3600,
      },
      {
        code: 'per_3h',
        title: '2880₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2880,
      },
      {
        code: 'sum',
        title: '3600 ₽',
        hourAmount: 24,
        priceFewDays: 3600,
      },
    ],
  },
  {
    id: 2488,
    point: {
      lat: 61.784141,
      lon: 34.323747,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2925₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2925,
      },
      {
        code: 'per_3h',
        title: '2340₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2340,
      },
      {
        code: 'sum',
        title: '2925 ₽',
        hourAmount: 24,
        priceFewDays: 2925,
      },
    ],
  },
  {
    id: 2491,
    point: {
      lat: 61.781163,
      lon: 34.332559,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2223₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2223,
      },
      {
        code: 'per_3h',
        title: '1778₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1778,
      },
      {
        code: 'sum',
        title: '2223 ₽',
        hourAmount: 24,
        priceFewDays: 2223,
      },
    ],
  },
  {
    id: 2493,
    point: {
      lat: 61.754053,
      lon: 34.35958,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2913₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2913,
      },
      {
        code: 'per_3h',
        title: '2330₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2330,
      },
      {
        code: 'sum',
        title: '2913 ₽',
        hourAmount: 24,
        priceFewDays: 2913,
      },
    ],
  },
  {
    id: 2494,
    point: {
      lat: 61.754032,
      lon: 34.365177,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2679₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2679,
      },
      {
        code: 'per_3h',
        title: '2143₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2143,
      },
      {
        code: 'sum',
        title: '2679 ₽',
        hourAmount: 24,
        priceFewDays: 2679,
      },
    ],
  },
  {
    id: 2495,
    point: {
      lat: 61.775782,
      lon: 34.390348,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3042₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3042,
      },
      {
        code: 'per_3h',
        title: '2434₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2434,
      },
      {
        code: 'sum',
        title: '3042 ₽',
        hourAmount: 24,
        priceFewDays: 3042,
      },
    ],
  },
  {
    id: 2496,
    point: {
      lat: 61.767824,
      lon: 34.38662,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2340₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2340,
      },
      {
        code: 'per_3h',
        title: '1872₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1872,
      },
      {
        code: 'sum',
        title: '2340 ₽',
        hourAmount: 24,
        priceFewDays: 2340,
      },
    ],
  },
  {
    id: 2509,
    point: {
      lat: 55.675519,
      lon: 37.55443,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5310₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5310,
      },
      {
        code: 'per_3h',
        title: '4248₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4248,
      },
      {
        code: 'sum',
        title: '5310 ₽',
        hourAmount: 24,
        priceFewDays: 5310,
      },
    ],
  },
  {
    id: 2511,
    point: {
      lat: 55.677103,
      lon: 37.559802,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5310₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5310,
      },
      {
        code: 'per_3h',
        title: '4248₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4248,
      },
      {
        code: 'sum',
        title: '5310 ₽',
        hourAmount: 24,
        priceFewDays: 5310,
      },
    ],
  },
  {
    id: 2512,
    point: {
      lat: 55.690608,
      lon: 37.574525,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5310₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5310,
      },
      {
        code: 'per_3h',
        title: '4248₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4248,
      },
      {
        code: 'sum',
        title: '5310 ₽',
        hourAmount: 24,
        priceFewDays: 5310,
      },
    ],
  },
  {
    id: 2513,
    point: {
      lat: 55.69419,
      lon: 37.567842,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4956₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4956,
      },
      {
        code: 'per_3h',
        title: '3965₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3965,
      },
      {
        code: 'sum',
        title: '4956 ₽',
        hourAmount: 24,
        priceFewDays: 4956,
      },
    ],
  },
  {
    id: 2523,
    point: {
      lat: 56.30719450055345,
      lon: 44.000322442443256,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6000,
      },
      {
        code: 'per_3h',
        title: '4800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4800,
      },
      {
        code: 'sum',
        title: '6000 ₽',
        hourAmount: 24,
        priceFewDays: 6000,
      },
    ],
  },
  {
    id: 2524,
    point: {
      lat: 56.307084953767934,
      lon: 44.00045645459297,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '7200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 7200,
      },
      {
        code: 'per_3h',
        title: '5760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5760,
      },
      {
        code: 'sum',
        title: '7200 ₽',
        hourAmount: 24,
        priceFewDays: 7200,
      },
    ],
  },
  {
    id: 2525,
    point: {
      lat: 56.307186342907976,
      lon: 44.000569107371604,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5400,
      },
      {
        code: 'per_3h',
        title: '4320₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4320,
      },
      {
        code: 'sum',
        title: '5400 ₽',
        hourAmount: 24,
        priceFewDays: 5400,
      },
    ],
  },
  {
    id: 2526,
    point: {
      lat: 56.316754,
      lon: 43.995386,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3240₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3240,
      },
      {
        code: 'per_3h',
        title: '2592₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2592,
      },
      {
        code: 'sum',
        title: '3240 ₽',
        hourAmount: 24,
        priceFewDays: 3240,
      },
    ],
  },
  {
    id: 2529,
    point: {
      lat: 58.010455,
      lon: 56.229443,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2478₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2478,
      },
      {
        code: 'per_3h',
        title: '1982₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1982,
      },
      {
        code: 'sum',
        title: '2478 ₽',
        hourAmount: 24,
        priceFewDays: 2478,
      },
    ],
  },
  {
    id: 2531,
    point: {
      lat: 58.009362948665625,
      lon: 56.20785352002364,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3068₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3068,
      },
      {
        code: 'per_3h',
        title: '2454₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2454,
      },
      {
        code: 'sum',
        title: '3068 ₽',
        hourAmount: 24,
        priceFewDays: 3068,
      },
    ],
  },
  {
    id: 2532,
    point: {
      lat: 58.011909,
      lon: 56.214774,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2360₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2360,
      },
      {
        code: 'per_3h',
        title: '1888₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1888,
      },
      {
        code: 'sum',
        title: '2360 ₽',
        hourAmount: 24,
        priceFewDays: 2360,
      },
    ],
  },
  {
    id: 2533,
    point: {
      lat: 58.014488,
      lon: 56.222266,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4956₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4956,
      },
      {
        code: 'per_3h',
        title: '3965₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3965,
      },
      {
        code: 'sum',
        title: '4956 ₽',
        hourAmount: 24,
        priceFewDays: 4956,
      },
    ],
  },
  {
    id: 2534,
    point: {
      lat: 58.010455,
      lon: 56.229443,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2478₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2478,
      },
      {
        code: 'per_3h',
        title: '1982₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1982,
      },
      {
        code: 'sum',
        title: '2478 ₽',
        hourAmount: 24,
        priceFewDays: 2478,
      },
    ],
  },
  {
    id: 2535,
    point: {
      lat: 58.010455,
      lon: 56.229443,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2478₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2478,
      },
      {
        code: 'per_3h',
        title: '1982₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1982,
      },
      {
        code: 'sum',
        title: '2478 ₽',
        hourAmount: 24,
        priceFewDays: 2478,
      },
    ],
  },
  {
    id: 2536,
    point: {
      lat: 58.009308849150486,
      lon: 56.207547748195935,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2714₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2714,
      },
      {
        code: 'per_3h',
        title: '2171₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2171,
      },
      {
        code: 'sum',
        title: '2714 ₽',
        hourAmount: 24,
        priceFewDays: 2714,
      },
    ],
  },
  {
    id: 2538,
    point: {
      lat: 58.000374,
      lon: 56.193583,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3540₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3540,
      },
      {
        code: 'per_3h',
        title: '2832₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2832,
      },
      {
        code: 'sum',
        title: '3540 ₽',
        hourAmount: 24,
        priceFewDays: 3540,
      },
    ],
  },
  {
    id: 2539,
    point: {
      lat: 57.98110556657771,
      lon: 56.19801033862296,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2478₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2478,
      },
      {
        code: 'per_3h',
        title: '1982₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1982,
      },
      {
        code: 'sum',
        title: '2478 ₽',
        hourAmount: 24,
        priceFewDays: 2478,
      },
    ],
  },
  {
    id: 2540,
    point: {
      lat: 57.997488,
      lon: 56.207776,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2537₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2537,
      },
      {
        code: 'per_3h',
        title: '2030₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2030,
      },
      {
        code: 'sum',
        title: '2537 ₽',
        hourAmount: 24,
        priceFewDays: 2537,
      },
    ],
  },
  {
    id: 2541,
    point: {
      lat: 58.010455,
      lon: 56.229443,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2478₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2478,
      },
      {
        code: 'per_3h',
        title: '1982₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1982,
      },
      {
        code: 'sum',
        title: '2478 ₽',
        hourAmount: 24,
        priceFewDays: 2478,
      },
    ],
  },
  {
    id: 2542,
    point: {
      lat: 57.993615,
      lon: 56.224341,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2478₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2478,
      },
      {
        code: 'per_3h',
        title: '1982₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1982,
      },
      {
        code: 'sum',
        title: '2478 ₽',
        hourAmount: 24,
        priceFewDays: 2478,
      },
    ],
  },
  {
    id: 2544,
    point: {
      lat: 58.007389,
      lon: 56.245748,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3894₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3894,
      },
      {
        code: 'per_3h',
        title: '3115₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3115,
      },
      {
        code: 'sum',
        title: '3894 ₽',
        hourAmount: 24,
        priceFewDays: 3894,
      },
    ],
  },
  {
    id: 2545,
    point: {
      lat: 57.99735,
      lon: 56.208908,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2714₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2714,
      },
      {
        code: 'per_3h',
        title: '2171₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2171,
      },
      {
        code: 'sum',
        title: '2714 ₽',
        hourAmount: 24,
        priceFewDays: 2714,
      },
    ],
  },
  {
    id: 2546,
    point: {
      lat: 58.00390743561529,
      lon: 56.22504904780939,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3540₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3540,
      },
      {
        code: 'per_3h',
        title: '2832₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2832,
      },
      {
        code: 'sum',
        title: '3540 ₽',
        hourAmount: 24,
        priceFewDays: 3540,
      },
    ],
  },
  {
    id: 2547,
    point: {
      lat: 57.982394,
      lon: 56.217783,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3186₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3186,
      },
      {
        code: 'per_3h',
        title: '2549₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2549,
      },
      {
        code: 'sum',
        title: '3186 ₽',
        hourAmount: 24,
        priceFewDays: 3186,
      },
    ],
  },
  {
    id: 2548,
    point: {
      lat: 58.012529,
      lon: 56.250464,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2832₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2832,
      },
      {
        code: 'per_3h',
        title: '2266₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2266,
      },
      {
        code: 'sum',
        title: '2832 ₽',
        hourAmount: 24,
        priceFewDays: 2832,
      },
    ],
  },
  {
    id: 2552,
    point: {
      lat: 61.797694,
      lon: 34.349807,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 2555,
    point: {
      lat: 61.776845,
      lon: 34.358844,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1840₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1840,
      },
      {
        code: 'per_3h',
        title: '1472₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1472,
      },
      {
        code: 'sum',
        title: '1840 ₽',
        hourAmount: 24,
        priceFewDays: 1840,
      },
    ],
  },
  {
    id: 2556,
    point: {
      lat: 61.778636,
      lon: 34.351163,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 2675,
    point: {
      lat: 56.106153,
      lon: 40.339791,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1380₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1380,
      },
      {
        code: 'per_3h',
        title: '1104₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1104,
      },
      {
        code: 'sum',
        title: '1380 ₽',
        hourAmount: 24,
        priceFewDays: 1380,
      },
    ],
  },
  {
    id: 2677,
    point: {
      lat: 56.111644,
      lon: 40.346223,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1437₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1437,
      },
      {
        code: 'per_3h',
        title: '1150₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1150,
      },
      {
        code: 'sum',
        title: '1437 ₽',
        hourAmount: 24,
        priceFewDays: 1437,
      },
    ],
  },
  {
    id: 2688,
    point: {
      lat: 43.424535,
      lon: 39.924365,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2949₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2949,
      },
      {
        code: 'per_3h',
        title: '2359₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2359,
      },
      {
        code: 'sum',
        title: '2949 ₽',
        hourAmount: 24,
        priceFewDays: 2949,
      },
    ],
  },
  {
    id: 2690,
    point: {
      lat: 57.630838,
      lon: 39.868517,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2240₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2240,
      },
      {
        code: 'per_3h',
        title: '1792₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1792,
      },
      {
        code: 'sum',
        title: '2240 ₽',
        hourAmount: 24,
        priceFewDays: 2240,
      },
    ],
  },
  {
    id: 2691,
    point: {
      lat: 57.633652,
      lon: 39.883474,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2240₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2240,
      },
      {
        code: 'per_3h',
        title: '1792₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1792,
      },
      {
        code: 'sum',
        title: '2240 ₽',
        hourAmount: 24,
        priceFewDays: 2240,
      },
    ],
  },
  {
    id: 2723,
    point: {
      lat: 54.72659,
      lon: 20.463676,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2340₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2340,
      },
      {
        code: 'per_3h',
        title: '1872₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1872,
      },
      {
        code: 'sum',
        title: '2340 ₽',
        hourAmount: 24,
        priceFewDays: 2340,
      },
    ],
  },
  {
    id: 2724,
    point: {
      lat: 54.726642,
      lon: 20.51002,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2574₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2574,
      },
      {
        code: 'per_3h',
        title: '2059₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2059,
      },
      {
        code: 'sum',
        title: '2574 ₽',
        hourAmount: 24,
        priceFewDays: 2574,
      },
    ],
  },
  {
    id: 2725,
    point: {
      lat: 54.73089886102051,
      lon: 20.48658654166412,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2223₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2223,
      },
      {
        code: 'per_3h',
        title: '1778₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1778,
      },
      {
        code: 'sum',
        title: '2223 ₽',
        hourAmount: 24,
        priceFewDays: 2223,
      },
    ],
  },
  {
    id: 2726,
    point: {
      lat: 54.708773,
      lon: 20.501064,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2340₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2340,
      },
      {
        code: 'per_3h',
        title: '1872₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1872,
      },
      {
        code: 'sum',
        title: '2340 ₽',
        hourAmount: 24,
        priceFewDays: 2340,
      },
    ],
  },
  {
    id: 2730,
    point: {
      lat: 44.55317,
      lon: 38.065931,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6490₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6490,
      },
      {
        code: 'per_3h',
        title: '5192₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5192,
      },
      {
        code: 'sum',
        title: '6490 ₽',
        hourAmount: 24,
        priceFewDays: 6490,
      },
    ],
  },
  {
    id: 2731,
    point: {
      lat: 60.12839196391644,
      lon: 29.94048204863762,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6589₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6589,
      },
      {
        code: 'per_3h',
        title: '5271₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5271,
      },
      {
        code: 'sum',
        title: '6589 ₽',
        hourAmount: 24,
        priceFewDays: 6589,
      },
    ],
  },
  {
    id: 2732,
    point: {
      lat: 60.12809489786675,
      lon: 29.940836100227592,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6589₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6589,
      },
      {
        code: 'per_3h',
        title: '5271₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5271,
      },
      {
        code: 'sum',
        title: '6589 ₽',
        hourAmount: 24,
        priceFewDays: 6589,
      },
    ],
  },
  {
    id: 2733,
    point: {
      lat: 52.271031,
      lon: 104.300073,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6490₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6490,
      },
      {
        code: 'per_3h',
        title: '5192₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5192,
      },
      {
        code: 'sum',
        title: '6490 ₽',
        hourAmount: 24,
        priceFewDays: 6490,
      },
    ],
  },
  {
    id: 2735,
    point: {
      lat: 52.26878262471732,
      lon: 104.30363026014696,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5074₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5074,
      },
      {
        code: 'per_3h',
        title: '4059₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4059,
      },
      {
        code: 'sum',
        title: '5074 ₽',
        hourAmount: 24,
        priceFewDays: 5074,
      },
    ],
  },
  {
    id: 2736,
    point: {
      lat: 52.270766,
      lon: 104.29842,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4071₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4071,
      },
      {
        code: 'per_3h',
        title: '3257₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3257,
      },
      {
        code: 'sum',
        title: '4071 ₽',
        hourAmount: 24,
        priceFewDays: 4071,
      },
    ],
  },
  {
    id: 2738,
    point: {
      lat: 52.270348,
      lon: 104.300513,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3953₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3953,
      },
      {
        code: 'per_3h',
        title: '3162₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3162,
      },
      {
        code: 'sum',
        title: '3953 ₽',
        hourAmount: 24,
        priceFewDays: 3953,
      },
    ],
  },
  {
    id: 2740,
    point: {
      lat: 52.251253,
      lon: 104.324399,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2832₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2832,
      },
      {
        code: 'per_3h',
        title: '2266₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2266,
      },
      {
        code: 'sum',
        title: '2832 ₽',
        hourAmount: 24,
        priceFewDays: 2832,
      },
    ],
  },
  {
    id: 2741,
    point: {
      lat: 52.26980321740206,
      lon: 104.30318788161462,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3894₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3894,
      },
      {
        code: 'per_3h',
        title: '3115₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3115,
      },
      {
        code: 'sum',
        title: '3894 ₽',
        hourAmount: 24,
        priceFewDays: 3894,
      },
    ],
  },
  {
    id: 2742,
    point: {
      lat: 52.278134,
      lon: 104.311095,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3363₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3363,
      },
      {
        code: 'per_3h',
        title: '2690₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2690,
      },
      {
        code: 'sum',
        title: '3363 ₽',
        hourAmount: 24,
        priceFewDays: 3363,
      },
    ],
  },
  {
    id: 2743,
    point: {
      lat: 52.270733,
      lon: 104.300971,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2950,
      },
      {
        code: 'per_3h',
        title: '2360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2360,
      },
      {
        code: 'sum',
        title: '2950 ₽',
        hourAmount: 24,
        priceFewDays: 2950,
      },
    ],
  },
  {
    id: 2744,
    point: {
      lat: 52.265696,
      lon: 104.328756,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3304₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3304,
      },
      {
        code: 'per_3h',
        title: '2643₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2643,
      },
      {
        code: 'sum',
        title: '3304 ₽',
        hourAmount: 24,
        priceFewDays: 3304,
      },
    ],
  },
  {
    id: 2745,
    point: {
      lat: 52.2688138900061,
      lon: 104.30352565399537,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5852₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5852,
      },
      {
        code: 'per_3h',
        title: '4682₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4682,
      },
      {
        code: 'sum',
        title: '5852 ₽',
        hourAmount: 24,
        priceFewDays: 5852,
      },
    ],
  },
  {
    id: 2746,
    point: {
      lat: 52.273345,
      lon: 104.299175,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5243₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5243,
      },
      {
        code: 'per_3h',
        title: '4194₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4194,
      },
      {
        code: 'sum',
        title: '5243 ₽',
        hourAmount: 24,
        priceFewDays: 5243,
      },
    ],
  },
  {
    id: 2747,
    point: {
      lat: 52.272186994829134,
      lon: 104.29780011751862,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4106₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4106,
      },
      {
        code: 'per_3h',
        title: '3285₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3285,
      },
      {
        code: 'sum',
        title: '4106 ₽',
        hourAmount: 24,
        priceFewDays: 4106,
      },
    ],
  },
  {
    id: 2748,
    point: {
      lat: 52.269339,
      lon: 104.303352,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3776₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3776,
      },
      {
        code: 'per_3h',
        title: '3021₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3021,
      },
      {
        code: 'sum',
        title: '3776 ₽',
        hourAmount: 24,
        priceFewDays: 3776,
      },
    ],
  },
  {
    id: 2749,
    point: {
      lat: 52.26989865653227,
      lon: 104.30315569510647,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3932₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3932,
      },
      {
        code: 'per_3h',
        title: '3146₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3146,
      },
      {
        code: 'sum',
        title: '3932 ₽',
        hourAmount: 24,
        priceFewDays: 3932,
      },
    ],
  },
  {
    id: 2750,
    point: {
      lat: 52.251353,
      lon: 104.326663,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5243₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5243,
      },
      {
        code: 'per_3h',
        title: '4194₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4194,
      },
      {
        code: 'sum',
        title: '5243 ₽',
        hourAmount: 24,
        priceFewDays: 5243,
      },
    ],
  },
  {
    id: 2751,
    point: {
      lat: 54.722243,
      lon: 56.005206,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2490₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2490,
      },
      {
        code: 'per_3h',
        title: '1992₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1992,
      },
      {
        code: 'sum',
        title: '2490 ₽',
        hourAmount: 24,
        priceFewDays: 2490,
      },
    ],
  },
  {
    id: 2752,
    point: {
      lat: 54.740745,
      lon: 55.942638,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2790₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2790,
      },
      {
        code: 'per_3h',
        title: '2232₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2232,
      },
      {
        code: 'sum',
        title: '2790 ₽',
        hourAmount: 24,
        priceFewDays: 2790,
      },
    ],
  },
  {
    id: 2753,
    point: {
      lat: 54.765602,
      lon: 56.032919,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3490₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3490,
      },
      {
        code: 'per_3h',
        title: '2792₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2792,
      },
      {
        code: 'sum',
        title: '3490 ₽',
        hourAmount: 24,
        priceFewDays: 3490,
      },
    ],
  },
  {
    id: 2754,
    point: {
      lat: 54.737143,
      lon: 55.946699,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2790₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2790,
      },
      {
        code: 'per_3h',
        title: '2232₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2232,
      },
      {
        code: 'sum',
        title: '2790 ₽',
        hourAmount: 24,
        priceFewDays: 2790,
      },
    ],
  },
  {
    id: 2822,
    point: {
      lat: 54.95344925917243,
      lon: 20.453134203041063,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3720₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3720,
      },
      {
        code: 'per_3h',
        title: '2976₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2976,
      },
      {
        code: 'sum',
        title: '3720 ₽',
        hourAmount: 24,
        priceFewDays: 3720,
      },
    ],
  },
  {
    id: 2823,
    point: {
      lat: 54.95327636893994,
      lon: 20.453262949073775,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3720₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3720,
      },
      {
        code: 'per_3h',
        title: '2976₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2976,
      },
      {
        code: 'sum',
        title: '3720 ₽',
        hourAmount: 24,
        priceFewDays: 3720,
      },
    ],
  },
  {
    id: 2824,
    point: {
      lat: 56.049862,
      lon: 92.885549,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1955₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1955,
      },
      {
        code: 'per_3h',
        title: '1564₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1564,
      },
      {
        code: 'sum',
        title: '1955 ₽',
        hourAmount: 24,
        priceFewDays: 1955,
      },
    ],
  },
  {
    id: 2826,
    point: {
      lat: 56.017478,
      lon: 92.960298,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4255₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4255,
      },
      {
        code: 'per_3h',
        title: '3404₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3404,
      },
      {
        code: 'sum',
        title: '4255 ₽',
        hourAmount: 24,
        priceFewDays: 4255,
      },
    ],
  },
  {
    id: 2827,
    point: {
      lat: 55.973884,
      lon: 92.796822,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 2832,
    point: {
      lat: 56.011862,
      lon: 92.953435,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 2833,
    point: {
      lat: 55.992251,
      lon: 92.79287,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 2834,
    point: {
      lat: 56.05881,
      lon: 92.953812,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 2835,
    point: {
      lat: 56.010453,
      lon: 92.836339,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2530₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2530,
      },
      {
        code: 'per_3h',
        title: '2024₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2024,
      },
      {
        code: 'sum',
        title: '2530 ₽',
        hourAmount: 24,
        priceFewDays: 2530,
      },
    ],
  },
  {
    id: 2837,
    point: {
      lat: 56.032494,
      lon: 92.800245,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1840₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1840,
      },
      {
        code: 'per_3h',
        title: '1472₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1472,
      },
      {
        code: 'sum',
        title: '1840 ₽',
        hourAmount: 24,
        priceFewDays: 1840,
      },
    ],
  },
  {
    id: 2838,
    point: {
      lat: 55.992558,
      lon: 92.937633,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1725₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1725,
      },
      {
        code: 'per_3h',
        title: '1380₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1380,
      },
      {
        code: 'sum',
        title: '1725 ₽',
        hourAmount: 24,
        priceFewDays: 1725,
      },
    ],
  },
  {
    id: 2842,
    point: {
      lat: 56.000915,
      lon: 92.970538,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1265₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1265,
      },
      {
        code: 'per_3h',
        title: '1012₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1012,
      },
      {
        code: 'sum',
        title: '1265 ₽',
        hourAmount: 24,
        priceFewDays: 1265,
      },
    ],
  },
  {
    id: 2843,
    point: {
      lat: 56.05104092852075,
      lon: 92.88421509259035,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1955₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1955,
      },
      {
        code: 'per_3h',
        title: '1564₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1564,
      },
      {
        code: 'sum',
        title: '1955 ₽',
        hourAmount: 24,
        priceFewDays: 1955,
      },
    ],
  },
  {
    id: 2844,
    point: {
      lat: 56.042637,
      lon: 92.920017,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4800,
      },
      {
        code: 'per_3h',
        title: '3840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3840,
      },
      {
        code: 'sum',
        title: '4800 ₽',
        hourAmount: 24,
        priceFewDays: 4800,
      },
    ],
  },
  {
    id: 2845,
    point: {
      lat: 56.021744,
      lon: 92.761285,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 2847,
    point: {
      lat: 55.995352,
      lon: 92.954602,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1265₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1265,
      },
      {
        code: 'per_3h',
        title: '1012₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1012,
      },
      {
        code: 'sum',
        title: '1265 ₽',
        hourAmount: 24,
        priceFewDays: 1265,
      },
    ],
  },
  {
    id: 2849,
    point: {
      lat: 56.034687,
      lon: 92.909507,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4025₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4025,
      },
      {
        code: 'per_3h',
        title: '3220₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3220,
      },
      {
        code: 'sum',
        title: '4025 ₽',
        hourAmount: 24,
        priceFewDays: 4025,
      },
    ],
  },
  {
    id: 2850,
    point: {
      lat: 55.983066449681495,
      lon: 92.80097875396726,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 2852,
    point: {
      lat: 56.036135,
      lon: 92.883743,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 2853,
    point: {
      lat: 55.995528,
      lon: 92.898772,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2415₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2415,
      },
      {
        code: 'per_3h',
        title: '1932₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1932,
      },
      {
        code: 'sum',
        title: '2415 ₽',
        hourAmount: 24,
        priceFewDays: 2415,
      },
    ],
  },
  {
    id: 2855,
    point: {
      lat: 56.067851,
      lon: 92.933842,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2415₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2415,
      },
      {
        code: 'per_3h',
        title: '1932₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1932,
      },
      {
        code: 'sum',
        title: '2415 ₽',
        hourAmount: 24,
        priceFewDays: 2415,
      },
    ],
  },
  {
    id: 2856,
    point: {
      lat: 55.9886812362332,
      lon: 92.85471724470509,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1955₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1955,
      },
      {
        code: 'per_3h',
        title: '1564₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1564,
      },
      {
        code: 'sum',
        title: '1955 ₽',
        hourAmount: 24,
        priceFewDays: 1955,
      },
    ],
  },
  {
    id: 2857,
    point: {
      lat: 56.037508,
      lon: 92.872676,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2415₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2415,
      },
      {
        code: 'per_3h',
        title: '1932₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1932,
      },
      {
        code: 'sum',
        title: '2415 ₽',
        hourAmount: 24,
        priceFewDays: 2415,
      },
    ],
  },
  {
    id: 2858,
    point: {
      lat: 56.050627,
      lon: 92.886789,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 2859,
    point: {
      lat: 56.033707489814205,
      lon: 92.87651638095085,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2415₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2415,
      },
      {
        code: 'per_3h',
        title: '1932₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1932,
      },
      {
        code: 'sum',
        title: '2415 ₽',
        hourAmount: 24,
        priceFewDays: 2415,
      },
    ],
  },
  {
    id: 2862,
    point: {
      lat: 55.982729620665516,
      lon: 92.80111822883605,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 2864,
    point: {
      lat: 55.982326624936086,
      lon: 92.80127916137694,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 2866,
    point: {
      lat: 56.06932131819094,
      lon: 92.94711914418019,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2070₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2070,
      },
      {
        code: 'per_3h',
        title: '1656₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1656,
      },
      {
        code: 'sum',
        title: '2070 ₽',
        hourAmount: 24,
        priceFewDays: 2070,
      },
    ],
  },
  {
    id: 2867,
    point: {
      lat: 56.06926693379118,
      lon: 92.94704565509662,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2070₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2070,
      },
      {
        code: 'per_3h',
        title: '1656₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1656,
      },
      {
        code: 'sum',
        title: '2070 ₽',
        hourAmount: 24,
        priceFewDays: 2070,
      },
    ],
  },
  {
    id: 2868,
    point: {
      lat: 55.988172,
      lon: 92.859067,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1955₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1955,
      },
      {
        code: 'per_3h',
        title: '1564₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1564,
      },
      {
        code: 'sum',
        title: '1955 ₽',
        hourAmount: 24,
        priceFewDays: 1955,
      },
    ],
  },
  {
    id: 2869,
    point: {
      lat: 56.034375,
      lon: 92.911079,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2415₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2415,
      },
      {
        code: 'per_3h',
        title: '1932₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1932,
      },
      {
        code: 'sum',
        title: '2415 ₽',
        hourAmount: 24,
        priceFewDays: 2415,
      },
    ],
  },
  {
    id: 2870,
    point: {
      lat: 56.049691437741735,
      lon: 92.88424596627041,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3565₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3565,
      },
      {
        code: 'per_3h',
        title: '2852₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2852,
      },
      {
        code: 'sum',
        title: '3565 ₽',
        hourAmount: 24,
        priceFewDays: 3565,
      },
    ],
  },
  {
    id: 2873,
    point: {
      lat: 56.060745,
      lon: 92.901961,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2530₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2530,
      },
      {
        code: 'per_3h',
        title: '2024₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2024,
      },
      {
        code: 'sum',
        title: '2530 ₽',
        hourAmount: 24,
        priceFewDays: 2530,
      },
    ],
  },
  {
    id: 2874,
    point: {
      lat: 56.022308,
      lon: 92.757377,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 2875,
    point: {
      lat: 56.04227,
      lon: 92.910046,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 2876,
    point: {
      lat: 56.021095,
      lon: 92.763468,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 2880,
    point: {
      lat: 55.988983,
      lon: 92.858869,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2415₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2415,
      },
      {
        code: 'per_3h',
        title: '1932₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1932,
      },
      {
        code: 'sum',
        title: '2415 ₽',
        hourAmount: 24,
        priceFewDays: 2415,
      },
    ],
  },
  {
    id: 2883,
    point: {
      lat: 56.04245739047844,
      lon: 92.87575749999995,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 2885,
    point: {
      lat: 55.98846172823767,
      lon: 92.85469042261495,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1955₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1955,
      },
      {
        code: 'per_3h',
        title: '1564₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1564,
      },
      {
        code: 'sum',
        title: '1955 ₽',
        hourAmount: 24,
        priceFewDays: 1955,
      },
    ],
  },
  {
    id: 2886,
    point: {
      lat: 56.04286576217535,
      lon: 92.87577895767205,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 2887,
    point: {
      lat: 55.98826928184215,
      lon: 92.85474515966882,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1955₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1955,
      },
      {
        code: 'per_3h',
        title: '1564₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1564,
      },
      {
        code: 'sum',
        title: '1955 ₽',
        hourAmount: 24,
        priceFewDays: 1955,
      },
    ],
  },
  {
    id: 2888,
    point: {
      lat: 55.989054,
      lon: 92.855779,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 2892,
    point: {
      lat: 55.989899,
      lon: 92.852069,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 2893,
    point: {
      lat: 56.05079475731981,
      lon: 92.88433847420501,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2070₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2070,
      },
      {
        code: 'per_3h',
        title: '1656₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1656,
      },
      {
        code: 'sum',
        title: '2070 ₽',
        hourAmount: 24,
        priceFewDays: 2070,
      },
    ],
  },
  {
    id: 2894,
    point: {
      lat: 56.058504,
      lon: 92.896409,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 2895,
    point: {
      lat: 55.982985,
      lon: 92.803236,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 2896,
    point: {
      lat: 56.037232,
      lon: 92.903371,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2415₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2415,
      },
      {
        code: 'per_3h',
        title: '1932₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1932,
      },
      {
        code: 'sum',
        title: '2415 ₽',
        hourAmount: 24,
        priceFewDays: 2415,
      },
    ],
  },
  {
    id: 2897,
    point: {
      lat: 43.41795457795981,
      lon: 39.93329697420493,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3050₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3050,
      },
      {
        code: 'per_3h',
        title: '2440₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2440,
      },
      {
        code: 'sum',
        title: '3050 ₽',
        hourAmount: 24,
        priceFewDays: 3050,
      },
    ],
  },
  {
    id: 2898,
    point: {
      lat: 43.415764931898494,
      lon: 39.929170936176334,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '8540₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 8540,
      },
      {
        code: 'per_3h',
        title: '6832₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 6832,
      },
      {
        code: 'sum',
        title: '8540 ₽',
        hourAmount: 24,
        priceFewDays: 8540,
      },
    ],
  },
  {
    id: 2899,
    point: {
      lat: 43.41574537943329,
      lon: 39.92922994477465,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4270₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4270,
      },
      {
        code: 'per_3h',
        title: '3416₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3416,
      },
      {
        code: 'sum',
        title: '4270 ₽',
        hourAmount: 24,
        priceFewDays: 4270,
      },
    ],
  },
  {
    id: 2900,
    point: {
      lat: 43.415580412695036,
      lon: 39.92945599570083,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6100₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6100,
      },
      {
        code: 'per_3h',
        title: '4880₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4880,
      },
      {
        code: 'sum',
        title: '6100 ₽',
        hourAmount: 24,
        priceFewDays: 6100,
      },
    ],
  },
  {
    id: 2901,
    point: {
      lat: 43.415605830968275,
      lon: 39.92939832820701,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6100₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6100,
      },
      {
        code: 'per_3h',
        title: '4880₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4880,
      },
      {
        code: 'sum',
        title: '6100 ₽',
        hourAmount: 24,
        priceFewDays: 6100,
      },
    ],
  },
  {
    id: 2902,
    point: {
      lat: 43.418048426286546,
      lon: 39.93344717790977,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3050₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3050,
      },
      {
        code: 'per_3h',
        title: '2440₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2440,
      },
      {
        code: 'sum',
        title: '3050 ₽',
        hourAmount: 24,
        priceFewDays: 3050,
      },
    ],
  },
  {
    id: 2903,
    point: {
      lat: 43.41448280625217,
      lon: 39.96658359315768,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3050₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3050,
      },
      {
        code: 'per_3h',
        title: '2440₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2440,
      },
      {
        code: 'sum',
        title: '3050 ₽',
        hourAmount: 24,
        priceFewDays: 3050,
      },
    ],
  },
  {
    id: 2904,
    point: {
      lat: 43.41820483983889,
      lon: 39.933473999999904,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3294₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3294,
      },
      {
        code: 'per_3h',
        title: '2635₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2635,
      },
      {
        code: 'sum',
        title: '3294 ₽',
        hourAmount: 24,
        priceFewDays: 3294,
      },
    ],
  },
  {
    id: 2905,
    point: {
      lat: 43.4182556741558,
      lon: 39.93324333002462,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3050₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3050,
      },
      {
        code: 'per_3h',
        title: '2440₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2440,
      },
      {
        code: 'sum',
        title: '3050 ₽',
        hourAmount: 24,
        priceFewDays: 3050,
      },
    ],
  },
  {
    id: 2906,
    point: {
      lat: 43.417673,
      lon: 39.932926,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3660₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3660,
      },
      {
        code: 'per_3h',
        title: '2928₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2928,
      },
      {
        code: 'sum',
        title: '3660 ₽',
        hourAmount: 24,
        priceFewDays: 3660,
      },
    ],
  },
  {
    id: 2907,
    point: {
      lat: 43.419471093929566,
      lon: 39.930543025794876,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2440₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2440,
      },
      {
        code: 'per_3h',
        title: '1952₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1952,
      },
      {
        code: 'sum',
        title: '2440 ₽',
        hourAmount: 24,
        priceFewDays: 2440,
      },
    ],
  },
  {
    id: 2908,
    point: {
      lat: 43.41649814179443,
      lon: 39.931167762565536,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3050₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3050,
      },
      {
        code: 'per_3h',
        title: '2440₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2440,
      },
      {
        code: 'sum',
        title: '3050 ₽',
        hourAmount: 24,
        priceFewDays: 3050,
      },
    ],
  },
  {
    id: 2909,
    point: {
      lat: 43.414347,
      lon: 39.961879,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6100₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6100,
      },
      {
        code: 'per_3h',
        title: '4880₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4880,
      },
      {
        code: 'sum',
        title: '6100 ₽',
        hourAmount: 24,
        priceFewDays: 6100,
      },
    ],
  },
  {
    id: 2910,
    point: {
      lat: 43.415628316354905,
      lon: 39.929348707340225,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5490₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5490,
      },
      {
        code: 'per_3h',
        title: '4392₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4392,
      },
      {
        code: 'sum',
        title: '5490 ₽',
        hourAmount: 24,
        priceFewDays: 5490,
      },
    ],
  },
  {
    id: 2911,
    point: {
      lat: 43.415819678767235,
      lon: 39.929219215938595,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4270₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4270,
      },
      {
        code: 'per_3h',
        title: '3416₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3416,
      },
      {
        code: 'sum',
        title: '4270 ₽',
        hourAmount: 24,
        priceFewDays: 4270,
      },
    ],
  },
  {
    id: 2912,
    point: {
      lat: 43.414328061700225,
      lon: 39.96646627813366,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3050₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3050,
      },
      {
        code: 'per_3h',
        title: '2440₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2440,
      },
      {
        code: 'sum',
        title: '3050 ₽',
        hourAmount: 24,
        priceFewDays: 3050,
      },
    ],
  },
  {
    id: 2913,
    point: {
      lat: 43.414173593360715,
      lon: 39.9664179983714,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3050₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3050,
      },
      {
        code: 'per_3h',
        title: '2440₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2440,
      },
      {
        code: 'sum',
        title: '3050 ₽',
        hourAmount: 24,
        priceFewDays: 3050,
      },
    ],
  },
  {
    id: 2914,
    point: {
      lat: 43.417765549413055,
      lon: 39.92948705092614,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6100₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6100,
      },
      {
        code: 'per_3h',
        title: '4880₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4880,
      },
      {
        code: 'sum',
        title: '6100 ₽',
        hourAmount: 24,
        priceFewDays: 6100,
      },
    ],
  },
  {
    id: 2915,
    point: {
      lat: 43.397469,
      lon: 39.969757,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '7320₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 7320,
      },
      {
        code: 'per_3h',
        title: '5856₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5856,
      },
      {
        code: 'sum',
        title: '7320 ₽',
        hourAmount: 24,
        priceFewDays: 7320,
      },
    ],
  },
  {
    id: 2916,
    point: {
      lat: 43.419147,
      lon: 39.929144,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3660₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3660,
      },
      {
        code: 'per_3h',
        title: '2928₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2928,
      },
      {
        code: 'sum',
        title: '3660 ₽',
        hourAmount: 24,
        priceFewDays: 3660,
      },
    ],
  },
  {
    id: 2917,
    point: {
      lat: 43.40287028887736,
      lon: 39.99885677976223,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3416₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3416,
      },
      {
        code: 'per_3h',
        title: '2733₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2733,
      },
      {
        code: 'sum',
        title: '3416 ₽',
        hourAmount: 24,
        priceFewDays: 3416,
      },
    ],
  },
  {
    id: 2918,
    point: {
      lat: 43.430801,
      lon: 39.931713,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4880₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4880,
      },
      {
        code: 'per_3h',
        title: '3904₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3904,
      },
      {
        code: 'sum',
        title: '4880 ₽',
        hourAmount: 24,
        priceFewDays: 4880,
      },
    ],
  },
  {
    id: 2919,
    point: {
      lat: 43.415667421355096,
      lon: 39.929372847221366,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3660₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3660,
      },
      {
        code: 'per_3h',
        title: '2928₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2928,
      },
      {
        code: 'sum',
        title: '3660 ₽',
        hourAmount: 24,
        priceFewDays: 3660,
      },
    ],
  },
  {
    id: 2920,
    point: {
      lat: 43.41579230533909,
      lon: 39.92926481349185,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3660₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3660,
      },
      {
        code: 'per_3h',
        title: '2928₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2928,
      },
      {
        code: 'sum',
        title: '3660 ₽',
        hourAmount: 24,
        priceFewDays: 3660,
      },
    ],
  },
  {
    id: 2921,
    point: {
      lat: 43.415658622732266,
      lon: 39.92942783250618,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3660₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3660,
      },
      {
        code: 'per_3h',
        title: '2928₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2928,
      },
      {
        code: 'sum',
        title: '3660 ₽',
        hourAmount: 24,
        priceFewDays: 3660,
      },
    ],
  },
  {
    id: 2922,
    point: {
      lat: 43.41563790032873,
      lon: 39.929489962925985,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3660₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3660,
      },
      {
        code: 'per_3h',
        title: '2928₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2928,
      },
      {
        code: 'sum',
        title: '3660 ₽',
        hourAmount: 24,
        priceFewDays: 3660,
      },
    ],
  },
  {
    id: 2923,
    point: {
      lat: 43.415866604615076,
      lon: 39.92927017790987,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3660₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3660,
      },
      {
        code: 'per_3h',
        title: '2928₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2928,
      },
      {
        code: 'sum',
        title: '3660 ₽',
        hourAmount: 24,
        priceFewDays: 3660,
      },
    ],
  },
  {
    id: 2924,
    point: {
      lat: 43.41582554450022,
      lon: 39.929291635582004,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4270₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4270,
      },
      {
        code: 'per_3h',
        title: '3416₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3416,
      },
      {
        code: 'sum',
        title: '4270 ₽',
        hourAmount: 24,
        priceFewDays: 4270,
      },
    ],
  },
  {
    id: 2925,
    point: {
      lat: 43.47254585222331,
      lon: 39.90255054232787,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3416₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3416,
      },
      {
        code: 'per_3h',
        title: '2733₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2733,
      },
      {
        code: 'sum',
        title: '3416 ₽',
        hourAmount: 24,
        priceFewDays: 3416,
      },
    ],
  },
  {
    id: 2926,
    point: {
      lat: 43.415893978009386,
      lon: 39.92929968220904,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3416₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3416,
      },
      {
        code: 'per_3h',
        title: '2733₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2733,
      },
      {
        code: 'sum',
        title: '3416 ₽',
        hourAmount: 24,
        priceFewDays: 3416,
      },
    ],
  },
  {
    id: 2927,
    point: {
      lat: 43.415668206701255,
      lon: 39.929538242688245,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3416₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3416,
      },
      {
        code: 'per_3h',
        title: '2733₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2733,
      },
      {
        code: 'sum',
        title: '3416 ₽',
        hourAmount: 24,
        priceFewDays: 3416,
      },
    ],
  },
  {
    id: 2928,
    point: {
      lat: 43.4157073116755,
      lon: 39.929512761702604,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6100₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6100,
      },
      {
        code: 'per_3h',
        title: '4880₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4880,
      },
      {
        code: 'sum',
        title: '6100 ₽',
        hourAmount: 24,
        priceFewDays: 6100,
      },
    ],
  },
  {
    id: 2929,
    point: {
      lat: 43.415742506130584,
      lon: 39.929480575194425,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4880₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4880,
      },
      {
        code: 'per_3h',
        title: '3904₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3904,
      },
      {
        code: 'sum',
        title: '4880 ₽',
        hourAmount: 24,
        priceFewDays: 4880,
      },
    ],
  },
  {
    id: 2930,
    point: {
      lat: 43.41577183482739,
      lon: 39.92945241199977,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6100₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6100,
      },
      {
        code: 'per_3h',
        title: '4880₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4880,
      },
      {
        code: 'sum',
        title: '6100 ₽',
        hourAmount: 24,
        priceFewDays: 6100,
      },
    ],
  },
  {
    id: 2931,
    point: {
      lat: 43.440594,
      lon: 39.909022,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3660₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3660,
      },
      {
        code: 'per_3h',
        title: '2928₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2928,
      },
      {
        code: 'sum',
        title: '3660 ₽',
        hourAmount: 24,
        priceFewDays: 3660,
      },
    ],
  },
  {
    id: 2932,
    point: {
      lat: 43.41579725301973,
      lon: 39.92948728071697,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4270₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4270,
      },
      {
        code: 'per_3h',
        title: '3416₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3416,
      },
      {
        code: 'sum',
        title: '4270 ₽',
        hourAmount: 24,
        priceFewDays: 4270,
      },
    ],
  },
  {
    id: 2933,
    point: {
      lat: 43.41577965581081,
      lon: 39.92952751385219,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5490₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5490,
      },
      {
        code: 'per_3h',
        title: '4392₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4392,
      },
      {
        code: 'sum',
        title: '5490 ₽',
        hourAmount: 24,
        priceFewDays: 5490,
      },
    ],
  },
  {
    id: 2934,
    point: {
      lat: 43.415850962669865,
      lon: 39.9293265042992,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4270₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4270,
      },
      {
        code: 'per_3h',
        title: '3416₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3416,
      },
      {
        code: 'sum',
        title: '4270 ₽',
        hourAmount: 24,
        priceFewDays: 4270,
      },
    ],
  },
  {
    id: 2935,
    point: {
      lat: 43.415821634011635,
      lon: 39.92936405522541,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '8540₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 8540,
      },
      {
        code: 'per_3h',
        title: '6832₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 6832,
      },
      {
        code: 'sum',
        title: '8540 ₽',
        hourAmount: 24,
        priceFewDays: 8540,
      },
    ],
  },
  {
    id: 2936,
    point: {
      lat: 43.41576694671226,
      lon: 39.92955433594235,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3050₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3050,
      },
      {
        code: 'per_3h',
        title: '2440₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2440,
      },
      {
        code: 'sum',
        title: '3050 ₽',
        hourAmount: 24,
        priceFewDays: 3050,
      },
    ],
  },
  {
    id: 2937,
    point: {
      lat: 43.415845096939364,
      lon: 39.92940160615159,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3416₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3416,
      },
      {
        code: 'per_3h',
        title: '2733₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2733,
      },
      {
        code: 'sum',
        title: '3416 ₽',
        hourAmount: 24,
        priceFewDays: 3416,
      },
    ],
  },
  {
    id: 2938,
    point: {
      lat: 43.415747394247695,
      lon: 39.92957311140544,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3660₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3660,
      },
      {
        code: 'per_3h',
        title: '2928₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2928,
      },
      {
        code: 'sum',
        title: '3660 ₽',
        hourAmount: 24,
        priceFewDays: 3660,
      },
    ],
  },
  {
    id: 2939,
    point: {
      lat: 43.47250873763308,
      lon: 39.90262027976224,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3416₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3416,
      },
      {
        code: 'per_3h',
        title: '2733₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2733,
      },
      {
        code: 'sum',
        title: '3416 ₽',
        hourAmount: 24,
        priceFewDays: 3416,
      },
    ],
  },
  {
    id: 2940,
    point: {
      lat: 43.415731752271505,
      lon: 39.92961334454066,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6100₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6100,
      },
      {
        code: 'per_3h',
        title: '4880₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4880,
      },
      {
        code: 'sum',
        title: '6100 ₽',
        hourAmount: 24,
        priceFewDays: 6100,
      },
    ],
  },
  {
    id: 2941,
    point: {
      lat: 43.41561541494569,
      lon: 39.92935182916171,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6100₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6100,
      },
      {
        code: 'per_3h',
        title: '4880₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4880,
      },
      {
        code: 'sum',
        title: '6100 ₽',
        hourAmount: 24,
        priceFewDays: 6100,
      },
    ],
  },
  {
    id: 2942,
    point: {
      lat: 43.424234,
      lon: 39.924177,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '7320₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 7320,
      },
      {
        code: 'per_3h',
        title: '5856₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5856,
      },
      {
        code: 'sum',
        title: '7320 ₽',
        hourAmount: 24,
        priceFewDays: 7320,
      },
    ],
  },
  {
    id: 2943,
    point: {
      lat: 43.41573077464784,
      lon: 39.929421566596105,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3660₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3660,
      },
      {
        code: 'per_3h',
        title: '2928₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2928,
      },
      {
        code: 'sum',
        title: '3660 ₽',
        hourAmount: 24,
        priceFewDays: 3660,
      },
    ],
  },
  {
    id: 2944,
    point: {
      lat: 43.41560857156657,
      lon: 39.929510079493596,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3660₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3660,
      },
      {
        code: 'per_3h',
        title: '2928₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2928,
      },
      {
        code: 'sum',
        title: '3660 ₽',
        hourAmount: 24,
        priceFewDays: 3660,
      },
    ],
  },
  {
    id: 2945,
    point: {
      lat: 43.41172498943406,
      lon: 39.95689465879785,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3050₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3050,
      },
      {
        code: 'per_3h',
        title: '2440₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2440,
      },
      {
        code: 'sum',
        title: '3050 ₽',
        hourAmount: 24,
        priceFewDays: 3050,
      },
    ],
  },
  {
    id: 2946,
    point: {
      lat: 43.41576890195836,
      lon: 39.92956372367388,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4270₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4270,
      },
      {
        code: 'per_3h',
        title: '3416₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3416,
      },
      {
        code: 'sum',
        title: '4270 ₽',
        hourAmount: 24,
        priceFewDays: 4270,
      },
    ],
  },
  {
    id: 2947,
    point: {
      lat: 43.419873,
      lon: 39.93554,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2440₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2440,
      },
      {
        code: 'per_3h',
        title: '1952₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1952,
      },
      {
        code: 'sum',
        title: '2440 ₽',
        hourAmount: 24,
        priceFewDays: 2440,
      },
    ],
  },
  {
    id: 2948,
    point: {
      lat: 43.416642828075005,
      lon: 39.931350152778535,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3050₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3050,
      },
      {
        code: 'per_3h',
        title: '2440₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2440,
      },
      {
        code: 'sum',
        title: '3050 ₽',
        hourAmount: 24,
        priceFewDays: 3050,
      },
    ],
  },
  {
    id: 2949,
    point: {
      lat: 43.413574,
      lon: 39.961753,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3904₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3904,
      },
      {
        code: 'per_3h',
        title: '3123₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3123,
      },
      {
        code: 'sum',
        title: '3904 ₽',
        hourAmount: 24,
        priceFewDays: 3904,
      },
    ],
  },
  {
    id: 2950,
    point: {
      lat: 43.41587442558616,
      lon: 39.92936405522541,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3660₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3660,
      },
      {
        code: 'per_3h',
        title: '2928₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2928,
      },
      {
        code: 'sum',
        title: '3660 ₽',
        hourAmount: 24,
        priceFewDays: 3660,
      },
    ],
  },
  {
    id: 2951,
    point: {
      lat: 43.41590375421863,
      lon: 39.92933186871723,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '7320₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 7320,
      },
      {
        code: 'per_3h',
        title: '5856₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 5856,
      },
      {
        code: 'sum',
        title: '7320 ₽',
        hourAmount: 24,
        priceFewDays: 7320,
      },
    ],
  },
  {
    id: 2952,
    point: {
      lat: 43.411614311591435,
      lon: 39.95691013171028,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '6100₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 6100,
      },
      {
        code: 'per_3h',
        title: '4880₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4880,
      },
      {
        code: 'sum',
        title: '6100 ₽',
        hourAmount: 24,
        priceFewDays: 6100,
      },
    ],
  },
  {
    id: 2953,
    point: {
      lat: 43.41573272989512,
      lon: 39.92962809669025,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4880₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4880,
      },
      {
        code: 'per_3h',
        title: '3904₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3904,
      },
      {
        code: 'sum',
        title: '4880 ₽',
        hourAmount: 24,
        priceFewDays: 4880,
      },
    ],
  },
  {
    id: 2954,
    point: {
      lat: 43.41578943203862,
      lon: 39.92947118746289,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3660₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3660,
      },
      {
        code: 'per_3h',
        title: '2928₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2928,
      },
      {
        code: 'sum',
        title: '3660 ₽',
        hourAmount: 24,
        priceFewDays: 3660,
      },
    ],
  },
  {
    id: 2955,
    point: {
      lat: 43.401176,
      lon: 39.993077,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3660₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3660,
      },
      {
        code: 'per_3h',
        title: '2928₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2928,
      },
      {
        code: 'sum',
        title: '3660 ₽',
        hourAmount: 24,
        priceFewDays: 3660,
      },
    ],
  },
  {
    id: 2956,
    point: {
      lat: 45.046463,
      lon: 38.978915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 2957,
    point: {
      lat: 45.046463,
      lon: 38.978915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3208₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3208,
      },
      {
        code: 'per_3h',
        title: '2566₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2566,
      },
      {
        code: 'sum',
        title: '3208 ₽',
        hourAmount: 24,
        priceFewDays: 3208,
      },
    ],
  },
  {
    id: 2958,
    point: {
      lat: 45.046463,
      lon: 38.978915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3783₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3783,
      },
      {
        code: 'per_3h',
        title: '3026₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3026,
      },
      {
        code: 'sum',
        title: '3783 ₽',
        hourAmount: 24,
        priceFewDays: 3783,
      },
    ],
  },
  {
    id: 2959,
    point: {
      lat: 45.046463,
      lon: 38.978915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3208₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3208,
      },
      {
        code: 'per_3h',
        title: '2566₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2566,
      },
      {
        code: 'sum',
        title: '3208 ₽',
        hourAmount: 24,
        priceFewDays: 3208,
      },
    ],
  },
  {
    id: 2960,
    point: {
      lat: 45.046463,
      lon: 38.978915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 2961,
    point: {
      lat: 45.013294,
      lon: 38.964479,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4013₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4013,
      },
      {
        code: 'per_3h',
        title: '3210₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3210,
      },
      {
        code: 'sum',
        title: '4013 ₽',
        hourAmount: 24,
        priceFewDays: 4013,
      },
    ],
  },
  {
    id: 2962,
    point: {
      lat: 45.062347042654984,
      lon: 38.96576555092621,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4013₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4013,
      },
      {
        code: 'per_3h',
        title: '3210₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3210,
      },
      {
        code: 'sum',
        title: '4013 ₽',
        hourAmount: 24,
        priceFewDays: 4013,
      },
    ],
  },
  {
    id: 2963,
    point: {
      lat: 45.04681686001679,
      lon: 39.03079663558188,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4025₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4025,
      },
      {
        code: 'per_3h',
        title: '3220₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3220,
      },
      {
        code: 'sum',
        title: '4025 ₽',
        hourAmount: 24,
        priceFewDays: 4025,
      },
    ],
  },
  {
    id: 2964,
    point: {
      lat: 45.046463,
      lon: 38.978915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 2965,
    point: {
      lat: 45.046463,
      lon: 38.978915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3208₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3208,
      },
      {
        code: 'per_3h',
        title: '2566₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2566,
      },
      {
        code: 'sum',
        title: '3208 ₽',
        hourAmount: 24,
        priceFewDays: 3208,
      },
    ],
  },
  {
    id: 2966,
    point: {
      lat: 45.046463,
      lon: 38.978915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3783₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3783,
      },
      {
        code: 'per_3h',
        title: '3026₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3026,
      },
      {
        code: 'sum',
        title: '3783 ₽',
        hourAmount: 24,
        priceFewDays: 3783,
      },
    ],
  },
  {
    id: 2967,
    point: {
      lat: 45.046463,
      lon: 38.978915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3323₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3323,
      },
      {
        code: 'per_3h',
        title: '2658₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2658,
      },
      {
        code: 'sum',
        title: '3323 ₽',
        hourAmount: 24,
        priceFewDays: 3323,
      },
    ],
  },
  {
    id: 2968,
    point: {
      lat: 45.0651719590215,
      lon: 38.968541490737856,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 2969,
    point: {
      lat: 45.061395,
      lon: 38.968252,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3208₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3208,
      },
      {
        code: 'per_3h',
        title: '2566₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2566,
      },
      {
        code: 'sum',
        title: '3208 ₽',
        hourAmount: 24,
        priceFewDays: 3208,
      },
    ],
  },
  {
    id: 2970,
    point: {
      lat: 45.062270422308025,
      lon: 38.96554442460627,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3208₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3208,
      },
      {
        code: 'per_3h',
        title: '2566₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2566,
      },
      {
        code: 'sum',
        title: '3208 ₽',
        hourAmount: 24,
        priceFewDays: 3208,
      },
    ],
  },
  {
    id: 2971,
    point: {
      lat: 45.01382122280685,
      lon: 38.99047504299162,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2863₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2863,
      },
      {
        code: 'per_3h',
        title: '2290₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2290,
      },
      {
        code: 'sum',
        title: '2863 ₽',
        hourAmount: 24,
        priceFewDays: 2863,
      },
    ],
  },
  {
    id: 2972,
    point: {
      lat: 45.06518544560247,
      lon: 38.96875926112471,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 2973,
    point: {
      lat: 45.03967483613631,
      lon: 38.97040295767209,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4013₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4013,
      },
      {
        code: 'per_3h',
        title: '3210₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3210,
      },
      {
        code: 'sum',
        title: '4013 ₽',
        hourAmount: 24,
        priceFewDays: 4013,
      },
    ],
  },
  {
    id: 2974,
    point: {
      lat: 45.046463,
      lon: 38.978915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3208₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3208,
      },
      {
        code: 'per_3h',
        title: '2566₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2566,
      },
      {
        code: 'sum',
        title: '3208 ₽',
        hourAmount: 24,
        priceFewDays: 3208,
      },
    ],
  },
  {
    id: 2975,
    point: {
      lat: 45.062103141449256,
      lon: 38.964879236770564,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4013₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4013,
      },
      {
        code: 'per_3h',
        title: '3210₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3210,
      },
      {
        code: 'sum',
        title: '4013 ₽',
        hourAmount: 24,
        priceFewDays: 4013,
      },
    ],
  },
  {
    id: 2977,
    point: {
      lat: 45.062267,
      lon: 38.964345,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 2978,
    point: {
      lat: 45.046463,
      lon: 38.978915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 2979,
    point: {
      lat: 45.065170239052634,
      lon: 38.968968473427864,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 2980,
    point: {
      lat: 45.046463,
      lon: 38.978915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 2981,
    point: {
      lat: 45.020806,
      lon: 38.986299,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 2982,
    point: {
      lat: 45.046463,
      lon: 38.978915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 2983,
    point: {
      lat: 45.06517404069047,
      lon: 38.969204507821175,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 2984,
    point: {
      lat: 45.040139,
      lon: 38.986793,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4588₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4588,
      },
      {
        code: 'per_3h',
        title: '3670₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3670,
      },
      {
        code: 'sum',
        title: '4588 ₽',
        hourAmount: 24,
        priceFewDays: 4588,
      },
    ],
  },
  {
    id: 2985,
    point: {
      lat: 45.046463,
      lon: 38.978915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3783₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3783,
      },
      {
        code: 'per_3h',
        title: '3026₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3026,
      },
      {
        code: 'sum',
        title: '3783 ₽',
        hourAmount: 24,
        priceFewDays: 3783,
      },
    ],
  },
  {
    id: 2986,
    point: {
      lat: 45.066093,
      lon: 38.954194,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2863₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2863,
      },
      {
        code: 'per_3h',
        title: '2290₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2290,
      },
      {
        code: 'sum',
        title: '2863 ₽',
        hourAmount: 24,
        priceFewDays: 2863,
      },
    ],
  },
  {
    id: 2987,
    point: {
      lat: 45.046463,
      lon: 38.978915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 2988,
    point: {
      lat: 45.023202,
      lon: 38.989021,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 2989,
    point: {
      lat: 45.046463,
      lon: 38.978915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3783₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3783,
      },
      {
        code: 'per_3h',
        title: '3026₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3026,
      },
      {
        code: 'sum',
        title: '3783 ₽',
        hourAmount: 24,
        priceFewDays: 3783,
      },
    ],
  },
  {
    id: 2990,
    point: {
      lat: 45.01377175682113,
      lon: 38.99020682209012,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 2991,
    point: {
      lat: 45.06079083312316,
      lon: 38.967298093254016,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 2992,
    point: {
      lat: 45.046463,
      lon: 38.978915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3323₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3323,
      },
      {
        code: 'per_3h',
        title: '2658₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2658,
      },
      {
        code: 'sum',
        title: '3323 ₽',
        hourAmount: 24,
        priceFewDays: 3323,
      },
    ],
  },
  {
    id: 2993,
    point: {
      lat: 45.062613169919366,
      lon: 38.9657494576721,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3208₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3208,
      },
      {
        code: 'per_3h',
        title: '2566₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2566,
      },
      {
        code: 'sum',
        title: '3208 ₽',
        hourAmount: 24,
        priceFewDays: 3208,
      },
    ],
  },
  {
    id: 2994,
    point: {
      lat: 45.046463,
      lon: 38.978915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3208₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3208,
      },
      {
        code: 'per_3h',
        title: '2566₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2566,
      },
      {
        code: 'sum',
        title: '3208 ₽',
        hourAmount: 24,
        priceFewDays: 3208,
      },
    ],
  },
  {
    id: 2995,
    point: {
      lat: 45.06098473128076,
      lon: 38.967190804893406,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3438₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3438,
      },
      {
        code: 'per_3h',
        title: '2750₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2750,
      },
      {
        code: 'sum',
        title: '3438 ₽',
        hourAmount: 24,
        priceFewDays: 3438,
      },
    ],
  },
  {
    id: 2996,
    point: {
      lat: 45.046463,
      lon: 38.978915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3208₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3208,
      },
      {
        code: 'per_3h',
        title: '2566₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2566,
      },
      {
        code: 'sum',
        title: '3208 ₽',
        hourAmount: 24,
        priceFewDays: 3208,
      },
    ],
  },
  {
    id: 2997,
    point: {
      lat: 59.08535011923164,
      lon: 37.921206813491764,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3186₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3186,
      },
      {
        code: 'per_3h',
        title: '2549₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2549,
      },
      {
        code: 'sum',
        title: '3186 ₽',
        hourAmount: 24,
        priceFewDays: 3186,
      },
    ],
  },
  {
    id: 2998,
    point: {
      lat: 59.124806,
      lon: 37.940041,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3186₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3186,
      },
      {
        code: 'per_3h',
        title: '2549₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2549,
      },
      {
        code: 'sum',
        title: '3186 ₽',
        hourAmount: 24,
        priceFewDays: 3186,
      },
    ],
  },
  {
    id: 2999,
    point: {
      lat: 59.091101,
      lon: 37.907665,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2478₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2478,
      },
      {
        code: 'per_3h',
        title: '1982₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1982,
      },
      {
        code: 'sum',
        title: '2478 ₽',
        hourAmount: 24,
        priceFewDays: 2478,
      },
    ],
  },
  {
    id: 3000,
    point: {
      lat: 59.125578807537266,
      lon: 37.91820676322937,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2596₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2596,
      },
      {
        code: 'per_3h',
        title: '2077₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2077,
      },
      {
        code: 'sum',
        title: '2596 ₽',
        hourAmount: 24,
        priceFewDays: 2596,
      },
    ],
  },
  {
    id: 3001,
    point: {
      lat: 59.123947,
      lon: 37.965157,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2832₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2832,
      },
      {
        code: 'per_3h',
        title: '2266₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2266,
      },
      {
        code: 'sum',
        title: '2832 ₽',
        hourAmount: 24,
        priceFewDays: 2832,
      },
    ],
  },
  {
    id: 3002,
    point: {
      lat: 59.085118,
      lon: 37.928084,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3186₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3186,
      },
      {
        code: 'per_3h',
        title: '2549₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2549,
      },
      {
        code: 'sum',
        title: '3186 ₽',
        hourAmount: 24,
        priceFewDays: 3186,
      },
    ],
  },
  {
    id: 3003,
    point: {
      lat: 59.085964,
      lon: 37.924527,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3658₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3658,
      },
      {
        code: 'per_3h',
        title: '2926₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2926,
      },
      {
        code: 'sum',
        title: '3658 ₽',
        hourAmount: 24,
        priceFewDays: 3658,
      },
    ],
  },
  {
    id: 3004,
    point: {
      lat: 59.100229,
      lon: 37.929962,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2950,
      },
      {
        code: 'per_3h',
        title: '2360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2360,
      },
      {
        code: 'sum',
        title: '2950 ₽',
        hourAmount: 24,
        priceFewDays: 2950,
      },
    ],
  },
  {
    id: 3005,
    point: {
      lat: 59.12290147138372,
      lon: 37.93744795767213,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3422₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3422,
      },
      {
        code: 'per_3h',
        title: '2738₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2738,
      },
      {
        code: 'sum',
        title: '3422 ₽',
        hourAmount: 24,
        priceFewDays: 3422,
      },
    ],
  },
  {
    id: 3006,
    point: {
      lat: 59.086427,
      lon: 37.904818,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3422₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3422,
      },
      {
        code: 'per_3h',
        title: '2738₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2738,
      },
      {
        code: 'sum',
        title: '3422 ₽',
        hourAmount: 24,
        priceFewDays: 3422,
      },
    ],
  },
  {
    id: 3007,
    point: {
      lat: 59.101712,
      lon: 37.930078,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2714₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2714,
      },
      {
        code: 'per_3h',
        title: '2171₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2171,
      },
      {
        code: 'sum',
        title: '2714 ₽',
        hourAmount: 24,
        priceFewDays: 2714,
      },
    ],
  },
  {
    id: 3008,
    point: {
      lat: 59.129678,
      lon: 37.940678,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2714₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2714,
      },
      {
        code: 'per_3h',
        title: '2171₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2171,
      },
      {
        code: 'sum',
        title: '2714 ₽',
        hourAmount: 24,
        priceFewDays: 2714,
      },
    ],
  },
  {
    id: 3009,
    point: {
      lat: 59.095959,
      lon: 37.915786,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2478₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2478,
      },
      {
        code: 'per_3h',
        title: '1982₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1982,
      },
      {
        code: 'sum',
        title: '2478 ₽',
        hourAmount: 24,
        priceFewDays: 2478,
      },
    ],
  },
  {
    id: 3010,
    point: {
      lat: 59.119984,
      lon: 37.916783,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3186₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3186,
      },
      {
        code: 'per_3h',
        title: '2549₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2549,
      },
      {
        code: 'sum',
        title: '3186 ₽',
        hourAmount: 24,
        priceFewDays: 3186,
      },
    ],
  },
  {
    id: 3011,
    point: {
      lat: 59.099499,
      lon: 37.92706,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3540₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3540,
      },
      {
        code: 'per_3h',
        title: '2832₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2832,
      },
      {
        code: 'sum',
        title: '3540 ₽',
        hourAmount: 24,
        priceFewDays: 3540,
      },
    ],
  },
  {
    id: 3012,
    point: {
      lat: 59.099933,
      lon: 37.92688,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4484₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4484,
      },
      {
        code: 'per_3h',
        title: '3587₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3587,
      },
      {
        code: 'sum',
        title: '4484 ₽',
        hourAmount: 24,
        priceFewDays: 4484,
      },
    ],
  },
  {
    id: 3014,
    point: {
      lat: 59.098228,
      lon: 37.922712,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3540₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3540,
      },
      {
        code: 'per_3h',
        title: '2832₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2832,
      },
      {
        code: 'sum',
        title: '3540 ₽',
        hourAmount: 24,
        priceFewDays: 3540,
      },
    ],
  },
  {
    id: 3015,
    point: {
      lat: 59.085516,
      lon: 37.927347,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3422₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3422,
      },
      {
        code: 'per_3h',
        title: '2738₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2738,
      },
      {
        code: 'sum',
        title: '3422 ₽',
        hourAmount: 24,
        priceFewDays: 3422,
      },
    ],
  },
  {
    id: 3016,
    point: {
      lat: 59.147653,
      lon: 37.948718,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2714₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2714,
      },
      {
        code: 'per_3h',
        title: '2171₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2171,
      },
      {
        code: 'sum',
        title: '2714 ₽',
        hourAmount: 24,
        priceFewDays: 2714,
      },
    ],
  },
  {
    id: 3017,
    point: {
      lat: 59.122852,
      lon: 37.911465,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2950,
      },
      {
        code: 'per_3h',
        title: '2360₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2360,
      },
      {
        code: 'sum',
        title: '2950 ₽',
        hourAmount: 24,
        priceFewDays: 2950,
      },
    ],
  },
  {
    id: 3018,
    point: {
      lat: 59.090869,
      lon: 37.926512,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3304₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3304,
      },
      {
        code: 'per_3h',
        title: '2643₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2643,
      },
      {
        code: 'sum',
        title: '3304 ₽',
        hourAmount: 24,
        priceFewDays: 3304,
      },
    ],
  },
  {
    id: 3019,
    point: {
      lat: 59.08551025276588,
      lon: 37.92105660978692,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2714₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2714,
      },
      {
        code: 'per_3h',
        title: '2171₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2171,
      },
      {
        code: 'sum',
        title: '2714 ₽',
        hourAmount: 24,
        priceFewDays: 2714,
      },
    ],
  },
  {
    id: 3020,
    point: {
      lat: 59.133949,
      lon: 37.893912,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3186₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3186,
      },
      {
        code: 'per_3h',
        title: '2549₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2549,
      },
      {
        code: 'sum',
        title: '3186 ₽',
        hourAmount: 24,
        priceFewDays: 3186,
      },
    ],
  },
  {
    id: 3022,
    point: {
      lat: 59.129641,
      lon: 37.893652,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2478₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2478,
      },
      {
        code: 'per_3h',
        title: '1982₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1982,
      },
      {
        code: 'sum',
        title: '2478 ₽',
        hourAmount: 24,
        priceFewDays: 2478,
      },
    ],
  },
  {
    id: 3023,
    point: {
      lat: 59.084342,
      lon: 37.923422,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2714₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2714,
      },
      {
        code: 'per_3h',
        title: '2171₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2171,
      },
      {
        code: 'sum',
        title: '2714 ₽',
        hourAmount: 24,
        priceFewDays: 2714,
      },
    ],
  },
  {
    id: 3024,
    point: {
      lat: 59.12627,
      lon: 37.937211,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3068₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3068,
      },
      {
        code: 'per_3h',
        title: '2454₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2454,
      },
      {
        code: 'sum',
        title: '3068 ₽',
        hourAmount: 24,
        priceFewDays: 3068,
      },
    ],
  },
  {
    id: 3025,
    point: {
      lat: 55.776907,
      lon: 49.132241,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '27140₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 27140,
      },
      {
        code: 'per_3h',
        title: '21712₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 21712,
      },
      {
        code: 'sum',
        title: '27140 ₽',
        hourAmount: 24,
        priceFewDays: 27140,
      },
    ],
  },
  {
    id: 3028,
    point: {
      lat: 53.766414053948125,
      lon: 87.1441155925903,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 3029,
    point: {
      lat: 53.76961221998858,
      lon: 87.13990166118212,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4887₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4887,
      },
      {
        code: 'per_3h',
        title: '3910₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3910,
      },
      {
        code: 'sum',
        title: '4887 ₽',
        hourAmount: 24,
        priceFewDays: 4887,
      },
    ],
  },
  {
    id: 3030,
    point: {
      lat: 53.769667835220936,
      lon: 87.1400089495427,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 3031,
    point: {
      lat: 53.767528583438256,
      lon: 87.14346049206542,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3795₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3795,
      },
      {
        code: 'per_3h',
        title: '3036₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3036,
      },
      {
        code: 'sum',
        title: '3795 ₽',
        hourAmount: 24,
        priceFewDays: 3795,
      },
    ],
  },
  {
    id: 3032,
    point: {
      lat: 53.766553897093914,
      lon: 87.14422288095088,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 3033,
    point: {
      lat: 53.76450557416401,
      lon: 87.14436333928671,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2817₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2817,
      },
      {
        code: 'per_3h',
        title: '2254₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2254,
      },
      {
        code: 'sum',
        title: '2817 ₽',
        hourAmount: 24,
        priceFewDays: 2817,
      },
    ],
  },
  {
    id: 3034,
    point: {
      lat: 53.762796,
      lon: 87.144533,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4715₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4715,
      },
      {
        code: 'per_3h',
        title: '3772₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3772,
      },
      {
        code: 'sum',
        title: '4715 ₽',
        hourAmount: 24,
        priceFewDays: 4715,
      },
    ],
  },
  {
    id: 3035,
    point: {
      lat: 53.765117,
      lon: 87.141658,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3047₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3047,
      },
      {
        code: 'per_3h',
        title: '2438₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2438,
      },
      {
        code: 'sum',
        title: '3047 ₽',
        hourAmount: 24,
        priceFewDays: 3047,
      },
    ],
  },
  {
    id: 3036,
    point: {
      lat: 53.76967578024809,
      lon: 87.13989897897308,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 3037,
    point: {
      lat: 53.778020500436284,
      lon: 87.13333148346705,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2817₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2817,
      },
      {
        code: 'per_3h',
        title: '2254₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2254,
      },
      {
        code: 'sum',
        title: '2817 ₽',
        hourAmount: 24,
        priceFewDays: 2817,
      },
    ],
  },
  {
    id: 3038,
    point: {
      lat: 53.765072864784,
      lon: 87.14549692394256,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 3039,
    point: {
      lat: 53.76431804792045,
      lon: 87.1442989662704,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 3040,
    point: {
      lat: 53.764611540346536,
      lon: 87.12426819510648,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2500,
      },
      {
        code: 'per_3h',
        title: '2000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2000,
      },
      {
        code: 'sum',
        title: '2500 ₽',
        hourAmount: 24,
        priceFewDays: 2500,
      },
    ],
  },
  {
    id: 3044,
    point: {
      lat: 53.7696694242265,
      lon: 87.1397568218953,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4140₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4140,
      },
      {
        code: 'per_3h',
        title: '3312₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3312,
      },
      {
        code: 'sum',
        title: '4140 ₽',
        hourAmount: 24,
        priceFewDays: 4140,
      },
    ],
  },
  {
    id: 3045,
    point: {
      lat: 53.76204,
      lon: 87.138846,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3795₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3795,
      },
      {
        code: 'per_3h',
        title: '3036₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3036,
      },
      {
        code: 'sum',
        title: '3795 ₽',
        hourAmount: 24,
        priceFewDays: 3795,
      },
    ],
  },
  {
    id: 3046,
    point: {
      lat: 53.758916,
      lon: 87.155259,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3162₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3162,
      },
      {
        code: 'per_3h',
        title: '2530₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2530,
      },
      {
        code: 'sum',
        title: '3162 ₽',
        hourAmount: 24,
        priceFewDays: 3162,
      },
    ],
  },
  {
    id: 3047,
    point: {
      lat: 53.76972186137578,
      lon: 87.1398614280469,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3795₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3795,
      },
      {
        code: 'per_3h',
        title: '3036₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3036,
      },
      {
        code: 'sum',
        title: '3795 ₽',
        hourAmount: 24,
        priceFewDays: 3795,
      },
    ],
  },
  {
    id: 3048,
    point: {
      lat: 53.76978383246736,
      lon: 87.13978096177645,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4140₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4140,
      },
      {
        code: 'per_3h',
        title: '3312₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3312,
      },
      {
        code: 'sum',
        title: '4140 ₽',
        hourAmount: 24,
        priceFewDays: 4140,
      },
    ],
  },
  {
    id: 3049,
    point: {
      lat: 53.778176191562764,
      lon: 87.13305253372947,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 3050,
    point: {
      lat: 53.777463,
      lon: 87.133456,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 3051,
    point: {
      lat: 53.769752052431876,
      lon: 87.13964416911669,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4427₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4427,
      },
      {
        code: 'per_3h',
        title: '3542₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3542,
      },
      {
        code: 'sum',
        title: '4427 ₽',
        hourAmount: 24,
        priceFewDays: 4427,
      },
    ],
  },
  {
    id: 3052,
    point: {
      lat: 53.767287041526366,
      lon: 87.14303133862305,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 3053,
    point: {
      lat: 53.7640542383906,
      lon: 87.14421313558192,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2530₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2530,
      },
      {
        code: 'per_3h',
        title: '2024₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2024,
      },
      {
        code: 'sum',
        title: '2530 ₽',
        hourAmount: 24,
        priceFewDays: 2530,
      },
    ],
  },
  {
    id: 3054,
    point: {
      lat: 53.76477091943306,
      lon: 87.14537890674588,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 3055,
    point: {
      lat: 53.766655600906,
      lon: 87.14450183068845,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2817₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2817,
      },
      {
        code: 'per_3h',
        title: '2254₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2254,
      },
      {
        code: 'sum',
        title: '2817 ₽',
        hourAmount: 24,
        priceFewDays: 2817,
      },
    ],
  },
  {
    id: 3056,
    point: {
      lat: 53.764760924678306,
      lon: 87.12426283068845,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3335₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3335,
      },
      {
        code: 'per_3h',
        title: '2668₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2668,
      },
      {
        code: 'sum',
        title: '3335 ₽',
        hourAmount: 24,
        priceFewDays: 3335,
      },
    ],
  },
  {
    id: 3057,
    point: {
      lat: 53.77832552740412,
      lon: 87.13281113491813,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2530₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2530,
      },
      {
        code: 'per_3h',
        title: '2024₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2024,
      },
      {
        code: 'sum',
        title: '2530 ₽',
        hourAmount: 24,
        priceFewDays: 2530,
      },
    ],
  },
  {
    id: 3058,
    point: {
      lat: 53.760853,
      lon: 87.142601,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3162₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3162,
      },
      {
        code: 'per_3h',
        title: '2530₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2530,
      },
      {
        code: 'sum',
        title: '3162 ₽',
        hourAmount: 24,
        priceFewDays: 3162,
      },
    ],
  },
  {
    id: 3059,
    point: {
      lat: 53.758809,
      lon: 87.168015,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2817₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2817,
      },
      {
        code: 'per_3h',
        title: '2254₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2254,
      },
      {
        code: 'sum',
        title: '2817 ₽',
        hourAmount: 24,
        priceFewDays: 2817,
      },
    ],
  },
  {
    id: 3060,
    point: {
      lat: 53.76677001739874,
      lon: 87.14464130555719,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2817₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2817,
      },
      {
        code: 'per_3h',
        title: '2254₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2254,
      },
      {
        code: 'sum',
        title: '2817 ₽',
        hourAmount: 24,
        priceFewDays: 2817,
      },
    ],
  },
  {
    id: 3061,
    point: {
      lat: 53.76441710162256,
      lon: 87.14303884788502,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2760₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2760,
      },
      {
        code: 'per_3h',
        title: '2208₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2208,
      },
      {
        code: 'sum',
        title: '2760 ₽',
        hourAmount: 24,
        priceFewDays: 2760,
      },
    ],
  },
  {
    id: 3063,
    point: {
      lat: 53.755407,
      lon: 87.140562,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 3065,
    point: {
      lat: 52.284430128639336,
      lon: 104.25485093254089,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 3066,
    point: {
      lat: 52.26762043359611,
      lon: 104.3274278730162,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 3067,
    point: {
      lat: 52.273056982810665,
      lon: 104.25634839814758,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 3068,
    point: {
      lat: 52.27274106821227,
      lon: 104.25647714418027,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3105₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3105,
      },
      {
        code: 'per_3h',
        title: '2484₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2484,
      },
      {
        code: 'sum',
        title: '3105 ₽',
        hourAmount: 24,
        priceFewDays: 3105,
      },
    ],
  },
  {
    id: 3069,
    point: {
      lat: 52.270002280905445,
      lon: 104.33674927116388,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3105₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3105,
      },
      {
        code: 'per_3h',
        title: '2484₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2484,
      },
      {
        code: 'sum',
        title: '3105 ₽',
        hourAmount: 24,
        priceFewDays: 3105,
      },
    ],
  },
  {
    id: 3070,
    point: {
      lat: 52.283219,
      lon: 104.245797,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 3071,
    point: {
      lat: 52.267357139137935,
      lon: 104.32717038095079,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3680₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3680,
      },
      {
        code: 'per_3h',
        title: '2944₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2944,
      },
      {
        code: 'sum',
        title: '3680 ₽',
        hourAmount: 24,
        priceFewDays: 3680,
      },
    ],
  },
  {
    id: 3072,
    point: {
      lat: 52.26814384559374,
      lon: 104.32494697102334,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3680₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3680,
      },
      {
        code: 'per_3h',
        title: '2944₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2944,
      },
      {
        code: 'sum',
        title: '3680 ₽',
        hourAmount: 24,
        priceFewDays: 3680,
      },
    ],
  },
  {
    id: 3073,
    point: {
      lat: 52.284531,
      lon: 104.251303,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3105₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3105,
      },
      {
        code: 'per_3h',
        title: '2484₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2484,
      },
      {
        code: 'sum',
        title: '3105 ₽',
        hourAmount: 24,
        priceFewDays: 3105,
      },
    ],
  },
  {
    id: 3074,
    point: {
      lat: 52.27008501062549,
      lon: 104.31661883862294,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3680₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3680,
      },
      {
        code: 'per_3h',
        title: '2944₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2944,
      },
      {
        code: 'sum',
        title: '3680 ₽',
        hourAmount: 24,
        priceFewDays: 3680,
      },
    ],
  },
  {
    id: 3075,
    point: {
      lat: 52.281776,
      lon: 104.323959,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 3076,
    point: {
      lat: 52.26985464093213,
      lon: 104.31674758465569,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3335₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3335,
      },
      {
        code: 'per_3h',
        title: '2668₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2668,
      },
      {
        code: 'sum',
        title: '3335 ₽',
        hourAmount: 24,
        priceFewDays: 3335,
      },
    ],
  },
  {
    id: 3077,
    point: {
      lat: 52.292281,
      lon: 104.292293,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3680₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3680,
      },
      {
        code: 'per_3h',
        title: '2944₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2944,
      },
      {
        code: 'sum',
        title: '3680 ₽',
        hourAmount: 24,
        priceFewDays: 3680,
      },
    ],
  },
  {
    id: 3078,
    point: {
      lat: 52.26893686759538,
      lon: 104.30202524603267,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3335₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3335,
      },
      {
        code: 'per_3h',
        title: '2668₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2668,
      },
      {
        code: 'sum',
        title: '3335 ₽',
        hourAmount: 24,
        priceFewDays: 3335,
      },
    ],
  },
  {
    id: 3079,
    point: {
      lat: 52.25725737401936,
      lon: 104.32800659259028,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 3080,
    point: {
      lat: 52.26958477776112,
      lon: 104.31687633068842,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3105₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3105,
      },
      {
        code: 'per_3h',
        title: '2484₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2484,
      },
      {
        code: 'sum',
        title: '3105 ₽',
        hourAmount: 24,
        priceFewDays: 3105,
      },
    ],
  },
  {
    id: 3081,
    point: {
      lat: 52.26963368812724,
      lon: 104.33674927116388,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 3082,
    point: {
      lat: 52.268722,
      lon: 104.3243,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 3083,
    point: {
      lat: 62.548315,
      lon: 113.978171,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5040₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5040,
      },
      {
        code: 'per_3h',
        title: '4032₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4032,
      },
      {
        code: 'sum',
        title: '5040 ₽',
        hourAmount: 24,
        priceFewDays: 5040,
      },
    ],
  },
  {
    id: 3084,
    point: {
      lat: 62.543446,
      lon: 113.979303,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4882₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4882,
      },
      {
        code: 'per_3h',
        title: '3906₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3906,
      },
      {
        code: 'sum',
        title: '4882 ₽',
        hourAmount: 24,
        priceFewDays: 4882,
      },
    ],
  },
  {
    id: 3085,
    point: {
      lat: 62.541231,
      lon: 113.980651,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3937₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3937,
      },
      {
        code: 'per_3h',
        title: '3150₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3150,
      },
      {
        code: 'sum',
        title: '3937 ₽',
        hourAmount: 24,
        priceFewDays: 3937,
      },
    ],
  },
  {
    id: 3086,
    point: {
      lat: 62.546412,
      lon: 113.983094,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3675₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3675,
      },
      {
        code: 'per_3h',
        title: '2940₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2940,
      },
      {
        code: 'sum',
        title: '3675 ₽',
        hourAmount: 24,
        priceFewDays: 3675,
      },
    ],
  },
  {
    id: 3087,
    point: {
      lat: 62.536799338481494,
      lon: 113.97518575396724,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3885₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3885,
      },
      {
        code: 'per_3h',
        title: '3108₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3108,
      },
      {
        code: 'sum',
        title: '3885 ₽',
        hourAmount: 24,
        priceFewDays: 3885,
      },
    ],
  },
  {
    id: 3088,
    point: {
      lat: 62.540766,
      lon: 113.983355,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3990₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3990,
      },
      {
        code: 'per_3h',
        title: '3192₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3192,
      },
      {
        code: 'sum',
        title: '3990 ₽',
        hourAmount: 24,
        priceFewDays: 3990,
      },
    ],
  },
  {
    id: 3089,
    point: {
      lat: 62.537166006532054,
      lon: 113.97544324603265,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4042₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4042,
      },
      {
        code: 'per_3h',
        title: '3234₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3234,
      },
      {
        code: 'sum',
        title: '4042 ₽',
        hourAmount: 24,
        priceFewDays: 4042,
      },
    ],
  },
  {
    id: 3090,
    point: {
      lat: 62.541915,
      lon: 113.973859,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3885₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3885,
      },
      {
        code: 'per_3h',
        title: '3108₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3108,
      },
      {
        code: 'sum',
        title: '3885 ₽',
        hourAmount: 24,
        priceFewDays: 3885,
      },
    ],
  },
  {
    id: 3091,
    point: {
      lat: 62.543981,
      lon: 113.982753,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3990₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3990,
      },
      {
        code: 'per_3h',
        title: '3192₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3192,
      },
      {
        code: 'sum',
        title: '3990 ₽',
        hourAmount: 24,
        priceFewDays: 3990,
      },
    ],
  },
  {
    id: 3092,
    point: {
      lat: 59.93257309983583,
      lon: 30.322143864417942,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4025₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4025,
      },
      {
        code: 'per_3h',
        title: '3220₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3220,
      },
      {
        code: 'sum',
        title: '4025 ₽',
        hourAmount: 24,
        priceFewDays: 4025,
      },
    ],
  },
  {
    id: 3093,
    point: {
      lat: 59.93005536788946,
      lon: 30.344926609081522,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 3094,
    point: {
      lat: 59.959284347091966,
      lon: 30.297396030823627,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 3095,
    point: {
      lat: 59.95920364562596,
      lon: 30.29755696336452,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2070₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2070,
      },
      {
        code: 'per_3h',
        title: '1656₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1656,
      },
      {
        code: 'sum',
        title: '2070 ₽',
        hourAmount: 24,
        priceFewDays: 2070,
      },
    ],
  },
  {
    id: 3096,
    point: {
      lat: 59.95913101413796,
      lon: 30.29781445542994,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 3097,
    point: {
      lat: 59.916685756800526,
      lon: 30.32221971163941,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4370₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4370,
      },
      {
        code: 'per_3h',
        title: '3496₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3496,
      },
      {
        code: 'sum',
        title: '4370 ₽',
        hourAmount: 24,
        priceFewDays: 4370,
      },
    ],
  },
  {
    id: 3098,
    point: {
      lat: 59.93013614057823,
      lon: 30.345004393142954,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3910₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3910,
      },
      {
        code: 'per_3h',
        title: '3128₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3128,
      },
      {
        code: 'sum',
        title: '3910 ₽',
        hourAmount: 24,
        priceFewDays: 3910,
      },
    ],
  },
  {
    id: 3099,
    point: {
      lat: 59.93176305061306,
      lon: 30.3225386886561,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3680₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3680,
      },
      {
        code: 'per_3h',
        title: '2944₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2944,
      },
      {
        code: 'sum',
        title: '3680 ₽',
        hourAmount: 24,
        priceFewDays: 3680,
      },
    ],
  },
  {
    id: 3104,
    point: {
      lat: 59.930296335126584,
      lon: 30.3521631018523,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 3106,
    point: {
      lat: 59.92995440175101,
      lon: 30.34528602508952,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4025₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4025,
      },
      {
        code: 'per_3h',
        title: '3220₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3220,
      },
      {
        code: 'sum',
        title: '4025 ₽',
        hourAmount: 24,
        priceFewDays: 4025,
      },
    ],
  },
  {
    id: 3107,
    point: {
      lat: 59.93211267787778,
      lon: 30.34545450859831,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2990₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2990,
      },
      {
        code: 'per_3h',
        title: '2392₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2392,
      },
      {
        code: 'sum',
        title: '2990 ₽',
        hourAmount: 24,
        priceFewDays: 2990,
      },
    ],
  },
  {
    id: 3108,
    point: {
      lat: 54.712784,
      lon: 20.532676,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2070₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2070,
      },
      {
        code: 'per_3h',
        title: '1656₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1656,
      },
      {
        code: 'sum',
        title: '2070 ₽',
        hourAmount: 24,
        priceFewDays: 2070,
      },
    ],
  },
  {
    id: 3110,
    point: {
      lat: 54.709086,
      lon: 20.492153,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 3112,
    point: {
      lat: 54.676506,
      lon: 20.443554,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1725₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1725,
      },
      {
        code: 'per_3h',
        title: '1380₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1380,
      },
      {
        code: 'sum',
        title: '1725 ₽',
        hourAmount: 24,
        priceFewDays: 1725,
      },
    ],
  },
  {
    id: 3114,
    point: {
      lat: 59.90203221575531,
      lon: 30.2755175509262,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1800₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1800,
      },
      {
        code: 'per_3h',
        title: '1440₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1440,
      },
      {
        code: 'sum',
        title: '1800 ₽',
        hourAmount: 24,
        priceFewDays: 1800,
      },
    ],
  },
  {
    id: 3115,
    point: {
      lat: 59.90199853188739,
      lon: 30.275624839286802,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2200₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2200,
      },
      {
        code: 'per_3h',
        title: '1760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1760,
      },
      {
        code: 'sum',
        title: '2200 ₽',
        hourAmount: 24,
        priceFewDays: 2200,
      },
    ],
  },
  {
    id: 3116,
    point: {
      lat: 59.90198640568655,
      lon: 30.27544781349183,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1950₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1950,
      },
      {
        code: 'per_3h',
        title: '1560₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1560,
      },
      {
        code: 'sum',
        title: '1950 ₽',
        hourAmount: 24,
        priceFewDays: 1950,
      },
    ],
  },
  {
    id: 3117,
    point: {
      lat: 59.901960805914634,
      lon: 30.275571195106515,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1900₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1900,
      },
      {
        code: 'per_3h',
        title: '1520₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1520,
      },
      {
        code: 'sum',
        title: '1900 ₽',
        hourAmount: 24,
        priceFewDays: 1900,
      },
    ],
  },
  {
    id: 3118,
    point: {
      lat: 59.9019136483882,
      lon: 30.275651661376962,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2000,
      },
      {
        code: 'per_3h',
        title: '1600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1600,
      },
      {
        code: 'sum',
        title: '2000 ₽',
        hourAmount: 24,
        priceFewDays: 2000,
      },
    ],
  },
  {
    id: 3119,
    point: {
      lat: 59.901875922318695,
      lon: 30.275552419643397,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2000,
      },
      {
        code: 'per_3h',
        title: '1600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1600,
      },
      {
        code: 'sum',
        title: '2000 ₽',
        hourAmount: 24,
        priceFewDays: 2000,
      },
    ],
  },
  {
    id: 3120,
    point: {
      lat: 59.90187996439961,
      lon: 30.275415626983648,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2000,
      },
      {
        code: 'per_3h',
        title: '1600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1600,
      },
      {
        code: 'sum',
        title: '2000 ₽',
        hourAmount: 24,
        priceFewDays: 2000,
      },
    ],
  },
  {
    id: 3134,
    point: {
      lat: 45.060287,
      lon: 38.915512,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2360₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2360,
      },
      {
        code: 'per_3h',
        title: '1888₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1888,
      },
      {
        code: 'sum',
        title: '2360 ₽',
        hourAmount: 24,
        priceFewDays: 2360,
      },
    ],
  },
  {
    id: 3139,
    point: {
      lat: 59.78924277323512,
      lon: 30.16911222883603,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3680₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3680,
      },
      {
        code: 'per_3h',
        title: '2944₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2944,
      },
      {
        code: 'sum',
        title: '3680 ₽',
        hourAmount: 24,
        priceFewDays: 3680,
      },
    ],
  },
  {
    id: 3140,
    point: {
      lat: 60.072098,
      lon: 30.313317,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2645₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2645,
      },
      {
        code: 'per_3h',
        title: '2116₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2116,
      },
      {
        code: 'sum',
        title: '2645 ₽',
        hourAmount: 24,
        priceFewDays: 2645,
      },
    ],
  },
  {
    id: 3141,
    point: {
      lat: 59.78882637222811,
      lon: 30.168725990737876,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2530₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2530,
      },
      {
        code: 'per_3h',
        title: '2024₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2024,
      },
      {
        code: 'sum',
        title: '2530 ₽',
        hourAmount: 24,
        priceFewDays: 2530,
      },
    ],
  },
  {
    id: 3142,
    point: {
      lat: 59.842867242616585,
      lon: 30.094395771163914,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2185₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2185,
      },
      {
        code: 'per_3h',
        title: '1748₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1748,
      },
      {
        code: 'sum',
        title: '2185 ₽',
        hourAmount: 24,
        priceFewDays: 2185,
      },
    ],
  },
  {
    id: 3143,
    point: {
      lat: 59.80049765843782,
      lon: 30.520437864418028,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5290₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5290,
      },
      {
        code: 'per_3h',
        title: '4232₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4232,
      },
      {
        code: 'sum',
        title: '5290 ₽',
        hourAmount: 24,
        priceFewDays: 5290,
      },
    ],
  },
  {
    id: 3157,
    point: {
      lat: 55.785108,
      lon: 49.121182,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4830₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4830,
      },
      {
        code: 'per_3h',
        title: '3864₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3864,
      },
      {
        code: 'sum',
        title: '4830 ₽',
        hourAmount: 24,
        priceFewDays: 4830,
      },
    ],
  },
  {
    id: 3163,
    point: {
      lat: 54.716866892070364,
      lon: 20.499667330688382,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5405₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5405,
      },
      {
        code: 'per_3h',
        title: '4324₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4324,
      },
      {
        code: 'sum',
        title: '5405 ₽',
        hourAmount: 24,
        priceFewDays: 5405,
      },
    ],
  },
  {
    id: 3164,
    point: {
      lat: 54.95305239722746,
      lon: 20.453364175923724,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4715₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4715,
      },
      {
        code: 'per_3h',
        title: '3772₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3772,
      },
      {
        code: 'sum',
        title: '4715 ₽',
        hourAmount: 24,
        priceFewDays: 4715,
      },
    ],
  },
  {
    id: 3169,
    point: {
      lat: 52.047856,
      lon: 113.489775,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2400₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2400,
      },
      {
        code: 'per_3h',
        title: '1920₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1920,
      },
      {
        code: 'sum',
        title: '2400 ₽',
        hourAmount: 24,
        priceFewDays: 2400,
      },
    ],
  },
  {
    id: 3178,
    point: {
      lat: 55.54594892168078,
      lon: 37.69902768650814,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2748₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2748,
      },
      {
        code: 'per_3h',
        title: '2198₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2198,
      },
      {
        code: 'sum',
        title: '2748 ₽',
        hourAmount: 24,
        priceFewDays: 2748,
      },
    ],
  },
  {
    id: 3181,
    point: {
      lat: 55.54595500456026,
      lon: 37.69966068783566,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4068₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4068,
      },
      {
        code: 'per_3h',
        title: '3254₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3254,
      },
      {
        code: 'sum',
        title: '4068 ₽',
        hourAmount: 24,
        priceFewDays: 4068,
      },
    ],
  },
  {
    id: 3182,
    point: {
      lat: 55.545687356969154,
      lon: 37.69938173809811,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2640₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2640,
      },
      {
        code: 'per_3h',
        title: '2112₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2112,
      },
      {
        code: 'sum',
        title: '2640 ₽',
        hourAmount: 24,
        priceFewDays: 2640,
      },
    ],
  },
  {
    id: 3183,
    point: {
      lat: 55.54551095187439,
      lon: 37.699489026458686,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2640₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2640,
      },
      {
        code: 'per_3h',
        title: '2112₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2112,
      },
      {
        code: 'sum',
        title: '2640 ₽',
        hourAmount: 24,
        priceFewDays: 2640,
      },
    ],
  },
  {
    id: 3184,
    point: {
      lat: 55.54551095187439,
      lon: 37.69903841534419,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2748₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2748,
      },
      {
        code: 'per_3h',
        title: '2198₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2198,
      },
      {
        code: 'sum',
        title: '2748 ₽',
        hourAmount: 24,
        priceFewDays: 2748,
      },
    ],
  },
  {
    id: 3185,
    point: {
      lat: 59.941491510890074,
      lon: 30.323748534393268,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3776₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3776,
      },
      {
        code: 'per_3h',
        title: '3021₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3021,
      },
      {
        code: 'sum',
        title: '3776 ₽',
        hourAmount: 24,
        priceFewDays: 3776,
      },
    ],
  },
  {
    id: 3186,
    point: {
      lat: 59.94145908564462,
      lon: 30.321775542327874,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3776₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3776,
      },
      {
        code: 'per_3h',
        title: '3021₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3021,
      },
      {
        code: 'sum',
        title: '3776 ₽',
        hourAmount: 24,
        priceFewDays: 3776,
      },
    ],
  },
  {
    id: 3187,
    point: {
      lat: 59.93073617944238,
      lon: 30.30808677116389,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4130₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4130,
      },
      {
        code: 'per_3h',
        title: '3304₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3304,
      },
      {
        code: 'sum',
        title: '4130 ₽',
        hourAmount: 24,
        priceFewDays: 4130,
      },
    ],
  },
  {
    id: 3188,
    point: {
      lat: 59.93774766091221,
      lon: 30.344285669311468,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4012₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4012,
      },
      {
        code: 'per_3h',
        title: '3210₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3210,
      },
      {
        code: 'sum',
        title: '4012 ₽',
        hourAmount: 24,
        priceFewDays: 4012,
      },
    ],
  },
  {
    id: 3189,
    point: {
      lat: 59.933248674457644,
      lon: 30.312041322090117,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3422₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3422,
      },
      {
        code: 'per_3h',
        title: '2738₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2738,
      },
      {
        code: 'sum',
        title: '3422 ₽',
        hourAmount: 24,
        priceFewDays: 3422,
      },
    ],
  },
  {
    id: 3190,
    point: {
      lat: 59.930574636799456,
      lon: 30.308097499999942,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4661₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4661,
      },
      {
        code: 'per_3h',
        title: '3729₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3729,
      },
      {
        code: 'sum',
        title: '4661 ₽',
        hourAmount: 24,
        priceFewDays: 4661,
      },
    ],
  },
  {
    id: 3191,
    point: {
      lat: 59.94163146832682,
      lon: 30.323480313491796,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3776₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3776,
      },
      {
        code: 'per_3h',
        title: '3021₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3021,
      },
      {
        code: 'sum',
        title: '3776 ₽',
        hourAmount: 24,
        priceFewDays: 3776,
      },
    ],
  },
  {
    id: 3192,
    point: {
      lat: 59.933200215430716,
      lon: 30.311665812828043,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4130₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4130,
      },
      {
        code: 'per_3h',
        title: '3304₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3304,
      },
      {
        code: 'sum',
        title: '4130 ₽',
        hourAmount: 24,
        priceFewDays: 4130,
      },
    ],
  },
  {
    id: 3193,
    point: {
      lat: 59.930394246582026,
      lon: 30.30808677116389,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3540₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3540,
      },
      {
        code: 'per_3h',
        title: '2832₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2832,
      },
      {
        code: 'sum',
        title: '3540 ₽',
        hourAmount: 24,
        priceFewDays: 3540,
      },
    ],
  },
  {
    id: 3194,
    point: {
      lat: 59.941776808114504,
      lon: 30.32330865211485,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4130₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4130,
      },
      {
        code: 'per_3h',
        title: '3304₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3304,
      },
      {
        code: 'sum',
        title: '4130 ₽',
        hourAmount: 24,
        priceFewDays: 4130,
      },
    ],
  },
  {
    id: 3195,
    point: {
      lat: 58.00173501141628,
      lon: 56.24530785581969,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2988₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2988,
      },
      {
        code: 'per_3h',
        title: '2390₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2390,
      },
      {
        code: 'sum',
        title: '2988 ₽',
        hourAmount: 24,
        priceFewDays: 2988,
      },
    ],
  },
  {
    id: 3196,
    point: {
      lat: 58.00122038436874,
      lon: 56.24179388570683,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3108₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3108,
      },
      {
        code: 'per_3h',
        title: '2486₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2486,
      },
      {
        code: 'sum',
        title: '3108 ₽',
        hourAmount: 24,
        priceFewDays: 3108,
      },
    ],
  },
  {
    id: 3197,
    point: {
      lat: 58.00179756134632,
      lon: 56.24199800859826,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2988₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2988,
      },
      {
        code: 'per_3h',
        title: '2390₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2390,
      },
      {
        code: 'sum',
        title: '2988 ₽',
        hourAmount: 24,
        priceFewDays: 2988,
      },
    ],
  },
  {
    id: 3198,
    point: {
      lat: 58.00129443205705,
      lon: 56.24191726732153,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2604₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2604,
      },
      {
        code: 'per_3h',
        title: '2083₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2083,
      },
      {
        code: 'sum',
        title: '2604 ₽',
        hourAmount: 24,
        priceFewDays: 2604,
      },
    ],
  },
  {
    id: 3199,
    point: {
      lat: 58.00183173666848,
      lon: 56.24219112764731,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2676₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2676,
      },
      {
        code: 'per_3h',
        title: '2141₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2141,
      },
      {
        code: 'sum',
        title: '2676 ₽',
        hourAmount: 24,
        priceFewDays: 2676,
      },
    ],
  },
  {
    id: 3200,
    point: {
      lat: 58.00273102296221,
      lon: 56.241080051589876,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2988₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2988,
      },
      {
        code: 'per_3h',
        title: '2390₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2390,
      },
      {
        code: 'sum',
        title: '2988 ₽',
        hourAmount: 24,
        priceFewDays: 2988,
      },
    ],
  },
  {
    id: 3201,
    point: {
      lat: 58.00061294418268,
      lon: 56.24585594973753,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2994₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2994,
      },
      {
        code: 'per_3h',
        title: '2395₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2395,
      },
      {
        code: 'sum',
        title: '2994 ₽',
        hourAmount: 24,
        priceFewDays: 2994,
      },
    ],
  },
  {
    id: 3202,
    point: {
      lat: 58.00068699313211,
      lon: 56.2455448134918,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2868₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2868,
      },
      {
        code: 'per_3h',
        title: '2294₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2294,
      },
      {
        code: 'sum',
        title: '2868 ₽',
        hourAmount: 24,
        priceFewDays: 2868,
      },
    ],
  },
  {
    id: 3203,
    point: {
      lat: 58.00049653208536,
      lon: 56.24367804232784,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3108₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3108,
      },
      {
        code: 'per_3h',
        title: '2486₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2486,
      },
      {
        code: 'sum',
        title: '3108 ₽',
        hourAmount: 24,
        priceFewDays: 3108,
      },
    ],
  },
  {
    id: 3204,
    point: {
      lat: 58.00133145584355,
      lon: 56.24176706361669,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2856₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2856,
      },
      {
        code: 'per_3h',
        title: '2285₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2285,
      },
      {
        code: 'sum',
        title: '2856 ₽',
        hourAmount: 24,
        priceFewDays: 2856,
      },
    ],
  },
  {
    id: 3205,
    point: {
      lat: 58.000587669529516,
      lon: 56.24342055026242,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2868₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2868,
      },
      {
        code: 'per_3h',
        title: '2294₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2294,
      },
      {
        code: 'sum',
        title: '2868 ₽',
        hourAmount: 24,
        priceFewDays: 2868,
      },
    ],
  },
  {
    id: 3206,
    point: {
      lat: 58.00132291189624,
      lon: 56.24196018266574,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3108₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3108,
      },
      {
        code: 'per_3h',
        title: '2486₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2486,
      },
      {
        code: 'sum',
        title: '3108 ₽',
        hourAmount: 24,
        priceFewDays: 3108,
      },
    ],
  },
  {
    id: 3207,
    point: {
      lat: 58.00135708767323,
      lon: 56.24201382684606,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2676₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2676,
      },
      {
        code: 'per_3h',
        title: '2141₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2141,
      },
      {
        code: 'sum',
        title: '2676 ₽',
        hourAmount: 24,
        priceFewDays: 2676,
      },
    ],
  },
  {
    id: 3208,
    point: {
      lat: 58.00260181509447,
      lon: 56.24100156969513,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2748₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2748,
      },
      {
        code: 'per_3h',
        title: '2198₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2198,
      },
      {
        code: 'sum',
        title: '2748 ₽',
        hourAmount: 24,
        priceFewDays: 2748,
      },
    ],
  },
  {
    id: 3209,
    point: {
      lat: 58.00265877266213,
      lon: 56.2407226199576,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2748₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2748,
      },
      {
        code: 'per_3h',
        title: '2198₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2198,
      },
      {
        code: 'sum',
        title: '2748 ₽',
        hourAmount: 24,
        priceFewDays: 2748,
      },
    ],
  },
  {
    id: 3210,
    point: {
      lat: 58.00179197036829,
      lon: 56.24554389021301,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2508₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2508,
      },
      {
        code: 'per_3h',
        title: '2006₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2006,
      },
      {
        code: 'sum',
        title: '2508 ₽',
        hourAmount: 24,
        priceFewDays: 2508,
      },
    ],
  },
  {
    id: 3211,
    point: {
      lat: 58.001666660553816,
      lon: 56.24558680555722,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2988₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2988,
      },
      {
        code: 'per_3h',
        title: '2390₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2390,
      },
      {
        code: 'sum',
        title: '2988 ₽',
        hourAmount: 24,
        priceFewDays: 2988,
      },
    ],
  },
  {
    id: 3212,
    point: {
      lat: 58.001354239693065,
      lon: 56.24189580964938,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3108₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3108,
      },
      {
        code: 'per_3h',
        title: '2486₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2486,
      },
      {
        code: 'sum',
        title: '3108 ₽',
        hourAmount: 24,
        priceFewDays: 3108,
      },
    ],
  },
  {
    id: 3233,
    point: {
      lat: 55.82229012870962,
      lon: 49.11157255456155,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2185₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2185,
      },
      {
        code: 'per_3h',
        title: '1748₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1748,
      },
      {
        code: 'sum',
        title: '2185 ₽',
        hourAmount: 24,
        priceFewDays: 2185,
      },
    ],
  },
  {
    id: 3234,
    point: {
      lat: 55.822281068909135,
      lon: 49.11203389451212,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2185₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2185,
      },
      {
        code: 'per_3h',
        title: '1748₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1748,
      },
      {
        code: 'sum',
        title: '2185 ₽',
        hourAmount: 24,
        priceFewDays: 2185,
      },
    ],
  },
  {
    id: 3236,
    point: {
      lat: 55.780886,
      lon: 49.191745,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3335₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3335,
      },
      {
        code: 'per_3h',
        title: '2668₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2668,
      },
      {
        code: 'sum',
        title: '3335 ₽',
        hourAmount: 24,
        priceFewDays: 3335,
      },
    ],
  },
  {
    id: 3237,
    point: {
      lat: 55.751492,
      lon: 49.22112,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 3238,
    point: {
      lat: 44.14378,
      lon: 43.006117,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2652₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2652,
      },
      {
        code: 'per_3h',
        title: '2122₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2122,
      },
      {
        code: 'sum',
        title: '2652 ₽',
        hourAmount: 24,
        priceFewDays: 2652,
      },
    ],
  },
  {
    id: 3239,
    point: {
      lat: 44.03560742722373,
      lon: 43.0744174067459,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5748₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5748,
      },
      {
        code: 'per_3h',
        title: '4598₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4598,
      },
      {
        code: 'sum',
        title: '5748 ₽',
        hourAmount: 24,
        priceFewDays: 5748,
      },
    ],
  },
  {
    id: 3240,
    point: {
      lat: 44.03536748948139,
      lon: 43.07441204232787,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3535₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3535,
      },
      {
        code: 'per_3h',
        title: '2828₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2828,
      },
      {
        code: 'sum',
        title: '3535 ₽',
        hourAmount: 24,
        priceFewDays: 3535,
      },
    ],
  },
  {
    id: 3241,
    point: {
      lat: 44.04566456473178,
      lon: 43.04652571593858,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3535₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3535,
      },
      {
        code: 'per_3h',
        title: '2828₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2828,
      },
      {
        code: 'sum',
        title: '3535 ₽',
        hourAmount: 24,
        priceFewDays: 3535,
      },
    ],
  },
  {
    id: 3242,
    point: {
      lat: 44.032323,
      lon: 43.082303,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3665₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3665,
      },
      {
        code: 'per_3h',
        title: '2932₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2932,
      },
      {
        code: 'sum',
        title: '3665 ₽',
        hourAmount: 24,
        priceFewDays: 3665,
      },
    ],
  },
  {
    id: 3243,
    point: {
      lat: 44.032019,
      lon: 43.082446,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '5555₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 5555,
      },
      {
        code: 'per_3h',
        title: '4444₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 4444,
      },
      {
        code: 'sum',
        title: '5555 ₽',
        hourAmount: 24,
        priceFewDays: 5555,
      },
    ],
  },
  {
    id: 3244,
    point: {
      lat: 44.035135290734786,
      lon: 43.07444422883606,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3535₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3535,
      },
      {
        code: 'per_3h',
        title: '2828₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2828,
      },
      {
        code: 'sum',
        title: '3535 ₽',
        hourAmount: 24,
        priceFewDays: 3535,
      },
    ],
  },
  {
    id: 3245,
    point: {
      lat: 44.04559685204299,
      lon: 43.04652370428181,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2525₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2525,
      },
      {
        code: 'per_3h',
        title: '2020₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2020,
      },
      {
        code: 'sum',
        title: '2525 ₽',
        hourAmount: 24,
        priceFewDays: 2525,
      },
    ],
  },
  {
    id: 3246,
    point: {
      lat: 44.036445,
      lon: 43.068487,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3535₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3535,
      },
      {
        code: 'per_3h',
        title: '2828₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2828,
      },
      {
        code: 'sum',
        title: '3535 ₽',
        hourAmount: 24,
        priceFewDays: 3535,
      },
    ],
  },
  {
    id: 3255,
    point: {
      lat: 55.138531,
      lon: 61.398915,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1955₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1955,
      },
      {
        code: 'per_3h',
        title: '1564₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1564,
      },
      {
        code: 'sum',
        title: '1955 ₽',
        hourAmount: 24,
        priceFewDays: 1955,
      },
    ],
  },
  {
    id: 3262,
    point: {
      lat: 55.797377612684684,
      lon: 49.18650302513125,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 3263,
    point: {
      lat: 55.81878909436643,
      lon: 49.14639662698363,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3680₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3680,
      },
      {
        code: 'per_3h',
        title: '2944₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2944,
      },
      {
        code: 'sum',
        title: '3680 ₽',
        hourAmount: 24,
        priceFewDays: 3680,
      },
    ],
  },
  {
    id: 3264,
    point: {
      lat: 55.783261,
      lon: 49.153279,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3220₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3220,
      },
      {
        code: 'per_3h',
        title: '2576₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2576,
      },
      {
        code: 'sum',
        title: '3220 ₽',
        hourAmount: 24,
        priceFewDays: 3220,
      },
    ],
  },
  {
    id: 3266,
    point: {
      lat: 55.729995,
      lon: 49.171569,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2300₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2300,
      },
      {
        code: 'per_3h',
        title: '1840₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1840,
      },
      {
        code: 'sum',
        title: '2300 ₽',
        hourAmount: 24,
        priceFewDays: 2300,
      },
    ],
  },
  {
    id: 3267,
    point: {
      lat: 55.782947,
      lon: 49.191709,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4025₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4025,
      },
      {
        code: 'per_3h',
        title: '3220₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3220,
      },
      {
        code: 'sum',
        title: '4025 ₽',
        hourAmount: 24,
        priceFewDays: 4025,
      },
    ],
  },
  {
    id: 3268,
    point: {
      lat: 55.765306,
      lon: 49.144637,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3450₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3450,
      },
      {
        code: 'per_3h',
        title: '2760₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2760,
      },
      {
        code: 'sum',
        title: '3450 ₽',
        hourAmount: 24,
        priceFewDays: 3450,
      },
    ],
  },
  {
    id: 3269,
    point: {
      lat: 55.84637652601013,
      lon: 49.24158619306522,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 3272,
    point: {
      lat: 54.716792358842675,
      lon: 20.49950103372946,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4720₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4720,
      },
      {
        code: 'per_3h',
        title: '3776₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3776,
      },
      {
        code: 'sum',
        title: '4720 ₽',
        hourAmount: 24,
        priceFewDays: 4720,
      },
    ],
  },
  {
    id: 3275,
    point: {
      lat: 55.814232869974504,
      lon: 49.13707540674588,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1812₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1812,
      },
      {
        code: 'per_3h',
        title: '1450₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1450,
      },
      {
        code: 'sum',
        title: '1812 ₽',
        hourAmount: 24,
        priceFewDays: 1812,
      },
    ],
  },
  {
    id: 3276,
    point: {
      lat: 55.814302342819396,
      lon: 49.1368769232788,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2000,
      },
      {
        code: 'per_3h',
        title: '1600₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1600,
      },
      {
        code: 'sum',
        title: '2000 ₽',
        hourAmount: 24,
        priceFewDays: 2000,
      },
    ],
  },
  {
    id: 3277,
    point: {
      lat: 55.789087,
      lon: 49.132492,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3375₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3375,
      },
      {
        code: 'per_3h',
        title: '2700₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2700,
      },
      {
        code: 'sum',
        title: '3375 ₽',
        hourAmount: 24,
        priceFewDays: 3375,
      },
    ],
  },
  {
    id: 3278,
    point: {
      lat: 55.765623250835326,
      lon: 49.14388800859826,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1875,
      },
      {
        code: 'per_3h',
        title: '1500₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1500,
      },
      {
        code: 'sum',
        title: '1875 ₽',
        hourAmount: 24,
        priceFewDays: 1875,
      },
    ],
  },
  {
    id: 3279,
    point: {
      lat: 55.81472162134193,
      lon: 49.13633521855259,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 3280,
    point: {
      lat: 55.79609194254046,
      lon: 49.12907066137689,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '10000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 10000,
      },
      {
        code: 'per_3h',
        title: '8000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 8000,
      },
      {
        code: 'sum',
        title: '10000 ₽',
        hourAmount: 24,
        priceFewDays: 10000,
      },
    ],
  },
  {
    id: 3281,
    point: {
      lat: 55.798287,
      lon: 49.180148,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 3282,
    point: {
      lat: 55.796977,
      lon: 49.182178,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2250₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2250,
      },
      {
        code: 'per_3h',
        title: '1800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1800,
      },
      {
        code: 'sum',
        title: '2250 ₽',
        hourAmount: 24,
        priceFewDays: 2250,
      },
    ],
  },
  {
    id: 3283,
    point: {
      lat: 55.79725,
      lon: 49.185008,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 3284,
    point: {
      lat: 55.818994467832894,
      lon: 49.145924558197024,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2125₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2125,
      },
      {
        code: 'per_3h',
        title: '1700₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1700,
      },
      {
        code: 'sum',
        title: '2125 ₽',
        hourAmount: 24,
        priceFewDays: 2125,
      },
    ],
  },
  {
    id: 3285,
    point: {
      lat: 55.814263075574544,
      lon: 49.13663016004941,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1812₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1812,
      },
      {
        code: 'per_3h',
        title: '1450₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1450,
      },
      {
        code: 'sum',
        title: '1812 ₽',
        hourAmount: 24,
        priceFewDays: 1812,
      },
    ],
  },
  {
    id: 3286,
    point: {
      lat: 55.777763,
      lon: 49.117257,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2500,
      },
      {
        code: 'per_3h',
        title: '2000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2000,
      },
      {
        code: 'sum',
        title: '2500 ₽',
        hourAmount: 24,
        priceFewDays: 2500,
      },
    ],
  },
  {
    id: 3287,
    point: {
      lat: 55.785827,
      lon: 49.134459,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '37500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 37500,
      },
      {
        code: 'per_3h',
        title: '30000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 30000,
      },
      {
        code: 'sum',
        title: '37500 ₽',
        hourAmount: 24,
        priceFewDays: 37500,
      },
    ],
  },
  {
    id: 3288,
    point: {
      lat: 55.793055,
      lon: 49.125898,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 3290,
    point: {
      lat: 55.790772,
      lon: 49.132806,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2875,
      },
      {
        code: 'per_3h',
        title: '2300₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2300,
      },
      {
        code: 'sum',
        title: '2875 ₽',
        hourAmount: 24,
        priceFewDays: 2875,
      },
    ],
  },
  {
    id: 3292,
    point: {
      lat: 55.81872264977657,
      lon: 49.14692233995055,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1875,
      },
      {
        code: 'per_3h',
        title: '1500₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1500,
      },
      {
        code: 'sum',
        title: '1875 ₽',
        hourAmount: 24,
        priceFewDays: 1875,
      },
    ],
  },
  {
    id: 3293,
    point: {
      lat: 55.81561260082561,
      lon: 49.13659222949975,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2250₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2250,
      },
      {
        code: 'per_3h',
        title: '1800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1800,
      },
      {
        code: 'sum',
        title: '2250 ₽',
        hourAmount: 24,
        priceFewDays: 2250,
      },
    ],
  },
  {
    id: 3294,
    point: {
      lat: 55.78486,
      lon: 49.11599,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3500,
      },
      {
        code: 'per_3h',
        title: '2800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2800,
      },
      {
        code: 'sum',
        title: '3500 ₽',
        hourAmount: 24,
        priceFewDays: 3500,
      },
    ],
  },
  {
    id: 3295,
    point: {
      lat: 55.814933057381126,
      lon: 49.13632717192555,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1875,
      },
      {
        code: 'per_3h',
        title: '1500₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1500,
      },
      {
        code: 'sum',
        title: '1875 ₽',
        hourAmount: 24,
        priceFewDays: 1875,
      },
    ],
  },
  {
    id: 3296,
    point: {
      lat: 55.82333277116053,
      lon: 49.145554957008244,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '1875₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 1875,
      },
      {
        code: 'per_3h',
        title: '1500₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1500,
      },
      {
        code: 'sum',
        title: '1875 ₽',
        hourAmount: 24,
        priceFewDays: 1875,
      },
    ],
  },
  {
    id: 3298,
    point: {
      lat: 55.782324,
      lon: 49.128836,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '4000₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 4000,
      },
      {
        code: 'per_3h',
        title: '3200₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 3200,
      },
      {
        code: 'sum',
        title: '4000 ₽',
        hourAmount: 24,
        priceFewDays: 4000,
      },
    ],
  },
  {
    id: 3299,
    point: {
      lat: 55.778871,
      lon: 49.1152,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2750₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2750,
      },
      {
        code: 'per_3h',
        title: '2200₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2200,
      },
      {
        code: 'sum',
        title: '2750 ₽',
        hourAmount: 24,
        priceFewDays: 2750,
      },
    ],
  },
  {
    id: 3300,
    point: {
      lat: 55.796114754504735,
      lon: 49.128796732037884,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2500,
      },
      {
        code: 'per_3h',
        title: '2000₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2000,
      },
      {
        code: 'sum',
        title: '2500 ₽',
        hourAmount: 24,
        priceFewDays: 2500,
      },
    ],
  },
  {
    id: 3301,
    point: {
      lat: 55.801516,
      lon: 49.11617,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '3500₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 3500,
      },
      {
        code: 'per_3h',
        title: '2800₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2800,
      },
      {
        code: 'sum',
        title: '3500 ₽',
        hourAmount: 24,
        priceFewDays: 3500,
      },
    ],
  },
  {
    id: 3302,
    point: {
      lat: 60.708321,
      lon: 28.747706,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2925₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2925,
      },
      {
        code: 'per_3h',
        title: '2340₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 2340,
      },
      {
        code: 'sum',
        title: '2925 ₽',
        hourAmount: 24,
        priceFewDays: 2925,
      },
    ],
  },
  {
    id: 3303,
    point: {
      lat: 60.700268,
      lon: 28.768843,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2340₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2340,
      },
      {
        code: 'per_3h',
        title: '1872₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1872,
      },
      {
        code: 'sum',
        title: '2340 ₽',
        hourAmount: 24,
        priceFewDays: 2340,
      },
    ],
  },
  {
    id: 3304,
    point: {
      lat: 60.71447,
      lon: 28.754731,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2340₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2340,
      },
      {
        code: 'per_3h',
        title: '1872₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1872,
      },
      {
        code: 'sum',
        title: '2340 ₽',
        hourAmount: 24,
        priceFewDays: 2340,
      },
    ],
  },
  {
    id: 3305,
    point: {
      lat: 60.707251,
      lon: 28.757462,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2106₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2106,
      },
      {
        code: 'per_3h',
        title: '1685₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1685,
      },
      {
        code: 'sum',
        title: '2106 ₽',
        hourAmount: 24,
        priceFewDays: 2106,
      },
    ],
  },
  {
    id: 3306,
    point: {
      lat: 60.713533,
      lon: 28.731312,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2457₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2457,
      },
      {
        code: 'per_3h',
        title: '1966₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1966,
      },
      {
        code: 'sum',
        title: '2457 ₽',
        hourAmount: 24,
        priceFewDays: 2457,
      },
    ],
  },
  {
    id: 3307,
    point: {
      lat: 60.707797,
      lon: 28.752566,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2340₽ / 24 часа',
        hourAmount: 24,
        priceFewDays: 2340,
      },
      {
        code: 'per_3h',
        title: '1872₽ / 3 часа',
        hourAmount: 3,
        priceFewDays: 1872,
      },
      {
        code: 'sum',
        title: '2340 ₽',
        hourAmount: 24,
        priceFewDays: 2340,
      },
    ],
  },
  {
    id: 3308,
    point: {
      lat: 54.684855,
      lon: 20.482154,
    },
    apartment_access_type: {
      id: 2,
      title: 'Классическая аренда',
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        title: '2035₽ / 24 часа',
        hourAmount: 24,
      },
      {

