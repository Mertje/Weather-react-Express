import { GithubLogo } from "../assets/github";

export default function header() {
  return (
    <div className="topdnav overflow-hidden bg-neutral-50 border-b-2  sticky top-0 z-5">
      <a href="https://github.com/Mertje/weather-app" className="flex p-3">
        <GithubLogo />
        <span className="pl-1 flex flex-none items-center font-bold ">Github</span>
      </a>
    </div>
  );
}
