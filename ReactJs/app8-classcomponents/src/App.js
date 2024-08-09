import './App.css';
import { Student } from './Components/StudentComp';
import { User } from './Components/User';
import { UsersClassCRUD } from './Components/UserClassCRUD';


function App() {
  return (
    <div className="App">
      <Student/>
      <User/>
      <UsersClassCRUD/>
    </div>
  );
}

export default App;
