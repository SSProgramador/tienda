import { useEffect, useState } from 'react';

export const ItemCount = (props) => {
    
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(props.initial);
    console.log(cart);
    useEffect(()=>{
        
    },[quantity]);

   
    return <>
    <div class="ItemCount">
        <div>
        <button onClick={() =>{
                changeQuantityItem('subtract', props.stock);
            }}>-</button>
            <input type="number" value={quantity}/>
            <button onClick={() =>{
                changeQuantityItem('add', props.stock);
            }}>+</button>
        </div>

        <div>
            <button type="button" class="btn btn-danger" 
            onClick={() => {
                    setCart([...cart, {id:props.id, price:props.price}])
            }}>Agregar al carrito</button>
        </div>
        
    </div>
        
    </>
    function changeQuantityItem(operation, stock) {
        if (operation === 'add'){
            if (quantity < stock){
                setQuantity(parseInt(quantity)+1);
            }
        }

        if (operation === 'subtract'){
            if (quantity > 1){
                setQuantity(parseInt(quantity)-1);
            }
        }

    }
 
}