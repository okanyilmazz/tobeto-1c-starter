import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Homepage() {
    const cart = useSelector((state: any) => {
        return state.cart;
    })
    debugger

    return (
        <div>Homepage

            {cart.cartItems.length} adet ürün sepette
            <br />
            <Link to={"/posts"}>Posts</Link>

        </div>
    )
}
