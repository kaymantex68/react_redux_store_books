import React from 'react';
import { Menu, Button, Image, List, Popup } from 'semantic-ui-react'

import classes from './Menu.module.css'

const CardComponent = (props) => {
    const { title, id, image, removeFromCart, addedCount } = props;
    console.info('PROPS MENU:', id);
    return (
        <List divided verticalAlign='middle' key={`book_${id}`}>
            <List.Item>
                <List.Content floated='right'>
                    <Button onClick={()=>removeFromCart(id)} color="red">Удалить</Button>
                </List.Content>
                <Image avatar src={image} />
                <List.Content>{title}</List.Content>
                <List.Content>{addedCount}</List.Content>
            </List.Item>
        </List>
    )
}


const UpMenu = (props) => {
    const { totalPrice, count, items, addedCount } = props;


    return (
        <div className={classes.menu_container}>
            <Menu>
                <Menu.Item name='browse'>
                    Магазин книг
                </Menu.Item>
                <Menu.Menu position='right'>

                    <Menu.Item name='signup'>
                        Итого: &nbsp; <b>{totalPrice}</b> руб.
                    </Menu.Item>


                    <Popup
                        trigger={
                            <Menu.Item name='help'>
                                Корзина (<b>{count}</b>)
                    </Menu.Item>
                        }
                        content={
                            items.map((book) => {
                                return CardComponent({ ...book, addedCount })
                            })
                        }

                        on="click"
                        hideOnScroll
                    >
                    </Popup>
                </Menu.Menu>
            </Menu>
        </div >
    )
}

export default UpMenu;

