import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect, createContext } from 'react';

export const DesktopContext = createContext(null)

function App() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, [])

  return (
    <DesktopContext.Provider value={width > 768} >
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </DesktopContext.Provider>
  );
}

export default App;
