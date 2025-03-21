import {createContext, useReducer} from 'react';

export const QuestionContext = createContext({
    animalCategory: '',
    updateCategory: () => {},
});

export const questionReducer = (state, action) => {
    if (action.type === 'UPDATE_CATEGORY') {
        return {
            ...state,
            animalCategory: action.payload.animalCategory,
        };
    }
    return state;
}

export default function QuestionContextProvider({ children }) {
    const [questionState, questionDispatch] = useReducer(
        questionReducer,
        {
            animalCategory: '',
        }
    );

    const handleUpdateCategory = (type) => {
        questionDispatch({
            type: 'UPDATE_CATEGORY',
            payload: {
                animalCategory: type
            }
        });
    }

    const ctxValue = {
        animalCategory: questionState.animalCategory,
        updateCategory: handleUpdateCategory,
    };

    return (
        <QuestionContext.Provider value={ctxValue}>{children}</QuestionContext.Provider>
    );
}