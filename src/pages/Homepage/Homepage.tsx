import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Homepage() {
    const cart = useSelector((state: any) => {
        console.log(state.cart)
    })
    useEffect(() => {
        localStorage.setItem("token", "abc");
        localStorage.setItem("token", "abc123");
        let name = localStorage.getItem("token");
        console.log(name)
        localStorage.removeItem("token");
        localStorage.clear();

        let cart = [
            { id: 1, quantity: 10, price: 50, name: "ürün1" },
            { id: 2, quantity: 10, price: 50, name: "ürün2" },
        ]
        localStorage.setItem("cart", JSON.stringify(cart));
        let cartFromLocalStorage = localStorage.getItem("cart");
        console.log(JSON.parse(cartFromLocalStorage!))
        // JSON => string
        // string =>JSON
    }, [])

    return (
        <div>Homepage

            {/* {cart.cartItems.length} adet ürün sepette */}
            <br />
            <Link to={"/posts"}>Posts</Link>

        </div>
    )
}
