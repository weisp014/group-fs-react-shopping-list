

function ShoppingList({ list }) {
    console.log('in ShopList looking at props:', list)

    return (
        <>
            <h2>Shopping List</h2>
            <button>Reset</button> <button>Clear</button>

            <div>
                {list.map((grocery) => (
                    <div key={grocery.id}>
                        <div>
                            <div>{grocery.name}</div>
                        </div>
                        <div>
                            <div> {grocery.unit} {grocery.unit} </div>
                        </div>
                        <div>
                            <div> <button onClick={purchasedItem}>Buy</button> <button onClick={removeItem}>Remove</button> </div>
                        </div>
                    </div>
                ))}


                <div></div>

                <div>buttons here</div>


            </div>

        </>
    )

}



export default ShoppingList;


{
    list.map((grocery) => (
        <tr key={grocery.id} >
            <td>
                {grocery.name}
            </td>
        </tr>
    ))
}