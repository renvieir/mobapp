import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Notes extends Component
{
  componentDidMount() {
    const { fetchNotesList } = this.props;
    fetchNotesList();
  }

  render() {
    const { noteList } = this.props;
    const noteListItems = noteList.map(note => <li key={note.date}>{note.description}</li>)
    return (
      <>
      <h1>Notes</h1>
      <hr />
      <ul>{noteListItems}</ul>
      </>
    );
  }
}

Notes.propTypes = {
  noteList: PropTypes.array.isRequired,
  fetchNotesList: PropTypes.func.isRequired
}

Notes.defaultProps = {
  noteList: [{
    description: 'Molhada',
    date: '15/11/2019',
  }],
};

export default Notes;
