import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App(props) {
  const styles = {
    header: {
      paddingLeft: 0,
    },
    container: {
      margin: '80px 20px 20px 15px',
      paddingLeft: 0,
    },
  };

  return (
    <div className="App">
      <Header menuStyle={styles.header} />
      <div className="main-container">{props.children}</div>
    </div>
  );
}

export default App;
