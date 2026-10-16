import { createContext, useContext } from 'react';

export interface Deck {
  index: number;
  total: number;
  goTo: (i: number) => void;
  next: () => void;
  prev: () => void;
}
export const DeckCtx = createContext<Deck>({ index: 0, total: 0, goTo: () => {}, next: () => {}, prev: () => {} });
export const useDeck = () => useContext(DeckCtx);
