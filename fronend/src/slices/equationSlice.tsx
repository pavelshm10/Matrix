import { createSlice } from '@reduxjs/toolkit'

export const equationSlice = createSlice({
  name: 'equation',
  initialState:{
    first_num: 0,
    second_num: 0,
    action_state: ''
  },
  reducers: {
    firstNum: (state, action) => {
      state.first_num = action.payload
    },
    secondNum: (state, action) => {
        state.second_num = action.payload
    },
    action_click: (state, action) => {
      state.action_state = action.payload
    },
  },
})

export const action_value = (state:any) => state.equation.action_state
export const num1_value = (state:any) => state.equation.first_num
export const num2_value = (state:any) => state.equation.second_num


export const { firstNum, secondNum, action_click } = equationSlice.actions

export default equationSlice.reducer