
import './App.css'
import { HomeContainer, RegisterContainer, LoginContainer, CategoryContainer, NotFoundContainer } from './containers';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContextProvider from './providers/ContextProvider';

function App() {

  const router = createBrowserRouter([
    {
      element: <PublicLayout />,
      children: [
        {
          path: '/',
          element: <HomeContainer />
        },
        // {
        //   path: '/register',
        //   element: <RegisterContainer />
        // },
        // {
        //   path: '/login',
        //   element: <LoginContainer />
        // },
        {
          path: '/category',
          element: <CategoryContainer />
        },
      ]
    },
    {
      path: '/register',
      element: <RegisterContainer />
    },
    {
      path: '/login',
      element: <LoginContainer />
    },
    {
      path: '*',
      element: <NotFoundContainer />
    },
  ])

  return (
    <div className="app">
      <ContextProvider>
        <RouterProvider router={router}/>
      </ContextProvider>
      {/* <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path='/' element={<HomeContainer />}/>
            <Route path='/about' element={<AboutContainer />}/>
            <Route path='/contact' element={<ContactContainer />}/>
          </Route>
          <Route path='*' element={<h1>404</h1>}/>
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}

export default App
