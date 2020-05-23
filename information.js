async function fetchData() {
  const res = await fetch("http://localhost:3004/product_list");
  res
    .json()
    .then((res) => setProds(res))
    .catch((err) => setErrors(err));
}

useEffect(() => {
  fetchData();
}, []);

const postRequest = (prod) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(prod),
  };
  fetch("http://localhost:3004/product_list", requestOptions).then((response) =>
    response.json()
  );
};

const updateRequest = (id, prod) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(prod),
  };
  fetch(
    `http://localhost:3004/product_list/${id}`,
    requestOptions
  ).then((response) => response.json());
};

const delRequest = (id) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  fetch(
    `http://localhost:3004/product_list/${id}`,
    requestOptions
  ).then((response) => response.json());
};
