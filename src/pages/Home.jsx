import React, { useEffect, useState } from 'react';

import Categories from '../components/categories';
import Sort from '../components/sort';
import Skeleton from '../components/pizzaBlock/Skeleton';
import PizzaBlock from '../components/pizzaBlock';

const Home = ({ searchValue }) => {

  const [pizzaItems, setPizzaItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //took from categories and renamed
  //const [activeIndex, setActiveIndex] = useState(0);
  const [categoryId, setCategoryId] = useState();

  //took from sort and renamed
  //const [listPizza, setListPizza] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'popular', 
    sortProperty: 'rating',
  });


  useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : ' ';

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';

    const sortBy = sortType.sortProperty.replace('-', '');
    
    fetch(
      `https://647e4e51af984710854b2851.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
    .then((res) => res.json())
    .then((PizzaData) => {
      setPizzaItems(PizzaData)
      setIsLoading(false); 
    });
    window.scrollTo(0, 0);
    
  }, [categoryId, sortType]); 

  const pizzas = pizzaItems
    .filter(obj => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);


  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  return (
    <div className="container">
      <div className="content__top">
            
            <Categories 
              value={categoryId} 
              onClickCategory={(i) => setCategoryId(i)}
            />
            <Sort
              value={sortType}
              onChangeSort={(i) => setSortType(i)}
            />

          </div>
          <h2 className="content__title">All pizzas</h2>
          <div className="content__items">
            {isLoading ? skeletons : pizzas}  
            {/* <- Spread operator, instead of ↓ */}
                {/* title={obj.title} 
                price={obj.price} 
                imageUrl={obj.imageUrl}
                types={obj.types}
                sizes={obj.sizes} */}
              


          </div>
    </div>
  )
}

export default Home;