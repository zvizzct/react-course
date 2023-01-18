describe('Pruebas en <DemoComponent/>', () => {
    test('Esta prueba no debe de fallar', () => {
        // 1. Inicialización
        const message = 'Hola Mundo'

        // 2. Estímulo
        const message2 = `Hola Mundo`

        // 3. Observar el comportamiento
        expect(message).toBe(message2)

    })
})

