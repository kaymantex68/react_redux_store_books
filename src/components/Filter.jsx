import React from 'react'
import { Menu } from 'semantic-ui-react'

const Filter = ({ setFilter, filter }) => {

    return (
        <Menu secondary>
            <Menu.Item
                name='Все'
                active={filter === 'all'}
                onClick={() => setFilter('all')}
            />
            <Menu.Item
                name='Автор'
                active={filter === 'author'}
                onClick={() => setFilter('author')}
            />
            <Menu.Item
                name='Дорогие'
                active={filter === 'hight_coast'}
                onClick={() => setFilter('hight_coast')}
            />
            <Menu.Item
                name='Дешевые'
                active={filter === 'low_coast'}
                onClick={() => setFilter('low_coast')}
            />
        </Menu>
    )
}


export default Filter;