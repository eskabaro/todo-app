import { Routes, Route } from 'react-router-dom'
import { Sidebar } from '../components/sidebar/Sidebar'
import { Main } from '../components/main'
import { Home } from '../components/home'
import s from './Layout.module.scss'

export const Layout: React.FC = () => {
     return <div className={s.root}>
          <Sidebar />
          <Routes>
               <Route path='/:id' element={<Main />} />
               <Route path='/' element={<Home />} />
          </Routes>
     </div>
}