import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { appRoutes } from './AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {appRoutes.map((item) => {
          return (
            <Route path={item.path} element={item.element}></Route>
          )
        })}
      </Routes>

    </BrowserRouter >
  )
}

export default App
