import { RepositoriesState, RepositoriesTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: RepositoriesState = {
    data: [],
    error: false,
    loading: false
}

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RepositoriesTypes.LOAD_REQUEST:
            return { ...state, loading: true, error: false};
        case RepositoriesTypes.LOAD_SUCCCES:
            return { ...state, loading: false, error: false, data: action.payload.data};
        case RepositoriesTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: []};
        default:
            return state;
    };
};

export default reducer;