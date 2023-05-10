/*все для реакта*/
import React from 'react';
import ReactDOM from 'react-dom';

/*закидываем стили*/
import './index.css';

/*родительский компонент*/
import shopComponent from './components/shop';

/*заголовок на странице*/
let shopTitle = "Магазин техники";

/*массив товаров и заголовков таблицы*/
import productsArray from './productsArray.json';
import tableHeader from './tableHeader.json';

/*рендерим*/
ReactDOM.render(
  React.createElement(shopComponent, {tableHeader: tableHeader, headerTitle: shopTitle, productList:
    productsArray}),
  document.getElementById('container')
);