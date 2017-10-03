import React, { Component } from 'react';
import logo from './logo.svg';
import FormTodo from './components/FormTodo'
import CollectionList from './components/CollectionList'
import { MuiThemeProvider, CircularProgress } from 'material-ui'
import { loadProjects } from './lib/projectService'
import './App.css';


class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Learn React, Wohoool", completed: false },
      { id: 2, name: "Learn Angular, eeeeww a lot ", completed: false },
    ],
    inputValue: '',
    isLoading: false,
    projects: []
  }

  // componentDidMount(){
  //   loadProjects().then(projects => this.setState({ projects }))
  // }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }


  setLoading = () => this.setState({ isLoading: true })

  addItem = (e) => {
    this.setLoading()
    e.preventDefault()
    const { todos, inputValue } = this.state
    const newId = todos.length + 1
    const newTodo = {
      id: newId,
      name: inputValue,
      completed: false
    }
    todos.push(newTodo)
    
    setTimeout(() => {
       this.setState({ todos, isLoading: false, inputValue: ''})
    }, 2000)
   
  }


  render() {
    const {isLoading, todos, projects } = this.state

    console.log(projects)
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="todo-container">
            <ul>  
              {projects.map(p => <li key={p.id}> { p.projName}</li>)}
            </ul>
             <FormTodo
              handleChange={this.handleChange}
              handleAddItem={this.addItem}
              inputValue={this.state.inputValue}
            />
            <br />
            { isLoading
              ? <CircularProgress size={60} thickness={4} style={{ margin: "auto"}} />
              : <CollectionList collection={this.state.todos} />
              
            } 
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}


export default App;
