### useReducer

useReducer là một hook trong React được sử dụng để quản lý trạng thái của một thành phần bằng cách sử dụng một hàm reducer.

### dùng khi nào

### cách dùng

```jsx
import { useReducer } from "react";

const [state, dispatch] = useReducer(reducer, initialState);

// Khởi tạo trạng thái ban đầu
const initialState = 0;

// Định nghĩa reducer
function reducer(state, action) {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

// Sử dụng useReducer
const [count, dispatch] = useReducer(reducer, initialState);

// Gửi hành động tới reducer
dispatch("INCREMENT"); // Tăng giá trị count lên 1
dispatch("DECREMENT"); // Giảm giá trị count đi 1
```

- state là trạng thái hiện tại của thành phần.
- dispatch là một hàm được sử dụng để gửi các hành động (actions) tới reducer.
- reducer là một hàm nhận vào trạng thái hiện tại và một hành động, và trả về trạng thái mới. Hàm này quyết định cách trạng thái thay đổi dựa trên hành động được gửi

## lưu ý

- Khi sử dụng useReducer, thường cần định nghĩa các hành động (actions) tương ứng để thay đổi trạng thái.
