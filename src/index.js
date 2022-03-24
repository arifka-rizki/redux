import store from "./store/store";
// import * as actions from "./store/product/actionTypes";
import { productAdded, productUpdatedMarkDiscount } from "./store/newProduct";
import { productAddedToCart, productRemovedFromCart } from "./store/cart";


store.subscribe(() => {
    console.log("Store has changed!", store.getState());
})

store.dispatch(productAdded({
    name: "product 1",
    price: 1500
}));

store.dispatch(productAdded({
    name: "product 2",
    price: 1000
}));

store.dispatch(productAdded({
    name: "product 3",
    price: 500
}));

store.dispatch(productUpdatedMarkDiscount({
    id: 2,
    hasDiscount: true
}));

// store.dispatch({
//     type: actions.PRODUCT_REMOVED,
//     payload: {
//         id: 1
//     }
// });

store.dispatch(productAddedToCart({
    productId: 1,
    quantity: 10
}));

store.dispatch(productAddedToCart({
    productId: 2,
    quantity: 20
}));

store.dispatch(productRemovedFromCart({
    id: 1
}));
