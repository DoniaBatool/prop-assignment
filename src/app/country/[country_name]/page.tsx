"use client";
import { useEffect, useState } from "react";
import CountryInfo from "@/app/components/CountryInfo";

interface Country {
  name: string;
  capital: string;
  population: string;
}

const countriesData: Country[] = [
  { name: "Pakistan", capital: "Islamabad", population: "240 million" },
  { name: "Palestine", capital: "East Jerusalem", population: "5.5 million" },
  { name: "Iran", capital: "Tehran", population: "89 million" },
  { name: "Lebanon", capital: "Beirut", population: "5.5 million" },
  { name: "Yemen", capital: "Sana'a", population: "34 million" },
];

const CountryPage = ({ params }: { params: { country_name: string } }) => {
  const [country, setCountry] = useState<Country | undefined>(undefined);

  useEffect(() => {
    const countryData = countriesData.find(
      (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
    );
    setCountry(countryData);
  }, [params.country_name]);

  if (!country) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-3xl">Country not found!</h1>
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/vid2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Country Information */}
      <div className="bg-gray-800 bg-opacity-70 rounded-lg shadow-lg p-8 max-w-md w-full text-white text-center z-10">
        <CountryInfo
          name={country.name}
          capital={country.capital}
          population={country.population}
        />
      </div>
    </div>
  );
};

export default CountryPage;
