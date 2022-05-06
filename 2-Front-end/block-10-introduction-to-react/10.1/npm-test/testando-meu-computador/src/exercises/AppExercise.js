import MyComponent from './Component';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './exercises.css';

const listArray = ['first item', 'second item', 'third item', 'fourth item ', 'fifth item'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
  
const getList = listArray.map((item) => Task(item));

function AppExercise() {
  return (
    <div>
      <Header />
      {/* <p>Hello World!</p> */}
      {/* <MyComponent /> */}
      <div className='content heading'>
        <h2>Exercícios do dia 10.1</h2>
        <ol>
          {getList}
        </ol>
      </div>
      <Content />
      <Footer />
    </div>
  );
}

export default AppExercise;