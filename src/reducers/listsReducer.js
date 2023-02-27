import { CONSTANTS } from '../actions';


let listID = 2;
let cardID = 4;

const initialState = [
    {
        title: 'To do',
        id: `list-0`,
        cards: [
            {
                id: `card-0`,
                text: 'Fix bugs',
            },
            {
                id: `card-1`,
                text: 'Go to supermarket',
            },
        ],
    },
    {
        title: 'In process',
        id: `list-1`,
        cards: [
            {
                id: `card-2`,
                text: 'Studying Redux',
            },
            {
                id: `card-3`,
                text: 'Doing DnD',
            },

        ],
    },
];

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`,
            };

            listID += 1;
            return [...state, newList];
        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`,
            };
            cardID += 1;

            return state.map((list) => {
                if (list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard],
                    };
                } else {
                    return list;
                }
            });
        case CONSTANTS.DELETE_CARD:
            const {listIDWithDeletingCard, listIndex, cardIndex} = action.payload;
            const newStateToDeleteCard = [...state];
            const list = newStateToDeleteCard.find(
                (list) => listIDWithDeletingCard === list.id
            );
            list.cards.splice(cardIndex,1);
            newStateToDeleteCard.splice(listIndex,1, list);
            cardID-=1;
            return newStateToDeleteCard;
        case CONSTANTS.DELETE_LIST:
            const newStateToDeleteList = [...state];
            const {listIndexToDelete}= action.payload;
            newStateToDeleteList.splice(listIndexToDelete,1);
            listID-=1;
            return newStateToDeleteList;
        case CONSTANTS.DRAG_HAPPENED:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                type,
            } = action.payload;

            const newState = [...state];

            //dragging lists
            if(type === 'list'){
                //finding list which was dragged
                const list = newState.splice(droppableIndexStart,1);
                //put list in new position
                newState.splice(droppableIndexEnd,0,...list);
                return newState;
            }
            //dragging cards in the same list
            if (droppableIdStart === droppableIdEnd) {
                //finding list where drag happened
                const list = newState.find(
                    (list) => droppableIdStart === list.id
                );
                //pull out card from this list
                const card = list.cards.splice(droppableIndexStart, 1);
                //put the card in the same list at new position
                list.cards.splice(droppableIndexEnd, 0, ...card);
            }

            //dragging cards in lists
            if (droppableIdStart !== droppableIdEnd) {
                //finding the list where drag happened
                const listStart = newState.find(
                    (list) => droppableIdStart === list.id
                );

                //pull out card from this list
                const card = listStart.cards.splice(droppableIndexStart, 1);

                //finding the list where drag ended
                const listEnd = newState.find(
                    (list) => droppableIdEnd === list.id
                );

                //put the card in the new list
                listEnd.cards.splice(droppableIndexEnd, 0, ...card);
            }
            return newState;
        default:
            return state;
    }
};

export default listsReducer;
