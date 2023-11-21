import React from "react";

export interface CardProps {
  title: string,
  desc: string,
  imgSource: string,
}

const Card: React.FC<CardProps> = ({title, desc, imgSource}) => {
  return (
    <div className="flex flex-col p-2 rounded-lg bg-slate-200 m-2">
      <img
        src={imgSource}
        alt={title}
        width={250}
        height={250}
        className="rounded-lg"
      />
      <div>
        <div className="text-lg font-bold">{title}</div>
        <div>{desc}</div>
      </div>
    </div>
  );
};

export default Card;
