import NavBanner from "./NavBanner";

const Banner = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        boxSizing: "border-box",
        filter:"brightness(80%)"
      }}
      className="banner"
    >
      <NavBanner />

      <div>
        <div
          style={{
            width: "100%",
            padding: "75px 0",
            maxWidth: "950px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "white",
              margin: "auto",
              maxWidth: "640px",
              fontSize: "3.125rem",
              filter:"brightness(100%) !important"
            }}
          >
            Unlimited movies, TV <br /> shows, and more.
          </h1>

          <h2 style={{ color: "white", fontSize: "1.625rem" }}>
            Watch anywhere. Cancel anytime.
          </h2>

          <form
            style={{
              padding: "13.6px 0px 0px opx",
            }}
          >
            <h3
              style={{
                maxWidth: "none",
                paddingBottom: "20px",
                margin: "0px",
                fontSize: "1.2rem",
                color: "#fff",
              }}
            >
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                style={{
                  padding: "10px",
                  border: "none",
                  minWidth: "450px",
                  height: "60px",
                }}
                placeholder="Name"
                type="text"
              />
              <button
                style={{
                  background: "#f40612",
                  color: "white",
                  border: "none",
                  height: "60px",
                  cursor: "pointer",
                }}
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
