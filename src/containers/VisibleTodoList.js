import { connect } from 'react-redux'
import TodoList from '../components/TodoList/TodoList'
import { VisibilityFilters, toggleTodo, removeTodo } from '../actions/index'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: index => dispatch(toggleTodo(index)),
  removeTodo: index => dispatch(removeTodo(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)