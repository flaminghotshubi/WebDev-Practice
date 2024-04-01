import { useState } from "react"

export default function NewTodoForm(props) {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        if (description !== '' && assigned !== '') {
            props.addToDo(description, assigned)
            setAssigned('');
            setDescription('');
        }
    }

    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type="text" className="form-control" required onChange={
                        (event) => setAssigned(event.target.value)
                    } value={assigned} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" required rows={3} onChange={
                        (event) => setDescription(event.target.value)
                    } value={description} />
                </div>
                <button type="button" className="btn btn-primary" onClick={submitTodo}>
                    Create
                </button>
            </form>
        </div>
    )
}