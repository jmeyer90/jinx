export const fetchUser = userId => (
  $.ajax({
    url: `/api/users/${userId}`,
    method: "GET"
  })
);

export const createUser = user => {
  debugger
  return(
  $.ajax({
    url: `/api/users`,
    method: "POST",
    data: user,
    processData: false,
    contentType: false,
  })
)};