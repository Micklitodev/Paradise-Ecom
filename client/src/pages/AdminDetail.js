
import Nav from '../components/Nav'
import Auth from '../utils/auth'
const AdminDetail = () => {
    if (Auth.isAdmin()) {
        return (
          <>
            <Nav />
            <br />
            <br />
            <br />
    
            <div>
             <p> admin order detail. </p>
            </div>
          </>
        );
      } else {
        return (
          <>
            <div className="center">Err no auth to access this page.</div>
          </>
        );
      }
}

export default AdminDetail; 