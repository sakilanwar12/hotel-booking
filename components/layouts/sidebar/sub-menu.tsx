import Link from "next/link";

const SubMenu = ({ childItem }: any) => {

  return (
    <Link href={childItem.href} className="block text-xs ps-7 py-[3px] font-medium hover:text-primary">
      {childItem.title}
    </Link>
  );
};

export default SubMenu;