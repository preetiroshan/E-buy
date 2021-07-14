import React, { useCallback, useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Search = () => {
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  const [searchText, setSearchText] = useState<string>('');
  const handleChange = useCallback(
    (e) => {
      setSearchText(e.target.value)
    },
    [],
  )

  const handleSearch = useCallback(
    () => {
      console.log("i am searching", searchText);
      setSearchText('')
      // history.push('/search')
      location.pathname = `/books/search/q=${searchText}`
    },
    [searchText],
  )

  console.log("searchText is", searchText)
  return (
    <InputGroup>
      <FormControl
        id="inlineFormInputGroup"
        placeholder="Type here to search.."
        value={searchText}
        onChange={handleChange}
      />

      <Link to={`/`}>
        <InputGroup.Prepend onClick={handleSearch}>
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
        </InputGroup.Prepend>
      </Link>
    </InputGroup>
    // "h
  )
}

export default Search
