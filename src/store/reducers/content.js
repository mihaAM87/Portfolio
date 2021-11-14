import {LOAD_COUNTER, START, SUCCESS, TIME, YELLOW, RED, GREEN, ERROR} from '../actions/actionTypes';
import {OrderedMap, Record} from 'immutable'

const ReducerState = Record({
  entities: new OrderedMap({})
})

const defaultState = new ReducerState()

const initialState = {
  counter: {value: 0},
  colorIndex: 0,
  colorsObj: [
    {color: YELLOW, limit: YELLOW + TIME, class: 'yellow'}, 
    {color: RED, limit: RED + TIME, class: 'red'}, 
    {color: YELLOW, limit: YELLOW + TIME, class: 'yellow'},
    {color: GREEN, limit: GREEN + TIME, class: 'green'}
  ]
}

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COUNTER + START:
      return {
        ...state, colorsObj: action.colorsObj, counter: action.counter, colorIndex: action.colorIndex
      }
    case LOAD_COUNTER + SUCCESS:
      return {
        ...state, colorsObj: action.colorsObj, counter: action.counter, colorIndex: action.colorIndex
      }
    case LOAD_COUNTER + ERROR:
      return {
        ...state, error: action.error
      }
    default:
        return state
    }
}