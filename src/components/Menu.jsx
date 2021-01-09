import React from 'react';
import { Menu } from 'semantic-ui-react'

import classes from './Menu.module.css'

const UpMenu = () => {
    return (
        <div className={classes.menu_container}>
            <Menu>
                <Menu.Item name='browse'>
                    Магазин книг
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item name='signup'>
                        Итого: &nbsp; <b>0</b> руб.
                    </Menu.Item>
                    <Menu.Item name='help'>
                        Корзина (<b>0</b>)
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
}

export default UpMenu;

