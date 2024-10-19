// import logo from './logo.svg';
import './App.css';
import Register from './components/auth/Register';
import Notification from './components/notification/Notification';

function App() {
// const API_KEY = process.env.REACT_APP_FIREBASE_KEY
  return (
    <div className="App">
      
     <Register/>
     <Notification/>
    </div>
  );
}

export default App;
