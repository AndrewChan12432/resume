import './App.css';
import profile from "./profile.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img className="Profile-picture" src={profile} alt="profile" />
          <p>My name is AndrewChan</p>
      </header>
    </div>
  );
}

export default App;
