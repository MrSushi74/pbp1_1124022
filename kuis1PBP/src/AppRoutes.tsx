import './App.css'
import {Route, Routes} from "react-router";
import {lazy} from "react";
const MenuList = lazy(() => import('./MenuList.tsx'));
const MenuListByID = lazy(() => import('./pages/MenuListById.tsx'));


export const AppRoutes = () => {
  return <Routes>
        <Route path='/' element={<MenuList />}/>
        <Route path='/menu/:id' element={<MenuListByID/>}/>
      </Routes>
}
