import {Item} from '../itemComponent/item.jsx';



export const ItemList = (props) => {
    const items = props.items;
    return <>
        {items.map((item) => (  
            <Item title={item.title} price={item.price} description={item.descripcion} id={item.id}/>
        ))}        
    </>
}