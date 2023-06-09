import { useState } from "react"
import { useAppDispatch } from "../../../redux/hook"
import { addNewList } from "../../../redux/slices/todos"
import { ReactComponent as Plus } from '../../../assets/Plus.svg'
import s from './Input.module.scss'

export const Input: React.FC = () => {
     const [value, setValue] = useState('')
     const dispatch = useAppDispatch()

     function addList(e: any) {
          if (value) {
               dispatch(addNewList({
                    id: Date.now().toString(),
                    name: value,
                    todos: []
               }))
          }
          setValue('')
          
          e.preventDefault()
     }

     return <form className={s.label}>
          <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new list" />
          <button onClick={addList} type="submit">
               <Plus />
          </button>
     </form>
}