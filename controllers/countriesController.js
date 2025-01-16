import countriesData from "../data/countries.js";

export const getCountries = (req, res) => {
  const countries = countriesData.data.map((country) => country.country);
  res.json(countries);
};

export const getCitiesByCountry = (req, res) => {
  const { country } = req.params;
  const selectedCountry = countriesData.data.find(
    (item) => item.country.toLowerCase() === country.toLowerCase()
  );

  if (selectedCountry) {
    res.json(selectedCountry.cities);
  } else {
    res.status(404).json({ message: "Country not found" });
  }
};
