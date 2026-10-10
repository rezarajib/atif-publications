import React from 'react';
import { BookHero } from '../features/book/BookHero';
import { BookOverview } from '../features/book/BookOverview';
import { RelatedBooks } from '../features/book/RelatedBooks';

export const HomePage = ({ onBuyNow }) => (
  <div>
    <BookHero onBuyNow={onBuyNow} />
    <BookOverview />
    <RelatedBooks />
  </div>
);