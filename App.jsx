import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';

function App() { 

  return (
    <div className='bg-auto min-h-screen gradientBg '>
      <ScrollRestoration />
      <Navigation />
      <div id='detail'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
