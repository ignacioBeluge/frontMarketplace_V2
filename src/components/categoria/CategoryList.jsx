import { useEffect, useState } from "react";

import CategoryCard from "./CategoryCard"

const CategoryList = ({categories, onCategoryClick}) => {
    return (
        <div>
            {categories.map((category) => (
                <CategoryCard
                key = {category.id}
                description = {category.description}
                onClick={() => onCategoryClick(category.id)}
                />
            ))}
        </div>
    )
}

export default CategoryList