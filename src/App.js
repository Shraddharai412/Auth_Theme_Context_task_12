import React from "react";
import { ThemeProvider } from "./Components/ThemeContext";
import { AuthProvider } from "./Components/AuthContext";
import Dashboard from "./Components/DashBoard";


function App(){

 
 
 return(
  <AuthProvider>
    <ThemeProvider>
    <div>
      <Dashboard/>
    </div>
    </ThemeProvider>
  </AuthProvider>
  
 )
}
export default App;