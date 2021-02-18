import ChannelInfo from './Components/ChannelInfo/ChannelInfo'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__page">
        <Sidebar />
        <ChannelInfo />
      </div>
    </div>
  );
}

export default App;
