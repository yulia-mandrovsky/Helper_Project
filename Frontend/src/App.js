import './App.css';
import { Redirect, Route , withRouter} from 'react-router-dom';
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
      <Route path="/" exact component={Description} />
      <Route path="/sign-in" exact component={Entrance}/>
      <Route path="/sign-up" exact component={RegistrationFirst} />
      <Route path="/sign-up-helper" exact component={RegistrationSecond} />
      <Route path="/home" exact component={Main} />
      <Route path="/user-choice" exact component={ChoicePageUser} />
      <Route path="/add-task" exact component={AddTask} />
      <Route path="/specialists-list" exact component={SpecialistsFilter} />
      <Route path="/tasks-filter" exact component={TasksFilter} />
      <Route path="/my-tasks" exact component={MyTasks} />
    </div>
  );
}

export default withRouter(App);
