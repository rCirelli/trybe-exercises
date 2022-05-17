import './App.css';
import Image from './exercises/components/Image';
import AppColdplay from './exercises/ColdplayExercisesApp';
import UsersExerciseApp from './exercises/UsersExerciseApp';
import OrdersApp from './exercises/OrdersApp';

function App() {
  return (
    <div className="App App-header">
      {/* <Image 
        source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
        alternativeText='Cute cat staring'
      /> */}
      {/* <AppColdplay /> */}
      <UsersExerciseApp />
      {/* <OrdersApp /> */}
    </div>
  );
}

export default App;
