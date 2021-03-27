import {ADD_TODO, DELETE_TODO, COMPLETE_TODO, ACTIVE_TODO} from './todoConstants';

const initialState=[];

const todoReducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch(type){
        case ADD_TODO:
            return [...state,payload.todo]
        case DELETE_TODO:
            return state.filter(t => t.id !== payload.id)
        case COMPLETE_TODO:
            return state.map(todo => {
                if(todo.id === payload.id){
                    return {
                        ...todo,
                        completed:true
                    }
                }else{
                    return {...todo}
                }
            })
        case ACTIVE_TODO:
            return state.map(todo => {
                if(todo.id === payload.id){
                    return {
                        ...todo,
                        completed:false
                    }
                }else{
                    return {...todo}
                }
            })
        // case ALL_TODOS:
        //     return state
        // case COMPLETED_TODOS:
        //     return state.filter((todo)=> todo.completed === true )
        // case ACTIVE_TODOS:
        //     return state.filter((todo)=> todo.completed === false )
        default:
            return state
    }
}

export default todoReducer;

// case TOGGLE_TODO:
//     return [...state.map(todo => {
//         if(todo.id === payload.id){
//             return {
//                 ...todo,
//                 completed:!todo.completed //yahan jb mien completed ko !todo.completed kr rahi tou completed ko consider nahi kr rha new object pass krna hai taky state fresh jaye islye hard coded true||false dngy aur done aur redo ka alg alg case bnayengy
//             }
//         }else{
//             return {...todo}
//         }
// })]