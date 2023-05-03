import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../redux/hook"
import { setActiveList } from '../../redux/slices/todos'

import { Input } from "./input"
import { Todo } from "./todo"

import s from './Main.module.scss'

export const Main: React.FC = () => {
     const dispatch = useAppDispatch()
     const { id } = useParams()

     useEffect(() => {
          dispatch(setActiveList(id ? id : ''))
     }, [])

     const lists = useAppSelector(state => state.todo.list)
     const item = lists.find(e => e.id === id)

     return <div className={s.wrapper}>
          <Input id={item?.id} />
          <Todo items={item?.todos} />
     </div>
}