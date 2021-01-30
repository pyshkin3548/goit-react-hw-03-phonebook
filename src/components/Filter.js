import React from 'react'
import PropTypes from "prop-types";

export default function Filter ({value, onChangeFilter}){
    return (
        <div>
           <input type="text" 
           value={value} 
           placeholder='Search...'
           onChange={e => onChangeFilter(e.target.value)}
            />
        </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onchangeFilter: PropTypes.func.isRequired,
  };