import { apiUrl } from "./axios-instance";

export const uploadImage = (
  endpoint,
  data,
  successCallback,
  failureCallback
) => {
  return fetch(`${apiUrl}`.concat(endpoint), {
    method: "PUT",
    body: data.body,
    redirect: "follow",
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
      Authorization: `Bearer ${data.token}`,
    },
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      if (res && res.status === 200) {
        if (res && res.data) {
          successCallback(res);
        }
      } else if (res && res.status === 400) {
        throw new Error(res?.ui_message);
      }
    })
    .catch((err) => {
      console.log("Error in api", err);
      failureCallback(err);
    })
    .finally(() => {});
};
