import Author from "./author";
import GrayScaleButton from "./gray-scale-button";
import Notification from "./notifications";
import ThemeButton from "./theme-button";

const Header = () => {
  return (
    <header className="h-14  pl-[248px] pe-4  border-b">
      <div className="flex h-full items-center  gap-2">
        <div className="flex-none">
          <div className='flex flex-col cursor-pointer gap-[3px]'>
            <span className='inline-block h-0.5 w-4 bg-primary'></span>
            <span className='inline-block h-0.5 w-2.5 bg-primary'></span>
            <span className='inline-block h-0.5 w-4 bg-primary'></span>
          </div>
        </div>
        <div className="flex-1 flex items-center  gap-4 justify-end">
          <Notification />
          <GrayScaleButton />
          <ThemeButton />
          <Author />
        </div>
      </div>
    </header>
  );
};

export default Header;