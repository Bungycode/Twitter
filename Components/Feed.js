import { LightningBoltIcon } from "@heroicons/react/outline";

import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "Andrew Bungcayao",
      username: "thedev_andrew",
      userimg: "/profile-picture.jpg",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
      text: "Love the beach!",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Andrew Bungcayao",
      username: "thedev_andrew",
      userimg: "/profile-picture.jpg",
      img: "https://images.unsplash.com/photo-1579710758949-3ab36db30f1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      text: "Let's all drink boxed water!",
      timestamp: "2 days ago",
    },
  ];

  console.log("Feed Componont line 28. posts = " + typeof posts);
  console.log("Feed Component line 29. posts = ", posts);

  return (
    <div className="xl:ml-[370px] border-2 border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <LightningBoltIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => {
        console.log("Feed Component line 41. post = ", post);
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}
