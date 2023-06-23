import { useState } from "react";
import Card from "./Card";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
        imageSrc:
      "https://picsum.photos/200/300/?blur",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
        imageSrc:
      "https://picsum.photos/200/300/?blur",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
        imageSrc:
      "https://picsum.photos/200/300/?blur",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
        imageSrc:
      "https://picsum.photos/200/300/?blur",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Hand Painted Blue Bottle",
    href: "#",
    price: "$45",
        imageSrc:
      "https://picsum.photos/200/300/?blur",
    imageAlt:
      "Ceramic bottle with blue glaze dripping down one side and cork stopper.",
  },
  {
    id: 6,
    name: "Machined Pen",
    href: "#",
    price: "$35",
        imageSrc:
      "https://picsum.photos/200/300/?blur",
    imageAlt: "Hand holding black machined steel pen.",
  },
  {
    id: 7,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
        imageSrc:
      "https://picsum.photos/200/300/?blur",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 8,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
        imageSrc:
      "https://picsum.photos/200/300/?blur",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 9,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
        imageSrc:
      "https://picsum.photos/200/300/?blur",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 10,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
        imageSrc:
      "https://picsum.photos/200/300/?blur",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 11,
    name: "Hand Painted Blue Bottle",
    href: "#",
    price: "$45",
        imageSrc:
      "https://picsum.photos/200/300/?blur",
    imageAlt:
      "Ceramic bottle with blue glaze dripping down one side and cork stopper.",
  },
  {
    id: 12,
    name: "Machined Pen",
    href: "#",
    price: "$35",
        imageSrc:
      "https://picsum.photos/200/300/?blur",
    imageAlt: "Hand holding black machined steel pen.",
  },
];

const Cards = () => {
 
  const [selectedProduct, setSelectedProduct] = useState(0);
  return (
    <div id="Products" className="w-11/12 py-4" >
      <h1 className="text-4xl text-right text-slate-50 font-bold py-10">
        المنتجات
      </h1>

      <div className=" grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xs:grid-cols-2 xl:gap-x-4">
        {products.map((product) => (
          <Card key={product.id} product={product} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
