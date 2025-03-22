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
    displayedImage: {},
    updateDisplayedImage: () => {},
    runFetching: true,
    updateRunFetching: () => {},
});

export const appReducer = (state, action) => {
    if (action.type === 'UPDATE_RUN_FETCHING') {
        return {
            ...state,
            runFetching: action.payload.runFetching
        };
    }
    if (action.type === 'UPDATE_DISPLAYED_IMAGE') {
        console.log(action.payload);
        return {
            ...state,
            category: action.payload.category,
            displayedImage: {
                imageUrl: action.payload.imageUrl,
                imageId: action.payload.imageId,
                category: action.payload.category,
            },
        };
    }
    if (action.type === 'UPDATE_CATEGORY') {
        return {
            ...state,
            category: action.payload.category,
        };
    }
    if (action.type === 'ADD_IMAGE') {
        const imageToAdd = {
            category: action.payload.category,
            imageId: action.payload.imageId,
            imageUrl: action.payload.imageUrl,
        }

        const updatedList = [imageToAdd, ...state.loadedImages ];

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
            displayedImage: {}
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

    const handleDisplayedImage = ({category, imageId, imageUrl}) => {
        appDispatch({
            type: 'UPDATE_DISPLAYED_IMAGE',
            payload: {
                imageId,
                imageUrl,
                category
            }
        });
    }

    const handleUpdateRunFetching = (isFetchToBeExecuted) => {
        appDispatch({
            type: 'UPDATE_RUN_FETCHING',
            payload: {
                runFetching: isFetchToBeExecuted
            }
        });
    }

    const ctxValue = {
        category: appState.category,
        updateCategory: handleUpdateCategory,
        loadedImages: appState.loadedImages,
        addImage: handleAddImage,
        displayedImage: appState.displayedImage,
        updateDisplayedImage: handleDisplayedImage,
        runFetching: appState.runFetching,
        updateRunFetching: handleUpdateRunFetching,
    };

    return (
        <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>
    );
}