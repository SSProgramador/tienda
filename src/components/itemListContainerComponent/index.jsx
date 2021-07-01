
import { useEffect, useState } from 'react';
import {ItemCount} from '../itemCountComponent/index.jsx';
import {ItemList} from '../itemListComponent/index.jsx';
import './styles.css';

function DevolverItems() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([{id:1, price:896, title:'Cera', descripcion:'Cera Carauba'},{id:2, price:888, title:'titulo', descripcion:'desc'}])
      }, 2000);
    });
}

async function asyncCall() {
    return await DevolverItems();
}

export const ItemListContainer = (props) => {
    const [arrayItems, setItems] = useState([])
    useEffect(()=>{
        asyncCall().then(data =>{
            console.log(data);
            setItems(data);
        })
        //const arrayItems = items;
    },[]);
    return <>
        <h2>{props.message}</h2>
        <ItemList items={arrayItems} />
    </>
}
