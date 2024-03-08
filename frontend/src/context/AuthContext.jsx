import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
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

// import { createContext, useContext, useState } from "react";

// export const AuthContext = createContext();

// export const useAuthContext = () => {
//   return useContext(AuthContext);
// };

// export const AuthContextProvider = ({ children }) => {
//   const [authUser, setAuthUser] = useState(null);
//   const handleSetAuthUser = (userData) => {
//     // Implement your logic to set the authenticated user
//     setAuthUser(userData);
//   };

//   return (
//     <AuthContextProvider value={{ authUser, setAuthUser, handleSetAuthUser }}>
//       {children}
//     </AuthContextProvider>
//   );
// };
