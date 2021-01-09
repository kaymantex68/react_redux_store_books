import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


const BookCard = ({ title, author, price, image }) => {
    return (
        <Card fluid color='red'>
            <Image src={image} wrapped ui={false} />
            <Card.Content >
                <Card.Header>{title}</Card.Header>
                <Card.Description>
                    {author}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='rub' />
                    {price}
                </a>
            </Card.Content>
        </Card>
    )
}

export default BookCard;