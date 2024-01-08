import React from 'react'
import { Button, Card } from 'semantic-ui-react'

export default function PostCard(props: any) {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{props.post.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>User ID: {props.post.userId}</span>
                </Card.Meta>
                <Card.Description>
                    {props.post.body}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button onClick={() => { props.onDelete(props.post.id) }} basic color="red">Kaldır</Button>
            </Card.Content>
        </Card>

    )
}
