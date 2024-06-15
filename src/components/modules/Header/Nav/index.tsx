"use client";
import { useRouter } from "next-nprogress-bar";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { isNumber } from "lodash";

type HeaderType = {
  href: string;
  label: string;
  id: string;
};

const Nav = ({ headerItems }: { headerItems: Array<HeaderType> }) => {
  const [headerClicked, setHeaderClicked] = useState("/");
  const [translateHeader, setTranslateHeader] = useState(37);
  const [url, setUrl] = useState("home");
  const router = useRouter();

  const pathname = usePathname();

  const handleHover = (id: string) => {
    setTimeout(() => {
      const e = document.querySelector<HTMLElement>("#header-" + id);
      if (e) {
        const translate = e.offsetWidth / 2 + e.offsetLeft;
        if (isNumber(translate)) {
          setTranslateHeader(translate);
        } else {
          setTranslateHeader(37);
        }
      } else {
        setTranslateHeader(37);
      }
    }, 1);
  };

  useEffect(() => {
    router.push(headerClicked);
  }, [headerClicked, router]);

  const hash = useMemo(
    () => window.location.hash.substring(1) || "home",
    [window.location.hash],
  );

  useEffect(() => {
    setUrl(hash);
    handleHover(hash);
  }, [hash]);

  useEffect(() => {
    const newPathName = pathname ? pathname.substring(1) : "home";
    setUrl(newPathName);
    handleHover(newPathName);
  }, [pathname]);
  return (
    <ul className="relative hidden gap-7 md:flex lg:gap-12">
      {headerItems?.map((item: HeaderType, index: number) => (
        <li
          onClick={() => setHeaderClicked(item.href)}
          onMouseEnter={() => handleHover(item.id)}
          onMouseLeave={() => handleHover(url)}
          id={"header-" + item.id}
          key={index}
          className="mt-2 flex cursor-pointer flex-col items-center justify-center gap-1 text-xs md:text-sm lg:text-base"
        >
          <span className="">{item?.label}</span>
        </li>
      ))}
      <div className="absolute bottom-0 left-0 h-[2px] w-full transition-all">
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            x: translateHeader,
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 0.1,
            },
          }}
          className="absolute -left-7 block h-full w-14 bg-primary"
        ></motion.span>
      </div>
    </ul>
  );
};

export default Nav;
