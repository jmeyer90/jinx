import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import usePath from '../../utils/path_util'
import SearchDropDown from './searchDropDown'

const SearchBar = () => {
  const searchables = useSelector(state => state.search)
  const [results, setResults] = useState(null)

  const path = usePath()
  const splashClassName = path == "/" ? "splash-" : ""

  const handleInput = (e) => {
    const input = e.currentTarget.value

    if(input == "") {
      setResults(null)
    } else {
      const tempResults = {}
      tempResults.businesses = filter(searchables.businesses, input)
      tempResults.menuItems = filter(searchables.menuItems, input)
      tempResults.attributeItems = filter(searchables.attributeItems, input)
      tempResults.services = filter(searchables.services, input)
      setResults(tempResults)
    }
  }

  const filter = (searchCategory, input) => {
    // debugger
    if(searchCategory) {
      return searchCategory.filter(searchItem =>
        searchItem.name && searchItem.name.includes(input)
      )
    }
  }

  return (
    <div className="search-container">
      <form action="" className={`search-bar`}>
        <label className={`search-label`}>Find</label>
  
        <input type="text" 
          className={`search-input`}
          placeholder="wand shops, broomstick repair, potions supply"
          onChange={handleInput}/>
  
        <button className={`${splashClassName}search-button`}>🪄</button>
      </form>
      {results ?
        <SearchDropDown filteredResults={results} />
        : null
      }
    </div>
  )
}

export default SearchBar;