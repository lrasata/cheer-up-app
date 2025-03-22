import {createContext, useReducer} from 'react';

/**
 *  This AppContext saves which category the user has selected and provide update function for saved category
 *  It also saves the images previously loaded in a list, and add function to add item in a list.
 */

const MAX_COUNT_SAVED_IMAGES = 4;

export const AppContext = createContext({
    category: '',
    updateCategory: () => {},
    loadedImages: [],
    addImage: () => {},
});

export const appReducer = (state, action) => {
    if (action.type === 'UPDATE_CATEGORY') {
        return {
            ...state,
            category: action.payload.category,
        };
    }
    if (action.type === 'ADD_IMAGE') {
        console.log(action.payload)
        const imageToAdd = {
            category: action.payload.category,
            imageId: action.payload.imageId,
            imageUrl: action.payload.imageUrl,
        }

        const updatedList = [imageToAdd, ...state.loadedImages ];
        console.log('updatedList', updatedList);

        if (state.loadedImages.length === MAX_COUNT_SAVED_IMAGES) {
            // avoid the length of the array to be more than 4
            updatedList.pop()
        }

        return {
            ...state,
            loadedImages: [...updatedList],
        };
    }
    return state;
}

export default function AppContextProvider({ children }) {
    const [appState, appDispatch] = useReducer(
        appReducer,
        {
            category: '',
            loadedImages: [],
        }
    );

    const handleUpdateCategory = (type) => {
        appDispatch({
            type: 'UPDATE_CATEGORY',
            payload: {
                category: type
            }
        });
    }

    const handleAddImage = ({category, imageId, imageUrl}) => {
        appDispatch({
            type: 'ADD_IMAGE',
            payload: {
                imageId,
                imageUrl,
                category
            }
        });
    }

    const ctxValue = {
        category: appState.category,
        updateCategory: handleUpdateCategory,
        loadedImages: appState.loadedImages,
        addImage: handleAddImage,
    };

    return (
        <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>
    );
}