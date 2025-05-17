import { Show, Match, Switch, createResource } from "solid-js";

const srxres = async () => {
  const resp = await fetch("/api/searx").then((resp) => resp.json());
  return resp;
};

const SearxResults = () => {
  const [srx] = createResource(srxres);

  return (
    <>
      <div class="content" id="contentId">
        <div>
          <Show when={srx.loading}>
            <p>Loading...</p>
          </Show>
          <Switch>
            <Match when={srx.error}>
              <span>Error: {srx.error}</span>
            </Match>

            <Match when={srx()}>
              <div>{JSON.stringify(srx().results[4])}</div>
            </Match>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default SearxResults;
