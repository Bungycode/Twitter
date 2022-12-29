import { LightningBoltIcon } from "@heroicons/react/outline";

export default function Feed() {
  return (
    <div className="xl:ml-[370px] border-2 border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <LightningBoltIcon class="h-5"/>
        </div>
      </div>
    </div>
  );
}
