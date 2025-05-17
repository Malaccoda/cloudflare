import "../App.css";
import { Match, Suspense, Switch } from "solid-js/web";
import { createResource, createSignal, For } from "solid-js";
const fetchSearx = async (term: string) => {
  const resp = await fetch(`/api/searx/${term}`).then((resp) => resp.json());
  return resp;
};

const Searx = () => {
  const [searxTerm, setSearxTerm] = createSignal<string>("");
  const [result] = createResource(searxTerm, fetchSearx);
  return (
    <div class="content">
      <form id="yolobutton" action={setSearxTerm("sex")}>
        <input
          type="text"
          placeholder="Search"
          class="input input-bordered w-96"
        />
        <button class="btn  btn-accent btn-outline">Searx</button>
      </form>
      <Suspense
        fallback={
          <div>
            <span class="loading loading-ring loading-xs"></span>
            <span class="loading loading-ring loading-sm"></span>
            <span class="loading loading-ring loading-md"></span>
            <span class="loading loading-ring loading-lg"></span>
            <span class="loading loading-ring loading-xl"></span>
          </div>
        }
      >
        <Switch>
          <Match when={result.error}>
            <span>Error: {result.error.message}</span>
          </Match>
          <Match when={result()}>
            <For each={result().results}>
              {(res) => (
                <li>
                  <div>{res.url}</div>
                  <h3>{res.title}</h3>
                  <div>{res.content}</div>
                  <div>{res.engine}</div>
                  <div>{res.publishedDate}</div>
                </li>
              )}
            </For>
          </Match>
        </Switch>
      </Suspense>
    </div>
  );
};

export default Searx;
