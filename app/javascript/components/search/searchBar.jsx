import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import usePath from '../../utils/path_util'
import SearchDropDown from './searchDropDown'
import { executeSearch } from '../../actions/search_actions'

const SearchBar = () => {
  const searchables = useSelector(state => state.search)
  const [results, setResults] = useState(null)
  const dispatch = useDispatch()

  const inputName = "search"
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
    if(searchCategory) {
      return searchCategory.filter(searchItem =>
        searchItem.name && 
        searchItem.name.split(" ").some(word =>{
          return word.toLowerCase().startsWith(input.toLowerCase())
        })
      )
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const input = e.target[inputName]
    const searchRequest = {
      general: input.value
    }

    dispatch(executeSearch(searchRequest))
  }

  return (
    <div className="search-container">
      <form className={`search-bar`} onSubmit={handleSubmit}>
        <label className={`search-label`}>Find</label>
  
        <input type="text"
          name={inputName} 
          className={`search-input`}
          placeholder="wand shops, broomstick repair, potions supply"
          onChange={handleInput}/>
  
        <button className={`${splashClassName}search-button`}>🪄</button>
      </form>
      {results ?
        <SearchDropDown filteredResults={results} setResults={setResults} />
        : null
      }
    </div>
  )
}

export default SearchBar;