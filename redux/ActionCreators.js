import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchComments = () => dispatch => {
    return fetch(baseUrl + 'comments')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchParks = () => dispatch => {

    dispatch(parksLoading());

    return fetch(baseUrl + 'parks')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(parks => dispatch(addParks(parks)))
        .catch(error => dispatch(parksFailed(error.message)));
};

export const parksLoading = () => ({
    type: ActionTypes.PARKS_LOADING
});

export const parksFailed = errMess => ({
    type: ActionTypes.PARKS_FAILED,
    payload: errMess
});

export const addParks = parks => ({
    type: ActionTypes.ADD_PARKS,
    payload: parks
});

export const fetchPromotions = () => dispatch => {
    
    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)))
        .catch(error => dispatch(promotionsFailed(error.message)));
};

export const promotionsLoading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = errMess => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
});

export const addPromotions = promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});

export const fetchPets = () => dispatch => {
    
    dispatch(petsLoading());

    return fetch(baseUrl + 'pets')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(pets => dispatch(addPets(pets)))
        .catch(error => dispatch(petsFailed(error.message)));
};

export const petsLoading = () => ({
    type: ActionTypes.PETS_LOADING
});

export const petsFailed = errMess => ({
    type: ActionTypes.PETS_FAILED,
    payload: errMess
});

export const addPets = pets => ({
    type: ActionTypes.ADD_PETS,
    payload: pets
});

export const postFavorite = campsiteId => dispatch => {
    setTimeout(() => {
        dispatch(addFavorite(campsiteId));
    }, 2000);
};

export const addFavorite = campsiteId => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: campsiteId
});

export const deleteFavorite = campsiteId => ({
    type: ActionTypes.DELETE_FAVORITE,
    payload: campsiteId
}); 

export const postComment = (campsiteId, rating, author, text) => dispatch => {
    
    const newComment = {
        campsiteId,
        rating,
        author,
        text
    };
    
    newComment.date = new Date().toISOString();

    setTimeout(() => {
        dispatch(addComment(newComment));
    }, 2000);
};

export const addComment = comments => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comments
});