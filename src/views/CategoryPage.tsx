import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "@tanstack/react-router";

import axios from "axios";
import { LayoutOne } from "../components/Layouts/1";
import { LayoutTwo } from "../components/Layouts/2";
import { LayoutThree } from "../components/Layouts/3";
import { LayoutFour } from "../components/Layouts/4";

//2S
//1A
//3ZB
//1G
//3X
//2P
//6D
//2G
//2X
//3M
//3U
//2R
//2ZC
//4A
//3N
//3H
//4C
//2I
//2T
//4B
//1K
//3K
//1K
//1K
//1K
//1K
//1K♫

const Layouts = new Map();
Layouts.set("1", {
  className: "h-96 w-full my-6 flex justify-center",
  component: (componentDetails: any) => (
    <LayoutOne componentDetails={componentDetails} />
  ),
});
Layouts.set("2", {
  className: "flex justify-evenly items-center w-full my-6",
  component: (componentDetails: any) => (
    <LayoutTwo componentDetails={componentDetails} />
  ),
});
Layouts.set("3", {
  className: "flex justify-around items-center w-full my-6",
  component: (componentDetails: any) => (
    <LayoutThree componentDetails={componentDetails} />
  ),
});
Layouts.set("4", {
  className: "grid grid-cols-4 gap-4 justify-items-center my-6",
  component: (componentDetails: any) => (
    <LayoutFour componentDetails={componentDetails} />
  ),
});

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const categoryId = categorySlug?.split("=")[1];
  const categoryProducts = useQuery(
    ["categoryProducts", categoryId],
    async () => await axios.get(`/api/id/id/category/${categoryId}/products`)
  );

  console.table(
    categoryProducts.data?.data.productGroups[0].elements[0]
      .commercialComponents
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="h-36 p-2 text-center">
        <h1 className="font-inter text-3xl font-medium">COLLECTION</h1>
      </div>

      {categoryProducts?.data?.data.productGroups[0]?.elements.length > 1 ? (
        <div className="flex flex-col w-full">
          {categoryProducts?.data?.data.productGroups[0].elements.map(
            (product: any, index: any) => (
              <div
                key={index}
                className={
                  product.layout !== undefined &&
                  product.layout.length < 3 &&
                  Layouts.get(product?.layout?.split("")[0]).className
                }
              >
                {product?.commercialComponents.map(
                  (component: any) =>
                    product.layout !== undefined &&
                    product.layout.length < 3 &&
                    Layouts.get(product?.layout?.split("")[0]).component(
                      component
                    )
                )}
              </div>

              // <div className="m-4">
              //   <p>{product.layout}</p>
              //   {product?.commercialComponents.map((component: any) => (
              //     <img
              //       src={
              //         "https://static.zara.net/photos/" +
              //         component?.xmedia[0]?.path +
              //         "/" +
              //         component?.xmedia[0]?.name +
              //         ".jpg?ts=" +
              //         component?.xmedia[0]?.timestamp
              //       }
              //       className="w-40"
              //     />
              //   ))}
              // </div>)
            )
          )}
        </div>
      ) : (
        <div className="flex justify-center flex-wrap items-center gap-4 w-full py-4">
          {categoryProducts?.data?.data.productGroups[0]?.elements[0]?.commercialComponents?.map(
            (product: any) => (
              <Link
                to="/$categorySlug/$productId"
                params={{ categorySlug: "", productId: "" }}
                key={product?.id}
                className="w-2/6 mt-4"
              >
                <img
                  src={
                    "https://static.zara.net/photos/" +
                    product?.xmedia[0]?.path +
                    "/" +
                    product?.xmedia[0]?.name +
                    ".jpg?ts=" +
                    product?.xmedia[0]?.timestamp
                  }
                  className="w-full"
                />
                <div className="flex justify-between w-full mt-2">
                  <p className="font-inter text-xs font-light tracking-wider">
                    {product.name}
                  </p>
                  <p className="font-inter text-xs font-light tracking-wider">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(product?.price / 100)}
                  </p>
                </div>
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
