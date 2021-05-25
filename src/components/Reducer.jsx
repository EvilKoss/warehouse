const ADD = "add";

let initialState = {
	Products: [{pictures:"https:vignette.wikia.nocookie.net/volfs/images/5/50/Wiki-background/revision/latest?cb=20161223104028&path-prefix=ru",
	price:5,description:"wolf",quantity:8},
	{pictures:"https://i.pinimg.com/originals/88/00/76/8800768b99a0148df9c9491fb01a068d.jpg",
	price:10,description:"owl",quantity:5}]
}


const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
                return {
                    ...state,
                    Products: [...state.Products,{pictures:action.pictures,price:action.price,description:action.description,quantity:action.quantity}]
                };
        default:
            return state;
    }
}

export const AddNewCreator = (pictUser,priceUser,desUser,quanUser) =>  ({ type: ADD, pictures:pictUser,price:priceUser,description:desUser,quantity:quanUser })

export default Reducer;
