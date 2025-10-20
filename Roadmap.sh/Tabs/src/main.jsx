import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import FirstTab from './components/FirstTab.jsx'
import SecondTab from './components/SecondTab.jsx'
import ThirdTab from './components/ThirdTab.jsx'
import FourthTab, { fetchData } from './components/FourthTab.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // {
      //   path: "",
      //   element: <App />
      // },
      {
        path: "first-tab",
        element: <FirstTab />,
        children: [
          {
            path: ':id',
            element: <FirstTab />
          }
        ]
      },
      {
        path: "second-tab",
        element: <SecondTab />
      },
      {
        path: "third-tab",
        element: <ThirdTab />
      },
      {
        loader: fetchData,
        path: "fourth-tab",
        element: <FourthTab />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
