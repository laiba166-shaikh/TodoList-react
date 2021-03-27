import { SET_FILTER_STATUS } from './filterConstants';

export var setFilterStatus=(status)=>({
    type:SET_FILTER_STATUS,
    payload:{
        status
    }
})

// export var setSearchInput=(searchValue)=>({
//     type:'SET_SEARCH_INPUT',
//     payload:{
//         searchValue
//     }
// })