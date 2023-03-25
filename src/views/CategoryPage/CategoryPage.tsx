import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "@tanstack/react-router";
import axios from "axios";
import { LayoutMap } from "./components/Layouts/LayoutMap";

export const CategoryPage = () => {
  const { categorySlug } = useParams();
  const categoryId = categorySlug?.split("=")[1];
  const categoryProducts = useQuery(
    ["categoryProducts", categoryId],
    async () =>
      await axios.get(
        `https://www.zara.com/id/id/category/${categoryId}/products`
      )
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="h-36 p-2 flex items-center justify-center">
        <h1 className="font-inter text-3xl font-medium">COLLECTION</h1>
      </div>

      {categoryProducts?.data?.data.productGroups[0]?.elements.length > 1 ? (
        <div className="flex flex-col gap-4 w-full">
          {categoryProducts?.data?.data.productGroups[0].elements.map(
            (product: any, index: any) => (
              <div
                key={index}
                className={
                  LayoutMap.get(product?.layout?.split("")[0])?.className
                }
              >
                {product?.commercialComponents.map((component: any) =>
                  LayoutMap.get(product?.layout?.split("")[0])?.component(
                    component
                  )
                )}
              </div>
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
