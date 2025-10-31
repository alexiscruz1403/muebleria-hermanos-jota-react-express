import { Product } from "../models/ProductsModel.js";

export const getProducts = async (req, res) => {
  try {
    const search = req.query.search;
    let products;

    if (search) {
      products = await Product.find({
        $or: [
          { nombre: { $regex: search, $options: "i" } },
          { descripcion: { $regex: search, $options: "i" } },
        ],
      });
    } else {
      products = await Product.find();
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener productos", error });
  }
};

export const getDestacados = async (req, res) => {
  try {
    const destacadoProducts = await Product.find().limit(5);
    res.json(destacadoProducts);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener destacados", error });
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar producto", error });
  }
};