import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Admin from './pages/Admin';
import ProtectedRoute from './ProtectedRoute';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
function App() {

  return (
    
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path='/login' element={<Login/>}>/</Route>
        <Route path='/admin' element={
          <ProtectedRoute>
            <Admin/>
          </ProtectedRoute>
        }/>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
    
  )
}

export default App
