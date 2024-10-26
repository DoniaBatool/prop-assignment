import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black py-6 border-t border-gray-800 shadow-sm">
      <div className="max-w-screen-xl mx-auto text-center">
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8">
          <li>
            <Link
              href={"/country/pakistan"}
              className="text-white text-lg font-bold hover:text-blue-400 transition duration-300"
            >
              Pakistan
            </Link>
          </li>
          <li className="hidden md:block">
            <span className="text-gray-500">|</span>
          </li>
          <li>
            <Link
              href={"/country/palestine"}
              className="text-white text-lg font-bold hover:text-blue-400 transition duration-300"
            >
              Palestine
            </Link>
          </li>
          <li className="hidden md:block">
            <span className="text-gray-500">|</span>
          </li>
          <li>
            <Link
              href={"/country/iran"}
              className="text-white text-lg font-bold hover:text-blue-400 transition duration-300"
            >
              Iran
            </Link>
          </li>
          <li className="hidden md:block">
            <span className="text-gray-500">|</span>
          </li>
          <li>
            <Link
              href={"/country/lebanon"}
              className="text-white text-lg font-bold hover:text-blue-400 transition duration-300"
            >
              Lebanon
            </Link>
          </li>
          <li className="hidden md:block">
            <span className="text-gray-500">|</span>
          </li>
          <li>
            <Link
              href={"/country/yemen"}
              className="text-white text-lg font-bold hover:text-blue-400 transition duration-300"
            >
              Yemen
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
