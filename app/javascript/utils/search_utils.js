export const loadSearchables = () => {
    return (
        $.ajax({
            url: `api/businesses/search_load`,
            method: "GET"
        })
    )
}