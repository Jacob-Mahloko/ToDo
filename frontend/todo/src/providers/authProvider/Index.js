import { AuthActionContext,AuthStateContext } from "./Context";
import { authLoginAction,authLogoutAction } from "./Actions";
import { reducer } from "./Reducer";
import { useContext, useReducer ,useMemo} from "react";



export const AuthProvider=(props)=>{
    const [state,dispatch]=useReducer(reducer,{authenticated:false})
    
    
    const getState=()=>{return {...state}};

    const logout=()=>{
        dispatch(authLogoutAction());
    }

    const login=(username,password)=>{
        dispatch(authLoginAction({username,password}));
    }
    return (
        <AuthStateContext.Provider value={getState()}>
            <AuthActionContext.Provider value={{logout,login}}>
                {props.children}
            </AuthActionContext.Provider>
        </AuthStateContext.Provider>
    );
}

export const useAuthStateContext=()=>{
    const context=useContext(AuthStateContext);
    //return (context?context:()=>alert('Error: Cannot access out AuthProvider'));
    //console.log(context)
    return context;
}

export const useAuthActionContext=()=>{
    const context=useContext(AuthActionContext);
    return (context?context:()=>alert('Error: Cannot access out AuthProvider'));
}

export const useAuth=()=>([useAuthStateContext(),useAuthActionContext]);