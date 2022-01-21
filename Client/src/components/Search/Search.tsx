import React, { useCallback, useState } from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import actions from '../../redux/actions/products/productActions';
import { TBookState } from '../../redux/reducers/booksReducer';
import { StoreState } from '../../redux/store';
import { TBook } from '../../types';
import './Search.css';

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
  const dispatch = useDispatch()
  const [suggestions, setSuggestions] = useState<TBook[]>([])
  const booksList = useSelector<StoreState, TBookState>((state) => state.products.books);
  const searchText = useSelector<StoreState, string>((state) => state.products.search.searchText);
  const [searchString, setSearchString] = useState('')

  const handleChange = useCallback(
    (e) => {
      setSearchString(e.target.value)
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

    },
    [dispatch, searchString])

  return (
    <div className="search-form">
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
          <InputGroup.Prepend>
            <img src="/assets/search.png" alt="search" id="search-icon" />
          </InputGroup.Prepend>
        </InputGroup>
      </Form>
      {
        (suggestions.length !== 0) &&
        <StyledDiv>
          <ul>

            {
              suggestions.map((book: TBook, key: number) =>
                <li>
                  <NavLink to={{
                    pathname: `/book/${book.name.replace(/\s/g, '')}`,
                    state: {
                      id: book._id
                    }
                  }} onClick={() => { dispatch(actions.setSearchText('')) }} >{book.name}</NavLink>
                </li>
              )
            }
          </ul>
        </StyledDiv>
      }
    </div>
  )
}

export default Search
