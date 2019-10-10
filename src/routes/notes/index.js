import { connect } from 'react-redux';
import { fetchNotesList } from '../../data/notes/actions';
import Notes from './notes';

const mapStateToProps = state => ({
  noteList: state.noteList,
});

const mapDispatchToProps = dispatch => ({
  fetchNotesList: () => dispatch(fetchNotesList()),
});

const NotesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notes);

export default NotesContainer;