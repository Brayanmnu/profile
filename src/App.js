import ProfilePage from './views/ProfileDetails'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/profile-detail/:xpColaborador'} exact element={<ProfilePage/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
