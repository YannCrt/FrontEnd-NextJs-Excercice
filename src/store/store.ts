import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice'; // Importation du reducer par défaut

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Utilisation du reducer du slice
  },
});

// Typage de l'état global
export type RootState = ReturnType<typeof store.getState>;
