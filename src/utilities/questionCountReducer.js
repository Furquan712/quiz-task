const questionCountReducer = (state, action) => {
    switch (action.type) {
        case 'NEXT_QUESTION':
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex + 1
            };
        default:
            return state;
    }
};

export default questionCountReducer;