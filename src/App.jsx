import React from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import { Home,About, Login, SignUpPage1, SignUpPage2,Profile } from './pages'
import UserContextProvider from './context/UserContextProvider'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='sign-up-1' element={<SignUpPage1 />} />
        <Route path='sign-up-2' element={<SignUpPage2 />} />
        <Route path='profile' element={<Profile />} />
      </Route>
    )
  )


  return (
    <UserContextProvider> 
      <RouterProvider router={router} />
    </UserContextProvider>
  )
}

export default App
