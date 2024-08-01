"use client";
import AddCourierForm from "@/components/Admin/AdminCouriers/AddCourierForm";
import { SuggestionOpitonType } from "@/components/MultipleItemSelector";
import React, { useState } from "react";

const AddCourier = () => {
  const [includedCountries, setIncludedCountries] = useState<
    SuggestionOpitonType[]
  >([]);
  const [includedCities, setIncludedCities] = useState<SuggestionOpitonType[]>(
    []
  );
  const [excludedCities, setExcludedCities] = useState<SuggestionOpitonType[]>(
    []
  );
  const [value, setValue] = useState("");
  const countrySuggestions = [
    {
      id: 1,
      title: "Bangladesh",
    },
    {
      id: 2,

      title: "India",
    },
    {
      id: 3,

      title: "Japan",
    },
    {
      id: 4,

      title: "South Africa",
    },
    {
      id: 5,

      title: "Argentina",
    },
  ];

  const citySuggestions = [
    {
      id: 1,
      title: "Dhaka",
    },
    {
      id: 2,

      title: "Chittagong",
    },
    {
      id: 3,

      title: "Khulna",
    },
    {
      id: 4,

      title: "Rajshahi",
    },
    {
      id: 5,

      title: "Rangpur",
    },
  ];

  const countries = ["Africa", "Armenia", "Canada", "United States"];

  return (
    <AddCourierForm
      includedCountries={includedCountries}
      includedCities={includedCities}
      excludedCities={excludedCities}
      setIncludedCities={setIncludedCities}
      setIncludedCountries={setIncludedCountries}
      setExcludedCities={setExcludedCities}
      countrySuggestions={countrySuggestions}
      citySuggestions={citySuggestions}
    />
  );
};

export default AddCourier;
