import { ItemCount } from "../itemCountComponent";
import {ItemDetailContainer} from "../itemDetailContainerComponent";
export const Item = (props) => {
    return <>
        <div class="card"> 
            <img src="./images/productos/ceraCarnaubaK78.jpg" class="card-img-top" alt="cera"/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">
                    {props.description} 
                </p>
                <h5 class="card-title">{props.price}</h5>
            </div>
            <ItemCount initial="1" stock="5" id={props.id} price={props.price} />
        </div> 
        
    </>
}