

function ShoppingList({ list, getGroceries }) {
    console.log('in ShopList looking at props:', list)

    const resetAll = () => {
        axios.put('/cart', {})
            .then((response) => {
                getGroceries();
            })
            .catch((err) => {
                alert('error resetting',err);
            });
    }


    return (
        <>
            <h2>Shopping List</h2>
            <button onClick={resetAll}>Reset</button> <button>Clear</button>

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
                            <div> <button>Buy</button> <button>Remove</button> </div>
                        </div>
                    </div>
                ))}


                

            </div>

        </>
    )

}



export default ShoppingList;


