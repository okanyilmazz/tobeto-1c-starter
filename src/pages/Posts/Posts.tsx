import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { addToCart } from '../../store/actions/cartActions';

export default function Posts() {
    const dispatch = useDispatch();
    return (
        <div>Posts
            <Button onClick={() => {
                dispatch(addToCart({ id: 1, name: "laptop", price: 10 }));
            }}>Sepete Ekle</Button>
        </div>
    )
}
