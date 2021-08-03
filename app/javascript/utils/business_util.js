export const fetchBusinesses = () => {
  debugger
  return (
  $.ajax({
    url: "/api/businesses",
    method: "GET"
  })
)};

export const fetchBusiness = businessId => {
  debugger
  return (
  $.ajax({
    url: `/api/businesses/${businessId}`,
    method: "GET"
  })
)};
