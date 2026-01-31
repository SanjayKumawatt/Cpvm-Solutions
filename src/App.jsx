import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import AboutPage from './Pages/About'
import SolutionsPage from './Pages/SolutionsPage'
import PlatformsPage from './Pages/Platform'
import ContactPage from './Pages/Contact'
import PrivacyPolicy from './Pages/Privacy'
import TermsConditions from './Pages/Terms'

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<AboutPage/>
        },
        {
          path:"/solutions",
          element:<SolutionsPage/>
        },
        {
          path:"/platforms",
          element:<PlatformsPage/>
        },
        {
          path:"/contact",
          element:<ContactPage/>
        },
        {
          path:"/privacy",
          element:<PrivacyPolicy/>
        },
        {
          path:"/terms",
          element:<TermsConditions/>
        },
      ]
    }
  ])
  
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App