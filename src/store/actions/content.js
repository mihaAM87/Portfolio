import {LOAD_COUNTER, START, SUCCESS, RED, YELLOW, GREEN, RED_TIME, YELLOW_TIME, GREEN_TIME, ERROR} from '../actions/actionTypes';

export function fetchContentStart(colorsObj, colorIndex, counter) {
  return {
    type: LOAD_COUNTER + START
  }
}

export function fetchContentSuccess(colorsObj, colorIndex, counter) {
  return {
    type: LOAD_COUNTER + SUCCESS,
    colorsObj,
    colorIndex,
    counter
  }
}

export function fetchContentError(e) {
  return {
    type: LOAD_COUNTER + ERROR,
    error: e
  }
}

export function changeCounter(colorsObj, colorIndex, counter) {
  return async dispatch => {
    dispatch(fetchContentStart());

    try {

      
      colorIndex = changeColor(colorsObj, colorIndex, counter);
      
      dispatch(fetchContentSuccess(colorsObj, colorIndex, counter));

    } catch (e) {
      dispatch(fetchContentError(e));
    }
  }
}

function changeColor(colorsObj, colorIndex, counter) {
  
  switch (colorIndex) {
    case 1:
      if (counter >= colorsObj[colorIndex].limit) {

        ++colorIndex;
      }
    break;
    case 2:
      if (counter >= colorsObj[colorIndex].limit) {
        ++colorIndex;
      }
    break;
    case 3:
      if (counter >= colorsObj[colorIndex].limit) {
        colorIndex = 0;
      }
      break;
    default:
        colorIndex = 0;
      break;
  }

  return colorIndex;
}