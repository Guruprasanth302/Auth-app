import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import About from './pages/About'
import Header from './Components/Header'
export default function App(){
 return <BrowserRouter>
 {/*header*/}
 <Header />
 <Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/about' element={<About />}/>
  <Route path='/sign-in' element={<Signin />}/>
  <Route path='/sign-up' element={<Signup />}/>
  <Route path='/profile' element={<Profile />}/>
  </Routes>
 </BrowserRouter>
}