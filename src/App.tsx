import { BrowserRouter, Route } from 'react-router-dom'


import { Home } from './pages/Home';
import { NewRoon } from "./pages/NewRoon";
import { AuthContextProvider } from './contexts/AuthContext';


function App() {
 
  return (
    <BrowserRouter>
     <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoon} />
        </AuthContextProvider>

    </BrowserRouter>
  );
}

export default App;
