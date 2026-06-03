import { Link } from "react-router-dom";

function Landing() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#DCCDB8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#A37C40",
            letterSpacing: "3px",
            marginBottom: "20px",
          }}
        >
          IDEA GROWTH PLATFORM
        </p>

        <h1
          style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "72px",
            color: "#10261C",
            marginBottom: "20px",
          }}
        >
          Startup Mentore
        </h1>

        <h2
          style={{
            fontFamily: "Cormorant Garamond",
            fontWeight: "600",
            fontSize: "34px",
            color: "#10261C",
            marginBottom: "25px",
          }}
        >
          Turning Raw Student Ideas into Remarkable Startup Ventures
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#4B4B4B",
            maxWidth: "750px",
            margin: "0 auto",
          }}
        >
          Every remarkable venture begins as an unfinished thought.
          Startup Mentor.io helps students refine ideas, discover
          opportunities, identify weaknesses, and follow a guided
          roadmap towards startup readiness.
        </p>

        <div style={{ marginTop: "40px" }}>
          <Link to="/submit">
            <button
              style={{
                background: "#10261C",
                color: "#fff",
                padding: "16px 34px",
                borderRadius: "40px",
                fontSize: "16px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
            >
              Begin Your Journey
    
    </button>
          </Link>
          <div
  style={{
    marginTop: "60px",
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    fontSize: "38px",
  }}
>
  🌱
  🌿
  🍃
  🌳
</div>
<div
  style={{
    marginTop: "80px",
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
  }}
>
  <div
    style={{
      background: "#E7DCCB",
      padding: "25px",
      borderRadius: "20px",
      width: "250px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
    }}
  >
    <h3 style={{ color: "#10261C", marginBottom: "10px" }}>Submit</h3>
    <p>Share your raw idea in its simplest form.</p>
  </div>

  <div
    style={{
      background: "#E7DCCB",
      padding: "25px",
      borderRadius: "20px",
      width: "250px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
    }}
  >
    <h3 style={{ color: "#10261C", marginBottom: "10px" }}>Refine</h3>
    <p>Receive structured feedback and improvement paths.</p>
  </div>

  <div
    style={{
      background: "#E7DCCB",
      padding: "25px",
      borderRadius: "20px",
      width: "250px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
    }}
  >
    <h3 style={{ color: "#10261C", marginBottom: "10px" }}>Grow</h3>
    <p>Follow a guided roadmap towards startup readiness.</p>
  </div>
</div>
        </div>

        
      </div>
    </div>
  );
}

export default Landing;