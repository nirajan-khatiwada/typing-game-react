import { createContext } from "react";
import { useReducer } from "react";
export const dataContext=createContext()



const DataProvider=({children})=>{
    function dataAction(state, action) {
        switch (action.type) {
          case "language":
            return { ...state, language: action.param };
          case "clock":
            return { ...state, time: action.param };
          case "paragraph":
            return { ...state, paragraph: action.param };
          default:
               return state
        }
      }
      
      const [data, dispatch] = useReducer(dataAction, {
        language: "English",
        time: 5,
        paragraph: 5,
      });
    return <dataContext.Provider value={{'data':data,'dispatch':dispatch}}>
        {children}
    </dataContext.Provider>

}
export default DataProvider