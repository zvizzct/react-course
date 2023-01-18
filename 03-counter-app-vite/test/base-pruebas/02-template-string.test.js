import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Test on 02-template-string', () => {
    test('getSaludo should return "Hola fernando"', () => {
        const name = 'Fernando'
        const message = getSaludo(name)

        expect(message).toBe(`Hola ${name}`)

    })
})