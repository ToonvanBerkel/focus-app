const initialState = {
    isActiveVisible: true
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_ACTIVE_VISIBILITY':
        return {
          ...state,
          isActiveVisible: !state.isActiveVisible
        };
      default:
        return state;
    }
  };
  
export default reducer;