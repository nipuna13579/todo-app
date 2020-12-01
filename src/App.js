import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import TodosList from './components/TodosList';
import { connect } from 'react-redux';
import { deleteAll, persistTodos } from './redux/action/addTodo.action';
import { useEffect } from 'react';

const App = ({deleteAll, persistTodos}) => {
   useEffect(() => {
    persistTodos();
  }, [persistTodos]);
 
   return (
    <div className="App">
      <h1 style={{ textDecoration: "underline"}}>Todos App</h1>
     <InputField />
     <TodosList />
     <div>
       <button style={{marginTop: '20px', cursor:'pointer'}} onClick={deleteAll} >Delete All</button>
     </div>
    </div>
  );
}

const mapDispatchToProp = dispatch => ({
  deleteAll : () => dispatch(deleteAll()),
  persistTodos : () => dispatch(persistTodos())
});

export default connect(null, mapDispatchToProp)(App);
