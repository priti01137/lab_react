import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,Routerprovide, RouterProvider}from 'react-router-dom';
import Navbar from './component/Navbar';
import Book from './component/Book';
//create  routes
const routes=createBrowserRouter([

{
  path:"/",
  element:<> <Navbar/></>
},
{
  path:"/book",
  element:<> <Book/> </>
}

]);

function App() {
  return (
    <div>
     <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
