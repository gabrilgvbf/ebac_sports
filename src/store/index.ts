import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

import favoritarReducer from './reducers/favoritar'

export const store = configureStore({
  // CRIANDO O ROOTREDUCERS
  reducer: {
    carrinho: carrinhoReducer,

    favoritare: favoritarReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
