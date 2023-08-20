const UserData = (props) => {
  let user;
  if (props) {
    user = props.props.user;
  }
  return (
    <>
      {props ? (
        <>
          {" "}
          <div className="container my-1">
            <br />
            <br />
            <h3> Account Information </h3>
            <hr />
            <br /> 
            <p> Name: {user.firstName} {user.lastName} </p>
            {user.street ? (<p> Address: {user.street} </p>) : null }
            {user.city ? (<p> City: {user.city} </p>) : null }
            {user.state ? (<p> State: {user.state} </p>) : null }
            {user.zip ? (<p> Zip: {user.zip} </p>) : null }
            <p> Points: {user.points} </p>
          </div>{" "}
        </>
      ) : (
        <> </>
      )}
    </>
  );
};

export default UserData;
