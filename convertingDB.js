exports.rates = [
  {
    centimeter: 1,
    meter: 100,
    kilometer: 1000 * 100,
    inch: 2.54,
    mile: 160934.4,
    yard: 91.44,
    foot: 30.48,
  },
  {
    gram: 1,
    kilogram: 1000,
    ton: 1000 * 1000,
    carat: 0.2,
    pound: 453.59237,
    pood: 16380.4815,
  },
  {
    celsius: function (c) {
      return c;
    },
    kelvin: function (c) {
      return Number(c) + 273;
    },
    fahrenheit: function (c) {
      return 1.8 * Number(c) + 32;
    },
    KtoCelsium: function (K) {
      return Number(K) - 273;
    },
    FtoCelsium: function (F) {
      return Number(F) / 1.8 - 32 / 1.8;
    },
  },
];

exports.convertOptions = [
  ["centimeter", "meter", "kilometer", "inch", "mile", "yard", "foot"],
  ["gram", "kilogram", "ton", "carat", "pound", "pood"],
  ["celsius", "kelvin", "fahrenheit"],
];
