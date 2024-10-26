import Link from "next/link";

const Navbar = () => {
  return (
    <main>
      <div className="bg-black py-4 px-6 shadow-lg text-white font-semibold">
        <nav className="flex items-center justify-center space-x-8">
          <Link
            href="/"
            className="text-lg md:text-xl lg:text-2xl text-cyan-400 hover:text-purple-400 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Home
          </Link>

          <span className="text-gray-500">|</span>

          <Link
            href="/country"
            className="text-lg md:text-xl lg:text-2xl text-cyan-400 hover:text-purple-400 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Country
          </Link>
        </nav>
      </div>
    </main>
  );
};

export default Navbar;
