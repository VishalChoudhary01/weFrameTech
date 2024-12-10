"use-client"
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

const Breadcrumb = ({ categoryToDisplay }) => {
  return (
    <div className="pt-2 text-sm text-gray-600 w-full px-4">
      <span>
        <Link className="hover:underline text-gray-900 flex items-center gap-x-2 font-semibold" href="/">
          <span>Home</span>
          <GoDotFill className="text-slate-300" />
          {categoryToDisplay && (
            <span className="text-gray-500 capitalize">{categoryToDisplay}</span>
          )}
        </Link>
      </span>
    </div>
  );
};

export default Breadcrumb;
