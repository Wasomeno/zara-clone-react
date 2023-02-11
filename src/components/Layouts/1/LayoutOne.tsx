import { FC } from "react";

interface PropsInterface {
  componentDetails: any;
}

export const LayoutOne: FC<PropsInterface> = ({ componentDetails }) => {
  return (
    <div className="h-full w-1/6">
      <img
        src={
          "https://static.zara.net/photos/" +
          componentDetails?.xmedia[0]?.path +
          "/" +
          componentDetails?.xmedia[0]?.name +
          ".jpg?ts=" +
          componentDetails?.xmedia[0]?.timestamp
        }
        className="w-full h-full"
      />
      <div className="flex justify-between w-full mt-2">
        <p className="font-inter text-xs font-light tracking-wider">
          {componentDetails?.name}
        </p>
        <p className="font-inter text-xs font-light tracking-wider">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(componentDetails.price / 100)}
        </p>
      </div>
    </div>
  );
};
