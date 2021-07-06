import { ItemCount } from "../itemCountComponent";

export const Item = (props) => {
   var image = props.img;
    return <>
        <div class="row .row-cols-3 row-cols-md-3 g-4">
            <div class="col">
                    <div class="card"> 
                    <a href={"../item/"+props.id}>
                        <img src={"../images/productos/"+image} class="card-img-top" alt="cera"/>
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">
                            {props.description} 
                        </p>
                        <h5 class="card-title">{props.price}</h5>
                    </div>
                    <ItemCount initial="1" stock="5" id={props.id} price={props.price} />
                </div>
            </div>
        </div>
    </>
}