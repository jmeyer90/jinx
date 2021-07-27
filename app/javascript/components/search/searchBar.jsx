import React, { useState } from 'react'
import usePath from '../../utils/path_util'

const SearchBar = () => {
  const {results, setResults} = useState({})

  const path = usePath()
  const splashClassName = path == "/" ? "splash-" : ""

  return (
    <form action="" className={`search-bar`}>
      <label className={`search-label`}>Find</label>

      <input type="text" 
        className={`search-input`}
        placeholder="wand shops, broomstick repair, potions supply"/>

      <button className={`${splashClassName}search-button`}>🪄</button>
    </form>
  )
}

export default SearchBar;