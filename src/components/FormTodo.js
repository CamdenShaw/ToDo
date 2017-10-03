import React from 'react'
import SpecialButton from './SpecialButton'
import { TextField } from 'material-ui'

const FormTodo = ({ handleAddItem, inputValue, ...props }) => {
    console.log(props)
  return (
  <form className="todo-wrapper" onChange={props.handleChange}>
    <TextField type="text" value={inputValue} className="todo-input" />
      <SpecialButton handleSubmit={handleAddItem}>SUBMIT </SpecialButton>
  </form>
)
}

export default FormTodo