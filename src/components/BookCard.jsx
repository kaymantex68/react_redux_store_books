import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import classes from './BookCard.module.css'

const BookCard = ({ title, author, price, image, onAdd }) => {
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
            <Button onClick={onAdd}>Добавить в корзину</Button>
        </Card>
    )
}

export default BookCard;