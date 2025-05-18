import './App.css';
import StudentData from './Components/Student';
import { Student } from './Components/StudentComp';
import { User } from './Components/User';
import { UsersClassCRUD } from './Components/UserClassCRUD';


function App() {
  return (
    <div className="App">
      {/* <Student/>
      <User/>
      <UsersClassCRUD/> */}
      <StudentData/>
    </div>
  );
}

export default App;
