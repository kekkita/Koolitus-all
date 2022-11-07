import { useRef } from "react";
import { useEffect, useState } from "react";
import styles from "../css/Cart.module.css";
import { Link } from "react-router-dom";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
// headless wordpress / headless woocommerce / headless cms

function Cart() { 
    const [cart, setCart] = useState ( JSON.parse(localStorage.getItem("cart")) || [] );
    const [parcelMachines, setParcelMachines] = useState([]);
    const pmRef = useRef();

    // uef + enter
    useEffect (() => {
        fetch("https://www.omniva.ee/locations.json")
            .then (res => res.json())
            .then (json => setParcelMachines(json))
    }, []);

    const remove = (productIndex) => {
        cart.splice(productIndex,1);
        setCart(cart.slice());
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    const calculateCartSum = () => {
        let cartSum = 0;
        cart.forEach(element => cartSum = cartSum + element.product.price * element.quantity);
        return cartSum.toFixed(2);
    }

    const decreaseQuantity = (productIndex) => {
        cart[productIndex].quantity = cart[productIndex].quantity - 1;
        setCart(cart.slice());
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    const increaseQuantity = (productIndex) => {
        cart[productIndex].quantity = cart[productIndex].quantity + 1;
        setCart(cart.slice());
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    const sendOrder = () => {
        console.log(pmRef.current.value);
        console.log(cart);
        const api = new WooCommerceRestApi({
            url: "http://localhost/wordpress",
            consumerKey: "ck_cdc8e6a48c74200ea246c8b34fa47ffc3b3605d2",
            consumerSecret: "cs_d1272f2404fe5045fac4fdd46846216e5304cab0",
            queryStringAuth: true,
            version: "wc/v3",
            axiosConfig: {
                headers: {'Content-Type': 'application/json'},
              }
          });
                            // noole järel välimised loogelised sulud on funktsiooni tähistus   => *{* return {}*}*
    const woocommerceCart = cart.map(element => { 
        return {product_id: element.product.id, quantity: element.quantity}
        });
        console.log (woocommerceCart)
    api.post("orders", {"line_items":woocommerceCart})
    // .then(res => console.log(res))
    .then(res => pay(res.data.id))
    
}

    const pay = (orderID) => {
        const data = {
                "api_username": "92ddcfab96e34a5f",
                "account_name": "EUR3D1",
                "amount": calculateCartSum(),
                "order_reference": orderID,
                "nonce": "a9b7f7e" + Math.random() * 999999 + new Date(),
                "timestamp": new Date(),
                "customer_url": "https://drutoopia.web.app"
        }
        fetch("https://igw-demo.every-pay.com/api/v4/payments/oneoff",{
        "method": "POST",
        "body": JSON.stringify(data),
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="
        }
        }).then(res => res.json())
        .then (json => window.location.href = json.payment_link);

    }

    return ( 
        <div>
            <br/>
            {cart.map((element, index) =>
                <div key={index} className={styles.product}>
                    { element.product.images[0] && <img className={styles.image} src={element.product.images[0].src} alt=""/>}
                    <div className={styles.name}>{element.product.name}</div>
                    <div className={styles.price}>{element.product.price} €</div>
                    <div className={styles.quantity}>
                        <img className={styles.button} onClick={() => decreaseQuantity(index)} src={"/images/minus.png"} alt=""/>
                        <div>{element.quantity} tk</div>
                        <img className={styles.button} onClick={() => increaseQuantity(index)} src={"/images/plus.png"} alt=""/>
                    </div>
                    <div className={styles.sum}>{( element.product.price * element.quantity).toFixed(2)} €</div>
                    <img className={styles.button} onClick={() => remove(index)} src={"/images/delete.png"} alt=""/>
                </div>)}

                { cart.length > 0 && 
                 <div className={styles.cart_bottom}>
                <div> Kokku: {calculateCartSum()} €</div>
                <br/>
                <div> Vali pakiautomaat:</div>
                <select ref={pmRef}>{parcelMachines
                    .filter(element => element.A0_NAME === "EE")
                    .map(element => 
                <option key={element.NAME}>{element.NAME}</option>)}
                </select>
                <br/><br/>
                <button onClick={sendOrder} >Vormista tellimus</button>
                </div>}

                {cart.length === 0 && 
                <div>
                    <div>Ostukorvis pole tooteid.</div>
                    <div>Vajuta siia <Link to="/tooted">siia</Link>, et jätkata ostlemist.</div>
                </div>}

        </div> );
}

export default Cart;