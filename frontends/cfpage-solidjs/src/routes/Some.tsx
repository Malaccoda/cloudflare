import "../App.css";

const Some = () => {
  return (
    <div class="content">
      <div>
        <iframe
          height={window.innerHeight}
          width={window.innerWidth - 20}
          src="https://rsbuild.dev"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default Some;
