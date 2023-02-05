import orderType from '../common/order.type';

const addNewOrder = (order) =>  {
    return {
        type : orderType.ADD_ORDER,
        payload : order
    }
}

const updateOrder = (order) =>  {
    return {
        type : orderType.UPDATE_ORDER,
        payload : order
    }
}

module.exports = {
    addNewOrder,
    updateOrder
}