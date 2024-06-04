"use client";

interface CardProps {
    data: {
        title: string;
        description: string;
    };
}

function Card({ data }: CardProps) {
    return (
        <ul className="">
            <li className="group hover:shadow-3d-hover  shadow-3d hover:bg-primary  transition-all  duration-500  ease-in-out  p-4 lg:p-8 md:p-8  sm:p-4 flex  flex-row lg:flex-col  md:flex-col  sm:flex-col  justify-between  items-center  gap-3 lg:gap-2  md:gap-2  sm:gap-2  bg-white  border-2  border-black rounded-3xl  ">
                <div className="w-16 h-16 flex justify-center items-center">
                    <svg className="w-9 h-7 " viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="group-hover:fill-white" d="M1.24375 2.75C0.985 2.75 0.80625 2.49375 0.925 2.26375C1.2423 1.65631 1.72 1.14743 2.3062 0.792409C2.8924 0.437385 3.56468 0.249789 4.25 0.25H12.1225C12.9739 0.249885 13.8 0.53951 14.465 1.07125L15.7287 2.0825C15.7893 2.13112 15.8334 2.19735 15.8547 2.27206C15.876 2.34677 15.8736 2.42625 15.8478 2.49953C15.822 2.57281 15.7741 2.63627 15.7107 2.68114C15.6472 2.72601 15.5714 2.75007 15.4937 2.75H1.24375ZM1.125 5.25C0.95924 5.25 0.800269 5.31585 0.683058 5.43306C0.565848 5.55027 0.5 5.70924 0.5 5.875V21.5C0.5 23.1576 1.15848 24.7473 2.33058 25.9194C3.50269 27.0915 5.0924 27.75 6.75 27.75H29.25C30.9076 27.75 32.4973 27.0915 33.6694 25.9194C34.8415 24.7473 35.5 23.1576 35.5 21.5V11.5C35.5 9.8424 34.8415 8.25268 33.6694 7.08058C32.4973 5.90848 30.9076 5.25 29.25 5.25H1.125Z" fill="#0F0F0F" />
                    </svg>
                </div>
                <div className="flex flex-col lg:flex-col  md:flex-col  sm:flex-col gap-1 lg:gap-2  md:gap-2  sm:gap-2">
                    <h3 className="text-base text-left lg:text-center md:text-center sm:text-center font-semibold group-hover:text-white">{data?.title}</h3>
                    <p className="text-base text-left lg:text-center md:text-center sm:text-center group-hover:text-white">{data?.description}</p>
                </div>
            </li>
        </ul>
    )
}

export default Card;