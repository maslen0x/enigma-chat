import { alphabet, size } from '@/constants/alphabet';

export const encrypt = (message: string, initialRotors: readonly [number, number, number]) => {
  let first = initialRotors[0];
  let second = initialRotors[1];
  let third = initialRotors[2];

  return message
    .toLowerCase()
    .split('')
    .reduce((acc, letter) => {
      const index = alphabet.split('').findIndex((x) => x === letter);
      if (index === -1) {
        acc += letter;
        return acc;
      }

      first++;

      if (first >= size) {
        first = 0;
        second++;
      }

      if (second >= size) {
        second = 0;
        third++;
      }

      if (third >= size) {
        third = 0;
        first++;
      }

      const sum = (index + first + second + third) % size;
      acc += alphabet[sum];
      return acc;
    }, '');
};

export const decrypt = (message: string, initialRotors: readonly [number, number, number]) => {
  let first = initialRotors[0];
  let second = initialRotors[1];
  let third = initialRotors[2];

  const array = message.toLowerCase().split('').reverse();

  const length = array.filter((letter) => alphabet.includes(letter)).length;
  first += length % size;
  second += Math.floor(length / size) % size;
  third += Math.floor(length / size / size) % size;

  return array
    .reduce((acc, letter) => {
      const index = alphabet.split('').findIndex((x) => x === letter);
      if (index === -1) {
        acc += letter;
        return acc;
      }

      const max = size - 1;

      first--;

      if (first < 0) {
        first = max;
        second--;
      }

      if (second < 0) {
        second = max;
        third--;
      }

      if (third < 0) {
        third = max;
        first--;
      }

      const sum = Math.abs((index - 1 - first - second - third) % size);
      acc += alphabet[sum];
      return acc;
    }, '')
    .split('')
    .reverse()
    .join('');
};
