import './App.css';
import { Route } from 'react-router-dom';
import RegistrationFirst from './components/registration_first/RegistrationFirst';
import RegistrationSecond from './components/registration_second/RegistrationSecond'
import Entrance from './components/entrance_form/Entrance';
import Description from './components/description/Description';
import Main from './components/Main/Main';
import TasksFilter from './components/tasks_filter/TasksFilter';
import MyTasks from './components/MyTasks/MyTasks';
import AddTask from './components/AddTask/AddTask';
import ChoicePageUser from './components/ChoicePageUser/ChoicePageUser';
import SpecialistsFilter from './components/SpecialistsFilter/SpecialistsFilter';
import ListOfSpecialists from './components/ListOfSpecialists/ListOfSpecialists'

function App() {
  return (
    <div className="App">
      <Route path="/start">
        <Description />
      </Route>
      <Route path="/sign-in">
        <Entrance />
      </Route>
      <Route path="/sign-up">
        <RegistrationFirst />
      </Route>
      <Route path="/sign-up-performers">
        <RegistrationSecond />
      </Route>
      <Route path="/home">
        <Main />
      </Route>
      <Route path="/user-choice">
        <ChoicePageUser />
      </Route>
      <Route path="/add-task">
        <AddTask />
      </Route>
      <Route path="/specialists-filter">
        <SpecialistsFilter />
      </Route>
      <Route path="/specialists-list">
        <ListOfSpecialists />
      </Route>
      <Route path="/orders-filter">
        <TasksFilter />
      </Route>
      <Route path="/my-tasks">
        <MyTasks />
      </Route>
    </div>
  );
}

export default App;
