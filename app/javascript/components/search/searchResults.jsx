import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SearchCategoryResults from './searchCategoryResults';

const SearchResults = () => {
  const searchables = useSelector(state => state.search)
  const { search } = useLocation()

  const query = search.input; 

  const renderGeneralOrCategory = () => (
    search.category == "general" ?
      renderGeneralResults()
      : 
      <SearchCategoryResults category={search.category} query={query} />
  )

  const renderGeneralResults = () => {
    const renderedCategories = searchables.keys.filter(category =>
      category.values.some(searchable =>{ 
        const searchName = searchable.name.toLowerCase()
        return searchName.startsWith(query)
    }))

    return (
      renderedCategories.map(category =>
        <SearchCategoryResults category={category} query={query} />
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