import {
    AiOutlineDown,
    AiOutlineHeart,
    AiOutlineMail,
    AiOutlineUser,
  } from "react-icons/ai";
  import { BsCart, BsTelephoneInbound } from "react-icons/bs";
  export const HeaderTop = () => {
    return (
      <div className="w-full py-4 bg-violet-700">
        <div className="container mx-auto">
          <div className="grid items-center grid-cols-1 gap-2 lg:gap-0 lg:grid-cols-2">
            <div className="flex gap-12">
              <div className="flex items-center gap-2 ">
                <AiOutlineMail className="duration-200 cursor-pointer headTopText hover:-translate-y-1" />
                <p className="font-semibold cursor-pointer headTopText">
                  mhhasanul@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <BsTelephoneInbound className="duration-200 cursor-pointer headTopText hover:-translate-y-1" />
                <p className="font-semibold cursor-pointer headTopText ">
                  (12345)67890
                </p>
              </div>
            </div>
            <div className="flex justify-between pl-0 md:pl-20">
              <div className="">
                <p className="flex items-center gap-1 cursor-pointer headTopText">
                  English
                  <span>
                    <AiOutlineDown />
                  </span>
                </p>
              </div>
              <div className="">
                <p className="flex items-center gap-1 cursor-pointer headTopText">
                  USD
                  <span>
                    <AiOutlineDown />
                  </span>
                </p>
              </div>
              <div className="">
                <p className="flex items-center gap-1 cursor-pointer headTopText">
                  Login
                  <span>
                    <AiOutlineUser />
                  </span>
                </p>
              </div>
              <div className="">
                <p className="flex items-center gap-1 cursor-pointer headTopText">
                  Wishlist
                  <span>
                    <AiOutlineHeart />
                  </span>
                </p>
              </div>
              <div className="">
                <BsCart  className="text-xl text-white"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  