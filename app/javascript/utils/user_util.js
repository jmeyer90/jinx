export const fetchUser = userId => {
  return(
  $.ajax({
    url: `/api/users/${userId}`,
    method: "GET"
  })
)};

export const createUser = user => {
  return(
  $.ajax({
    url: `/api/users`,
    method: "POST",
    data: user,
    processData: false,
    contentType: false,
  })
)};