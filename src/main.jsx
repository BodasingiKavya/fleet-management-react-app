
import { ReactDOM,createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  // console.log("Hello"),
  // <BrowserRouter>
  //   <AuthProvider>
      <App />
  //   </AuthProvider>
  // </BrowserRouter>

)
