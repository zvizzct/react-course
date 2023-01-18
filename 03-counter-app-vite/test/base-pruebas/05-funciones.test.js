import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Test on 05-funciones', () => {
    test('getUser should return an object', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser()

        expect(testUser).toStrictEqual(user)

    })

    test('getUsuarioActivo should return an object', () => {
        const name = "Fernando"
        const testUser = {
            uid: 'ABC567',
            username: name
        }
        const user = getUsuarioActivo(name)
        expect(testUser).toEqual(user)
    })
})