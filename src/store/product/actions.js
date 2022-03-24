import * as actions from './actionTypes';

/**
 * 
 * @param {name, price, hasDiscount} product 
 * @returns 
 */
export function productAdded(product = {}){
    return {
        type: actions.PRODUCT_ADDED,
        payload: {
            name: product.name ? product.name : null,
            price: product.price ? product.price : null,
            hasDiscount: product.hasDiscount ? true : false
        }
    }
}

/**
 * 
 * @param {id, hasDiscount} updateProduct
 * @returns 
 */
export function productUpdatedMarkDiscount(updateProduct = {}){
    return {
        type: actions.PRODUCT_UPDATED_MARK_DISCOUNT,
        payload: {
            id: updateProduct.id,
            hasDiscount: updateProduct.hasDiscount
        }
    }
}
