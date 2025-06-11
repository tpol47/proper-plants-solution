import Plants from './components/Plants.jsx'
import Cart from './components/Cart.jsx'
import { useState } from 'react';


export default function App() {
  const [cart, setCart] = useState([])

  const addToCart = (plant) => {
    //if the plant doesn't exist in the cart, 
    //I want to add it with a quantity of 1

    //found plant has a value if plant has already been added to the cart
    const foundPlant = cart.find((cartPlant) => cartPlant.name === plant.name)

    //if plant is not found, go ahead and add it to the cart with
    //a quanitiy of 1
    if(!foundPlant) {
      setCart([ ...cart, { ...plant, quantity: 1} ])
    //if plant is found, map through the cart items, and increment the 
    //quantity of the one whose name matches the name of the plant we want to add
    } else {
      setCart(cart.map(cartItem => {
        if(cartItem.name === plant.name) {
          return (
            {
              ...cartItem,
              quantity: cartItem.quantity + 1
            }
          )
        } else {
          return cartItem
        }
      }))
    }
    console.log(cart)
  }

  return (<>
    <Plants setCart={setCart} addToCart={addToCart} />
    <Cart setCart={setCart} cart={cart} />
  </>);
}
