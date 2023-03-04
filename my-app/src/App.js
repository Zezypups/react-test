import User from './User';
import './App.css';
import AddDocModal from './AddDocModal'

function Profile() {
  return (
    <><div className="Profile">
      <header className="Profile-header">
        <img src="Profile.jpg" className="Profile-logo" alt="logo" />
        <p>
          Hello, I am ZezyPups !
        </p>
        <a
          className="Profile-link"
          href="https://github.com/Zezypups"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here is my Github
        </a>
      </header>
    </div>
    <AddDocModal /></>
  );
}


export default Profile;


