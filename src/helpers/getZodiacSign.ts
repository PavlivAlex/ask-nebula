export const getZodiacSign = (day: number, month: number) => {
  const zodiacSigns = [
    'Aquarius',
    'Pisces',
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricorn',
  ];

  const startDay = [20, 19, 21, 20, 21, 21, 23, 23, 23, 23, 22, 22];
  const lastDayOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month < 1 || month > 12 || day < 1 || day > lastDayOfMonth[month - 1]) {
    return 'Invalid date';
  }

  const index = day < startDay[month - 1] ? (month - 2 < 0 ? 11 : month - 2) : month - 1;

  return zodiacSigns[index];
};
