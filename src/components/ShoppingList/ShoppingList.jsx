import axios from 'axios';


function ShoppingList({ list, getGroceries }) {
    console.log('in ShopList looking at props:', list)

    // PUT RESET
    const resetAll = () => {
        axios.put('/cart', {})
            .then((response) => {
                getGroceries();
            })
            .catch((err) => {
                alert('error resetting',err);
            });
    }



    // Once purchased, buttons should be hidden and the item should show as "Purchased".

    const buyGrocery = (id) => {
        console.log('inside BG ()')
        axios.put(`/cart/${id}`)
            .then(response => {
                getGroceries()
            })
            .catch(err => {
                alert('error')
            })
    }

    const deleteItem = (id) => {
        axios
            .delete(`/cart/${id}`)
            .then((response) => {
                console.log(response);
                getGroceries();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const deleteAllItems = () => {
        axios
            .delete(`/deleteAll`)
            .then((response) => {
                console.log(response);
                getGroceries();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <h2>Shopping List</h2>
            <button onClick={resetAll}>Reset</button> <button onClick={deleteAllItems}>Clear</button>

            <div className='container' >
                {list.map((grocery) => (
                    <div className='boxContainer' key={grocery.id}>
                        <div>
                            <div>{grocery.name}</div>
                        </div>
                        <br></br>
                        <div>
                            <div> {grocery.quantity} {grocery.unit} </div>
                        </div>
                        <br></br>
                        <div>
                            <div>
                                {grocery.purchased ? 
                                 <p>Purchased</p>:
                                    <div className='Btn'>
                                        <button onClick={() => buyGrocery(grocery.id)}>Buy</button>
                                        <button onClick={() => deleteItem(grocery.id)}>Remove</button>
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


