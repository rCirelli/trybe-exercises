// import logo from './logo.svg';
import './App.css';
import MyElement from './MyElement';

function helloWorld (nome, sobrenome) {
  return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}

const element = helloWorld("Raphael", "Cirelli");
const container = <div>{element}</div>;
const classe = 'App-header';
const textJSX = 'Hello, JSX';
const JSXelement = <h1>{textJSX}</h1>;

function App() {
  return (
    <div className="App">
      <MyElement />
      <header className={classe}>
        {container}
        <br></br>
        {JSXelement}
      </header>
    </div>
  );
}

export default App;
