import React, { createContext, ReactNode, useContext } from 'react';

import { Book } from '@/interface';

type BookContextType = {
  book: Book;
};

const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider: React.FC<{ book: Book, children: ReactNode }> = ({ book, children }) => {
  return (
    <BookContext.Provider value={{ book }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBook = () => {
  const context = useContext(BookContext);
  if (context === undefined) {
    throw new Error('useBook must be used within a BookProvider');
  }
  return context;
};
