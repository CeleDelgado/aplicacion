import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "dmd-proyect.firebaseapp.com",
  projectId: "dmd-proyect",
  storageBucket: "dmd-proyect.appspot.com",
  messagingSenderId: "388879470996",
  appId: "1:388879470996:web:48d1318dfd5993e027ff81"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore (app) //Referencia a mi base de datos

/**
 * CRUD PRODUCTOS
 * CREATE
 * READ
 * UPDATE
 * DELETE
 */


export const cargarBDD = async() => {
    const promise= await fetch ('./json/productos.json')
    const productos= await promise.json()
    productos.forEach( async (prod) => {
        await addDoc(collection(db, "productos"), {
            nombre: prod.nombre,
            marca: prod.marca,
            formato: prod.formato,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}


export const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items= productos.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    return items
}

export const getProducto = async(id) => {
    const producto= await getDoc(doc(db, "productos", id))
    const item= {...producto.data(), id:producto.id}
    return item
}

export const updateProducto= async(id, info) => {
    await updateDoc(doc(db, "productos", id), info)
}

export const deleteProducto= async (id) => {
    await deleteDoc(doc(db, "productos", id))
}

//CREAMOS UNA ORDEN DE COMPRA

export const createOrdenCompra= async(cliente, productos, precioTotal, fecha) => {
    const ordenCompra = await addDoc (collection(db, "ordenesCompra"), {
        datosCliente: cliente,
        productos: productos,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const oC= await getDoc(doc(db, "odenesCompra", id))
    const ordenCompra = { ...oC.data(), id: oC.id}
    return ordenCompra
}