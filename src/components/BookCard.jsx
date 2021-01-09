import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import classes from './BookCard.module.css'

const BookCard = ({ title, author, price, image }) => {
    return (
        <Card fluid color='red' className={classes.card_container}>
            <Image src={image} wrapped ui={false} className={classes.card_container_img} />
            <Card.Content >
                <Card.Header>{title}</Card.Header>
                <Card.Description>
                    {author}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='rub' />
                {price}
            </Card.Content>
        </Card>
    )
}

export default BookCard;