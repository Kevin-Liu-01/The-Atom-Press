import { UserCircleIcon } from "@heroicons/react/outline";
import Navbar from "./Navbar";
import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-default pb-14 ">
      {/*Navbar*/}
      <Navbar page="Home" />

      <div className=" pt-3">
        <div className="px-8 mx-auto max-w-[100rem]  grid grid-rows-1 grid-cols-1 md:grid-cols-7 gap-8">
          {/*Section 1*/}
          <div className="grid col-span-1 md:col-span-3 md:mt-0 gap-8">
            {/*Row 1*/}
            <a
              href="/article"
              className="flex row-span-1 drop-shadow-lg mt-8 md:mt-0 md:mr-12 w-[100%] overflow-hidden bg-white place-content-center rounded-xl hover:scale-[1.02] duration-200 ease-in-out"
            >
              <div className="p-6 w-[100%] border-b-4 border-bordermaroon">
                <div className="grid grid-cols-3">
                  <div className="col-span-2 text-3xl headerbold tracking-tight text-headermaroon sm:text-4xl text-center md:text-left font-exo">
                    <div className="inline ">Opinion</div>: Despacito is the
                    Best Song
                  </div>
                  <div className="flex justify-end">
                    <UserCircleIcon className="text-headermaroon h-[75px]" />
                  </div>
                </div>
                <div className=" py-8">
                  <img
                    src="https://www.india.com/wp-content/uploads/2017/07/Despacito.jpg"
                    alt="Despacito"
                    className="rounded-xl overflow-hidden"
                  ></img>
                  <p className="text-ellipsis italic font-quicksand text-xl p-1">
                    By John Doe
                  </p>
                </div>
              </div>
            </a>
            {/*Row 2*/}
            <a
              href="/article"
              className="flex row-span-1 drop-shadow-lg md:mr-12 w-[100%] overflow-hidden bg-white place-content-center rounded-xl hover:scale-[1.02] duration-200 ease-in-out"
            >
              <div className="p-6 w-[100%] border-b-4 border-bordermaroon">
                <div className="grid grid-cols-3">
                  <div className="col-span-2 text-3xl headerbold tracking-tight text-headermaroon sm:text-4xl text-center md:text-left font-exo">
                    Halloween Dance - 10/24/2022
                  </div>
                  <div className="flex justify-end">
                    <UserCircleIcon className="text-headermaroon h-[75px]" />
                  </div>
                </div>
                <div className=" py-8 ">
                  <img
                    src="https://www.history.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTU4MDgyMjQyMTM5MTM3ODE3/halloween.jpg"
                    alt="Despacito"
                    className="rounded-xl overflow-hidden"
                  ></img>
                  <p className="text-ellipsis italic font-quicksand text-xl p-1">
                    By John Doe
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/*Section 2*/}
          <div className="grid col-span-1 md:col-span-4 gap-8">
            {/*Row 1*/}
            <div className="flex row-span-1 drop-shadow-lg md:mr-12  w-[100%] overflow-hidden bg-white place-content-center rounded-xl hover:scale-[1.02] duration-200 ease-in-out">
              <div className="p-6 w-[100%] border-b-4 border-bordermaroon">
                <div className="grid grid-cols-3">
                  <div className="col-span-2 text-3xl headerbold tracking-tight text-headermaroon sm:text-4xl text-center md:text-left font-exo">
                    Welcome to the Atom Press!
                  </div>
                  <div className="flex justify-end">
                    <UserCircleIcon className="text-headermaroon h-[75px]" />
                  </div>
                </div>
                <div className="position-relative py-8 ">
                  <div className="font-quicksand text-2xl">
                    <p>
                      The newspaper/magazine written by High Tech students, for
                      High Tech students. This is your one stop-shop to the
                      bowels of the High Technology High School hive mind!{" "}
                    </p>

                    <p className="pt-6">
                      Ready to begin your deep dive into this school? Click the
                      menu button to browse categories, or check out the
                      featured articles displayed right here on the home page!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*Row 2*/}
            <div className="flex drop-shadow-lg md:mr-12 w-[100%] overflow-hidden bg-white place-content-center rounded-xl hover:scale-[1.02] duration-200 ease-in-out">
              <div className="p-6 w-[100%] border-b-4 border-bordermaroon">
                <div className="col-span-2 text-3xl headerbold tracking-tight text-headermaroon sm:text-4xl text-center md:text-left font-exo">
                  Recently:
                </div>

                <div className="position-relative py-8 ">
                  <ul className="font-quicksand text-2xl">
                    <li>1. Get Ready for the PSAT on Oct. 12</li>

                    <li className="pt-4">
                      2. Kanye West introduced a new milk derivative food,
                      called “Cheezys”
                    </li>

                    <li className="pt-4">
                      3. The Junior Student Council raises $1,500+ during Movie
                      Night
                    </li>

                    <li className="pt-4">4. Dream reveals his face</li>
                  </ul>
                </div>
              </div>
            </div>
            {/*Row 3*/}
            <div className="flex drop-shadow-lg md:mr-12  w-[100%] overflow-hidden bg-white place-content-center rounded-xl hover:scale-[1.02] duration-200 ease-in-out">
              <div className="p-6 w-[100%] border-b-4 border-bordermaroon">
                <div className="col-span-2 text-3xl headerbold tracking-tight text-headermaroon sm:text-4xl text-center md:text-left font-exo">
                  Lorem Ipsum
                </div>

                <div className="position-relative py-8 ">
                  <div className="font-quicksand text-2xl">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*End*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
