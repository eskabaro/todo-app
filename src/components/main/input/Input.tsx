import { useState } from "react"
import { useAppDispatch } from "../../../redux/hook"
import { ReactComponent as Plus } from '../../../assets/Plus.svg'
import { addNewTodo } from "../../../redux/slices/todos"
import s from './Input.module.scss'

interface IProps {
     id: string | undefined
}

export const Input: React.FC<IProps> = ({ id }) => {
     const [value, setValue] = useState('')
     const dispatch = useAppDispatch()

     function addTodo() {
          if (value) {
               dispatch(addNewTodo({
                    idList: id ? id : '',
                    id: Date.now().toString(),
                    text: value,
                    completed: false
               }))
          }
          setValue('')
     }

     return <label className={s.label}>
          <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo"/>
          <button onClick={addTodo}>
               <Plus />
          </button>
     </label>
}