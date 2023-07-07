
import Auth from '../utils/auth'
const ManageProducts = () => {

   console.log(Auth.isAdmin())

    
    if (Auth.isAdmin() == true) {
    return( 
       
        <>
            <div> hi, youre authorized to manage products 
            additional checks will be made at server level.  </div>
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

export default ManageProducts