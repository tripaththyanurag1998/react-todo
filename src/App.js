import React, {useState , useEffect} from 'react';
import Todo from './Todo';
import './App.css';
import Button from '@material-ui/core/Button';
import { FormControl,InputLabel,Input,FormHelperText } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';


function App() {
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('');
  console.log(input);

  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  const addTodo = (event) => {
    // on click button this function calls
    event.preventDefault();
    
    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <h1>react to do app!! is coming soon</h1>
      <FormControl>
        <InputLabel htmlFor="my-input">Add Tasks</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        <FormHelperText id="my-helper-text">add your tasks</FormHelperText>
      </FormControl>

      <Button disabled={!input} onClick={addTodo} variant="contained" color="primary">
        Add Tasks
      </Button>
        {todos.map(todo =>(
          <Todo text={todo}/>
        ))}
    </div>
  );
}

export default App;
