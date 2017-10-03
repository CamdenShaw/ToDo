import React from 'react'

const CollectionList  = ({ collection }) => (
  <ul style={{ listStyle: "none", padding: 0, margin: "auto" }}>
          {collection.map(item => <li key={item.id}> {item.name}</li>)}
    </ul>
)
export default CollectionList