import { useParams } from "react-router-dom"
import { useAppSelector } from "../../redux/hook"

import { Input } from "./input"
import { Todo } from "./todo"

import s from './Main.module.scss'

export const Main: React.FC = () => {
     const id = useParams()

     const lists = useAppSelector(state => state.todo.list)
     const item = lists.find(e => e.id === id.id)

     return <div className={s.wrapper}>
          <Input id={item?.id} />
          <Todo items={item?.todos} />
     </div>
}