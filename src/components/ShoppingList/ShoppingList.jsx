import axios from 'axios';

function ShoppingList({ list, getGroceries }) {
    console.log('in ShopList looking at props:', list)

    const deleteItem = (id) => {
        axios
            .delete(`/cart/${id}`)
            .then((response) => {
                onsole.log(response);
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
            <button>Reset</button> <button onClick={deleteAllItems}>Clear</button>

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
                            <div> <button>Buy</button> <button onClick={() => deleteItem(grocery.id)}>Remove</button> </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}



export default ShoppingList;


