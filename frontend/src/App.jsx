import './App.css';
import Header from './components/layout/Header';
import Mainpage from './components/layout/Mainpage';
import Sidebar from './components/layout/Sidebar';

function App() {
  return (
    <>
      {/* <div>
        <div className="flex justify-around py-5">
          <div>
            <h1 className="text-5xl text-white">Capstone 2</h1>
            <h3 className="text-white text-center">G-5 Presents</h3>
          </div>
        </div>
      </div> */}
      <div>
        <div className='z-10'>
          <Header />
        </div>
        <div className='z-9'>
          <Sidebar />
        </div>
        <div>
          <Mainpage />
        </div>
      </div>
    </>
  );
}

export default App;
