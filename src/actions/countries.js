import { LOAD_COUNTRIES, REMOVE_ITEM, SELECT_ITEM } from "../types";

export const loadCountries = (data) => (dispatch) => {
    dispatch({
        type: LOAD_COUNTRIES,
        payload: data
    });
};

export const selectItem = (countryId, itemId) => (dispatch) => {
    dispatch({
        type: SELECT_ITEM,
        payload: { countryId, itemId }
    });
};

export const removeItem = (countryId, itemId) => (dispatch) => {
    dispatch({
        type: REMOVE_ITEM,
        payload: { countryId, itemId }
    });
};

