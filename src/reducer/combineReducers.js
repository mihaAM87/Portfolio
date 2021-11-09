import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import contents from '../components/Contents'

export default combineReducers({
    count: counterReducer,
    contents, router: routerReducer
})