import React, { ChangeEvent, useCallback, useState } from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import actions from '../redux/actions';
import { TBookState } from '../redux/reducers/booksReducer';
import { SearchState } from '../redux/reducers/searchReducer';
import { StoreState } from '../redux/store';
import { TBook } from '../types';
import './Search.css';
import { FocusEvent } from 'react'

const StyledDiv = styled.div`
    position: absolute;
    z-index: 3;
    background-color: white;
    width: 100%;
    cursor: pointer;
    padding-left: 0;
    &:hover{
      // background-color: #dedfe0
    }
  `;
const Search = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const location = useLocation();
  const [suggestions, setSuggestions] = useState<TBook[]>([])
  const booksList = useSelector<StoreState, TBookState>((state) => state.products.books);
  const searchText = useSelector<StoreState, string>((state) => state.products.search.searchText);
  const [searchString, setSearchString] = useState('')
  const handleChange = useCallback(
    (e) => {
      setSearchString(e.target.value)
      let newSearch = e.target.value;
      let matches = [];
      let suggestion = e.target.value && booksList.books.filter((book) => (book.name.toLowerCase().includes(e.target.value.toLowerCase())));
      setSuggestions(suggestion)

    },
    [booksList.books],
  )

  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(actions.setSearchText(searchString))
      setSuggestions([])
      // location.pathname = `/books/search/q=${searchText}`

    },
    [dispatch, searchString])
  console.log(suggestions)
  // console.log(search);

  console.log("searchText is", searchText)
  return (
    <>
      <Form onSubmit={handleSearch}>

        <InputGroup>
          <FormControl
            id="inlineFormInputGroup"
            placeholder="Type here to search.."
            value={searchString}
            onChange={handleChange}
            // onBlur={() => setSuggestions([])}
            //autocomplete is off to diable chrome autofill
            autoComplete="off"
          />

          {/* <Link to={`/`}> */}
          {/* <button type="submit" onSub> */}

          <button type="submit">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
            </InputGroup.Prepend>
            {/* </button> */}

            {/* </Link> */}
          </button>
        </InputGroup>
      </Form>
      {
        !(suggestions.length === 0) &&
        <StyledDiv>
          <ul>

            {
              suggestions.map((book: TBook, key: number) =>
                <li>{book.name}</li>
              )
            }
          </ul>
        </StyledDiv>
        // (<StyledDiv key={key}>{book.name}</StyledDiv>)

      }
    </>
  )
}

export default Search
