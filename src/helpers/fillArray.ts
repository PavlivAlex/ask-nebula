export const fillDaysOptions = (count: number) => new Array(count).fill(null).map((_, index) => ({ value: index + 1, label: index + 1 }));
