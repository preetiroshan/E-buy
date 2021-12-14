import React, { useEffect, useMemo } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../../redux/store'
import { TBookState } from '../../../redux/reducers/booksReducer';
import actions from '../../../redux/actions/products/productActions';
import HomeCarousel from '../../Home/HomeCarousel';
import Home from '../../Home/Home';
import BooksContainer from '../../Book/BooksContainer';

const HomePage = () => {
  const booksList = useSelector<StoreState, TBookState>((state) => state.products.books);
  const searchText = useSelector<StoreState, string>((state) => state.products.search.searchText);
  const { isLoading, books, error } = booksList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getAllBooks())
    return () => {
      dispatch(actions.clearAllBooks())
    }
  }, [dispatch])

  console.log(booksList)
  const filteredBooks = useMemo(() => books.filter((book) =>
    book.name.toLowerCase().includes(searchText.toLowerCase())
  ), [books, searchText])
  console.log(searchText);
  console.log(filteredBooks)
  return (
    <div>
      { isLoading && <Spinner animation="border" variant="dark" />}
      {error && <b>Error occurred</b>}
      {
        !searchText &&
        <>
          <HomeCarousel />
          <Home />
        </>
      }
      <BooksContainer books={filteredBooks
        || books} />
    </div>
  )

}
export default HomePage
