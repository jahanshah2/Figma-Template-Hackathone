import {Iproducts} from '../../lib/types'

export const addToCart = (product : Iproducts) =>{
    const cart:Iproducts[] = JSON.parse(localStorage.getItem('cart') || "[]")

    const existingProduct = cart.findIndex(item => item._id === product._id)

    if(existingProduct > -1){
        cart[existingProduct].inventory += 1
    }else{
        cart.push({
            ...product , inventory : 1
        })
    }

    localStorage.setItem('cart',JSON.stringify(cart))
}

export const removeCart = (productId : string) =>{
    const cart:Iproducts[] = JSON.parse(localStorage.getItem('cart') || '[]')

    const updatedCart = cart.filter((item: Iproducts) => item._id !== productId);

    localStorage.setItem('cart', JSON.stringify(updatedCart))
}

export const updateCartQuantity = (productId : string , quantity: number) =>{
    const cart:Iproducts[] = JSON.parse(localStorage.getItem('cart') || '[]' )

    const productIndex = cart.findIndex(item => item._id === productId)

    if(productIndex > -1){
        cart[productIndex].inventory = quantity
    }
}

export const getCartItem = () : Iproducts[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}