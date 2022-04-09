import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface ModalTypeState {
  value: string
}
const initialState: ModalTypeState = {
  value:"My Todos",
}

export const modalTypeSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    setModalType: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setModalType} = modalTypeSlice.actions

export default modalTypeSlice.reducer