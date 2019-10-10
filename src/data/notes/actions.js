export const FETCH_NOTE_LIST = "FETCH_NOTE_LIST";
export const FETCH_NOTE_LIST_SUCCESS = "FETCH_NOTE_LIST_SUCCESS";
export const FETCH_NOTE_LIST_FAILURE = "FETCH_NOTE_LIST_FAILURE";

export const fetchNotesList = () => ({ type: FETCH_NOTE_LIST});
export const fetchNotesListSuccess = () => ({ type: FETCH_NOTE_LIST_SUCCESS});
export const fetchNotesListFailure = () => ({ type: FETCH_NOTE_LIST_FAILURE});