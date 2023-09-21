import './App.css';
import Form from './components/Form'
import List from './components/List'
import { WeatherProvider } from './context/WeatherContext';



function App() {


  return (
    <div className='App'>
      <WeatherProvider>
        <div className="container">
          <Form />
          <List />
        </div>
      </WeatherProvider>
    </div>
  );
}

export default App;
