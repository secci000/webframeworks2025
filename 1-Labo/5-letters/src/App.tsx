import React from "react";

const App = () => {
  // 1️⃣ Alle letters van A t/m Z maken
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i) // 65 = ASCII code voor 'A'
  );

  // 2️⃣ Voor elke letter de juiste afbeelding-URL genereren
  const alphabetImages = alphabet.map(
    (letter) =>
      `https://raw.githubusercontent.com/slimmii/alien-alphabet/master/${letter}.png`
  );

  // 3️⃣ De afbeeldingen tonen in de browser
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", padding: "20px" }}>
      {alphabetImages.map((imgUrl, index) => (
        <button
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "5px",
            background: "#fff",
          }}
        >
          <img src={imgUrl} alt={alphabet[index]} width="40" height="40" />
        </button>
      ))}
    </div>
  );
};

export default App;
