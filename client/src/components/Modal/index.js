import { useMutation } from "@apollo/client";
import { ARGREEMENT_TOKEN } from "../../utils/mutations";
import Auth from "../../utils/auth";

const Modal = (props) => {
  const [agreeToken] = useMutation(ARGREEMENT_TOKEN);
  const handleAgree = async (e) => {
    const userChoice = "agree";
    const { data } = await agreeToken({
      variables: { userChoice },
    });
    Auth.agreement(data.agreement);
  };

  return (
    <>
      <div style={{ display: "block" }}>
        <div
          style={{
            overflowX: "hidden",
            overflowY: "auto",
            position: "fixed",
            inset: "0",
            zIndex: "5",
            outline: "none",
            focus: "outline-none",
          }}
        >
          <div
            style={{
              width: "auto",
              margin: "6rem auto",
              maxWidth: 1100,
              padding: 10,
            }}
          >
            <div
              style={{
                borderRadius: "10px",
                boxShadow: "lg",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "rgba(10, 10, 10, 0.98)",
                color: "white",
                boxShadow: "0 0 1rem rgba(220, 220, 220, 0.5)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "between",
                  padding: "1.25rem",
                  borderBottom: "1px solid rgba(156, 163, 175, 0.5)",
                  borderRadius: "t-lg",
                }}
              >
                <h3 style={{ fontSize: "1.875rem", fontWeight: "bold" }}>
                  Paradise Hemp Dispensary, FDA Disclaimer:
                </h3>
                <button
                  style={{
                    padding: "0.25rem",
                    marginLeft: "auto",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "black",
                    opacity: "0.5",
                    float: "right",
                    fontSize: "1.875rem",
                    lineHeight: "none",
                    fontWeight: "bold",
                    outline: "none",
                    focus: "outline-none",
                  }}
                  onClick={() => props.displayModal(false)}
                >
                  <span
                    style={{
                      backgroundColor: "transparent",
                      color: "black",
                      opacity: "0.5",
                      height: "1.5rem",
                      width: "1.5rem",
                      fontSize: "1.25rem",
                      display: "block",
                      outline: "none",
                      focus: "outline-none",
                    }}
                  >
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div id="agreement" style={{ padding: "20px", color: "white" }}>
                The statements made regarding these products have not been
                evaluated by the Food and Drug Administration. The efficacy of
                these products has not been confirmed by FDA-approved research.
                These products are not intended to diagnose, treat, cure or
                prevent any disease. These products should not be used if you
                are pregnant or nursing. No statements on this website are
                offering medical advice. Please consult a healthcare
                professional before use of any product on this website. All
                products displayed for sale at Paradise Hemp Dispensary are
                sourced from industrial hemp plants which contain less than 0.3%
                THC, and are federally legal. Paradise Hemp Dispensary is not
                responsible for any legal charges that may come as a result of
                local or State laws. It is the buyer’s responsibility to
                determine if any transaction with Paradise Hemp Dispensary and
                its affiliates is in violation of local regulations or laws. By
                Selecting Agree and using Paradise Hemp Dispensary you agree to
                the Privacy Policy and all Terms & Conditions listed on this
                website.
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  padding: "1.5rem",
                  borderTop: "1px solid rgba(156, 163, 175, 0.5)",
                  borderRadius: "b-lg",
                }}
              >
                <h4 style={{ marginRight: "60px" }}>
                  By clicking agree, you confirm you are 21+
                </h4>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "rgb(100, 100, 100)",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    padding: "0.75rem 1.5rem",
                    fontSize: "0.875rem",
                    outline: "none",
                    focus: "outline-none",
                    marginRight: "0.25rem",
                    marginBottom: "0.25rem",
                    transition: "all 0.15s ease-linear",
                  }}
                  type="button"
                  onClick={() => props.displayModal(false)}
                >
                  Close
                </button>
                <button
                  style={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    padding: "0.75rem 1.5rem",
                    fontSize: "0.875rem",
                    outline: "none",
                    focus: "outline-none",
                    marginRight: "0.25rem",
                    marginBottom: "0.25rem",
                    transition: "all 0.15s ease-linear",
                  }}
                  type="button"
                  onClick={handleAgree}
                  className="bg-green-500 bg-opacity-80 text-white h-15"
                >
                  Agree
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
