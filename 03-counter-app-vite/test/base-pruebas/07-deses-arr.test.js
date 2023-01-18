// return ['ABC', 123];

import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Test on 07-deses-arr', () => {
    test('should return a string and a number', () => {
        const [str, num] = retornaArreglo()
        expect(str).toBe('ABC')
        expect(num).toBe(123)
        expect(typeof str).toEqual(expect.any(String))
        expect(typeof num).toBe("number")

    })
})