export const loadSearchables = () => {
    return (
        $.ajax({
            url: `api/businesses/search_load`,
            method: "GET"
        })
    )
}

export const executeSearch = (search_request) => {
    const key = Object.keys(search_request)[0]
    const url= `api/businesses/search_results?business[${key}]=${search_request[key]}`
    return (
        $.ajax({
            url,
            method: "GET"
        })
    )
}