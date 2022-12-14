import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import { useState, useEffect } from "react";
import styles from "../css/Cart.module.css";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

function Products() {
    const [dbProducts, setDbProducts] = useState([]);  // Siin sees on k]ik andmebaasitooted 300tk
    const [categoryProducts, setCategoryProducts] = useState([]);  // siin sees on yhe kategooria l6ikes tooted 120tk
    const [products, setProducts] = useState([]); // siin sees on yhe kategooria yhe lehekylje tooted 20tk
    const [categories, setCategories] = useState([]);

    useEffect(() => {     // kui lehele tulen, siis koheselt (mitte nupulevajutusega) tehakse API päring teise rakendusse, nt Omniva pakiautomaadid
        const api = new WooCommerceRestApi({
            url: "http://localhost/wordpress",
            consumerKey: "ck_cdc8e6a48c74200ea246c8b34fa47ffc3b3605d2",
            consumerSecret: "cs_d1272f2404fe5045fac4fdd46846216e5304cab0",
            version: "wc/v3",
            axiosConfig: {
                headers: {},
              }
          });
          api.get("products", {
            per_page: 10, // 20 products per page
          })
            .then((response) => {
              // Successful request
              setDbProducts(response.data);
              setProducts(response.data.slice(0,3));
              setCategoryProducts(response.data);
              setCategories([...new Set(response.data.map(element => element.categories[0].name))])
            })
    }, []);

    const sortAZ = () => {
        categoryProducts.sort((a,b) => a.name.localeCompare(b.name));
        setProducts(categoryProducts.slice(0,3));
        setActivePage(1);
    }

    const sortZA = () => {
        categoryProducts.sort((a,b) => b.name.localeCompare(a.name));
        setProducts(categoryProducts.slice(0,3));
        setActivePage(1);
    }

    const sortPriceAsc = () => {
        categoryProducts.sort((a,b) => a.price - b.price);
        setProducts(categoryProducts.slice(0,3));
        setActivePage(1);
    }

    const sortPriceDesc = () => {
        categoryProducts.sort((a,b) => b.price - a.price);
        setProducts(categoryProducts.slice(0,3));
        setActivePage(1);
    }

    const sortIdAsc = () => {
        categoryProducts.sort((a,b) => a.id - b.id);
        setProducts(categoryProducts.slice(0,3));
        setActivePage(1);
    }

    const sortIdDesc = () => {
        categoryProducts.sort((a,b) => b.id - a.id);
        setProducts(categoryProducts.slice(0,3));
        setActivePage(1);
    }

    const showByCategory = (categoryClicked) => {
        const result = dbProducts.filter(element => element.category[0].name === categoryClicked);
        setCategoryProducts(result);
        setProducts(result.slice(0,3));
        setActivePage(1);
    }

    const [activePage, setActivePage] = useState(1);
    const pages = [];
    for (let index = 0; index < categoryProducts.length/3; index++) {
        pages.push(index+1);
    }

    const changeActivePage = (pageClicked) => {
        setActivePage(pageClicked);
        setProducts(categoryProducts.slice(pageClicked*3-3, pageClicked*3));
    }

    const addToCart = (productClicked) => {
        let cartLS = localStorage.getItem("cart");
        cartLS = JSON.parse(cartLS) || [];
        const index = cartLS.findIndex(element => element.product.id === productClicked.id);
        if (index === -1) {
            cartLS.push({product: productClicked, quantity:1});
        } else {

            cartLS[index].quantity = cartLS[index].quantity + 1 ;
        }
        cartLS = JSON.stringify(cartLS);
        localStorage.setItem("cart", cartLS);
    }

    return ( 
    <div>
        <Pagination>
          {pages.map(number => 
          <Pagination.Item key={number} onClick={() => changeActivePage(number)} active={number === activePage}>
            {number}
          </Pagination.Item>)}
        </Pagination>

        {categories.map(element => 
            <button key={element} onClick={() => showByCategory(element)}>
                {element}
            </button>)}
            <div>Kokku tooteid: {categoryProducts.length} </div>
        <br/>
        <button onClick={sortAZ}>Sorteeri A-Z</button>
        <button onClick={sortZA}>Sorteeri Z-A</button>
        <button onClick={sortPriceAsc}>Hind kasvavalt</button>
        <button onClick={sortPriceDesc}>Hind kahanevale</button>
        <button onClick={sortIdAsc}>Vanemad enne</button>
        <button onClick={sortIdDesc}>Uuemad enne</button>
        <br/>
        <br/>
        {products.map(element =>
            <div className={styles.product} key={element.id}>       {/* // react tahab teada, mis on elemendi unikaalsuse tunnus - error konsoolis "each child in _____ a list should have a unique key prop"*/}
            { element.images[0] && <img className="productImage" src={element.images[0].src} alt=""/>}
            <div>{element.name}</div>
            <div>{element.price} €</div>
            <Button onClick={() => addToCart(element)} variant="success">Lisa ostukorvi</Button>
            </div>
        )}
    </div> );
}

export default Products;