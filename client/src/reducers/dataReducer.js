export const SET_USERS = 'SET_USERS';
export const SET_MESSAGE = "SET_MESSAGE";

const dataReducer = (state, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
                    loading: false,
            };
            case SET_MESSAGE:
                return {
                    ...state,
                    messages: [...state.messages, action.message]
                }
        default:
            return state;
    }
};




export default dataReducer;
