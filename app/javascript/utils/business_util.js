export const fetchBusinesses = () => {
  return (
  $.ajax({
    url: "/api/businesses",
    method: "GET"
  })
)};

export const fetchBusiness = businessId => {
  return (
  $.ajax({
    url: `/api/businesses/${businessId}`,
    method: "GET"
  })
)};
