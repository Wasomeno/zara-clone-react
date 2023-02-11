import { FC, MouseEventHandler, useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import XMark from "@heroicons/react/24/outline/XMarkIcon";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface NavbarProps {
  showMenu: boolean;
  toggleMenu?: MouseEventHandler;
  activeCategory: number;
  setActiveCategory: Function;
}

export const Menu: FC<NavbarProps> = ({
  showMenu,
  toggleMenu,
  activeCategory,
  setActiveCategory,
}) => {
  function toggleCategory(key: Number) {
    setActiveCategory(key);
  }
  const { data: categoriesResult } = useQuery(["categories"], async () => {
    return await axios.get("/api/id/id/categories");
  });

  return (
    <AnimatePresence>
      {showMenu && (
        <motion.div
          className="w-2/6 bg-white h-full fixed left-0 top-0 p-6 z-20 shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="sticky h-1/6">
            <button className="w-6 h-6" onClick={toggleMenu}>
              <XMark />
            </button>
            <div className="flex w-4/6 h-full justify-start items-center gap-4">
              {categoriesResult?.data.categories.map(
                (category: any, index: any) => (
                  <button
                    key={index}
                    className={
                      (activeCategory === index
                        ? "font-semibold"
                        : "font-light") +
                      " tracking-wider text-xs transition ease-in-out duration-300 font-inter"
                    }
                    onClick={() => toggleCategory(index)}
                  >
                    {category.name}
                  </button>
                )
              )}
            </div>
          </div>
          <div className="overflow-y-scroll max-h-full relative">
            <div className="mb-8 flex flex-col gap-4">
              <div className="tracking-wider text-xs font-medium font-inter">
                PROMOTION
              </div>
              <div className="tracking-wider text-xs font-medium font-inter">
                PROMOTION
              </div>
              <div className="tracking-wider text-xs font-medium font-inter">
                PROMOTION
              </div>
            </div>
            <div className="flex flex-col items-start gap-5">
              {categoriesResult?.data.categories[
                activeCategory
              ].subcategories.map((subcategory: any) => (
                <Link
                  to="/$categorySlug"
                  params={{
                    categorySlug:
                      "/" + subcategory.seo?.keyword + "=" + subcategory?.id,
                  }}
                  className="tracking-wider text-xs font-light font-inter"
                >
                  {subcategory.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
