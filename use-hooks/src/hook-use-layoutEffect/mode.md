thứ tự thực hiện


// useEffect
1. cập nhập lại state
2. cập nhập lại DOM
3. render lại ui
4. gọi cleanup nếu deps thay đổi
5. gọi lại useEffect 

// useLayoutEffect

1. cập nhập lại state
2. cập nhập lại DOM
3. gọi cleanup nếu deps thay đổi
4. gọi lại useEffect 
5. render lại ui

