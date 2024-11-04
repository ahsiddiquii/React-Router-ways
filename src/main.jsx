import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import Params from './components/User/Params.jsx'

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
      <Route path='param/:id' element={<Params />} />
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
