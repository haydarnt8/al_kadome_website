
import { useState } from "react";

const categorys = [
  {
    id: 1,
    name: "اضاءة",
    href: "#",
    subCategory: [
      {
        id: 1,
        name: "اضاءة",
        href: "#",
      },
      {
        id: 2,
        name: "اضاءة",
        href: "#",
      },
      {
        id: 3,
        name: "اضاءة",
        href: "#",
      },
    ],
  },
  {
    id: 2,
    name: "اضاءة",
    href: "#",
    subCategory: [
      {
        id: 1,
        name: "اضاءة",
        href: "#",
      },
      {
        id: 2,
        name: "اضاءة",
        href: "#",
      },
      {
        id: 3,
        name: "اضاءة",
        href: "#",
      },
    ],
  },
  {
    id: 3,
    name: "اضاءة",
    href: "#",
    subCategory: [
      {
        id: 1,
        name: "اضاءة",
        href: "#",
      },
      {
        id: 2,
        name: "اضاءة",
        href: "#",
      },
      {
        id: 3,
        name: "اضاءة",
        href: "#",
      },
    ],
  },
  {
    id: 4,
    name: "اضاءة",
    href: "#",
    subCategory: [
      {
        id: 1,
        name: "اضاءة",
        href: "#",
      },
      {
        id: 2,
        name: "اضاءة",
        href: "#",
      },
      {
        id: 3,
        name: "اضاءة",
        href: "#",
      },
    ],
  },
  {
    id: 5,
    name: "اضاءة",
    href: "#",
    subCategory: [
      {
        id: 1,
        name: "اضاءة",
        href: "#",
      },
      {
        id: 2,
        name: "اضاءة",
        href: "#",
      },
      {
        id: 3,
        name: "اضاءة",
        href: "#",
      },
    ],
  },
  {
    id: 6,
    name: "اضاءة",
    href: "#",
    subCategory: [
      {
        id: 1,
        name: "اضاءة",
        href: "#",
      },
      {
        id: 2,
        name: "اضاءة",
        href: "#",
      },
      {
        id: 3,
        name: "اضاءة",
        href: "#",
      },
    ],
  },
  {
    id: 7,
    name: "اضاءة",
    href: "#",
    subCategory: [
      {
        id: 1,
        name: "اضاءة",
        href: "#",
      },
      {
        id: 2,
        name: "اضاءة",
        href: "#",
      },
      {
        id: 3,
        name: "اضاءة",
        href: "#",
      },
    ],
  },
  {
    id: 8,
    name: "اضاءة",
    href: "#",
    subCategory: [
      {
        id: 1,
        name: "اضاءة",
        href: "#",
      },
      {
        id: 2,
        name: "اضاءة",
        href: "#",
      },
      {
        id: 3,
        name: "اضاءة",
        href: "#",
      },
    ],
  },
];

function CategoryNav() {
  const [selectedCategory, setSelectedCategory] = useState(1);
  // const [selectedSubCategory, setSelectedSubCategory] = useState(1);
  return (
    <div className="w-11/12">
      <div className=" py-3">
        <h1 className="text-4xl text-right text-slate-50 font-bold py-5 ">
          الاقسام
        </h1>
      </div>

      <div className=" font-medium text-center text-[#9C3D54] border-b border-[#E2703A] ">
        <ul className="flex flex-row-reverse flex-wrap  gap-2 -mb-px text-xl">
          {/* <li>
            <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">
              Home
            </button>
          </li>
          <li>
            <button
              className="inline-block p-4 text-slate-50 border-b-2 border-slate-50 rounded-t-lg active "
              aria-current="page"
            >
              Calendar
            </button>
          </li>
          <li>
            <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">
              Results
            </button>
          </li>
          <li>
            <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">
              Live
            </button>
          </li> */}
          {categorys.map((category) => (
            <li key={category.id}>
              <button
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#E2703A] hover:border-gray-300 ${
                  selectedCategory === category.id
                    ? "text-slate-50 border-slate-50"
                    : "text-gray-600 border-transparent"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default CategoryNav;
