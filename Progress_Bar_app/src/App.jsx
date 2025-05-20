import React, { useEffect, useState } from "react";
import CircularProgressBar from "./CircularProgressBar";

const App = () => {
  const targetValues = [65, 98.5, 50];
  const [progresses, setProgresses] = useState([0, 0, 0]);

  useEffect(() => {
    const intervals = targetValues.map((target, i) => {
      return setInterval(() => {
        setProgresses(prev => {
          const updated = [...prev];
          if (updated[i] < target) {
            updated[i] = parseFloat((updated[i] + 0.5).toFixed(1));
          } else {
            clearInterval(intervals[i]);
          }
          return updated;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div style={{
      background: "#eaf3fb",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "130px",
      padding: "20px",
    }}>
      {progresses.map((value, index) => (
        <CircularProgressBar key={index} percentage={value} />
      ))}
    </div>
  );
};

export default App;
