import { Input } from "./input/Input"
import { List } from "./list"
import s from './Sidebar.module.scss'

export const Sidebar: React.FC = () => {
     return <div className={s.wrapper}>
          <Input />
          <List />
     </div>
}