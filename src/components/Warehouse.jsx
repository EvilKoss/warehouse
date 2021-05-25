import React from 'react';
import img from '../App.css';
import {createRef} from 'react';

const House = (props) => {
	let imageId = createRef();
	let description = createRef();
	let quantity = createRef();
	let price = createRef();

	let onAddClick = () => {
		props.addProducts(imageId.current.value,price.current.value,description.current.value,quantity.current.value);
		imageId.current.value="";
		description.current.value="";
		quantity.current.value="";
		price.current.value="";
		imageId.current.focus();
	}

	let list = [];
	let i = 0;
	let totalPrice = 0;
	while (i < props.products.length) {
		let pic = props.products[i].pictures;
		let desc = props.products[i].description;
		let quan = props.products[i].quantity;
		let price = props.products[i].price;
		list.push(<div><img className="img" src={pic}/> <div>Цена: {price}</div> <div>Количество: {quan}</div> <div>Описание: {desc}</div></div>);
		totalPrice += quan * price;
		i++;
		}
	return(
			<div>
				<div>общая сумма: <a>{totalPrice}</a></div><br />
				<button id="add" onClick={onAddClick}>добавить позицыю</button>
				<input ref={imageId} type="text" placeholder="Введите ссылку на картинку товара" />
				<input ref={description} type="text" placeholder="Введите описание товара" />
				<input ref={quantity} type="number" placeholder="Введите количество товара" />
				<input ref={price} type="number" placeholder="Введите стоимость товара" /><br /><br />
				{list}
			</div>
	)
}

export default House;
