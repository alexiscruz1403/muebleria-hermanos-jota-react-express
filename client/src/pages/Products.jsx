import { useState, useEffect } from "react"
import { Container } from "../components/Container"
import { Title } from "../components/Title"
import { SearchBar } from "../components/SearchBar"
import { ProductList } from "../components/ProductList"

export const Products = ({navigate}) => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try{
            const response = await fetch('http://localhost:4000/api/productos');
            const data = await response.json();
            setProducts(data);
        }catch(error){
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <Container>
                <Title text="Nuestros Productos" />
                <SearchBar onSearch={setProducts} />
                <ProductList
                    products={products} 
                    onProductSelect={navigate} 
                />
            </Container>
        </div>
    )
}