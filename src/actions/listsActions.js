import { CONSTANTS } from './index';
export const addList = (title) => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title,
    };
};

export const deleteList = ( listIndexToDelete) => {
    return {
        type: CONSTANTS.DELETE_LIST,
        payload: { listIndexToDelete },
    };
};

export const dragNDrop = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    droppableId,
    type
) => {
    return {
        type: CONSTANTS.DRAG_HAPPENED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            droppableId,
            type,
        },
    };
};
