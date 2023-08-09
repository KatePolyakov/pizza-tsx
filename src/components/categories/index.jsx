import React from 'react';
import '../../scss/app.scss';

function Categories ({ value, onClickCategory }) {

  const categories = ['All', 'Meat', 'Vegetable', 'Grill', 'Spicy', 'Calzone'];

  

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li 
            key={i} 
            onClick={() => onClickCategory(i)} 
            className={value === i ? "active" : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories;