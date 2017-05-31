// Redux Module: Clock

const initialState = {
  data: 0,
}

export const actionTypes = {
  SUCCESS: 'data/SUCCESS'
}

// REDUCERS
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUCCESS:
      return {...state, data: action.data}
    default: return state
  }
}

// ACTIONS
export const fetchData = (isServer) => dispatch => {
  return new Promise((resolve) => {
    setTimeout(function(){
      dispatch({
        type: actionTypes.SUCCESS,
        data: Math.random()
      });
      resolve();
    }, 2000);
  });
}
