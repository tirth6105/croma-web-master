import { Sign_up } from "../Action"
import { LOGIN, LOGOUT, SIGN_UP } from "../actiontype"


let initailstate={
    user:{},
    islogin:false
}


export const user=(state=initailstate,{type,payload})=>{

    switch(type){

        case LOGIN:
            return{
                ...state,
                user:payload,
                islogin:true
            }

        case SIGN_UP :
            return{
                ...state,
                user:payload,
                islogin:true
            }
        case LOGOUT:
            return{
                ...state,
                user:[],
                islogin:false
            }
        default :
        return state
    }
}