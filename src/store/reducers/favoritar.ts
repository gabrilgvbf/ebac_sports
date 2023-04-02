import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritarState = {
  itens: Produto[]
}

const initialState: FavoritarState = {
  itens: []
}

const FavoritosSlice = createSlice({
  name: 'favoritar',
  initialState,
  reducers: {
    favoritare: (state, action: PayloadAction<Produto>) => {
      const jogo = action.payload
      if (state.itens.find((p) => p.id === jogo.id)) {
        const index = state.itens.indexOf(jogo)
        state.itens.splice(index, 1)
      } else {
        state.itens.push(jogo)
      }
    }
  }
})

export const { favoritare } = FavoritosSlice.actions

export default FavoritosSlice.reducer
