
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import Select from './components/Select';


function App() {
  return (
    <div className='bg-[#131313] text-neutral-50  h-screen'>
    <div className="container mx-auto p-12">
        <Header />
        <Cards />
        <Select />
    </div>
    </div>
  );
}

export default App;
