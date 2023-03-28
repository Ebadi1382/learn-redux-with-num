const initialState = {
    number:0,
    changeNumber:[0]
}


export const reducer = (state=initialState.number,{type,payload})=> {
    switch (type) {
        case "changeNumber":
            return payload
        default:
            return state
    }
}

export const newNumber=(state=initialState.changeNumber,{type,payload})=> {
    switch (type) {
        case "clicked":
            return payload;
        default:
            return state;
    }
}

// export const usersId = (state={data:[],loading:false,error:""},{type,payload})=> {
//     switch (type) {
//         case "loading":
//             return payload;
//         case "success":
//             return payload;
//         case "faild":
//             return payload;
    
//         default:
//             return state;
//     }
// }