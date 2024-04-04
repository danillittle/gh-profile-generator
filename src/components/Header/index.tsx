import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} className="h-8 w-8" alt="logo" />
          <h1 className="text-xl">Github Profile README Generator</h1>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <a
            className="github-button"
            href="https://github.com/danillittle/gh-profile-generator"
            data-color-scheme="no-preference: light; light: light; dark: dark;"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star danillittle/gh-profile-generator on GitHub"
          >
            Star
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
