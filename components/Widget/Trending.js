import { DotsHorizontalIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Trending({ result }) {
  return (
    <div className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center justify-between">
      <div className="space-y-0.5">
        <p className="text-[#6e767d] text-xs font-medium">{result.heading}</p>
        <h6 className="font-bold max-w-[250px] text-sm">
          {result.description}
        </h6>
        <p className="text-[#6e767d] text-xs font-medium max-w-[250px]">
          Trending with{" "}

        </p>
      </div>

      {result.image ? (
        <Image
          src={result.image}
          width={70}
          height={70}
          objectFit="cover"
          className="rounded-2xl"
        />
      ) : (
        <div className="icon group">
          <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
        </div>
      )}
    </div>
  );
}

export default Trending;