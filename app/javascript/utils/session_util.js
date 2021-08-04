export const demoUserCredentials = {
  email: "demo@mail.com",
  password: "password"
}

export const createSession = user => {
  return(
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user },
  })
)};

export const deleteSession = () => {
  return(
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
)};