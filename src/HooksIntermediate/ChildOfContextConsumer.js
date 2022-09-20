import {
  useContext,
} from 'react';
import logo from '../logo.svg';
import {
  AppContext,
} from './AppContext';
import {
  DARK_GRAY,
  LIGHT_BLUE,
} from '../colors';
import {
  ACTIONS,
} from './AppReducer';
import '../App.css';

function ChildOfContextConsumer() {
  console.log('ChildOfContextConsumer');
  /**
   * Here, we're able to access that data that is current in the context.
   */
  const contextData = useContext(AppContext);
  /**
   * Remember that we provided it with the state and setState from the top-level component. Notice that we didn't have to pass this down as props from the component that sat in the middle.
   */
  const {
    state,
    setState,
    state2,
    dispatch,
  } = contextData;
  /**
   * Now we can destructure the state and get whatever details out of it that we need.
   */
  const {
    showLogo,
  } = state;
  const {
    bgColor,
  } = state2;
  const onClickShowHideLogo = (e) => {
    e.stopPropagation();
    /**
     * Here, we can set the state, which triggers a render within the AppProvider component. As React rebuilds the component-chain, it knows only to render again any components that rely on that changed context.
     */
    setState({
      ...state,
      showLogo: !state.showLogo,
    });
  };
  const onClickBody = () => {
    /**
     * We can handle setting the state inside of the reducer, by calling the dispatch function with an action type and a payload.
     * 
     * Updating the state via the reducer helps prevent unexpected behavior because it acts as a single source of truth for each state change.
     */
    const newColor = bgColor === LIGHT_BLUE ? DARK_GRAY : LIGHT_BLUE;
    dispatch({
      type: ACTIONS.CHANGE_BG_COLOR,
      payload: newColor,
    });
  };

  return (
    <div
      className="App-body"
      onClick={onClickBody}
    >
      <header
        className="App-header"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <button
          className="App-link"
          onClick={onClickShowHideLogo}
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

export default ChildOfContextConsumer;
