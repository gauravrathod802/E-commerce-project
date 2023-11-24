import { useEffect, useState } from 'react';
import './Styles/Womens.css'
import axios from 'axios';
function Womens(){
    const [products, setProducts] = useState([]);
    console.log(products, "product")

    async function getProduct() {
        try {
            const response = await axios.get("https://fakestoreapi.com/products/category/women's clothing")
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
        <div className='mens'>
        <h1>Womens</h1>
        <div className='mens-box'>
            {products.map((product) => (
                <div className='mens-box-child'>
                    <img src={product.image} alt='' />
                    <h3>{product.title}</h3>
                    <h4>${product.price}</h4>

                </div>
            ))}
        </div>
    </div>
)
    
}
export default Womens;