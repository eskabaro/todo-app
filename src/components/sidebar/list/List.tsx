import { useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as Chat } from '../../../assets/Chat.svg'
import { ReactComponent as Trash } from '../../../assets/Trash.svg'
import { useAppDispatch, useAppSelector } from "../../../redux/hook"
import { setLists, deleteList, setActiveList } from "../../../redux/slices/todos"
import type { TodoList } from '../../../types/data'
import s from './List.module.scss'

export const List: React.FC = () => {
     const dispatch = useAppDispatch()
     const navigate = useNavigate()
     const lists = useAppSelector(state => state.todo.list)
     const activeList = useAppSelector(state => state.todo.activeList)
     
     const storedData = localStorage.getItem('lists')
     let myArray: TodoList[] = []
     if (storedData) myArray = JSON.parse(storedData)

     useEffect(() => {
          dispatch(setLists(myArray))
     }, [])

     function removeList(id: string, to: string) {
          dispatch(deleteList(id))
          navigate(to)
     }
     
     return <div className={s.wrapper}>
          {lists.map(e => <div key={e.id} className={`${s.wrapper__item} ${activeList === e.id ? s.active : ''}`}>
               <Chat />
               <Link to={`/${e.id}`} onClick={() => dispatch(setActiveList(e.id))}>
                    <span>{e.name}</span>
               </Link>
               <button onClick={() => removeList(e.id, '/')}>
                    <Trash />
               </button>
          </div>)}
     </div>
}
