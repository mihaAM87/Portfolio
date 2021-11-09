import {normalizedArticles as defaultArticles} from '../fixtures'
import {arrToMap} from '../helpers'
import {LOAD_ALL_ARTICLES, START, SUCCESS} from '../constants'
import {OrderedMap, Record} from 'immutable'

const ReducerState = Record({
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
})

const defaultState = new ReducerState()

export default (contentsState = defaultState, action) => {
    const {type, payload, response, randomId} = action

    switch (type) {

        case LOAD_ALL_CONTENTS + START:
            return contentsState.set('loading', true)

        case LOAD_ALL_CONTENTS + SUCCESS:
            return contentsState
                .update('entities', entities => arrToMap(response, ArticleRecord).merge(entities))
                .set('loading', false)
                .set('loaded', true)
    }

    return contentsState
}