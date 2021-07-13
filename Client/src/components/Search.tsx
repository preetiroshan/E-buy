import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  const [searchText, setSearchText] = useState<string>('')
  return (
    <InputGroup>
      <FormControl id="inlineFormInputGroup" placeholder="Type here to search.." />
      <InputGroup.Prepend>
        <InputGroup.Text>
          <FaSearch />
        </InputGroup.Text>
      </InputGroup.Prepend>
    </InputGroup>
  )
}

export default Search
