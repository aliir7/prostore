import Logo from "./Logo";
import NavItems from "./NavItems";

function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Logo />
        </div>
        <NavItems />
      </div>
    </header>
  );
}

export default Header;
