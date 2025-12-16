import * as productService from "../services/product.service.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await productService.findAllProducts();
        res.status(200).json({success:true, msj:"Productos Encontrados", data:products});

    } catch (error) {
        res.status(500).json({success:false, msj:"No se encontraron productos para devolver.", error: error.message});
    }
}

export const getProductById = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await productService.findProductsById(id);
        if (!product) {
            res.status(404).json({success:false, msj: `no estiste producto con id ${id}`, error: ""});
        }
        
        res.status(200).json({success:true, msj: "Producto Encontrado", data:product});

    } catch (error) {
        res.status(500).json({success:false, msj:"No se encontró producto para devolver.", error: error.message});
    }
}

export const createProduct = async (req, res) => {
    try {
        const prod = await productService.addProduct(req.body);
        if(!prod){
            res.status(404).json({success:false, msj: `no se pudo grabar el nuevo producto`, error: ''});
        }
        res.status(201).json({success: true, data:prod})
    } catch (error) {
        res.status(500).json({success:false, msj:"No se pudo agregar producto nuevo.", error: error.message});
    }
}

export const updateProduct = async (req, res) => {
    try {
       const updated = await  productService.updateProduct(req.params.id, req.body);

       if(!updated) {
        res.status(404).json({success:false, msj: `no se pudo actualizar el producto`, error: ''}); 
       }
       res.status(200).json({succes:true,msj:'producto actualizado correctamente', data:updated})
    } catch (error) {
        res.status(500).json({success:false, msj:"No se pudo actualizar producto."});
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await productService.delProductsById(id);
        if (!product) {
            res.status(404).json({success:false, msj: `no estiste producto con id ${id}`, error: ""});
        }
        
        res.status(200).json({success:true, msj: "Producto Eliminado"});
    } catch (error) {
        res.status(500).json({success:false, mjs:"No se pudo eliminar producto.", error: error.message});
    }
}