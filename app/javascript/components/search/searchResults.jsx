import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import QueryString from 'query-string'
import SearchCategoryResults from './searchCategoryResults';
import { executeSearch } from '../../actions/search_actions'
import SearchMap from '../map/searchMap';

const SearchResults = () => {
  const businesses = useSelector(state => state.entities.businesses)
  const searchables = useSelector(state => state.search)
  const { search } = useLocation()
  const dispatch = useDispatch()

  const {input, category} = QueryString.parse(search)

  useEffect(() => {
    const searchRequest = {
      [category]: input
    }

    dispatch(executeSearch(searchRequest))
  }, [dispatch])

  const renderGeneralOrCategory = () => (
    category == "general" ?
      renderGeneralResults()
      : 
      <SearchCategoryResults category={category} input={input} />
  )

  const renderGeneralResults = () => {
    const renderedCategories = Object.keys(searchables).filter(category =>
      searchables[category].some(searchableData =>{ 
        const searchableTerms = searchableData.name.split(" ")
        return searchableTerms.some(word => word.toLowerCase().startsWith(input))
    }))

    console.log(renderedCategories)
    return (
      <ul className="general-results-container">
        {renderedCategories >= 1 ? 
          renderedCategories.map(category =>
            <SearchCategoryResults key={category} category={category} input={input} />
          )
          : <h1 className="category-results-title">No Results Found</h1>
          }
      </ul>
    )
  }

  return (
    <section className="search-page-container">
      {renderGeneralOrCategory()}
      < SearchMap businesses={businesses} />
    </section>
  )
}

export default SearchResults;