import { useParams } from "@solidjs/router";
import "../App.css";
import { createResource } from "solid-js";
import { Show, Switch, Match } from "solid-js";

const Yolo = () => {
  const params = useParams();

  const getUser = async (id: string) => {
    const resp = await fetch(`/api/users/${id}`);
    return resp.json();
  };
  const [user] = createResource(() => getUser(params.id));
  return (
    <div class="content">
      <Show when={user.loading}>
        <p>
          <span class="loading loading-ring loading-xs"></span>
          <span class="loading loading-ring loading-sm"></span>
          <span class="loading loading-ring loading-md"></span>
          <span class="loading loading-ring loading-lg"></span>
          <span class="loading loading-ring loading-xl"></span>
        </p>
      </Show>
      <Switch>
        <Match when={user.error}>
          <span>Error: {user.error}</span>
        </Match>

        <Match when={user()}>
          <div>{JSON.stringify(user()[0].ContactName)}</div>
        </Match>
      </Switch>
    </div>
  );
};

export default Yolo;
