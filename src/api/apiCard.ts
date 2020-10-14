import {setTimeout} from "timers";

export const api = {
    addProductApi(){
        return new Promise((resolve =>
            setTimeout(() => {
                resolve(['count'])
            }, 200)

        ))
    }
}
