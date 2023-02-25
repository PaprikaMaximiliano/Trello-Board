const initialState = [
    {
        title: 'Last episode',
        id: 0,
        cards: [
            {
                id: 0,
                text: 'we created a static list and a static card',
            },
            {
                id: 1,
                text: 'gdf gdf gdf gdfg dfgdfgfd',
            },
        ],
    },
    {
        title: 'This episode',
        id: 1,
        cards: [
            {
                id: 0,
                text: 'we will create our first reducer',
            },
            {
                id: 1,
                text: 'we render many cards on our list with static data',
            },
            {
                id: 2,
                text:'we will also make some little changes i forgot in the last episode(link tags for roboto fonts and icons)'
            }
        ],
    },
];
const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default listsReducer;
