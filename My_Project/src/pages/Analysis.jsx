import { Link } from "react-router-dom";

function Analysis() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#DCCDB8",
        padding: "50px 30px",
      }}
    >
      {/* Header */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h1
          style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "68px",
            color: "#10261C",
          }}
        >
          Idea Assessment
        </h1>

        <p
          style={{
            color: "#3A332C",
            fontSize: "18px",
            marginTop: "10px",
          }}
        >
          Transforming raw ideas into startup-ready ventures through
          structured evaluation and guided improvement.
        </p>
      </div>

      {/* Overall Score */}

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "#E7DCCB",
          padding: "35px",
          borderRadius: "30px",
          boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h3
          style={{
            color: "#10261C",
            marginBottom: "15px",
            letterSpacing: "2px",
          }}
        >
          OVERALL STARTUP SCORE
        </h3>

        <h1
          style={{
            fontSize: "80px",
            color: "#8B6B3F",
            fontFamily: "Cormorant Garamond",
          }}
        >
          67/100
        </h1>

        <p
          style={{
            color: "#3A332C",
            marginTop: "10px",
          }}
        >
          Your idea demonstrates strong potential and is currently in
          the validation stage of startup development.
        </p>
      </div>

      {/* Metrics */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
          marginBottom: "50px",
        }}
      >
        {[
          ["Innovation", "72/100"],
          ["Market Potential", "68/100"],
          ["Revenue Potential", "45/100"],
          ["Problem Solving", "80/100"],
          ["Audience Clarity", "60/100"],
          ["Startup Readiness", "58/100"],
        ].map(([title, score]) => (
          <div
            key={title}
            style={{
              width: "280px",
              background: "#E7DCCB",
              padding: "25px",
              borderRadius: "25px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
            }}
          >
            <h3
              style={{
                color: "#10261C",
                marginBottom: "15px",
              }}
            >
              {title}
            </h3>

            <h2
              style={{
                color: "#8B6B3F",
                fontSize: "34px",
              }}
            >
              {score}
            </h2>
          </div>
        ))}
      </div>

      {/* Strengths & Weaknesses */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            background: "#E7DCCB",
            padding: "30px",
            borderRadius: "25px",
            width: "500px",
          }}
        >
          <h2
            style={{
              color: "#10261C",
              marginBottom: "20px",
              fontFamily: "Cormorant Garamond",
            }}
          >
            Key Strengths
          </h2>

          <p>• Addresses a meaningful real-world problem</p>
          <p>• Strong relevance among students</p>
          <p>• Clear opportunity for long-term growth</p>
          <p>• High potential for innovation and impact</p>
        </div>

        <div
          style={{
            background: "#E7DCCB",
            padding: "30px",
            borderRadius: "25px",
            width: "500px",
          }}
        >
          <h2
            style={{
              color: "#10261C",
              marginBottom: "20px",
              fontFamily: "Cormorant Garamond",
            }}
          >
            Areas to Improve
          </h2>

          <p>• Revenue model needs more clarity</p>
          <p>• User validation is still limited</p>
          <p>• Market positioning can be stronger</p>
          <p>• Execution roadmap needs refinement</p>
        </div>
      </div>

      {/* Mentor Suggestions */}

      <div
        style={{
          maxWidth: "1050px",
          margin: "auto",
          background: "#E7DCCB",
          padding: "35px",
          borderRadius: "30px",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            color: "#10261C",
            marginBottom: "20px",
            fontFamily: "Cormorant Garamond",
            fontSize: "40px",
          }}
        >
          Mentor Recommendations
        </h2>

        <p style={{ marginBottom: "12px" }}>
          1. Conduct interviews with at least 50 potential users.
        </p>

        <p style={{ marginBottom: "12px" }}>
          2. Define a clear monetization strategy and pricing model.
        </p>

        <p style={{ marginBottom: "12px" }}>
          3. Develop a simple MVP to validate assumptions.
        </p>

        <p style={{ marginBottom: "12px" }}>
          4. Gather feedback and improve user experience.
        </p>

        <p>
          5. Build a structured launch roadmap before scaling.
        </p>
      </div>

      {/* Growth Forecast */}

      <div
        style={{
          maxWidth: "1050px",
          margin: "auto",
          background: "#E7DCCB",
          padding: "35px",
          borderRadius: "30px",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            color: "#10261C",
            fontFamily: "Cormorant Garamond",
            marginBottom: "25px",
          }}
        >
          Growth Forecast
        </h2>

        <h3
          style={{
            color: "#8B6B3F",
            marginBottom: "20px",
          }}
        >
          Current Stage: 🌱 Seed Stage
        </h3>

        <p style={{ marginBottom: "15px" }}>
          The idea has been identified and evaluated.
        </p>

        <h3
          style={{
            color: "#8B6B3F",
            marginBottom: "20px",
          }}
        >
          Next Stage: 🌿 Validation Stage
        </h3>

        <p>
          Focus on testing assumptions and validating user demand.
        </p>
      </div>

      {/* Button */}

      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <Link to="/tree">
          <button
            style={{
              background: "#10261C",
              color: "white",
              padding: "16px 34px",
              borderRadius: "40px",
              fontSize: "16px",
            }}
          >
            View Growth Journey
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Analysis;