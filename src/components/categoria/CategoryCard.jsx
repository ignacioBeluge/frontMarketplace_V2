const CategoryCard = ({ description, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-indigo-950 to-indigo-900 hover:from-indigo-900 hover:to-indigo-950 text-white px-6 py-4 rounded-xl shadow-md transition duration-300 text-lg font-medium transform hover:scale-105"
    >
      {description}
    </button>
  );
};

export default CategoryCard;