import { render } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'


describe('Pruebas en <FirstApp/>', () => {
    // test('debe de hacer match con el snapshot', () => {
    //     const title = "hola soy goku"
    //     const { container } = render(<FirstApp title={title} />)
    //     expect(container).toMatchSnapshot()
    // })


    test('debe de mostrar el titulo en h1', () => {
        const title = "hola soy goku"
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />)
        expect(getByText(title)).toBeTruthy()
        // const h1 = container.querySelector('h1')
        // expect(h1.innerHTML).toContain(title)

        expect(getByTestId('test-title').innerHTML).toBe(title)
    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        const title = "hola soy goku"
        const subTitle = "Soy un subtitulo"
        const { container, getByText } = render(
            <FirstApp
                title={title} subTitle={subTitle}
            />
        )
        expect(getByText(subTitle)).toBeTruthy()
        // const h1 = container.querySelector('h1')
        // expect(h1.innerHTML).toContain(title)

        // const p = container.querySelector('p')
        // expect(p.innerHTML).toContain(subTitle)
    })
})