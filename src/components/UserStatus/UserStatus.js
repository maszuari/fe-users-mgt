import {useNavigate} from 'react-router-dom';
import useAuth from '../../common/useAuth';

export default function UserStatus() {
    let {user, logout} = useAuth();
    let navigate = useNavigate();
  
    if (!user) {
      return <p>You are not logged in.</p>;
    }

    const handleLogout = () =>{
      logout();
      navigate('/')
    }
  
    return (
      <p>
        Welcome {user.firstName}!{" "}
        {user && (
          <button onClick={handleLogout}>
            Sign out
          </button>
        )}
      </p>
    );
  }