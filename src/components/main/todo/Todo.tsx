import type { NewTodo } from '../../../types/data'
import { useAppDispatch } from '../../../redux/hook'
import { ReactComponent as Xmark } from '../../../assets/Xmark.svg'
import { removeTodo, changeCompleted } from "../../../redux/slices/todos"
import s from './Todo.module.scss'

interface IProps {
     items: NewTodo[] | undefined
}

export const Todo: React.FC<IProps> = ({ items }) => {
     const dispatch = useAppDispatch()

     function deleteTodo(id: string, idList: string) {
          dispatch(removeTodo({ id: id, idList: idList }))
     }

     function handlerCompleted(id: string, idList: string) {
          dispatch(changeCompleted({ id: id, idList: idList }))
     }

     return <div className={s.wrapper}>
          {items?.map(e => <div key={e.id} className={s.wrapper__item}>
               <div className={s.wrapper__item__box1}>
                    <input type="checkbox" checked={e.completed} onChange={() => handlerCompleted(e.id, e.idList)} />
               </div>
               <div className={s.wrapper__item__box2}>
                    <span className={`${e.completed ? s.active : ''}`}>{e.text}</span>
               </div>
               <div className={s.wrapper__item__box3}>
                    <button onClick={() => deleteTodo(e.id, e.idList)}>
                         <Xmark />
                    </button>
               </div>
          </div>)}
     </div>
}