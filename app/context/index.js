import { createContext, useReducer, useState } from "react";
import reducer from "../reducer";
export const UserContext = createContext();

export default function UserProvider({ children }) {
  //   const [list, setList] = useState(["lina"]);
  const [state, Dispatch] = useReducer(reducer, {
    list: [],
    details: {}
  });
  return (
    <UserContext.Provider value={{ state, Dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
