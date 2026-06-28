import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);


  // ADD PRODUCT TO CART
  const addToCart = (
    product,
    selectedPack,
    quantity = 1
  ) => {

    setCart((prev) => {

      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.pack === selectedPack.size
      );


      // If product already exists
      if (existing) {

        return prev.map((item) =>
          item.id === product.id &&
          item.pack === selectedPack.size

            ? {
                ...item,
                quantity:
                  item.quantity + quantity,
              }

            : item
        );
      }


      // New product
      return [
        ...prev,

        {
          id: product.id,

          name: product.name,

          image: product.image,

          pack: selectedPack.size,

          price: selectedPack.price,

          quantity: quantity,
        },
      ];

    });

  };



  // REMOVE PRODUCT
  const removeFromCart = (
    id,
    pack
  ) => {

    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === id &&
            item.pack === pack
          )
      )
    );

  };



  // INCREASE QUANTITY
  const increaseQuantity = (
    id,
    pack
  ) => {

    setCart((prev) =>
      prev.map((item) =>
        item.id === id &&
        item.pack === pack

          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }

          : item
      )
    );

  };



  // DECREASE QUANTITY
  const decreaseQuantity = (
    id,
    pack
  ) => {

    setCart((prev) =>

      prev
        .map((item) =>
          item.id === id &&
          item.pack === pack

            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }

            : item
        )

        .filter(
          (item) =>
            item.quantity > 0
        )

    );

  };



  // CLEAR CART
  const clearCart = () => {
    setCart([]);
  };



  // TOTAL PRODUCT COUNT
  // Example:
  // Hair Oil x5
  // Shikakai x2
  // Navbar shows 2
  const cartCount = useMemo(() => {

    return cart.length;

  }, [cart]);



  // TOTAL QUANTITY
  const totalQuantity = useMemo(() => {

    return cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );

  }, [cart]);



  // TOTAL PRICE
  const totalPrice = useMemo(() => {

    return cart.reduce(
      (total, item) =>
        total +
        item.price *
        item.quantity,

      0
    );

  }, [cart]);



  return (

    <CartContext.Provider

      value={{

        cart,

        addToCart,

        removeFromCart,

        increaseQuantity,

        decreaseQuantity,

        clearCart,

        cartCount,

        totalQuantity,

        totalPrice,

      }}

    >

      {children}

    </CartContext.Provider>

  );

}



export const useCart = () =>
  useContext(CartContext);