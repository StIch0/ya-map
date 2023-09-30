import React, { useEffect, useRef } from 'react';

import { ExampleView } from './components/ExampleView';

import {
  UIManager,
  findNodeHandle,
  requireNativeComponent,
} from 'react-native';
import { ViewProps } from '@app/ui/components/View';

type ArrItem = {
  id: number;
  fias: string;
  point: {
    lat: number;
    lon: number;
  };
  apartments_tariffs: {
    code: 'per_24h' | 'per_3h' | 'sum';
    price: number;
  }[];
  apartment_access_type: {
    id: number;
  };
};

const arr: ArrItem[] = [
  {
    id: 138,
    fias: 'г Москва, ул Вяземская, д 1 к 2',
    point: {
      lat: 55.715444,
      lon: 37.404483,
    },
    apartment_access_type: {
      id: 1,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3600,
      },
      {
        code: 'per_3h',
        price: 2880,
      },
      {
        code: 'sum',
        price: 3600,
      },
    ],
  },
  {
    id: 159,
    fias: 'г Москва, Алтуфьевское шоссе, д 2 к 1',
    point: {
      lat: 55.848963,
      lon: 37.587254,
    },
    apartment_access_type: {
      id: 1,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2500,
      },
      {
        code: 'per_3h',
        price: 2000,
      },
      {
        code: 'sum',
        price: 2500,
      },
    ],
  },
  {
    id: 161,
    fias: 'г Москва, 2-й Южнопортовый проезд, д 9',
    point: {
      lat: 55.700806,
      lon: 37.681487,
    },
    apartment_access_type: {
      id: 1,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2500,
      },
      {
        code: 'per_3h',
        price: 2000,
      },
      {
        code: 'sum',
        price: 2500,
      },
    ],
  },
  {
    id: 162,
    fias: 'г Москва, ул Гришина, д 23 к 3',
    point: {
      lat: 55.72452,
      lon: 37.413161,
    },
    apartment_access_type: {
      id: 1,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3600,
      },
      {
        code: 'per_3h',
        price: 2880,
      },
      {
        code: 'sum',
        price: 3600,
      },
    ],
  },
  {
    id: 6896,
    fias: 'г Москва, 1-й Красногвардейский проезд, д 22 стр 1',
    point: {
      lat: 55.751047,
      lon: 37.534164,
    },
    apartment_access_type: {
      id: 1,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 11990,
      },
      {
        code: 'per_3h',
        price: 9592,
      },
      {
        code: 'sum',
        price: 11990,
      },
    ],
  },
  {
    id: 191,
    fias: 'Московская обл, г Одинцово, деревня Раздоры, ул Липовой Рощи, д 1 к 1',
    point: {
      lat: 55.79917928669273,
      lon: 37.37750268650816,
    },
    apartment_access_type: {
      id: 1,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3000,
      },
      {
        code: 'per_3h',
        price: 2400,
      },
      {
        code: 'sum',
        price: 3000,
      },
    ],
  },
  {
    id: 268,
    fias: 'Московская обл, г Одинцово, деревня Раздоры, ул Липовой Рощи, д 2 к 1',
    point: {
      lat: 55.79833628114515,
      lon: 37.37737778593203,
    },
    apartment_access_type: {
      id: 1,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2990,
      },
      {
        code: 'per_3h',
        price: 2392,
      },
      {
        code: 'sum',
        price: 2990,
      },
    ],
  },
  {
    id: 274,
    fias: 'Московская обл, г Одинцово, деревня Раздоры, ул Липовой Рощи, д 2 к 1',
    point: {
      lat: 55.79836894519046,
      lon: 37.37713858399189,
    },
    apartment_access_type: {
      id: 1,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2850,
      },
      {
        code: 'per_3h',
        price: 2280,
      },
      {
        code: 'sum',
        price: 2850,
      },
    ],
  },
  {
    id: 299,
    fias: 'Московская обл, г Одинцово, деревня Раздоры, ул Липовой Рощи, д 4 к 3',
    point: {
      lat: 55.79882177196829,
      lon: 37.37412815424734,
    },
    apartment_access_type: {
      id: 1,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2490,
      },
      {
        code: 'per_3h',
        price: 1992,
      },
      {
        code: 'sum',
        price: 2490,
      },
    ],
  },
  {
    id: 310,
    fias: 'Московская обл, г Одинцово, деревня Раздоры, ул Липовой Рощи, д 4 к 3',
    point: {
      lat: 55.798186,
      lon: 37.37739,
    },
    apartment_access_type: {
      id: 1,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2490,
      },
      {
        code: 'per_3h',
        price: 1992,
      },
      {
        code: 'sum',
        price: 2490,
      },
    ],
  },
  {
    id: 5073,
    fias: 'Московская обл, г Одинцово, деревня Раздоры, ул Липовой Рощи, д 4 к 4',
    point: {
      lat: 55.79893,
      lon: 37.373958,
    },
    apartment_access_type: {
      id: 1,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2950,
      },
      {
        code: 'per_3h',
        price: 2360,
      },
      {
        code: 'sum',
        price: 2950,
      },
    ],
  },
  {
    id: 7125,
    fias: 'Московская обл, г Красногорск, ул Липовой Рощи, д 1 к 3',
    point: {
      lat: 55.798976,
      lon: 37.378845,
    },
    apartment_access_type: {
      id: 1,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2700,
      },
      {
        code: 'per_3h',
        price: 2160,
      },
      {
        code: 'sum',
        price: 2700,
      },
    ],
  },
  {
    id: 320,
    fias: 'г Москва, пр-кт Мира, д 120',
    point: {
      lat: 55.812186,
      lon: 37.639383,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5498,
      },
      {
        code: 'per_3h',
        price: 4398,
      },
      {
        code: 'sum',
        price: 5498,
      },
    ],
  },
  {
    id: 321,
    fias: 'г Москва, 3-й Новомихалковский проезд, д 20',
    point: {
      lat: 55.840462,
      lon: 37.535278,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3717,
      },
      {
        code: 'per_3h',
        price: 2974,
      },
      {
        code: 'sum',
        price: 3717,
      },
    ],
  },
  {
    id: 322,
    fias: 'г Москва, проезд Жуков, д 21Б',
    point: {
      lat: 55.722593,
      lon: 37.645806,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5959,
      },
      {
        code: 'per_3h',
        price: 4767,
      },
      {
        code: 'sum',
        price: 5959,
      },
    ],
  },
  {
    id: 323,
    fias: 'г Москва, ул Большая Академическая, д 63',
    point: {
      lat: 55.840118,
      lon: 37.546579,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5422,
      },
      {
        code: 'per_3h',
        price: 4338,
      },
      {
        code: 'sum',
        price: 5422,
      },
    ],
  },
  {
    id: 324,
    fias: 'г Москва, Карамышевская наб, д 34',
    point: {
      lat: 55.76915758530566,
      lon: 37.472340377049896,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5959,
      },
      {
        code: 'per_3h',
        price: 4767,
      },
      {
        code: 'sum',
        price: 5959,
      },
    ],
  },
  {
    id: 366,
    fias: 'г Москва, Карамышевская наб, д 34',
    point: {
      lat: 55.7691900689516,
      lon: 37.4726739999999,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5498,
      },
      {
        code: 'per_3h',
        price: 4398,
      },
      {
        code: 'sum',
        price: 5498,
      },
    ],
  },
  {
    id: 367,
    fias: 'г Москва, Университетский пр-кт, д 23 к 3',
    point: {
      lat: 55.714333,
      lon: 37.51777,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 7994,
      },
      {
        code: 'per_3h',
        price: 6395,
      },
      {
        code: 'sum',
        price: 7994,
      },
    ],
  },
  {
    id: 368,
    fias: 'г Москва, ул Нижняя Красносельская, д 35 стр 3',
    point: {
      lat: 55.776143,
      lon: 37.672792,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 13994,
      },
      {
        code: 'per_3h',
        price: 11195,
      },
      {
        code: 'sum',
        price: 13994,
      },
    ],
  },
  {
    id: 1174,
    fias: 'г Москва, Карамышевская наб, д 34',
    point: {
      lat: 55.76919992231341,
      lon: 37.47311285324621,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 11918,
      },
      {
        code: 'per_3h',
        price: 9534,
      },
      {
        code: 'sum',
        price: 11918,
      },
    ],
  },
  {
    id: 2595,
    fias: 'г Москва, ул Берзарина, д 30А',
    point: {
      lat: 55.79021,
      lon: 37.472324,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4495,
      },
      {
        code: 'per_3h',
        price: 3596,
      },
      {
        code: 'sum',
        price: 4495,
      },
    ],
  },
  {
    id: 2596,
    fias: 'Московская обл, г Химки, Ленинский пр-кт, д 8',
    point: {
      lat: 55.899795,
      lon: 37.460834,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3499,
      },
      {
        code: 'per_3h',
        price: 2799,
      },
      {
        code: 'sum',
        price: 3499,
      },
    ],
  },
  {
    id: 2597,
    fias: 'Московская обл, г Химки, ул Горшина, д 2',
    point: {
      lat: 55.886973,
      lon: 37.429429,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3499,
      },
      {
        code: 'per_3h',
        price: 2799,
      },
      {
        code: 'sum',
        price: 3499,
      },
    ],
  },
  {
    id: 4490,
    fias: 'г Москва, ул Новоалексеевская, д 16 к 2, кв 365',
    point: {
      lat: 55.8090216947132,
      lon: 37.647380678573626,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6490,
      },
      {
        code: 'per_3h',
        price: 5192,
      },
      {
        code: 'sum',
        price: 6490,
      },
    ],
  },
  {
    id: 4786,
    fias: 'г Москва, ул Новоалексеевская, д 16 к 2',
    point: {
      lat: 55.808982422117744,
      lon: 37.64696225396729,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4495,
      },
      {
        code: 'per_3h',
        price: 3596,
      },
      {
        code: 'sum',
        price: 4495,
      },
    ],
  },
  {
    id: 4788,
    fias: 'г Москва, ул 2-я Песчаная, д 6 к 4',
    point: {
      lat: 55.794517,
      lon: 37.514311,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 7994,
      },
      {
        code: 'per_3h',
        price: 6395,
      },
      {
        code: 'sum',
        price: 7994,
      },
    ],
  },
  {
    id: 5069,
    fias: 'г Москва, ул Нижняя Красносельская, д 35 стр 1',
    point: {
      lat: 55.776294,
      lon: 37.672172,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5994,
      },
      {
        code: 'per_3h',
        price: 4795,
      },
      {
        code: 'sum',
        price: 5994,
      },
    ],
  },
  {
    id: 5078,
    fias: 'г Москва, шоссе Энтузиастов, д 11А к 1',
    point: {
      lat: 55.753073,
      lon: 37.713261,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5498,
      },
      {
        code: 'per_3h',
        price: 4398,
      },
      {
        code: 'sum',
        price: 5498,
      },
    ],
  },
  {
    id: 6959,
    fias: 'г Москва, ул Казакова, д 7',
    point: {
      lat: 55.763923,
      lon: 37.659461,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6466,
      },
      {
        code: 'per_3h',
        price: 5173,
      },
      {
        code: 'sum',
        price: 6466,
      },
    ],
  },
  {
    id: 7126,
    fias: 'г Москва, ул Покровка, д 38 стр 1',
    point: {
      lat: 55.761335,
      lon: 37.651169,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 13994,
      },
      {
        code: 'per_3h',
        price: 11195,
      },
      {
        code: 'sum',
        price: 13994,
      },
    ],
  },
  {
    id: 315,
    fias: 'г Москва, ул Кухмистерова, д 16',
    point: {
      lat: 55.683234,
      lon: 37.727562,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4485,
      },
      {
        code: 'per_3h',
        price: 3588,
      },
      {
        code: 'sum',
        price: 4485,
      },
    ],
  },
  {
    id: 316,
    fias: 'г Москва, ул Шоссейная, д 28',
    point: {
      lat: 55.683996,
      lon: 37.721678,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4598,
      },
      {
        code: 'per_3h',
        price: 3678,
      },
      {
        code: 'sum',
        price: 4598,
      },
    ],
  },
  {
    id: 317,
    fias: 'г Москва, ул Суворовская, д 22',
    point: {
      lat: 55.793419,
      lon: 37.711994,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4715,
      },
      {
        code: 'per_3h',
        price: 3772,
      },
      {
        code: 'sum',
        price: 4715,
      },
    ],
  },
  {
    id: 325,
    fias: 'г Москва, ул Генерала Кузнецова, д 13 к 3',
    point: {
      lat: 55.687086,
      lon: 37.860639,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4720,
      },
      {
        code: 'per_3h',
        price: 3776,
      },
      {
        code: 'sum',
        price: 4720,
      },
    ],
  },
  {
    id: 326,
    fias: 'г Москва, проезд Грайвороновский 2-й, д 38 к 2',
    point: {
      lat: 55.724981,
      lon: 37.741612,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4720,
      },
      {
        code: 'per_3h',
        price: 3776,
      },
      {
        code: 'sum',
        price: 4720,
      },
    ],
  },
  {
    id: 375,
    fias: 'г Москва, Гостиничный проезд, д 8 к 1',
    point: {
      lat: 55.845703738595596,
      lon: 37.57623683068847,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3450,
      },
      {
        code: 'per_3h',
        price: 2760,
      },
      {
        code: 'sum',
        price: 3450,
      },
    ],
  },
  {
    id: 434,
    fias: 'г Москва, Дмитровское шоссе, д 81',
    point: {
      lat: 55.86194326866766,
      lon: 37.54952109259034,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3304,
      },
      {
        code: 'per_3h',
        price: 2643,
      },
      {
        code: 'sum',
        price: 3304,
      },
    ],
  },
  {
    id: 435,
    fias: 'Московская обл, г Красногорск, поселок Отрадное, ул Пятницкая, д 5',
    point: {
      lat: 55.876448373617116,
      lon: 37.31443346560668,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2950,
      },
      {
        code: 'per_3h',
        price: 2360,
      },
      {
        code: 'sum',
        price: 2950,
      },
    ],
  },
  {
    id: 436,
    fias: 'г Москва, ул 50 лет Октября, д 2 к 2',
    point: {
      lat: 55.653766,
      lon: 37.416754,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2714,
      },
      {
        code: 'per_3h',
        price: 2171,
      },
      {
        code: 'sum',
        price: 2714,
      },
    ],
  },
  {
    id: 437,
    fias: 'г Москва, ул Профсоюзная, д 128А',
    point: {
      lat: 55.63025582514643,
      lon: 37.51417721527481,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4720,
      },
      {
        code: 'per_3h',
        price: 3776,
      },
      {
        code: 'sum',
        price: 4720,
      },
    ],
  },
  {
    id: 438,
    fias: 'г Москва, 1-й Красногвардейский проезд, д 22',
    point: {
      lat: 55.751351,
      lon: 37.536544,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 12390,
      },
      {
        code: 'per_3h',
        price: 9912,
      },
      {
        code: 'sum',
        price: 12390,
      },
    ],
  },
  {
    id: 441,
    fias: 'г Москва, пр-кт Маршала Жукова, д 39А к 2',
    point: {
      lat: 55.77499102937225,
      lon: 37.47047805055669,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3776,
      },
      {
        code: 'per_3h',
        price: 3021,
      },
      {
        code: 'sum',
        price: 3776,
      },
    ],
  },
  {
    id: 453,
    fias: 'г Москва, ул Корабельная, д 6',
    point: {
      lat: 55.67910114158019,
      lon: 37.69530893430325,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3304,
      },
      {
        code: 'per_3h',
        price: 2643,
      },
      {
        code: 'sum',
        price: 3304,
      },
    ],
  },
  {
    id: 454,
    fias: 'г Москва, 1-й Красногвардейский проезд, д 22 стр 2',
    point: {
      lat: 55.75152306009715,
      lon: 37.53557272090145,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 9440,
      },
      {
        code: 'per_3h',
        price: 7552,
      },
      {
        code: 'sum',
        price: 9440,
      },
    ],
  },
  {
    id: 455,
    fias: 'г Москва, проезд Серебрякова, д 11 к 4, кв 11',
    point: {
      lat: 55.847861,
      lon: 37.650055,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2950,
      },
      {
        code: 'per_3h',
        price: 2360,
      },
      {
        code: 'sum',
        price: 2950,
      },
    ],
  },
  {
    id: 456,
    fias: 'г Москва, проезд Серебрякова, д 11 к 1, кв 55',
    point: {
      lat: 55.84786156888539,
      lon: 37.65018424603269,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3186,
      },
      {
        code: 'per_3h',
        price: 2549,
      },
      {
        code: 'sum',
        price: 3186,
      },
    ],
  },
  {
    id: 463,
    fias: 'Московская обл, г Мытищи, Шараповский проезд, влд 2 стр 3',
    point: {
      lat: 55.91686,
      lon: 37.758186,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3335,
      },
      {
        code: 'per_3h',
        price: 2668,
      },
      {
        code: 'sum',
        price: 3335,
      },
    ],
  },
  {
    id: 464,
    fias: 'Московская обл, г Мытищи, ул Мира, д 35',
    point: {
      lat: 55.917455,
      lon: 37.722891,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3105,
      },
      {
        code: 'per_3h',
        price: 2484,
      },
      {
        code: 'sum',
        price: 3105,
      },
    ],
  },
  {
    id: 465,
    fias: 'Московская обл, г Мытищи, ул Борисовка, д 28',
    point: {
      lat: 55.92033,
      lon: 37.712129,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4025,
      },
      {
        code: 'per_3h',
        price: 3220,
      },
      {
        code: 'sum',
        price: 4025,
      },
    ],
  },
  {
    id: 466,
    fias: 'Московская обл, г Мытищи, ул Мира, д 37',
    point: {
      lat: 55.91861,
      lon: 37.720906,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3105,
      },
      {
        code: 'per_3h',
        price: 2484,
      },
      {
        code: 'sum',
        price: 3105,
      },
    ],
  },
  {
    id: 467,
    fias: 'Московская обл, г Мытищи, ул Борисовка, д 28А',
    point: {
      lat: 55.919498,
      lon: 37.715219,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3450,
      },
      {
        code: 'per_3h',
        price: 2760,
      },
      {
        code: 'sum',
        price: 3450,
      },
    ],
  },
  {
    id: 468,
    fias: 'г Москва, ул Уржумская, д 5 к 1',
    point: {
      lat: 55.853233,
      lon: 37.66406,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3220,
      },
      {
        code: 'per_3h',
        price: 2576,
      },
      {
        code: 'sum',
        price: 3220,
      },
    ],
  },
  {
    id: 469,
    fias: 'Московская обл, г Мытищи, ул Лётная, д 21/2',
    point: {
      lat: 55.908888,
      lon: 37.72175,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3105,
      },
      {
        code: 'per_3h',
        price: 2484,
      },
      {
        code: 'sum',
        price: 3105,
      },
    ],
  },
  {
    id: 470,
    fias: 'Московская обл, г Мытищи, ул Мира, д 32А',
    point: {
      lat: 55.919347,
      lon: 37.724247,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3335,
      },
      {
        code: 'per_3h',
        price: 2668,
      },
      {
        code: 'sum',
        price: 3335,
      },
    ],
  },
  {
    id: 471,
    fias: 'Московская обл, г Мытищи, ул Лётная, д 28 к 1',
    point: {
      lat: 55.908858,
      lon: 37.718444,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2645,
      },
      {
        code: 'per_3h',
        price: 2116,
      },
      {
        code: 'sum',
        price: 2645,
      },
    ],
  },
  {
    id: 472,
    fias: 'Московская обл, г Мытищи, ул Борисовка, д 24А',
    point: {
      lat: 55.918045,
      lon: 37.713953,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3565,
      },
      {
        code: 'per_3h',
        price: 2852,
      },
      {
        code: 'sum',
        price: 3565,
      },
    ],
  },
  {
    id: 474,
    fias: 'г Москва, проезд Берингов, д 4',
    point: {
      lat: 55.855083,
      lon: 37.660063,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3220,
      },
      {
        code: 'per_3h',
        price: 2576,
      },
      {
        code: 'sum',
        price: 3220,
      },
    ],
  },
  {
    id: 475,
    fias: 'Московская обл, г Мытищи, ул Колпакова, д 34 к 2',
    point: {
      lat: 55.92194,
      lon: 37.72643,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3335,
      },
      {
        code: 'per_3h',
        price: 2668,
      },
      {
        code: 'sum',
        price: 3335,
      },
    ],
  },
  {
    id: 476,
    fias: 'Московская обл, г Мытищи, ул Колпакова, д 10',
    point: {
      lat: 55.914938,
      lon: 37.738692,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2645,
      },
      {
        code: 'per_3h',
        price: 2116,
      },
      {
        code: 'sum',
        price: 2645,
      },
    ],
  },
  {
    id: 477,
    fias: 'Московская обл, г Мытищи, ул Сукромка, д 24А',
    point: {
      lat: 55.90857,
      lon: 37.706973,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3335,
      },
      {
        code: 'per_3h',
        price: 2668,
      },
      {
        code: 'sum',
        price: 3335,
      },
    ],
  },
  {
    id: 478,
    fias: 'г Москва, ул Сельскохозяйственная, д 17, корпус 1',
    point: {
      lat: 55.836458,
      lon: 37.632305,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3680,
      },
      {
        code: 'per_3h',
        price: 2944,
      },
      {
        code: 'sum',
        price: 3680,
      },
    ],
  },
  {
    id: 479,
    fias: 'г Москва, Алтуфьевское шоссе, д 2 к 1',
    point: {
      lat: 55.84890321176957,
      lon: 37.58751735648342,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2737,
      },
      {
        code: 'per_3h',
        price: 2190,
      },
      {
        code: 'sum',
        price: 2737,
      },
    ],
  },
  {
    id: 480,
    fias: 'Московская обл, г Химки, ул Имени К. И. Вороницына, д 1 к 1',
    point: {
      lat: 55.914696,
      lon: 37.40751,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2587,
      },
      {
        code: 'per_3h',
        price: 2070,
      },
      {
        code: 'sum',
        price: 2587,
      },
    ],
  },
  {
    id: 559,
    fias: 'г Москва, Дмитровское шоссе, д 81',
    point: {
      lat: 55.86207299263056,
      lon: 37.54929042261506,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3304,
      },
      {
        code: 'per_3h',
        price: 2643,
      },
      {
        code: 'sum',
        price: 3304,
      },
    ],
  },
  {
    id: 560,
    fias: 'г Москва, Дмитровское шоссе, д 81',
    point: {
      lat: 55.861753207192244,
      lon: 37.54981077116395,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3304,
      },
      {
        code: 'per_3h',
        price: 2643,
      },
      {
        code: 'sum',
        price: 3304,
      },
    ],
  },
  {
    id: 561,
    fias: 'Московская обл, г Красногорск, поселок Отрадное, ул Пятницкая, д 5',
    point: {
      lat: 55.87622521042578,
      lon: 37.31469095767213,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2950,
      },
      {
        code: 'per_3h',
        price: 2360,
      },
      {
        code: 'sum',
        price: 2950,
      },
    ],
  },
  {
    id: 562,
    fias: 'Московская обл, г Красногорск, поселок Отрадное, ул Пятницкая, д 5',
    point: {
      lat: 55.87600807743568,
      lon: 37.31490553439331,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4130,
      },
      {
        code: 'per_3h',
        price: 3304,
      },
      {
        code: 'sum',
        price: 4130,
      },
    ],
  },
  {
    id: 563,
    fias: 'г Москва, 1-й Красногвардейский проезд, д 22 стр 2',
    point: {
      lat: 55.7517026707032,
      lon: 37.535623603459136,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 9440,
      },
      {
        code: 'per_3h',
        price: 7552,
      },
      {
        code: 'sum',
        price: 9440,
      },
    ],
  },
  {
    id: 564,
    fias: 'г Москва, проезд Серебрякова, д 11 к 1',
    point: {
      lat: 55.84792192762849,
      lon: 37.65130004498286,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3186,
      },
      {
        code: 'per_3h',
        price: 2549,
      },
      {
        code: 'sum',
        price: 3186,
      },
    ],
  },
  {
    id: 565,
    fias: 'г Москва, ул Корабельная, д 6',
    point: {
      lat: 55.679580781549035,
      lon: 37.695379423189564,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3304,
      },
      {
        code: 'per_3h',
        price: 2643,
      },
      {
        code: 'sum',
        price: 3304,
      },
    ],
  },
  {
    id: 566,
    fias: 'г Москва, ул Корабельная, д 6',
    point: {
      lat: 55.67989600930593,
      lon: 37.69565837292711,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3540,
      },
      {
        code: 'per_3h',
        price: 2832,
      },
      {
        code: 'sum',
        price: 3540,
      },
    ],
  },
  {
    id: 567,
    fias: 'г Москва, пр-кт Маршала Жукова, д 39А к 2',
    point: {
      lat: 55.77502126555214,
      lon: 37.47056924566319,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3776,
      },
      {
        code: 'per_3h',
        price: 3021,
      },
      {
        code: 'sum',
        price: 3776,
      },
    ],
  },
  {
    id: 568,
    fias: 'г Москва, пр-кт Маршала Жукова, д 39А к 2',
    point: {
      lat: 55.77505452532283,
      lon: 37.47049414381077,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3540,
      },
      {
        code: 'per_3h',
        price: 2832,
      },
      {
        code: 'sum',
        price: 3540,
      },
    ],
  },
  {
    id: 569,
    fias: 'г Москва, пр-кт Маршала Жукова, д 39А к 2',
    point: {
      lat: 55.77509987950963,
      lon: 37.47049414381077,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3304,
      },
      {
        code: 'per_3h',
        price: 2643,
      },
      {
        code: 'sum',
        price: 3304,
      },
    ],
  },
  {
    id: 570,
    fias: 'г Москва, пр-кт Маршала Жукова, д 39А к 2',
    point: {
      lat: 55.77509987950963,
      lon: 37.4705638812451,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4720,
      },
      {
        code: 'per_3h',
        price: 3776,
      },
      {
        code: 'sum',
        price: 4720,
      },
    ],
  },
  {
    id: 571,
    fias: 'г Москва, пр-кт Маршала Жукова, д 39А к 2',
    point: {
      lat: 55.77515430446385,
      lon: 37.47055315240911,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3540,
      },
      {
        code: 'per_3h',
        price: 2832,
      },
      {
        code: 'sum',
        price: 3540,
      },
    ],
  },
  {
    id: 656,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78',
    point: {
      lat: 55.90974731495519,
      lon: 37.39079367233315,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3300,
      },
      {
        code: 'per_3h',
        price: 2640,
      },
      {
        code: 'sum',
        price: 3300,
      },
    ],
  },
  {
    id: 657,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78 кв 148',
    point: {
      lat: 55.90981360336841,
      lon: 37.39061128212015,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3200,
      },
      {
        code: 'per_3h',
        price: 2560,
      },
      {
        code: 'sum',
        price: 3200,
      },
    ],
  },
  {
    id: 658,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78',
    point: {
      lat: 55.9098979702752,
      lon: 37.390799036751204,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3550,
      },
      {
        code: 'per_3h',
        price: 2840,
      },
      {
        code: 'sum',
        price: 3550,
      },
    ],
  },
  {
    id: 659,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78',
    point: {
      lat: 55.90996124533434,
      lon: 37.390605917702125,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3000,
      },
      {
        code: 'per_3h',
        price: 2400,
      },
      {
        code: 'sum',
        price: 3000,
      },
    ],
  },
  {
    id: 660,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78',
    point: {
      lat: 55.91001548101678,
      lon: 37.39080440116923,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3000,
      },
      {
        code: 'per_3h',
        price: 2400,
      },
      {
        code: 'sum',
        price: 3000,
      },
    ],
  },
  {
    id: 662,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78',
    point: {
      lat: 55.91010888673576,
      lon: 37.39064883304636,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3000,
      },
      {
        code: 'per_3h',
        price: 2400,
      },
      {
        code: 'sum',
        price: 3000,
      },
    ],
  },
  {
    id: 665,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78',
    point: {
      lat: 55.91016312221082,
      lon: 37.39078830791512,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3300,
      },
      {
        code: 'per_3h',
        price: 2640,
      },
      {
        code: 'sum',
        price: 3300,
      },
    ],
  },
  {
    id: 666,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78 кв 882',
    point: {
      lat: 55.910235436059104,
      lon: 37.390654197464386,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3200,
      },
      {
        code: 'per_3h',
        price: 2560,
      },
      {
        code: 'sum',
        price: 3200,
      },
    ],
  },
  {
    id: 667,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78',
    point: {
      lat: 55.910271592932446,
      lon: 37.39082585884133,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3000,
      },
      {
        code: 'per_3h',
        price: 2400,
      },
      {
        code: 'sum',
        price: 3000,
      },
    ],
  },
  {
    id: 668,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78 кв 37',
    point: {
      lat: 55.91022307719185,
      lon: 37.390681501632464,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3200,
      },
      {
        code: 'per_3h',
        price: 2560,
      },
      {
        code: 'sum',
        price: 3200,
      },
    ],
  },
  {
    id: 669,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78',
    point: {
      lat: 55.91013871099537,
      lon: 37.39089607835367,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3300,
      },
      {
        code: 'per_3h',
        price: 2640,
      },
      {
        code: 'sum',
        price: 3300,
      },
    ],
  },
  {
    id: 670,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78',
    point: {
      lat: 55.91021102488934,
      lon: 37.391067739730616,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2800,
      },
      {
        code: 'per_3h',
        price: 2240,
      },
      {
        code: 'sum',
        price: 2800,
      },
    ],
  },
  {
    id: 671,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78',
    point: {
      lat: 55.91012607208092,
      lon: 37.391280742988016,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2800,
      },
      {
        code: 'per_3h',
        price: 2240,
      },
      {
        code: 'sum',
        price: 2800,
      },
    ],
  },
  {
    id: 672,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78',
    point: {
      lat: 55.91019838599858,
      lon: 37.391430946692836,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2800,
      },
      {
        code: 'per_3h',
        price: 2240,
      },
      {
        code: 'sum',
        price: 2800,
      },
    ],
  },
  {
    id: 673,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78 кв 206',
    point: {
      lat: 55.91012607208092,
      lon: 37.3916026080698,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3300,
      },
      {
        code: 'per_3h',
        price: 2640,
      },
      {
        code: 'sum',
        price: 3300,
      },
    ],
  },
  {
    id: 674,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78 кв 1047',
    point: {
      lat: 55.910210438305015,
      lon: 37.39168843875828,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3200,
      },
      {
        code: 'per_3h',
        price: 2560,
      },
      {
        code: 'sum',
        price: 3200,
      },
    ],
  },
  {
    id: 675,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78 кв 443',
    point: {
      lat: 55.91013812440993,
      lon: 37.39188155780736,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3500,
      },
      {
        code: 'per_3h',
        price: 2800,
      },
      {
        code: 'sum',
        price: 3500,
      },
    ],
  },
  {
    id: 679,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78',
    point: {
      lat: 55.91013812440993,
      lon: 37.39188155780736,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2700,
      },
      {
        code: 'per_3h',
        price: 2160,
      },
      {
        code: 'sum',
        price: 2700,
      },
    ],
  },
  {
    id: 680,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78',
    point: {
      lat: 55.910210438305015,
      lon: 37.39201030384007,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3200,
      },
      {
        code: 'per_3h',
        price: 2560,
      },
      {
        code: 'sum',
        price: 3200,
      },
    ],
  },
  {
    id: 681,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78',
    point: {
      lat: 55.9100899150713,
      lon: 37.39211759220065,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6000,
      },
      {
        code: 'per_3h',
        price: 4800,
      },
      {
        code: 'sum',
        price: 6000,
      },
    ],
  },
  {
    id: 682,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78',
    point: {
      lat: 55.910074,
      lon: 37.392041,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2800,
      },
      {
        code: 'per_3h',
        price: 2240,
      },
      {
        code: 'sum',
        price: 2800,
      },
    ],
  },
  {
    id: 683,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78',
    point: {
      lat: 55.910074,
      lon: 37.392041,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2800,
      },
      {
        code: 'per_3h',
        price: 2240,
      },
      {
        code: 'sum',
        price: 2800,
      },
    ],
  },
  {
    id: 684,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78',
    point: {
      lat: 55.910069,
      lon: 37.390838,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2800,
      },
      {
        code: 'per_3h',
        price: 2240,
      },
      {
        code: 'sum',
        price: 2800,
      },
    ],
  },
  {
    id: 685,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78',
    point: {
      lat: 55.910069,
      lon: 37.390838,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2800,
      },
      {
        code: 'per_3h',
        price: 2240,
      },
      {
        code: 'sum',
        price: 2800,
      },
    ],
  },
  {
    id: 686,
    fias: 'Московская обл, г Химки, ул Молодежная, д 78',
    point: {
      lat: 55.910074,
      lon: 37.392041,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3000,
      },
      {
        code: 'per_3h',
        price: 2400,
      },
      {
        code: 'sum',
        price: 3000,
      },
    ],
  },
  {
    id: 921,
    fias: 'г Москва, 1-й Красногвардейский проезд, д 21 стр 2',
    point: {
      lat: 55.7495187469957,
      lon: 37.53394179629509,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 23000,
      },
      {
        code: 'per_3h',
        price: 18400,
      },
      {
        code: 'sum',
        price: 23000,
      },
    ],
  },
  {
    id: 922,
    fias: 'г Москва, Пресненская наб, д 8 стр 1',
    point: {
      lat: 55.74699713824093,
      lon: 37.538740457529315,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 23000,
      },
      {
        code: 'per_3h',
        price: 18400,
      },
      {
        code: 'sum',
        price: 23000,
      },
    ],
  },
  {
    id: 923,
    fias: 'г Москва, Пресненская наб, д 8 стр 1',
    point: {
      lat: 55.746741347150255,
      lon: 37.53877589316486,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 18400,
      },
      {
        code: 'per_3h',
        price: 14720,
      },
      {
        code: 'sum',
        price: 15985,
      },
    ],
  },
  {
    id: 924,
    fias: 'г Москва, 1-й Красногвардейский проезд, д 22 стр 1',
    point: {
      lat: 55.75170678259112,
      lon: 37.533467202938546,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 13800,
      },
      {
        code: 'per_3h',
        price: 11040,
      },
      {
        code: 'sum',
        price: 13800,
      },
    ],
  },
  {
    id: 925,
    fias: 'г Москва, Пресненская наб, д 8 стр 1',
    point: {
      lat: 55.74698341197326,
      lon: 37.53909775824665,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 15525,
      },
      {
        code: 'per_3h',
        price: 12420,
      },
      {
        code: 'sum',
        price: 18400,
      },
    ],
  },
  {
    id: 927,
    fias: 'г Москва, 1-й Красногвардейский проезд, д 22 стр 1',
    point: {
      lat: 55.751694680857334,
      lon: 37.53391781405305,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 18400,
      },
      {
        code: 'per_3h',
        price: 14720,
      },
      {
        code: 'sum',
        price: 18400,
      },
    ],
  },
  {
    id: 928,
    fias: 'г Москва, 1-й Красногвардейский проезд, д 22 стр 1',
    point: {
      lat: 55.751525256188344,
      lon: 37.533992915905465,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 18400,
      },
      {
        code: 'per_3h',
        price: 14720,
      },
      {
        code: 'sum',
        price: 18400,
      },
    ],
  },
  {
    id: 929,
    fias: 'г Москва, 1-й Красногвардейский проезд, д 21 стр 2',
    point: {
      lat: 55.74954295181533,
      lon: 37.53423147486869,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 23000,
      },
      {
        code: 'per_3h',
        price: 18400,
      },
      {
        code: 'sum',
        price: 23000,
      },
    ],
  },
  {
    id: 930,
    fias: 'г Москва, 1-й Красногвардейский проезд, д 21 стр 2',
    point: {
      lat: 55.74950664458022,
      lon: 37.53384523677053,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 18400,
      },
      {
        code: 'per_3h',
        price: 14720,
      },
      {
        code: 'sum',
        price: 18400,
      },
    ],
  },
  {
    id: 931,
    fias: 'г Москва, Пресненская наб, д 8 стр 1',
    point: {
      lat: 55.7468411990725,
      lon: 37.53947863192678,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 18400,
      },
      {
        code: 'per_3h',
        price: 14720,
      },
      {
        code: 'sum',
        price: 16675,
      },
    ],
  },
  {
    id: 933,
    fias: 'г Москва, 1-й Красногвардейский проезд, д 21 стр 2',
    point: {
      lat: 55.74927669796986,
      lon: 37.534016898147485,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 23000,
      },
      {
        code: 'per_3h',
        price: 18400,
      },
      {
        code: 'sum',
        price: 23000,
      },
    ],
  },
  {
    id: 935,
    fias: 'г Москва, 1-й Красногвардейский проезд, д 22 стр 1',
    point: {
      lat: 55.751370005398954,
      lon: 37.53341444930695,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 18400,
      },
      {
        code: 'per_3h',
        price: 14720,
      },
      {
        code: 'sum',
        price: 18400,
      },
    ],
  },
  {
    id: 936,
    fias: 'г Москва, 1-й Красногвардейский проезд, д 22 стр 1',
    point: {
      lat: 55.7512429359044,
      lon: 37.53378995856903,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 18400,
      },
      {
        code: 'per_3h',
        price: 14720,
      },
      {
        code: 'sum',
        price: 18400,
      },
    ],
  },
  {
    id: 937,
    fias: 'г Москва, 1-й Красногвардейский проезд, д 22 стр 2',
    point: {
      lat: 55.751611907598246,
      lon: 37.53548412859035,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 12650,
      },
      {
        code: 'per_3h',
        price: 10120,
      },
      {
        code: 'sum',
        price: 12650,
      },
    ],
  },
  {
    id: 938,
    fias: 'г Москва, Пресненская наб, д 8 стр 1',
    point: {
      lat: 55.74711957277341,
      lon: 37.539575191451306,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 23000,
      },
      {
        code: 'per_3h',
        price: 18400,
      },
      {
        code: 'sum',
        price: 23000,
      },
    ],
  },
  {
    id: 1047,
    fias: 'Московская обл, г Красногорск, поселок Ильинское-Усово, проезд Александра Невского, д 4',
    point: {
      lat: 55.773354022880376,
      lon: 37.21977334655761,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 1048,
    fias: 'Московская обл, г Кубинка, г-к Кубинка-1, к 18',
    point: {
      lat: 55.557407077604026,
      lon: 36.698983906745845,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2975,
      },
      {
        code: 'per_3h',
        price: 2380,
      },
      {
        code: 'sum',
        price: 2975,
      },
    ],
  },
  {
    id: 1049,
    fias: 'Московская обл, г Одинцово, ул Маковского, д 26',
    point: {
      lat: 55.662377953753456,
      lon: 37.28551014418027,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3995,
      },
      {
        code: 'per_3h',
        price: 3196,
      },
      {
        code: 'sum',
        price: 3995,
      },
    ],
  },
  {
    id: 1050,
    fias: 'Московская обл, г Одинцово, ул Белорусская, д 10',
    point: {
      lat: 55.66091870241026,
      lon: 37.29980143254088,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 1051,
    fias: 'Московская обл, г Красногорск, поселок Ильинское-Усово, проезд Александра Невского, д 4',
    point: {
      lat: 55.77345078265431,
      lon: 37.22027760185242,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 1052,
    fias: 'Московская обл, г Красногорск, поселок Ильинское-Усово, проезд Александра Невского, д 4',
    point: {
      lat: 55.77355963711162,
      lon: 37.22066383995055,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 1053,
    fias: 'Московская обл, г Краснознаменск, пр-кт Мира, д 14',
    point: {
      lat: 55.593278,
      lon: 37.041195,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3825,
      },
      {
        code: 'per_3h',
        price: 3060,
      },
      {
        code: 'sum',
        price: 3825,
      },
    ],
  },
  {
    id: 1054,
    fias: 'Московская обл, г Одинцово, рп Новоивановское, б-р Эйнштейна, д 3',
    point: {
      lat: 55.701724353917925,
      lon: 37.361694771163926,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 1055,
    fias: 'Московская обл, г Одинцово, рп Новоивановское, б-р Эйнштейна, д 3',
    point: {
      lat: 55.70151230059804,
      lon: 37.361748415344216,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 1056,
    fias: 'Московская обл, г Одинцово, рп Новоивановское, б-р Эйнштейна, д 3',
    point: {
      lat: 55.7012881286892,
      lon: 37.36175914418027,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 1057,
    fias: 'Московская обл, г Одинцово, рп Новоивановское, б-р Эйнштейна, д 3',
    point: {
      lat: 55.701009426677544,
      lon: 37.36172695767208,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 1058,
    fias: 'Московская обл, г Кубинка, ул Генерала Вотинцева, д 8 стр 2',
    point: {
      lat: 55.55060131023605,
      lon: 36.69073931349178,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2975,
      },
      {
        code: 'per_3h',
        price: 2380,
      },
      {
        code: 'sum',
        price: 2975,
      },
    ],
  },
  {
    id: 1059,
    fias: 'Московская обл, г Одинцово, ул Генерала Вотинцева, д 8 стр 2',
    point: {
      lat: 55.550769,
      lon: 36.690771,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2975,
      },
      {
        code: 'per_3h',
        price: 2380,
      },
      {
        code: 'sum',
        price: 2975,
      },
    ],
  },
  {
    id: 1060,
    fias: 'Московская обл, г Кубинка, ул Генерала Вотинцева, д 8 стр 2',
    point: {
      lat: 55.550935827437165,
      lon: 36.690803686508154,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2975,
      },
      {
        code: 'per_3h',
        price: 2380,
      },
      {
        code: 'sum',
        price: 2975,
      },
    ],
  },
  {
    id: 1061,
    fias: 'Московская обл, г Одинцово, рп Новоивановское, б-р Эйнштейна, д 4',
    point: {
      lat: 55.70206892253016,
      lon: 37.364084956344534,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 1062,
    fias: 'Московская обл, г Одинцово, рп Новоивановское, б-р Эйнштейна, д 4',
    point: {
      lat: 55.702020453730924,
      lon: 37.36440682142632,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 1063,
    fias: 'Московская обл, г Одинцово, рп Новоивановское, б-р Эйнштейна, д 4',
    point: {
      lat: 55.70209921549902,
      lon: 37.36469649999992,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 1064,
    fias: 'Московская обл, г Одинцово, рп Новоивановское, б-р Эйнштейна, д 4',
    point: {
      lat: 55.702052583928314,
      lon: 37.365141920337834,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 1065,
    fias: 'Московская обл, г Одинцово, ул Рябиновая, д 3 к 1',
    point: {
      lat: 55.6559688123505,
      lon: 37.26507248280329,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2975,
      },
      {
        code: 'per_3h',
        price: 2380,
      },
      {
        code: 'sum',
        price: 2975,
      },
    ],
  },
  {
    id: 1066,
    fias: 'Московская обл, г Одинцово, ул Рябиновая, д 3 к 1',
    point: {
      lat: 55.65564125931928,
      lon: 37.26527633068842,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2975,
      },
      {
        code: 'per_3h',
        price: 2380,
      },
      {
        code: 'sum',
        price: 2975,
      },
    ],
  },
  {
    id: 1067,
    fias: 'Московская обл, г Кубинка, г-к Кубинка-1, к 18',
    point: {
      lat: 55.55721991087797,
      lon: 36.698945024245376,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3485,
      },
      {
        code: 'per_3h',
        price: 2788,
      },
      {
        code: 'sum',
        price: 3485,
      },
    ],
  },
  {
    id: 1068,
    fias: 'Московская обл, г Кубинка, г-к Кубинка-1, к 28',
    point: {
      lat: 55.555163,
      lon: 36.701138,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3485,
      },
      {
        code: 'per_3h',
        price: 2788,
      },
      {
        code: 'sum',
        price: 3485,
      },
    ],
  },
  {
    id: 1069,
    fias: 'Московская обл,  г Кубинка, г-к Кубинка-1, к 20',
    point: {
      lat: 55.557317,
      lon: 36.701452,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3485,
      },
      {
        code: 'per_3h',
        price: 2788,
      },
      {
        code: 'sum',
        price: 3485,
      },
    ],
  },
  {
    id: 1070,
    fias: 'Московская обл, г Одинцово, ул Белорусская, д 10',
    point: {
      lat: 55.66115523673726,
      lon: 37.3000589246063,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3485,
      },
      {
        code: 'per_3h',
        price: 2788,
      },
      {
        code: 'sum',
        price: 3485,
      },
    ],
  },
  {
    id: 1071,
    fias: 'Московская обл, г Кубинка, г-к Кубинка-1, к 18',
    point: {
      lat: 55.5570952475499,
      lon: 36.69893429540932,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2975,
      },
      {
        code: 'per_3h',
        price: 2380,
      },
      {
        code: 'sum',
        price: 2975,
      },
    ],
  },
  {
    id: 1072,
    fias: 'Московская обл, г Кубинка, г-к Кубинка-1, к 18',
    point: {
      lat: 55.55694929973427,
      lon: 36.69893429540932,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2975,
      },
      {
        code: 'per_3h',
        price: 2380,
      },
      {
        code: 'sum',
        price: 2975,
      },
    ],
  },
  {
    id: 1073,
    fias: 'Московская обл, г Кубинка, г-к Кубинка-1, к 18',
    point: {
      lat: 55.556815513758366,
      lon: 36.6989289309913,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2975,
      },
      {
        code: 'per_3h',
        price: 2380,
      },
      {
        code: 'sum',
        price: 2975,
      },
    ],
  },
  {
    id: 1074,
    fias: 'Московская обл, г Одинцово, ул Говорова, д 32',
    point: {
      lat: 55.688497,
      lon: 37.297637,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3995,
      },
      {
        code: 'per_3h',
        price: 3196,
      },
      {
        code: 'sum',
        price: 3995,
      },
    ],
  },
  {
    id: 1075,
    fias: 'Московская обл, г Краснознаменск, ул Советская, д 2',
    point: {
      lat: 55.60012154752594,
      lon: 37.047781101188676,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3825,
      },
      {
        code: 'per_3h',
        price: 3060,
      },
      {
        code: 'sum',
        price: 3825,
      },
    ],
  },
  {
    id: 1076,
    fias: 'Московская обл, г Одинцово, ул Маковского, д 26',
    point: {
      lat: 55.662612825645276,
      lon: 37.28533369444456,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3995,
      },
      {
        code: 'per_3h',
        price: 3196,
      },
      {
        code: 'sum',
        price: 3995,
      },
    ],
  },
  {
    id: 1077,
    fias: 'Московская обл, г Одинцово, ул Каштановая, д 6',
    point: {
      lat: 55.654157,
      lon: 37.268011,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3995,
      },
      {
        code: 'per_3h',
        price: 3196,
      },
      {
        code: 'sum',
        price: 3995,
      },
    ],
  },
  {
    id: 1078,
    fias: 'Московская обл, г Одинцово, ул Белорусская, д 10',
    point: {
      lat: 55.66139176962876,
      lon: 37.30046662037658,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3995,
      },
      {
        code: 'per_3h',
        price: 3196,
      },
      {
        code: 'sum',
        price: 3995,
      },
    ],
  },
  {
    id: 1079,
    fias: 'Московская обл, г Краснознаменск, ул Советская, д 2',
    point: {
      lat: 55.6003058821212,
      lon: 37.0479295505121,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3825,
      },
      {
        code: 'per_3h',
        price: 3060,
      },
      {
        code: 'sum',
        price: 3825,
      },
    ],
  },
  {
    id: 1081,
    fias: 'Московская обл, г Одинцово, ул Белорусская, д 3',
    point: {
      lat: 55.66364695563274,
      lon: 37.30239038954925,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 1082,
    fias: 'Московская обл, г Одинцово, ул Белорусская, д 3',
    point: {
      lat: 55.66350140552277,
      lon: 37.302218728172306,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2975,
      },
      {
        code: 'per_3h',
        price: 2380,
      },
      {
        code: 'sum',
        price: 2975,
      },
    ],
  },
  {
    id: 1083,
    fias: 'Московская обл, г Одинцово, ул Белорусская, д 3',
    point: {
      lat: 55.66331946712087,
      lon: 37.3020899821396,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2975,
      },
      {
        code: 'per_3h',
        price: 2380,
      },
      {
        code: 'sum',
        price: 2975,
      },
    ],
  },
  {
    id: 1084,
    fias: 'Московская обл, г Одинцово, ул Белорусская, д 3',
    point: {
      lat: 55.663210303672024,
      lon: 37.30239038954925,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2975,
      },
      {
        code: 'per_3h',
        price: 2380,
      },
      {
        code: 'sum',
        price: 2975,
      },
    ],
  },
  {
    id: 1085,
    fias: 'Московская обл, г Одинцово, ул 1-я Советская',
    point: {
      lat: 55.695966,
      lon: 37.317158,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3485,
      },
      {
        code: 'per_3h',
        price: 2788,
      },
      {
        code: 'sum',
        price: 3485,
      },
    ],
  },
  {
    id: 1086,
    fias: 'Московская обл, г Одинцово, ул Вокзальная, д 19',
    point: {
      lat: 55.677428,
      lon: 37.289562,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3485,
      },
      {
        code: 'per_3h',
        price: 2788,
      },
      {
        code: 'sum',
        price: 3485,
      },
    ],
  },
  {
    id: 1087,
    fias: 'Московская обл, г Краснознаменск, ул Советская, д 2',
    point: {
      lat: 55.60045388219435,
      lon: 37.0480563959712,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2975,
      },
      {
        code: 'per_3h',
        price: 2380,
      },
      {
        code: 'sum',
        price: 2975,
      },
    ],
  },
  {
    id: 1088,
    fias: 'Московская обл, г Краснознаменск, ул Советская, д 2',
    point: {
      lat: 55.6005814445316,
      lon: 37.04796520086468,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2975,
      },
      {
        code: 'per_3h',
        price: 2380,
      },
      {
        code: 'sum',
        price: 2975,
      },
    ],
  },
  {
    id: 1089,
    fias: 'Московская обл, г Краснознаменск, ул Советская, д 2',
    point: {
      lat: 55.60063915116638,
      lon: 37.04765406461897,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2975,
      },
      {
        code: 'per_3h',
        price: 2380,
      },
      {
        code: 'sum',
        price: 2975,
      },
    ],
  },
  {
    id: 1090,
    fias: 'Московская обл, г Одинцово, ул Чистяковой, д 12',
    point: {
      lat: 55.696235,
      lon: 37.328548,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3485,
      },
      {
        code: 'per_3h',
        price: 2788,
      },
      {
        code: 'sum',
        price: 3485,
      },
    ],
  },
  {
    id: 1091,
    fias: 'Московская обл, г Одинцово, ул Северная, д 5 к 4',
    point: {
      lat: 55.681899,
      lon: 37.246209,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3485,
      },
      {
        code: 'per_3h',
        price: 2788,
      },
      {
        code: 'sum',
        price: 3485,
      },
    ],
  },
  {
    id: 1092,
    fias: 'Московская обл, г Одинцово, ул Кутузовская, д 23',
    point: {
      lat: 55.70565,
      lon: 37.327632,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3995,
      },
      {
        code: 'per_3h',
        price: 3196,
      },
      {
        code: 'sum',
        price: 3995,
      },
    ],
  },
  {
    id: 1128,
    fias: 'г Москва, ул Новодмитровская, д 2 к 6',
    point: {
      lat: 55.802991483201644,
      lon: 37.59126746560669,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6428,
      },
      {
        code: 'per_3h',
        price: 5142,
      },
      {
        code: 'sum',
        price: 6428,
      },
    ],
  },
  {
    id: 1129,
    fias: 'г Москва, ул Новодмитровская, д 2 к 7',
    point: {
      lat: 55.80277025850876,
      lon: 37.59154826190183,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6428,
      },
      {
        code: 'per_3h',
        price: 5142,
      },
      {
        code: 'sum',
        price: 6428,
      },
    ],
  },
  {
    id: 1131,
    fias: 'г Москва, ул Новодмитровская, д 2 к 5',
    point: {
      lat: 55.80352672662103,
      lon: 37.59107891534421,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 8498,
      },
      {
        code: 'per_3h',
        price: 6798,
      },
      {
        code: 'sum',
        price: 8498,
      },
    ],
  },
  {
    id: 1132,
    fias: 'г Москва, ул Новодмитровская, д 2 к 6',
    point: {
      lat: 55.80308816907556,
      lon: 37.591675161376955,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6543,
      },
      {
        code: 'per_3h',
        price: 5234,
      },
      {
        code: 'sum',
        price: 6543,
      },
    ],
  },
  {
    id: 1133,
    fias: 'г Москва, ул Новодмитровская, д 2 к 6',
    point: {
      lat: 55.8029068828642,
      lon: 37.59135329629517,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 7463,
      },
      {
        code: 'per_3h',
        price: 5970,
      },
      {
        code: 'sum',
        price: 7463,
      },
    ],
  },
  {
    id: 1134,
    fias: 'г Москва, ул Новодмитровская, д 2 к 1А',
    point: {
      lat: 55.80544264266106,
      lon: 37.589847169975215,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5968,
      },
      {
        code: 'per_3h',
        price: 4774,
      },
      {
        code: 'sum',
        price: 5968,
      },
    ],
  },
  {
    id: 1135,
    fias: 'г Москва, ул Новодмитровская, д 2 к 4',
    point: {
      lat: 55.80391925985194,
      lon: 37.590456555386524,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 8165,
      },
      {
        code: 'per_3h',
        price: 6532,
      },
      {
        code: 'sum',
        price: 8165,
      },
    ],
  },
  {
    id: 1136,
    fias: 'г Москва, ул Новодмитровская, д 2 к 4',
    point: {
      lat: 55.80413679752311,
      lon: 37.590842793484654,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6083,
      },
      {
        code: 'per_3h',
        price: 4866,
      },
      {
        code: 'sum',
        price: 6083,
      },
    ],
  },
  {
    id: 1137,
    fias: 'г Москва, ул Новодмитровская, д 2 к 6',
    point: {
      lat: 55.80300356894909,
      lon: 37.591718076721186,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6888,
      },
      {
        code: 'per_3h',
        price: 5510,
      },
      {
        code: 'sum',
        price: 6888,
      },
    ],
  },
  {
    id: 1138,
    fias: 'г Москва, ул Новодмитровская, д 2 к 5',
    point: {
      lat: 55.80357506892071,
      lon: 37.59082142327877,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 7233,
      },
      {
        code: 'per_3h',
        price: 5786,
      },
      {
        code: 'sum',
        price: 7233,
      },
    ],
  },
  {
    id: 1139,
    fias: 'г Москва, ул Новодмитровская, д 2 к 7',
    point: {
      lat: 55.80243185412024,
      lon: 37.5917413809509,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5968,
      },
      {
        code: 'per_3h',
        price: 4774,
      },
      {
        code: 'sum',
        price: 5968,
      },
    ],
  },
  {
    id: 1140,
    fias: 'г Москва, ул Новодмитровская, д 2 к 5',
    point: {
      lat: 55.80364758225719,
      lon: 37.591186203704794,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6543,
      },
      {
        code: 'per_3h',
        price: 5234,
      },
      {
        code: 'sum',
        price: 6543,
      },
    ],
  },
  {
    id: 1141,
    fias: 'г Москва, ул Новодмитровская, д 2 к 5',
    point: {
      lat: 55.80301525211253,
      lon: 37.591784434912974,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 7118,
      },
      {
        code: 'per_3h',
        price: 5694,
      },
      {
        code: 'sum',
        price: 7118,
      },
    ],
  },
  {
    id: 1298,
    fias: 'г Москва, ул Митинская, д 28',
    point: {
      lat: 55.844925,
      lon: 37.367697,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4720,
      },
      {
        code: 'per_3h',
        price: 3776,
      },
      {
        code: 'sum',
        price: 4720,
      },
    ],
  },
  {
    id: 1299,
    fias: 'г Москва, Большой Гнездниковский пер, д 10',
    point: {
      lat: 55.763407,
      lon: 37.605652,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5900,
      },
      {
        code: 'per_3h',
        price: 4720,
      },
      {
        code: 'sum',
        price: 5900,
      },
    ],
  },
  {
    id: 1690,
    fias: 'г Москва, ул Красная Пресня, д 38',
    point: {
      lat: 55.76287,
      lon: 37.565398,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 7200,
      },
      {
        code: 'per_3h',
        price: 5760,
      },
      {
        code: 'sum',
        price: 7200,
      },
    ],
  },
  {
    id: 2038,
    fias: 'г Москва, ул Саморы Машела, д 6',
    point: {
      lat: 55.648402,
      lon: 37.499624,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5175,
      },
      {
        code: 'per_3h',
        price: 4140,
      },
      {
        code: 'sum',
        price: 5175,
      },
    ],
  },
  {
    id: 2039,
    fias: 'г Москва, ул Профсоюзная, д 69',
    point: {
      lat: 55.64905580094672,
      lon: 37.53405895700633,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3220,
      },
      {
        code: 'per_3h',
        price: 2576,
      },
      {
        code: 'sum',
        price: 3220,
      },
    ],
  },
  {
    id: 2040,
    fias: 'г Москва, ул Профсоюзная, д 69',
    point: {
      lat: 55.64915893720994,
      lon: 37.533989219571936,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4025,
      },
      {
        code: 'per_3h',
        price: 3220,
      },
      {
        code: 'sum',
        price: 4025,
      },
    ],
  },
  {
    id: 2113,
    fias: 'г Москва, ул Новодмитровская, д 2 к 7',
    point: {
      lat: 55.80243185412024,
      lon: 37.592020330688456,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5002,
      },
      {
        code: 'per_3h',
        price: 4002,
      },
      {
        code: 'sum',
        price: 5002,
      },
    ],
  },
  {
    id: 2114,
    fias: 'г Москва, ул Новодмитровская, д 2 к 5',
    point: {
      lat: 55.8030877664961,
      lon: 37.591655688880266,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5002,
      },
      {
        code: 'per_3h',
        price: 4002,
      },
      {
        code: 'sum',
        price: 5002,
      },
    ],
  },
  {
    id: 2115,
    fias: 'г Москва, ул Новодмитровская, д 2 к 7',
    point: {
      lat: 55.80256479905372,
      lon: 37.5920847037048,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5520,
      },
      {
        code: 'per_3h',
        price: 4416,
      },
      {
        code: 'sum',
        price: 5520,
      },
    ],
  },
  {
    id: 2116,
    fias: 'г Москва, ул Гостиничная, д 10 к 5',
    point: {
      lat: 55.84667240284183,
      lon: 37.58095238095089,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3795,
      },
      {
        code: 'per_3h',
        price: 3036,
      },
      {
        code: 'sum',
        price: 3795,
      },
    ],
  },
  {
    id: 2117,
    fias: 'г Москва, ул Гостиничная, д 12 к 6',
    point: {
      lat: 55.845739,
      lon: 37.582574,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5175,
      },
      {
        code: 'per_3h',
        price: 4140,
      },
      {
        code: 'sum',
        price: 5175,
      },
    ],
  },
  {
    id: 2118,
    fias: 'г Москва, ул Гостиничная, д 10 к 5',
    point: {
      lat: 55.84646114000905,
      lon: 37.5810811269836,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4945,
      },
      {
        code: 'per_3h',
        price: 3956,
      },
      {
        code: 'sum',
        price: 4945,
      },
    ],
  },
  {
    id: 2119,
    fias: 'г Москва, ул Гостиничная, д 10 к 5',
    point: {
      lat: 55.84622573149422,
      lon: 37.58110258465573,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4025,
      },
      {
        code: 'per_3h',
        price: 3220,
      },
      {
        code: 'sum',
        price: 4255,
      },
    ],
  },
  {
    id: 2120,
    fias: 'г Москва, ул Гостиничная, д 10 к 5',
    point: {
      lat: 55.846050683208915,
      lon: 37.58110258465573,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4025,
      },
      {
        code: 'per_3h',
        price: 3220,
      },
      {
        code: 'sum',
        price: 4485,
      },
    ],
  },
  {
    id: 2121,
    fias: 'г Москва, ул Гостиничная, д 10 к 5',
    point: {
      lat: 55.845857525561556,
      lon: 37.58099529629512,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4025,
      },
      {
        code: 'per_3h',
        price: 3220,
      },
      {
        code: 'sum',
        price: 4025,
      },
    ],
  },
  {
    id: 2122,
    fias: 'г Москва, Гостиничный проезд, д 6 к 2',
    point: {
      lat: 55.845007132069206,
      lon: 37.576339406082134,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4025,
      },
      {
        code: 'per_3h',
        price: 3220,
      },
      {
        code: 'sum',
        price: 4025,
      },
    ],
  },
  {
    id: 2123,
    fias: 'г Москва, ул Гостиничная, д 10 к 5',
    point: {
      lat: 55.84574887396135,
      lon: 37.581349347885094,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4945,
      },
      {
        code: 'per_3h',
        price: 3956,
      },
      {
        code: 'sum',
        price: 4945,
      },
    ],
  },
  {
    id: 2124,
    fias: 'г Москва, ул Ботаническая, д 41 к 7',
    point: {
      lat: 55.84609444646911,
      lon: 37.58391931969842,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4025,
      },
      {
        code: 'per_3h',
        price: 3220,
      },
      {
        code: 'sum',
        price: 4025,
      },
    ],
  },
  {
    id: 2125,
    fias: 'г Москва, ул Гостиничная, д 10 к 5',
    point: {
      lat: 55.846708619211654,
      lon: 37.58143517857357,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4485,
      },
      {
        code: 'per_3h',
        price: 3588,
      },
      {
        code: 'sum',
        price: 4485,
      },
    ],
  },
  {
    id: 2126,
    fias: 'г Москва, ул Ботаническая, д 41 к 7',
    point: {
      lat: 55.84587714429376,
      lon: 37.584101709911415,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4025,
      },
      {
        code: 'per_3h',
        price: 3220,
      },
      {
        code: 'sum',
        price: 4485,
      },
    ],
  },
  {
    id: 2127,
    fias: 'г Москва, Гостиничный проезд, д 6 к 2',
    point: {
      lat: 55.84460873262478,
      lon: 37.57665054232784,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4945,
      },
      {
        code: 'per_3h',
        price: 3956,
      },
      {
        code: 'sum',
        price: 4945,
      },
    ],
  },
  {
    id: 2136,
    fias: 'Московская обл, г Жуковский, ул Гагарина, д 62',
    point: {
      lat: 55.60918389783766,
      lon: 38.0868675158691,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2868,
      },
      {
        code: 'per_3h',
        price: 2294,
      },
      {
        code: 'sum',
        price: 2868,
      },
    ],
  },
  {
    id: 2137,
    fias: 'Московская обл, г Жуковский, ул Гагарина, д 62',
    point: {
      lat: 55.609123167297284,
      lon: 38.087779466934144,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2988,
      },
      {
        code: 'per_3h',
        price: 2390,
      },
      {
        code: 'sum',
        price: 2988,
      },
    ],
  },
  {
    id: 2185,
    fias: 'г Москва, Песчаный пер, д 14 к 3',
    point: {
      lat: 55.797377,
      lon: 37.506594,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3277,
      },
      {
        code: 'per_3h',
        price: 2622,
      },
      {
        code: 'sum',
        price: 3277,
      },
    ],
  },
  {
    id: 2186,
    fias: 'г Москва, ул Мишина, д 29',
    point: {
      lat: 55.795282,
      lon: 37.563673,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3220,
      },
      {
        code: 'per_3h',
        price: 2576,
      },
      {
        code: 'sum',
        price: 3220,
      },
    ],
  },
  {
    id: 2190,
    fias: 'г Москва, ул Юннатов, д 15 к 1',
    point: {
      lat: 55.801986,
      lon: 37.558688,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3335,
      },
      {
        code: 'per_3h',
        price: 2668,
      },
      {
        code: 'sum',
        price: 3335,
      },
    ],
  },
  {
    id: 2191,
    fias: 'г Москва, Ленинградский пр-кт, д 33 к 9',
    point: {
      lat: 55.78646,
      lon: 37.558634,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3565,
      },
      {
        code: 'per_3h',
        price: 2852,
      },
      {
        code: 'sum',
        price: 3565,
      },
    ],
  },
  {
    id: 2192,
    fias: 'г Москва, ул Усиевича, д 25 к 2',
    point: {
      lat: 55.806226,
      lon: 37.522701,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3335,
      },
      {
        code: 'per_3h',
        price: 2668,
      },
      {
        code: 'sum',
        price: 3335,
      },
    ],
  },
  {
    id: 2193,
    fias: 'г Москва, Хорошёвское шоссе, д 17',
    point: {
      lat: 55.775854,
      lon: 37.531702,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3220,
      },
      {
        code: 'per_3h',
        price: 2576,
      },
      {
        code: 'sum',
        price: 3220,
      },
    ],
  },
  {
    id: 2194,
    fias: 'г Москва, Новый Зыковский проезд, д 5',
    point: {
      lat: 55.799345,
      lon: 37.553558,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4025,
      },
      {
        code: 'per_3h',
        price: 3220,
      },
      {
        code: 'sum',
        price: 4025,
      },
    ],
  },
  {
    id: 2195,
    fias: 'г Москва, ул Скаковая, д 4 к 2',
    point: {
      lat: 55.782213,
      lon: 37.566395,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3450,
      },
      {
        code: 'per_3h',
        price: 2760,
      },
      {
        code: 'sum',
        price: 3450,
      },
    ],
  },
  {
    id: 2196,
    fias: 'г Москва, ул Викторенко, д 2/1',
    point: {
      lat: 55.799477,
      lon: 37.528567,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4600,
      },
      {
        code: 'per_3h',
        price: 3680,
      },
      {
        code: 'sum',
        price: 4600,
      },
    ],
  },
  {
    id: 2382,
    fias: 'г Москва, 2-й Митинский пер, д 3 к 1',
    point: {
      lat: 55.846517,
      lon: 37.365469,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3894,
      },
      {
        code: 'per_3h',
        price: 3115,
      },
      {
        code: 'sum',
        price: 3894,
      },
    ],
  },
  {
    id: 2383,
    fias: 'г Москва, 2-й Митинский пер, д 3',
    point: {
      lat: 55.846037,
      lon: 37.366493,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4720,
      },
      {
        code: 'per_3h',
        price: 3776,
      },
      {
        code: 'sum',
        price: 4720,
      },
    ],
  },
  {
    id: 2509,
    fias: 'г Москва, ул Профсоюзная, д 42 к 3',
    point: {
      lat: 55.675519,
      lon: 37.55443,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4956,
      },
      {
        code: 'per_3h',
        price: 3965,
      },
      {
        code: 'sum',
        price: 4956,
      },
    ],
  },
  {
    id: 2510,
    fias: 'г Москва, ул Кржижановского, д 28',
    point: {
      lat: 55.676169,
      lon: 37.579259,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4366,
      },
      {
        code: 'per_3h',
        price: 3493,
      },
      {
        code: 'sum',
        price: 4366,
      },
    ],
  },
  {
    id: 2511,
    fias: 'г Москва, ул Профсоюзная, д 32 к 2',
    point: {
      lat: 55.677103,
      lon: 37.559802,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5310,
      },
      {
        code: 'per_3h',
        price: 4248,
      },
      {
        code: 'sum',
        price: 5310,
      },
    ],
  },
  {
    id: 2512,
    fias: 'г Москва, пр-кт 60-летия Октября, д 16 к 1',
    point: {
      lat: 55.690608,
      lon: 37.574525,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5310,
      },
      {
        code: 'per_3h',
        price: 4248,
      },
      {
        code: 'sum',
        price: 5310,
      },
    ],
  },
  {
    id: 2513,
    fias: 'г Москва, ул Губкина, д 7',
    point: {
      lat: 55.69419,
      lon: 37.567842,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4956,
      },
      {
        code: 'per_3h',
        price: 3965,
      },
      {
        code: 'sum',
        price: 4956,
      },
    ],
  },
  {
    id: 3145,
    fias: 'г Москва, поселение Внуковское, ул Анны Ахматовой, д 11 к 1',
    point: {
      lat: 55.633794193179575,
      lon: 37.33179171206147,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3768,
      },
      {
        code: 'per_3h',
        price: 3014,
      },
      {
        code: 'sum',
        price: 3768,
      },
    ],
  },
  {
    id: 3146,
    fias: 'г Москва, поселение Внуковское, ул Анны Ахматовой, д 11 к 1',
    point: {
      lat: 55.633842746920536,
      lon: 37.33205456854493,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3927,
      },
      {
        code: 'per_3h',
        price: 3142,
      },
      {
        code: 'sum',
        price: 3927,
      },
    ],
  },
  {
    id: 3147,
    fias: 'г Москва, ул Чоботовская, д 2 к 2',
    point: {
      lat: 55.643322883817085,
      lon: 37.35955534788506,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4696,
      },
      {
        code: 'per_3h',
        price: 3757,
      },
      {
        code: 'sum',
        price: 4696,
      },
    ],
  },
  {
    id: 3148,
    fias: 'г Москва, поселение Внуковское, ул Анны Ахматовой, д 11 к 1',
    point: {
      lat: 55.633860954557804,
      lon: 37.33227987410217,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3186,
      },
      {
        code: 'per_3h',
        price: 2549,
      },
      {
        code: 'sum',
        price: 3927,
      },
    ],
  },
  {
    id: 3149,
    fias: 'г Москва, ул Чоботовская, д 2 к 2',
    point: {
      lat: 55.64352918639737,
      lon: 37.35919056745904,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5010,
      },
      {
        code: 'per_3h',
        price: 4008,
      },
      {
        code: 'sum',
        price: 5010,
      },
    ],
  },
  {
    id: 3151,
    fias: 'г Москва, поселение Внуковское, ул Анны Ахматовой, д 6',
    point: {
      lat: 55.638069,
      lon: 37.332735,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5010,
      },
      {
        code: 'per_3h',
        price: 4008,
      },
      {
        code: 'sum',
        price: 5010,
      },
    ],
  },
  {
    id: 3152,
    fias: 'г Москва, поселение Внуковское, ул Анны Ахматовой, д 11 к 1',
    point: {
      lat: 55.63389736980689,
      lon: 37.3324622643152,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3927,
      },
      {
        code: 'per_3h',
        price: 3142,
      },
      {
        code: 'sum',
        price: 3927,
      },
    ],
  },
  {
    id: 3153,
    fias: 'г Москва, ул Чоботовская, д 2 к 2',
    point: {
      lat: 55.64369908182054,
      lon: 37.358847244705125,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5010,
      },
      {
        code: 'per_3h',
        price: 4008,
      },
      {
        code: 'sum',
        price: 5010,
      },
    ],
  },
  {
    id: 3154,
    fias: 'г Москва, поселение Внуковское, ул Анны Ахматовой, д 11 к 1',
    point: {
      lat: 55.63400358075587,
      lon: 37.3323925268808,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3768,
      },
      {
        code: 'per_3h',
        price: 3014,
      },
      {
        code: 'sum',
        price: 3768,
      },
    ],
  },
  {
    id: 3155,
    fias: 'г Москва, поселение Внуковское, ул Анны Ахматовой, д 11 к 1',
    point: {
      lat: 55.634170483091516,
      lon: 37.33227450968415,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3422,
      },
      {
        code: 'per_3h',
        price: 2738,
      },
      {
        code: 'sum',
        price: 4083,
      },
    ],
  },
  {
    id: 3156,
    fias: 'г Москва, ул Чоботовская, д 2 к 2',
    point: {
      lat: 55.64387504415718,
      lon: 37.35853610845941,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4539,
      },
      {
        code: 'per_3h',
        price: 3631,
      },
      {
        code: 'sum',
        price: 4539,
      },
    ],
  },
  {
    id: 3178,
    fias: 'Московская обл, г Видное, ул Олимпийская, д 6',
    point: {
      lat: 55.54594892168078,
      lon: 37.69902768650814,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2760,
      },
      {
        code: 'per_3h',
        price: 2208,
      },
      {
        code: 'sum',
        price: 2760,
      },
    ],
  },
  {
    id: 3181,
    fias: 'Московская обл, г Видное, ул Олимпийская, д 6',
    point: {
      lat: 55.54595500456026,
      lon: 37.69966068783566,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3600,
      },
      {
        code: 'per_3h',
        price: 2880,
      },
      {
        code: 'sum',
        price: 3600,
      },
    ],
  },
  {
    id: 3182,
    fias: 'Московская обл, г Видное, ул Олимпийская, д 6',
    point: {
      lat: 55.545687356969154,
      lon: 37.69938173809811,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2760,
      },
      {
        code: 'per_3h',
        price: 2208,
      },
      {
        code: 'sum',
        price: 2760,
      },
    ],
  },
  {
    id: 3183,
    fias: 'Московская обл, г Видное, ул Олимпийская, д 6',
    point: {
      lat: 55.54551095187439,
      lon: 37.699489026458686,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2760,
      },
      {
        code: 'per_3h',
        price: 2208,
      },
      {
        code: 'sum',
        price: 2760,
      },
    ],
  },
  {
    id: 3184,
    fias: 'Московская обл, г Видное, ул Олимпийская, д 6',
    point: {
      lat: 55.54551095187439,
      lon: 37.69903841534419,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2940,
      },
      {
        code: 'per_3h',
        price: 2352,
      },
      {
        code: 'sum',
        price: 2760,
      },
    ],
  },
  {
    id: 3425,
    fias: 'г Москва, Долгопрудненское шоссе, д 6А',
    point: {
      lat: 55.920573,
      lon: 37.541189,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2875,
      },
      {
        code: 'per_3h',
        price: 2300,
      },
      {
        code: 'sum',
        price: 2875,
      },
    ],
  },
  {
    id: 3426,
    fias: 'г Москва, Долгопрудненское шоссе, д 6А',
    point: {
      lat: 55.920573,
      lon: 37.541189,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2875,
      },
      {
        code: 'per_3h',
        price: 2300,
      },
      {
        code: 'sum',
        price: 2875,
      },
    ],
  },
  {
    id: 3507,
    fias: 'г Москва, Гостиничный проезд, д 8 к 1',
    point: {
      lat: 55.8458612805926,
      lon: 37.576165144905666,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3300,
      },
      {
        code: 'per_3h',
        price: 2640,
      },
      {
        code: 'sum',
        price: 3300,
      },
    ],
  },
  {
    id: 3509,
    fias: 'г Москва, Гостиничный проезд, д 8 к 1',
    point: {
      lat: 55.845991058480564,
      lon: 37.576116865143405,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3300,
      },
      {
        code: 'per_3h',
        price: 2640,
      },
      {
        code: 'sum',
        price: 3300,
      },
    ],
  },
  {
    id: 3511,
    fias: 'г Москва, Гостиничный проезд, д 8 к 1',
    point: {
      lat: 55.84613592630667,
      lon: 37.57607394979917,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3850,
      },
      {
        code: 'per_3h',
        price: 3080,
      },
      {
        code: 'sum',
        price: 3850,
      },
    ],
  },
  {
    id: 3512,
    fias: 'г Москва, Гостиничный проезд, д 8 к 1',
    point: {
      lat: 55.846213850598296,
      lon: 37.57596109941858,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3450,
      },
      {
        code: 'per_3h',
        price: 2760,
      },
      {
        code: 'sum',
        price: 3450,
      },
    ],
  },
  {
    id: 3517,
    fias: 'г Москва, Гостиничный проезд, д 8 к 1',
    point: {
      lat: 55.84632250089331,
      lon: 37.57582698896782,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3450,
      },
      {
        code: 'per_3h',
        price: 2760,
      },
      {
        code: 'sum',
        price: 3450,
      },
    ],
  },
  {
    id: 3519,
    fias: 'г Москва, ул Нижняя Красносельская, д 35 стр 49',
    point: {
      lat: 55.77555,
      lon: 37.672118,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 7700,
      },
      {
        code: 'per_3h',
        price: 6160,
      },
      {
        code: 'sum',
        price: 7700,
      },
    ],
  },
  {
    id: 3526,
    fias: 'г Москва, Балакиревский пер, д 23',
    point: {
      lat: 55.778193,
      lon: 37.689384,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4400,
      },
      {
        code: 'per_3h',
        price: 3520,
      },
      {
        code: 'sum',
        price: 4400,
      },
    ],
  },
  {
    id: 3600,
    fias: 'г Москва, Ходынский б-р, д 20А',
    point: {
      lat: 55.79120637462204,
      lon: 37.52315204384209,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 9600,
      },
      {
        code: 'per_3h',
        price: 7680,
      },
      {
        code: 'sum',
        price: 9600,
      },
    ],
  },
  {
    id: 3643,
    fias: 'г Москва, пр-кт Вернадского, д 61 к 3',
    point: {
      lat: 55.67161,
      lon: 37.505696,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5605,
      },
      {
        code: 'per_3h',
        price: 4484,
      },
      {
        code: 'sum',
        price: 5605,
      },
    ],
  },
  {
    id: 3644,
    fias: 'г Москва, ул Кировоградская, д 17 к 1',
    point: {
      lat: 55.608734,
      lon: 37.603927,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4071,
      },
      {
        code: 'per_3h',
        price: 3257,
      },
      {
        code: 'sum',
        price: 4071,
      },
    ],
  },
  {
    id: 3645,
    fias: 'г Москва, Симферопольский б-р, д 17 к 1',
    point: {
      lat: 55.652055,
      lon: 37.606442,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4720,
      },
      {
        code: 'per_3h',
        price: 3776,
      },
      {
        code: 'sum',
        price: 4720,
      },
    ],
  },
  {
    id: 3673,
    fias: 'г Москва, ул Чоботовская, д 2 к 1',
    point: {
      lat: 55.642786096146246,
      lon: 37.357438439811695,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4696,
      },
      {
        code: 'per_3h',
        price: 3757,
      },
      {
        code: 'sum',
        price: 4696,
      },
    ],
  },
  {
    id: 3813,
    fias: 'Московская обл, г Коломна, ул Октябрьской революции, д 165',
    point: {
      lat: 55.10712549414591,
      lon: 38.745146322090115,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3050,
      },
      {
        code: 'per_3h',
        price: 2440,
      },
      {
        code: 'sum',
        price: 3050,
      },
    ],
  },
  {
    id: 3814,
    fias: 'Московская обл, г Коломна, пр-кт Кирова, д 58',
    point: {
      lat: 55.077297847174485,
      lon: 38.75868640674587,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2806,
      },
      {
        code: 'per_3h',
        price: 2245,
      },
      {
        code: 'sum',
        price: 2806,
      },
    ],
  },
  {
    id: 3815,
    fias: 'Московская обл, г Коломна, ул Левшина, д 26',
    point: {
      lat: 55.10088170285845,
      lon: 38.77114075396724,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3050,
      },
      {
        code: 'per_3h',
        price: 2440,
      },
      {
        code: 'sum',
        price: 3050,
      },
    ],
  },
  {
    id: 3816,
    fias: 'Московская обл, г Коломна, пр-кт Кирова, д 58А',
    point: {
      lat: 55.07753483364072,
      lon: 38.75799439682004,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2806,
      },
      {
        code: 'per_3h',
        price: 2245,
      },
      {
        code: 'sum',
        price: 2806,
      },
    ],
  },
  {
    id: 3817,
    fias: 'Московская обл, г Коломна, ул Карла Либкнехта, д 34а',
    point: {
      lat: 55.075500660177006,
      lon: 38.774347364418,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3416,
      },
      {
        code: 'per_3h',
        price: 2733,
      },
      {
        code: 'sum',
        price: 3416,
      },
    ],
  },
  {
    id: 3848,
    fias: 'г Москва, ул Рабочая, д 37',
    point: {
      lat: 55.741131515395026,
      lon: 37.68745843187711,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6033,
      },
      {
        code: 'per_3h',
        price: 4826,
      },
      {
        code: 'sum',
        price: 6033,
      },
    ],
  },
  {
    id: 3849,
    fias: 'г Москва, Волховский пер, д 21/23',
    point: {
      lat: 55.77040004856822,
      lon: 37.68547081349184,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6018,
      },
      {
        code: 'per_3h',
        price: 4814,
      },
      {
        code: 'sum',
        price: 6018,
      },
    ],
  },
  {
    id: 3900,
    fias: 'г Москва, Гостиничный проезд, д 8 к 1',
    point: {
      lat: 55.84641304257287,
      lon: 37.57617031172174,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4025,
      },
      {
        code: 'per_3h',
        price: 3220,
      },
      {
        code: 'sum',
        price: 4025,
      },
    ],
  },
  {
    id: 3976,
    fias: 'г Москва, 1-й Красногвардейский проезд, д 22 стр 2',
    point: {
      lat: 55.751496940694174,
      lon: 37.535280280705216,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 16100,
      },
      {
        code: 'per_3h',
        price: 12880,
      },
      {
        code: 'sum',
        price: 16100,
      },
    ],
  },
  {
    id: 3978,
    fias: 'г Москва, 1-й Красногвардейский проезд, д 22 стр 2',
    point: {
      lat: 55.75158770406777,
      lon: 37.53506570398403,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 19550,
      },
      {
        code: 'per_3h',
        price: 15640,
      },
      {
        code: 'sum',
        price: 19550,
      },
    ],
  },
  {
    id: 3980,
    fias: 'г Москва, Пресненская наб, д 12',
    point: {
      lat: 55.749747541412816,
      lon: 37.53660737962337,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 21850,
      },
      {
        code: 'per_3h',
        price: 17480,
      },
      {
        code: 'sum',
        price: 21850,
      },
    ],
  },
  {
    id: 3982,
    fias: 'г Москва, Пресненская наб, д 12',
    point: {
      lat: 55.74952364743492,
      lon: 37.53674685449216,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 19550,
      },
      {
        code: 'per_3h',
        price: 15640,
      },
      {
        code: 'sum',
        price: 17250,
      },
    ],
  },
  {
    id: 3983,
    fias: 'г Москва, Пресненская наб, д 12',
    point: {
      lat: 55.749332318103775,
      lon: 37.53659037976701,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 16100,
      },
      {
        code: 'per_3h',
        price: 12880,
      },
      {
        code: 'sum',
        price: 16100,
      },
    ],
  },
  {
    id: 3987,
    fias: 'г Москва, 1-й Красногвардейский проезд, д 22 стр 2',
    point: {
      lat: 55.75191688833059,
      lon: 37.53490044880728,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 23000,
      },
      {
        code: 'per_3h',
        price: 18400,
      },
      {
        code: 'sum',
        price: 23000,
      },
    ],
  },
  {
    id: 3989,
    fias: 'г Москва, Пресненская наб, д 12',
    point: {
      lat: 55.74943657641314,
      lon: 37.53744561626456,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 28750,
      },
      {
        code: 'per_3h',
        price: 23000,
      },
      {
        code: 'sum',
        price: 28750,
      },
    ],
  },
  {
    id: 3991,
    fias: 'г Москва, Пресненская наб, д 12',
    point: {
      lat: 55.74943657641314,
      lon: 37.53716666652701,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 24150,
      },
      {
        code: 'per_3h',
        price: 19320,
      },
      {
        code: 'sum',
        price: 24150,
      },
    ],
  },
  {
    id: 3992,
    fias: 'г Москва, Пресненская наб, д 12',
    point: {
      lat: 55.74957575421446,
      lon: 37.537552904625166,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 28750,
      },
      {
        code: 'per_3h',
        price: 23000,
      },
      {
        code: 'sum',
        price: 28750,
      },
    ],
  },
  {
    id: 3993,
    fias: 'г Москва, Пресненская наб, д 12',
    point: {
      lat: 55.74978754556407,
      lon: 37.53756363346122,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 32200,
      },
      {
        code: 'per_3h',
        price: 25760,
      },
      {
        code: 'sum',
        price: 32200,
      },
    ],
  },
  {
    id: 3994,
    fias: 'г Москва, Пресненская наб, д 12',
    point: {
      lat: 55.74998118235897,
      lon: 37.53750998928093,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 18400,
      },
      {
        code: 'per_3h',
        price: 14720,
      },
      {
        code: 'sum',
        price: 18400,
      },
    ],
  },
  {
    id: 3995,
    fias: 'г Москва, 1-й Красногвардейский проезд, д 22 стр 1',
    point: {
      lat: 55.750996571204396,
      lon: 37.53358089649123,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 31050,
      },
      {
        code: 'per_3h',
        price: 24840,
      },
      {
        code: 'sum',
        price: 31050,
      },
    ],
  },
  {
    id: 4112,
    fias: 'г Москва, ул Новодмитровская, д 2 к 1А',
    point: {
      lat: 55.80537013268216,
      lon: 37.589933000663684,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5298,
      },
      {
        code: 'per_3h',
        price: 4238,
      },
      {
        code: 'sum',
        price: 5298,
      },
    ],
  },
  {
    id: 4113,
    fias: 'г Москва, ул Новодмитровская, д 2 к 1А',
    point: {
      lat: 55.805423522707194,
      lon: 37.58976925774798,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5298,
      },
      {
        code: 'per_3h',
        price: 4238,
      },
      {
        code: 'sum',
        price: 5298,
      },
    ],
  },
  {
    id: 4114,
    fias: 'г Москва, ул Новодмитровская, д 2 к 1А',
    point: {
      lat: 55.80535101269252,
      lon: 37.58981217309222,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5298,
      },
      {
        code: 'per_3h',
        price: 4238,
      },
      {
        code: 'sum',
        price: 5298,
      },
    ],
  },
  {
    id: 4115,
    fias: 'г Москва, ул Новодмитровская, д 2 к 1А',
    point: {
      lat: 55.805399352717366,
      lon: 37.58966196938741,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5652,
      },
      {
        code: 'per_3h',
        price: 4522,
      },
      {
        code: 'sum',
        price: 5652,
      },
    ],
  },
  {
    id: 4116,
    fias: 'г Москва, ул Новодмитровская, д 2 к 1А',
    point: {
      lat: 55.80531475763433,
      lon: 37.58966196938741,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5652,
      },
      {
        code: 'per_3h',
        price: 4522,
      },
      {
        code: 'sum',
        price: 5652,
      },
    ],
  },
  {
    id: 4117,
    fias: 'г Москва, ул Новодмитровская, д 2 к 1А',
    point: {
      lat: 55.80536309770437,
      lon: 37.589447392666195,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5298,
      },
      {
        code: 'per_3h',
        price: 4238,
      },
      {
        code: 'sum',
        price: 5298,
      },
    ],
  },
  {
    id: 4118,
    fias: 'г Москва, ул Новодмитровская, д 2 к 1А',
    point: {
      lat: 55.805266417504,
      lon: 37.589447392666195,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5652,
      },
      {
        code: 'per_3h',
        price: 4522,
      },
      {
        code: 'sum',
        price: 5652,
      },
    ],
  },
  {
    id: 4126,
    fias: 'г Москва, 1-й Рижский пер, д 2 к 1',
    point: {
      lat: 55.808913,
      lon: 37.653801,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3304,
      },
      {
        code: 'per_3h',
        price: 2643,
      },
      {
        code: 'sum',
        price: 3304,
      },
    ],
  },
  {
    id: 4127,
    fias: 'Московская обл, г Сергиев Посад, ул Инженерная, д 8',
    point: {
      lat: 56.32438251794904,
      lon: 38.142708103179935,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3200,
      },
      {
        code: 'per_3h',
        price: 2560,
      },
      {
        code: 'sum',
        price: 3200,
      },
    ],
  },
  {
    id: 4128,
    fias: 'Московская обл, г Сергиев Посад, ул Инженерная, д 8',
    point: {
      lat: 56.32450770636656,
      lon: 38.142461339950565,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3500,
      },
      {
        code: 'per_3h',
        price: 2800,
      },
      {
        code: 'sum',
        price: 3500,
      },
    ],
  },
  {
    id: 4129,
    fias: 'Московская обл, г Сергиев Посад, ул Инженерная, д 8',
    point: {
      lat: 56.32468210173305,
      lon: 38.1421758883568,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3200,
      },
      {
        code: 'per_3h',
        price: 2560,
      },
      {
        code: 'sum',
        price: 3200,
      },
    ],
  },
  {
    id: 4130,
    fias: 'Московская обл, г Сергиев Посад, ул Инженерная, д 21',
    point: {
      lat: 56.324162,
      lon: 38.139386,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3200,
      },
      {
        code: 'per_3h',
        price: 2560,
      },
      {
        code: 'sum',
        price: 3200,
      },
    ],
  },
  {
    id: 4131,
    fias: 'Московская обл, г Сергиев Посад, ул Инженерная, д 8',
    point: {
      lat: 56.32454499121654,
      lon: 38.141854023275016,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3200,
      },
      {
        code: 'per_3h',
        price: 2560,
      },
      {
        code: 'sum',
        price: 3200,
      },
    ],
  },
  {
    id: 4223,
    fias: 'г Москва, ул Айвазовского, д 6 к 1',
    point: {
      lat: 55.617444,
      lon: 37.539931,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4720,
      },
      {
        code: 'per_3h',
        price: 3776,
      },
      {
        code: 'sum',
        price: 4720,
      },
    ],
  },
  {
    id: 4224,
    fias: 'г Москва, Головинское шоссе, д 11',
    point: {
      lat: 55.840042,
      lon: 37.495123,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6490,
      },
      {
        code: 'per_3h',
        price: 5192,
      },
      {
        code: 'sum',
        price: 4602,
      },
    ],
  },
  {
    id: 4225,
    fias: 'г Москва, Головинское шоссе, д 7',
    point: {
      lat: 55.839572,
      lon: 37.493192,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 7198,
      },
      {
        code: 'per_3h',
        price: 5758,
      },
      {
        code: 'sum',
        price: 7198,
      },
    ],
  },
  {
    id: 4230,
    fias: 'г Москва, Волоколамское шоссе, д 88 к 5 стр 5',
    point: {
      lat: 55.82454119548344,
      lon: 37.442272347885144,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3764,
      },
      {
        code: 'per_3h',
        price: 3011,
      },
      {
        code: 'sum',
        price: 3764,
      },
    ],
  },
  {
    id: 4231,
    fias: 'г Москва, ул Митинская, д 16',
    point: {
      lat: 55.84259200507707,
      lon: 37.37303999933621,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3776,
      },
      {
        code: 'per_3h',
        price: 3021,
      },
      {
        code: 'sum',
        price: 3776,
      },
    ],
  },
  {
    id: 4232,
    fias: 'г Москва, Волоколамское шоссе, д 88 к 5 стр 5',
    point: {
      lat: 55.82432377232187,
      lon: 37.44195048280336,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3835,
      },
      {
        code: 'per_3h',
        price: 3068,
      },
      {
        code: 'sum',
        price: 3835,
      },
    ],
  },
  {
    id: 4246,
    fias: 'г Москва, поселение Московский, ул Саларьевская, д 16 к 3',
    point: {
      lat: 55.617449,
      lon: 37.408786,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4484,
      },
      {
        code: 'per_3h',
        price: 3587,
      },
      {
        code: 'sum',
        price: 4484,
      },
    ],
  },
  {
    id: 4247,
    fias: 'г Москва, поселение Московский, ул Саларьевская, д 13 к 1',
    point: {
      lat: 55.614287978281055,
      lon: 37.412597390212994,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3540,
      },
      {
        code: 'per_3h',
        price: 2832,
      },
      {
        code: 'sum',
        price: 3540,
      },
    ],
  },
  {
    id: 4248,
    fias: 'г Москва, поселение Сосенское, ул Красулинская, д 21',
    point: {
      lat: 55.603247,
      lon: 37.41105,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4956,
      },
      {
        code: 'per_3h',
        price: 3965,
      },
      {
        code: 'sum',
        price: 4956,
      },
    ],
  },
  {
    id: 4249,
    fias: 'г Москва, поселение Сосенское, ул Малое Понизовье, д 2',
    point: {
      lat: 55.60402,
      lon: 37.41476,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3540,
      },
      {
        code: 'per_3h',
        price: 2832,
      },
      {
        code: 'sum',
        price: 3540,
      },
    ],
  },
  {
    id: 4250,
    fias: 'г Москва, поселение Московский, ул Саларьевская, д 14 к 3',
    point: {
      lat: 55.618364,
      lon: 37.409612,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4366,
      },
      {
        code: 'per_3h',
        price: 3493,
      },
      {
        code: 'sum',
        price: 4366,
      },
    ],
  },
  {
    id: 4251,
    fias: 'г Москва, поселение Московский, ул Саларьевская, д 13 к 1',
    point: {
      lat: 55.614081521047865,
      lon: 37.412307711639365,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5900,
      },
      {
        code: 'per_3h',
        price: 4720,
      },
      {
        code: 'sum',
        price: 5900,
      },
    ],
  },
  {
    id: 4253,
    fias: 'г Москва, поселение Московский, ул Саларьевская, д 10 к 1',
    point: {
      lat: 55.619192608090124,
      lon: 37.41434972363055,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4484,
      },
      {
        code: 'per_3h',
        price: 3587,
      },
      {
        code: 'sum',
        price: 4484,
      },
    ],
  },
  {
    id: 4254,
    fias: 'г Москва, поселение Сосенское, ул Малое Понизовье, д 10',
    point: {
      lat: 55.60137746037319,
      lon: 37.41136745767205,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4484,
      },
      {
        code: 'per_3h',
        price: 3587,
      },
      {
        code: 'sum',
        price: 4484,
      },
    ],
  },
  {
    id: 4255,
    fias: 'г Москва, поселение Московский, ул Саларьевская, д 10 к 1',
    point: {
      lat: 55.61884653147332,
      lon: 37.414414096646915,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3894,
      },
      {
        code: 'per_3h',
        price: 3115,
      },
      {
        code: 'sum',
        price: 3894,
      },
    ],
  },
  {
    id: 4268,
    fias: 'г Москва, Светлый проезд, д 4 к 2',
    point: {
      lat: 55.812828,
      lon: 37.489931,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5750,
      },
      {
        code: 'per_3h',
        price: 4600,
      },
      {
        code: 'sum',
        price: 5750,
      },
    ],
  },
  {
    id: 4269,
    fias: 'г Москва, ул Серафимовича, д 2',
    point: {
      lat: 55.74445,
      lon: 37.613072,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 14950,
      },
      {
        code: 'per_3h',
        price: 11960,
      },
      {
        code: 'sum',
        price: 14950,
      },
    ],
  },
  {
    id: 4270,
    fias: 'г Москва, Страстной б-р, д 4',
    point: {
      lat: 55.765412,
      lon: 37.607862,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6900,
      },
      {
        code: 'per_3h',
        price: 5520,
      },
      {
        code: 'sum',
        price: 6900,
      },
    ],
  },
  {
    id: 4271,
    fias: 'г Москва, ул Олонецкая, д 25',
    point: {
      lat: 55.857644,
      lon: 37.619612,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5175,
      },
      {
        code: 'per_3h',
        price: 4140,
      },
      {
        code: 'sum',
        price: 5635,
      },
    ],
  },
  {
    id: 4272,
    fias: 'г Москва, Зубовский б-р, д 29',
    point: {
      lat: 55.737238,
      lon: 37.588072,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 8050,
      },
      {
        code: 'per_3h',
        price: 6440,
      },
      {
        code: 'sum',
        price: 8050,
      },
    ],
  },
  {
    id: 4273,
    fias: 'г Москва, ул 1-я Тверская-Ямская, д 25 стр 2',
    point: {
      lat: 55.77544927973755,
      lon: 37.5856187786948,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 9200,
      },
      {
        code: 'per_3h',
        price: 7360,
      },
      {
        code: 'sum',
        price: 9200,
      },
    ],
  },
  {
    id: 4274,
    fias: 'г Москва, 1-й Красногвардейский проезд, д 22 стр 2',
    point: {
      lat: 55.75182007487836,
      lon: 37.535222313889065,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 13800,
      },
      {
        code: 'per_3h',
        price: 11040,
      },
      {
        code: 'sum',
        price: 13800,
      },
    ],
  },
  {
    id: 4275,
    fias: 'г Москва, ул Барклая, д 14',
    point: {
      lat: 55.745088,
      lon: 37.497369,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 9200,
      },
      {
        code: 'per_3h',
        price: 7360,
      },
      {
        code: 'sum',
        price: 9200,
      },
    ],
  },
  {
    id: 4276,
    fias: 'г Москва, ул Беговая, д 2',
    point: {
      lat: 55.774796,
      lon: 37.556316,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5750,
      },
      {
        code: 'per_3h',
        price: 4600,
      },
      {
        code: 'sum',
        price: 5750,
      },
    ],
  },
  {
    id: 4277,
    fias: 'г Москва, ул 1-я Тверская-Ямская, д 25 стр 2',
    point: {
      lat: 55.77530717105447,
      lon: 37.58583871983401,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 8050,
      },
      {
        code: 'per_3h',
        price: 6440,
      },
      {
        code: 'sum',
        price: 8050,
      },
    ],
  },
  {
    id: 4329,
    fias: 'г Москва, поселение Внуковское, ул Бориса Пастернака, д 14',
    point: {
      lat: 55.637718,
      lon: 37.315038,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4130,
      },
      {
        code: 'per_3h',
        price: 3304,
      },
      {
        code: 'sum',
        price: 4130,
      },
    ],
  },
  {
    id: 4330,
    fias: 'г Москва, поселение Внуковское, ул Бориса Пастернака, д 10',
    point: {
      lat: 55.637581,
      lon: 37.319772,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4130,
      },
      {
        code: 'per_3h',
        price: 3304,
      },
      {
        code: 'sum',
        price: 4130,
      },
    ],
  },
  {
    id: 4369,
    fias: 'г Москва, Старокирочный пер, д 6',
    point: {
      lat: 55.768188,
      lon: 37.682431,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4370,
      },
      {
        code: 'per_3h',
        price: 3496,
      },
      {
        code: 'sum',
        price: 4370,
      },
    ],
  },
  {
    id: 4371,
    fias: 'г Москва, ул Чоботовская, д 2 к 2',
    point: {
      lat: 55.64317725780925,
      lon: 37.35925494047538,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5953,
      },
      {
        code: 'per_3h',
        price: 4762,
      },
      {
        code: 'sum',
        price: 5953,
      },
    ],
  },
  {
    id: 4377,
    fias: 'г Москва, Гостиничный проезд, д 8 к 1',
    point: {
      lat: 55.8455301970103,
      lon: 37.57617245767211,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3450,
      },
      {
        code: 'per_3h',
        price: 2760,
      },
      {
        code: 'sum',
        price: 3450,
      },
    ],
  },
  {
    id: 4473,
    fias: 'г Москва, ул Люблинская, д 80 к 7',
    point: {
      lat: 55.660648,
      lon: 37.729808,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4130,
      },
      {
        code: 'per_3h',
        price: 3304,
      },
      {
        code: 'sum',
        price: 4130,
      },
    ],
  },
  {
    id: 4474,
    fias: 'г Москва, ул Люблинская, д 76 к 5',
    point: {
      lat: 55.663481,
      lon: 37.73041,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3776,
      },
      {
        code: 'per_3h',
        price: 3021,
      },
      {
        code: 'sum',
        price: 3776,
      },
    ],
  },
  {
    id: 4475,
    fias: 'г Москва, ул Люблинская, д 76 к 2',
    point: {
      lat: 55.66384492561727,
      lon: 37.73286396693418,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4720,
      },
      {
        code: 'per_3h',
        price: 3776,
      },
      {
        code: 'sum',
        price: 4720,
      },
    ],
  },
  {
    id: 4476,
    fias: 'г Москва, ул Люблинская, д 76 к 2',
    point: {
      lat: 55.663875248334385,
      lon: 37.73262793254087,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5310,
      },
      {
        code: 'per_3h',
        price: 4248,
      },
      {
        code: 'sum',
        price: 5310,
      },
    ],
  },
  {
    id: 4477,
    fias: 'г Москва, ул Люблинская, д 78 к 3',
    point: {
      lat: 55.661796,
      lon: 37.729592,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4720,
      },
      {
        code: 'per_3h',
        price: 3776,
      },
      {
        code: 'sum',
        price: 4720,
      },
    ],
  },
  {
    id: 4478,
    fias: 'г Москва, ул Люблинская, д 76 к 2',
    point: {
      lat: 55.66377821555657,
      lon: 37.73242408465574,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4366,
      },
      {
        code: 'per_3h',
        price: 3493,
      },
      {
        code: 'sum',
        price: 4366,
      },
    ],
  },
  {
    id: 4491,
    fias: 'г Москва, б-р Маршала Рокоссовского, д 25',
    point: {
      lat: 55.814249,
      lon: 37.718857,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3304,
      },
      {
        code: 'per_3h',
        price: 2643,
      },
      {
        code: 'sum',
        price: 3304,
      },
    ],
  },
  {
    id: 4543,
    fias: 'Московская обл, г Красногорск, рп Нахабино, ул Покровская, д 18',
    point: {
      lat: 55.856578,
      lon: 37.183129,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2843,
      },
      {
        code: 'per_3h',
        price: 2274,
      },
      {
        code: 'sum',
        price: 2925,
      },
    ],
  },
  {
    id: 4544,
    fias: 'Московская обл, г Красногорск, рп Нахабино, ул Покровская, д 3 к 4',
    point: {
      lat: 55.85626028371358,
      lon: 37.18569944425524,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2925,
      },
      {
        code: 'per_3h',
        price: 2340,
      },
      {
        code: 'sum',
        price: 2983,
      },
    ],
  },
  {
    id: 4545,
    fias: 'Московская обл, г Красногорск, рп Нахабино, ул Покровская, д 3 к 4',
    point: {
      lat: 55.85631761207833,
      lon: 37.18582282586992,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3077,
      },
      {
        code: 'per_3h',
        price: 2462,
      },
      {
        code: 'sum',
        price: 3217,
      },
    ],
  },
  {
    id: 4546,
    fias: 'Московская обл, г Красногорск, рп Нахабино, ул Покровская, д 6',
    point: {
      lat: 55.854997,
      lon: 37.182931,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3334,
      },
      {
        code: 'per_3h',
        price: 2667,
      },
      {
        code: 'sum',
        price: 3334,
      },
    ],
  },
  {
    id: 4547,
    fias: 'Московская обл, г Красногорск, рп Нахабино, ул Покровская, д 3 к 4',
    point: {
      lat: 55.85629347382984,
      lon: 37.1854419521898,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2913,
      },
      {
        code: 'per_3h',
        price: 2330,
      },
      {
        code: 'sum',
        price: 2808,
      },
    ],
  },
  {
    id: 4548,
    fias: 'Московская обл, г Красногорск, рп Нахабино, ул Покровская, д 5 к 5',
    point: {
      lat: 55.85527,
      lon: 37.184809,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2925,
      },
      {
        code: 'per_3h',
        price: 2340,
      },
      {
        code: 'sum',
        price: 2925,
      },
    ],
  },
  {
    id: 4549,
    fias: 'Московская обл, г Красногорск, рп Нахабино, ул Покровская, д 7 к 1',
    point: {
      lat: 55.854658,
      lon: 37.183875,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3100,
      },
      {
        code: 'per_3h',
        price: 2480,
      },
      {
        code: 'sum',
        price: 3100,
      },
    ],
  },
  {
    id: 4550,
    fias: 'Московская обл, г Красногорск, рп Нахабино, ул Покровская, д 3 к 4',
    point: {
      lat: 55.85638700945883,
      lon: 37.185420494517686,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2808,
      },
      {
        code: 'per_3h',
        price: 2246,
      },
      {
        code: 'sum',
        price: 2808,
      },
    ],
  },
  {
    id: 4582,
    fias: 'г Москва, Шелепихинская наб, д 34 к 4',
    point: {
      lat: 55.76420222946512,
      lon: 37.5128569232788,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4944,
      },
      {
        code: 'per_3h',
        price: 3955,
      },
      {
        code: 'sum',
        price: 4944,
      },
    ],
  },
  {
    id: 4583,
    fias: 'г Москва, ул Викторенко, д 9кв',
    point: {
      lat: 55.7953305409901,
      lon: 37.52792195288576,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5770,
      },
      {
        code: 'per_3h',
        price: 4616,
      },
      {
        code: 'sum',
        price: 5770,
      },
    ],
  },
  {
    id: 4584,
    fias: 'г Москва, ул Викторенко, д 9кв',
    point: {
      lat: 55.79548466443568,
      lon: 37.528147258443,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5770,
      },
      {
        code: 'per_3h',
        price: 4616,
      },
      {
        code: 'sum',
        price: 5770,
      },
    ],
  },
  {
    id: 4585,
    fias: 'г Москва, Шелепихинская наб, д 34 к 4',
    point: {
      lat: 55.764069153011995,
      lon: 37.51315733068848,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 7918,
      },
      {
        code: 'per_3h',
        price: 6334,
      },
      {
        code: 'sum',
        price: 7918,
      },
    ],
  },
  {
    id: 4586,
    fias: 'г Москва, ул Барклая, д 17',
    point: {
      lat: 55.746036,
      lon: 37.494782,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4944,
      },
      {
        code: 'per_3h',
        price: 3955,
      },
      {
        code: 'sum',
        price: 4944,
      },
    ],
  },
  {
    id: 4587,
    fias: 'г Москва, Причальный проезд, д 8 к 1',
    point: {
      lat: 55.76070580080784,
      lon: 37.517716591262754,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3882,
      },
      {
        code: 'per_3h',
        price: 3106,
      },
      {
        code: 'sum',
        price: 3882,
      },
    ],
  },
  {
    id: 4588,
    fias: 'г Москва, Причальный проезд, д 8 к 1',
    point: {
      lat: 55.76068160294411,
      lon: 37.51799554100028,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3882,
      },
      {
        code: 'per_3h',
        price: 3106,
      },
      {
        code: 'sum',
        price: 3882,
      },
    ],
  },
  {
    id: 4589,
    fias: 'г Москва, Причальный проезд, д 8 к 1',
    point: {
      lat: 55.76052431646228,
      lon: 37.51808137168878,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4472,
      },
      {
        code: 'per_3h',
        price: 3578,
      },
      {
        code: 'sum',
        price: 4472,
      },
    ],
  },
  {
    id: 4590,
    fias: 'г Москва, Причальный проезд, д 8 к 1',
    point: {
      lat: 55.76055153916818,
      lon: 37.51832813491815,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3764,
      },
      {
        code: 'per_3h',
        price: 3011,
      },
      {
        code: 'sum',
        price: 3764,
      },
    ],
  },
  {
    id: 4591,
    fias: 'г Москва, Причальный проезд, д 8 к 1',
    point: {
      lat: 55.76041845020232,
      lon: 37.518446152114805,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4602,
      },
      {
        code: 'per_3h',
        price: 3682,
      },
      {
        code: 'sum',
        price: 4602,
      },
    ],
  },
  {
    id: 4592,
    fias: 'г Москва, Причальный проезд, д 8 к 1',
    point: {
      lat: 55.76053558620016,
      lon: 37.51874732143975,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5782,
      },
      {
        code: 'per_3h',
        price: 4626,
      },
      {
        code: 'sum',
        price: 5782,
      },
    ],
  },
  {
    id: 4593,
    fias: 'г Москва, ул Большая Филёвская, д 4',
    point: {
      lat: 55.75362512038704,
      lon: 37.51315620168914,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5298,
      },
      {
        code: 'per_3h',
        price: 4238,
      },
      {
        code: 'sum',
        price: 5298,
      },
    ],
  },
  {
    id: 4594,
    fias: 'г Москва, Шмитовский проезд, д 39 к 2',
    point: {
      lat: 55.753643346695526,
      lon: 37.524633354490916,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5298,
      },
      {
        code: 'per_3h',
        price: 4238,
      },
      {
        code: 'sum',
        price: 5298,
      },
    ],
  },
  {
    id: 4595,
    fias: 'г Москва, Шмитовский проезд, д 39 к 2',
    point: {
      lat: 55.75367965006424,
      lon: 37.524826473539996,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5298,
      },
      {
        code: 'per_3h',
        price: 4238,
      },
      {
        code: 'sum',
        price: 5298,
      },
    ],
  },
  {
    id: 4596,
    fias: 'г Москва, Шмитовский проезд, д 39 к 2',
    point: {
      lat: 55.75374015560336,
      lon: 37.52475137168757,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6124,
      },
      {
        code: 'per_3h',
        price: 4899,
      },
      {
        code: 'sum',
        price: 6124,
      },
    ],
  },
  {
    id: 4597,
    fias: 'г Москва, Шмитовский проезд, д 39 к 2',
    point: {
      lat: 55.753818812663305,
      lon: 37.524633354490916,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6124,
      },
      {
        code: 'per_3h',
        price: 4899,
      },
      {
        code: 'sum',
        price: 6124,
      },
    ],
  },
  {
    id: 4598,
    fias: 'г Москва, Шмитовский проезд, д 39 к 2',
    point: {
      lat: 55.75384301480355,
      lon: 37.5248479312121,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6596,
      },
      {
        code: 'per_3h',
        price: 5277,
      },
      {
        code: 'sum',
        price: 6596,
      },
    ],
  },
  {
    id: 4599,
    fias: 'г Москва, Шмитовский проезд, д 39 к 2',
    point: {
      lat: 55.753951924248035,
      lon: 37.524762100523624,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6242,
      },
      {
        code: 'per_3h',
        price: 4994,
      },
      {
        code: 'sum',
        price: 6242,
      },
    ],
  },
  {
    id: 4600,
    fias: 'г Москва, Шмитовский проезд, д 39 к 2',
    point: {
      lat: 55.754000328347544,
      lon: 37.524633354490916,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6478,
      },
      {
        code: 'per_3h',
        price: 5182,
      },
      {
        code: 'sum',
        price: 6478,
      },
    ],
  },
  {
    id: 4601,
    fias: 'г Москва, Шмитовский проезд, д 39 к 2',
    point: {
      lat: 55.754000328347544,
      lon: 37.5248479312121,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6124,
      },
      {
        code: 'per_3h',
        price: 4899,
      },
      {
        code: 'sum',
        price: 6124,
      },
    ],
  },
  {
    id: 4602,
    fias: 'г Москва, Ходынский б-р, д 20А',
    point: {
      lat: 55.790988764399195,
      lon: 37.52316277267814,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5298,
      },
      {
        code: 'per_3h',
        price: 4238,
      },
      {
        code: 'sum',
        price: 5298,
      },
    ],
  },
  {
    id: 4603,
    fias: 'г Москва, 1-й Красногвардейский проезд, д 22 стр 2, помещ 557',
    point: {
      lat: 55.75145347474722,
      lon: 37.53517575396724,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 20060,
      },
      {
        code: 'per_3h',
        price: 16048,
      },
      {
        code: 'sum',
        price: 20060,
      },
    ],
  },
  {
    id: 4610,
    fias: 'г Москва, ул Люблинская, д 76 к 2',
    point: {
      lat: 55.66356595551277,
      lon: 37.73248845767211,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5074,
      },
      {
        code: 'per_3h',
        price: 4059,
      },
      {
        code: 'sum',
        price: 5074,
      },
    ],
  },
  {
    id: 4611,
    fias: 'г Москва, ул Люблинская, д 76 к 2',
    point: {
      lat: 55.66335975893465,
      lon: 37.73253137301634,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5900,
      },
      {
        code: 'per_3h',
        price: 4720,
      },
      {
        code: 'sum',
        price: 5900,
      },
    ],
  },
  {
    id: 4612,
    fias: 'г Москва, ул Люблинская, д 76 к 2',
    point: {
      lat: 55.663202078462284,
      lon: 37.73253137301634,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5074,
      },
      {
        code: 'per_3h',
        price: 4059,
      },
      {
        code: 'sum',
        price: 5074,
      },
    ],
  },
  {
    id: 4613,
    fias: 'г Москва, ул Люблинская, д 80 к 6',
    point: {
      lat: 55.660551,
      lon: 37.730706,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4366,
      },
      {
        code: 'per_3h',
        price: 3493,
      },
      {
        code: 'sum',
        price: 4366,
      },
    ],
  },
  {
    id: 4677,
    fias: 'г Москва, Маёвки Первой аллея, д 15 стр 1',
    point: {
      lat: 55.72498454629348,
      lon: 37.79867884788512,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3450,
      },
      {
        code: 'per_3h',
        price: 2760,
      },
      {
        code: 'sum',
        price: 3450,
      },
    ],
  },
  {
    id: 4678,
    fias: 'г Москва, ул Большая Почтовая, д 18/20 стр 15',
    point: {
      lat: 55.77401185520648,
      lon: 37.69169765170796,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4600,
      },
      {
        code: 'per_3h',
        price: 3680,
      },
      {
        code: 'sum',
        price: 4600,
      },
    ],
  },
  {
    id: 4680,
    fias: 'г Москва, поселение Сосенское, ул Малое Понизовье, д 10',
    point: {
      lat: 55.601614355923935,
      lon: 37.41077737168879,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4600,
      },
      {
        code: 'per_3h',
        price: 3680,
      },
      {
        code: 'sum',
        price: 2875,
      },
    ],
  },
  {
    id: 4681,
    fias: 'г Москва, поселение Сосенское, ул Малое Понизовье, д 10',
    point: {
      lat: 55.601656875486086,
      lon: 37.41188244180291,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4600,
      },
      {
        code: 'per_3h',
        price: 3680,
      },
      {
        code: 'sum',
        price: 4600,
      },
    ],
  },
  {
    id: 4690,
    fias: 'г Москва, поселение Десеновское, ул Яворки, д 1 к 6',
    point: {
      lat: 55.509158184622216,
      lon: 37.34038489814753,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2596,
      },
      {
        code: 'per_3h',
        price: 2077,
      },
      {
        code: 'sum',
        price: 2596,
      },
    ],
  },
  {
    id: 4693,
    fias: 'г Москва, ул Гурьянова, д 2 к 3',
    point: {
      lat: 55.694824,
      lon: 37.720376,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3304,
      },
      {
        code: 'per_3h',
        price: 2643,
      },
      {
        code: 'sum',
        price: 3304,
      },
    ],
  },
  {
    id: 4694,
    fias: 'г Москва, поселение Десеновское, ул Яворки, д 1 к 5',
    point: {
      lat: 55.508835,
      lon: 37.341565,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2478,
      },
      {
        code: 'per_3h',
        price: 1982,
      },
      {
        code: 'sum',
        price: 2478,
      },
    ],
  },
  {
    id: 4695,
    fias: 'г Москва, поселение Десеновское, ул Яворки, д 1 к 6',
    point: {
      lat: 55.508792867149246,
      lon: 37.340492186508136,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2478,
      },
      {
        code: 'per_3h',
        price: 1982,
      },
      {
        code: 'sum',
        price: 2478,
      },
    ],
  },
  {
    id: 4696,
    fias: 'г Москва, ул Кастанаевская, д 43 к 4',
    point: {
      lat: 55.732058,
      lon: 37.467131,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3540,
      },
      {
        code: 'per_3h',
        price: 2832,
      },
      {
        code: 'sum',
        price: 3540,
      },
    ],
  },
  {
    id: 4699,
    fias: 'г Москва, поселение Десеновское, ул 1-я Нововатутинская, д 3',
    point: {
      lat: 55.516486,
      lon: 37.355156,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2832,
      },
      {
        code: 'per_3h',
        price: 2266,
      },
      {
        code: 'sum',
        price: 2832,
      },
    ],
  },
  {
    id: 4701,
    fias: 'Московская обл, г Домодедово, мкр Авиационный, пр-кт академика Туполева, д 12',
    point: {
      lat: 55.413944,
      lon: 37.832225,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3068,
      },
      {
        code: 'per_3h',
        price: 2454,
      },
      {
        code: 'sum',
        price: 3068,
      },
    ],
  },
  {
    id: 4702,
    fias: 'Московская обл, г Химки, мкр Новогорск, тер ДНТ Нагорье-12',
    point: {
      lat: 55.892178,
      lon: 37.350288,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2714,
      },
      {
        code: 'per_3h',
        price: 2171,
      },
      {
        code: 'sum',
        price: 2714,
      },
    ],
  },
  {
    id: 4703,
    fias: 'г Москва, ул Ферсмана, д 5 к 1',
    point: {
      lat: 55.694566,
      lon: 37.572737,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4130,
      },
      {
        code: 'per_3h',
        price: 3304,
      },
      {
        code: 'sum',
        price: 4130,
      },
    ],
  },
  {
    id: 4705,
    fias: 'г Москва, Холодильный пер, д 4',
    point: {
      lat: 55.70935999085104,
      lon: 37.624335291167355,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4838,
      },
      {
        code: 'per_3h',
        price: 3870,
      },
      {
        code: 'sum',
        price: 4838,
      },
    ],
  },
  {
    id: 4707,
    fias: 'г Москва, Холодильный пер, д 4',
    point: {
      lat: 55.709426622864555,
      lon: 37.624185087462514,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4838,
      },
      {
        code: 'per_3h',
        price: 3870,
      },
      {
        code: 'sum',
        price: 4838,
      },
    ],
  },
  {
    id: 4710,
    fias: 'г Москва, ул Михневская, д 8',
    point: {
      lat: 55.579694,
      lon: 37.671094,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3304,
      },
      {
        code: 'per_3h',
        price: 2643,
      },
      {
        code: 'sum',
        price: 3304,
      },
    ],
  },
  {
    id: 4711,
    fias: 'г Москва, Булатниковский проезд, д 2В к 2',
    point: {
      lat: 55.595786,
      lon: 37.646777,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2714,
      },
      {
        code: 'per_3h',
        price: 2171,
      },
      {
        code: 'sum',
        price: 2714,
      },
    ],
  },
  {
    id: 4712,
    fias: 'г Москва, ул Элеваторная, д 8',
    point: {
      lat: 55.601116,
      lon: 37.658482,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2596,
      },
      {
        code: 'per_3h',
        price: 2077,
      },
      {
        code: 'sum',
        price: 2596,
      },
    ],
  },
  {
    id: 4713,
    fias: 'г Москва, ул Фомичёвой, д 8 к 2',
    point: {
      lat: 55.859564,
      lon: 37.443721,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3186,
      },
      {
        code: 'per_3h',
        price: 2549,
      },
      {
        code: 'sum',
        price: 3186,
      },
    ],
  },
  {
    id: 4714,
    fias: 'г Москва, ул Тарусская, д 4',
    point: {
      lat: 55.611643,
      lon: 37.533688,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3304,
      },
      {
        code: 'per_3h',
        price: 2643,
      },
      {
        code: 'sum',
        price: 3304,
      },
    ],
  },
  {
    id: 4715,
    fias: 'г Москва, Гурьевский проезд, д 17 к 1',
    point: {
      lat: 55.605805,
      lon: 37.750254,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2596,
      },
      {
        code: 'per_3h',
        price: 2077,
      },
      {
        code: 'sum',
        price: 2596,
      },
    ],
  },
  {
    id: 4716,
    fias: 'г Москва, ул Бирюлёвская, д 58 к 3',
    point: {
      lat: 55.58064,
      lon: 37.668076,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3540,
      },
      {
        code: 'per_3h',
        price: 2832,
      },
      {
        code: 'sum',
        price: 3540,
      },
    ],
  },
  {
    id: 4717,
    fias: 'г Москва, Волжский б-р, д 5 к 1',
    point: {
      lat: 55.717705,
      lon: 37.745016,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4366,
      },
      {
        code: 'per_3h',
        price: 3493,
      },
      {
        code: 'sum',
        price: 4366,
      },
    ],
  },
  {
    id: 4719,
    fias: 'г Москва, Михневский проезд, д 8 к 1',
    point: {
      lat: 55.57547,
      lon: 37.669046,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3540,
      },
      {
        code: 'per_3h',
        price: 2832,
      },
      {
        code: 'sum',
        price: 3540,
      },
    ],
  },
  {
    id: 4722,
    fias: 'г Москва, Загородное шоссе, д 5 к 3',
    point: {
      lat: 55.695464,
      lon: 37.61424,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3304,
      },
      {
        code: 'per_3h',
        price: 2643,
      },
      {
        code: 'sum',
        price: 3304,
      },
    ],
  },
  {
    id: 4723,
    fias: 'г Москва, ул Ясеневая, д 12 к 5',
    point: {
      lat: 55.60234740168182,
      lon: 37.734277330688464,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4484,
      },
      {
        code: 'per_3h',
        price: 3587,
      },
      {
        code: 'sum',
        price: 4484,
      },
    ],
  },
  {
    id: 4724,
    fias: 'г Москва, Михневский проезд, д 6',
    point: {
      lat: 55.576666,
      lon: 37.668246,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2832,
      },
      {
        code: 'per_3h',
        price: 2266,
      },
      {
        code: 'sum',
        price: 2832,
      },
    ],
  },
  {
    id: 4726,
    fias: 'Московская обл, г Домодедово, мкр Центральный, ул Рабочая, д 44',
    point: {
      lat: 55.425609,
      lon: 37.763423,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2832,
      },
      {
        code: 'per_3h',
        price: 2266,
      },
      {
        code: 'sum',
        price: 2832,
      },
    ],
  },
  {
    id: 4727,
    fias: 'г Москва, ул Медиков, д 12',
    point: {
      lat: 55.633343,
      lon: 37.676313,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2832,
      },
      {
        code: 'per_3h',
        price: 2266,
      },
      {
        code: 'sum',
        price: 2832,
      },
    ],
  },
  {
    id: 4728,
    fias: 'г Москва, ул Загорьевская, д 25',
    point: {
      lat: 55.583342,
      lon: 37.694774,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2596,
      },
      {
        code: 'per_3h',
        price: 2077,
      },
      {
        code: 'sum',
        price: 2596,
      },
    ],
  },
  {
    id: 4729,
    fias: 'г Москва, Булатниковский проезд, д 6 к 1',
    point: {
      lat: 55.593873,
      lon: 37.651071,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2832,
      },
      {
        code: 'per_3h',
        price: 2266,
      },
      {
        code: 'sum',
        price: 2832,
      },
    ],
  },
  {
    id: 4730,
    fias: 'г Москва, ул Бирюлёвская, д 1 к 3',
    point: {
      lat: 55.602057,
      lon: 37.668866,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2950,
      },
      {
        code: 'per_3h',
        price: 2360,
      },
      {
        code: 'sum',
        price: 2950,
      },
    ],
  },
  {
    id: 4733,
    fias: 'г Москва, ул 6-я Радиальная, д 5 к 2',
    point: {
      lat: 55.604605,
      lon: 37.65876,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3894,
      },
      {
        code: 'per_3h',
        price: 3115,
      },
      {
        code: 'sum',
        price: 3894,
      },
    ],
  },
  {
    id: 4735,
    fias: 'г Москва, ул Домодедовская, д 6 к 2',
    point: {
      lat: 55.614953,
      lon: 37.703856,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3068,
      },
      {
        code: 'per_3h',
        price: 2454,
      },
      {
        code: 'sum',
        price: 3068,
      },
    ],
  },
  {
    id: 4736,
    fias: 'г Москва, ул Каспийская, д 24 к 2',
    point: {
      lat: 55.625196,
      lon: 37.674202,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2714,
      },
      {
        code: 'per_3h',
        price: 2171,
      },
      {
        code: 'sum',
        price: 2714,
      },
    ],
  },
  {
    id: 4737,
    fias: 'г Москва, ул Севанская, д 4',
    point: {
      lat: 55.620667,
      lon: 37.664941,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3186,
      },
      {
        code: 'per_3h',
        price: 2549,
      },
      {
        code: 'sum',
        price: 3186,
      },
    ],
  },
  {
    id: 4738,
    fias: 'г Москва, ул Лебедянская, д 17 к 3',
    point: {
      lat: 55.588633,
      lon: 37.671274,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3776,
      },
      {
        code: 'per_3h',
        price: 3021,
      },
      {
        code: 'sum',
        price: 3776,
      },
    ],
  },
  {
    id: 4740,
    fias: 'г Москва, ул Севанская, д 8',
    point: {
      lat: 55.622207,
      lon: 37.661859,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3894,
      },
      {
        code: 'per_3h',
        price: 3115,
      },
      {
        code: 'sum',
        price: 3894,
      },
    ],
  },
  {
    id: 4789,
    fias: 'г Москва, Алтуфьевское шоссе, д 2 к 1',
    point: {
      lat: 55.848969604594906,
      lon: 37.58738324603266,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2710,
      },
      {
        code: 'per_3h',
        price: 2168,
      },
      {
        code: 'sum',
        price: 2710,
      },
    ],
  },
  {
    id: 4791,
    fias: 'г Москва, ул Нижегородская, д 3',
    point: {
      lat: 55.739554,
      lon: 37.676412,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3953,
      },
      {
        code: 'per_3h',
        price: 3162,
      },
      {
        code: 'sum',
        price: 3953,
      },
    ],
  },
  {
    id: 4792,
    fias: 'г Москва, ул Беговая, д 28',
    point: {
      lat: 55.781469,
      lon: 37.561068,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5083,
      },
      {
        code: 'per_3h',
        price: 4066,
      },
      {
        code: 'sum',
        price: 5083,
      },
    ],
  },
  {
    id: 4793,
    fias: 'г Москва, пр-кт Вернадского, д 15',
    point: {
      lat: 55.68634,
      lon: 37.524615,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3953,
      },
      {
        code: 'per_3h',
        price: 3162,
      },
      {
        code: 'sum',
        price: 3953,
      },
    ],
  },
  {
    id: 4798,
    fias: 'г Москва, проезд Донелайтиса, д 20 к 1',
    point: {
      lat: 55.842474,
      lon: 37.420904,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3577,
      },
      {
        code: 'per_3h',
        price: 2862,
      },
      {
        code: 'sum',
        price: 3577,
      },
    ],
  },
  {
    id: 4801,
    fias: 'г Москва, Кронштадтский б-р, д 6 к 4',
    point: {
      lat: 55.840735,
      lon: 37.494404,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3953,
      },
      {
        code: 'per_3h',
        price: 3162,
      },
      {
        code: 'sum',
        price: 3953,
      },
    ],
  },
  {
    id: 4802,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Новотушинская, д 4',
    point: {
      lat: 55.871087,
      lon: 37.401671,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2652,
      },
      {
        code: 'per_3h',
        price: 2122,
      },
      {
        code: 'sum',
        price: 2652,
      },
    ],
  },
  {
    id: 4804,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Новотушинская, д 4',
    point: {
      lat: 55.871087,
      lon: 37.401671,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2946,
      },
      {
        code: 'per_3h',
        price: 2357,
      },
      {
        code: 'sum',
        price: 2946,
      },
    ],
  },
  {
    id: 4805,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Новотушинская, д 6',
    point: {
      lat: 55.871455,
      lon: 37.404402,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4420,
      },
      {
        code: 'per_3h',
        price: 3536,
      },
      {
        code: 'sum',
        price: 4420,
      },
    ],
  },
  {
    id: 4806,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Новотушинская, д 2',
    point: {
      lat: 55.868092,
      lon: 37.397072,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2554,
      },
      {
        code: 'per_3h',
        price: 2043,
      },
      {
        code: 'sum',
        price: 2554,
      },
    ],
  },
  {
    id: 4811,
    fias: 'Московская обл, г Красногорск, деревня Путилково, Спасо-Тушинский б-р, д 3',
    point: {
      lat: 55.87292,
      lon: 37.398482,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2749,
      },
      {
        code: 'per_3h',
        price: 2199,
      },
      {
        code: 'sum',
        price: 2749,
      },
    ],
  },
  {
    id: 4813,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Сходненская, д 29',
    point: {
      lat: 55.872466,
      lon: 37.391583,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2456,
      },
      {
        code: 'per_3h',
        price: 1965,
      },
      {
        code: 'sum',
        price: 2456,
      },
    ],
  },
  {
    id: 4818,
    fias: 'Московская обл, г Красногорск, деревня Путилково, Спасо-Тушинский б-р, д 5',
    point: {
      lat: 55.874026,
      lon: 37.396847,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2357,
      },
      {
        code: 'per_3h',
        price: 1886,
      },
      {
        code: 'sum',
        price: 2357,
      },
    ],
  },
  {
    id: 4821,
    fias: 'г Москва, ул Митинская, д 28 к 4',
    point: {
      lat: 55.845865,
      lon: 37.372503,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3565,
      },
      {
        code: 'per_3h',
        price: 2852,
      },
      {
        code: 'sum',
        price: 3565,
      },
    ],
  },
  {
    id: 4822,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Новотушинская, д 6',
    point: {
      lat: 55.871455,
      lon: 37.404402,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3438,
      },
      {
        code: 'per_3h',
        price: 2750,
      },
      {
        code: 'sum',
        price: 3438,
      },
    ],
  },
  {
    id: 4826,
    fias: 'г Москва, Хорошёвское шоссе, д 12 к 1',
    point: {
      lat: 55.7750726095188,
      lon: 37.55218812520175,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4414,
      },
      {
        code: 'per_3h',
        price: 3531,
      },
      {
        code: 'sum',
        price: 4414,
      },
    ],
  },
  {
    id: 4827,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Новотушинская, д 4',
    point: {
      lat: 55.871087,
      lon: 37.401671,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2946,
      },
      {
        code: 'per_3h',
        price: 2357,
      },
      {
        code: 'sum',
        price: 2946,
      },
    ],
  },
  {
    id: 4829,
    fias: 'Московская обл, г Красногорск, деревня Путилково, Спасо-Тушинский б-р, д 2',
    point: {
      lat: 55.87395,
      lon: 37.399946,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2946,
      },
      {
        code: 'per_3h',
        price: 2357,
      },
      {
        code: 'sum',
        price: 2946,
      },
    ],
  },
  {
    id: 4831,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Сходненская, д 27',
    point: {
      lat: 55.873304,
      lon: 37.392203,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2456,
      },
      {
        code: 'per_3h',
        price: 1965,
      },
      {
        code: 'sum',
        price: 2456,
      },
    ],
  },
  {
    id: 4832,
    fias: 'г Москва, Ленинградский пр-кт, д 33А',
    point: {
      lat: 55.788454,
      lon: 37.557583,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3161,
      },
      {
        code: 'per_3h',
        price: 2529,
      },
      {
        code: 'sum',
        price: 3161,
      },
    ],
  },
  {
    id: 4833,
    fias: 'г Москва, ул Черняховского, д 3',
    point: {
      lat: 55.80205688074219,
      lon: 37.531111762565565,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5083,
      },
      {
        code: 'per_3h',
        price: 4066,
      },
      {
        code: 'sum',
        price: 5083,
      },
    ],
  },
  {
    id: 4834,
    fias: 'г Москва, Украинский б-р, д 6',
    point: {
      lat: 55.747642,
      lon: 37.564994,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6775,
      },
      {
        code: 'per_3h',
        price: 5420,
      },
      {
        code: 'sum',
        price: 6775,
      },
    ],
  },
  {
    id: 4836,
    fias: 'г Москва, ул Строителей, д 9',
    point: {
      lat: 55.685198,
      lon: 37.532583,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4004,
      },
      {
        code: 'per_3h',
        price: 3203,
      },
      {
        code: 'sum',
        price: 4004,
      },
    ],
  },
  {
    id: 4837,
    fias: 'г Москва, ул Новый Арбат, д 16',
    point: {
      lat: 55.75317756275368,
      lon: 37.591651830688406,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6775,
      },
      {
        code: 'per_3h',
        price: 5420,
      },
      {
        code: 'sum',
        price: 6775,
      },
    ],
  },
  {
    id: 4839,
    fias: 'г Москва, ул Марии Ульяновой, д 12',
    point: {
      lat: 55.681757,
      lon: 37.524857,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4517,
      },
      {
        code: 'per_3h',
        price: 3614,
      },
      {
        code: 'sum',
        price: 4517,
      },
    ],
  },
  {
    id: 4841,
    fias: 'г Москва, Ленинградский пр-кт, д 77 к 1',
    point: {
      lat: 55.804901,
      lon: 37.509289,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5031,
      },
      {
        code: 'per_3h',
        price: 4025,
      },
      {
        code: 'sum',
        price: 5031,
      },
    ],
  },
  {
    id: 4842,
    fias: 'г Москва, пр-кт Вернадского, д 61',
    point: {
      lat: 55.672433,
      lon: 37.501654,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4517,
      },
      {
        code: 'per_3h',
        price: 3614,
      },
      {
        code: 'sum',
        price: 4517,
      },
    ],
  },
  {
    id: 4843,
    fias: 'г Москва, Хорошёвское шоссе, д 12 к 1',
    point: {
      lat: 55.77525402586349,
      lon: 37.552048650332964,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5646,
      },
      {
        code: 'per_3h',
        price: 4517,
      },
      {
        code: 'sum',
        price: 5646,
      },
    ],
  },
  {
    id: 4848,
    fias: 'г Москва, ул Алабяна, д 3 к 3',
    point: {
      lat: 55.802786,
      lon: 37.510664,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3387,
      },
      {
        code: 'per_3h',
        price: 2710,
      },
      {
        code: 'sum',
        price: 3387,
      },
    ],
  },
  {
    id: 4849,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Сходненская, д 7',
    point: {
      lat: 55.876097,
      lon: 37.398824,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2946,
      },
      {
        code: 'per_3h',
        price: 2357,
      },
      {
        code: 'sum',
        price: 2946,
      },
    ],
  },
  {
    id: 4850,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Сходненская, д 10 к 2',
    point: {
      lat: 55.87287,
      lon: 37.39046,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3438,
      },
      {
        code: 'per_3h',
        price: 2750,
      },
      {
        code: 'sum',
        price: 3438,
      },
    ],
  },
  {
    id: 4851,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Сходненская, д 19',
    point: {
      lat: 55.876016,
      lon: 37.388143,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2456,
      },
      {
        code: 'per_3h',
        price: 1965,
      },
      {
        code: 'sum',
        price: 2456,
      },
    ],
  },
  {
    id: 4852,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Сходненская, д 17',
    point: {
      lat: 55.877016,
      lon: 37.389086,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2456,
      },
      {
        code: 'per_3h',
        price: 1965,
      },
      {
        code: 'sum',
        price: 2456,
      },
    ],
  },
  {
    id: 4853,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Сходненская, д 13',
    point: {
      lat: 55.876688,
      lon: 37.393973,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2259,
      },
      {
        code: 'per_3h',
        price: 1807,
      },
      {
        code: 'sum',
        price: 2259,
      },
    ],
  },
  {
    id: 4854,
    fias: 'Московская обл, г Химки, ул Ленинградская, д 16',
    point: {
      lat: 55.889021747967995,
      lon: 37.43737855026242,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 1987,
      },
      {
        code: 'per_3h',
        price: 1590,
      },
      {
        code: 'sum',
        price: 1987,
      },
    ],
  },
  {
    id: 4855,
    fias: 'г Москва, 1-й Хорошёвский проезд, д 10 к 1',
    point: {
      lat: 55.775748,
      lon: 37.546794,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3727,
      },
      {
        code: 'per_3h',
        price: 2982,
      },
      {
        code: 'sum',
        price: 3727,
      },
    ],
  },
  {
    id: 4856,
    fias: 'г Москва, Ленинский пр-кт, д 95 к 2',
    point: {
      lat: 55.6729,
      lon: 37.527651,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4004,
      },
      {
        code: 'per_3h',
        price: 3203,
      },
      {
        code: 'sum',
        price: 4004,
      },
    ],
  },
  {
    id: 4857,
    fias: 'г Москва, ул Коштоянца, д 41',
    point: {
      lat: 55.67559,
      lon: 37.487721,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3727,
      },
      {
        code: 'per_3h',
        price: 2982,
      },
      {
        code: 'sum',
        price: 3727,
      },
    ],
  },
  {
    id: 4858,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Новотушинская, д 6',
    point: {
      lat: 55.871455,
      lon: 37.404402,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2946,
      },
      {
        code: 'per_3h',
        price: 2357,
      },
      {
        code: 'sum',
        price: 2946,
      },
    ],
  },
  {
    id: 4859,
    fias: 'г Москва, ул Народного Ополчения, д 22 к 3',
    point: {
      lat: 55.779307,
      lon: 37.483517,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4261,
      },
      {
        code: 'per_3h',
        price: 3409,
      },
      {
        code: 'sum',
        price: 4261,
      },
    ],
  },
  {
    id: 4861,
    fias: 'г Москва, Ленинский пр-кт, д 52',
    point: {
      lat: 55.69898,
      lon: 37.563188,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4620,
      },
      {
        code: 'per_3h',
        price: 3696,
      },
      {
        code: 'sum',
        price: 4620,
      },
    ],
  },
  {
    id: 4862,
    fias: 'г Москва, ул Демьяна Бедного, д 17 к 1',
    point: {
      lat: 55.778198,
      lon: 37.48702,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3727,
      },
      {
        code: 'per_3h',
        price: 2982,
      },
      {
        code: 'sum',
        price: 3727,
      },
    ],
  },
  {
    id: 4863,
    fias: 'г Москва, ул Коштоянца, д 39',
    point: {
      lat: 55.67622,
      lon: 37.488062,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3953,
      },
      {
        code: 'per_3h',
        price: 3162,
      },
      {
        code: 'sum',
        price: 3953,
      },
    ],
  },
  {
    id: 4864,
    fias: 'г Москва, ул Большая Якиманка, д 32',
    point: {
      lat: 55.734714,
      lon: 37.612308,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3953,
      },
      {
        code: 'per_3h',
        price: 3162,
      },
      {
        code: 'sum',
        price: 3953,
      },
    ],
  },
  {
    id: 4865,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Сходненская, д 17',
    point: {
      lat: 55.877016,
      lon: 37.389086,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2456,
      },
      {
        code: 'per_3h',
        price: 1965,
      },
      {
        code: 'sum',
        price: 2456,
      },
    ],
  },
  {
    id: 4866,
    fias: 'г Москва, б-р Яна Райниса, д 37 к 1',
    point: {
      lat: 55.8491,
      lon: 37.415407,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3479,
      },
      {
        code: 'per_3h',
        price: 2783,
      },
      {
        code: 'sum',
        price: 3479,
      },
    ],
  },
  {
    id: 4868,
    fias: 'Московская обл, г Химки, ул Германа Титова, д 6',
    point: {
      lat: 55.917647,
      lon: 37.408552,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2484,
      },
      {
        code: 'per_3h',
        price: 1987,
      },
      {
        code: 'sum',
        price: 2484,
      },
    ],
  },
  {
    id: 4869,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Новотушинская, д 4',
    point: {
      lat: 55.871087,
      lon: 37.401671,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2946,
      },
      {
        code: 'per_3h',
        price: 2357,
      },
      {
        code: 'sum',
        price: 2946,
      },
    ],
  },
  {
    id: 4871,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Сходненская, д 19',
    point: {
      lat: 55.876016,
      lon: 37.388143,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2456,
      },
      {
        code: 'per_3h',
        price: 1965,
      },
      {
        code: 'sum',
        price: 2456,
      },
    ],
  },
  {
    id: 4872,
    fias: 'Московская обл, г Красногорск, деревня Путилково, Спасо-Тушинский б-р, д 7',
    point: {
      lat: 55.873698,
      lon: 37.394979,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2652,
      },
      {
        code: 'per_3h',
        price: 2122,
      },
      {
        code: 'sum',
        price: 2652,
      },
    ],
  },
  {
    id: 4873,
    fias: 'г Москва, пр-кт Вернадского, д 59А',
    point: {
      lat: 55.671864,
      lon: 37.499058,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3727,
      },
      {
        code: 'per_3h',
        price: 2982,
      },
      {
        code: 'sum',
        price: 3727,
      },
    ],
  },
  {
    id: 4875,
    fias: 'г Москва, Волоколамское шоссе, д 108',
    point: {
      lat: 55.826655,
      lon: 37.427372,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2484,
      },
      {
        code: 'per_3h',
        price: 1987,
      },
      {
        code: 'sum',
        price: 2484,
      },
    ],
  },
  {
    id: 4876,
    fias: 'г Москва, ул Беговая, д 26',
    point: {
      lat: 55.780886,
      lon: 37.560296,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5195,
      },
      {
        code: 'per_3h',
        price: 4156,
      },
      {
        code: 'sum',
        price: 5195,
      },
    ],
  },
  {
    id: 4880,
    fias: 'г Москва, Ломоносовский пр-кт, д 15',
    point: {
      lat: 55.68920040343919,
      lon: 37.541255857147206,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4414,
      },
      {
        code: 'per_3h',
        price: 3531,
      },
      {
        code: 'sum',
        price: 4414,
      },
    ],
  },
  {
    id: 4888,
    fias: 'Московская обл, г Химки, ул Молодежная, д 7 к 1',
    point: {
      lat: 55.881131,
      lon: 37.417931,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3132,
      },
      {
        code: 'per_3h',
        price: 2506,
      },
      {
        code: 'sum',
        price: 3132,
      },
    ],
  },
  {
    id: 4889,
    fias: 'Московская обл, г Химки, ул Германа Титова, д 3 к 2',
    point: {
      lat: 55.914721,
      lon: 37.409082,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2981,
      },
      {
        code: 'per_3h',
        price: 2385,
      },
      {
        code: 'sum',
        price: 2981,
      },
    ],
  },
  {
    id: 4890,
    fias: 'г Москва, ул Адмирала Макарова, д 6А',
    point: {
      lat: 55.83648013595926,
      lon: 37.49321778836056,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3387,
      },
      {
        code: 'per_3h',
        price: 2710,
      },
      {
        code: 'sum',
        price: 3387,
      },
    ],
  },
  {
    id: 4891,
    fias: 'г Москва, ул Адмирала Макарова, д 6А',
    point: {
      lat: 55.836655227524254,
      lon: 37.49312659325406,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3727,
      },
      {
        code: 'per_3h',
        price: 2982,
      },
      {
        code: 'sum',
        price: 3727,
      },
    ],
  },
  {
    id: 4892,
    fias: 'Московская обл, г Красногорск, деревня Путилково, д 24',
    point: {
      lat: 55.864652,
      lon: 37.395473,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3438,
      },
      {
        code: 'per_3h',
        price: 2750,
      },
      {
        code: 'sum',
        price: 3438,
      },
    ],
  },
  {
    id: 4893,
    fias: 'г Москва, ул Митинская, д 16',
    point: {
      lat: 55.842492399386174,
      lon: 37.37323848280331,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3240,
      },
      {
        code: 'per_3h',
        price: 2592,
      },
      {
        code: 'sum',
        price: 3240,
      },
    ],
  },
  {
    id: 4894,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Сходненская, д 8',
    point: {
      lat: 55.873996,
      lon: 37.389068,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2652,
      },
      {
        code: 'per_3h',
        price: 2122,
      },
      {
        code: 'sum',
        price: 2652,
      },
    ],
  },
  {
    id: 4895,
    fias: 'Московская обл, г Химки, ул Молодежная, д 7 к 1',
    point: {
      lat: 55.881131,
      lon: 37.417931,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4320,
      },
      {
        code: 'per_3h',
        price: 3456,
      },
      {
        code: 'sum',
        price: 4320,
      },
    ],
  },
  {
    id: 4896,
    fias: 'Московская обл, г Химки, ул Молодежная, д 7 к 1',
    point: {
      lat: 55.881131,
      lon: 37.417931,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3781,
      },
      {
        code: 'per_3h',
        price: 3025,
      },
      {
        code: 'sum',
        price: 3781,
      },
    ],
  },
  {
    id: 4899,
    fias: 'Московская обл, г Химки, ул Молодежная, д 7 к 1',
    point: {
      lat: 55.881131,
      lon: 37.417931,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3240,
      },
      {
        code: 'per_3h',
        price: 2592,
      },
      {
        code: 'sum',
        price: 3240,
      },
    ],
  },
  {
    id: 4900,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Просторная, д 9',
    point: {
      lat: 55.865803,
      lon: 37.386328,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2946,
      },
      {
        code: 'per_3h',
        price: 2357,
      },
      {
        code: 'sum',
        price: 2946,
      },
    ],
  },
  {
    id: 4901,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Сходненская, д 8',
    point: {
      lat: 55.873996,
      lon: 37.389068,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2652,
      },
      {
        code: 'per_3h',
        price: 2122,
      },
      {
        code: 'sum',
        price: 2652,
      },
    ],
  },
  {
    id: 4902,
    fias: 'г Москва, ул Новопесчаная, д 7',
    point: {
      lat: 55.800985,
      lon: 37.516988,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3953,
      },
      {
        code: 'per_3h',
        price: 3162,
      },
      {
        code: 'sum',
        price: 3953,
      },
    ],
  },
  {
    id: 4903,
    fias: 'Московская обл, г Химки, ул Германа Титова, д 5 к 2',
    point: {
      lat: 55.9158,
      lon: 37.406926,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3280,
      },
      {
        code: 'per_3h',
        price: 2624,
      },
      {
        code: 'sum',
        price: 3280,
      },
    ],
  },
  {
    id: 4905,
    fias: 'г Москва, Строгинский б-р, д 4',
    point: {
      lat: 55.80438,
      lon: 37.396704,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3240,
      },
      {
        code: 'per_3h',
        price: 2592,
      },
      {
        code: 'sum',
        price: 3240,
      },
    ],
  },
  {
    id: 4906,
    fias: 'г Москва, Алтуфьевское шоссе, д 2 к 1',
    point: {
      lat: 55.8489243367718,
      lon: 37.58716330489345,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2993,
      },
      {
        code: 'per_3h',
        price: 2394,
      },
      {
        code: 'sum',
        price: 2993,
      },
    ],
  },
  {
    id: 4907,
    fias: 'г Москва, Мичуринский пр-кт, д 13 к 3',
    point: {
      lat: 55.697209,
      lon: 37.512586,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3953,
      },
      {
        code: 'per_3h',
        price: 3162,
      },
      {
        code: 'sum',
        price: 3953,
      },
    ],
  },
  {
    id: 4908,
    fias: 'Московская обл, г Химки, ул Ленинградская, д 16',
    point: {
      lat: 55.88882880481099,
      lon: 37.43759312698363,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2000,
      },
      {
        code: 'per_3h',
        price: 1600,
      },
      {
        code: 'sum',
        price: 2000,
      },
    ],
  },
  {
    id: 4909,
    fias: 'Московская обл, г Химки, ул Ленинградская, д 16',
    point: {
      lat: 55.88864791972642,
      lon: 37.43782916137692,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2086,
      },
      {
        code: 'per_3h',
        price: 1669,
      },
      {
        code: 'sum',
        price: 2086,
      },
    ],
  },
  {
    id: 4910,
    fias: 'Московская обл, г Химки, ул Ленинградская, д 16',
    point: {
      lat: 55.88858762451009,
      lon: 37.43821539947508,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2186,
      },
      {
        code: 'per_3h',
        price: 1749,
      },
      {
        code: 'sum',
        price: 2186,
      },
    ],
  },
  {
    id: 4911,
    fias: 'г Москва, ул Митинская, д 16',
    point: {
      lat: 55.842365708013745,
      lon: 37.37352258401426,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3437,
      },
      {
        code: 'per_3h',
        price: 2750,
      },
      {
        code: 'sum',
        price: 3437,
      },
    ],
  },
  {
    id: 4912,
    fias: 'г Москва, Мичуринский пр-кт, д 38',
    point: {
      lat: 55.696392,
      lon: 37.494836,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3727,
      },
      {
        code: 'per_3h',
        price: 2982,
      },
      {
        code: 'sum',
        price: 3727,
      },
    ],
  },
  {
    id: 4914,
    fias: 'г Москва, Мичуринский пр-кт, д 13 к 1',
    point: {
      lat: 55.69794,
      lon: 37.512505,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3727,
      },
      {
        code: 'per_3h',
        price: 2982,
      },
      {
        code: 'sum',
        price: 3727,
      },
    ],
  },
  {
    id: 4916,
    fias: 'г Москва, ул Раменки, д 8 к 2',
    point: {
      lat: 55.692303,
      lon: 37.491143,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3839,
      },
      {
        code: 'per_3h',
        price: 3071,
      },
      {
        code: 'sum',
        price: 3839,
      },
    ],
  },
  {
    id: 4920,
    fias: 'г Москва, ул Большая Почтовая, д 18/20 стр 15',
    point: {
      lat: 55.77413885020776,
      lon: 37.6916708296178,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5750,
      },
      {
        code: 'per_3h',
        price: 4600,
      },
      {
        code: 'sum',
        price: 5750,
      },
    ],
  },
  {
    id: 4921,
    fias: 'г Москва, ул Большая Почтовая, д 18/20 стр 15',
    point: {
      lat: 55.77415396863263,
      lon: 37.691466981732674,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4600,
      },
      {
        code: 'per_3h',
        price: 3680,
      },
      {
        code: 'sum',
        price: 4600,
      },
    ],
  },
  {
    id: 4922,
    fias: 'г Москва, ул Большая Почтовая, д 18/20 стр 15',
    point: {
      lat: 55.77424467905807,
      lon: 37.69149916824085,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4600,
      },
      {
        code: 'per_3h',
        price: 3680,
      },
      {
        code: 'sum',
        price: 4600,
      },
    ],
  },
  {
    id: 4923,
    fias: 'г Москва, ул Большая Почтовая, д 18/20 стр 15',
    point: {
      lat: 55.774301968645666,
      lon: 37.691218755022845,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4025,
      },
      {
        code: 'per_3h',
        price: 3220,
      },
      {
        code: 'sum',
        price: 4025,
      },
    ],
  },
  {
    id: 4924,
    fias: 'г Москва, ул Большая Почтовая, д 18/20 стр 15',
    point: {
      lat: 55.774428962697655,
      lon: 37.69119729735074,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4600,
      },
      {
        code: 'per_3h',
        price: 3680,
      },
      {
        code: 'sum',
        price: 4600,
      },
    ],
  },
  {
    id: 4936,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Просторная, д 14',
    point: {
      lat: 55.86939,
      lon: 37.390505,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2950,
      },
      {
        code: 'per_3h',
        price: 2360,
      },
      {
        code: 'sum',
        price: 2950,
      },
    ],
  },
  {
    id: 4937,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Просторная, д 14',
    point: {
      lat: 55.86939,
      lon: 37.390505,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2950,
      },
      {
        code: 'per_3h',
        price: 2360,
      },
      {
        code: 'sum',
        price: 2950,
      },
    ],
  },
  {
    id: 4938,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Просторная, д 5',
    point: {
      lat: 55.865803,
      lon: 37.390478,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2950,
      },
      {
        code: 'per_3h',
        price: 2360,
      },
      {
        code: 'sum',
        price: 2950,
      },
    ],
  },
  {
    id: 4939,
    fias: 'Московская обл, Красногорск, ул Видная, д 1',
    point: {
      lat: 55.842509,
      lon: 37.345284,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3528,
      },
      {
        code: 'per_3h',
        price: 2822,
      },
      {
        code: 'sum',
        price: 3528,
      },
    ],
  },
  {
    id: 4947,
    fias: 'г Москва, ул Знаменская, д 19',
    point: {
      lat: 55.8027,
      lon: 37.716854,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5175,
      },
      {
        code: 'per_3h',
        price: 4140,
      },
      {
        code: 'sum',
        price: 5175,
      },
    ],
  },
  {
    id: 4948,
    fias: 'г Москва, Шелепихинская наб, д 42 к 2',
    point: {
      lat: 55.76757,
      lon: 37.500136,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4485,
      },
      {
        code: 'per_3h',
        price: 3588,
      },
      {
        code: 'sum',
        price: 4485,
      },
    ],
  },
  {
    id: 4954,
    fias: 'г Москва, ул Нижегородская, д 32 стр 3',
    point: {
      lat: 55.7370382284447,
      lon: 37.68991704166412,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4282,
      },
      {
        code: 'per_3h',
        price: 3426,
      },
      {
        code: 'sum',
        price: 4282,
      },
    ],
  },
  {
    id: 4955,
    fias: 'г Москва, ул Нижегородская, д 32 стр 3',
    point: {
      lat: 55.736974670309635,
      lon: 37.69065733135222,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4520,
      },
      {
        code: 'per_3h',
        price: 3616,
      },
      {
        code: 'sum',
        price: 4520,
      },
    ],
  },
  {
    id: 4956,
    fias: 'г Москва, 1-й Котляковский пер, д 2А к 1',
    point: {
      lat: 55.652227,
      lon: 37.628954,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 8590,
      },
      {
        code: 'per_3h',
        price: 6872,
      },
      {
        code: 'sum',
        price: 8590,
      },
    ],
  },
  {
    id: 4957,
    fias: 'г Москва, ул Нижегородская, д 32 стр 15',
    point: {
      lat: 55.73628237657568,
      lon: 37.69494414418022,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4520,
      },
      {
        code: 'per_3h',
        price: 3616,
      },
      {
        code: 'sum',
        price: 4520,
      },
    ],
  },
  {
    id: 4958,
    fias: 'г Москва, Волгоградский пр-кт, д 32/3 к 4',
    point: {
      lat: 55.720596,
      lon: 37.693579,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4838,
      },
      {
        code: 'per_3h',
        price: 3870,
      },
      {
        code: 'sum',
        price: 4838,
      },
    ],
  },
  {
    id: 4959,
    fias: 'г Москва, пр-д Невельского, д 3 к 1',
    point: {
      lat: 55.750808,
      lon: 37.698609,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5546,
      },
      {
        code: 'per_3h',
        price: 4437,
      },
      {
        code: 'sum',
        price: 5546,
      },
    ],
  },
  {
    id: 4964,
    fias: 'г Москва, ул Клары Цеткин, д 18 к 3',
    point: {
      lat: 55.821013349386085,
      lon: 37.52155847553255,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5180,
      },
      {
        code: 'per_3h',
        price: 4144,
      },
      {
        code: 'sum',
        price: 5180,
      },
    ],
  },
  {
    id: 4965,
    fias: 'г Москва, ул Клары Цеткин',
    point: {
      lat: 55.824926,
      lon: 37.516386,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5310,
      },
      {
        code: 'per_3h',
        price: 4248,
      },
      {
        code: 'sum',
        price: 5310,
      },
    ],
  },
  {
    id: 4982,
    fias: 'Московская обл, г Домодедово, мкр Южный, ул Курыжова, д 14',
    point: {
      lat: 55.397736,
      lon: 37.771121,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3850,
      },
      {
        code: 'per_3h',
        price: 3080,
      },
      {
        code: 'sum',
        price: 3850,
      },
    ],
  },
  {
    id: 4983,
    fias: 'Московская обл, г Домодедово, мкр Южный, ул Курыжова, д 14',
    point: {
      lat: 55.397736,
      lon: 37.771121,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3850,
      },
      {
        code: 'per_3h',
        price: 3080,
      },
      {
        code: 'sum',
        price: 3850,
      },
    ],
  },
  {
    id: 4984,
    fias: 'Московская обл, г Домодедово, мкр Южный, ул Курыжова, д 14',
    point: {
      lat: 55.397736,
      lon: 37.771121,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3850,
      },
      {
        code: 'per_3h',
        price: 3080,
      },
      {
        code: 'sum',
        price: 3850,
      },
    ],
  },
  {
    id: 4985,
    fias: 'Московская обл, г Домодедово, мкр Южный, ул Курыжова, д 14',
    point: {
      lat: 55.397736,
      lon: 37.771121,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3850,
      },
      {
        code: 'per_3h',
        price: 3080,
      },
      {
        code: 'sum',
        price: 3850,
      },
    ],
  },
  {
    id: 4986,
    fias: 'г Москва, поселение Сосенское, Скандинавский б-р, д 6',
    point: {
      lat: 55.566231,
      lon: 37.497629,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3538,
      },
      {
        code: 'per_3h',
        price: 2830,
      },
      {
        code: 'sum',
        price: 3538,
      },
    ],
  },
  {
    id: 4988,
    fias: 'г Москва, поселение Сосенское, ул Василия Ощепкова, д 4',
    point: {
      lat: 55.554242,
      lon: 37.465667,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3538,
      },
      {
        code: 'per_3h',
        price: 2830,
      },
      {
        code: 'sum',
        price: 3538,
      },
    ],
  },
  {
    id: 5036,
    fias: 'г Москва, Пятницкое шоссе, д 15',
    point: {
      lat: 55.842565,
      lon: 37.379186,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3681,
      },
      {
        code: 'per_3h',
        price: 2945,
      },
      {
        code: 'sum',
        price: 3681,
      },
    ],
  },
  {
    id: 5037,
    fias: 'г Москва, ул Инициативная, д 5 к 2',
    point: {
      lat: 55.715723,
      lon: 37.459478,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4708,
      },
      {
        code: 'per_3h',
        price: 3766,
      },
      {
        code: 'sum',
        price: 4708,
      },
    ],
  },
  {
    id: 5038,
    fias: 'г Москва, ул Таллинская, д 32 к 3',
    point: {
      lat: 55.800830834485616,
      lon: 37.41067813624572,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4602,
      },
      {
        code: 'per_3h',
        price: 3682,
      },
      {
        code: 'sum',
        price: 4602,
      },
    ],
  },
  {
    id: 5039,
    fias: 'г Москва, ул Таллинская, д 32 к 3',
    point: {
      lat: 55.8009847119618,
      lon: 37.41036969156449,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4838,
      },
      {
        code: 'per_3h',
        price: 3870,
      },
      {
        code: 'sum',
        price: 4838,
      },
    ],
  },
  {
    id: 5040,
    fias: 'Московская обл, г Красногорск, Красногорский б-р, д 24',
    point: {
      lat: 55.819332,
      lon: 37.376851,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5074,
      },
      {
        code: 'per_3h',
        price: 4059,
      },
      {
        code: 'sum',
        price: 5074,
      },
    ],
  },
  {
    id: 5041,
    fias: 'г Москва, ул Таллинская, д 32 к 3',
    point: {
      lat: 55.801190179790424,
      lon: 37.4102087590236,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3894,
      },
      {
        code: 'per_3h',
        price: 3115,
      },
      {
        code: 'sum',
        price: 3894,
      },
    ],
  },
  {
    id: 5042,
    fias: 'Московская обл, г Красногорск, Павшинский б-р, д 18',
    point: {
      lat: 55.8165,
      lon: 37.368559,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4366,
      },
      {
        code: 'per_3h',
        price: 3493,
      },
      {
        code: 'sum',
        price: 4366,
      },
    ],
  },
  {
    id: 5043,
    fias: 'г Москва, ул Инициативная, д 8 к 1',
    point: {
      lat: 55.716995,
      lon: 37.456972,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4708,
      },
      {
        code: 'per_3h',
        price: 3766,
      },
      {
        code: 'sum',
        price: 4708,
      },
    ],
  },
  {
    id: 5044,
    fias: 'Московская обл, г Красногорск, ул Молодежная, д 4',
    point: {
      lat: 55.815099,
      lon: 37.35451,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3186,
      },
      {
        code: 'per_3h',
        price: 2549,
      },
      {
        code: 'sum',
        price: 3186,
      },
    ],
  },
  {
    id: 5045,
    fias: 'Московская обл, г Красногорск, Павшинский б-р, д 5',
    point: {
      lat: 55.823768,
      lon: 37.367472,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4248,
      },
      {
        code: 'per_3h',
        price: 3398,
      },
      {
        code: 'sum',
        price: 4248,
      },
    ],
  },
  {
    id: 5046,
    fias: 'Московская обл, г Красногорск, ул Молодежная, д 2',
    point: {
      lat: 55.814826,
      lon: 37.357537,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3186,
      },
      {
        code: 'per_3h',
        price: 2549,
      },
      {
        code: 'sum',
        price: 3186,
      },
    ],
  },
  {
    id: 5081,
    fias: 'г Москва, ул Тагильская, д 4А',
    point: {
      lat: 55.818538,
      lon: 37.751897,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5500,
      },
      {
        code: 'per_3h',
        price: 4400,
      },
      {
        code: 'sum',
        price: 5500,
      },
    ],
  },
  {
    id: 5346,
    fias: 'г Москва, поселение Внуковское, ул Бориса Пастернака, д 45 к 1, кв 0',
    point: {
      lat: 55.63875,
      lon: 37.306603,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3540,
      },
      {
        code: 'per_3h',
        price: 2832,
      },
      {
        code: 'sum',
        price: 3540,
      },
    ],
  },
  {
    id: 5347,
    fias: 'г Москва, поселение Внуковское, ул Лётчика Ульянина, д 7ка',
    point: {
      lat: 55.626055,
      lon: 37.311283,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2800,
      },
      {
        code: 'per_3h',
        price: 2240,
      },
      {
        code: 'sum',
        price: 2800,
      },
    ],
  },
  {
    id: 5348,
    fias: 'г Москва, ул Новодмитровская, д 2 к 5',
    point: {
      lat: 55.80309707375097,
      lon: 37.59169191568194,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3500,
      },
      {
        code: 'per_3h',
        price: 2800,
      },
      {
        code: 'sum',
        price: 3500,
      },
    ],
  },
  {
    id: 5351,
    fias: 'г Москва, Большой Трёхгорный пер, д 1/26 стр 1',
    point: {
      lat: 55.757977,
      lon: 37.562883,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3100,
      },
      {
        code: 'per_3h',
        price: 2480,
      },
      {
        code: 'sum',
        price: 3100,
      },
    ],
  },
  {
    id: 5352,
    fias: 'г Москва, ул Флотская, д 7 к 4',
    point: {
      lat: 55.853542904203415,
      lon: 37.49824625396726,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2700,
      },
      {
        code: 'per_3h',
        price: 2160,
      },
      {
        code: 'sum',
        price: 2700,
      },
    ],
  },
  {
    id: 5353,
    fias: 'Московская обл, г Мытищи, Тенистый б-р, д 9',
    point: {
      lat: 55.958941,
      lon: 37.677382,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2300,
      },
      {
        code: 'per_3h',
        price: 1840,
      },
      {
        code: 'sum',
        price: 2300,
      },
    ],
  },
  {
    id: 5354,
    fias: 'г Москва, Холодильный пер, д 4',
    point: {
      lat: 55.70939633559984,
      lon: 37.6239275953971,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3500,
      },
      {
        code: 'per_3h',
        price: 2800,
      },
      {
        code: 'sum',
        price: 3500,
      },
    ],
  },
  {
    id: 5355,
    fias: 'Московская обл, г Люберцы, мкр Зенино ЖК Самолёт, ул Вертолетная, д 4 к 1',
    point: {
      lat: 55.707862,
      lon: 37.959633,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2000,
      },
      {
        code: 'per_3h',
        price: 1600,
      },
      {
        code: 'sum',
        price: 2000,
      },
    ],
  },
  {
    id: 5356,
    fias: 'г Москва, поселение Московский, ул Татьянин Парк, д 15 к 2',
    point: {
      lat: 55.65875607207088,
      lon: 37.425032119049064,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3500,
      },
      {
        code: 'per_3h',
        price: 2800,
      },
      {
        code: 'sum',
        price: 3500,
      },
    ],
  },
  {
    id: 5357,
    fias: 'г Москва, поселение Внуковское, ул Лётчика Ульянина, д 7ка',
    point: {
      lat: 55.626055,
      lon: 37.311283,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2650,
      },
      {
        code: 'per_3h',
        price: 2120,
      },
      {
        code: 'sum',
        price: 2650,
      },
    ],
  },
  {
    id: 5358,
    fias: 'г Москва, пр-кт Вернадского, д 41 стр 1',
    point: {
      lat: 55.673783,
      lon: 37.50434,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3200,
      },
      {
        code: 'per_3h',
        price: 2560,
      },
      {
        code: 'sum',
        price: 3200,
      },
    ],
  },
  {
    id: 5359,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 5 к 1',
    point: {
      lat: 55.67315417657679,
      lon: 37.85862299206539,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3000,
      },
      {
        code: 'per_3h',
        price: 2400,
      },
      {
        code: 'sum',
        price: 3000,
      },
    ],
  },
  {
    id: 5360,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 5 к 1',
    point: {
      lat: 55.67326331217026,
      lon: 37.858633720901445,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3000,
      },
      {
        code: 'per_3h',
        price: 2400,
      },
      {
        code: 'sum',
        price: 3000,
      },
    ],
  },
  {
    id: 5361,
    fias: 'г Москва, ул Амурская, д 1А к 2',
    point: {
      lat: 55.807886437363045,
      lon: 37.75882886441801,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2600,
      },
      {
        code: 'per_3h',
        price: 2080,
      },
      {
        code: 'sum',
        price: 2600,
      },
    ],
  },
  {
    id: 5362,
    fias: 'г Москва, ул Амурская, д 1А к 2',
    point: {
      lat: 55.8078260161993,
      lon: 37.759021983467086,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2600,
      },
      {
        code: 'per_3h',
        price: 2080,
      },
      {
        code: 'sum',
        price: 2600,
      },
    ],
  },
  {
    id: 5363,
    fias: 'г Москва, ул Автозаводская, д 23 к 3 стр 931',
    point: {
      lat: 55.703206936193716,
      lon: 37.64665341489457,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3500,
      },
      {
        code: 'per_3h',
        price: 2800,
      },
      {
        code: 'sum',
        price: 3500,
      },
    ],
  },
  {
    id: 5364,
    fias: 'г Москва, ул Автозаводская, д 23 к 3 стр 931',
    point: {
      lat: 55.703185773533725,
      lon: 37.64615986375423,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3500,
      },
      {
        code: 'per_3h',
        price: 2800,
      },
      {
        code: 'sum',
        price: 3500,
      },
    ],
  },
  {
    id: 5365,
    fias: 'г Москва, ул Ватутина, д 4 к 2',
    point: {
      lat: 55.72266421399776,
      lon: 37.45861687301629,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3000,
      },
      {
        code: 'per_3h',
        price: 2400,
      },
      {
        code: 'sum',
        price: 3000,
      },
    ],
  },
  {
    id: 5366,
    fias: 'г Москва, ул Ватутина, д 4 к 2',
    point: {
      lat: 55.72278532159585,
      lon: 37.45863833068842,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3000,
      },
      {
        code: 'per_3h',
        price: 2400,
      },
      {
        code: 'sum',
        price: 3000,
      },
    ],
  },
  {
    id: 5367,
    fias: 'г Москва, ул Ватутина, д 4 к 2',
    point: {
      lat: 55.722894318111656,
      lon: 37.458509584655715,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3000,
      },
      {
        code: 'per_3h',
        price: 2400,
      },
      {
        code: 'sum',
        price: 3000,
      },
    ],
  },
  {
    id: 5368,
    fias: 'г Москва, ул Ватутина, д 4 к 2',
    point: {
      lat: 55.72300634199008,
      lon: 37.45853640674584,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2900,
      },
      {
        code: 'per_3h',
        price: 2320,
      },
      {
        code: 'sum',
        price: 2900,
      },
    ],
  },
  {
    id: 5369,
    fias: 'г Москва, поселение Внуковское, ул Лётчика Ульянина, д 7ка',
    point: {
      lat: 55.626055,
      lon: 37.311283,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2600,
      },
      {
        code: 'per_3h',
        price: 2080,
      },
      {
        code: 'sum',
        price: 2600,
      },
    ],
  },
  {
    id: 5370,
    fias: 'г Москва, поселение Внуковское, ул Лётчика Ульянина, д 7ка',
    point: {
      lat: 55.626055,
      lon: 37.311283,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2800,
      },
      {
        code: 'per_3h',
        price: 2240,
      },
      {
        code: 'sum',
        price: 2800,
      },
    ],
  },
  {
    id: 5371,
    fias: 'г Москва, поселение Внуковское, ул Летчика Грицевца, д 14А',
    point: {
      lat: 55.62498237052828,
      lon: 37.31216326190183,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2900,
      },
      {
        code: 'per_3h',
        price: 2320,
      },
      {
        code: 'sum',
        price: 2900,
      },
    ],
  },
  {
    id: 5372,
    fias: 'г Москва, поселение Внуковское, ул Летчика Грицевца, д 14А',
    point: {
      lat: 55.62509164103357,
      lon: 37.3123188300247,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2800,
      },
      {
        code: 'per_3h',
        price: 2240,
      },
      {
        code: 'sum',
        price: 2800,
      },
    ],
  },
  {
    id: 5373,
    fias: 'г Москва, ул Подъёмная, д 14 стр 37',
    point: {
      lat: 55.74235728427357,
      lon: 37.707440033729554,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3000,
      },
      {
        code: 'per_3h',
        price: 2400,
      },
      {
        code: 'sum',
        price: 3000,
      },
    ],
  },
  {
    id: 5374,
    fias: 'г Москва, ул Подъёмная, д 14 стр 37',
    point: {
      lat: 55.74252674892856,
      lon: 37.70740784722137,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3000,
      },
      {
        code: 'per_3h',
        price: 2400,
      },
      {
        code: 'sum',
        price: 3000,
      },
    ],
  },
  {
    id: 5375,
    fias: 'г Москва, ул Выборгская, д 9/1',
    point: {
      lat: 55.836280511332866,
      lon: 37.498276745368905,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2500,
      },
      {
        code: 'per_3h',
        price: 2000,
      },
      {
        code: 'sum',
        price: 2500,
      },
    ],
  },
  {
    id: 5376,
    fias: 'г Москва, ул Выборгская, д 9/1',
    point: {
      lat: 55.836283530175216,
      lon: 37.498426949073746,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2550,
      },
      {
        code: 'per_3h',
        price: 2040,
      },
      {
        code: 'sum',
        price: 2550,
      },
    ],
  },
  {
    id: 5377,
    fias: 'г Москва, ул Выборгская, д 9/1',
    point: {
      lat: 55.83623220982312,
      lon: 37.49840012698361,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2450,
      },
      {
        code: 'per_3h',
        price: 1960,
      },
      {
        code: 'sum',
        price: 2450,
      },
    ],
  },
  {
    id: 5378,
    fias: 'г Москва, ул Выборгская, д 9/1',
    point: {
      lat: 55.836165795148865,
      lon: 37.4983625760574,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2500,
      },
      {
        code: 'per_3h',
        price: 2000,
      },
      {
        code: 'sum',
        price: 2500,
      },
    ],
  },
  {
    id: 5379,
    fias: 'г Москва, ул Новодмитровская, д 2 к 1А',
    point: {
      lat: 55.805361,
      lon: 37.589617,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4000,
      },
      {
        code: 'per_3h',
        price: 3200,
      },
      {
        code: 'sum',
        price: 4000,
      },
    ],
  },
  {
    id: 5383,
    fias: 'г Москва, ул Новодмитровская, д 2 к 1А',
    point: {
      lat: 55.805361,
      lon: 37.589617,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3500,
      },
      {
        code: 'per_3h',
        price: 2800,
      },
      {
        code: 'sum',
        price: 3500,
      },
    ],
  },
  {
    id: 5386,
    fias: 'г Москва, ул Флотская, д 7 к 4',
    point: {
      lat: 55.85380356183401,
      lon: 37.49862113206185,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2700,
      },
      {
        code: 'per_3h',
        price: 2160,
      },
      {
        code: 'sum',
        price: 2700,
      },
    ],
  },
  {
    id: 5387,
    fias: 'г Москва, Холодильный пер, д 4',
    point: {
      lat: 55.709499969746645,
      lon: 37.62371640084972,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3200,
      },
      {
        code: 'per_3h',
        price: 2560,
      },
      {
        code: 'sum',
        price: 3200,
      },
    ],
  },
  {
    id: 5388,
    fias: 'г Москва, ул Автозаводская, д 23 к 3 стр 931',
    point: {
      lat: 55.70326756214814,
      lon: 37.64617595700831,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3400,
      },
      {
        code: 'per_3h',
        price: 2720,
      },
      {
        code: 'sum',
        price: 3400,
      },
    ],
  },
  {
    id: 5389,
    fias: 'г Москва, ул Новодмитровская, д 2 к 5',
    point: {
      lat: 55.80303664512193,
      lon: 37.5917241021901,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3500,
      },
      {
        code: 'per_3h',
        price: 2800,
      },
      {
        code: 'sum',
        price: 3500,
      },
    ],
  },
  {
    id: 5390,
    fias: 'г Москва, ул Новодмитровская, д 2 к 5',
    point: {
      lat: 55.80296413064274,
      lon: 37.59145588128863,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3500,
      },
      {
        code: 'per_3h',
        price: 2800,
      },
      {
        code: 'sum',
        price: 3500,
      },
    ],
  },
  {
    id: 5391,
    fias: 'г Москва, ул Новодмитровская, д 2 к 5',
    point: {
      lat: 55.80301247364393,
      lon: 37.591273491075604,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3500,
      },
      {
        code: 'per_3h',
        price: 2800,
      },
      {
        code: 'sum',
        price: 3500,
      },
    ],
  },
  {
    id: 5394,
    fias: 'г Москва, ул Амурская, д 1А к 5',
    point: {
      lat: 55.80898897047109,
      lon: 37.759437896110775,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2500,
      },
      {
        code: 'per_3h',
        price: 2000,
      },
      {
        code: 'sum',
        price: 2500,
      },
    ],
  },
  {
    id: 5395,
    fias: 'г Москва, ул Амурская, д 1А к 5',
    point: {
      lat: 55.80930148244483,
      lon: 37.75930612884503,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2500,
      },
      {
        code: 'per_3h',
        price: 2000,
      },
      {
        code: 'sum',
        price: 2500,
      },
    ],
  },
  {
    id: 5397,
    fias: 'г Москва, проезд Грайвороновский 2-й, д 44 к 1',
    point: {
      lat: 55.726081561081294,
      lon: 37.74585940135771,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2700,
      },
      {
        code: 'per_3h',
        price: 2160,
      },
      {
        code: 'sum',
        price: 2700,
      },
    ],
  },
  {
    id: 5398,
    fias: 'г Москва, Дмитровское шоссе, д 81',
    point: {
      lat: 55.86207919765631,
      lon: 37.54901209555759,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2799,
      },
      {
        code: 'per_3h',
        price: 2239,
      },
      {
        code: 'sum',
        price: 2799,
      },
    ],
  },
  {
    id: 5400,
    fias: 'г Москва, Дмитровское шоссе, д 81',
    point: {
      lat: 55.86208824814767,
      lon: 37.54924276553286,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2599,
      },
      {
        code: 'per_3h',
        price: 2079,
      },
      {
        code: 'sum',
        price: 2599,
      },
    ],
  },
  {
    id: 5401,
    fias: 'г Москва, ул Выборгская, д 9/1',
    point: {
      lat: 55.836180889403025,
      lon: 37.498523508598296,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2700,
      },
      {
        code: 'per_3h',
        price: 2160,
      },
      {
        code: 'sum',
        price: 2700,
      },
    ],
  },
  {
    id: 5402,
    fias: 'г Москва, ул Выборгская, д 9/1',
    point: {
      lat: 55.83612051235112,
      lon: 37.49850741534419,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2550,
      },
      {
        code: 'per_3h',
        price: 2040,
      },
      {
        code: 'sum',
        price: 2550,
      },
    ],
  },
  {
    id: 5403,
    fias: 'г Москва, ул Выборгская, д 9/1',
    point: {
      lat: 55.83602692773461,
      lon: 37.4984537711639,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2600,
      },
      {
        code: 'per_3h',
        price: 2080,
      },
      {
        code: 'sum',
        price: 2600,
      },
    ],
  },
  {
    id: 5406,
    fias: 'г Москва, ул Щербаковская, д 16',
    point: {
      lat: 55.78167174126781,
      lon: 37.7249338134917,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 1500,
      },
      {
        code: 'per_3h',
        price: 1200,
      },
      {
        code: 'sum',
        price: 1500,
      },
    ],
  },
  {
    id: 5407,
    fias: 'г Москва, ул Щербаковская, д 16',
    point: {
      lat: 55.78141780014936,
      lon: 37.724955271163836,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2700,
      },
      {
        code: 'per_3h',
        price: 2160,
      },
      {
        code: 'sum',
        price: 2700,
      },
    ],
  },
  {
    id: 5408,
    fias: 'г Москва, ул Щербаковская, д 16',
    point: {
      lat: 55.781121533410584,
      lon: 37.72501964418017,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2700,
      },
      {
        code: 'per_3h',
        price: 2160,
      },
      {
        code: 'sum',
        price: 2700,
      },
    ],
  },
  {
    id: 5412,
    fias: 'г Москва, ул Бибиревская, д 4А',
    point: {
      lat: 55.879923980504415,
      lon: 37.5967535568788,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2650,
      },
      {
        code: 'per_3h',
        price: 2120,
      },
      {
        code: 'sum',
        price: 2650,
      },
    ],
  },
  {
    id: 5413,
    fias: 'г Москва, ул Бибиревская, д 4А',
    point: {
      lat: 55.879866687121066,
      lon: 37.59681524768613,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2800,
      },
      {
        code: 'per_3h',
        price: 2240,
      },
      {
        code: 'sum',
        price: 2800,
      },
    ],
  },
  {
    id: 5414,
    fias: 'г Москва, ул Бибиревская, д 4А',
    point: {
      lat: 55.87983351722871,
      lon: 37.59694935813687,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2700,
      },
      {
        code: 'per_3h',
        price: 2160,
      },
      {
        code: 'sum',
        price: 2700,
      },
    ],
  },
  {
    id: 5415,
    fias: 'г Москва, кв-л 114а Волжский Бульвар, к 9',
    point: {
      lat: 55.70141253863241,
      lon: 37.751722119049035,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2600,
      },
      {
        code: 'per_3h',
        price: 2080,
      },
      {
        code: 'sum',
        price: 2600,
      },
    ],
  },
  {
    id: 5416,
    fias: 'г Москва, кв-л 114а Волжский Бульвар, к 9',
    point: {
      lat: 55.70141859733027,
      lon: 37.751389525131195,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2600,
      },
      {
        code: 'per_3h',
        price: 2080,
      },
      {
        code: 'sum',
        price: 2600,
      },
    ],
  },
  {
    id: 5419,
    fias: 'г Москва, Дмитровское шоссе, д 81',
    point: {
      lat: 55.86207014716284,
      lon: 37.54942515574588,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2700,
      },
      {
        code: 'per_3h',
        price: 2160,
      },
      {
        code: 'sum',
        price: 2700,
      },
    ],
  },
  {
    id: 5420,
    fias: 'г Москва, Дмитровское шоссе, д 81',
    point: {
      lat: 55.86197662527297,
      lon: 37.54925885878696,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2600,
      },
      {
        code: 'per_3h',
        price: 2080,
      },
      {
        code: 'sum',
        price: 2600,
      },
    ],
  },
  {
    id: 5421,
    fias: 'г Москва, Дмитровское шоссе, д 81',
    point: {
      lat: 55.86199170946406,
      lon: 37.5494841643442,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2500,
      },
      {
        code: 'per_3h',
        price: 2000,
      },
      {
        code: 'sum',
        price: 2500,
      },
    ],
  },
  {
    id: 5425,
    fias: 'г Москва, ул Бибиревская, д 4А',
    point: {
      lat: 55.8799209650653,
      lon: 37.59691180721068,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2500,
      },
      {
        code: 'per_3h',
        price: 2000,
      },
      {
        code: 'sum',
        price: 2500,
      },
    ],
  },
  {
    id: 5426,
    fias: 'г Москва, ул Бибиревская, д 4А',
    point: {
      lat: 55.87992930407406,
      lon: 37.597079296207355,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2600,
      },
      {
        code: 'per_3h',
        price: 2080,
      },
      {
        code: 'sum',
        price: 2600,
      },
    ],
  },
  {
    id: 5430,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 1 к 2',
    point: {
      lat: 55.67155250430783,
      lon: 37.85505835515594,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2500,
      },
      {
        code: 'per_3h',
        price: 2000,
      },
      {
        code: 'sum',
        price: 2500,
      },
    ],
  },
  {
    id: 5431,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 1 к 2',
    point: {
      lat: 55.67179717142743,
      lon: 37.85525098548783,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2500,
      },
      {
        code: 'per_3h',
        price: 2000,
      },
      {
        code: 'sum',
        price: 2500,
      },
    ],
  },
  {
    id: 5432,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 1 к 2',
    point: {
      lat: 55.67188205764995,
      lon: 37.85552993522538,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3000,
      },
      {
        code: 'per_3h',
        price: 2400,
      },
      {
        code: 'sum',
        price: 3000,
      },
    ],
  },
  {
    id: 5433,
    fias: 'г Москва, поселение Сосенское, поселок Коммунарка, ул Сосенский Стан, д 5',
    point: {
      lat: 55.57391298376898,
      lon: 37.46877549999999,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2500,
      },
      {
        code: 'per_3h',
        price: 2000,
      },
      {
        code: 'sum',
        price: 2500,
      },
    ],
  },
  {
    id: 5434,
    fias: 'г Москва, поселение Сосенское, поселок Коммунарка, ул Сосенский Стан, д 5',
    point: {
      lat: 55.573572584411785,
      lon: 37.468786228836045,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2500,
      },
      {
        code: 'per_3h',
        price: 2000,
      },
      {
        code: 'sum',
        price: 2500,
      },
    ],
  },
  {
    id: 5438,
    fias: 'г Москва, ул Хромова, д 3',
    point: {
      lat: 55.79976551355541,
      lon: 37.71577849559372,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2700,
      },
      {
        code: 'per_3h',
        price: 2160,
      },
      {
        code: 'sum',
        price: 2700,
      },
    ],
  },
  {
    id: 5439,
    fias: 'г Москва, поселение Сосенское, поселок Коммунарка, ул Сосенский Стан, д 5',
    point: {
      lat: 55.573207867526385,
      lon: 37.468786228836045,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2500,
      },
      {
        code: 'per_3h',
        price: 2000,
      },
      {
        code: 'sum',
        price: 2500,
      },
    ],
  },
  {
    id: 5442,
    fias: 'г Москва, поселение Внуковское, ул Лётчика Ульянина, д 7ка',
    point: {
      lat: 55.626055,
      lon: 37.311283,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2500,
      },
      {
        code: 'per_3h',
        price: 2000,
      },
      {
        code: 'sum',
        price: 2500,
      },
    ],
  },
  {
    id: 5443,
    fias: 'г Москва, поселение Внуковское, ул Лётчика Ульянина, д 7ка',
    point: {
      lat: 55.626055,
      lon: 37.311283,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2500,
      },
      {
        code: 'per_3h',
        price: 2000,
      },
      {
        code: 'sum',
        price: 2500,
      },
    ],
  },
  {
    id: 5446,
    fias: 'Московская обл, г Одинцово, ул Чистяковой, д 18',
    point: {
      lat: 55.696585,
      lon: 37.326339,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2200,
      },
      {
        code: 'per_3h',
        price: 1760,
      },
      {
        code: 'sum',
        price: 2200,
      },
    ],
  },
  {
    id: 5447,
    fias: 'Московская обл, г Одинцово, ул Чистяковой, д 18',
    point: {
      lat: 55.696585,
      lon: 37.326339,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2200,
      },
      {
        code: 'per_3h',
        price: 1760,
      },
      {
        code: 'sum',
        price: 2200,
      },
    ],
  },
  {
    id: 5448,
    fias: 'Московская обл, г Одинцово, ул Чистяковой, д 18',
    point: {
      lat: 55.696585,
      lon: 37.326339,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2200,
      },
      {
        code: 'per_3h',
        price: 1760,
      },
      {
        code: 'sum',
        price: 2200,
      },
    ],
  },
  {
    id: 5449,
    fias: 'Московская обл, г Одинцово, ул Чистяковой, д 18',
    point: {
      lat: 55.696585,
      lon: 37.326339,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2100,
      },
      {
        code: 'per_3h',
        price: 1680,
      },
      {
        code: 'sum',
        price: 2100,
      },
    ],
  },
  {
    id: 5461,
    fias: 'г Москва, ул 50 лет Октября, д 29',
    point: {
      lat: 55.658089883932654,
      lon: 37.41203838954923,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2800,
      },
      {
        code: 'per_3h',
        price: 2240,
      },
      {
        code: 'sum',
        price: 2800,
      },
    ],
  },
  {
    id: 5462,
    fias: 'г Москва, ул 50 лет Октября, д 29',
    point: {
      lat: 55.657880625644744,
      lon: 37.412161771163916,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2800,
      },
      {
        code: 'per_3h',
        price: 2240,
      },
      {
        code: 'sum',
        price: 2800,
      },
    ],
  },
  {
    id: 5463,
    fias: 'г Москва, ул 50 лет Октября, д 29',
    point: {
      lat: 55.657650136955006,
      lon: 37.4123012460327,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2750,
      },
      {
        code: 'per_3h',
        price: 2200,
      },
      {
        code: 'sum',
        price: 2750,
      },
    ],
  },
  {
    id: 5470,
    fias: 'Московская обл, г Люберцы, мкр Зенино ЖК Самолёт, ул Вертолетная, д 4 к 1',
    point: {
      lat: 55.707862,
      lon: 37.959633,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2000,
      },
      {
        code: 'per_3h',
        price: 1600,
      },
      {
        code: 'sum',
        price: 2000,
      },
    ],
  },
  {
    id: 5471,
    fias: 'г Москва, ул Хромова, д 3',
    point: {
      lat: 55.79988335923701,
      lon: 37.71592333488051,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2700,
      },
      {
        code: 'per_3h',
        price: 2160,
      },
      {
        code: 'sum',
        price: 2700,
      },
    ],
  },
  {
    id: 5472,
    fias: 'г Москва, ул Хромова, д 3',
    point: {
      lat: 55.79994983613015,
      lon: 37.71631493739669,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2800,
      },
      {
        code: 'per_3h',
        price: 2240,
      },
      {
        code: 'sum',
        price: 2800,
      },
    ],
  },
  {
    id: 5473,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Новотушинская, д 2',
    point: {
      lat: 55.868092,
      lon: 37.397072,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2600,
      },
      {
        code: 'per_3h',
        price: 2080,
      },
      {
        code: 'sum',
        price: 2600,
      },
    ],
  },
  {
    id: 5474,
    fias: 'Московская обл, г Красногорск, деревня Путилково, ул Новотушинская, д 2',
    point: {
      lat: 55.868092,
      lon: 37.397072,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2300,
      },
      {
        code: 'per_3h',
        price: 1840,
      },
      {
        code: 'sum',
        price: 2300,
      },
    ],
  },
  {
    id: 5479,
    fias: 'г Москва, поселение Сосенское, поселок Коммунарка, ул Бачуринская, д 7 к 2',
    point: {
      lat: 55.57801277690392,
      lon: 37.4789743831987,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2700,
      },
      {
        code: 'per_3h',
        price: 2160,
      },
      {
        code: 'sum',
        price: 2700,
      },
    ],
  },
  {
    id: 5480,
    fias: 'г Москва, поселение Сосенское, поселок Коммунарка, ул Бачуринская, д 7 к 2',
    point: {
      lat: 55.577766621335265,
      lon: 37.47895828994459,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2700,
      },
      {
        code: 'per_3h',
        price: 2160,
      },
      {
        code: 'sum',
        price: 2700,
      },
    ],
  },
  {
    id: 5481,
    fias: 'Московская обл, г Химки, ул 9 Мая, д 21 к 1',
    point: {
      lat: 55.908883,
      lon: 37.405974,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2500,
      },
      {
        code: 'per_3h',
        price: 2000,
      },
      {
        code: 'sum',
        price: 2500,
      },
    ],
  },
  {
    id: 5482,
    fias: 'Московская обл, г Химки, ул 9 Мая, д 21 к 1',
    point: {
      lat: 55.908883,
      lon: 37.405974,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2500,
      },
      {
        code: 'per_3h',
        price: 2000,
      },
      {
        code: 'sum',
        price: 2500,
      },
    ],
  },
  {
    id: 5485,
    fias: 'Московская обл, г Химки, ул 9 Мая, д 21 к 3',
    point: {
      lat: 55.909877,
      lon: 37.405462,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2400,
      },
      {
        code: 'per_3h',
        price: 1920,
      },
      {
        code: 'sum',
        price: 2400,
      },
    ],
  },
  {
    id: 5486,
    fias: 'Московская обл, г Химки, ул 9 Мая, д 21 к 3',
    point: {
      lat: 55.909877,
      lon: 37.405462,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2400,
      },
      {
        code: 'per_3h',
        price: 1920,
      },
      {
        code: 'sum',
        price: 2400,
      },
    ],
  },
  {
    id: 5489,
    fias: 'г Москва, поселение Московский, ул Татьянин Парк, д 15 к 2',
    point: {
      lat: 55.65858624224599,
      lon: 37.42483900000001,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3000,
      },
      {
        code: 'per_3h',
        price: 2400,
      },
      {
        code: 'sum',
        price: 3000,
      },
    ],
  },
  {
    id: 5490,
    fias: 'г Москва, поселение Московский, ул Татьянин Парк, д 15 к 2',
    point: {
      lat: 55.658410346290125,
      lon: 37.42462442327881,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3000,
      },
      {
        code: 'per_3h',
        price: 2400,
      },
      {
        code: 'sum',
        price: 3000,
      },
    ],
  },
  {
    id: 5504,
    fias: 'г Москва, Большой Трёхгорный пер, д 1/26 стр 1',
    point: {
      lat: 55.757977,
      lon: 37.562883,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3100,
      },
      {
        code: 'per_3h',
        price: 2480,
      },
      {
        code: 'sum',
        price: 3100,
      },
    ],
  },
  {
    id: 5514,
    fias: 'г Москва, ул Корабельная, д 6',
    point: {
      lat: 55.67903824451387,
      lon: 37.695263616442986,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2700,
      },
      {
        code: 'per_3h',
        price: 2160,
      },
      {
        code: 'sum',
        price: 2700,
      },
    ],
  },
  {
    id: 5515,
    fias: 'г Москва, ул Корабельная, д 6',
    point: {
      lat: 55.67917464335255,
      lon: 37.695360175967515,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2600,
      },
      {
        code: 'per_3h',
        price: 2080,
      },
      {
        code: 'sum',
        price: 2600,
      },
    ],
  },
  {
    id: 5517,
    fias: 'г Москва, ул Подъёмная, д 14 стр 37',
    point: {
      lat: 55.742638716241544,
      lon: 37.70757950859834,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3000,
      },
      {
        code: 'per_3h',
        price: 2400,
      },
      {
        code: 'sum',
        price: 3000,
      },
    ],
  },
  {
    id: 5518,
    fias: 'г Москва, Волгоградский пр-кт, д 32/3 к 3',
    point: {
      lat: 55.71987115831309,
      lon: 37.69415169934235,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3300,
      },
      {
        code: 'per_3h',
        price: 2640,
      },
      {
        code: 'sum',
        price: 3300,
      },
    ],
  },
  {
    id: 5519,
    fias: 'г Москва, Волгоградский пр-кт, д 32/3 к 3',
    point: {
      lat: 55.71984693500844,
      lon: 37.69392102936706,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3300,
      },
      {
        code: 'per_3h',
        price: 2640,
      },
      {
        code: 'sum',
        price: 3300,
      },
    ],
  },
  {
    id: 5521,
    fias: 'г Москва, ул Нижегородская, д 29-33 стр 32',
    point: {
      lat: 55.734303042728165,
      lon: 37.71342258399199,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3000,
      },
      {
        code: 'per_3h',
        price: 2400,
      },
      {
        code: 'sum',
        price: 3000,
      },
    ],
  },
  {
    id: 5522,
    fias: 'г Москва, ул Нижняя, д 7',
    point: {
      lat: 55.77671,
      lon: 37.578038,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2700,
      },
      {
        code: 'per_3h',
        price: 2160,
      },
      {
        code: 'sum',
        price: 2700,
      },
    ],
  },
  {
    id: 5523,
    fias: 'г Москва, Ленинградский пр-кт, д 29 к 1',
    point: {
      lat: 55.78530811868721,
      lon: 37.5642453478851,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3200,
      },
      {
        code: 'per_3h',
        price: 2560,
      },
      {
        code: 'sum',
        price: 3200,
      },
    ],
  },
  {
    id: 5524,
    fias: 'г Москва, Ленинградский пр-кт, д 29 к 1',
    point: {
      lat: 55.78550157838569,
      lon: 37.563837652114834,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3200,
      },
      {
        code: 'per_3h',
        price: 2560,
      },
      {
        code: 'sum',
        price: 3200,
      },
    ],
  },
  {
    id: 5525,
    fias: 'г Москва, Ленинградский пр-кт, д 29 к 1',
    point: {
      lat: 55.78564667252642,
      lon: 37.563472871688816,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3300,
      },
      {
        code: 'per_3h',
        price: 2640,
      },
      {
        code: 'sum',
        price: 3300,
      },
    ],
  },
  {
    id: 5526,
    fias: 'г Москва, ул Корабельная, д 6',
    point: {
      lat: 55.67949046550826,
      lon: 37.695281925208334,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2700,
      },
      {
        code: 'per_3h',
        price: 2160,
      },
      {
        code: 'sum',
        price: 2700,
      },
    ],
  },
  {
    id: 5527,
    fias: 'г Москва, ул Корабельная, д 6',
    point: {
      lat: 55.67962383171835,
      lon: 37.69541067124104,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2600,
      },
      {
        code: 'per_3h',
        price: 2080,
      },
      {
        code: 'sum',
        price: 2600,
      },
    ],
  },
  {
    id: 5528,
    fias: 'г Москва, пр-кт Будённого, д 51 к 6',
    point: {
      lat: 55.75900351658628,
      lon: 37.73910066931145,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3000,
      },
      {
        code: 'per_3h',
        price: 2400,
      },
      {
        code: 'sum',
        price: 3000,
      },
    ],
  },
  {
    id: 5529,
    fias: 'г Москва, ул Тёплый Стан, д 5 к 1',
    point: {
      lat: 55.62171077162805,
      lon: 37.49825489814757,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3300,
      },
      {
        code: 'per_3h',
        price: 2640,
      },
      {
        code: 'sum',
        price: 3300,
      },
    ],
  },
  {
    id: 5530,
    fias: 'г Москва, ул Автозаводская, д 23 к 4 стр 931',
    point: {
      lat: 55.703165,
      lon: 37.646471,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3300,
      },
      {
        code: 'per_3h',
        price: 2640,
      },
      {
        code: 'sum',
        price: 3300,
      },
    ],
  },
  {
    id: 5531,
    fias: 'г Москва, ул Автозаводская, д 23 к 4 стр 931',
    point: {
      lat: 55.703165,
      lon: 37.646471,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3400,
      },
      {
        code: 'per_3h',
        price: 2720,
      },
      {
        code: 'sum',
        price: 3400,
      },
    ],
  },
  {
    id: 5532,
    fias: 'г Москва, ул Автозаводская, д 23 к 3 стр 931',
    point: {
      lat: 55.70319486116603,
      lon: 37.64593992261499,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3200,
      },
      {
        code: 'per_3h',
        price: 2560,
      },
      {
        code: 'sum',
        price: 3200,
      },
    ],
  },
  {
    id: 5536,
    fias: 'г Москва, ул Тёплый Стан, д 5 к 1',
    point: {
      lat: 55.62156506493197,
      lon: 37.49832999999997,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2860,
      },
      {
        code: 'per_3h',
        price: 2288,
      },
      {
        code: 'sum',
        price: 2860,
      },
    ],
  },
  {
    id: 5537,
    fias: 'г Москва, ул Тёплый Стан, д 5 к 1',
    point: {
      lat: 55.62139197904834,
      lon: 37.49838900859831,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2875,
      },
      {
        code: 'per_3h',
        price: 2300,
      },
      {
        code: 'sum',
        price: 2875,
      },
    ],
  },
  {
    id: 5538,
    fias: 'г Москва, ул Тёплый Стан, д 5 к 1',
    point: {
      lat: 55.621233608250485,
      lon: 37.49842530265552,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3200,
      },
      {
        code: 'per_3h',
        price: 2560,
      },
      {
        code: 'sum',
        price: 3200,
      },
    ],
  },
  {
    id: 5542,
    fias: 'г Москва, Дмитровское шоссе, д 81',
    point: {
      lat: 55.86181371563454,
      lon: 37.54982212268009,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2499,
      },
      {
        code: 'per_3h',
        price: 1999,
      },
      {
        code: 'sum',
        price: 2499,
      },
    ],
  },
  {
    id: 5544,
    fias: 'г Москва, поселение Сосенское, поселок Коммунарка, ул Бачуринская, д 7 к 1',
    point: {
      lat: 55.57845352727741,
      lon: 37.47797480555724,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2700,
      },
      {
        code: 'per_3h',
        price: 2160,
      },
      {
        code: 'sum',
        price: 2700,
      },
    ],
  },
  {
    id: 5548,
    fias: 'г Москва, поселение Сосенское, поселок Коммунарка, ул Бачуринская, д 7 к 1',
    point: {
      lat: 55.57834412622716,
      lon: 37.47796944113919,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2700,
      },
      {
        code: 'per_3h',
        price: 2160,
      },
      {
        code: 'sum',
        price: 2700,
      },
    ],
  },
  {
    id: 5549,
    fias: 'Московская обл, г Мытищи, Тенистый б-р, д 9',
    point: {
      lat: 55.959167,
      lon: 37.676376,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 1900,
      },
      {
        code: 'per_3h',
        price: 1520,
      },
      {
        code: 'sum',
        price: 1900,
      },
    ],
  },
  {
    id: 5550,
    fias: 'г Москва, проезд Грайвороновский 2-й, д 44 к 1',
    point: {
      lat: 55.726045231921375,
      lon: 37.74570383323484,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2700,
      },
      {
        code: 'per_3h',
        price: 2160,
      },
      {
        code: 'sum',
        price: 2700,
      },
    ],
  },
  {
    id: 5582,
    fias: 'Московская обл, рп Шаховская, деревня Кобылино, тер. СНТ Тополек, д 201',
    point: {
      lat: 55.967663,
      lon: 35.713207,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 8260,
      },
      {
        code: 'per_3h',
        price: 6608,
      },
      {
        code: 'sum',
        price: 8260,
      },
    ],
  },
  {
    id: 5583,
    fias: 'Московская обл, рп Шаховская, деревня Кобылино, тер. СНТ Тополек, д 195',
    point: {
      lat: 55.967249,
      lon: 35.714375,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 8260,
      },
      {
        code: 'per_3h',
        price: 6608,
      },
      {
        code: 'sum',
        price: 8260,
      },
    ],
  },
  {
    id: 5666,
    fias: 'г Москва, ул Ботаническая, д 33В стр 1',
    point: {
      lat: 55.840154,
      lon: 37.582529,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4140,
      },
      {
        code: 'per_3h',
        price: 3312,
      },
      {
        code: 'sum',
        price: 4140,
      },
    ],
  },
  {
    id: 5764,
    fias: 'Московская обл, г Мытищи, ул Воронина, д 14',
    point: {
      lat: 55.925954,
      lon: 37.76778,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3720,
      },
      {
        code: 'per_3h',
        price: 2976,
      },
      {
        code: 'sum',
        price: 3720,
      },
    ],
  },
  {
    id: 5765,
    fias: 'Московская обл, г Мытищи, ул Стрелковая, д 8',
    point: {
      lat: 55.943144,
      lon: 37.775487,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4200,
      },
      {
        code: 'per_3h',
        price: 3360,
      },
      {
        code: 'sum',
        price: 4200,
      },
    ],
  },
  {
    id: 5766,
    fias: 'Московская обл, г Мытищи, ул Борисовка, д 28А',
    point: {
      lat: 55.919498,
      lon: 37.715219,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4200,
      },
      {
        code: 'per_3h',
        price: 3360,
      },
      {
        code: 'sum',
        price: 4200,
      },
    ],
  },
  {
    id: 5768,
    fias: 'Московская обл, г Мытищи, ул Мира, д 45',
    point: {
      lat: 55.921304,
      lon: 37.714896,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4560,
      },
      {
        code: 'per_3h',
        price: 3648,
      },
      {
        code: 'sum',
        price: 4560,
      },
    ],
  },
  {
    id: 5769,
    fias: 'Московская обл, г Мытищи, ул Воронина, д 14',
    point: {
      lat: 55.925954,
      lon: 37.76778,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4200,
      },
      {
        code: 'per_3h',
        price: 3360,
      },
      {
        code: 'sum',
        price: 4200,
      },
    ],
  },
  {
    id: 5789,
    fias: 'г Москва, Гостиничный проезд, д 8 к 1',
    point: {
      lat: 55.84617305150735,
      lon: 37.57608126256561,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3450,
      },
      {
        code: 'per_3h',
        price: 2760,
      },
      {
        code: 'sum',
        price: 3450,
      },
    ],
  },
  {
    id: 5790,
    fias: 'г Москва, Гостиничный проезд, д 8 к 1',
    point: {
      lat: 55.84550303390913,
      lon: 37.57651041600797,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3450,
      },
      {
        code: 'per_3h',
        price: 2760,
      },
      {
        code: 'sum',
        price: 3450,
      },
    ],
  },
  {
    id: 5807,
    fias: 'Московская обл, г Коломна, ул Пионерская, д 54',
    point: {
      lat: 55.092216,
      lon: 38.759466,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6325,
      },
      {
        code: 'per_3h',
        price: 5060,
      },
      {
        code: 'sum',
        price: 6325,
      },
    ],
  },
  {
    id: 5911,
    fias: 'г Москва, ул Скаковая, д 4 к 2',
    point: {
      lat: 55.782172,
      lon: 37.566674,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4715,
      },
      {
        code: 'per_3h',
        price: 3772,
      },
      {
        code: 'sum',
        price: 4715,
      },
    ],
  },
  {
    id: 5914,
    fias: 'г Москва, Шмитовский проезд, д 39 к 2',
    point: {
      lat: 55.753843,
      lon: 37.524525,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4830,
      },
      {
        code: 'per_3h',
        price: 3864,
      },
      {
        code: 'sum',
        price: 4830,
      },
    ],
  },
  {
    id: 5924,
    fias: 'г Москва, ул Складочная, д 8 к 1',
    point: {
      lat: 55.802933,
      lon: 37.596489,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6428,
      },
      {
        code: 'per_3h',
        price: 5142,
      },
      {
        code: 'sum',
        price: 6428,
      },
    ],
  },
  {
    id: 5925,
    fias: 'г Москва, ул Новодмитровская, д 2 к 6',
    point: {
      lat: 55.80288875419644,
      lon: 37.59180390740961,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6888,
      },
      {
        code: 'per_3h',
        price: 5510,
      },
      {
        code: 'sum',
        price: 6888,
      },
    ],
  },
  {
    id: 5926,
    fias: 'г Москва, ул Новодмитровская, д 2 к 5',
    point: {
      lat: 55.80292183046724,
      lon: 37.591327135255895,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 14708,
      },
      {
        code: 'per_3h',
        price: 11766,
      },
      {
        code: 'sum',
        price: 14708,
      },
    ],
  },
  {
    id: 5928,
    fias: 'г Москва, Ильменский проезд, д 14 к 8',
    point: {
      lat: 55.862722,
      lon: 37.543237,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4602,
      },
      {
        code: 'per_3h',
        price: 3682,
      },
      {
        code: 'sum',
        price: 4602,
      },
    ],
  },
  {
    id: 6048,
    fias: 'г Москва, ул Новодмитровская, д 2 к 6',
    point: {
      lat: 55.80276789619472,
      lon: 37.591664432540846,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6083,
      },
      {
        code: 'per_3h',
        price: 4866,
      },
      {
        code: 'sum',
        price: 6083,
      },
    ],
  },
  {
    id: 6219,
    fias: 'Московская обл, г Мытищи, ул Юбилейная, д 4',
    point: {
      lat: 55.915427,
      lon: 37.720645,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2900,
      },
      {
        code: 'per_3h',
        price: 2320,
      },
      {
        code: 'sum',
        price: 2900,
      },
    ],
  },
  {
    id: 6237,
    fias: 'Московская обл, г Мытищи, ул Институтская, д 6',
    point: {
      lat: 55.915916,
      lon: 37.740911,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4680,
      },
      {
        code: 'per_3h',
        price: 3744,
      },
      {
        code: 'sum',
        price: 4680,
      },
    ],
  },
  {
    id: 6239,
    fias: 'Московская обл, г Мытищи, ул Лётная, д 21',
    point: {
      lat: 55.909832,
      lon: 37.723277,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4080,
      },
      {
        code: 'per_3h',
        price: 3264,
      },
      {
        code: 'sum',
        price: 4200,
      },
    ],
  },
  {
    id: 6240,
    fias: 'Московская обл, г Мытищи, ул Шараповская, д 1 к 2',
    point: {
      lat: 55.910311,
      lon: 37.746966,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4200,
      },
      {
        code: 'per_3h',
        price: 3360,
      },
      {
        code: 'sum',
        price: 4200,
      },
    ],
  },
  {
    id: 6324,
    fias: 'г Москва, ул Новодмитровская, д 2 к 5',
    point: {
      lat: 55.803575,
      lon: 37.591036,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 8927,
      },
      {
        code: 'per_3h',
        price: 7142,
      },
      {
        code: 'sum',
        price: 1683,
      },
    ],
  },
  {
    id: 6325,
    fias: 'г Москва, ул Новодмитровская, д 2 к 5',
    point: {
      lat: 55.803078945172146,
      lon: 37.59158462732134,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6543,
      },
      {
        code: 'per_3h',
        price: 5234,
      },
      {
        code: 'sum',
        price: 5968,
      },
    ],
  },
  {
    id: 6327,
    fias: 'г Москва, ул Новодмитровская, д 2 к 6',
    point: {
      lat: 55.80274976746198,
      lon: 37.591911195770216,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6083,
      },
      {
        code: 'per_3h',
        price: 4866,
      },
      {
        code: 'sum',
        price: 6543,
      },
    ],
  },
  {
    id: 6328,
    fias: 'г Москва, ул Новодмитровская, д 2 к 1А',
    point: {
      lat: 55.805356,
      lon: 37.589617,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5190,
      },
      {
        code: 'per_3h',
        price: 4152,
      },
      {
        code: 'sum',
        price: 5190,
      },
    ],
  },
  {
    id: 6329,
    fias: 'г Москва, ул Новодмитровская, д 2 к 6',
    point: {
      lat: 55.803003,
      lon: 37.591503,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6768,
      },
      {
        code: 'per_3h',
        price: 5414,
      },
      {
        code: 'sum',
        price: 6768,
      },
    ],
  },
  {
    id: 6330,
    fias: 'г Москва, Ходынский б-р, д 2ж',
    point: {
      lat: 55.789127,
      lon: 37.536472,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 9085,
      },
      {
        code: 'per_3h',
        price: 7268,
      },
      {
        code: 'sum',
        price: 9085,
      },
    ],
  },
  {
    id: 6331,
    fias: 'г Москва, Ходынский б-р, д 2ж',
    point: {
      lat: 55.789127,
      lon: 37.536472,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 8720,
      },
      {
        code: 'per_3h',
        price: 6976,
      },
      {
        code: 'sum',
        price: 8248,
      },
    ],
  },
  {
    id: 6332,
    fias: 'г Москва, ул Новодмитровская, д 2кор, кв 6',
    point: {
      lat: 55.805756,
      lon: 37.588979,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6198,
      },
      {
        code: 'per_3h',
        price: 4958,
      },
      {
        code: 'sum',
        price: 6198,
      },
    ],
  },
  {
    id: 6336,
    fias: 'г Москва, ул Новодмитровская, д 2 к 7',
    point: {
      lat: 55.802401639299056,
      lon: 37.59193449999996,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6888,
      },
      {
        code: 'per_3h',
        price: 5510,
      },
      {
        code: 'sum',
        price: 6888,
      },
    ],
  },
  {
    id: 6354,
    fias: 'Московская обл, г Котельники, ул Строителей, д 5',
    point: {
      lat: 55.66835342485267,
      lon: 37.856284952779404,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3565,
      },
      {
        code: 'per_3h',
        price: 2852,
      },
      {
        code: 'sum',
        price: 3565,
      },
    ],
  },
  {
    id: 6355,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 5',
    point: {
      lat: 55.67273468000644,
      lon: 37.858055135581964,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4255,
      },
      {
        code: 'per_3h',
        price: 3404,
      },
      {
        code: 'sum',
        price: 4255,
      },
    ],
  },
  {
    id: 6356,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 1 к 2',
    point: {
      lat: 55.67202757645828,
      lon: 37.85563722358598,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4485,
      },
      {
        code: 'per_3h',
        price: 3588,
      },
      {
        code: 'sum',
        price: 4485,
      },
    ],
  },
  {
    id: 6357,
    fias: 'Московская обл, г Котельники, ул Строителей, д 5',
    point: {
      lat: 55.66845294362075,
      lon: 37.85612521871011,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4600,
      },
      {
        code: 'per_3h',
        price: 3680,
      },
      {
        code: 'sum',
        price: 4600,
      },
    ],
  },
  {
    id: 6358,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 1 к 2',
    point: {
      lat: 55.67203970300109,
      lon: 37.85593763099564,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4485,
      },
      {
        code: 'per_3h',
        price: 3588,
      },
      {
        code: 'sum',
        price: 4485,
      },
    ],
  },
  {
    id: 6359,
    fias: 'Московская обл, г Котельники, ул Строителей, д 5',
    point: {
      lat: 55.66844081596151,
      lon: 37.855803353628325,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3450,
      },
      {
        code: 'per_3h',
        price: 2760,
      },
      {
        code: 'sum',
        price: 3450,
      },
    ],
  },
  {
    id: 6360,
    fias: 'Московская обл, г Котельники, ул Строителей, д 5',
    point: {
      lat: 55.66853177331378,
      lon: 37.85571752293985,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4025,
      },
      {
        code: 'per_3h',
        price: 3220,
      },
      {
        code: 'sum',
        price: 4025,
      },
    ],
  },
  {
    id: 6361,
    fias: 'Московская обл, г Котельники, ул Строителей, д 5',
    point: {
      lat: 55.66850145421994,
      lon: 37.85548148854654,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3450,
      },
      {
        code: 'per_3h',
        price: 2760,
      },
      {
        code: 'sum',
        price: 3450,
      },
    ],
  },
  {
    id: 6362,
    fias: 'Московская обл, г Котельники, ул Строителей, д 5',
    point: {
      lat: 55.668610602847316,
      lon: 37.855374200185956,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3450,
      },
      {
        code: 'per_3h',
        price: 2760,
      },
      {
        code: 'sum',
        price: 3450,
      },
    ],
  },
  {
    id: 6363,
    fias: 'Московская обл, г Котельники, мкр Парковый, д 1 к 21',
    point: {
      lat: 55.657321,
      lon: 37.876179,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4370,
      },
      {
        code: 'per_3h',
        price: 3496,
      },
      {
        code: 'sum',
        price: 4370,
      },
    ],
  },
  {
    id: 6364,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 5',
    point: {
      lat: 55.67279228000578,
      lon: 37.858151695106486,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4945,
      },
      {
        code: 'per_3h',
        price: 3956,
      },
      {
        code: 'sum',
        price: 4945,
      },
    ],
  },
  {
    id: 6365,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 5',
    point: {
      lat: 55.672789248428984,
      lon: 37.85798539814757,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4945,
      },
      {
        code: 'per_3h',
        price: 3956,
      },
      {
        code: 'sum',
        price: 4945,
      },
    ],
  },
  {
    id: 6366,
    fias: 'Московская обл, г Котельники, ул Строителей, д 5',
    point: {
      lat: 55.66855602857185,
      lon: 37.855138165792646,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3450,
      },
      {
        code: 'per_3h',
        price: 2760,
      },
      {
        code: 'sum',
        price: 3450,
      },
    ],
  },
  {
    id: 6367,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 5',
    point: {
      lat: 55.672862006206834,
      lon: 37.85798539814757,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4600,
      },
      {
        code: 'per_3h',
        price: 3680,
      },
      {
        code: 'sum',
        price: 4600,
      },
    ],
  },
  {
    id: 6368,
    fias: 'Московская обл, г Котельники, ул Строителей, д 5',
    point: {
      lat: 55.66867730463573,
      lon: 37.85500941975994,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3450,
      },
      {
        code: 'per_3h',
        price: 2760,
      },
      {
        code: 'sum',
        price: 3450,
      },
    ],
  },
  {
    id: 6369,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 5',
    point: {
      lat: 55.67282865890884,
      lon: 37.8578298300247,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4600,
      },
      {
        code: 'per_3h',
        price: 3680,
      },
      {
        code: 'sum',
        price: 4600,
      },
    ],
  },
  {
    id: 6370,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 5',
    point: {
      lat: 55.672892321907476,
      lon: 37.857867380950914,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4945,
      },
      {
        code: 'per_3h',
        price: 3956,
      },
      {
        code: 'sum',
        price: 4945,
      },
    ],
  },
  {
    id: 6371,
    fias: 'Московская обл, г Котельники, ул Строителей, д 5',
    point: {
      lat: 55.66864698565515,
      lon: 37.854805571874806,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4025,
      },
      {
        code: 'per_3h',
        price: 3220,
      },
      {
        code: 'sum',
        price: 4025,
      },
    ],
  },
  {
    id: 6372,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 2 к 4',
    point: {
      lat: 55.674717,
      lon: 37.85453,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5175,
      },
      {
        code: 'per_3h',
        price: 4140,
      },
      {
        code: 'sum',
        price: 5175,
      },
    ],
  },
  {
    id: 6373,
    fias: 'Московская обл, г Котельники, ул Строителей, д 1',
    point: {
      lat: 55.66791923110224,
      lon: 37.858328294967635,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4025,
      },
      {
        code: 'per_3h',
        price: 3220,
      },
      {
        code: 'sum',
        price: 4025,
      },
    ],
  },
  {
    id: 6374,
    fias: 'Московская обл, г Котельники, ул Строителей, д 5',
    point: {
      lat: 55.66870155980322,
      lon: 37.85473047002238,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3450,
      },
      {
        code: 'per_3h',
        price: 2760,
      },
      {
        code: 'sum',
        price: 3450,
      },
    ],
  },
  {
    id: 6375,
    fias: 'Московская обл, г Котельники, ул Строителей, д 1',
    point: {
      lat: 55.66797077431788,
      lon: 37.85850532076261,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3680,
      },
      {
        code: 'per_3h',
        price: 2944,
      },
      {
        code: 'sum',
        price: 3680,
      },
    ],
  },
  {
    id: 6376,
    fias: 'Московская обл, г Котельники, ул Строителей, д 3',
    point: {
      lat: 55.6683,
      lon: 37.857423,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4485,
      },
      {
        code: 'per_3h',
        price: 3588,
      },
      {
        code: 'sum',
        price: 4485,
      },
    ],
  },
  {
    id: 6377,
    fias: 'г Москва, пр-кт Вернадского, д 64А',
    point: {
      lat: 55.672428,
      lon: 37.496731,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3910,
      },
      {
        code: 'per_3h',
        price: 3128,
      },
      {
        code: 'sum',
        price: 3910,
      },
    ],
  },
  {
    id: 6378,
    fias: 'Московская обл, г Котельники, ул Строителей, д 5',
    point: {
      lat: 55.66854996475875,
      lon: 37.85475192769449,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3450,
      },
      {
        code: 'per_3h',
        price: 2760,
      },
      {
        code: 'sum',
        price: 3450,
      },
    ],
  },
  {
    id: 6379,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 5',
    point: {
      lat: 55.67288322719977,
      lon: 37.857722541664096,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4485,
      },
      {
        code: 'per_3h',
        price: 3588,
      },
      {
        code: 'sum',
        price: 4485,
      },
    ],
  },
  {
    id: 6380,
    fias: 'Московская обл, г Котельники, ул Строителей, д 5',
    point: {
      lat: 55.668489326575816,
      lon: 37.854601723989674,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4025,
      },
      {
        code: 'per_3h',
        price: 3220,
      },
      {
        code: 'sum',
        price: 4025,
      },
    ],
  },
  {
    id: 6381,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 5',
    point: {
      lat: 55.672928700717144,
      lon: 37.85778155026244,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4025,
      },
      {
        code: 'per_3h',
        price: 3220,
      },
      {
        code: 'sum',
        price: 4025,
      },
    ],
  },
  {
    id: 6382,
    fias: 'Московская обл, г Котельники, ул Строителей, д 5',
    point: {
      lat: 55.66837411376825,
      lon: 37.854687554678144,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3450,
      },
      {
        code: 'per_3h',
        price: 2760,
      },
      {
        code: 'sum',
        price: 3450,
      },
    ],
  },
  {
    id: 6383,
    fias: 'Московская обл, г Котельники, ул Строителей, д 5',
    point: {
      lat: 55.66828315604796,
      lon: 37.854462249120886,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3565,
      },
      {
        code: 'per_3h',
        price: 2852,
      },
      {
        code: 'sum',
        price: 3565,
      },
    ],
  },
  {
    id: 6384,
    fias: 'Московская обл, г Котельники, ул Строителей, д 5',
    point: {
      lat: 55.66823464517697,
      lon: 37.85458026631754,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3450,
      },
      {
        code: 'per_3h',
        price: 2760,
      },
      {
        code: 'sum',
        price: 3450,
      },
    ],
  },
  {
    id: 6385,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 5',
    point: {
      lat: 55.672910511316545,
      lon: 37.85764207539365,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4945,
      },
      {
        code: 'per_3h',
        price: 3956,
      },
      {
        code: 'sum',
        price: 4945,
      },
    ],
  },
  {
    id: 6386,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 5 к 1',
    point: {
      lat: 55.673257249089765,
      lon: 37.858397686508134,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4945,
      },
      {
        code: 'per_3h',
        price: 3956,
      },
      {
        code: 'sum',
        price: 4945,
      },
    ],
  },
  {
    id: 6387,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 5 к 1',
    point: {
      lat: 55.67333606906274,
      lon: 37.858440601852365,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4945,
      },
      {
        code: 'per_3h',
        price: 3956,
      },
      {
        code: 'sum',
        price: 4945,
      },
    ],
  },
  {
    id: 6388,
    fias: 'Московская обл, г Люберцы, ул лётчика Ларюшина, д 4 к 2',
    point: {
      lat: 55.678108,
      lon: 37.866379,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4945,
      },
      {
        code: 'per_3h',
        price: 3956,
      },
      {
        code: 'sum',
        price: 4945,
      },
    ],
  },
  {
    id: 6389,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 5',
    point: {
      lat: 55.67296204792948,
      lon: 37.85770108399199,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4600,
      },
      {
        code: 'per_3h',
        price: 3680,
      },
      {
        code: 'sum',
        price: 4600,
      },
    ],
  },
  {
    id: 6390,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 1 к 4',
    point: {
      lat: 55.67130080153725,
      lon: 37.857528865081775,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4600,
      },
      {
        code: 'per_3h',
        price: 3680,
      },
      {
        code: 'sum',
        price: 4600,
      },
    ],
  },
  {
    id: 6391,
    fias: 'Московская обл, г Котельники, ул Строителей, д 5',
    point: {
      lat: 55.66797389821072,
      lon: 37.854515893301176,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3450,
      },
      {
        code: 'per_3h',
        price: 2760,
      },
      {
        code: 'sum',
        price: 3450,
      },
    ],
  },
  {
    id: 6392,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 2 к 4',
    point: {
      lat: 55.674717,
      lon: 37.85453,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4945,
      },
      {
        code: 'per_3h',
        price: 3956,
      },
      {
        code: 'sum',
        price: 4945,
      },
    ],
  },
  {
    id: 6393,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 5 к 1',
    point: {
      lat: 55.673311816780355,
      lon: 37.85827966931147,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4945,
      },
      {
        code: 'per_3h',
        price: 3956,
      },
      {
        code: 'sum',
        price: 4945,
      },
    ],
  },
  {
    id: 6394,
    fias: 'г Москва, ул Сосновая, д 11 стр 5',
    point: {
      lat: 55.805695,
      lon: 37.477884,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4255,
      },
      {
        code: 'per_3h',
        price: 3404,
      },
      {
        code: 'sum',
        price: 4255,
      },
    ],
  },
  {
    id: 6395,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 1 к 4',
    point: {
      lat: 55.67143419578913,
      lon: 37.85729283068846,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4945,
      },
      {
        code: 'per_3h',
        price: 3956,
      },
      {
        code: 'sum',
        price: 4945,
      },
    ],
  },
  {
    id: 6396,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 5 к 1',
    point: {
      lat: 55.673384573582226,
      lon: 37.858354771163896,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4945,
      },
      {
        code: 'per_3h',
        price: 3956,
      },
      {
        code: 'sum',
        price: 4945,
      },
    ],
  },
  {
    id: 6397,
    fias: 'Московская обл, г Котельники, ул Строителей, д 1',
    point: {
      lat: 55.66787375173771,
      lon: 37.85860188028713,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3680,
      },
      {
        code: 'per_3h',
        price: 2944,
      },
      {
        code: 'sum',
        price: 3680,
      },
    ],
  },
  {
    id: 6398,
    fias: 'г Москва, поселение Внуковское, тер СНТ Белая дача, д 25 к 1',
    point: {
      lat: 55.64321,
      lon: 37.259441,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4255,
      },
      {
        code: 'per_3h',
        price: 3404,
      },
      {
        code: 'sum',
        price: 4255,
      },
    ],
  },
  {
    id: 6399,
    fias: 'г Москва, Октябрьский пер, д 12',
    point: {
      lat: 55.787477,
      lon: 37.611823,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5520,
      },
      {
        code: 'per_3h',
        price: 4416,
      },
      {
        code: 'sum',
        price: 5520,
      },
    ],
  },
  {
    id: 6400,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 1 к 4',
    point: {
      lat: 55.67152514615356,
      lon: 37.857046067459095,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4600,
      },
      {
        code: 'per_3h',
        price: 3680,
      },
      {
        code: 'sum',
        price: 4600,
      },
    ],
  },
  {
    id: 6401,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 5 к 1',
    point: {
      lat: 55.67339063664291,
      lon: 37.85814019444271,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4600,
      },
      {
        code: 'per_3h',
        price: 3680,
      },
      {
        code: 'sum',
        price: 4600,
      },
    ],
  },
  {
    id: 6402,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 5 к 1',
    point: {
      lat: 55.67348764548562,
      lon: 37.85814019444271,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5290,
      },
      {
        code: 'per_3h',
        price: 4232,
      },
      {
        code: 'sum',
        price: 5290,
      },
    ],
  },
  {
    id: 6403,
    fias: 'Московская обл, г Котельники, ул Строителей, д 1',
    point: {
      lat: 55.66791923110224,
      lon: 37.85877354166411,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4600,
      },
      {
        code: 'per_3h',
        price: 3680,
      },
      {
        code: 'sum',
        price: 4600,
      },
    ],
  },
  {
    id: 6404,
    fias: 'Московская обл, г Котельники, ул Строителей, д 5',
    point: {
      lat: 55.66761006231851,
      lon: 37.85445152028483,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3565,
      },
      {
        code: 'per_3h',
        price: 2852,
      },
      {
        code: 'sum',
        price: 3565,
      },
    ],
  },
  {
    id: 6406,
    fias: 'г Москва, ул Сосновая, д 5 к 1',
    point: {
      lat: 55.806676,
      lon: 37.482744,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4945,
      },
      {
        code: 'per_3h',
        price: 3956,
      },
      {
        code: 'sum',
        price: 4945,
      },
    ],
  },
  {
    id: 6408,
    fias: 'Московская обл, г Котельники, ул Сосновая, д 5',
    point: {
      lat: 55.67295598480209,
      lon: 37.857577702377306,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5060,
      },
      {
        code: 'per_3h',
        price: 4048,
      },
      {
        code: 'sum',
        price: 5060,
      },
    ],
  },
  {
    id: 6579,
    fias: 'Московская обл, г Красногорск, Красногорский б-р, д 34',
    point: {
      lat: 55.822847,
      lon: 37.37748,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5160,
      },
      {
        code: 'per_3h',
        price: 4128,
      },
      {
        code: 'sum',
        price: 5160,
      },
    ],
  },
  {
    id: 6580,
    fias: 'Московская обл, г Красногорск, Красногорский б-р, д 34',
    point: {
      lat: 55.822847,
      lon: 37.37748,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4440,
      },
      {
        code: 'per_3h',
        price: 3552,
      },
      {
        code: 'sum',
        price: 4440,
      },
    ],
  },
  {
    id: 6581,
    fias: 'Московская обл, г Красногорск, Красногорский б-р, д 34',
    point: {
      lat: 55.822847,
      lon: 37.37748,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4800,
      },
      {
        code: 'per_3h',
        price: 3840,
      },
      {
        code: 'sum',
        price: 4800,
      },
    ],
  },
  {
    id: 6635,
    fias: 'г Москва, поселение Внуковское, ул Летчика Грицевца, д 14А',
    point: {
      lat: 55.625234299288344,
      lon: 37.31246366931149,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2990,
      },
      {
        code: 'per_3h',
        price: 2392,
      },
      {
        code: 'sum',
        price: 2990,
      },
    ],
  },
  {
    id: 6652,
    fias: 'г Москва, ул Трифоновская, д 57 к 1',
    point: {
      lat: 55.791294,
      lon: 37.630553,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5800,
      },
      {
        code: 'per_3h',
        price: 4640,
      },
      {
        code: 'sum',
        price: 5800,
      },
    ],
  },
  {
    id: 6653,
    fias: 'г Москва, 2-й Вольный пер, д 11 к 2',
    point: {
      lat: 55.774077,
      lon: 37.739725,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3200,
      },
      {
        code: 'per_3h',
        price: 2560,
      },
      {
        code: 'sum',
        price: 3200,
      },
    ],
  },
  {
    id: 6654,
    fias: 'г Москва, ул Ефремова, д 15/22',
    point: {
      lat: 55.723962,
      lon: 37.573294,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 7000,
      },
      {
        code: 'per_3h',
        price: 5600,
      },
      {
        code: 'sum',
        price: 7000,
      },
    ],
  },
  {
    id: 6655,
    fias: 'Московская обл, г Мытищи, ул Мира, д 41',
    point: {
      lat: 55.920689,
      lon: 37.716962,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 7500,
      },
      {
        code: 'per_3h',
        price: 6000,
      },
      {
        code: 'sum',
        price: 7500,
      },
    ],
  },
  {
    id: 6672,
    fias: 'Московская обл, г Красногорск, Красногорский б-р, д 34',
    point: {
      lat: 55.822847,
      lon: 37.37748,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5400,
      },
      {
        code: 'per_3h',
        price: 4320,
      },
      {
        code: 'sum',
        price: 5400,
      },
    ],
  },
  {
    id: 6698,
    fias: 'г Москва, пр-кт Вернадского, д 41 стр 1',
    point: {
      lat: 55.673783,
      lon: 37.50434,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3693,
      },
      {
        code: 'per_3h',
        price: 2954,
      },
      {
        code: 'sum',
        price: 3693,
      },
    ],
  },
  {
    id: 6699,
    fias: 'г Москва, пр-кт Вернадского, д 41 стр 1',
    point: {
      lat: 55.673783,
      lon: 37.50434,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3634,
      },
      {
        code: 'per_3h',
        price: 2907,
      },
      {
        code: 'sum',
        price: 3634,
      },
    ],
  },
  {
    id: 6700,
    fias: 'г Москва, пр-кт Вернадского, д 41 стр 1',
    point: {
      lat: 55.673783,
      lon: 37.50434,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3791,
      },
      {
        code: 'per_3h',
        price: 3033,
      },
      {
        code: 'sum',
        price: 3791,
      },
    ],
  },
  {
    id: 6701,
    fias: 'г Москва, пр-кт Вернадского, д 41 стр 1',
    point: {
      lat: 55.673783,
      lon: 37.50434,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3693,
      },
      {
        code: 'per_3h',
        price: 2954,
      },
      {
        code: 'sum',
        price: 3693,
      },
    ],
  },
  {
    id: 6734,
    fias: 'г Москва, ул Производственная, д 8 к 1',
    point: {
      lat: 55.646223,
      lon: 37.385978,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3881,
      },
      {
        code: 'per_3h',
        price: 3105,
      },
      {
        code: 'sum',
        price: 3881,
      },
    ],
  },
  {
    id: 6735,
    fias: 'г Москва, поселение Внуковское, ул Самуила Маршака, д 22',
    point: {
      lat: 55.635518,
      lon: 37.322179,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5167,
      },
      {
        code: 'per_3h',
        price: 4134,
      },
      {
        code: 'sum',
        price: 5167,
      },
    ],
  },
  {
    id: 6736,
    fias: 'г Москва, ул Чоботовская, д 2 к 1',
    point: {
      lat: 55.64256,
      lon: 37.357851,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5010,
      },
      {
        code: 'per_3h',
        price: 4008,
      },
      {
        code: 'sum',
        price: 5010,
      },
    ],
  },
  {
    id: 6737,
    fias: 'г Москва, ул Новопеределкинская, д 7',
    point: {
      lat: 55.639639,
      lon: 37.366341,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4696,
      },
      {
        code: 'per_3h',
        price: 3757,
      },
      {
        code: 'sum',
        price: 4696,
      },
    ],
  },
  {
    id: 6738,
    fias: 'г Москва, ул Чоботовская, д 2 к 2',
    point: {
      lat: 55.643429,
      lon: 37.359352,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3881,
      },
      {
        code: 'per_3h',
        price: 3105,
      },
      {
        code: 'sum',
        price: 3881,
      },
    ],
  },
  {
    id: 6739,
    fias: 'г Москва, поселение Внуковское, ул Анны Ахматовой, д 11 к 1',
    point: {
      lat: 55.634237,
      lon: 37.332169,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3768,
      },
      {
        code: 'per_3h',
        price: 3014,
      },
      {
        code: 'sum',
        price: 3768,
      },
    ],
  },
  {
    id: 6742,
    fias: 'г Москва, ул Чоботовская, д 2 к 1',
    point: {
      lat: 55.64256,
      lon: 37.357851,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5010,
      },
      {
        code: 'per_3h',
        price: 4008,
      },
      {
        code: 'sum',
        price: 5010,
      },
    ],
  },
  {
    id: 6743,
    fias: 'г Москва, ул Брусилова, д 35 к 1',
    point: {
      lat: 55.501381,
      lon: 37.596938,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3882,
      },
      {
        code: 'per_3h',
        price: 3106,
      },
      {
        code: 'sum',
        price: 3882,
      },
    ],
  },
  {
    id: 6744,
    fias: 'г Москва, ул Озёрная, д 44',
    point: {
      lat: 55.667665,
      lon: 37.440245,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4530,
      },
      {
        code: 'per_3h',
        price: 3624,
      },
      {
        code: 'sum',
        price: 4530,
      },
    ],
  },
  {
    id: 6745,
    fias: 'г Москва, поселение Внуковское, ул Лётчика Ульянина, д 3А',
    point: {
      lat: 55.625613,
      lon: 37.303997,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5638,
      },
      {
        code: 'per_3h',
        price: 4510,
      },
      {
        code: 'sum',
        price: 5638,
      },
    ],
  },
  {
    id: 6855,
    fias: 'г Москва, ул Сельскохозяйственная, д 17 к 1',
    point: {
      lat: 55.837419,
      lon: 37.636365,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3858,
      },
      {
        code: 'per_3h',
        price: 3086,
      },
      {
        code: 'sum',
        price: 3858,
      },
    ],
  },
  {
    id: 6856,
    fias: 'г Москва, ул Леонова 1-я',
    point: {
      lat: 55.843763,
      lon: 37.643381,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3963,
      },
      {
        code: 'per_3h',
        price: 3170,
      },
      {
        code: 'sum',
        price: 3963,
      },
    ],
  },
  {
    id: 6857,
    fias: 'г Москва, ул Сельскохозяйственная, д 17 к 1',
    point: {
      lat: 55.837419,
      lon: 37.636365,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3858,
      },
      {
        code: 'per_3h',
        price: 3086,
      },
      {
        code: 'sum',
        price: 3858,
      },
    ],
  },
  {
    id: 6858,
    fias: 'г Москва, ул Сельскохозяйственная, д 17 к 1',
    point: {
      lat: 55.837419,
      lon: 37.636365,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3858,
      },
      {
        code: 'per_3h',
        price: 3086,
      },
      {
        code: 'sum',
        price: 3858,
      },
    ],
  },
  {
    id: 6859,
    fias: 'г Москва, ул Гостиничная',
    point: {
      lat: 55.845476,
      lon: 37.580616,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5622,
      },
      {
        code: 'per_3h',
        price: 4498,
      },
      {
        code: 'sum',
        price: 5622,
      },
    ],
  },
  {
    id: 6860,
    fias: 'г Москва, Гостиничный проезд, д 8 к 1',
    point: {
      lat: 55.84550808923535,
      lon: 37.57660697553252,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2950,
      },
      {
        code: 'per_3h',
        price: 2360,
      },
      {
        code: 'sum',
        price: 2950,
      },
    ],
  },
  {
    id: 6917,
    fias: 'Московская обл, г Одинцово, рп Новоивановское, б-р Эйнштейна, д 4',
    point: {
      lat: 55.702084,
      lon: 37.364697,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 6918,
    fias: 'Московская обл, г Одинцово, рп Новоивановское, б-р Эйнштейна, д 1',
    point: {
      lat: 55.700689,
      lon: 37.357986,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 6919,
    fias: 'г Москва, поселение Филимонковское, кв-л 1',
    point: {
      lat: 55.583515,
      lon: 37.269556,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3315,
      },
      {
        code: 'per_3h',
        price: 2652,
      },
      {
        code: 'sum',
        price: 3315,
      },
    ],
  },
  {
    id: 6920,
    fias: 'Московская обл, г Одинцово, рп Новоивановское, б-р Эйнштейна, д 1',
    point: {
      lat: 55.700689,
      lon: 37.357986,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 6921,
    fias: 'Московская обл, г Одинцово, рп Новоивановское, б-р Эйнштейна, д 4',
    point: {
      lat: 55.702084,
      lon: 37.364697,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 6923,
    fias: 'Московская обл, г Одинцово, рп Новоивановское, б-р Эйнштейна, д 4',
    point: {
      lat: 55.702084,
      lon: 37.364697,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 6924,
    fias: 'г Москва, поселение Филимонковское, кв-л 1',
    point: {
      lat: 55.583515,
      lon: 37.269556,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 6925,
    fias: 'Московская обл, г Одинцово, ул Белорусская, д 10',
    point: {
      lat: 55.660673,
      lon: 37.299641,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3995,
      },
      {
        code: 'per_3h',
        price: 3196,
      },
      {
        code: 'sum',
        price: 3995,
      },
    ],
  },
  {
    id: 6926,
    fias: 'Московская обл, г Одинцово, ул Белорусская, д 2',
    point: {
      lat: 55.663771,
      lon: 37.301015,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3995,
      },
      {
        code: 'per_3h',
        price: 3196,
      },
      {
        code: 'sum',
        price: 3995,
      },
    ],
  },
  {
    id: 6927,
    fias: 'Московская обл, г Одинцово, рп Новоивановское, б-р Эйнштейна, д 4',
    point: {
      lat: 55.702084,
      lon: 37.364697,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 6928,
    fias: 'Московская обл, г Одинцово, рп Новоивановское, б-р Эйнштейна, д 4',
    point: {
      lat: 55.702084,
      lon: 37.364697,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 6929,
    fias: 'Московская обл, г Одинцово, рп Новоивановское, б-р Эйнштейна, д 4',
    point: {
      lat: 55.702084,
      lon: 37.364697,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 6930,
    fias: 'Московская обл, г Одинцово, рп Новоивановское, б-р Эйнштейна, д 4',
    point: {
      lat: 55.702084,
      lon: 37.364697,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 6931,
    fias: 'Московская обл, г Одинцово, рп Новоивановское, б-р Эйнштейна, д 4',
    point: {
      lat: 55.702084,
      lon: 37.364697,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 6932,
    fias: 'г Москва, поселение Филимонковское, кв-л 1',
    point: {
      lat: 55.583515,
      lon: 37.269556,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 6933,
    fias: 'Московская обл, г Одинцово, рп Новоивановское, б-р Эйнштейна, д 1',
    point: {
      lat: 55.700689,
      lon: 37.357986,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3145,
      },
      {
        code: 'per_3h',
        price: 2516,
      },
      {
        code: 'sum',
        price: 3145,
      },
    ],
  },
  {
    id: 7127,
    fias: 'г Москва, ул Люсиновская, д 60',
    point: {
      lat: 55.718065,
      lon: 37.621785,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 11000,
      },
      {
        code: 'per_3h',
        price: 8800,
      },
      {
        code: 'sum',
        price: 11000,
      },
    ],
  },
  {
    id: 7169,
    fias: 'Московская обл, г Видное, ул Олимпийская, д 6',
    point: {
      lat: 55.54563,
      lon: 37.698996,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3750,
      },
      {
        code: 'per_3h',
        price: 3000,
      },
      {
        code: 'sum',
        price: 3750,
      },
    ],
  },
  {
    id: 5162,
    fias: 'г Москва, Ходынский б-р, д 2',
    point: {
      lat: 55.78873665906824,
      lon: 37.536445261901804,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6100,
      },
      {
        code: 'per_3h',
        price: 4880,
      },
      {
        code: 'sum',
        price: 6100,
      },
    ],
  },
  {
    id: 5163,
    fias: 'г Москва, Ходынский б-р, д 2',
    point: {
      lat: 55.78900264239562,
      lon: 37.53655255026241,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 9775,
      },
      {
        code: 'per_3h',
        price: 7820,
      },
      {
        code: 'sum',
        price: 9775,
      },
    ],
  },
  {
    id: 5164,
    fias: 'г Москва, Ходынский б-р, д 2',
    point: {
      lat: 55.7892081737176,
      lon: 37.53662765211483,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6900,
      },
      {
        code: 'per_3h',
        price: 5520,
      },
      {
        code: 'sum',
        price: 6900,
      },
    ],
  },
  {
    id: 5165,
    fias: 'г Москва, Ходынский б-р, д 2',
    point: {
      lat: 55.78947415381174,
      lon: 37.536734940475434,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5750,
      },
      {
        code: 'per_3h',
        price: 4600,
      },
      {
        code: 'sum',
        price: 5750,
      },
    ],
  },
  {
    id: 5166,
    fias: 'г Москва, Ходынский б-р, д 2',
    point: {
      lat: 55.789734087141625,
      lon: 37.5368207711639,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6095,
      },
      {
        code: 'per_3h',
        price: 4876,
      },
      {
        code: 'sum',
        price: 6095,
      },
    ],
  },
  {
    id: 5167,
    fias: 'г Москва, Ходынский б-р, д 2',
    point: {
      lat: 55.7895829633246,
      lon: 37.53729283995051,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 8395,
      },
      {
        code: 'per_3h',
        price: 6716,
      },
      {
        code: 'sum',
        price: 8395,
      },
    ],
  },
  {
    id: 5168,
    fias: 'г Москва, Ходынский б-р, д 2',
    point: {
      lat: 55.788621802067574,
      lon: 37.53694951719662,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6095,
      },
      {
        code: 'per_3h',
        price: 4876,
      },
      {
        code: 'sum',
        price: 6095,
      },
    ],
  },
  {
    id: 5169,
    fias: 'г Москва, Ходынский б-р, д 20А',
    point: {
      lat: 55.790801376840086,
      lon: 37.52315204384209,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6095,
      },
      {
        code: 'per_3h',
        price: 4876,
      },
      {
        code: 'sum',
        price: 6095,
      },
    ],
  },
  {
    id: 5170,
    fias: 'г Москва, Ходынский б-р, д 20А',
    point: {
      lat: 55.79055958510352,
      lon: 37.523141315006036,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6095,
      },
      {
        code: 'per_3h',
        price: 4876,
      },
      {
        code: 'sum',
        price: 6095,
      },
    ],
  },
  {
    id: 5171,
    fias: 'г Москва, Ходынский б-р, д 20А',
    point: {
      lat: 55.79032383670912,
      lon: 37.523388078235406,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6095,
      },
      {
        code: 'per_3h',
        price: 4876,
      },
      {
        code: 'sum',
        price: 6095,
      },
    ],
  },
  {
    id: 5172,
    fias: 'г Москва, Ходынский б-р, д 20А',
    point: {
      lat: 55.79025129845335,
      lon: 37.52388160469414,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 10350,
      },
      {
        code: 'per_3h',
        price: 8280,
      },
      {
        code: 'sum',
        price: 10350,
      },
    ],
  },
  {
    id: 5173,
    fias: 'г Москва, Ходынский б-р, д 20А',
    point: {
      lat: 55.790190849803245,
      lon: 37.52441804649713,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 10350,
      },
      {
        code: 'per_3h',
        price: 8280,
      },
      {
        code: 'sum',
        price: 10350,
      },
    ],
  },
  {
    id: 5174,
    fias: 'г Москва, Ходынский б-р, д 20А',
    point: {
      lat: 55.79014249081532,
      lon: 37.52489011528374,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6325,
      },
      {
        code: 'per_3h',
        price: 5060,
      },
      {
        code: 'sum',
        price: 6325,
      },
    ],
  },
  {
    id: 5175,
    fias: 'г Москва, Ходынский б-р, д 20А',
    point: {
      lat: 55.79032383670912,
      lon: 37.52522270920161,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6325,
      },
      {
        code: 'per_3h',
        price: 5060,
      },
      {
        code: 'sum',
        price: 6325,
      },
    ],
  },
  {
    id: 5176,
    fias: 'г Москва, Ходынский б-р, д 20А',
    point: {
      lat: 55.79061398837566,
      lon: 37.52536218407037,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6900,
      },
      {
        code: 'per_3h',
        price: 5520,
      },
      {
        code: 'sum',
        price: 6900,
      },
    ],
  },
  {
    id: 5177,
    fias: 'г Москва, Ходынский б-р, д 20А',
    point: {
      lat: 55.790837645470575,
      lon: 37.52544801475884,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6095,
      },
      {
        code: 'per_3h',
        price: 4876,
      },
      {
        code: 'sum',
        price: 6095,
      },
    ],
  },
  {
    id: 5178,
    fias: 'г Москва, Ходынский б-р, д 20А',
    point: {
      lat: 55.7910673460094,
      lon: 37.52553384544731,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6900,
      },
      {
        code: 'per_3h',
        price: 5520,
      },
      {
        code: 'sum',
        price: 6900,
      },
    ],
  },
  {
    id: 5179,
    fias: 'г Москва, Ходынский б-р, д 20А',
    point: {
      lat: 55.791192420271976,
      lon: 37.525200406657945,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6900,
      },
      {
        code: 'per_3h',
        price: 5520,
      },
      {
        code: 'sum',
        price: 6900,
      },
    ],
  },
  {
    id: 5180,
    fias: 'г Москва, Ходынский б-р, д 20А',
    point: {
      lat: 55.79121659911896,
      lon: 37.52465323601889,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 8050,
      },
      {
        code: 'per_3h',
        price: 6440,
      },
      {
        code: 'sum',
        price: 8050,
      },
    ],
  },
  {
    id: 5181,
    fias: 'г Москва, Ходынский б-р, д 20А',
    point: {
      lat: 55.79121337880207,
      lon: 37.52401602894647,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6325,
      },
      {
        code: 'per_3h',
        price: 5060,
      },
      {
        code: 'sum',
        price: 6325,
      },
    ],
  },
  {
    id: 5182,
    fias: 'г Москва, Ходынский б-р, д 20А',
    point: {
      lat: 55.791165021089,
      lon: 37.52430570752007,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 9200,
      },
      {
        code: 'per_3h',
        price: 7360,
      },
      {
        code: 'sum',
        price: 9200,
      },
    ],
  },
  {
    id: 5183,
    fias: 'г Москва, Ходынский б-р, д 20А',
    point: {
      lat: 55.791219423511954,
      lon: 37.523211366241995,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 9200,
      },
      {
        code: 'per_3h',
        price: 7360,
      },
      {
        code: 'sum',
        price: 9200,
      },
    ],
  },
  {
    id: 5203,
    fias: 'Московская обл, г Подольск, Революционный пр-кт, д 25/12',
    point: {
      lat: 55.430896,
      lon: 37.555193,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3668,
      },
      {
        code: 'per_3h',
        price: 2934,
      },
      {
        code: 'sum',
        price: 3668,
      },
    ],
  },
  {
    id: 5204,
    fias: 'Московская обл, г Подольск, Революционный пр-кт, д 25/12',
    point: {
      lat: 55.430896,
      lon: 37.555193,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3668,
      },
      {
        code: 'per_3h',
        price: 2934,
      },
      {
        code: 'sum',
        price: 3668,
      },
    ],
  },
  {
    id: 5205,
    fias: 'Московская обл, г Подольск, Революционный пр-кт, д 25/12',
    point: {
      lat: 55.430896,
      lon: 37.555193,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3783,
      },
      {
        code: 'per_3h',
        price: 3026,
      },
      {
        code: 'sum',
        price: 3783,
      },
    ],
  },
  {
    id: 5206,
    fias: 'Московская обл, г Подольск, Революционный пр-кт, д 25/12',
    point: {
      lat: 55.430896,
      lon: 37.555193,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3668,
      },
      {
        code: 'per_3h',
        price: 2934,
      },
      {
        code: 'sum',
        price: 3668,
      },
    ],
  },
  {
    id: 5207,
    fias: 'Московская обл, г Подольск, Революционный пр-кт, д 25/12',
    point: {
      lat: 55.430896,
      lon: 37.555193,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3668,
      },
      {
        code: 'per_3h',
        price: 2934,
      },
      {
        code: 'sum',
        price: 3668,
      },
    ],
  },
  {
    id: 5208,
    fias: 'Московская обл, г Подольск, Революционный пр-кт, д 25/12',
    point: {
      lat: 55.430896,
      lon: 37.555193,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3668,
      },
      {
        code: 'per_3h',
        price: 2934,
      },
      {
        code: 'sum',
        price: 3668,
      },
    ],
  },
  {
    id: 5209,
    fias: 'Московская обл, г Подольск, мкр Климовск, Больничный проезд, д 2 к 2',
    point: {
      lat: 55.36753,
      lon: 37.519027,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3438,
      },
      {
        code: 'per_3h',
        price: 2750,
      },
      {
        code: 'sum',
        price: 3438,
      },
    ],
  },
  {
    id: 5210,
    fias: 'Московская обл, г Подольск, мкр Львовский, Больничный проезд, д 2',
    point: {
      lat: 55.313962,
      lon: 37.526995,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3668,
      },
      {
        code: 'per_3h',
        price: 2934,
      },
      {
        code: 'sum',
        price: 3668,
      },
    ],
  },
  {
    id: 5211,
    fias: 'Московская обл, г Подольск, мкр Львовский, Больничный проезд, д 2',
    point: {
      lat: 55.313962,
      lon: 37.526995,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3668,
      },
      {
        code: 'per_3h',
        price: 2934,
      },
      {
        code: 'sum',
        price: 3668,
      },
    ],
  },
  {
    id: 5212,
    fias: 'Московская обл, г Подольск, мкр Львовский, Больничный проезд, д 2',
    point: {
      lat: 55.313962,
      lon: 37.526995,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3438,
      },
      {
        code: 'per_3h',
        price: 2750,
      },
      {
        code: 'sum',
        price: 3438,
      },
    ],
  },
  {
    id: 5213,
    fias: 'Московская обл, г Подольск, мкр Климовск, пр-кт 50 лет Октября, д 14/6',
    point: {
      lat: 55.374253,
      lon: 37.53897,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3668,
      },
      {
        code: 'per_3h',
        price: 2934,
      },
      {
        code: 'sum',
        price: 3668,
      },
    ],
  },
  {
    id: 5214,
    fias: 'Московская обл, г Подольск, мкр Климовск, пр-кт 50 лет Октября, д 14/6',
    point: {
      lat: 55.374253,
      lon: 37.53897,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3668,
      },
      {
        code: 'per_3h',
        price: 2934,
      },
      {
        code: 'sum',
        price: 3668,
      },
    ],
  },
  {
    id: 5215,
    fias: 'Московская обл, г Подольск, мкр Климовск, пр-кт 50 лет Октября, д 14/6',
    point: {
      lat: 55.374253,
      lon: 37.53897,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3668,
      },
      {
        code: 'per_3h',
        price: 2934,
      },
      {
        code: 'sum',
        price: 3668,
      },
    ],
  },
  {
    id: 5216,
    fias: 'Московская обл, г Подольск, мкр Климовск, пр-кт 50 лет Октября, д 14/6',
    point: {
      lat: 55.374253,
      lon: 37.53897,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3668,
      },
      {
        code: 'per_3h',
        price: 2934,
      },
      {
        code: 'sum',
        price: 3668,
      },
    ],
  },
  {
    id: 5217,
    fias: 'Московская обл, г Подольск, ул Юбилейная, д 7',
    point: {
      lat: 55.422278,
      lon: 37.498204,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3898,
      },
      {
        code: 'per_3h',
        price: 3118,
      },
      {
        code: 'sum',
        price: 3898,
      },
    ],
  },
  {
    id: 5218,
    fias: 'Московская обл, г Подольск, Октябрьский пр-кт, д 1а',
    point: {
      lat: 55.420852,
      lon: 37.506145,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3668,
      },
      {
        code: 'per_3h',
        price: 2934,
      },
      {
        code: 'sum',
        price: 3668,
      },
    ],
  },
  {
    id: 5219,
    fias: 'Московская обл, г Подольск, Красногвардейский б-р, д 15а',
    point: {
      lat: 55.433946,
      lon: 37.498725,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3335,
      },
      {
        code: 'per_3h',
        price: 2668,
      },
      {
        code: 'sum',
        price: 3335,
      },
    ],
  },
  {
    id: 5220,
    fias: 'Московская обл, г Подольск, ул 43-й Армии, д 19',
    point: {
      lat: 55.420469,
      lon: 37.494288,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3208,
      },
      {
        code: 'per_3h',
        price: 2566,
      },
      {
        code: 'sum',
        price: 3208,
      },
    ],
  },
  {
    id: 5221,
    fias: 'Московская обл, г Подольск, мкр Кузнечики, ул Генерала Стрельбицкого, д 9',
    point: {
      lat: 55.424132,
      lon: 37.484631,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3208,
      },
      {
        code: 'per_3h',
        price: 2566,
      },
      {
        code: 'sum',
        price: 3208,
      },
    ],
  },
  {
    id: 5222,
    fias: 'Московская обл, г Подольск, ул Юбилейная, д 7а',
    point: {
      lat: 55.422263,
      lon: 37.496138,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3438,
      },
      {
        code: 'per_3h',
        price: 2750,
      },
      {
        code: 'sum',
        price: 3438,
      },
    ],
  },
  {
    id: 5223,
    fias: 'Московская обл, г Подольск, ул Юбилейная, д 7а',
    point: {
      lat: 55.422263,
      lon: 37.496138,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3668,
      },
      {
        code: 'per_3h',
        price: 2934,
      },
      {
        code: 'sum',
        price: 3668,
      },
    ],
  },
  {
    id: 5224,
    fias: 'Московская обл, г Подольск, ул Юбилейная, д 7а',
    point: {
      lat: 55.422263,
      lon: 37.496138,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3438,
      },
      {
        code: 'per_3h',
        price: 2750,
      },
      {
        code: 'sum',
        price: 3438,
      },
    ],
  },
  {
    id: 5225,
    fias: 'Московская обл, г Подольск, ул 43-й Армии, д 23',
    point: {
      lat: 55.417526,
      lon: 37.496776,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3438,
      },
      {
        code: 'per_3h',
        price: 2750,
      },
      {
        code: 'sum',
        price: 3438,
      },
    ],
  },
  {
    id: 5226,
    fias: 'Московская обл, г Подольск, ул 43-й Армии, д 23',
    point: {
      lat: 55.417526,
      lon: 37.496776,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3668,
      },
      {
        code: 'per_3h',
        price: 2934,
      },
      {
        code: 'sum',
        price: 3668,
      },
    ],
  },
  {
    id: 5227,
    fias: 'Московская обл, г Подольск, ул 43-й Армии, д 23',
    point: {
      lat: 55.417526,
      lon: 37.496776,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4358,
      },
      {
        code: 'per_3h',
        price: 3486,
      },
      {
        code: 'sum',
        price: 4358,
      },
    ],
  },
  {
    id: 5228,
    fias: 'Московская обл, г Подольск, мкр Кузнечики, ул Генерала Варенникова, д 2',
    point: {
      lat: 55.418962,
      lon: 37.489284,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3208,
      },
      {
        code: 'per_3h',
        price: 2566,
      },
      {
        code: 'sum',
        price: 3208,
      },
    ],
  },
  {
    id: 5229,
    fias: 'Московская обл, г Подольск, мкр Кузнечики, Флотский проезд, д 1',
    point: {
      lat: 55.417971,
      lon: 37.476025,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4013,
      },
      {
        code: 'per_3h',
        price: 3210,
      },
      {
        code: 'sum',
        price: 4013,
      },
    ],
  },
  {
    id: 5230,
    fias: 'Московская обл, г Подольск, ул Ватутина, д 36',
    point: {
      lat: 55.412319,
      lon: 37.537622,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3323,
      },
      {
        code: 'per_3h',
        price: 2658,
      },
      {
        code: 'sum',
        price: 3323,
      },
    ],
  },
  {
    id: 5231,
    fias: 'Московская обл, г Подольск, Электромонтажный проезд, д 7',
    point: {
      lat: 55.4089,
      lon: 37.559883,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3668,
      },
      {
        code: 'per_3h',
        price: 2934,
      },
      {
        code: 'sum',
        price: 3668,
      },
    ],
  },
  {
    id: 5232,
    fias: 'Московская обл, г Подольск, Электромонтажный проезд, д 11',
    point: {
      lat: 55.408015,
      lon: 37.560565,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4013,
      },
      {
        code: 'per_3h',
        price: 3210,
      },
      {
        code: 'sum',
        price: 4013,
      },
    ],
  },
  {
    id: 5233,
    fias: 'Московская обл, г Подольск, ул Давыдова, д 5',
    point: {
      lat: 55.404269,
      lon: 37.560889,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3438,
      },
      {
        code: 'per_3h',
        price: 2750,
      },
      {
        code: 'sum',
        price: 3438,
      },
    ],
  },
  {
    id: 5234,
    fias: 'Московская обл, г Подольск, поселок Сосновый Бор, ул Объездная дорога, д 1',
    point: {
      lat: 55.391396,
      lon: 37.56088,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3438,
      },
      {
        code: 'per_3h',
        price: 2750,
      },
      {
        code: 'sum',
        price: 3438,
      },
    ],
  },
  {
    id: 5235,
    fias: 'Московская обл, г Подольск, поселок Сосновый Бор, ул Объездная дорога, д 1',
    point: {
      lat: 55.391396,
      lon: 37.56088,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3323,
      },
      {
        code: 'per_3h',
        price: 2658,
      },
      {
        code: 'sum',
        price: 3323,
      },
    ],
  },
  {
    id: 5236,
    fias: 'Московская обл, г Видное, Битцевский проезд, д 11',
    point: {
      lat: 55.54185855175018,
      lon: 37.70745496197124,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3323,
      },
      {
        code: 'per_3h',
        price: 2658,
      },
      {
        code: 'sum',
        price: 3323,
      },
    ],
  },
  {
    id: 5237,
    fias: 'Московская обл, г Видное, Битцевский проезд, д 11',
    point: {
      lat: 55.54192851211701,
      lon: 37.70763735218426,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3208,
      },
      {
        code: 'per_3h',
        price: 2566,
      },
      {
        code: 'sum',
        price: 3208,
      },
    ],
  },
  {
    id: 5238,
    fias: 'Московская обл, г Видное, Битцевский проезд, д 11',
    point: {
      lat: 55.5420075975985,
      lon: 37.707492512897446,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3323,
      },
      {
        code: 'per_3h',
        price: 2658,
      },
      {
        code: 'sum',
        price: 3323,
      },
    ],
  },
  {
    id: 5239,
    fias: 'Московская обл, г Видное, Битцевский проезд, д 11',
    point: {
      lat: 55.54207147421695,
      lon: 37.70762125893015,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3323,
      },
      {
        code: 'per_3h',
        price: 2658,
      },
      {
        code: 'sum',
        price: 3323,
      },
    ],
  },
  {
    id: 6004,
    fias: 'г Москва, пр-кт Андропова, д 10',
    point: {
      lat: 55.69382445656188,
      lon: 37.665698457672086,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 7700,
      },
      {
        code: 'per_3h',
        price: 6160,
      },
      {
        code: 'sum',
        price: 7700,
      },
    ],
  },
  {
    id: 6005,
    fias: 'г Москва, пр-кт Андропова, д 10',
    point: {
      lat: 55.69398201311323,
      lon: 37.66555898280332,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 7900,
      },
      {
        code: 'per_3h',
        price: 6320,
      },
      {
        code: 'sum',
        price: 7900,
      },
    ],
  },
  {
    id: 6006,
    fias: 'г Москва, пр-кт Андропова, д 10',
    point: {
      lat: 55.69405473130646,
      lon: 37.66574137301632,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6000,
      },
      {
        code: 'per_3h',
        price: 4800,
      },
      {
        code: 'sum',
        price: 6000,
      },
    ],
  },
  {
    id: 6007,
    fias: 'г Москва, пр-кт Андропова, д 10',
    point: {
      lat: 55.694163808341614,
      lon: 37.66556971163937,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 8500,
      },
      {
        code: 'per_3h',
        price: 6800,
      },
      {
        code: 'sum',
        price: 8500,
      },
    ],
  },
  {
    id: 6008,
    fias: 'г Москва, пр-кт Андропова, д 10',
    point: {
      lat: 55.69426076544959,
      lon: 37.66574137301632,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 8300,
      },
      {
        code: 'per_3h',
        price: 6640,
      },
      {
        code: 'sum',
        price: 8300,
      },
    ],
  },
  {
    id: 6009,
    fias: 'г Москва, пр-кт Андропова, д 10',
    point: {
      lat: 55.694369841907395,
      lon: 37.66558044047542,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6900,
      },
      {
        code: 'per_3h',
        price: 5520,
      },
      {
        code: 'sum',
        price: 6900,
      },
    ],
  },
  {
    id: 6010,
    fias: 'г Москва, пр-кт Андропова, д 10',
    point: {
      lat: 55.694454678941064,
      lon: 37.6657735595245,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 7890,
      },
      {
        code: 'per_3h',
        price: 6312,
      },
      {
        code: 'sum',
        price: 7890,
      },
    ],
  },
  {
    id: 6011,
    fias: 'г Москва, пр-кт Андропова, д 10',
    point: {
      lat: 55.69455769509051,
      lon: 37.665644813491795,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6490,
      },
      {
        code: 'per_3h',
        price: 5192,
      },
      {
        code: 'sum',
        price: 6490,
      },
    ],
  },
  {
    id: 6012,
    fias: 'г Москва, пр-кт Андропова, д 10',
    point: {
      lat: 55.69449709738854,
      lon: 37.665730644180265,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 9500,
      },
      {
        code: 'per_3h',
        price: 7600,
      },
      {
        code: 'sum',
        price: 9500,
      },
    ],
  },
  {
    id: 6013,
    fias: 'Московская обл, г Химки, ул Кирова, д 10 к 2',
    point: {
      lat: 55.891481,
      lon: 37.451025,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4900,
      },
      {
        code: 'per_3h',
        price: 3920,
      },
      {
        code: 'sum',
        price: 4900,
      },
    ],
  },
  {
    id: 6014,
    fias: 'г Москва, ул Нижегородская, д 32 стр 15',
    point: {
      lat: 55.73653079601026,
      lon: 37.695043954345316,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 4900,
      },
      {
        code: 'per_3h',
        price: 3920,
      },
      {
        code: 'sum',
        price: 4900,
      },
    ],
  },
  {
    id: 6015,
    fias: 'г Москва, пр-кт Андропова, д 10',
    point: {
      lat: 55.694521336480655,
      lon: 37.66547315211485,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 5590,
      },
      {
        code: 'per_3h',
        price: 4472,
      },
      {
        code: 'sum',
        price: 5590,
      },
    ],
  },
  {
    id: 6040,
    fias: 'Краснодарский край, г Сочи, ул Бакинская, д 9/1',
    point: {
      lat: 43.418031,
      lon: 39.9699146,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 6468,
      },
      {
        code: 'per_3h',
        price: 5174,
      },
      {
        code: 'sum',
        price: 6468,
      },
    ],
  },
  {
    id: 6041,
    fias: 'Краснодарский край, пгт Сириус, ул Станиславского, д 11',
    point: {
      lat: 43.421059,
      lon: 39.929809,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 12937,
      },
      {
        code: 'per_3h',
        price: 10350,
      },
      {
        code: 'sum',
        price: 12937,
      },
    ],
  },
  {
    id: 6783,
    fias: 'г Москва, Дмитровское шоссе, д 81',
    point: {
      lat: 55.86183181673937,
      lon: 37.549789936171905,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2596,
      },
      {
        code: 'per_3h',
        price: 2077,
      },
      {
        code: 'sum',
        price: 2596,
      },
    ],
  },
  {
    id: 6784,
    fias: 'г Москва, Дмитровское шоссе, д 81',
    point: {
      lat: 55.861895170539526,
      lon: 37.549639732467064,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2596,
      },
      {
        code: 'per_3h',
        price: 2077,
      },
      {
        code: 'sum',
        price: 2596,
      },
    ],
  },
  {
    id: 6785,
    fias: 'г Москва, Дмитровское шоссе, д 81',
    point: {
      lat: 55.862033945167774,
      lon: 37.54928031645907,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2596,
      },
      {
        code: 'per_3h',
        price: 2077,
      },
      {
        code: 'sum',
        price: 2596,
      },
    ],
  },
  {
    id: 6786,
    fias: 'г Москва, Дмитровское шоссе, д 81',
    point: {
      lat: 55.86176242912491,
      lon: 37.54990795336856,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2596,
      },
      {
        code: 'per_3h',
        price: 2077,
      },
      {
        code: 'sum',
        price: 2596,
      },
    ],
  },
  {
    id: 6787,
    fias: 'г Москва, ул Дегунинская, д 2 стр 2',
    point: {
      lat: 55.864722,
      lon: 37.540964,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2832,
      },
      {
        code: 'per_3h',
        price: 2266,
      },
      {
        code: 'sum',
        price: 2832,
      },
    ],
  },
  {
    id: 6788,
    fias: 'г Москва, ул Дегунинская, д 2 стр 2',
    point: {
      lat: 55.864722,
      lon: 37.540964,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 3540,
      },
      {
        code: 'per_3h',
        price: 2832,
      },
      {
        code: 'sum',
        price: 3540,
      },
    ],
  },
  {
    id: 6789,
    fias: 'Московская обл, г Одинцово, ул Сколковская, д 3А',
    point: {
      lat: 55.696392,
      lon: 37.322925,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2596,
      },
      {
        code: 'per_3h',
        price: 2077,
      },
      {
        code: 'sum',
        price: 2596,
      },
    ],
  },
  {
    id: 6790,
    fias: 'Московская обл, г Одинцово, ул Сколковская, д 3А',
    point: {
      lat: 55.696392,
      lon: 37.322925,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2596,
      },
      {
        code: 'per_3h',
        price: 2077,
      },
      {
        code: 'sum',
        price: 2596,
      },
    ],
  },
  {
    id: 6791,
    fias: 'г Москва, Каширское шоссе, д 65 к 1',
    point: {
      lat: 55.600893,
      lon: 37.724077,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2714,
      },
      {
        code: 'per_3h',
        price: 2171,
      },
      {
        code: 'sum',
        price: 2714,
      },
    ],
  },
  {
    id: 6792,
    fias: 'г Москва, Каширское шоссе, д 65 к 1',
    point: {
      lat: 55.600893,
      lon: 37.724077,
    },
    apartment_access_type: {
      id: 2,
    },
    apartments_tariffs: [
      {
        code: 'per_24h',
        price: 2714,
      },
      {
        code: 'per_3h',
        price: 2171,
      },
      {
        code: 'sum',
        price: 2714,
      },
    ],
  },
];

const RCTCustomView = requireNativeComponent<
  ViewProps & { pointsJson?: string; statusA?: boolean }
>('YaMapVC');

const ExampleScreen = () => {
  const ref = useRef(null);

  const setCenter = (point: ArrItem['point'], zoom: number) => {
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(ref.current),
      UIManager.getViewManagerConfig('YaMapVC').Commands.setCenter,
      [point, zoom],
    );
  };

  useEffect(() => {
    setCenter({ lat: 0, lon: 0 }, 14);
  }, []);

  return (
    <RCTCustomView
      ref={ref}
      onCameraPositionChangedEnd={(a) => {
        console.log('a', a.nativeEvent);
      }}
      style={{ flex: 1 }}
      pointsJson={JSON.stringify(arr)}
    />
  );
};

export { ExampleScreen };
