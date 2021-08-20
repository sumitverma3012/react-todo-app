import {getLocalStorage, setLocalStorage} from "./localStorage";

describe('Local storage', () => {

    let mockStorage = {}

    beforeAll(() => {
        global.Storage.prototype.setItem = jest.fn((key, value) => {
            mockStorage[key] = value
        })
        global.Storage.prototype.getItem = jest.fn(key => mockStorage[key])
    })

    beforeEach(() => {
        mockStorage = {}
    })

    afterAll(() => {
        global.Storage.prototype.setItem.mockReset()
        global.Storage.prototype.getItem.mockReset()
    })

    test('get element from local storage', () => {
        getLocalStorage('test');
        expect(global.Storage.prototype.getItem).toHaveBeenCalledTimes(1);
    })

    test('set element in local storage', () => {
        setLocalStorage('todo', 'test');
        expect(global.Storage.prototype.setItem).toHaveBeenCalledTimes(1);
    })
})
