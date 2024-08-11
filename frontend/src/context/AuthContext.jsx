import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(); //react 的一个内置方法,用于创建一个 Context 对象。通过这个对象，你可以在组件树中的任何位置访问它的值，而不必显式通过组件层层传递;

//eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext); //useContext 是 React 的一个内置 Hook，用于让你在当前组件中访问 Context 的值
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
