"use-client"
import Link from "next/link";
import categories from "../contexts"; 

const CategoryNavigation = ({ currentPath }) => {
  return (
    <div className="w-full mt-8 border-b border-gray-200">
      <div className="overflow-x-auto overflow-y-hidden scrollbar-hide px-2 pb-3">
        <ul className="flex text-center space-x-6 whitespace-nowrap">
          {categories.length !== 0 &&
            categories.map((category) => {
              const formattedCategory = `/${category
                .toLowerCase()
                .replace(/\s+/g, "-")}`;
              const isActive = currentPath === formattedCategory;

              return (
                <li key={category}>
                  <Link href={formattedCategory}>
                    <span
                      className={`px-4 pb-2 lg:text-md md:text-[0.9rem] text-[0.7rem] font-medium rounded-md cursor-pointer transition-colors ${
                        isActive
                          ? "border-b-2 border-[#0093D0] text-[#0093D0]"
                          : "text-gray-600 hover:text-blue-500"
                      }`}
                    >
                      {category}
                    </span>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryNavigation;
