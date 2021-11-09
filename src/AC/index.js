import {CHANGE_SELECTION, 
    LOAD_ALL_ARTICLES, START, SUCCESS, FAIL
} from '../constants'


export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: { selected }
    }
}

export function loadAllContents() {
    return {
        type: LOAD_ALL_CONTENTS,
        callAPI: '/api/contents'
    }
}

