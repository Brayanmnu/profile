import ProfileDetails from './views/ProfileDetails'
import ProfilePage from './views/ProfileDetails2'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/profile-detail-v1/:idColaborador'} exact element={<ProfileDetails/>} />
        <Route path={'/profile-detail-v2/:idColaborador'} exact element={<ProfilePage/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
