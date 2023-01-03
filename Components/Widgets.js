import { SearchIcon } from "@heroicons/react/outline";

import News from "./News";

import { useState } from "react";
import RandomUser from "./RandomUser";

export default function Widgets({ articles, randomUsersResults }) {
  const [articleNum, setArticleNum] = useState(3);
  const [randomUserNumber, setRandomUserNumber] = useState(3);

  const showUserHandler = () => {
    setRandomUserNumber(randomUserNumber + 3);
  };

  // This is part of the second way of creating the functionality of the onClick
  // const showArticleHandler = () => {
  //   setArticleNum(articleNum + 3)
  // }

  console.log("Widgets Component line 4. articles = " + articles);
  console.log("Widgets Component line 4. articles.title = " + articles);
  const source = articles[0].source.name;
  console.log(articles);
  console.log(source);
  console.log(randomUsersResults);
  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
        <div className="flex items-center p-3 rounded-full bg-red-300 relative">
          <SearchIcon className="h-5 z-50 text-gray-500" />
          <input
            className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100"
            type="text"
            placeholder="Search Twitter"
          ></input>
        </div>
      </div>
      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">What&apos;s happening</h4>
        {articles.slice(0, articleNum).map((article, idx) => {
          return <News key={`data-${idx}`} article={article} />;
        })}

        <button
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
          onClick={() => setArticleNum(articleNum + 3)}
        >
          Show more
        </button>

        {/* This is another way to create the onClick functionality. Define a function above and point to it in the onClick value.*/}
        {/* <button className="text-blue-300 pl-4 pb-3 hover:text-blue-400" onClick={showArticleHandler}>Show more</button> */}
      </div>
      <div className="sticky top-16 text-gray-700 space-y-3 bg-gray-100 pt-2 round-xl w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
        {/* Tried to use the randomUsersResults which is an array of objects itself in the jsx but the console did not like this. It gave the error message - "Unhandled Runtime Error", Error: Objects are not valid as react child (found: object with keys {name, login, picture}). If you meant to render a collection of children, use an array instead. */}
        {randomUsersResults.slice(0, randomUserNumber).map((randomUser, idx) => {
          return (
            <RandomUser
              key={`data-${idx}`}
              randomUser={randomUser}
            ></RandomUser>
          );
        })}
        <button
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
          onClick={showUserHandler}
        >
          Show More
        </button>
      </div>
    </div>
  );
}
