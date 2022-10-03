import { configureStore } from '@reduxjs/toolkit'
import equationSlice from '../slices/equationSlice'

export default configureStore({
  reducer: {
    equation: equationSlice,
  },
})