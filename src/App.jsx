// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import Footer from './components/Footer';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
        <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="container mt-4 flex-grow-1"> {/* Changed div to main and added flex-grow-1 */}
        <CreateArea onAdd={addNote} />

        {notes.length > 0 && (
          <div className="row mt-4">
            {notes.map((noteItem, index) => {
              return (
                <Note
                  key={index}
                  id={index}
                  title={noteItem.title}
                  content={noteItem.content}
                  onDelete={deleteNote}
                />
              );
            })}
          </div>
        )}
        {notes.length === 0 && (
            <p className="text-center mt-4">No notes yet. Add one above!</p>
        )}
      </main> 

      <Footer /> 
    </div>
  );
};

export default App;