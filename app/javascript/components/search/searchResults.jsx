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
    const renderedCategories = searchables.keys.filter(category =>
      category.values.some(searchable =>{ 
        const searchName = searchable.name.toLowerCase()
        return searchName.startsWith(input)
    }))

    return (
      renderedCategories.map(category =>
        <SearchCategoryResults key={category} category={category} input={input} />
      )
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