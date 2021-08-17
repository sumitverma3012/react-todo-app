
export function getLocalStorage(key) {
    return localStorage.getItem(key);
}

export function setLocalStorage(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.log('LocalStorage failed!', e);
    }
}
