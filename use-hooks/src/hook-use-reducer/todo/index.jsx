import { useReducer } from "react";
//useReducer
// 1. initialState = 0
// 2. action up: count+ 1, down: count-1
// 3. Reducer
// 4. Dispatch

const initialState = {
  todo: "",
  todos: [],
};

const SET_TODO = "setTodo";
const ADD_TODO = "addTodo";
const REMOVE_TODO = "removeTodo";

const setTodo = (payload) => {
  return {
    type: SET_TODO,
    payload,
  };
};
const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todo, todos } = state;

  const handleAddTodo = () => {
    dispatch(addTodo(todo));
    dispatch(setTodo(""));
  };
  return (
    <div style={{ padding: "20px 30px" }}>
      <input
        value={todo}
        onChange={(e) => {
          dispatch(setTodo(e.target.value));
        }}
        placeholder="Input Todo..."
      />
      <button onClick={handleAddTodo}>Add</button>
      <br />
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <label>{todo}</label> &nbsp;{" "}
              <span
                onClick={() => {
                  dispatch(removeTodo(index));
                }}
              >
                X
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Todo;
