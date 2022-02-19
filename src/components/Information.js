import React from 'react';

const Information = props => {
  return (
    <div className ="information">
      {props.info.name}
      <button onClick= {() => props.openDetails(props.info.name)}>
        Information
      </button>
    </div>
    
  )
}

export default Information;