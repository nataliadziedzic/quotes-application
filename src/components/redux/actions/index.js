export const selectToughTask = () => {
    return {
        type: 'SELECT_TOUGH'
    }
}
export const selectEasyTask = () => {
    return {
        type: 'SELECT_EASY'
    }
}
export const setLoginData = (username, password) => {
    return {
        type: 'LOGIN',
        payload: {
            username,
            password,
        }
    }
}
export const allowPermission = () => {
    return {
        type: 'PERMISSION_ALLOWED'
    }
}
export const denyPermission = () => {
    return {
        type: 'PERMISSION_DENIED'
    }
}