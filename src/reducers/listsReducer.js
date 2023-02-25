import { CONSTANTS } from '../actions';

let listID = 2;
let cardID = 4;

const initialState = [
    {
        title: 'Last episode',
        id: `list-0`,
        cards: [
            {
                id: `card-0`,
                text: 'we created a static list and a static card',
            },
            {
                id: `card-1`,
                text: 'gdf gdf gdf gdfg dfgdfgfd',
            },
        ],
    },
    {
        title: 'This episode',
        id: `list-1`,
        cards: [
            {
                id: `card-2`,
                text: 'we will create our first reducer',
            },
            {
                id: `card-3`,
                text: 'we render many cards on our list with static data',
            },
            {
                id: `card-4`,
                text: 'we will also make some little changes i forgot in the last episode(link tags for roboto fonts and icons)',
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
        case CONSTANTS.DRAG_HAPPENED:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
            } = action.payload;
            const newState = [...state];

            //in the same list
            if (droppableIdStart === droppableIdEnd) {
                const list = state.find((list) => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd, 0, ...card);
            }

            return newState;
        default:
            return state;
    }
};

export default listsReducer;
