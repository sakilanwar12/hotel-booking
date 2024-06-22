
import GrayScaleButton from "./gray-scale-button";
import Notification from "./notifications";
import SearchContent from "./search-content";
import ShortCut from "./short-cut";
import ThemeButton from "./theme-button";

const Header = () => {
  return (
    <header className="h-14  pl-[248px] pe-5  border-b bg-card">
      <div className="flex h-full items-center  gap-2">
        <div className="flex-none">
          <SearchContent />
        </div>
        <div className="flex-1 flex items-center  gap-4 justify-end">

          <Notification />
          <GrayScaleButton />
          <ThemeButton />
          <ShortCut />
        </div>
      </div>
    </header>
  );
};

export default Header;