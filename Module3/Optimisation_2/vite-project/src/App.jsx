
import { useState, Suspense, lazy } from "react";

// Lazy load the heavy component
const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
  const [count, setCount] = useState(0);

  console.log("🔁 App rendered");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>

      <hr />

      {/* Lazy loading with Suspense */}
      <Suspense fallback={<p>Loading Heavy Component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
