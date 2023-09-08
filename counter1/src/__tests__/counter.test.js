import {fireEvent, render, screen} from '@testing-library/react';
import App from '../App';
import renderer from 'react-test-renderer';

describe('Testing our button component', () => {

    it('The counter should be present on the DOM with initial value as 0', () => {
        render(<App/>);
        const counter = screen.getByTestId('counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('Counter : 0');
    })

    it('It should increase the button count', () => {
        render(<App/>);
        const counter = screen.getByTestId('counter');
        const button = screen.getByTestId('button-component');
        fireEvent.click(button);
        expect(counter).toHaveTextContent('Counter : 1');
        fireEvent.click(button);
        expect(counter).toHaveTextContent('Counter : 2');
    })

    it('renders correctly', () => {
        const tree = renderer
          .create(
            <Button size={'medium'} color={'red'}>Click-Me</Button>
          )
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
})