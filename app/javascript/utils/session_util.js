export const demoUserCredentials = {
  username: "demo@mail.com",
  password: "password"
}

export const createSession = user => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user },
  })
);

export const deleteSession = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
);