import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import QueryString from 'query-string'
import SearchCategoryResults from './searchCategoryResults';

const SearchResults = () => {
  const searchables = useSelector(state => state.search)
  const { search } = useLocation()

  const {input, category} = QueryString.parse(search)
  debugger
  const renderGeneralOrCategory = () => (
    category == "general" ?
      renderGeneralResults()
      : 
      <SearchCategoryResults category={category} input={input} />
  )

  const renderGeneralResults = () => {
    const renderedCategories = searchables.keys.filter(category =>
      category.values.some(searchable =>{ 
        const searchName = searchable.name.toLowerCase()
        return searchName.startsWith(input)
    }))

    return (
      renderedCategories.map(category =>
        <SearchCategoryResults category={category} input={input} />
      )
    )
  }

  return (
    <section className="search-page-container">
      {renderGeneralOrCategory()}
    </section>
  )
}

export default SearchResults;