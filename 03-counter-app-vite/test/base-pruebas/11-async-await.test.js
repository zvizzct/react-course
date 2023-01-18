import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('test on 11-async-await', () => {
    test('getImagen should return an url of the image', async () => {
        const url = await getImagen()
        expect(typeof url).toBe('string')
        expect(url.includes('https://')).toBe(true)

    })
})