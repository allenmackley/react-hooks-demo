import {
  useState,
  useReducer,
  createContext,
} from 'react';
import {
  DARK_GRAY,
} from '../colors';
import {
  AppReducer,
} from './AppReducer';

export const AppContext = createContext({});
/**
 * Wrapping a component with a Provider allows us to use the useContext() hook within any of the components wrapped within it, including any of multiple descendants down its component chain.
 *
 * In this case, we've created an object that includes both the state and the setState, that way, we can modify the object and trigger a state update anywhere in the app as well.
 * 
 * Embedding the 'children' object like this will cause React to only render the children that accessed the context when a state update is triggered, instead of the provider's entire tree.
**/
export function AppProvider({ children }) {
  /**
   * Don't forget to provide the state with initial default values.
   */
  const [state, setState] = useState({
    showLogo: true,
  });
  /**
   * Once the app grows in size, it's a good idea to replace useState() with useReducer().
   * 
   * I've kept both here as an example, but typically we would only use or the other.
   * 
   * We provide useReducer a reducer function as well as the initial default values, similar to how we did with setState().
   */
  const [state2, dispatch] = useReducer(AppReducer, {
    bgColor: DARK_GRAY,
  });

  return (
    <AppContext.Provider value={{
      state,
      setState,
      state2,
      dispatch,
    }}>
      { children }
    </AppContext.Provider>
  )
}