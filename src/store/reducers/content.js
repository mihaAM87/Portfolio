import {LOAD_ALL_CONTENTS, START, SUCCESS, ERROR} from '../actions/actionTypes';
import {OrderedMap, Record} from 'immutable'

const ReducerState = Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap({})
})

const defaultState = new ReducerState()

const initialState = {
  contentArr: [],
  track: [],
  loading: false,
  error: null,
  results: {},
  isFinished: false
}

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL_CONTENTS + START:
      return {
        ...state, loading: true
      }
    case LOAD_ALL_CONTENTS + SUCCESS:
      return {
        ...state, loading: false, contentArr: action.contentArr, track: action.track
      }
    case LOAD_ALL_CONTENTS + ERROR:
      return {
        ...state, loading: false, error: action.error
      }
    default:
        return state
    }
}