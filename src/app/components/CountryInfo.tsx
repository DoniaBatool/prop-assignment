
// components/CountryInfo.tsx
import React from 'react';

interface CountryInfoProps {
  name: string;
  capital: string;
  population: string;
}

const CountryInfo = ({ name, capital, population }:CountryInfoProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
    </div>
  );
};

export default CountryInfo;
