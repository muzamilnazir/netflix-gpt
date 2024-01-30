import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload //when triggered initial state will be this obj
        },
        removeUser :(state,action)=>{
            return null   //when rmoved initial state will be null again
        }
    }
})

export const {addUser,removeUser} = userSlice.actions
export default userSlice.reducer