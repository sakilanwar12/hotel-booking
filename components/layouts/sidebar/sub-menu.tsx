import Link from "next/link";

const SubMenu = ({ childItem }: any) => {

  return (
    <Link href={childItem.href} className="block text-sm pl-6">
      {childItem.title}
    </Link>
  );
};

export default SubMenu;