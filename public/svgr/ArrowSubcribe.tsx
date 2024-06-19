import { motion } from "framer-motion";

const ArrowSubcribe = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={98}
      height={91}
      fill="none"
      {...props}
    >
      <g strokeLinecap="round" clipPath="url(#a)">
        <motion.path
          initial={{
            strokeDasharray: 500,
            strokeDashoffset: 0,
            display: "none",
          }}
          animate={{
            display: "block",
            strokeDashoffset: [500, -500],
            type: "",
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            delay: 5,
          }}
          fill="none"
          stroke="#020817"
          strokeMiterlimit={10}
          strokeWidth={3.72}
          d="M.28 87.64c21.27 3.19 39.36.21 44.32-9.4.98-1.89 1.35-3.86 1.57-4.99 2.39-12.48-6.41-23.07-12.11-27.36-3.69-2.77-6.08-2.91-7.55-2.71-1.6.22-3.19.99-4.13 1.99-3.96 4.26 2.57 15.58 3.28 16.81 1.23 2.15 9.49 16.06 26.36 19.38 4.74.93 10.29 2.02 15.82-.85 9.7-5.05 10.89-20.06 11.11-22.51.18-1.98.16-3.47.14-4.13-.35-17.08-.16-16.77-.59-24.87-.13-2.48-.25-12.2-.5-16"
        />
        <motion.path
          initial={{
            strokeDasharray: 200,
            strokeDashoffset: 0,
            display: "none",
          }}
          animate={{
            display: "block",
            strokeDashoffset: [200, -200],
            type: "",
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            delay: 5,
          }}
          fill="none"
          stroke="#020817"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M66 23.5 77.5 4 91 23.5"
        />
      </g>
    </svg>
  );
};
export default ArrowSubcribe;
