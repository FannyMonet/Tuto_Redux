import visibilityFilterReducer from './visibilityFilter';
import { VisibilityFilters, SET_VISIBILITY_FILTER } from '../../actions/index';

describe('visibility filter reducer', () => {
    it('should return the initial state', () => {
        expect(visibilityFilterReducer(undefined, {})).toEqual(VisibilityFilters.SHOW_ALL);
    });

    it('should set the visibility filter', () => {
        expect(visibilityFilterReducer(undefined, { type: SET_VISIBILITY_FILTER, filter: VisibilityFilters.SHOW_COMPLETED }))
        .toEqual(VisibilityFilters.SHOW_COMPLETED);
    })
});