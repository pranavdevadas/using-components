import './App.css';
import Profiledata from './profiledata';
function App() {
  let data = [
    {name : 'Pranav', email : 'pranavdevadas2@gmail.com'},
    {name : 'Aishwarya', email : 'aishwarya22@gmail.com'},
    {name : 'Alexander', email : 'alexandergm@gmail.com'}
  ]
  return (
    <div className="App">
      {
        data.map((profile) => <Profiledata key={profile.id} {...profile} />)
      }
      
    </div>
  );
}

export default App;
