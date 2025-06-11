import plants from '../data.js'

export default function Plants({setCart, addToCart}) {
    return(
        <>
            {plants.map(plant => {
                return(
                    <div>
                        <h1>{plant.name}</h1>
                        <p>{plant.image}</p>
                        <button onClick={() => addToCart(plant)}>Add to Cart</button>
                    </div>
                )
            })}
        </>
    )
}