import { useEffect, useState } from 'react';
import './Styles/Womens.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Womens(){
    const [products, setProducts] = useState([]);
    const router=useNavigate();
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
        <div className='womens'>
        <h1>Womens</h1>
        <div className='womens-box'>
            {products.map((product) => (
                <div className='womens-box-child' onClick={()=>router(`/single-product/${product.id}`)}>
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