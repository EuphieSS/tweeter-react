// import ProfilePicture from '../../public/profile-hex.png';
import ProfilePicture from '../profile-hex.png';

function Profile() {
  return (
    <aside>
      <div className="profile">
        <img className="profile__image" src={ProfilePicture} alt="Profile" />
      </div>
      <br />
      <div className="profile__name">
        <h2><span className="profile--bold">Amy</span> Mansell</h2>
      </div>
    </aside>
  );
}

export default Profile;