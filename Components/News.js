import Link from "next/link";

export default function News({ article }) {
  const { title, source, urlToImage, url, description } = article;
  const organization = source.name;
  return (
    <Link href={url} target="_blank">
      <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-200 transition duration-200">
        <div className="space-y-0.5" >
          <h6 className="text-sm font-bold">{title}</h6>
          <p className="text-xs font-medium text-gray-500" >{organization}</p>
        </div>
        <img
          className=" rounded-xl"
          width="70"
          src={urlToImage}
          alt={description}
        />
      </div>
    </Link>
  );
}
