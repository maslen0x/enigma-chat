import { alphabet, size } from '@/constants/alphabet';

export const encrypt = (message: string, initialRotors: readonly [number, number, number]) => {
  const sum = initialRotors.reduce((acc, rotor) => acc + rotor, 0);
  const letters = message.toLowerCase().split('');
  return letters.reduce((acc, letter) => {
    if (!alphabet.split('').includes(letter)) {
      acc += letter;
    } else {
      const letterIndex = alphabet.split('').findIndex((x) => x === letter);
      acc += alphabet[(letterIndex + sum) % size];
    }
    return acc;
  }, '');
};

export const decrypt = (message: string, initialRotors: readonly [number, number, number]) => {
  const sum = initialRotors.reduce((acc, rotor) => acc + rotor, 0);
  const letters = message.toLowerCase().split('');
  return letters.reduce((acc, letter) => {
    if (!alphabet.split('').includes(letter)) {
      acc += letter;
    } else {
      const letterIndex = alphabet.split('').findIndex((x) => x === letter);
      const index = round(letterIndex - sum, 2);
      acc += alphabet[Math.abs(index)];
    }
    return acc;
  }, '');
};

const round = (value: number, number: number): number => {
  if (!number) return value;
  const result = value < 0 ? size - Math.abs(value) : value;
  return round(result < 0 ? size - Math.abs(result) : result, number - 1);
};
