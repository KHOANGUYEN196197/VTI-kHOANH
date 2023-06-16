thứ tự thực hiện


// useEffect
1. cập nhập lại state
2. render lại ui
3. gọi cleanup nếu deps thay đổi
4. gọi lại useEffect 

// useLayoutEffect

1. cập nhập lại state
2. gọi cleanup nếu deps thay đổi
3. gọi lại useEffect 
4. render lại ui

