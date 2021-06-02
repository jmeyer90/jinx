export const fetchUser = userId => (
  $.ajax({
    url: `/api/users/${userId}`,
    method: "GET"
  })
);

export const createUser = formData => (
  $.ajax({
    url: `/api/users`,
    method: "POST",
    data: formData,
    processData: false,
    contentType: false,
  })
);