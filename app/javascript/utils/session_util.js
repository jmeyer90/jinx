export const demoUserCredentials = {
  email: "demo@mail.com",
  password: "password"
}

export const createSession = user => {
  debugger
  return(
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user },
  })
)};

export const deleteSession = () => {
  debugger
  return(
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
)};