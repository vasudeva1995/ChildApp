const initialState = {
  demoData: null,
  testData: null
};

const demoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ChangeDemoData':
      return { ...state,
        demoData: action.payload
      };

    default:
      return state;
  }
};

export default demoReducer;