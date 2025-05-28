import React, { useState } from "react";


const CreateArea = ({ onAdd }) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [alertMessage, setAlertMessage] = useState("");

    const handleChange = (event) => {
        const {name, value} = event.target

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
        if (alertMessage) {
            setAlertMessage("");
        }
    };

    const submitNote = (event) => {
        event.preventDefault();
        
        if (note.title.trim() === "" && note.content.trim() === "") {
            setAlertMessage("Please enter a title or content for the note.")

            return;
        }

        onAdd(note)
        setNote({
            title: "",
            content: ""
        });
        setAlertMessage("");
        
    }
    return (
        <div className="my-3 p-3 border rounded shadow-sm position-relative ">
            {alertMessage && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {alertMessage}
                    <button 
                     type="button"
                     className="btn-close"
                     onClick={() => setAlertMessage("")}
                     aria-label="Close"
                     ></button>
                </div>
            )}


        
            <form onSubmit={submitNote}>
            <div className="mb-3">
                <input 
                name="title"
                onChange={handleChange}
                value={note.title}
                placeholder="Title"
                className="form-control"
                aria-describedby={alertMessage ? "formAlert" : undefined}
                />
            </div>
            <div className="mb-3">
                <textarea 
                name="content"
                onChange={handleChange}
                value={note.content}
                placeholder="Take a note"
                rows="3"
                className="form-control"
                aria-describedby={alertMessage ? "formAlert" : undefined}
                />
            </div>
            <button type="submit" className="btn btn-warning">Add</button>
            </form>
        </div>
    )
};

export default CreateArea;