import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Componen/Profile/ProfilPhoto';
import FullName from './Componen/Profile/FullName';
import Address from './Componen/Profile/Address';
import com from './com.css';
function App() {
  return (
    <div className="App">
     <div id="Profil"><ProfilePhoto/></div>
     <br/><div id="Full"><FullName/></div>
      <br/><div id="Addres"><Address/></div>
      
    </div>
  );
}

export default App;
