

// initEmail
export let InitEmail = {email: '', isValidEmail: false};

export let EMAIL_VALUE = 'EMAIL_VALUE';
export let IS_VALID_EMAIL = 'IS_VALID_EMAIL';

// emailReducer
export function emailReducer(state, action) {
    switch (action.type) {
        case EMAIL_VALUE:
            return {...state, email: action.payload};
            
        case IS_VALID_EMAIL:
            return {...state, isValidEmail: action.payload}
        default:
            return state;
    }
};



// initEmail
export let InitPassword = {password: '', isValidPassword: false};

export let PASSWORD_VALUE = 'PASSWORD_VALUE';
export let IS_VALID_PASSWORD = 'IS_VALID_PASSWORD';

// passwordReducer
export function passwordReducer(state, action) {
    switch (action.type) {
        case PASSWORD_VALUE:
            return {...state, password: action.payload};
            
        case IS_VALID_PASSWORD:
            return {...state, isValidPassword: action.payload}
        default:
            return state;
    }
};
