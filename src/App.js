import Header from './components/header/header.component';
import ViewWrapper from './components/viewWrapper/viewWrapper.component';
import Scroll from './components/scroll/scroll.component';
function App() {
  return (
    <div className="App">
      <Header/>
      <Scroll>
        <ViewWrapper/>
      </Scroll>
    </div>
  );
}


export default App;
