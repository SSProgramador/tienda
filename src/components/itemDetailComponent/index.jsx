import './styles.css';
import { ItemCount } from "../itemCountComponent";
export const ItemDetail = (item) => {
    
    const props = item.producto;
    console.log("prod",item.producto);
    return <>
        <div class="card"> 
            
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>    
                <img src="./images/productos/ceraCarnaubaK78.jpg" class="card-img-top" alt="cera"/>
                <p class="card-text">
                    {props.descripcion} 
                </p>
                <h5 class="card-title">${props.price}</h5>
                <ItemCount initial="1" stock="5" id={props.id} price={props.price}/>
            </div>
        </div> 
    </>
}