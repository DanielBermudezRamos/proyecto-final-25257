import {collection, getDocs, getDoc, doc, deleteDoc, updateDoc, addDoc} from 'firebase/firestore';
import { data } from '../firebase/config.js';
import { ProductModel } from '../models/product.model.js';

const collectionName = "productos" ;

export const findAllProducts = async () => {
    const products = collection(data, collectionName);
    const snapshot = await getDocs(products);
    return snapshot.docs.map(doc => new ProductModel({id: doc.id, ...doc.data()}));
}

export const findProductsById = async (id) => {
    const product = collection(data, collectionName, id);
    const docSnap = await getDoc(product);

    if(!docSnap.exists()) return null;

    return new ProductModel({id: docSnap, ...docSnap.data()});
}

export const addProduct = async (body) => {

    if(!body.nombre || !body.precio) {
        throw new Error("Faltan datos obligatorios: nombre o precio");        
    }
    
    const newProduct = collection(data, collectionName);
    const docRef = await addDoc(newProduct, {
        nombre: body.nombre,
        precio: Number(body.precio),
        stock: Number(body.stock || 0),
        descripcion: body.descripcion || 'sin descripcion',
        categoria: body.categoria || ''
    });
    
    return new ProductModel({id: docRef.id , ...body});
}

export const delProductsById = async (id) => {
    const docRef = doc(data, collectionName, id);
    const docSnap = await getDoc(docRef)

    if(!docSnap.exists()) return null;

    await deleteDoc(docRef);
    return true;
}

export const updateProduct =async (id, data) => {
    const docRef = doc(data,collectionName, id);
    const docSnap = await getDoc(docRef)

    if(!docSnap.exists()) return null;

    await updateDoc(docRef, data);

    return {id, ...docSnap.data(), ...data }
}