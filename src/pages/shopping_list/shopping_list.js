import './shopping_list.css';
import React, { useState, useRef } from 'react';

function ShoppingList() {

  const optionList = [
    {'name': 'Warzywa', 'value': 'vegetables'},
    {'name': 'Owoce', 'value': 'fruits'},
    {'name': 'Napoje', 'value': 'drinks'},
    {'name': 'Słodyczne', 'value': 'candys'},
    {'name': 'Pieczywo', 'value': 'breads'},
    {'name': 'Inne', 'value': 'other'}
  ];

  const listItems = optionList.map((obj) =>
    <option key={obj['value']} value={obj['value']}>{obj.name}</option>
  );

  const [products, setProducts] = useState([]);
  const typeSelector = useRef();
  const fruitNameSelector = useRef();

  const productsList = products.map((item) =>
      <li key={item.name}>
        {item.name}
        <input type='button' value='-' className='remove-product' onClick={() => removeItem(item.name)} />
      </li>
  );

  const addListItem = () => {
    let fruitType = typeSelector.current.value;
    let fruitName = fruitNameSelector.current.value;

    fruitNameSelector.current.value = "";
    setProducts(products.concat({'name': fruitName, 'type': fruitType}));
  }

  const removeItem = (item_name) => {
    let filteredProducts = products.filter( el => el.name !== item_name);

    setProducts(filteredProducts);
  }

  const resetList = () => {
    setProducts([]);
  }

  return (
    <>
      <div>
        <h3 className='style-head'>Lista zakupów</h3>
        <br />
        <select ref={typeSelector} className='list-option view'>{listItems}</select>
        <input ref={fruitNameSelector} type='text' className='product view' />
        <input type='button' value='+' className='add-product view' onClick={() => addListItem()} />
        <input type='reset' value='Reset' className='reset-list view' onClick={() => resetList()} />
        <br />
        <ol>
          {productsList}
        </ol>
      </div>
    </>
  )
}

export default ShoppingList
