import {FETCH_NOTE_LIST, FETCH_NOTE_LIST_SUCCESS, FETCH_NOTE_LIST_FAILURE} from './actions';

const initialState = {
  notesList: [],
  isLoading: false,
};

function noteReducer(state = initialState, action)
{
  switch(action.type) {
    case FETCH_NOTE_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_NOTE_LIST_SUCCESS:
    case FETCH_NOTE_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state;
  }
};

export default noteReducer;