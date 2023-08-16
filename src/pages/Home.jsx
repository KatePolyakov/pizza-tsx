import React, { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';


import Categories from '../components/categories';
import Sort from '../components/sort';
import Skeleton from '../components/pizzaBlock/Skeleton';
import PizzaBlock from '../components/pizzaBlock';
import Pagination from '../components/pagination';
import { SearchContext } from '../App';

const Home = () => {
  const categoryId = useSelector(state => state.filter.categoryId); // <-import using hook and give in variable;

  const { searchValue } = useContext(SearchContext)
  const [pizzaItems, setPizzaItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //took from categories and renamed
  //const [activeIndex, setActiveIndex] = useState(0);
  //const [categoryId, setCategoryId] = useState();

  //took from sort and renamed
  //const [listPizza, setListPizza] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'popular', 
    sortProperty: 'rating',
  });

  const onChangeCategory = (id) => {
    console.log("# category: ", id);
  };

  console.log("# category: ", categoryId);

  //for pagination
  const [currentPage, setCurrentPage] = useState(1)


  useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : ' ';

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';

    const sortBy = sortType.sortProperty.replace('-', '');

    const search = searchValue ? `title=${searchValue}` : '';
    
    fetch(
      `https://647e4e51af984710854b2851.mockapi.io/items?page=${currentPage}&limit=4&${search}&${category}&sortBy=${sortBy}&order=${order}`)
    .then((res) => res.json())
    .then((PizzaData) => {
      setPizzaItems(PizzaData)
      setIsLoading(false); 
    });
    window.scrollTo(0, 0);
    
  }, [searchValue, categoryId, sortType, currentPage]); 



  const pizzas = pizzaItems.map((obj) => <PizzaBlock key={obj.id} {...obj} />);


  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  return (
    <div className="container">
      <div className="content__top">
            
            <Categories 
              value={categoryId} 
              onClickCategory={onChangeCategory}
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

      <Pagination onChangePage={(number) => setCurrentPage(number)}/>
      

    </div>
  )
}

export default Home;