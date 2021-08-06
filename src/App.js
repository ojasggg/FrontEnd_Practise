import './App.css';
import Header from './Header/header';
import Footer from './Footer/footer';


function App() {
  return (
    <div>
      <Header>

      </Header>
      <div>
        <div className = "leftContainer">
          This is the left container in main container.
        </div>
        <div className = "rightContainer">
          This is the right container in main container.
        </div>
      </div>
      
      <Footer>

      </Footer>
      
    </div>
    
  );
}

export default App;
