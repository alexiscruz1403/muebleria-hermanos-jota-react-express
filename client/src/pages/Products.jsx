import { useState } from "react"
import { Container } from "../components/Container/Container"
import { Title } from "../components/Title/Title"
import { SearchBar } from "../components/SearchBar/SearchBar"
import { ProductList } from "../components/ProductList/ProductList"
import { getProducts } from "../services/getProducts"

export const Products = ({navigate}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async (searchTerm) => {
        try{
            setLoading(true);
            const data = await getProducts(searchTerm);
            setProducts(data);
            setLoading(false);
        }catch(error){
            console.error('Error fetching products:', error);
        }
    }

    return (
        <Container>
            <Title text="Nuestros Productos" />
            <SearchBar onSearch={fetchProducts} />
            <ProductList
                products={products} 
                onProductSelect={navigate}
                loading={loading}
            />
        </Container>
    )
}