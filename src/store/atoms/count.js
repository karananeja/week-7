import { atom, selector } from 'recoil';

export const countAtom = atom({ key: 'count-atom', default: 0 });

export const evenNumber = selector({
  key: 'even-number',
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2;
  },
});
