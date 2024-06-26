import TodoRowItem from "./TodoRowItem";

export default function TodoTable({ todos, deleteToDo }) {

    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map((item) =>
                        <TodoRowItem
                            key={item.rowNumber}
                            rowNumber={item.rowNumber}
                            rowDescription={item.rowDescription}
                            rowAssigned={item.rowAssigned}
                            deleteToDo={deleteToDo}
                        />
                    )
                }
            </tbody>
        </table>
    )
}