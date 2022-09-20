export const ACTIONS = {
  CHANGE_BG_COLOR: 'CHANGE_BG_COLOR'
};

/**
 * The reducer takes a state object and an action object.
 * 
 * The state object is similar to that used in setState()
 * 
 * The action object typically has a 'type' and a 'payload'
 */
export function AppReducer(state, action) {
  switch(action.type) {
    case ACTIONS.CHANGE_BG_COLOR:
      /**
       * We then return a new state object with modified values.
       * 
       * Note: We never mutate the original state object because that could create side-effects and even if we attempted it, it wouldn't trigger a render within React anyway. We must always create a new state object and copy in whatever parts of the old one are necessary.
       */
      return {
        ...state,
        bgColor: action.payload,
      };
    default:
      return state;
  }
};