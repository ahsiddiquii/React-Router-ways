import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import Params from './components/User/Params.jsx'
import PageNotFound from './components/NoFound/PageNotFound.jsx'
import Users from './components/User/Users.jsx'
import Positions from './components/User/Positions.jsx'

// 2nd Way for react routing 
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: '/about',
//         element: <About />
//       },
//       {
//         path: '/contact',
//         element: <Contact />
//       },
//     ]
//   }
// ])

// 3rd way for react routing
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='employee/:position/:id' element={<Params />} />
      <Route path='*' element={<PageNotFound />} />
      <Route path='employees' element={<Users />} />
      <Route path='position/:position' element={<Positions />} />
      {/* <Route path='*' element={<Home />} /> */}
      {/* OR  */}
      {/* <Route path='*' element={<Navigate to="/about" />} /> */}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(

  // 2nd and 3rd way for react routing
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,

  // 1st way for react routing
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
