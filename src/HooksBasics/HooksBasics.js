import {
  useEffect,
  useState,
} from 'react';
import {
  DARK_GRAY,
  LIGHT_BLUE,
  RED,
} from '../colors';
import logo from '../logo.svg';
import '../App.css';

/**
 * Hooks are designed to be used with functional components.
 */
function App() {
  /**
   * State is handled via the useState() hook.
   * 
   * Use this format:
   * [state, setState] = useState(initialValue);
   */
  const [showLogo, setShowLogo] = useState(true);

  /**
   * Multiple state hooks can be defined.
   */
  const [bgColor, setBGColor] = useState(DARK_GRAY);

  /**
   * We can pass an object in as the state and handle it with one hook if we want.
   */
  // const [state, setState] = useState({
  //   initialRenderComplete: false,
  //   someOtherStateVariable: null,
  // });
  // const {
  //   initialRenderComplete,
  // } = state;

  /**
   * Asynchronous operations, such as timeouts, intervals, or server requests, are performed with useEffect()
   * 
   * useEffect() performs 'componentDidMount()', 'componentDidUpdate()', and 'componentWillUmount' all in one function.
   * 
   * Use this format:
   * useEffect(functionToRun, arrayOfObservables)
   * 
   * An empty array means to run once, after the initial render.
   */
  // useEffect(() => {
  //   /**
  //    * Will run once, after the first render.
  //    * The setTimeout allows us to see the effect in action.
  //    **/
  //   setTimeout(function() {
  //     setBGColor(LIGHT_BLUE);
  //     // setState({
  //     //   initialRenderComplete: true,
  //     // });
  //   }, 2000);
  //   /**
  //    * The return statement is the same as componentWillUmount()
  //    * This is the 'cleanup' stage, which is not only a good practice,
  //    * but is important for hot-reload to function correctly in development.
  //    * In this case, we set the background color back to the default of dark gray.
  //    */
  //   return () => setBGColor(DARK_GRAY);
  // }, []);
  /**
   * We can also define more than one useEffect() hook.
   */
  // useEffect(() => {
  //   /**
  //    * This hook waits for the showLogo state to change, and when it does, reacts to it by changing the background color again, along with showing / hiding the logo.
  //    * 
  //    * Keep in mind that just because we included showLogo in the observables array, this will still run the first time, the 'componentDidMount' part of the chain. Because of this, we need to account for that, which is why we check for initialRenderComplete.
  //    */
  //   if (initialRenderComplete) {
  //     if (showLogo) {
  //       setBGColor(LIGHT_BLUE);
  //     } else {
  //       setBGColor(RED);
  //     }
  //   }
  //   /**
  //    * Notice this effect has no return statement. The return statement is optional, and in this case, we don't need it because our other effect hook is already handling the relevant cleanup.
  //    */
  // }, [
  //   initialRenderComplete,
  //   showLogo,
  // ]);

  const onClick = () => {
    setShowLogo(!showLogo);
  };

  /**
   * The main 'return' statement is the same as the 'render()' method in class-based components.
   */
  return (
    <div
      className="App"
    >
      <header
        className="App-header"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <button
          className="App-link"
          onClick={onClick}
        >
          Show / Hide Logo
        </button>
        {showLogo &&
          <img src={logo} className="App-logo" alt="logo" />
        }
      </header>
    </div>
  );
}

export default App;
