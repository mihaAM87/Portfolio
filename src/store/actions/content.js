import {LOAD_ALL_CONTENTS, START, SUCCESS, ERROR} from '../actions/actionTypes';
import axios from 'axios'

import source from '../source/source.json';

export function fetchContentStart(contentArr) {
  return {
    type: LOAD_ALL_CONTENTS + START,
    contentArr
  }
}

export function fetchContentSuccess(contentArr, track) {
  return {
    type: LOAD_ALL_CONTENTS + SUCCESS,
    contentArr,
    track
  }
}

export function fetchContentError(e) {
  return {
    type: LOAD_ALL_CONTENTS + ERROR,
    error: e
  }
}

export function fetchContentById(name, contentArr, track) {
  return async dispatch => {
    dispatch(fetchContentStart());

    try {

      if (!contentArr || contentArr.length == 0) {
        contentArr = source;
      }
      
      if (name != "..") {
        if (!name || name == "") {
          let firstElem = contentArr[0];
          track.push(firstElem.name);
        } else {
          track.push(name);
        }
      } else {
        track.pop();
      }

      contentArr = findFolger(source, contentArr, name, track, null);
      
      dispatch(fetchContentSuccess(contentArr, track));

    } catch (e) {
      dispatch(fetchContentError(e));
    }
  }
}

function findFolger(source, arr, name, track, backStep = null) {
  if (!arr || arr.length == 0) {
    return null;
  } 

  if (!name || name == "") {
    let firstElem = arr[0];
    return firstElem.contents;
  }

  if (name == "..") {
    if (typeof backStep != "number") {
      backStep = 1;
      arr = source[0].contents
    } else {
      backStep += 1;
    }

    if (!(backStep < track.length)) {
      name = track[backStep - 1];
      backStep = null;
      return arr;
    } else {
      return findFolger(source, arr.find(item => item.name == track[backStep]).contents, name, track, backStep);
    }
  }

  let findElement = arr.find(item => item.name == name)

  return findElement ? findElement.contents : null;
}