import {handleActions } from "redux-actions";
import { AuthActionsEnum } from "./Actions";

export const reducer=handleActions({
    [AuthActionsEnum.login]:(state,action)=>{
        const {payload}=action;

        console.log('actions',payload);
        const {username,password}=payload;
        const users=JSON.parse(localStorage.getItem('users'));
        return ({...state,authenticated:(state.authenticated?state.authenticated:(users.filter((u)=>(u.username===username &&u.password===password)).length>0?true:false))})
        
    },
    [AuthActionsEnum.logout]:(state)=>({...state,authenticated:false})
},{authenticated:false});
