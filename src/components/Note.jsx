import React from "react";


const Note = ({ id, title, content, onDelete }) => {

      const handleDelete = () => {
        onDelete(id);
      }

    return(
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text flex-grow-1">{content}</p>
                    <button 
                    className="btn btn-sm btn-outline-danger mt-auto align-self-end"
                    onClick={handleDelete}
                    >
                     Delete
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Note;