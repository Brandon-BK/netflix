const Kids = () => {
  return (
    <div
      style={{
        padding: "70px 45px",
        background: "black",
        borderTop: "5px gray solid",
        color: "white",
        width: "100%",
      }}
    >
      <div
        style={{
          margin: "0px 79.5px",
          display: "flex",
          height: "340px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <img
              style={{
                width: "530px",
                height: "390px",
                display: "block",
                position: "relative",
                zIndex: "4",
              }}
              src="https://occ-0-32-34.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"
              alt="TV"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <h1 style={{ color: "white", font: "50px" }}>Enjoy on your TV.</h1>
            <h2 style={{ color: "white", font: "50px" }}>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kids;
