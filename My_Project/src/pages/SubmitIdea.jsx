import { Link } from "react-router-dom";

function SubmitIdea() {
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
          width: "900px",
          background: "#E7DCCB",
          padding: "40px",
          borderRadius: "30px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            fontFamily: "Cormorant Garamond",
            color: "#10261C",
            fontSize: "52px",
            marginBottom: "20px",
          }}
        >
          Share Your Idea
        </h1>

        <p
          style={{
            color: "#3A332C",
            marginBottom: "25px",
            lineHeight: "1.8",
          }}
        >
          Every remarkable venture starts as an unfinished thought.
          Describe your idea in the simplest way possible.
        </p>

        <textarea
          rows="10"
          placeholder="Describe your idea..."
          style={{
            width: "100%",
            padding: "20px",
            borderRadius: "20px",
            border: "none",
            resize: "none",
            fontSize: "16px",
            background: "#F5EEE3",
          }}
        />

        <div style={{ marginTop: "30px" }}>
          <Link to="/analysis">
            <button
              style={{
                background: "#10261C",
                color: "white",
                padding: "15px 30px",
                borderRadius: "40px",
                fontSize: "16px",
              }}
            >
              Analyze Idea
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SubmitIdea;