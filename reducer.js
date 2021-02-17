import { combineReducers } from 'redux'

const initialState={
    date: new Date(),
    time: '00:00'
}

const datetime = (state=initialState, action)=>{
    console.log(action.date)
    switch (action.type) {
        case 'SETDATETIME':
            return{
                ...state,
                date:action.date,
                time:action.time
            }
    
        default:
            return state;
    }
}


const reducers = {
    datetime: datetime
}
  
export default combineReducers(reducers)