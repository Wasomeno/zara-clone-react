import { FC } from "react";

export const Carousel: FC = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="h-screen w-full">
        <img
          src="https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-athleticz/subhome-xmedia-05//w/1920/IMAGE-landscape-fill-d9114ff9-cfc7-4ae9-bc59-5eb03da1386d-default_0.jpg?ts=1674850803195"
          className="h-full w-full"
        />
      </div>
      <div className="h-screen w-full">
        <img
          src="https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-wardrobe/subhome-xmedia-05//w/1920/IMAGE-landscape-fill-448701ba-856d-4d9b-9b53-fccc98bf8388-default_0.jpg?ts=1675430171011"
          className="h-full w-full"
        />
      </div>
      <div className="h-screen w-full">
        <img
          src="https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-new/subhome-xmedia-05-2//w/1920/IMAGE-landscape-fill-80582c04-ed01-4852-a9cc-3f470b705c40-default_0.jpg?ts=1675249858443"
          className="h-full w-full"
        />
      </div>
      <div className="h-screen w-full flex flex-col justify-center items-center gap-2 bg-slate-50">
        <div className="h-1/6">
          <p className="font-light">BERGABUNGLAH DENGAN BULETIN KAMI</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <p className="font-light text-xs tracking-wider">SOCIAL</p>
          <p className="font-light text-xs tracking-wider">SOCIAL</p>
          <p className="font-light text-xs tracking-wider">SOCIAL</p>
          <p className="font-light text-xs tracking-wider">SOCIAL</p>
          <p className="font-light text-xs tracking-wider">SOCIAL</p>
          <p className="font-light text-xs tracking-wider">SOCIAL</p>
          <p className="font-light text-xs tracking-wider">SOCIAL</p>
        </div>
      </div>
      <div className="p-2 fixed right-12 bottom-24">
        <p className="text-sm font-medium tracking-wider">Test</p>
        <p className="text-sm font-medium tracking-wider">Test</p>
        <p className="text-sm font-medium tracking-wider">Test</p>
        <p className="text-sm font-medium tracking-wider">Test</p>
      </div>
    </div>
  );
};
