import './Styles/SingleProduct.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function SingleProduct() {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const router = useNavigate()

    async function getSingleProductData() {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProduct(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (id) {
            getSingleProductData();
        }
    }, [id])
    return (
        <div>
            <div className='single-product'>
                <div className="single-product-image">
                <img src={product.image} alt='' style={{width:'400px'}}/>
                </div>
                <div className="single-product-content">
                    <h1>{product.title}</h1>
                    <h2>Price : {product.price}</h2>
                    {/* <h2>Description : {product.description}</h2> */}
                    <h2>Rating {product.rating && product.rating.rate}</h2>
                    {/* <h2>Ratings : {product.rating[rate,count]}</h2> */}
                    <button id="add-to-cart"onClick={() => router('/cart')}>Add to cart </button>
                    <button id="buy-now">Buy Now</button>
                </div>
                
            </div>


        </div>
    )
}
export default SingleProduct;