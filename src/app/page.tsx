"use client";
import React, { useEffect, useState } from "react";
import GifResultList from "./GifResultList";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [gifsResult, setGifsResult] = useState([]);

  const fetchGif = async () => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa&q=${searchValue}`
    );
    const gifs = await response.json();
    setGifsResult(gifs.data);
  };

  // Here we can add some validation
  // const searchGifValidations = () => {}
  const handleOnHitEnter = () => {
    //  searchGifValidations()
    fetchGif();
  };

  const handleOnChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center  align-center p-24">
      <h1 className="text-xl">Search for you GIF</h1>
      <div className="flex mt-8">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            onChange={(event) => handleOnChangeSearchValue(event)}
            onKeyDown={(event) => event.key === "Enter" && handleOnHitEnter()}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <GifResultList gifList={gifsResult} />
    </main>
  );
}
