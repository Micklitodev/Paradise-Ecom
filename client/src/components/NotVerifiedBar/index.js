import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import Auth from "../../utils/auth";

const NotVerifiedBar = () => {
  const { loading, data } = useQuery(QUERY_USER);
  let message = null;

  if (!loading) {
    const userData = {
      isVerified: Auth.isVerified(),
      isIdSubmitted: data.user?.isIdSubmitted,
      isIdRejected: data.user?.isIdRejected,
    };

    if (!userData.isVerified) {
      if (userData.isIdRejected) {
        message = (
          <div className="unverifiedbar">
            ID images were rejected. Please re-submit. Click{" "}
            <a href="/dashboard">here</a> to re-submit.
          </div>
        );
      } else if (!userData.isIdSubmitted) {
        message = (
          <div className="unverifiedbar">
            You must submit your ID before purchasing. Click{" "}
            <a href="/dashboard">here</a> to verify your age.
          </div>
        );
      } else {
        message = (
          <div className="pendingreviewbar">
            Review of ID pending. Please check back later.
          </div>
        );
      }
    }
  }

  return <>{message}</>;
};

export default NotVerifiedBar;
