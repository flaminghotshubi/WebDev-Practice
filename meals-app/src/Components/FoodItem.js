function FoodItem(props) {
    const { idMeal, strMealThumb, strMeal } = props.item;
    return (
        <li key={idMeal} className="list-group-item m-4 border-0">
            <div className="card" style={{ width: "18rem" }} >
                <img src={strMealThumb} className="card-img-top" alt={strMeal} />
                <div className="card-body justify-content-center text-bg-danger">
                    <p className="card-text text-center">{strMeal}</p>
                </div>
            </div>
        </li>
    );
}

export default FoodItem;