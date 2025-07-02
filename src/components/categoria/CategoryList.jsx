import CategoryCard from "./CategoryCard"

const CategoryList = ({ categories, onCategoryClick }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          description={category.description}
          onClick={() => onCategoryClick(category.id)}
        />
      ))}
    </div>
  );
};

export default CategoryList;