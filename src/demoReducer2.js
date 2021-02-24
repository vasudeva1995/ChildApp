const initialState = {
    demoData2 : null,
    testData2:null,
} ; 


const demoReducer2 = (state = initialState, action) => {
    switch (action.type) {
      case 'ChangeDemoData2':
        return { ...state, demoData2:action.payload };
      default:
        return state;
    }
  };
  
  export default demoReducer2;