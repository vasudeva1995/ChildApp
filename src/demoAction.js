
export function addDemoData(data) {
    return async (dispatch) => {
        dispatch({type:'ChangeDemoData',payload:data});
    }
  }