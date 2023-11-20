
const ADDCOMMENT = 'Todolist/ADDCOMMENT';
 
export const listCRUD = (payload) => {
       return  {type: ADDCOMMENT,payload};
};

const initialState = [];

const TodolistCRUD = (state = initialState,action) => {
    console.log("리듀서 호출 부분");
    switch (action.type) {
        case ADDCOMMENT:
            return [...state,action.payload];
        default:
            return state;
    }
};


export default TodolistCRUD;