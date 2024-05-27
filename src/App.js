import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import Loader from './components/Loader';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: '/',
      element: <MainContainer />
    },
    {
      path: '/watch',
      element: <WatchPage />
    }
  ]
}])

function App() {

  if (false) {
    return <Loader />
  }
  return (
    <Provider store={store}>
      <div className="App text-5xl">
        <Head />
        <RouterProvider router={appRouter} />


        {/**
     * Head
     * 
     * Body
     * 
     *   Sidebar
     *      MenuItems
     * 
     *   MainContainer
     *      ButtonsList
     *      Video Container
     *      Video Card
     * 
     */}

      </div>
    </Provider>
  );
}

export default App;
