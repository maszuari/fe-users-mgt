import { SUCCESS, ERROR, CLEAR_MESSAGE } from "../actions/types";

const initialState = {
    message:"",
    status: ""
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SUCCESS:
            return { 
                message: payload,
                status: 'success'       
            };

        case ERROR:
            return { 
                message: payload,
                status: 'error'       
            };
  
      case CLEAR_MESSAGE:
            return { 
                message: "", 
                status:""
            };
  
      default:
        return state;
    }
}