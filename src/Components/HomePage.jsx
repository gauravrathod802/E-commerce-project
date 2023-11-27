import { useEffect, useState } from "react";
import "./Styles/HomePage.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";


function HomePage() {
    const router=useNavigate()
    const [products, setProducts] = useState([]);
    console.log(products, "product")

    async function getProduct() {
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
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
        <div className='homepage'>
            <h1>All Products</h1>
            <div className='homepage-box'>
                {products.map((product) => (
                    <div className='homepage-box-child'
                    onClick={()=>router('/single-product/:id')}>
                        <img src={product.image} alt='' />
                        <h3>{product.title}</h3>
                        <h4>${product.price}</h4>

                    </div>
                ))}
            </div>
        </div>
    )
}
export default HomePage;