import React from 'react'
import { RaisedButton } from 'material-ui'


const Type = ({type}) => (
   <div>BUTTON TYPE:  {type}</div>
)

const SpecialButton = ({children, handleSubmit }) => (
  <RaisedButton type="submit"
      onClick={handleSubmit}>
         {children} 
    </RaisedButton>
)

export default SpecialButton

