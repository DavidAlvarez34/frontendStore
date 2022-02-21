let idProducts;
const showButget = async () => {
  const HTMLResponse = document.querySelector(".viewProducts");
  let url = await fetch(" http://localhost:5000/getProductsStore", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await url.json(url);
  const showDataProducts = await data[0];
  console.log(showDataProducts);

  for (let i = 0; i < showDataProducts.length; i++) {
    tpl = `
      <tr>
               <td>
                      ${showDataProducts[i].id_product}
                              </td>
                              <td>
                              ${showDataProducts[i].name_product}
                              </td>
                              <td>
                              ${showDataProducts[i].comments}
                              </td>
                              <td>
                              ${showDataProducts[i].description_product}
                              </td>

                              <td>
                              ${showDataProducts[i].category}
                              </td>
                              <td>
                              ${showDataProducts[i].status_product}
                              </td>
                              <td>
                                  <a type="button" onclick="valueId( ${showDataProducts[i].id_product})"  class="btn btn-primary "
                                      data-bs-toggle="modal" data-bs-target="#modalForm">
                                      Editar
                                  </a>
                                  
                                  <button type="button" onclick="valueId( ${showDataProducts[i].id_product})" class="btn btn-danger" data-bs-toggle="modal"
                                      data-bs-target="#exampleModal3">
                                      Eliminar
                                  </button>
  
                              </td>
                          </tr>
       `;
    HTMLResponse.innerHTML += `${tpl}`;
  }
};
showButget();
const valueId = async (valor) => {
  idProducts = valor;
  console.log("valor del id: ", idProducts);
};
const createProducts = async () => {
  let nameCreateProducts = document.getElementById("nameCreateProducts").value;
  let commentsCreateProducts = document.getElementById(
    "proyectCreateComments"
  ).value;
  let descriptionCreatedProducts = document.getElementById(
    "descriptionCreatedProducts"
  ).value;
  if (nameCreateProducts == null || nameCreateProducts == "") {
    alert("Please enter the name product.");
    return false;
  }
  if (commentsCreateProducts == null || commentsCreateProducts == "") {
    alert("Please enter the comments product.");
    return false;
  }
  if (descriptionCreatedProducts == null || descriptionCreatedProducts == "") {
    alert("Please enter description product.");
    return false;
  }
  let categoryCreatedProducts = parseInt(
    document.getElementById("categoryCreatedProducts").value,
    10
  );
  let statusCreateProducts = parseInt(
    document.getElementById("statusCreateProducts").value,
    10
  );
  let dataCreated = {
    nameCreateProducts,
    commentsCreateProducts,
    descriptionCreatedProducts,
    categoryCreatedProducts,
    statusCreateProducts,
  };
  let creating = await fetch("http://localhost:5000/insertProductsStore", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataCreated),
  });
  /* location.reload();*/ //cargar la paginba
};
const updateProducts = async () => {
  let nameProducts = document.getElementById("proyectName").value;
  let commentsProducts = document.getElementById("proyectComments").value;
  let descriptionProducts = document.getElementById("proyectDescription").value;
  if (nameProducts == null || nameProducts == "") {
    alert("Please enter the name product.");
    return false;
  }
  if (commentsProducts == null || commentsProducts == "") {
    alert("Please enter the comments product.");
    return false;
  }
  if (descriptionProducts == null || descriptionProducts == "") {
    alert("Please enter description product.");
    return false;
  }
  let categoryProducts = parseInt(
    document.getElementById("proyectCategory").value,
    10
  );
  let statusProducts = parseInt(
    document.getElementById("statusPruducts").value,
    10
  );
  let dataUpdate = {
    idProducts,
    nameProducts,
    commentsProducts,
    descriptionProducts,
    categoryProducts,
    statusProducts,
  };
  console.log(dataUpdate);
  let searching = await fetch("http://localhost:5000/updateProductsStore", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataUpdate),
  });
  location.reload(); //cargar la paginba
};
const deleteProducts = async () => {
  let idProductStore = {
    idProducts,
  };
  let deleteProduct = await fetch("http://localhost:5000/deleteProductsStore", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(idProductStore),
  });
  location.reload();
};
