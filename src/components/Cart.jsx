export default function Cart({setCart, cart}) {
    return(
        <>{cart.map(cartItem => {
            return (
                <div>
                    <h1>{cartItem.name}</h1>
                    <h1>{cartItem.quantity}</h1>

                </div>
            )
        })}</>
    )
}