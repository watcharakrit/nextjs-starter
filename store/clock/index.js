// Redux Module: Clock

const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0
}

export const actionTypes = {
  TICK: 'TICK'
}

// REDUCERS
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, { lastUpdate: action.ts, light: !!action.light })
    default: return state
  }
}

// ACTIONS
export const serverRenderClock = (isServer) => dispatch => {
  return new Promise((resolve) => {
    setTimeout(function(){
      dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });
      resolve();
    }, 2000);
  });
}

export const startClock = () => dispatch => {
  return setInterval(() => {
    dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
  }, 1000)
}
