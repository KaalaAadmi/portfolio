// reducers/osReducer.js
const initialState = {
  os: null,
};

const osReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_OS':
      return { ...state, os: action.payload };
    default:
      return state;
  }
};

export default osReducer;
