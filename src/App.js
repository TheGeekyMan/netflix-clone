import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from './common/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
