import { render, screen } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'


describe('Pruebas en <FirstApp/>', () => {

    const title = 'hola soy goku'
    const subTitle = 'Soy un subtitulo'

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<FirstApp title={title} />)
        expect(container).toMatchSnapshot()
    })

    test('debe de mostrar el mensaje "hola soy Goku"', () => {
        render(<FirstApp title={title} />)
        expect(screen.getByText(title)).toBeTruthy()
        // expect(getByText(title)).toBeInTheDocument()
    })

    test('debe de mostrar el titulo en h1', () => {
        render(<FirstApp title={title} />)
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)
    })
    test('debe de mostrar el subtitulo enviado por props', () => {
        render(<FirstApp title={title} subTitle={subTitle} />)
        expect(screen.getByText(subTitle)).toBeTruthy()
    })
})