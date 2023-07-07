
import Auth from '../utils/auth'
const VerifUsers = () => {

   console.log(Auth.isAdmin())

    
    if (Auth.isAdmin() == true) {
    return( 
       
        <>
            <div> hi, youre authorized to verify users additional checks will
            be made at the server level. </div>
        </>
    )
    } else { 
        return(
        <> 
          <div> Err no auth to acess this page. </div>
        </>
        )
    }
}

export default VerifUsers