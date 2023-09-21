import './App.css';

import NoteList from './components/NoteList';
import Form from './components/Form';


function App() {
  return (
    <div className='my-16' >
      <h1 className='text-4xl text-center'>Notes App</h1>
      <div className="max-w-[70vw] mx-auto  mt-12 text-gray-600">
        <Form />
        <NoteList />
      </div>
    </div>
  );
}

export default App;
