


const initState = {};


const authReducer = (state=initState , action)=>{
    switch (action.type) {
        case "LOGIN_ERROR":
            return {
                ...state, authError :"Login Failed"
            }
        case "LOGIN_SUCESS":
            return {
                ...state, authError :null
            }    
        case "SIGNOUT_SUCESS":
            return state;    
        case "SIGNUP_SUCESS":
            return {
                ...state,
                authError:null
            }
        case "SIGNUP_ERROR":
            return{
                ...state, authError:"Sign Up Failed "
            }            
        default:
            return state;
    }
}


export default authReducer;

