import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getTodos, postTodos } from './todoApi'

function Quickstart() {
    // 쿼리 클라이언트 가져오기
    // provider로 감싸고 있는 쿼리 클라이언트를 가져올 수 있다.
    const queryClient = useQueryClient()

    
    const {isLoading, isError, data} = useQuery(["todos"], getTodos)
    console.log("query :", data)


    // post요청을 보냄-> 성공하면 useQuery로 매핑되있는 todos라는 키에 있는 값들을 다 invalidateQueries
    const mutation = useMutation(postTodos, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos")
        }
    })
    if(isLoading){
        return "Loading..."
    }
    if(isError){
        return "error..."
    }
  return (
    <div>
        <ul>
            {
                data.map((todo) => {
                    return <li key={todo.id}>{todo.contents}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Quickstart