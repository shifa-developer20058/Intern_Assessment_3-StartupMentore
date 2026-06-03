function Tree() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#DCCDB8",
        padding: "50px 30px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h1
          style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "68px",
            color: "#10261C",
          }}
        >
          Growth Journey
        </h1>

        <p
          style={{
            color: "#3A332C",
            fontSize: "18px",
          }}
        >
          A guided roadmap from a simple idea to a startup-ready venture.
        </p>
      </div>

      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        {[
          ["🌱", "Seed Stage", "The idea is submitted and understood."],
          ["🌿", "Discovery Stage", "The core problem is identified."],
          ["🍃", "Validation Stage", "Potential users are researched."],
          ["🌳", "Structuring Stage", "Business model and strategy are defined."],
          ["🌲", "MVP Stage", "A simple prototype is developed."],
          ["🌴", "Startup Ready", "Prepared for launch and growth."],
        ].map(([icon, title, text]) => (
          <div
            key={title}
            style={{
              background: "#E7DCCB",
              padding: "25px",
              borderRadius: "25px",
              marginBottom: "25px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
            }}
          >
            <h2
              style={{
                color: "#10261C",
                marginBottom: "10px",
              }}
            >
              {icon} {title}
            </h2>

            <p
              style={{
                color: "#3A332C",
              }}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tree;