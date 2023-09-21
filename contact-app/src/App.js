import './App.css';
import List from './components/List'
import Form from './components/Form'
import { useState } from 'react';


function App() {

  const [contact, setContact] = useState([
    {
      fullName: 'test1',
      phoneNumber: '123123212',
    },
    {
      fullName: 'test2',
      phoneNumber: '21312325',
    },
    {
      fullName: 'test3',
      phoneNumber: '332453453',
    },
  ])

  return (
    <div className="App">
      <div className="container">
        <List contact={contact} />
        <Form contact={contact} setContact={setContact} />
      </div>
    </div>
  );
}

export default App;
