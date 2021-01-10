import React from 'react'
import { Menu, Input } from 'semantic-ui-react'

const Filter = ({ setFilter, filter, searchQuery,setQuery }) => {

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
            <Menu.Item>
                <Input value={searchQuery} onChange={(e)=>setQuery(e.target.value)} placeholder="введите запрос"></Input>
            </Menu.Item>
        </Menu>
    )
}


export default Filter;