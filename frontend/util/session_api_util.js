export const signup = (user) => {
    return $.ajax({
        url: '/api/users',
        method: 'POST',
        data: {user}
    });
};

export const login = (user) => {
    return $.ajax({
        url: '/api/session',
        method: 'POST',
        data: {user}
    });
};

export const signout = () => {
    return $.ajax({
        url: '/api/session',
        method: 'DELETE'
    });
};

export const getAllUsers = () => {
    return $.ajax({
        url: '/api/users',
    });
};


export const getUser = (userId) => {
    return $.ajax({
        url: `/api/users/${userId}`,
        data: {userId}
    });
}
