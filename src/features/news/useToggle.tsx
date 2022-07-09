 
import { useState, useCallback } from 'react';




const useToggle = (initialState = false) => {
 
   const [state, setState] = useState(initialState);
  
   const toggleState = useCallback(
       () => setState(state => !state),
       [state]
   );
  
   return [state, toggleState];
}

export default useToggle;
