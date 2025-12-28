import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Login from './pages/Login';
import Admin from './pages/Admin';
import ProtectedRoute from './ProtectedRoute';

function App() {

  return (  
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}>/</Route>
        <Route path='/admin' element={
          <ProtectedRoute>
            <Admin/>
          </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
