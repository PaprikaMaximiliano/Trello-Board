import { CONSTANTS } from './index';
export const addCard = (listID, text) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: { text, listID },
    };
};

export const deleteCard = (listIDWithDeletingCard, listIndex, cardIndex) => {
    return {
        type: CONSTANTS.DELETE_CARD,
        payload: { listIDWithDeletingCard, listIndex, cardIndex },
    };
};
