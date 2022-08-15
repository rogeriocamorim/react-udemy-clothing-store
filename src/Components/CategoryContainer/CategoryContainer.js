import './category-containers.scss'
import CategoryItem from "./CategoryItem/CategoryItem";

const CategoryContainer = ({ categories}) => {

  return(
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
      ))}
    </div>
  )
}

export default CategoryContainer;