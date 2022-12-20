export const default_loader_state = {
    loader:false
};


export const loaderReducer = (state = default_loader_state, action) => {
    switch (action.type) {

         case "SET_LOADER": {
            return {
                loader: true
            }
        }

        case "UNSET_LOADER": {
            return {
                loader: false
            }
        }
        
        default:
            return state;
    }
}
