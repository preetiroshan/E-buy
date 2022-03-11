import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../../redux/store'
import { TBookState } from '../../../redux/reducers/booksReducer';
import actions from '../../../redux/actions/products/productActions';
import Home from '../../Home/Home';
import BooksContainer from '../../Book/BooksContainer';
import Loader from '../../Loader'

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

  const filteredBooks = useMemo(() => books.filter((book) =>
    book.name.toLowerCase().includes(searchText.toLowerCase())
  ), [books, searchText])

  return (
    <div>
      {isLoading && <Loader />}
      {error && <b>Error occurred</b>}
      {
        !searchText &&
        <>
          <Home />
        </>
      }
      <BooksContainer books={filteredBooks
        || books} />
    </div>
  )

}
export default HomePage
