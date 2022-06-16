import React ,{ useState } from 'react';

const Test2 = () => {
    const [click,setClick] = useState (0)
    return (
        <div>
       
 
<p>You clicked {click} times</p>
 
 
      <button onClick={() => setClick(click => click + 1)}>
        Click me
      </button>
    </div>
      );
    }
     
    export default Test2;
