import React from 'react'

export default function Form() {
    return (
        <>
            <form className='container my-5'>
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">User Id</label>
                    <input type="text" className="form-control" id="userId" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">Id</label>
                    <input type="number" className="form-control" id="id" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Body</label>
                    <input type="text" className="form-control" id="body" required />
                </div>
                <button type="submit" className="btn btn-primary my-2">Submit</button>
            </form>
        </>
    )
}
