import { createSignal } from "solid-js";

export function LeButton() {
  const [count, setCount] = createSignal(0);
  return (
    <div>
      <p>Count: {count()}</p>
      <button
        class="btn btn-accent btn-outline"
        draggable="true"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>
      <button
        class="btn btn-accent btn-outline"
        draggable="true"
        onClick={() => setCount((prev) => prev - 1)}
      >
        Decrement
      </button>
    </div>
  );
}

export function LeCookieButton() {
  return (
    <div>
      <button
        class="btn btn-accent btn-outline"
        onClick={async () => {
          const div = document.createElement("div");
          div.id = "yax";
          div.innerHTML = `<a href="${document.URL}">${document.URL}</>`;
          div.style = "background: black";
          const root = document.getElementById("contentId");
          root?.appendChild(div);
          if ((await document.hasStorageAccess()) === true) {
            div.innerHTML = "<p>TRUE</p>";
          }
          document.body.style = "background: red";
        }}
      >
        {" "}
        AppendChild{" "}
      </button>
    </div>
  );
}
