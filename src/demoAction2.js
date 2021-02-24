
export function addDemoData2(data) {
    return async (dispatch) => {
        dispatch({type:'ChangeDemoData2',payload:data});
    }
  }