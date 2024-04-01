function TodoRowItem(props) {
    const { rowNumber, rowAssigned, rowDescription } = props
    return (
        <tr onClick={() => props.deleteToDo(rowNumber)}>
            <th scope='row'>{rowNumber}</th>
            <td>{rowDescription}</td>
            <td>{rowAssigned}</td>
        </tr >
    )
}

export default TodoRowItem;