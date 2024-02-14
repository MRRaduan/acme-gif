"use client";
import React from "react";

type GifResultListProps = {
  gifList: [];
};

const GifResultList = ({ gifList }: GifResultListProps) => {
  return (
    <ul className="grid grid-cols-2 gap-4 mt-16 w-full">
      {gifList.map((gif: any) => {
        const imgSrc = gif.images.original.url;
        return (
          <li className="w-full flex items-center justify-center" key={gif.id}>
            <div className="avatar block">
              <div className="rounded">
                <img src={imgSrc} alt={gif.title} height={280} width={280} />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default GifResultList;
