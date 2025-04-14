import Image from "next/image";
import loader from "../public/images/loader.gif";

function LoadingPage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Image src={loader} alt="loading..." width={150} height={150} />
    </div>
  );
}

export default LoadingPage;
