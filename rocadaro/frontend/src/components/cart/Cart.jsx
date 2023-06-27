import "bootstrap-icons/font/bootstrap-icons.css";
import Store from "../../store/Context";



export default function ListCart(props) {
    const { item } = props
    const { removeItemCart } = Store()

    const [cart, setCart] = useState([]);


   

    return(
        <>
         <div className="cart_center">

<div className="cart_item">
    <img src={item.image} alt="" />
    <div>
        <h3>{item.title}</h3>
        <p className="price">{item.price} €</p>
    </div>
    
    <div className="remove_item" onClick={() => {removeItemCart(item.cartEntryId)}}>
    <i className="bi bi-trash"></i>
    </div>
</div>

</div>

        </>
    )
}