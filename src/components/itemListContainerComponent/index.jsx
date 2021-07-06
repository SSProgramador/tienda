
import { useEffect, useState } from 'react';
import {ItemCount} from '../itemCountComponent/index.jsx';
import {ItemList} from '../itemListComponent/index.jsx';
import './styles.css';

function DevolverItems() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
            [
                {id:1, price:896, title:'Lava autos', descripcion:'Lava Autos Siliconado K78', category:1, img:'lavaautok78.jpg'},
                {id:2, price:896, title:'Shampoo con cera', descripcion:'Shampoo con cera', category:1, img:'shampooCera.jpg'},
                {id:3, price:896, title:'Cera', descripcion:'Cera Carauba', category:2, img:'ceraCarnaubaK78.jpg'},
                {id:4, price:896, title:'Cera', descripcion:'Cera Carauba', category:2, img:'ceraCarnaubaK78.jpg'}
            ]
        )
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
    },[]);
    return <>
        <h2>{props.message}</h2>
        <ItemList items={arrayItems} />
    </>
}
