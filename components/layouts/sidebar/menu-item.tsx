import Link from "next/link";

const MenuItem = ({ menu }: any) => {
  const { title, href } = menu
  return (
    <Link href={href} className="block text-sm pl-6">
      {title}
    </Link>
  );
};

export default MenuItem;