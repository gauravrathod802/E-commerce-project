import axios from "axios";
import { useEffect, useState } from "react";
import './Styles/Electronics.css'
function Electronics(){
    const [products, setProducts] = useState([]);
    console.log(products, "product")

    async function getProduct() {
        try {
            const response = await axios.get("https://fakestoreapi.com/products/category/electronics")
            // console.log(response.data, "response from api")
            setProducts(response.data)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProduct();
    }, [])
    return(
        <div className='electronics'>
        <h1>Electronics</h1>
        <div className='electronics-box'>
            {products.map((product) => (
                <div className='electronics-box-child'>
                    <img src={product.image} alt='' />
                    <h3>{product.title}</h3>
                    <h4>${product.price}</h4>

                </div>
            ))}
        </div>
    </div>
    )
}
export default Electronics;