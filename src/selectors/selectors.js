import {createSelector} from 'reselect'
import {mapToArr} from '../helpers'

const folgerContentGetter = state => state.folgerContent.entities
const idGetter = (state, props) => props.id

export const folgerContentSelector = createSelector(folgerContentGetter, (folgerContent) => {
    return mapToArr(folgerContent).filter(contentItem => {
        return (!selected.length || selected.includes(contentItem.name)) &&
            (!from || !to || (published > from && published < to))
    })
})