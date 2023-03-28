import { legacy_createStore as createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {reducer,newNumber} from './reducer'
import { composeWithDevTools } from '@redux-devtools/extension';

const reducers = combineReducers({number: reducer,lastChange : newNumber})
const middleWere=[thunk]
const initialState = {}
const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWere))
    )

export default store