import './App.css'
import {Route, Routes} from "react-router";
import {lazy} from "react";
const MenuList = lazy(() => import('./MenuList.tsx'));

export const AppRoutes = () => {
  return <Routes>
        <Route path='/' element={<MenuList />}/>
      </Routes>
}
