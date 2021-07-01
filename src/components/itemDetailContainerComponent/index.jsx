import { useEffect, useState } from 'react';
import { ItemDetail } from '../itemDetailComponent/index.jsx';

function DevolverItems() {
    return new Promise(resolve => {
        resolve({id:1, price:896, title:'Cera', descripcion:'Cera Carauba'})
    });
}

async function asyncCall() {
    return await DevolverItems();
}

export const ItemDetailContainer = (props) => {
    const [producto, setProducto] = useState([])
    useEffect(()=>{
        DevolverItems().then(data => {
            setTimeout(() => {
                setProducto(data);
            }, 2000);
        })
    },[producto]);
    return <>
        <h2>{props.message}</h2>
        <ItemDetail producto={producto} />
    </>
}
