import axios from 'axios';

function ShoppingList({ list, getGroceries, getGroceries }) {
    console.log('in ShopList looking at props:', list)

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
                            <div> <button>Buy</button> <button>Remove</button> </div>
                        </div>
                    </div>
                ))}


                

            </div>
        </>
    )

}



export default ShoppingList;


