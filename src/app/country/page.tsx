

import Link from 'next/link';

const CountryPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videos/vid2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen bg-opacity-50">
        <div className="bg-transparent bg-opacity-50 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-white">Select a Country</h1>
          <ul className="space-y-4 text-white font-extrabold">
            <li>
              <Link href="/country/pakistan" >
                Pakistan
              </Link>
            </li>
            <li>
              <Link href="/country/iran" >
                Iran
              </Link>
            </li>
            <li>
              <Link href="/country/lebanon">
                Lebanon
              </Link>
            </li>
            <li>
              <Link href="/country/palestine">
                Palestine
              </Link>
            </li>
            <li>
              <Link href="/country/yemen" >
                Yemen
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
