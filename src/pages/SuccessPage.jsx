import React from 'react';
import { ConfirmationCard } from '../features/success/ConfirmationCard';

export const SuccessPage = ({ onGoHome }) => (
  <div className="min-h-screen flex items-center justify-center">
    <ConfirmationCard onGoHome={onGoHome} />
  </div>
);