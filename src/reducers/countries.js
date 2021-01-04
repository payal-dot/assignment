import { LOAD_COUNTRIES, REMOVE_ITEM, SELECT_ITEM } from "../types";

const initialState = [];

export default function countriesReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_COUNTRIES:
            return action.payload;
        case SELECT_ITEM: 
            return state.map(c => {
                if (c.id === action.payload.countryId) {
                    c.names = c.names.map(n => {
                        if (n.id === action.payload.itemId) {
                            n.isSelected = true;
                        }
                        return n;
                    });
                }
                return c;
            });
        case REMOVE_ITEM: 
            return state.map(c => {
                if (c.id === action.payload.countryId) {
                    c.names = c.names.map(n => {
                        if (n.id === action.payload.itemId) {
                            n.isSelected = false;
                        }
                        return n;
                    });
                }
                return c;
            });
        default:
            return state;
    }
}
