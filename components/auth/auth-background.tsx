
import Image from "next/image";

const AuthBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className="flex justify-center items-center min-h-screen relative before:absolute before:top-0 before:start-0 before:w-full before:h-full before:bg-primary/10">
      <Image
        src="/images/all/img-1.jpg"
        alt=""
        width={1024}
        height={768}
        className="absolute top-0 start-0 w-full h-full object-cover -z-10"
      />
      {children}
    </main>
  );
}
export default AuthBackground;