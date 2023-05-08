import axios from "axios";
import { cartItemAdd, setLoading, setError } from "../slices/cart";

export const addToCart = (id, qty) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    // Get the cart from local storage and add the new item to it
    const { data } = await axios.get(`/api/products/${id}`); // Get the product from the server
    const itemToAdd = {
      id: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      stock: data.stock,
      qty,
    };
    dispatch(cartItemAdd(itemToAdd)); // Add the item to the cart
  } catch (error) {
    dispatch(
      setError(
        // If there is an error, set the error message to the error message from the server or set a generic error message
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "Something went wrong, Please try again later."
      )
    );
  }
};
