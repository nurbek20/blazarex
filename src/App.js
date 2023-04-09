import './App.css';
import Navbar from './components/navbar/navbar';
import ActivePage from "./pages/active-page/active-page"

function App() {
  return (
    <div className="App">
        <Navbar/>
        <ActivePage/>
    </div>
  );
}

export default App;
