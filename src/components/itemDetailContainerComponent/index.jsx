import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../itemDetailComponent/index.jsx';

function DevolverItems() {
    return new Promise(resolve => {
        resolve(
            [
                {id:1, price:896, title:'Lava autos', descripcion:'Lava Autos Siliconado K78', category:1, img:'lavaautok78.jpg'},
                {id:2, price:896, title:'Shampoo con cera', descripcion:'Shampoo con cera', category:1, img:'shampooCera.jpg'},
                {id:3, price:896, title:'Cera', descripcion:'Cera Carauba', category:2, img:'ceraCarnaubaK78.jpg'},
                {id:4, price:896, title:'Cera', descripcion:'Cera Carauba', category:2, img:'ceraCarnaubaK78.jpg'}
            ]
        )
    });
}

async function asyncCall() {
    return await DevolverItems();
}

export const ItemDetailContainer = (props) => {
    const [producto, setProducto] = useState([])
    const {id} = useParams();
    useEffect(()=>{
        DevolverItems().then(data => {
            
            setTimeout(() => {
                setProducto(data.filter(x=>x.id ==id)[0]);
            }, 2000);
        })
    },[producto]);
    return <>
        <h2>{props.message}</h2>
        <ItemDetail producto={producto} />
    </>
}
