import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import axios from "axios";

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const categoryId = categorySlug?.split("=")[1];
  const categoryProducts = useQuery(
    ["categoryProducts", categoryId],
    async () =>
      await axios.get(
        `https://www.zara.com/id/id/category/${categoryId}/products`
      )
  );

  console.table(categoryProducts?.data?.data.productGroups[0].elements);

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="h-36 p-2 text-center">
        <h1
          className="font-inter text-3xl font-med
        "
        >
          COLLECTION
        </h1>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {categoryProducts?.data?.data.productGroups[0]?.elements.length > 1
          ? categoryProducts?.data?.data.productGroups[0].elements.map(
              (product: any) => (
                <div key={product?.id} className="col-span-1">
                  <img
                    src={
                      "https://static.zara.net/photos/" +
                      product?.commercialComponents[0]?.xmedia[0]?.path +
                      "/" +
                      product?.commercialComponents[0]?.xmedia[0]?.name +
                      ".jpg?ts=" +
                      product?.commercialComponents[0]?.xmedia[0]?.timestamp
                    }
                    className="w-full h-72"
                  />
                  {product?.commercialComponents[0]?.name}
                </div>
              )
            )
          : categoryProducts?.data?.data.productGroups[0]?.elements[0]?.commercialComponents?.map(
              (product: any) => (
                <div key={product?.id} className="col-span-1">
                  <img
                    src={
                      "https://static.zara.net/photos/" +
                      product?.xmedia[0]?.path +
                      "/" +
                      product?.xmedia[0]?.name +
                      ".jpg?ts=" +
                      product?.xmedia[0]?.timestamp
                    }
                    className="w-full h-72"
                  />
                  {product?.name}
                </div>
              )
            )}
      </div>
    </div>
  );
};

export default CategoryPage;
