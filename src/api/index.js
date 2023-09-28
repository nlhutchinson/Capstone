const baseUrl = 'https://fakestoreapi.com'
// https://fakestoreapi.com/products
const productContainer = document.getElementById('all-products-container');
const newProductFormContainer = document.getElementById('new-product-form');
const cartContainer = document.getElementById('cart-container');
const detailContainer = document.getElementById('detail-container');

// export async function fetchAllProducts() {
//   try {
//     const response = await fetch(`${baseUrl}/products`);
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }

// export async function fetchSingleProduct(id) {
//   try {
//     const response = await fetch(`${baseUrl}/products/${id}`);
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }

// export async function createProduct(name, price) {
//   try {
//     const response = await fetch(`${baseUrl}/products`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         name,
//         price
//       })
//     });
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }

// export async function deleteProduct(id) {
//   try {
//     const response = await fetch(`${baseUrl}/products/${id}`, {
//       method: "DELETE"
//     });
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }


const fetchAllProducts= async () => {
    try {
         const response = await fetch(`${baseUrl}/products`);
      const products = await response.json();
      return products;

    } catch (error) {
        console.error(error);
    }
};

const fetchSingleProduct = async (productId) => {
    try {
        const response = await fetch (`${baseUrl}/products/${productId}`);
      const product= await response.json();
      return product
 } catch (error) {
        console.error(error);
    }
};

const fetchAllCarts= async () => {
  try {
       const response = await fetch(`${baseUrl}/carts`);
    const carts = await response.json();
    return carts;

  } catch (error) {
      console.error(error);
  }
};

const renderAllCarts = (cartList) => {
  try {
      cartContainer.innerHTML= '';
       cartList.forEach((cart) => {
     const cartElement = document.createElement('div');
     cartElement.classList.add('cart');
      cartElement.innerHTML = `
      <img src =${cart.image} class = img/>
      <h2>${cart.title}</h2>
      `;

  cartContainer.appendChild(cartElement);
});
} catch (error) {
console.error(error);
}
};

const addNewProduct = async (productObj) => {
    try {
        const response =await fetch (`${baseUrl}/${id}`,{
       method: 'POST',
        });

          const addedNewProduct = await response.json();
          return addedNewProduct;
        
        } catch (error) {
        console.error(error);
    }
};

const removeProduct = async (productId) => {
    try {
       const response = await fetch(`${baseUrl}/${id}`, {
         method: 'REMOVE', 
        });
         const removedProduct =await response.json();
         return removedProduct;
       } catch (error) {
        console.error(error);
    }
};


const updateDetails = (productId) => {
  try {
        detailContainer.innerHTML= '';
        const detailElement = document.createElement('div');
        detailElement.classList.add('product');
        detailElement.innerHTML = `
        <img src =${productId.image} class = img/>
        <h2>${productId.title}</h2>
        <p>Price: $${productId.price}</p>
        <p>Description: ${productId.description}</p>
        <button class="remove-button" data-id="${productId.id}">Close</button> 
        `;
        detailContainer.appendChild(detailElement);

        const removeButton = detailElement.querySelector('.remove-button');
        removeButton.addEventListener('click', async (event) => {
        try {
        detailContainer.removeChild(detailElement);
        } catch (error) {
        console.error(error);
        }
        });

  } catch (error) {
      console.error('Error', error);
  }
}

const updateCart = (productId) => {
  try {
        //console.log(productId);
        const cartElement = document.createElement('div');
        cartElement.classList.add('product');
        cartElement.innerHTML = `
        <img src =${productId.image} class = img/>
        <h2>${productId.title}</h2>
        <button class="remove-button" data-id="${productId.id}">Remove from Cart </button>`
        cartContainer.appendChild(cartElement);

        const removeButton = cartElement.querySelector('.remove-button');
        removeButton.addEventListener('click', async (event) => {
        try {
        cartContainer.removeChild(cartElement);
        } catch (error) {
        console.error(error);
        }
        });

  } catch (error) {
      console.error('Error', error);
  }
}

const renderAllProducts = (productList) => {
    try {
        productContainer.innerHTML= '';
         productList.forEach((product) => {
       const productElement = document.createElement('div');
       productElement.classList.add('product');
        productElement.innerHTML = `
        <img src =${product.image} class = img/>
        <h2>${product.title}</h2>

        <button class="details-button" data-id="${product.id}">See Details</button>
        <button class="add-button" data-id="${product.id}">Add to Cart</button>
        `;

    productContainer.appendChild(productElement);

    const detailsButton = productElement.querySelector('.details-button');
    detailsButton.addEventListener('click', async (event) => {
    try {
      const id = event.target.dataset.id;
      const newProduct = await fetchSingleProduct(product.id);
      updateDetails(newProduct);
    }  catch (error) {
    console.error(error);
    }
    });

    const addButton = productElement.querySelector('.add-button');
    addButton.addEventListener('click', async (event) => {
      try {
          const id = event.target.dataset.id;
          const newProduct = await fetchSingleProduct(product.id);
          updateCart(newProduct);
        
      } catch (error) {
        console.error(error);
      }
    });

});
} catch (error) {
  console.error(error);
}
};
         
                   
const renderNewProductForm = (productId) => {
    try {
        
    } catch (error) {
        console.error('Error', error);
    }
}

const init = async () => {
    const products = await fetchAllProducts();
    renderAllProducts(products);
    console.log(products);
    const carts = await fetchAllCarts();
    renderAllCarts(carts);
    console.log(carts);

    renderNewProductForm();
}

init();
