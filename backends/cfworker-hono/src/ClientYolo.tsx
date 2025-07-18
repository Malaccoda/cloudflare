import { useState } from "hono/jsx";
import { render } from "hono/jsx/dom";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export function ClientYolo() {
  return (
    <html>
      <body>
        <Counter />
      </body>
    </html>
  );
}
// render(<ClientYolo />, document.body);
