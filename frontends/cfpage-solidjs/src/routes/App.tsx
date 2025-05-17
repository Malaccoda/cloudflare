import "../App.css";
import { createResource, Switch, Match, Show } from "solid-js";
import { LeButton, LeCookieButton } from "../components/button";

const kanye = async () => {
  const resp = await fetch("https://api.kanye.rest");
  return resp.json();
};
const ip = async () => {
  const resp = await fetch("https://icanhazip.com ").then((resp) =>
    resp.text()
  );
  return resp;
};
const switchcolors = () => {
  document.body.style = `background: red`;
  // document.body.style = `background: green`;
};
const App = () => {
  const [user] = createResource(kanye);
  const [myip] = createResource(ip);

  return (
    <>
      <div class="content" id="contentId">
        <div>
          <Show when={user.loading}>
            <p>Loading...</p>
          </Show>
          <Switch>
            <Match when={user.error}>
              <span>Error: {user.error}</span>
            </Match>

            <Match when={user()}>
              <div>{JSON.stringify(user().quote)}</div>
            </Match>
          </Switch>
        </div>
        <div>
          <Show when={myip.loading}>
            <p>Loading...</p>
          </Show>
          <Switch>
            <Match when={myip.error}>
              <span>Error: {myip.error}</span>
            </Match>

            <Match when={myip()}>
              <div>{myip()}</div>
            </Match>
          </Switch>
        </div>
        <LeButton />

        <LeCookieButton />
        <div>
          <button
            class="btn btn-accent btn-outline"
            onClick={() => {
              switchcolors();
            }}
          >
            color
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
