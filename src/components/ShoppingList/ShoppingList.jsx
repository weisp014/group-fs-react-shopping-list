

function ShoppingList({ list }) {
    console.log('in ShopList looking at props:', list)


    // Once purchased, buttons should be hidden and the item should show as "Purchased".

    const buyGrocery = () => {
        console.log('inside')
    }






    return (
        <>
            <h2>Shopping List</h2>
            <button >Reset</button> <button>Clear</button>

            <div>
                {list.map((grocery) => (
                    <div key={grocery.id}>
                        <div>
                            <div>{grocery.name}</div>
                        </div>
                        <div>
                            <div> {grocery.quantity} {grocery.unit} </div>
                        </div>
                        <div>
                            <div>
                                {grocery.purchased ? 
                                 <p>Purchased</p>:
                                    <div>
                                        <button onClick={buyGrocery}>Buy</button>
                                        <button>Remove</button>
                                    </div> }

                            </div>
                        </div>
                    </div>
                ))}




            </div>

        </>
    )

}



export default ShoppingList;


