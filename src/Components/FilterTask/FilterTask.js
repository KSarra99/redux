import React from "react";

const FilterTask = ({ setDone, setUndone }) => {
  return (
    <div>
        <div style={{margin:'10px', display:'inline-block'}}>
      <input 
        type="checkbox"
  
        onChange={(e) => setDone(e.target.checked)}
      />
      
      <label for="vehicle1"> Done</label>
      </div>
   
      <div style={{margin:'10px', display:'inline-block'}}>
      <input
        type="checkbox"
   
        onChange={(e) => setUndone(e.target.checked)}
      />
      <label for="vehicle1"> unDone</label>
      </div>
      <br></br>
    </div>
  );
};

export default FilterTask;
