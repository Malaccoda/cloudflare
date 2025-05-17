import { A } from "@solidjs/router";

const NavBar = () => {
  return (
    <div class="navbar bg-base-100 shadow-sm">
      <div class="flex-1">
        <A
          class="avatar btn btn-ghost btn-circle"
          role="button"
          // onClick={alert('ss')}
          href="/"
        >
          <div class="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="/favicon-512x512.png"
            />
          </div>
        </A>
        <A
          class="btn btn-ghost text-xl"
          href="/yolo"
          activeClass="text-blue-500"
          inactiveClass="text-blue-900"
        >
          yolo
        </A>
        <A
          class="btn btn-ghost text-xl"
          href="/searx"
          activeClass="text-blue-500"
          inactiveClass="text-blue-900"
        >
          SEARX
        </A>
        <A
          class="btn btn-ghost text-xl"
          href="/youtube"
          activeClass="text-blue-500"
          inactiveClass="text-blue-900"
        >
          YOUTUBE
        </A>
      </div>
      <div class="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          class="input input-bordered w-24 md:w-auto"
        />
        <div class="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="/favicon-512x512.png"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
