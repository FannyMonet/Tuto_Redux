import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Todo from './Todo';
import { toggleTodo, removeTodo } from '../actions/index';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('Todo is toggled when clicked on', () => {
    act(() => {
        ReactDOM.render(<Todo toggleTodo={toggleTodo} removeTodo={removeTodo} text={'coucou'} completed={false} />, container);
    });
    const todo = container.querySelector('li');
    expect(todo.style.textDecoration).toBe('none');
    
    act(() => {
        todo.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });

    expect(todo.style.textDecoration).toBe('line-through');
});












// import React from 'react';
// import Todo from './Todo';
// import renderer from 'react-test-renderer';
// import { toggleTodo, removeTodo } from '../actions/index';
// import TodoList from './TodoList';


// test('Todo is toggled when clicked on', () => {
//     const todos = renderer.create(<Todo toggleTodo={toggleTodo} removeTodo={removeTodo} text={'coucou'} completed={false} />)
//     const component = renderer.create(<TodoList todos={[todos]} toggleTodo={toggleTodo} removeTodo={removeTodo} />);
//     todos.
// });