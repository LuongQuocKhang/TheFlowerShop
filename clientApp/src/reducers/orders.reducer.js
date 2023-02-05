import { orderType } from "../common/order.type";

const initalState = {

}
const orderReducer = (state = initalState, action) => {
    switch(action.type) {
        case orderType.ADD_ORDER : {
            return state;
        }
        case orderType.UPDATE_ORDER : {
            return state;
        }
        default: {
            return state;
        }
    }
}

export default orderReducer;