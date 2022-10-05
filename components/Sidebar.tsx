import { UserCircleIcon } from "@heroicons/react/outline";

const sidebar = [
  { name: "Home", href: "/" },
  { name: "@High Tech", href: "/hightech" },
  { name: "Entertainment", href: "/entertainment" },
  { name: "World News", href: "/news" },
  { name: "Sports", href: "/sports" },
  { name: "Creative Arts", href: "/arts" },
];

function Sidebar(props) {
  return (
    <div
      id="Sidebar"
      className={`absolute top-0 left-0 md:fixed z-50 w-full md:inset-0  md:h-full  ease-in-out duration-300
      ${
        props.showSidebar
          ? "md:translate-x-0 translate-y-0"
          : "md:translate-x-[-100%] translate-y-[-100%]"
      }`}
    >
      {" "}
      <div className="absolute z-40 min-h-screen min-w-screen bg-black opacity-20"></div>
      <div className="relative pl-4  w-full max-w-2xl h-full md:h-viewscreen font-quicksand bg-default text-textpink drop-shadow-lg ">
        <div className="flex justify-between place-content-center items-start p-4  text-3xl">
          <div className="pt-3 font-extrabold">Categories</div>
          <button onClick={() => props.closeBar(false)}>
            <svg
              width="75"
              height="75"
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.966 29.5458C35.9186 31.4984 39.0844 31.4984 41.037 29.5458L50.7609 19.8219C51.9811 18.6017 53.9594 18.6017 55.1796 19.8219C56.3998 21.0421 56.3998 23.0205 55.1796 24.2407L45.4558 33.9645C43.5032 35.9171 43.5032 39.083 45.4558 41.0356L55.1796 50.7594C56.3998 51.9796 56.3998 53.958 55.1796 55.1782C53.9594 56.3984 51.9811 56.3984 50.7609 55.1782L41.0371 45.4543C39.0844 43.5017 35.9186 43.5017 33.966 45.4543L24.2421 55.1782C23.0219 56.3984 21.0436 56.3984 19.8234 55.1782C18.6032 53.958 18.6032 51.9796 19.8234 50.7594L29.5472 41.0356C31.4998 39.083 31.4999 35.9171 29.5472 33.9645L19.8234 24.2407C18.6032 23.0205 18.6032 21.0421 19.8234 19.8219C21.0436 18.6017 23.0219 18.6017 24.2421 19.8219L33.966 29.5458Z"
                fill="#97266D"
              />
            </svg>
          </button>
        </div>

        {sidebar.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex rounded-l-lg justify-between place-content-center items-start p-4 font-headerbold text-2xl hover:bg-defaultDark hover:text-default  duration-150"
          >
            {item.name}
          </a>
        ))}

        <div className="border border-b-4 border-defaultDark mr-4 my-4 rounded-full bg-defaultDark"></div>
        <div className="flex rounded-l-lg justify-between place-content-center items-start p-4  text-2xl hover:bg-defaultDark hover:text-default  duration-150">
          About Us
        </div>
        <div className="flex rounded-l-lg justify-between place-content-center items-start p-4  text-2xl hover:bg-defaultDark hover:text-default  duration-150">
          Submit Here
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
