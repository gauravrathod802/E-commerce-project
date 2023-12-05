import { useEffect, useState } from 'react';
import './Styles/Mens.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Mens() {
    const [products, setProducts] = useState([]);
    const router=useNavigate();
    console.log(products, "product")

    async function getProduct() {
        try {
            const response = await axios.get("https://fakestoreapi.com/products/category/men's clothing")
            // console.log(response.data, "response from api")
            setProducts(response.data)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProduct();
    }, [])

    return (
        <div className='mens'>
            <h1>Mens</h1>
            <div className='mens-box'>
                {products.map((product) => (
                    <div className='mens-box-child' onClick={()=>router(`/single-product/${product.id}`)}>
                        <img src={product.image} alt='' />
                        <h3>{product.title}</h3>
                        <h4>${product.price}</h4>

                    </div>
                ))}
            </div>
        </div>
    )
}
export default Mens;