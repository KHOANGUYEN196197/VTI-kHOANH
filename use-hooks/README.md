==============================================
import {
    useState,
    useEffect,
    useLayoutEffect,
    useRef,
    useCallback,
    useMemo,
    useReducer,
    useContext,
    useImperativeHandle,
} from 'react';


1. useState, useEffect, useLayoutEffect, useRef
2. useCallback, useMemo, react.memo
3. useReducer, useContext, react.Context, useImperativeHandle


// chưa dùng Hooks, chỉ là UI Components
function ComponentA(){
    return <h1>Haven't used hooks</h1>
}



// Sử dụng Hooks, hỗ trợ thêm nhiều tính năng
function ComponentB(){
    // useState
    const [state, setState] = useState(initState);

    // useEffect
    useEffect(() => {
    }, [deps])

    // useLayoutEffect
    useLayoutEffect(() => {
    }, [deps])

    // useRef
    const ref = useRef()

    //useCallback
    const fn = useCallback(() =>{
    }, [deps])

    // useMemo
    const result = useMemo(() =>{
    }, [deps])

    // useContext
    const value = useContext(MyContext)

    //useImperativeHandle
    useImperativeHandle(ref, createHandle, [deps])

    //useDebugValue
    useDebugValue(isOnline ? 'Online' : 'Offline')

    return <h1> Hooks </h1>
}


1. chỉ dùng cho function component

2. component đơn giản và trở lên dễ hiểu
    . không bị chia logic ra như methods trong lifecycle của class component
    . không cần sử dụng this

3. sử dụng hooks khi nào
    . dự án mới  => Hooks
    . dự án cũ
        . Component mới => Function component + hooks
        . Component cũ => giữ nguyên, nếu có thời gian tối ưu qua hooks
        
4. người mới nên bắt đầu với function hay class component
    . dùng hooks vì dễ tiếp cận và dễ hiểu

5. có kết hợp sử dụng Function component & class component được không?
    . được


// Function component
    function Item ({children}) {
        return <li>{children}</li>
    }

// Class component
    class List extends React.Component {
        render() {
            return (
                <ul>
                <Item>HTML</Item>
                <Item>HTML</Item>
                <Item>HTML</Item>
                <Item>HTML</Item>
                </ul>
            )
        }
    }
