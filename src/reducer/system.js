import { createSlice, createAction } from '@reduxjs/toolkit'

const initialState = {
 submit:{}
}

export const counterSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    submit: (state,action) => {
      return{
        submit:{ username:action.payload.username, password:action.payload.password,remeber:action.payload.remeber?action.payload.remeber:false}
      } 
    }
  }
})

// Action creators are generated for each case reducer function
export const { submit } = counterSlice.actions
export const getSumit = createAction('system/getSumit')

export default counterSlice.reducer