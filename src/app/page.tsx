
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/videos/world2.jpg')" }} // Change the path to your background image
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Countries</h1>
        <ul className="space-y-4 text-white text-center">
          <li>
            <Link href="/country/pakistan" className="text-lg font-bold transition-colors duration-300 hover:text-blue-400">
              Pakistan
            </Link>
          </li>
          <li>
            <Link href="/country/iran" className="text-lg font-bold transition-colors duration-300 hover:text-blue-400">
              Iran
            </Link>
          </li>
          <li>
            <Link href="/country/lebanon" className="text-lg font-bold transition-colors duration-300 hover:text-blue-400">
              Lebanon
            </Link>
          </li>
          <li>
            <Link href="/country/palestine" className="text-lg font-bold transition-colors duration-300 hover:text-blue-400">
              Palestine
            </Link>
          </li>
          <li>
            <Link href="/country/yemen" className="text-lg font-bold transition-colors duration-300 hover:text-blue-400">
              Yemen
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
