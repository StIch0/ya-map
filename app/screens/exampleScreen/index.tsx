import React, { useCallback, useEffect, useRef } from 'react';

import {
  PermissionsAndroid,
  UIManager,
  findNodeHandle,
  requireNativeComponent,
} from 'react-native';

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
    id: 138,
    pos: {
      lat: 55.715444,
      lon: 37.404483,
    },
    apartmentAccessType: {
      id: 1,
      title: '1',
      __typename: '1',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 159,
    pos: {
      lat: 55.848963,
      lon: 37.587254,
    },
    apartmentAccessType: {
      id: 1,
      title: '1',
      __typename: '1',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 161,

    pos: {
      lat: 55.700806,
      lon: 37.681487,
    },
    apartmentAccessType: {
      id: 1,
      title: '1',
      __typename: '1',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 162,

    pos: {
      lat: 55.72452,
      lon: 37.413161,
    },
    apartmentAccessType: {
      id: 1,
      title: '1',
      __typename: '1',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6896,

    pos: {
      lat: 55.751047,
      lon: 37.534164,
    },
    apartmentAccessType: {
      id: 1,
      title: '1',
      __typename: '1',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 191,

    pos: {
      lat: 55.79917928669273,
      lon: 37.37750268650816,
    },
    apartmentAccessType: {
      id: 1,
      title: '1',
      __typename: '1',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 268,

    pos: {
      lat: 55.79833628114515,
      lon: 37.37737778593203,
    },
    apartmentAccessType: {
      id: 1,
      title: '1',
      __typename: '1',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 274,

    pos: {
      lat: 55.79836894519046,
      lon: 37.37713858399189,
    },
    apartmentAccessType: {
      id: 1,
      title: '1',
      __typename: '1',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 299,

    pos: {
      lat: 55.79882177196829,
      lon: 37.37412815424734,
    },
    apartmentAccessType: {
      id: 1,
      title: '1',
      __typename: '1',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 310,

    pos: {
      lat: 55.798186,
      lon: 37.37739,
    },
    apartmentAccessType: {
      id: 1,
      title: '1',
      __typename: '1',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5073,

    pos: {
      lat: 55.79893,
      lon: 37.373958,
    },
    apartmentAccessType: {
      id: 1,
      title: '1',
      __typename: '1',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 7125,

    pos: {
      lat: 55.798976,
      lon: 37.378845,
    },
    apartmentAccessType: {
      id: 1,
      title: '1',
      __typename: '1',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 320,

    pos: {
      lat: 55.812186,
      lon: 37.639383,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 321,

    pos: {
      lat: 55.840462,
      lon: 37.535278,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 322,

    pos: {
      lat: 55.722593,
      lon: 37.645806,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 323,

    pos: {
      lat: 55.840118,
      lon: 37.546579,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 324,

    pos: {
      lat: 55.76915758530566,
      lon: 37.472340377049896,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 366,

    pos: {
      lat: 55.7691900689516,
      lon: 37.4726739999999,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 367,

    pos: {
      lat: 55.714333,
      lon: 37.51777,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 368,

    pos: {
      lat: 55.776143,
      lon: 37.672792,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1174,

    pos: {
      lat: 55.76919992231341,
      lon: 37.47311285324621,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2595,

    pos: {
      lat: 55.79021,
      lon: 37.472324,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2596,

    pos: {
      lat: 55.899795,
      lon: 37.460834,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2597,

    pos: {
      lat: 55.886973,
      lon: 37.429429,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4490,

    pos: {
      lat: 55.8090216947132,
      lon: 37.647380678573626,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4786,

    pos: {
      lat: 55.808982422117744,
      lon: 37.64696225396729,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4788,

    pos: {
      lat: 55.794517,
      lon: 37.514311,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5069,

    pos: {
      lat: 55.776294,
      lon: 37.672172,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5078,

    pos: {
      lat: 55.753073,
      lon: 37.713261,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6959,

    pos: {
      lat: 55.763923,
      lon: 37.659461,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 7126,

    pos: {
      lat: 55.761335,
      lon: 37.651169,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 315,

    pos: {
      lat: 55.683234,
      lon: 37.727562,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 316,

    pos: {
      lat: 55.683996,
      lon: 37.721678,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 317,

    pos: {
      lat: 55.793419,
      lon: 37.711994,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 325,

    pos: {
      lat: 55.687086,
      lon: 37.860639,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 326,

    pos: {
      lat: 55.724981,
      lon: 37.741612,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 375,

    pos: {
      lat: 55.845703738595596,
      lon: 37.57623683068847,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 434,

    pos: {
      lat: 55.86194326866766,
      lon: 37.54952109259034,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 435,

    pos: {
      lat: 55.876448373617116,
      lon: 37.31443346560668,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 436,

    pos: {
      lat: 55.653766,
      lon: 37.416754,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 437,

    pos: {
      lat: 55.63025582514643,
      lon: 37.51417721527481,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 438,

    pos: {
      lat: 55.751351,
      lon: 37.536544,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 441,

    pos: {
      lat: 55.77499102937225,
      lon: 37.47047805055669,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 453,

    pos: {
      lat: 55.67910114158019,
      lon: 37.69530893430325,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 454,

    pos: {
      lat: 55.75152306009715,
      lon: 37.53557272090145,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 455,

    pos: {
      lat: 55.847861,
      lon: 37.650055,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 456,

    pos: {
      lat: 55.84786156888539,
      lon: 37.65018424603269,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 463,

    pos: {
      lat: 55.91686,
      lon: 37.758186,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 464,

    pos: {
      lat: 55.917455,
      lon: 37.722891,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 465,

    pos: {
      lat: 55.92033,
      lon: 37.712129,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 466,

    pos: {
      lat: 55.91861,
      lon: 37.720906,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 467,

    pos: {
      lat: 55.919498,
      lon: 37.715219,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 468,

    pos: {
      lat: 55.853233,
      lon: 37.66406,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 469,

    pos: {
      lat: 55.908888,
      lon: 37.72175,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 470,

    pos: {
      lat: 55.919347,
      lon: 37.724247,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 471,

    pos: {
      lat: 55.908858,
      lon: 37.718444,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 472,

    pos: {
      lat: 55.918045,
      lon: 37.713953,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 474,

    pos: {
      lat: 55.855083,
      lon: 37.660063,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 475,

    pos: {
      lat: 55.92194,
      lon: 37.72643,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 476,

    pos: {
      lat: 55.914938,
      lon: 37.738692,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 477,

    pos: {
      lat: 55.90857,
      lon: 37.706973,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 478,

    pos: {
      lat: 55.836458,
      lon: 37.632305,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 479,

    pos: {
      lat: 55.84890321176957,
      lon: 37.58751735648342,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 480,

    pos: {
      lat: 55.914696,
      lon: 37.40751,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 559,

    pos: {
      lat: 55.86207299263056,
      lon: 37.54929042261506,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 560,

    pos: {
      lat: 55.861753207192244,
      lon: 37.54981077116395,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 561,

    pos: {
      lat: 55.87622521042578,
      lon: 37.31469095767213,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 562,

    pos: {
      lat: 55.87600807743568,
      lon: 37.31490553439331,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 563,

    pos: {
      lat: 55.7517026707032,
      lon: 37.535623603459136,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 564,

    pos: {
      lat: 55.84792192762849,
      lon: 37.65130004498286,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 565,

    pos: {
      lat: 55.679580781549035,
      lon: 37.695379423189564,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 566,

    pos: {
      lat: 55.67989600930593,
      lon: 37.69565837292711,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 567,

    pos: {
      lat: 55.77502126555214,
      lon: 37.47056924566319,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 568,

    pos: {
      lat: 55.77505452532283,
      lon: 37.47049414381077,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 569,

    pos: {
      lat: 55.77509987950963,
      lon: 37.47049414381077,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 570,

    pos: {
      lat: 55.77509987950963,
      lon: 37.4705638812451,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 571,

    pos: {
      lat: 55.77515430446385,
      lon: 37.47055315240911,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 656,

    pos: {
      lat: 55.90974731495519,
      lon: 37.39079367233315,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 657,

    pos: {
      lat: 55.90981360336841,
      lon: 37.39061128212015,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 658,

    pos: {
      lat: 55.9098979702752,
      lon: 37.390799036751204,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 659,

    pos: {
      lat: 55.90996124533434,
      lon: 37.390605917702125,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 660,

    pos: {
      lat: 55.91001548101678,
      lon: 37.39080440116923,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 662,

    pos: {
      lat: 55.91010888673576,
      lon: 37.39064883304636,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 665,

    pos: {
      lat: 55.91016312221082,
      lon: 37.39078830791512,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 666,

    pos: {
      lat: 55.910235436059104,
      lon: 37.390654197464386,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 667,

    pos: {
      lat: 55.910271592932446,
      lon: 37.39082585884133,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 668,

    pos: {
      lat: 55.91022307719185,
      lon: 37.390681501632464,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 669,

    pos: {
      lat: 55.91013871099537,
      lon: 37.39089607835367,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 670,

    pos: {
      lat: 55.91021102488934,
      lon: 37.391067739730616,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 671,

    pos: {
      lat: 55.91012607208092,
      lon: 37.391280742988016,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 672,

    pos: {
      lat: 55.91019838599858,
      lon: 37.391430946692836,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 673,

    pos: {
      lat: 55.91012607208092,
      lon: 37.3916026080698,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 674,

    pos: {
      lat: 55.910210438305015,
      lon: 37.39168843875828,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 675,

    pos: {
      lat: 55.91013812440993,
      lon: 37.39188155780736,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 679,

    pos: {
      lat: 55.91013812440993,
      lon: 37.39188155780736,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 680,

    pos: {
      lat: 55.910210438305015,
      lon: 37.39201030384007,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 681,

    pos: {
      lat: 55.9100899150713,
      lon: 37.39211759220065,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 682,

    pos: {
      lat: 55.910074,
      lon: 37.392041,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 683,

    pos: {
      lat: 55.910074,
      lon: 37.392041,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 684,

    pos: {
      lat: 55.910069,
      lon: 37.390838,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 685,

    pos: {
      lat: 55.910069,
      lon: 37.390838,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 686,

    pos: {
      lat: 55.910074,
      lon: 37.392041,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 921,

    pos: {
      lat: 55.7495187469957,
      lon: 37.53394179629509,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 922,

    pos: {
      lat: 55.74699713824093,
      lon: 37.538740457529315,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 923,

    pos: {
      lat: 55.746741347150255,
      lon: 37.53877589316486,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 924,

    pos: {
      lat: 55.75170678259112,
      lon: 37.533467202938546,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 925,

    pos: {
      lat: 55.74698341197326,
      lon: 37.53909775824665,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 927,

    pos: {
      lat: 55.751694680857334,
      lon: 37.53391781405305,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 928,

    pos: {
      lat: 55.751525256188344,
      lon: 37.533992915905465,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 929,

    pos: {
      lat: 55.74954295181533,
      lon: 37.53423147486869,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 930,

    pos: {
      lat: 55.74950664458022,
      lon: 37.53384523677053,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 931,

    pos: {
      lat: 55.7468411990725,
      lon: 37.53947863192678,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 933,

    pos: {
      lat: 55.74927669796986,
      lon: 37.534016898147485,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 935,

    pos: {
      lat: 55.751370005398954,
      lon: 37.53341444930695,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 936,

    pos: {
      lat: 55.7512429359044,
      lon: 37.53378995856903,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 937,

    pos: {
      lat: 55.751611907598246,
      lon: 37.53548412859035,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 938,

    pos: {
      lat: 55.74711957277341,
      lon: 37.539575191451306,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1047,

    pos: {
      lat: 55.773354022880376,
      lon: 37.21977334655761,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1048,

    pos: {
      lat: 55.557407077604026,
      lon: 36.698983906745845,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1049,

    pos: {
      lat: 55.662377953753456,
      lon: 37.28551014418027,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1050,

    pos: {
      lat: 55.66091870241026,
      lon: 37.29980143254088,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1051,

    pos: {
      lat: 55.77345078265431,
      lon: 37.22027760185242,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1052,

    pos: {
      lat: 55.77355963711162,
      lon: 37.22066383995055,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1053,

    pos: {
      lat: 55.593278,
      lon: 37.041195,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1054,

    pos: {
      lat: 55.701724353917925,
      lon: 37.361694771163926,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1055,

    pos: {
      lat: 55.70151230059804,
      lon: 37.361748415344216,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1056,

    pos: {
      lat: 55.7012881286892,
      lon: 37.36175914418027,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1057,

    pos: {
      lat: 55.701009426677544,
      lon: 37.36172695767208,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1058,

    pos: {
      lat: 55.55060131023605,
      lon: 36.69073931349178,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1059,

    pos: {
      lat: 55.550769,
      lon: 36.690771,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1060,

    pos: {
      lat: 55.550935827437165,
      lon: 36.690803686508154,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1061,

    pos: {
      lat: 55.70206892253016,
      lon: 37.364084956344534,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1062,

    pos: {
      lat: 55.702020453730924,
      lon: 37.36440682142632,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1063,

    pos: {
      lat: 55.70209921549902,
      lon: 37.36469649999992,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1064,

    pos: {
      lat: 55.702052583928314,
      lon: 37.365141920337834,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1065,

    pos: {
      lat: 55.6559688123505,
      lon: 37.26507248280329,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1066,

    pos: {
      lat: 55.65564125931928,
      lon: 37.26527633068842,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1067,

    pos: {
      lat: 55.55721991087797,
      lon: 36.698945024245376,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1068,

    pos: {
      lat: 55.555163,
      lon: 36.701138,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1069,

    pos: {
      lat: 55.557317,
      lon: 36.701452,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1070,

    pos: {
      lat: 55.66115523673726,
      lon: 37.3000589246063,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1071,

    pos: {
      lat: 55.5570952475499,
      lon: 36.69893429540932,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1072,

    pos: {
      lat: 55.55694929973427,
      lon: 36.69893429540932,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1073,

    pos: {
      lat: 55.556815513758366,
      lon: 36.6989289309913,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1074,

    pos: {
      lat: 55.688497,
      lon: 37.297637,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1075,

    pos: {
      lat: 55.60012154752594,
      lon: 37.047781101188676,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1076,

    pos: {
      lat: 55.662612825645276,
      lon: 37.28533369444456,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1077,

    pos: {
      lat: 55.654157,
      lon: 37.268011,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1078,

    pos: {
      lat: 55.66139176962876,
      lon: 37.30046662037658,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1079,

    pos: {
      lat: 55.6003058821212,
      lon: 37.0479295505121,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1081,

    pos: {
      lat: 55.66364695563274,
      lon: 37.30239038954925,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1082,

    pos: {
      lat: 55.66350140552277,
      lon: 37.302218728172306,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1083,

    pos: {
      lat: 55.66331946712087,
      lon: 37.3020899821396,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1084,

    pos: {
      lat: 55.663210303672024,
      lon: 37.30239038954925,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1085,

    pos: {
      lat: 55.695966,
      lon: 37.317158,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1086,

    pos: {
      lat: 55.677428,
      lon: 37.289562,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1087,

    pos: {
      lat: 55.60045388219435,
      lon: 37.0480563959712,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1088,

    pos: {
      lat: 55.6005814445316,
      lon: 37.04796520086468,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1089,

    pos: {
      lat: 55.60063915116638,
      lon: 37.04765406461897,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1090,

    pos: {
      lat: 55.696235,
      lon: 37.328548,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1091,

    pos: {
      lat: 55.681899,
      lon: 37.246209,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1092,

    pos: {
      lat: 55.70565,
      lon: 37.327632,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1128,

    pos: {
      lat: 55.802991483201644,
      lon: 37.59126746560669,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1129,

    pos: {
      lat: 55.80277025850876,
      lon: 37.59154826190183,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1131,

    pos: {
      lat: 55.80352672662103,
      lon: 37.59107891534421,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1132,

    pos: {
      lat: 55.80308816907556,
      lon: 37.591675161376955,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1133,

    pos: {
      lat: 55.8029068828642,
      lon: 37.59135329629517,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1134,

    pos: {
      lat: 55.80544264266106,
      lon: 37.589847169975215,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1135,

    pos: {
      lat: 55.80391925985194,
      lon: 37.590456555386524,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1136,

    pos: {
      lat: 55.80413679752311,
      lon: 37.590842793484654,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1137,

    pos: {
      lat: 55.80300356894909,
      lon: 37.591718076721186,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1138,

    pos: {
      lat: 55.80357506892071,
      lon: 37.59082142327877,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1139,

    pos: {
      lat: 55.80243185412024,
      lon: 37.5917413809509,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1140,

    pos: {
      lat: 55.80364758225719,
      lon: 37.591186203704794,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1141,

    pos: {
      lat: 55.80301525211253,
      lon: 37.591784434912974,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1298,

    pos: {
      lat: 55.844925,
      lon: 37.367697,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1299,

    pos: {
      lat: 55.763407,
      lon: 37.605652,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 1690,

    pos: {
      lat: 55.76287,
      lon: 37.565398,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2038,

    pos: {
      lat: 55.648402,
      lon: 37.499624,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2039,

    pos: {
      lat: 55.64905580094672,
      lon: 37.53405895700633,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2040,

    pos: {
      lat: 55.64915893720994,
      lon: 37.533989219571936,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2113,

    pos: {
      lat: 55.80243185412024,
      lon: 37.592020330688456,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2114,

    pos: {
      lat: 55.8030877664961,
      lon: 37.591655688880266,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2115,

    pos: {
      lat: 55.80256479905372,
      lon: 37.5920847037048,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2116,

    pos: {
      lat: 55.84667240284183,
      lon: 37.58095238095089,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2117,

    pos: {
      lat: 55.845739,
      lon: 37.582574,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2118,

    pos: {
      lat: 55.84646114000905,
      lon: 37.5810811269836,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2119,

    pos: {
      lat: 55.84622573149422,
      lon: 37.58110258465573,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2120,

    pos: {
      lat: 55.846050683208915,
      lon: 37.58110258465573,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2121,

    pos: {
      lat: 55.845857525561556,
      lon: 37.58099529629512,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2122,

    pos: {
      lat: 55.845007132069206,
      lon: 37.576339406082134,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2123,

    pos: {
      lat: 55.84574887396135,
      lon: 37.581349347885094,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2124,

    pos: {
      lat: 55.84609444646911,
      lon: 37.58391931969842,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2125,

    pos: {
      lat: 55.846708619211654,
      lon: 37.58143517857357,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2126,

    pos: {
      lat: 55.84587714429376,
      lon: 37.584101709911415,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2127,

    pos: {
      lat: 55.84460873262478,
      lon: 37.57665054232784,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2136,

    pos: {
      lat: 55.60918389783766,
      lon: 38.0868675158691,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2137,

    pos: {
      lat: 55.609123167297284,
      lon: 38.087779466934144,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2185,

    pos: {
      lat: 55.797377,
      lon: 37.506594,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2186,

    pos: {
      lat: 55.795282,
      lon: 37.563673,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2190,

    pos: {
      lat: 55.801986,
      lon: 37.558688,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2191,

    pos: {
      lat: 55.78646,
      lon: 37.558634,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2192,

    pos: {
      lat: 55.806226,
      lon: 37.522701,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2193,

    pos: {
      lat: 55.775854,
      lon: 37.531702,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2194,

    pos: {
      lat: 55.799345,
      lon: 37.553558,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2195,

    pos: {
      lat: 55.782213,
      lon: 37.566395,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2196,

    pos: {
      lat: 55.799477,
      lon: 37.528567,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2382,

    pos: {
      lat: 55.846517,
      lon: 37.365469,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2383,

    pos: {
      lat: 55.846037,
      lon: 37.366493,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2509,

    pos: {
      lat: 55.675519,
      lon: 37.55443,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2510,

    pos: {
      lat: 55.676169,
      lon: 37.579259,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2511,

    pos: {
      lat: 55.677103,
      lon: 37.559802,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2512,

    pos: {
      lat: 55.690608,
      lon: 37.574525,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 2513,

    pos: {
      lat: 55.69419,
      lon: 37.567842,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3145,

    pos: {
      lat: 55.633794193179575,
      lon: 37.33179171206147,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3146,

    pos: {
      lat: 55.633842746920536,
      lon: 37.33205456854493,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3147,

    pos: {
      lat: 55.643322883817085,
      lon: 37.35955534788506,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3148,

    pos: {
      lat: 55.633860954557804,
      lon: 37.33227987410217,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3149,

    pos: {
      lat: 55.64352918639737,
      lon: 37.35919056745904,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3151,

    pos: {
      lat: 55.638069,
      lon: 37.332735,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3152,

    pos: {
      lat: 55.63389736980689,
      lon: 37.3324622643152,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3153,

    pos: {
      lat: 55.64369908182054,
      lon: 37.358847244705125,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3154,

    pos: {
      lat: 55.63400358075587,
      lon: 37.3323925268808,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3155,

    pos: {
      lat: 55.634170483091516,
      lon: 37.33227450968415,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3156,

    pos: {
      lat: 55.64387504415718,
      lon: 37.35853610845941,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3178,

    pos: {
      lat: 55.54594892168078,
      lon: 37.69902768650814,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3181,

    pos: {
      lat: 55.54595500456026,
      lon: 37.69966068783566,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3182,

    pos: {
      lat: 55.545687356969154,
      lon: 37.69938173809811,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3183,

    pos: {
      lat: 55.54551095187439,
      lon: 37.699489026458686,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3184,

    pos: {
      lat: 55.54551095187439,
      lon: 37.69903841534419,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3425,

    pos: {
      lat: 55.920573,
      lon: 37.541189,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3426,

    pos: {
      lat: 55.920573,
      lon: 37.541189,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3507,

    pos: {
      lat: 55.8458612805926,
      lon: 37.576165144905666,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3509,

    pos: {
      lat: 55.845991058480564,
      lon: 37.576116865143405,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3511,

    pos: {
      lat: 55.84613592630667,
      lon: 37.57607394979917,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3512,

    pos: {
      lat: 55.846213850598296,
      lon: 37.57596109941858,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3517,

    pos: {
      lat: 55.84632250089331,
      lon: 37.57582698896782,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3519,

    pos: {
      lat: 55.77555,
      lon: 37.672118,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3526,

    pos: {
      lat: 55.778193,
      lon: 37.689384,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3600,

    pos: {
      lat: 55.79120637462204,
      lon: 37.52315204384209,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3643,

    pos: {
      lat: 55.67161,
      lon: 37.505696,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3644,

    pos: {
      lat: 55.608734,
      lon: 37.603927,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3645,

    pos: {
      lat: 55.652055,
      lon: 37.606442,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3673,

    pos: {
      lat: 55.642786096146246,
      lon: 37.357438439811695,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3813,

    pos: {
      lat: 55.10712549414591,
      lon: 38.745146322090115,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3814,

    pos: {
      lat: 55.077297847174485,
      lon: 38.75868640674587,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3815,

    pos: {
      lat: 55.10088170285845,
      lon: 38.77114075396724,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3816,

    pos: {
      lat: 55.07753483364072,
      lon: 38.75799439682004,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3817,

    pos: {
      lat: 55.075500660177006,
      lon: 38.774347364418,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3848,

    pos: {
      lat: 55.741131515395026,
      lon: 37.68745843187711,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3849,

    pos: {
      lat: 55.77040004856822,
      lon: 37.68547081349184,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3900,

    pos: {
      lat: 55.84641304257287,
      lon: 37.57617031172174,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3976,

    pos: {
      lat: 55.751496940694174,
      lon: 37.535280280705216,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3978,

    pos: {
      lat: 55.75158770406777,
      lon: 37.53506570398403,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3980,

    pos: {
      lat: 55.749747541412816,
      lon: 37.53660737962337,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3982,

    pos: {
      lat: 55.74952364743492,
      lon: 37.53674685449216,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3983,

    pos: {
      lat: 55.749332318103775,
      lon: 37.53659037976701,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3987,

    pos: {
      lat: 55.75191688833059,
      lon: 37.53490044880728,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3989,

    pos: {
      lat: 55.74943657641314,
      lon: 37.53744561626456,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3991,

    pos: {
      lat: 55.74943657641314,
      lon: 37.53716666652701,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3992,

    pos: {
      lat: 55.74957575421446,
      lon: 37.537552904625166,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3993,

    pos: {
      lat: 55.74978754556407,
      lon: 37.53756363346122,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3994,

    pos: {
      lat: 55.74998118235897,
      lon: 37.53750998928093,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 3995,

    pos: {
      lat: 55.750996571204396,
      lon: 37.53358089649123,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4112,

    pos: {
      lat: 55.80537013268216,
      lon: 37.589933000663684,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4113,

    pos: {
      lat: 55.805423522707194,
      lon: 37.58976925774798,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4114,

    pos: {
      lat: 55.80535101269252,
      lon: 37.58981217309222,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4115,

    pos: {
      lat: 55.805399352717366,
      lon: 37.58966196938741,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4116,

    pos: {
      lat: 55.80531475763433,
      lon: 37.58966196938741,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4117,

    pos: {
      lat: 55.80536309770437,
      lon: 37.589447392666195,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4118,

    pos: {
      lat: 55.805266417504,
      lon: 37.589447392666195,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4126,

    pos: {
      lat: 55.808913,
      lon: 37.653801,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4127,

    pos: {
      lat: 56.32438251794904,
      lon: 38.142708103179935,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4128,

    pos: {
      lat: 56.32450770636656,
      lon: 38.142461339950565,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4129,

    pos: {
      lat: 56.32468210173305,
      lon: 38.1421758883568,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4130,

    pos: {
      lat: 56.324162,
      lon: 38.139386,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4131,

    pos: {
      lat: 56.32454499121654,
      lon: 38.141854023275016,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4223,

    pos: {
      lat: 55.617444,
      lon: 37.539931,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4224,

    pos: {
      lat: 55.840042,
      lon: 37.495123,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4225,

    pos: {
      lat: 55.839572,
      lon: 37.493192,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4230,

    pos: {
      lat: 55.82454119548344,
      lon: 37.442272347885144,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4231,

    pos: {
      lat: 55.84259200507707,
      lon: 37.37303999933621,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4232,

    pos: {
      lat: 55.82432377232187,
      lon: 37.44195048280336,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4246,

    pos: {
      lat: 55.617449,
      lon: 37.408786,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4247,

    pos: {
      lat: 55.614287978281055,
      lon: 37.412597390212994,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4248,

    pos: {
      lat: 55.603247,
      lon: 37.41105,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4249,

    pos: {
      lat: 55.60402,
      lon: 37.41476,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4250,

    pos: {
      lat: 55.618364,
      lon: 37.409612,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4251,

    pos: {
      lat: 55.614081521047865,
      lon: 37.412307711639365,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4253,

    pos: {
      lat: 55.619192608090124,
      lon: 37.41434972363055,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4254,

    pos: {
      lat: 55.60137746037319,
      lon: 37.41136745767205,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4255,

    pos: {
      lat: 55.61884653147332,
      lon: 37.414414096646915,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4268,

    pos: {
      lat: 55.812828,
      lon: 37.489931,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4269,

    pos: {
      lat: 55.74445,
      lon: 37.613072,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4270,

    pos: {
      lat: 55.765412,
      lon: 37.607862,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4271,

    pos: {
      lat: 55.857644,
      lon: 37.619612,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4272,

    pos: {
      lat: 55.737238,
      lon: 37.588072,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4273,

    pos: {
      lat: 55.77544927973755,
      lon: 37.5856187786948,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4274,

    pos: {
      lat: 55.75182007487836,
      lon: 37.535222313889065,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4275,

    pos: {
      lat: 55.745088,
      lon: 37.497369,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4276,

    pos: {
      lat: 55.774796,
      lon: 37.556316,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4277,

    pos: {
      lat: 55.77530717105447,
      lon: 37.58583871983401,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4329,

    pos: {
      lat: 55.637718,
      lon: 37.315038,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4330,

    pos: {
      lat: 55.637581,
      lon: 37.319772,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4369,

    pos: {
      lat: 55.768188,
      lon: 37.682431,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4371,

    pos: {
      lat: 55.64317725780925,
      lon: 37.35925494047538,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4377,

    pos: {
      lat: 55.8455301970103,
      lon: 37.57617245767211,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4473,

    pos: {
      lat: 55.660648,
      lon: 37.729808,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4474,

    pos: {
      lat: 55.663481,
      lon: 37.73041,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4475,

    pos: {
      lat: 55.66384492561727,
      lon: 37.73286396693418,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4476,

    pos: {
      lat: 55.663875248334385,
      lon: 37.73262793254087,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4477,

    pos: {
      lat: 55.661796,
      lon: 37.729592,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4478,

    pos: {
      lat: 55.66377821555657,
      lon: 37.73242408465574,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4491,

    pos: {
      lat: 55.814249,
      lon: 37.718857,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4543,

    pos: {
      lat: 55.856578,
      lon: 37.183129,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4544,

    pos: {
      lat: 55.85626028371358,
      lon: 37.18569944425524,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4545,

    pos: {
      lat: 55.85631761207833,
      lon: 37.18582282586992,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4546,

    pos: {
      lat: 55.854997,
      lon: 37.182931,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4547,

    pos: {
      lat: 55.85629347382984,
      lon: 37.1854419521898,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4548,

    pos: {
      lat: 55.85527,
      lon: 37.184809,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4549,

    pos: {
      lat: 55.854658,
      lon: 37.183875,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4550,

    pos: {
      lat: 55.85638700945883,
      lon: 37.185420494517686,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4582,

    pos: {
      lat: 55.76420222946512,
      lon: 37.5128569232788,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4583,

    pos: {
      lat: 55.7953305409901,
      lon: 37.52792195288576,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4584,

    pos: {
      lat: 55.79548466443568,
      lon: 37.528147258443,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4585,

    pos: {
      lat: 55.764069153011995,
      lon: 37.51315733068848,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4586,

    pos: {
      lat: 55.746036,
      lon: 37.494782,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4587,

    pos: {
      lat: 55.76070580080784,
      lon: 37.517716591262754,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4588,

    pos: {
      lat: 55.76068160294411,
      lon: 37.51799554100028,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4589,

    pos: {
      lat: 55.76052431646228,
      lon: 37.51808137168878,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4590,

    pos: {
      lat: 55.76055153916818,
      lon: 37.51832813491815,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4591,

    pos: {
      lat: 55.76041845020232,
      lon: 37.518446152114805,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4592,

    pos: {
      lat: 55.76053558620016,
      lon: 37.51874732143975,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4593,

    pos: {
      lat: 55.75362512038704,
      lon: 37.51315620168914,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4594,

    pos: {
      lat: 55.753643346695526,
      lon: 37.524633354490916,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4595,

    pos: {
      lat: 55.75367965006424,
      lon: 37.524826473539996,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4596,

    pos: {
      lat: 55.75374015560336,
      lon: 37.52475137168757,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4597,

    pos: {
      lat: 55.753818812663305,
      lon: 37.524633354490916,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4598,

    pos: {
      lat: 55.75384301480355,
      lon: 37.5248479312121,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4599,

    pos: {
      lat: 55.753951924248035,
      lon: 37.524762100523624,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4600,

    pos: {
      lat: 55.754000328347544,
      lon: 37.524633354490916,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4601,

    pos: {
      lat: 55.754000328347544,
      lon: 37.5248479312121,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4602,

    pos: {
      lat: 55.790988764399195,
      lon: 37.52316277267814,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4603,

    pos: {
      lat: 55.75145347474722,
      lon: 37.53517575396724,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4610,

    pos: {
      lat: 55.66356595551277,
      lon: 37.73248845767211,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4611,

    pos: {
      lat: 55.66335975893465,
      lon: 37.73253137301634,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4612,

    pos: {
      lat: 55.663202078462284,
      lon: 37.73253137301634,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4613,

    pos: {
      lat: 55.660551,
      lon: 37.730706,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4677,

    pos: {
      lat: 55.72498454629348,
      lon: 37.79867884788512,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4678,

    pos: {
      lat: 55.77401185520648,
      lon: 37.69169765170796,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4680,

    pos: {
      lat: 55.601614355923935,
      lon: 37.41077737168879,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4681,

    pos: {
      lat: 55.601656875486086,
      lon: 37.41188244180291,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4690,

    pos: {
      lat: 55.509158184622216,
      lon: 37.34038489814753,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4693,

    pos: {
      lat: 55.694824,
      lon: 37.720376,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4694,

    pos: {
      lat: 55.508835,
      lon: 37.341565,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4695,

    pos: {
      lat: 55.508792867149246,
      lon: 37.340492186508136,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4696,

    pos: {
      lat: 55.732058,
      lon: 37.467131,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4699,

    pos: {
      lat: 55.516486,
      lon: 37.355156,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4701,

    pos: {
      lat: 55.413944,
      lon: 37.832225,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4702,

    pos: {
      lat: 55.892178,
      lon: 37.350288,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4703,

    pos: {
      lat: 55.694566,
      lon: 37.572737,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4705,

    pos: {
      lat: 55.70935999085104,
      lon: 37.624335291167355,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4707,

    pos: {
      lat: 55.709426622864555,
      lon: 37.624185087462514,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4710,

    pos: {
      lat: 55.579694,
      lon: 37.671094,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4711,

    pos: {
      lat: 55.595786,
      lon: 37.646777,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4712,

    pos: {
      lat: 55.601116,
      lon: 37.658482,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4713,

    pos: {
      lat: 55.859564,
      lon: 37.443721,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4714,

    pos: {
      lat: 55.611643,
      lon: 37.533688,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4715,

    pos: {
      lat: 55.605805,
      lon: 37.750254,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4716,

    pos: {
      lat: 55.58064,
      lon: 37.668076,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4717,

    pos: {
      lat: 55.717705,
      lon: 37.745016,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4719,

    pos: {
      lat: 55.57547,
      lon: 37.669046,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4722,

    pos: {
      lat: 55.695464,
      lon: 37.61424,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4723,

    pos: {
      lat: 55.60234740168182,
      lon: 37.734277330688464,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4724,

    pos: {
      lat: 55.576666,
      lon: 37.668246,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4726,

    pos: {
      lat: 55.425609,
      lon: 37.763423,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4727,

    pos: {
      lat: 55.633343,
      lon: 37.676313,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4728,

    pos: {
      lat: 55.583342,
      lon: 37.694774,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4729,

    pos: {
      lat: 55.593873,
      lon: 37.651071,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4730,

    pos: {
      lat: 55.602057,
      lon: 37.668866,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4733,

    pos: {
      lat: 55.604605,
      lon: 37.65876,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4735,

    pos: {
      lat: 55.614953,
      lon: 37.703856,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4736,

    pos: {
      lat: 55.625196,
      lon: 37.674202,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4737,

    pos: {
      lat: 55.620667,
      lon: 37.664941,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4738,

    pos: {
      lat: 55.588633,
      lon: 37.671274,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4740,

    pos: {
      lat: 55.622207,
      lon: 37.661859,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4789,

    pos: {
      lat: 55.848969604594906,
      lon: 37.58738324603266,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4791,

    pos: {
      lat: 55.739554,
      lon: 37.676412,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4792,

    pos: {
      lat: 55.781469,
      lon: 37.561068,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4793,

    pos: {
      lat: 55.68634,
      lon: 37.524615,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4798,

    pos: {
      lat: 55.842474,
      lon: 37.420904,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4801,

    pos: {
      lat: 55.840735,
      lon: 37.494404,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4802,

    pos: {
      lat: 55.871087,
      lon: 37.401671,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4804,

    pos: {
      lat: 55.871087,
      lon: 37.401671,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4805,

    pos: {
      lat: 55.871455,
      lon: 37.404402,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4806,

    pos: {
      lat: 55.868092,
      lon: 37.397072,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4811,

    pos: {
      lat: 55.87292,
      lon: 37.398482,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4813,

    pos: {
      lat: 55.872466,
      lon: 37.391583,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4818,

    pos: {
      lat: 55.874026,
      lon: 37.396847,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4821,

    pos: {
      lat: 55.845865,
      lon: 37.372503,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4822,

    pos: {
      lat: 55.871455,
      lon: 37.404402,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4826,

    pos: {
      lat: 55.7750726095188,
      lon: 37.55218812520175,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4827,

    pos: {
      lat: 55.871087,
      lon: 37.401671,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4829,

    pos: {
      lat: 55.87395,
      lon: 37.399946,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4831,

    pos: {
      lat: 55.873304,
      lon: 37.392203,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4832,

    pos: {
      lat: 55.788454,
      lon: 37.557583,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4833,

    pos: {
      lat: 55.80205688074219,
      lon: 37.531111762565565,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4834,

    pos: {
      lat: 55.747642,
      lon: 37.564994,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4836,

    pos: {
      lat: 55.685198,
      lon: 37.532583,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4837,

    pos: {
      lat: 55.75317756275368,
      lon: 37.591651830688406,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4839,

    pos: {
      lat: 55.681757,
      lon: 37.524857,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4841,

    pos: {
      lat: 55.804901,
      lon: 37.509289,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4842,

    pos: {
      lat: 55.672433,
      lon: 37.501654,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4843,

    pos: {
      lat: 55.77525402586349,
      lon: 37.552048650332964,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4848,

    pos: {
      lat: 55.802786,
      lon: 37.510664,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4849,

    pos: {
      lat: 55.876097,
      lon: 37.398824,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4850,

    pos: {
      lat: 55.87287,
      lon: 37.39046,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4851,

    pos: {
      lat: 55.876016,
      lon: 37.388143,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4852,

    pos: {
      lat: 55.877016,
      lon: 37.389086,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4853,

    pos: {
      lat: 55.876688,
      lon: 37.393973,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4854,

    pos: {
      lat: 55.889021747967995,
      lon: 37.43737855026242,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4855,

    pos: {
      lat: 55.775748,
      lon: 37.546794,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4856,

    pos: {
      lat: 55.6729,
      lon: 37.527651,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4857,

    pos: {
      lat: 55.67559,
      lon: 37.487721,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4858,

    pos: {
      lat: 55.871455,
      lon: 37.404402,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4859,

    pos: {
      lat: 55.779307,
      lon: 37.483517,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4861,

    pos: {
      lat: 55.69898,
      lon: 37.563188,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4862,

    pos: {
      lat: 55.778198,
      lon: 37.48702,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4863,

    pos: {
      lat: 55.67622,
      lon: 37.488062,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4864,

    pos: {
      lat: 55.734714,
      lon: 37.612308,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4865,

    pos: {
      lat: 55.877016,
      lon: 37.389086,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4866,

    pos: {
      lat: 55.8491,
      lon: 37.415407,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4868,

    pos: {
      lat: 55.917647,
      lon: 37.408552,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4869,

    pos: {
      lat: 55.871087,
      lon: 37.401671,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4871,

    pos: {
      lat: 55.876016,
      lon: 37.388143,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4872,

    pos: {
      lat: 55.873698,
      lon: 37.394979,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4873,

    pos: {
      lat: 55.671864,
      lon: 37.499058,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4875,

    pos: {
      lat: 55.826655,
      lon: 37.427372,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4876,

    pos: {
      lat: 55.780886,
      lon: 37.560296,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4880,

    pos: {
      lat: 55.68920040343919,
      lon: 37.541255857147206,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4888,

    pos: {
      lat: 55.881131,
      lon: 37.417931,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4889,

    pos: {
      lat: 55.914721,
      lon: 37.409082,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4890,

    pos: {
      lat: 55.83648013595926,
      lon: 37.49321778836056,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4891,

    pos: {
      lat: 55.836655227524254,
      lon: 37.49312659325406,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4892,

    pos: {
      lat: 55.864652,
      lon: 37.395473,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4893,

    pos: {
      lat: 55.842492399386174,
      lon: 37.37323848280331,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4894,

    pos: {
      lat: 55.873996,
      lon: 37.389068,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4895,

    pos: {
      lat: 55.881131,
      lon: 37.417931,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4896,

    pos: {
      lat: 55.881131,
      lon: 37.417931,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4899,

    pos: {
      lat: 55.881131,
      lon: 37.417931,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4900,

    pos: {
      lat: 55.865803,
      lon: 37.386328,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4901,

    pos: {
      lat: 55.873996,
      lon: 37.389068,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4902,

    pos: {
      lat: 55.800985,
      lon: 37.516988,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4903,

    pos: {
      lat: 55.9158,
      lon: 37.406926,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4905,

    pos: {
      lat: 55.80438,
      lon: 37.396704,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4906,

    pos: {
      lat: 55.8489243367718,
      lon: 37.58716330489345,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4907,

    pos: {
      lat: 55.697209,
      lon: 37.512586,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4908,

    pos: {
      lat: 55.88882880481099,
      lon: 37.43759312698363,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4909,

    pos: {
      lat: 55.88864791972642,
      lon: 37.43782916137692,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4910,

    pos: {
      lat: 55.88858762451009,
      lon: 37.43821539947508,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4911,

    pos: {
      lat: 55.842365708013745,
      lon: 37.37352258401426,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4912,

    pos: {
      lat: 55.696392,
      lon: 37.494836,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4914,

    pos: {
      lat: 55.69794,
      lon: 37.512505,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4916,

    pos: {
      lat: 55.692303,
      lon: 37.491143,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4920,

    pos: {
      lat: 55.77413885020776,
      lon: 37.6916708296178,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4921,

    pos: {
      lat: 55.77415396863263,
      lon: 37.691466981732674,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4922,

    pos: {
      lat: 55.77424467905807,
      lon: 37.69149916824085,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4923,

    pos: {
      lat: 55.774301968645666,
      lon: 37.691218755022845,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4924,

    pos: {
      lat: 55.774428962697655,
      lon: 37.69119729735074,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4936,

    pos: {
      lat: 55.86939,
      lon: 37.390505,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4937,

    pos: {
      lat: 55.86939,
      lon: 37.390505,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4938,

    pos: {
      lat: 55.865803,
      lon: 37.390478,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4939,

    pos: {
      lat: 55.842509,
      lon: 37.345284,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4947,

    pos: {
      lat: 55.8027,
      lon: 37.716854,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4948,

    pos: {
      lat: 55.76757,
      lon: 37.500136,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4954,

    pos: {
      lat: 55.7370382284447,
      lon: 37.68991704166412,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4955,

    pos: {
      lat: 55.736974670309635,
      lon: 37.69065733135222,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4956,

    pos: {
      lat: 55.652227,
      lon: 37.628954,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4957,

    pos: {
      lat: 55.73628237657568,
      lon: 37.69494414418022,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4958,

    pos: {
      lat: 55.720596,
      lon: 37.693579,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4959,

    pos: {
      lat: 55.750808,
      lon: 37.698609,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4964,

    pos: {
      lat: 55.821013349386085,
      lon: 37.52155847553255,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4965,

    pos: {
      lat: 55.824926,
      lon: 37.516386,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4982,

    pos: {
      lat: 55.397736,
      lon: 37.771121,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4983,

    pos: {
      lat: 55.397736,
      lon: 37.771121,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4984,

    pos: {
      lat: 55.397736,
      lon: 37.771121,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4985,

    pos: {
      lat: 55.397736,
      lon: 37.771121,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4986,

    pos: {
      lat: 55.566231,
      lon: 37.497629,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 4988,

    pos: {
      lat: 55.554242,
      lon: 37.465667,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5036,

    pos: {
      lat: 55.842565,
      lon: 37.379186,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5037,

    pos: {
      lat: 55.715723,
      lon: 37.459478,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5038,

    pos: {
      lat: 55.800830834485616,
      lon: 37.41067813624572,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5039,

    pos: {
      lat: 55.8009847119618,
      lon: 37.41036969156449,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5040,

    pos: {
      lat: 55.819332,
      lon: 37.376851,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5041,

    pos: {
      lat: 55.801190179790424,
      lon: 37.4102087590236,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5042,

    pos: {
      lat: 55.8165,
      lon: 37.368559,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5043,

    pos: {
      lat: 55.716995,
      lon: 37.456972,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5044,

    pos: {
      lat: 55.815099,
      lon: 37.35451,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5045,

    pos: {
      lat: 55.823768,
      lon: 37.367472,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5046,

    pos: {
      lat: 55.814826,
      lon: 37.357537,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5081,

    pos: {
      lat: 55.818538,
      lon: 37.751897,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5346,

    pos: {
      lat: 55.63875,
      lon: 37.306603,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5347,

    pos: {
      lat: 55.626055,
      lon: 37.311283,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5348,

    pos: {
      lat: 55.80309707375097,
      lon: 37.59169191568194,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5351,

    pos: {
      lat: 55.757977,
      lon: 37.562883,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5352,

    pos: {
      lat: 55.853542904203415,
      lon: 37.49824625396726,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5353,

    pos: {
      lat: 55.958941,
      lon: 37.677382,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5354,

    pos: {
      lat: 55.70939633559984,
      lon: 37.6239275953971,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5355,

    pos: {
      lat: 55.707862,
      lon: 37.959633,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5356,

    pos: {
      lat: 55.65875607207088,
      lon: 37.425032119049064,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5357,

    pos: {
      lat: 55.626055,
      lon: 37.311283,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5358,

    pos: {
      lat: 55.673783,
      lon: 37.50434,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5359,

    pos: {
      lat: 55.67315417657679,
      lon: 37.85862299206539,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5360,

    pos: {
      lat: 55.67326331217026,
      lon: 37.858633720901445,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5361,

    pos: {
      lat: 55.807886437363045,
      lon: 37.75882886441801,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5362,

    pos: {
      lat: 55.8078260161993,
      lon: 37.759021983467086,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5363,

    pos: {
      lat: 55.703206936193716,
      lon: 37.64665341489457,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5364,

    pos: {
      lat: 55.703185773533725,
      lon: 37.64615986375423,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5365,

    pos: {
      lat: 55.72266421399776,
      lon: 37.45861687301629,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5366,

    pos: {
      lat: 55.72278532159585,
      lon: 37.45863833068842,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5367,

    pos: {
      lat: 55.722894318111656,
      lon: 37.458509584655715,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5368,

    pos: {
      lat: 55.72300634199008,
      lon: 37.45853640674584,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5369,

    pos: {
      lat: 55.626055,
      lon: 37.311283,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5370,

    pos: {
      lat: 55.626055,
      lon: 37.311283,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5371,

    pos: {
      lat: 55.62498237052828,
      lon: 37.31216326190183,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5372,

    pos: {
      lat: 55.62509164103357,
      lon: 37.3123188300247,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5373,

    pos: {
      lat: 55.74235728427357,
      lon: 37.707440033729554,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5374,

    pos: {
      lat: 55.74252674892856,
      lon: 37.70740784722137,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5375,

    pos: {
      lat: 55.836280511332866,
      lon: 37.498276745368905,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5376,

    pos: {
      lat: 55.836283530175216,
      lon: 37.498426949073746,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5377,

    pos: {
      lat: 55.83623220982312,
      lon: 37.49840012698361,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5378,

    pos: {
      lat: 55.836165795148865,
      lon: 37.4983625760574,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5379,

    pos: {
      lat: 55.805361,
      lon: 37.589617,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5383,

    pos: {
      lat: 55.805361,
      lon: 37.589617,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5386,

    pos: {
      lat: 55.85380356183401,
      lon: 37.49862113206185,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5387,

    pos: {
      lat: 55.709499969746645,
      lon: 37.62371640084972,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5388,

    pos: {
      lat: 55.70326756214814,
      lon: 37.64617595700831,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5389,

    pos: {
      lat: 55.80303664512193,
      lon: 37.5917241021901,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5390,

    pos: {
      lat: 55.80296413064274,
      lon: 37.59145588128863,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5391,

    pos: {
      lat: 55.80301247364393,
      lon: 37.591273491075604,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5394,

    pos: {
      lat: 55.80898897047109,
      lon: 37.759437896110775,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5395,

    pos: {
      lat: 55.80930148244483,
      lon: 37.75930612884503,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5397,

    pos: {
      lat: 55.726081561081294,
      lon: 37.74585940135771,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5398,

    pos: {
      lat: 55.86207919765631,
      lon: 37.54901209555759,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5400,

    pos: {
      lat: 55.86208824814767,
      lon: 37.54924276553286,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5401,

    pos: {
      lat: 55.836180889403025,
      lon: 37.498523508598296,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5402,

    pos: {
      lat: 55.83612051235112,
      lon: 37.49850741534419,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5403,

    pos: {
      lat: 55.83602692773461,
      lon: 37.4984537711639,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5406,

    pos: {
      lat: 55.78167174126781,
      lon: 37.7249338134917,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5407,

    pos: {
      lat: 55.78141780014936,
      lon: 37.724955271163836,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5408,

    pos: {
      lat: 55.781121533410584,
      lon: 37.72501964418017,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5412,

    pos: {
      lat: 55.879923980504415,
      lon: 37.5967535568788,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5413,

    pos: {
      lat: 55.879866687121066,
      lon: 37.59681524768613,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5414,

    pos: {
      lat: 55.87983351722871,
      lon: 37.59694935813687,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5415,

    pos: {
      lat: 55.70141253863241,
      lon: 37.751722119049035,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5416,

    pos: {
      lat: 55.70141859733027,
      lon: 37.751389525131195,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5419,

    pos: {
      lat: 55.86207014716284,
      lon: 37.54942515574588,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5420,

    pos: {
      lat: 55.86197662527297,
      lon: 37.54925885878696,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5421,

    pos: {
      lat: 55.86199170946406,
      lon: 37.5494841643442,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5425,

    pos: {
      lat: 55.8799209650653,
      lon: 37.59691180721068,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5426,

    pos: {
      lat: 55.87992930407406,
      lon: 37.597079296207355,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5430,

    pos: {
      lat: 55.67155250430783,
      lon: 37.85505835515594,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5431,

    pos: {
      lat: 55.67179717142743,
      lon: 37.85525098548783,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5432,

    pos: {
      lat: 55.67188205764995,
      lon: 37.85552993522538,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5433,

    pos: {
      lat: 55.57391298376898,
      lon: 37.46877549999999,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5434,

    pos: {
      lat: 55.573572584411785,
      lon: 37.468786228836045,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5438,

    pos: {
      lat: 55.79976551355541,
      lon: 37.71577849559372,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5439,

    pos: {
      lat: 55.573207867526385,
      lon: 37.468786228836045,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5442,

    pos: {
      lat: 55.626055,
      lon: 37.311283,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5443,

    pos: {
      lat: 55.626055,
      lon: 37.311283,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5446,

    pos: {
      lat: 55.696585,
      lon: 37.326339,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5447,

    pos: {
      lat: 55.696585,
      lon: 37.326339,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5448,

    pos: {
      lat: 55.696585,
      lon: 37.326339,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5449,

    pos: {
      lat: 55.696585,
      lon: 37.326339,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5461,

    pos: {
      lat: 55.658089883932654,
      lon: 37.41203838954923,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5462,

    pos: {
      lat: 55.657880625644744,
      lon: 37.412161771163916,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5463,

    pos: {
      lat: 55.657650136955006,
      lon: 37.4123012460327,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5470,

    pos: {
      lat: 55.707862,
      lon: 37.959633,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5471,

    pos: {
      lat: 55.79988335923701,
      lon: 37.71592333488051,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5472,

    pos: {
      lat: 55.79994983613015,
      lon: 37.71631493739669,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5473,

    pos: {
      lat: 55.868092,
      lon: 37.397072,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5474,

    pos: {
      lat: 55.868092,
      lon: 37.397072,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5479,

    pos: {
      lat: 55.57801277690392,
      lon: 37.4789743831987,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5480,

    pos: {
      lat: 55.577766621335265,
      lon: 37.47895828994459,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5481,

    pos: {
      lat: 55.908883,
      lon: 37.405974,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5482,

    pos: {
      lat: 55.908883,
      lon: 37.405974,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5485,

    pos: {
      lat: 55.909877,
      lon: 37.405462,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5486,

    pos: {
      lat: 55.909877,
      lon: 37.405462,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5489,

    pos: {
      lat: 55.65858624224599,
      lon: 37.42483900000001,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5490,

    pos: {
      lat: 55.658410346290125,
      lon: 37.42462442327881,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5504,

    pos: {
      lat: 55.757977,
      lon: 37.562883,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5514,

    pos: {
      lat: 55.67903824451387,
      lon: 37.695263616442986,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5515,

    pos: {
      lat: 55.67917464335255,
      lon: 37.695360175967515,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5517,

    pos: {
      lat: 55.742638716241544,
      lon: 37.70757950859834,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5518,

    pos: {
      lat: 55.71987115831309,
      lon: 37.69415169934235,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5519,

    pos: {
      lat: 55.71984693500844,
      lon: 37.69392102936706,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5521,

    pos: {
      lat: 55.734303042728165,
      lon: 37.71342258399199,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5522,

    pos: {
      lat: 55.77671,
      lon: 37.578038,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5523,

    pos: {
      lat: 55.78530811868721,
      lon: 37.5642453478851,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5524,

    pos: {
      lat: 55.78550157838569,
      lon: 37.563837652114834,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5525,

    pos: {
      lat: 55.78564667252642,
      lon: 37.563472871688816,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5526,

    pos: {
      lat: 55.67949046550826,
      lon: 37.695281925208334,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5527,

    pos: {
      lat: 55.67962383171835,
      lon: 37.69541067124104,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5528,

    pos: {
      lat: 55.75900351658628,
      lon: 37.73910066931145,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5529,

    pos: {
      lat: 55.62171077162805,
      lon: 37.49825489814757,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5530,

    pos: {
      lat: 55.703165,
      lon: 37.646471,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5531,

    pos: {
      lat: 55.703165,
      lon: 37.646471,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5532,

    pos: {
      lat: 55.70319486116603,
      lon: 37.64593992261499,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5536,

    pos: {
      lat: 55.62156506493197,
      lon: 37.49832999999997,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5537,

    pos: {
      lat: 55.62139197904834,
      lon: 37.49838900859831,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5538,

    pos: {
      lat: 55.621233608250485,
      lon: 37.49842530265552,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5542,

    pos: {
      lat: 55.86181371563454,
      lon: 37.54982212268009,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5544,

    pos: {
      lat: 55.57845352727741,
      lon: 37.47797480555724,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5548,

    pos: {
      lat: 55.57834412622716,
      lon: 37.47796944113919,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5549,

    pos: {
      lat: 55.959167,
      lon: 37.676376,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5550,

    pos: {
      lat: 55.726045231921375,
      lon: 37.74570383323484,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5582,

    pos: {
      lat: 55.967663,
      lon: 35.713207,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5583,

    pos: {
      lat: 55.967249,
      lon: 35.714375,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5666,

    pos: {
      lat: 55.840154,
      lon: 37.582529,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5764,

    pos: {
      lat: 55.925954,
      lon: 37.76778,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5765,

    pos: {
      lat: 55.943144,
      lon: 37.775487,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5766,

    pos: {
      lat: 55.919498,
      lon: 37.715219,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5768,

    pos: {
      lat: 55.921304,
      lon: 37.714896,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5769,

    pos: {
      lat: 55.925954,
      lon: 37.76778,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5789,

    pos: {
      lat: 55.84617305150735,
      lon: 37.57608126256561,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5790,

    pos: {
      lat: 55.84550303390913,
      lon: 37.57651041600797,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5807,

    pos: {
      lat: 55.092216,
      lon: 38.759466,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5911,

    pos: {
      lat: 55.782172,
      lon: 37.566674,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5914,

    pos: {
      lat: 55.753843,
      lon: 37.524525,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5924,

    pos: {
      lat: 55.802933,
      lon: 37.596489,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5925,

    pos: {
      lat: 55.80288875419644,
      lon: 37.59180390740961,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5926,

    pos: {
      lat: 55.80292183046724,
      lon: 37.591327135255895,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5928,

    pos: {
      lat: 55.862722,
      lon: 37.543237,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6048,

    pos: {
      lat: 55.80276789619472,
      lon: 37.591664432540846,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6219,

    pos: {
      lat: 55.915427,
      lon: 37.720645,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6237,

    pos: {
      lat: 55.915916,
      lon: 37.740911,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6239,

    pos: {
      lat: 55.909832,
      lon: 37.723277,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6240,

    pos: {
      lat: 55.910311,
      lon: 37.746966,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6324,

    pos: {
      lat: 55.803575,
      lon: 37.591036,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6325,

    pos: {
      lat: 55.803078945172146,
      lon: 37.59158462732134,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6327,

    pos: {
      lat: 55.80274976746198,
      lon: 37.591911195770216,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6328,

    pos: {
      lat: 55.805356,
      lon: 37.589617,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6329,

    pos: {
      lat: 55.803003,
      lon: 37.591503,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6330,

    pos: {
      lat: 55.789127,
      lon: 37.536472,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6331,

    pos: {
      lat: 55.789127,
      lon: 37.536472,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6332,

    pos: {
      lat: 55.805756,
      lon: 37.588979,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6336,

    pos: {
      lat: 55.802401639299056,
      lon: 37.59193449999996,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6354,

    pos: {
      lat: 55.66835342485267,
      lon: 37.856284952779404,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6355,

    pos: {
      lat: 55.67273468000644,
      lon: 37.858055135581964,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6356,

    pos: {
      lat: 55.67202757645828,
      lon: 37.85563722358598,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6357,

    pos: {
      lat: 55.66845294362075,
      lon: 37.85612521871011,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6358,

    pos: {
      lat: 55.67203970300109,
      lon: 37.85593763099564,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6359,

    pos: {
      lat: 55.66844081596151,
      lon: 37.855803353628325,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6360,

    pos: {
      lat: 55.66853177331378,
      lon: 37.85571752293985,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6361,

    pos: {
      lat: 55.66850145421994,
      lon: 37.85548148854654,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6362,

    pos: {
      lat: 55.668610602847316,
      lon: 37.855374200185956,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6363,

    pos: {
      lat: 55.657321,
      lon: 37.876179,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6364,

    pos: {
      lat: 55.67279228000578,
      lon: 37.858151695106486,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6365,

    pos: {
      lat: 55.672789248428984,
      lon: 37.85798539814757,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6366,

    pos: {
      lat: 55.66855602857185,
      lon: 37.855138165792646,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6367,

    pos: {
      lat: 55.672862006206834,
      lon: 37.85798539814757,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6368,

    pos: {
      lat: 55.66867730463573,
      lon: 37.85500941975994,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6369,

    pos: {
      lat: 55.67282865890884,
      lon: 37.8578298300247,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6370,

    pos: {
      lat: 55.672892321907476,
      lon: 37.857867380950914,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6371,

    pos: {
      lat: 55.66864698565515,
      lon: 37.854805571874806,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6372,

    pos: {
      lat: 55.674717,
      lon: 37.85453,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6373,

    pos: {
      lat: 55.66791923110224,
      lon: 37.858328294967635,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6374,

    pos: {
      lat: 55.66870155980322,
      lon: 37.85473047002238,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6375,

    pos: {
      lat: 55.66797077431788,
      lon: 37.85850532076261,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6376,

    pos: {
      lat: 55.6683,
      lon: 37.857423,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6377,

    pos: {
      lat: 55.672428,
      lon: 37.496731,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6378,

    pos: {
      lat: 55.66854996475875,
      lon: 37.85475192769449,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6379,

    pos: {
      lat: 55.67288322719977,
      lon: 37.857722541664096,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6380,

    pos: {
      lat: 55.668489326575816,
      lon: 37.854601723989674,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6381,

    pos: {
      lat: 55.672928700717144,
      lon: 37.85778155026244,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6382,

    pos: {
      lat: 55.66837411376825,
      lon: 37.854687554678144,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6383,

    pos: {
      lat: 55.66828315604796,
      lon: 37.854462249120886,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6384,

    pos: {
      lat: 55.66823464517697,
      lon: 37.85458026631754,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6385,

    pos: {
      lat: 55.672910511316545,
      lon: 37.85764207539365,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6386,

    pos: {
      lat: 55.673257249089765,
      lon: 37.858397686508134,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6387,

    pos: {
      lat: 55.67333606906274,
      lon: 37.858440601852365,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6388,

    pos: {
      lat: 55.678108,
      lon: 37.866379,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6389,

    pos: {
      lat: 55.67296204792948,
      lon: 37.85770108399199,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6390,

    pos: {
      lat: 55.67130080153725,
      lon: 37.857528865081775,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6391,

    pos: {
      lat: 55.66797389821072,
      lon: 37.854515893301176,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6392,

    pos: {
      lat: 55.674717,
      lon: 37.85453,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6393,

    pos: {
      lat: 55.673311816780355,
      lon: 37.85827966931147,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6394,

    pos: {
      lat: 55.805695,
      lon: 37.477884,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6395,

    pos: {
      lat: 55.67143419578913,
      lon: 37.85729283068846,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6396,

    pos: {
      lat: 55.673384573582226,
      lon: 37.858354771163896,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6397,

    pos: {
      lat: 55.66787375173771,
      lon: 37.85860188028713,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6398,

    pos: {
      lat: 55.64321,
      lon: 37.259441,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6399,

    pos: {
      lat: 55.787477,
      lon: 37.611823,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6400,

    pos: {
      lat: 55.67152514615356,
      lon: 37.857046067459095,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6401,

    pos: {
      lat: 55.67339063664291,
      lon: 37.85814019444271,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6402,

    pos: {
      lat: 55.67348764548562,
      lon: 37.85814019444271,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6403,

    pos: {
      lat: 55.66791923110224,
      lon: 37.85877354166411,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6404,

    pos: {
      lat: 55.66761006231851,
      lon: 37.85445152028483,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6406,

    pos: {
      lat: 55.806676,
      lon: 37.482744,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6408,

    pos: {
      lat: 55.67295598480209,
      lon: 37.857577702377306,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6579,

    pos: {
      lat: 55.822847,
      lon: 37.37748,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6580,

    pos: {
      lat: 55.822847,
      lon: 37.37748,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6581,

    pos: {
      lat: 55.822847,
      lon: 37.37748,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6635,

    pos: {
      lat: 55.625234299288344,
      lon: 37.31246366931149,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6652,

    pos: {
      lat: 55.791294,
      lon: 37.630553,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6653,

    pos: {
      lat: 55.774077,
      lon: 37.739725,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6654,

    pos: {
      lat: 55.723962,
      lon: 37.573294,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6655,

    pos: {
      lat: 55.920689,
      lon: 37.716962,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6672,

    pos: {
      lat: 55.822847,
      lon: 37.37748,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6698,

    pos: {
      lat: 55.673783,
      lon: 37.50434,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6699,

    pos: {
      lat: 55.673783,
      lon: 37.50434,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6700,

    pos: {
      lat: 55.673783,
      lon: 37.50434,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6701,

    pos: {
      lat: 55.673783,
      lon: 37.50434,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6734,

    pos: {
      lat: 55.646223,
      lon: 37.385978,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6735,

    pos: {
      lat: 55.635518,
      lon: 37.322179,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6736,

    pos: {
      lat: 55.64256,
      lon: 37.357851,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6737,

    pos: {
      lat: 55.639639,
      lon: 37.366341,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6738,

    pos: {
      lat: 55.643429,
      lon: 37.359352,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6739,

    pos: {
      lat: 55.634237,
      lon: 37.332169,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6742,

    pos: {
      lat: 55.64256,
      lon: 37.357851,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6743,

    pos: {
      lat: 55.501381,
      lon: 37.596938,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6744,

    pos: {
      lat: 55.667665,
      lon: 37.440245,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6745,

    pos: {
      lat: 55.625613,
      lon: 37.303997,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6855,

    pos: {
      lat: 55.837419,
      lon: 37.636365,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6856,

    pos: {
      lat: 55.843763,
      lon: 37.643381,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6857,

    pos: {
      lat: 55.837419,
      lon: 37.636365,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6858,

    pos: {
      lat: 55.837419,
      lon: 37.636365,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6859,

    pos: {
      lat: 55.845476,
      lon: 37.580616,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6860,

    pos: {
      lat: 55.84550808923535,
      lon: 37.57660697553252,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6917,

    pos: {
      lat: 55.702084,
      lon: 37.364697,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6918,

    pos: {
      lat: 55.700689,
      lon: 37.357986,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6919,

    pos: {
      lat: 55.583515,
      lon: 37.269556,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6920,

    pos: {
      lat: 55.700689,
      lon: 37.357986,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6921,

    pos: {
      lat: 55.702084,
      lon: 37.364697,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6923,

    pos: {
      lat: 55.702084,
      lon: 37.364697,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6924,

    pos: {
      lat: 55.583515,
      lon: 37.269556,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6925,

    pos: {
      lat: 55.660673,
      lon: 37.299641,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6926,

    pos: {
      lat: 55.663771,
      lon: 37.301015,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6927,

    pos: {
      lat: 55.702084,
      lon: 37.364697,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6928,

    pos: {
      lat: 55.702084,
      lon: 37.364697,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6929,

    pos: {
      lat: 55.702084,
      lon: 37.364697,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6930,

    pos: {
      lat: 55.702084,
      lon: 37.364697,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6931,

    pos: {
      lat: 55.702084,
      lon: 37.364697,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6932,

    pos: {
      lat: 55.583515,
      lon: 37.269556,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6933,

    pos: {
      lat: 55.700689,
      lon: 37.357986,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 7127,

    pos: {
      lat: 55.718065,
      lon: 37.621785,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 7169,

    pos: {
      lat: 55.54563,
      lon: 37.698996,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5162,

    pos: {
      lat: 55.78873665906824,
      lon: 37.536445261901804,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5163,

    pos: {
      lat: 55.78900264239562,
      lon: 37.53655255026241,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5164,

    pos: {
      lat: 55.7892081737176,
      lon: 37.53662765211483,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5165,

    pos: {
      lat: 55.78947415381174,
      lon: 37.536734940475434,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5166,

    pos: {
      lat: 55.789734087141625,
      lon: 37.5368207711639,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5167,

    pos: {
      lat: 55.7895829633246,
      lon: 37.53729283995051,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5168,

    pos: {
      lat: 55.788621802067574,
      lon: 37.53694951719662,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5169,

    pos: {
      lat: 55.790801376840086,
      lon: 37.52315204384209,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5170,

    pos: {
      lat: 55.79055958510352,
      lon: 37.523141315006036,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5171,

    pos: {
      lat: 55.79032383670912,
      lon: 37.523388078235406,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5172,

    pos: {
      lat: 55.79025129845335,
      lon: 37.52388160469414,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5173,

    pos: {
      lat: 55.790190849803245,
      lon: 37.52441804649713,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5174,

    pos: {
      lat: 55.79014249081532,
      lon: 37.52489011528374,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5175,

    pos: {
      lat: 55.79032383670912,
      lon: 37.52522270920161,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5176,

    pos: {
      lat: 55.79061398837566,
      lon: 37.52536218407037,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5177,

    pos: {
      lat: 55.790837645470575,
      lon: 37.52544801475884,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5178,

    pos: {
      lat: 55.7910673460094,
      lon: 37.52553384544731,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5179,

    pos: {
      lat: 55.791192420271976,
      lon: 37.525200406657945,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5180,

    pos: {
      lat: 55.79121659911896,
      lon: 37.52465323601889,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5181,

    pos: {
      lat: 55.79121337880207,
      lon: 37.52401602894647,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5182,

    pos: {
      lat: 55.791165021089,
      lon: 37.52430570752007,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5183,

    pos: {
      lat: 55.791219423511954,
      lon: 37.523211366241995,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5203,

    pos: {
      lat: 55.430896,
      lon: 37.555193,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5204,

    pos: {
      lat: 55.430896,
      lon: 37.555193,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5205,

    pos: {
      lat: 55.430896,
      lon: 37.555193,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5206,

    pos: {
      lat: 55.430896,
      lon: 37.555193,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5207,

    pos: {
      lat: 55.430896,
      lon: 37.555193,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5208,

    pos: {
      lat: 55.430896,
      lon: 37.555193,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5209,

    pos: {
      lat: 55.36753,
      lon: 37.519027,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5210,

    pos: {
      lat: 55.313962,
      lon: 37.526995,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5211,

    pos: {
      lat: 55.313962,
      lon: 37.526995,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5212,

    pos: {
      lat: 55.313962,
      lon: 37.526995,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5213,

    pos: {
      lat: 55.374253,
      lon: 37.53897,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5214,

    pos: {
      lat: 55.374253,
      lon: 37.53897,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5215,

    pos: {
      lat: 55.374253,
      lon: 37.53897,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5216,

    pos: {
      lat: 55.374253,
      lon: 37.53897,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5217,

    pos: {
      lat: 55.422278,
      lon: 37.498204,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5218,

    pos: {
      lat: 55.420852,
      lon: 37.506145,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5219,

    pos: {
      lat: 55.433946,
      lon: 37.498725,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5220,

    pos: {
      lat: 55.420469,
      lon: 37.494288,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5221,

    pos: {
      lat: 55.424132,
      lon: 37.484631,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5222,

    pos: {
      lat: 55.422263,
      lon: 37.496138,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5223,

    pos: {
      lat: 55.422263,
      lon: 37.496138,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5224,

    pos: {
      lat: 55.422263,
      lon: 37.496138,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5225,

    pos: {
      lat: 55.417526,
      lon: 37.496776,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5226,

    pos: {
      lat: 55.417526,
      lon: 37.496776,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5227,

    pos: {
      lat: 55.417526,
      lon: 37.496776,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5228,

    pos: {
      lat: 55.418962,
      lon: 37.489284,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5229,

    pos: {
      lat: 55.417971,
      lon: 37.476025,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5230,

    pos: {
      lat: 55.412319,
      lon: 37.537622,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5231,

    pos: {
      lat: 55.4089,
      lon: 37.559883,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5232,

    pos: {
      lat: 55.408015,
      lon: 37.560565,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5233,

    pos: {
      lat: 55.404269,
      lon: 37.560889,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5234,

    pos: {
      lat: 55.391396,
      lon: 37.56088,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5235,

    pos: {
      lat: 55.391396,
      lon: 37.56088,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5236,

    pos: {
      lat: 55.54185855175018,
      lon: 37.70745496197124,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5237,

    pos: {
      lat: 55.54192851211701,
      lon: 37.70763735218426,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5238,

    pos: {
      lat: 55.5420075975985,
      lon: 37.707492512897446,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 5239,

    pos: {
      lat: 55.54207147421695,
      lon: 37.70762125893015,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6004,

    pos: {
      lat: 55.69382445656188,
      lon: 37.665698457672086,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6005,

    pos: {
      lat: 55.69398201311323,
      lon: 37.66555898280332,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6006,

    pos: {
      lat: 55.69405473130646,
      lon: 37.66574137301632,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6007,

    pos: {
      lat: 55.694163808341614,
      lon: 37.66556971163937,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6008,

    pos: {
      lat: 55.69426076544959,
      lon: 37.66574137301632,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6009,

    pos: {
      lat: 55.694369841907395,
      lon: 37.66558044047542,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6010,

    pos: {
      lat: 55.694454678941064,
      lon: 37.6657735595245,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6011,

    pos: {
      lat: 55.69455769509051,
      lon: 37.665644813491795,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6012,

    pos: {
      lat: 55.69449709738854,
      lon: 37.665730644180265,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6013,

    pos: {
      lat: 55.891481,
      lon: 37.451025,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6014,

    pos: {
      lat: 55.73653079601026,
      lon: 37.695043954345316,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6015,

    pos: {
      lat: 55.694521336480655,
      lon: 37.66547315211485,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6040,

    pos: {
      lat: 43.418031,
      lon: 39.9699146,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6041,

    pos: {
      lat: 43.421059,
      lon: 39.929809,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6783,

    pos: {
      lat: 55.86183181673937,
      lon: 37.549789936171905,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6784,

    pos: {
      lat: 55.861895170539526,
      lon: 37.549639732467064,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6785,

    pos: {
      lat: 55.862033945167774,
      lon: 37.54928031645907,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6786,

    pos: {
      lat: 55.86176242912491,
      lon: 37.54990795336856,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6787,

    pos: {
      lat: 55.864722,
      lon: 37.540964,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6788,

    pos: {
      lat: 55.864722,
      lon: 37.540964,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6789,

    pos: {
      lat: 55.696392,
      lon: 37.322925,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6790,

    pos: {
      lat: 55.696392,
      lon: 37.322925,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6791,

    pos: {
      lat: 55.600893,
      lon: 37.724077,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
  {
    id: 6792,

    pos: {
      lat: 55.600893,
      lon: 37.724077,
    },
    apartmentAccessType: {
      id: 2,
      title: '2',
      __typename: '2',
    },
    apartTariffs: [
      {
        code: 'per_24h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'per_3h',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
      {
        code: 'sum',
        priceHour: 100,
        priceDay: 11,
        priceFewDays: 100,
        hourAmount: 1,
      },
    ],
  },
];

const RCTCustomView = requireNativeComponent('YaMapVC');

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'App needs access to your location ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    } else {
    }
  } catch (err) {
    console.warn(err);
  }
};

const ExampleScreen = () => {
  const nativeRef = useRef(null);

  const setCenter = useCallback((point: ArrItem['pos'], zoom: number) => {
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(nativeRef.current),
      'setCenter',
      [point, zoom],
    );
  }, []);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  useEffect(() => {
    setCenter(
      {
        lat: 55.600893,
        lon: 37.724077,
      },
      12,
    );
  }, []);

  return (
    <RCTCustomView
      ref={nativeRef}
      //       onCameraPositionChangedEnd={(a) => {
      //         console.log('a', a.nativeEvent);
      //       }}
      style={{ flex: 1 }}
      pointsJson={JSON.stringify(arr)}
      zoom={12}
      //       onPressMarker={(a) => {
      //         console.log(a.nativeEvent);
      //       }}
    />
  );
};

export { ExampleScreen };
