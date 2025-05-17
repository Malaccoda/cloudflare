import "../App.css";
import { useParams } from "@solidjs/router";
import { Show } from "solid-js";

const HTTPError = () => {
  const params = useParams();
  return (
    <div class="content">
      <Show when={params.NotFound} keyed>
        <div>{params.NotFound}</div>
      </Show>
    </div>
  );
};

export default HTTPError;
