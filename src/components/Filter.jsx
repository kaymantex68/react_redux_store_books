import React from 'react'
import { Menu } from 'semantic-ui-react'

const Filter = () => {
    
    const [activeItem, setActiveItem] = React.useState('all');

    const  handleClick = (name) => {setActiveItem(name)};

    return (
        <Menu secondary>
            <Menu.Item
                name='Все'
                active={activeItem === 'all'}
                onClick={() => handleClick('all')}
            />
            <Menu.Item
                name='Популярные'
                active={activeItem === 'popular'}
                onClick={() => handleClick('popular')}
            />
            <Menu.Item
                name='Дорогие'
                active={activeItem === 'hight_coast'}
                onClick={() => handleClick('hight_coast')}
            />
            <Menu.Item
                name='Дешевые'
                active={activeItem === 'low_coast'}
                onClick={() => handleClick('low_coast')}
            />
        </Menu>
    )
}

export default Filter;