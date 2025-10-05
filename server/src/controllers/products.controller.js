import { products } from '../data/products.js';

export const getProducts = (req, res) => {
  const search = req.query.search;
  if (search) {
    const filteredProducts = products.filter(product =>
      product.nombre.toLowerCase().includes(search.toLowerCase()) ||
      product.descripcion.toLowerCase().includes(search.toLowerCase())
    );
    return res.json(filteredProducts);
  }
  res.json(products);
};

export const getDestacados = (req, res) => {
  const destacadoProducts = products.slice(0, 5);
  res.json(destacadoProducts);
};

export const getProductById = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }

  res.json(product);
};
