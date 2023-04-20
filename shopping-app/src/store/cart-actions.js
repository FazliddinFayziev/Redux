import { cartActions } from "./card-slice";
import { uiActions } from "./ui-slice";


export const fetchData = () => {
    return async (dispatch) => {
        const fetchHandler = async () => {
            const res = await fetch("https://redux-ebfcd-default-rtdb.firebaseio.com/cartItems.json")
            const data = await res.json();
            return data;
        }
        try {
            const cartData = await fetchHandler();
            dispatch(cartActions.replaceData(cartData))
        } catch (err) {
            dispatch(uiActions.showNotifications({
                open: true,
                message: "Send Request Failed",
                type: "error"
            }))
        }
    }
}



export const sendCartData = (cart) => {
    return async (dispatch) => {

        dispatch(uiActions.showNotifications({
            open: true,
            message: "Send Request",
            type: "warning"
        }))

        const sendRequest = async () => {

            const res = await fetch('https://redux-ebfcd-default-rtdb.firebaseio.com/cartItems.json',
                {
                    method: "PUT",
                    body: JSON.stringify(cart)
                }
            );
            const data = await res.json();

            // Send state as Request is successful
            dispatch(uiActions.showNotifications({
                open: true,
                message: "Send Request TO Database Successfully",
                type: "success"
            }))
        };
        try {
            await sendRequest()
        } catch (err) {
            dispatch(uiActions.showNotifications({
                open: true,
                message: "Send Request Failed",
                type: "error"
            }))
        }
    }
}