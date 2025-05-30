const CategoryCard = ({description, onClick}) => {
    return (
        <button onClick={onClick} style={{ margin: "10px", padding: "10px" }} >
            {description}
        </button>
    )
}

export default CategoryCard