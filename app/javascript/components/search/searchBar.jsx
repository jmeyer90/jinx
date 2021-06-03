import React from 'react'
import usePath from '../../utils/path_util'

const SearchBar = () => {
  const path = usePath()

  const splashClassName = path == "/" ? "splash-" : ""

  return (
    <form action="" className={`${splashClassName}search-bar`}>
      <label className={`${splashClassName}search-label`}>Find</label>

      <input type="text" 
        className={`${splashClassName}search-input`}
        placeholder="wand shops, broomstick repair, potions supply"/>

      <button className={`${splashClassName}search-button`}>🔍</button>
    </form>
  )
}

export default SearchBar;