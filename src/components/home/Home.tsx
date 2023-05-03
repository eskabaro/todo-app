import { ReactComponent as List } from '../../assets/List.svg'
import s from './Home.module.scss'

export const Home: React.FC = () => {
     return <div className={s.wrapper}>
          <h2 className={s.wrapper__h2}>Hello, this is the list of reminders</h2>
          <p className={s.wrapper__p1}>Here you can take notes, create to-do lists for the day. To get started, robots, create your first list and fill it out!</p>
          <List className={s.wrapper__svg}/>
          <p className={s.wrapper__p2}>This small application is built on React ts, the state manager is based on Redux/toolkit in conjunction with localStorage.</p>
     </div>
}