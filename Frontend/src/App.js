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
import SpecialistsFilter from './components/ListOfSpecialists/ListOfSpecialists';

function App() {
  return (
    <div className="App">
      <Route path="/start" component={Description} />
      <Route path="/sign-in" component={Entrance}/>
      <Route path="/sign-up" component={RegistrationFirst} />
      <Route path="/sign-up-helper" component={RegistrationSecond} />
      <Route path="/home" component={Main} />
      <Route path="/user-choice" component={ChoicePageUser} />
      <Route path="/add-task" component={AddTask} />
      <Route path="/specialists-list" component={SpecialistsFilter} />
      <Route path="/tasks-filter" component={TasksFilter} />
      <Route path="/my-tasks" component={MyTasks} />
    </div>
  );
}

export default App;
