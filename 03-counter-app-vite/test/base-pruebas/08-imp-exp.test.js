import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Test on 08-imp-exp', () => {
    test('getHeroeById should return a hero by id', () => {
        const id = 1
        const hero = getHeroeById(id)
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    })
    test('getHeroeById should return undefine if id does not exist', () => {
        const id = 100
        const hero = getHeroeById(id)
        expect(hero).toBeFalsy()
    })

    test('getHeroesByOwner shoudl retorn an array with the heroes of DC', () => {
        const owner = "DC"
        const heroes = getHeroesByOwner(owner)

        expect(heroes).toHaveLength(3)
    })
    test('getHeroesByOwner shoudl retorn an array with the heroes of Marvel', () => {
        const owner = "Marvel"
        const heroes = getHeroesByOwner(owner)

        expect(heroes).toHaveLength(2)
    })
})
