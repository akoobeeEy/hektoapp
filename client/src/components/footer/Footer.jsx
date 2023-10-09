import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#EEEFFB] pt-[95px]">
      <div className="container mx-auto">
        <div className="grid gap-[70px] grid-cols-12 ">
          <div className="col-span-6 md:col-span-4">
            <Link to="/">
              <h1 className="mb-8 text-xl font-bold md:text-4xl">Hekto</h1>
            </Link>
            <div className="flex p-1 mb-6 bg-white h-11">
              <input
                type="text"
                className="w-[90%] h-full  px-4 outline-none placeholder:text-sm "
                placeholder="Enter Email Address"
              />
              <button className="flex items-center gap-1 px-4 text-sm text-white bg-designColor">
                Sign <span> Up</span>
              </button>
            </div>
            <p className="mb-3 footerText">Contact Info</p>
            <p className="inline-block footerText">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>
          {/* Footer right */}
          <div className="col-span-12 md:col-span-8">
            <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
              <div className="">
                <h1 className="mb-10 footerTitle">Categories</h1>
                <div className="flex flex-col gap-4">
                  <Link className="duration-200 footerText hover:text-black">
                    Laptops & Computers
                  </Link>
                  <Link className="duration-200 footerText hover:text-black">
                    Cameras & Photography
                  </Link>
                  <Link className="duration-200 footerText hover:text-black">
                    Smart Phones & Tablets
                  </Link>
                  <Link className="duration-200 footerText hover:text-black">
                    Video Games & Consoles
                  </Link>
                  <Link className="duration-200 footerText hover:text-black">
                    Waterproof Headphones
                  </Link>
                </div>
              </div>
              <div className="">
                <h1 className="mb-10 footerTitle">Customer Care</h1>
                <div className="flex flex-col gap-4">
                  <Link className="duration-200 footerText hover:text-black">
                    My Account
                  </Link>
                  <Link className="duration-200 footerText hover:text-black">
                    Discount
                  </Link>
                  <Link className="duration-200 footerText hover:text-black">
                    Returns
                  </Link>
                  <Link className="duration-200 footerText hover:text-black">
                    Orders History
                  </Link>
                  <Link className="duration-200 footerText hover:text-black">
                    Order Tracking
                  </Link>
                </div>
              </div>
              <div className="">
                <h1 className="mb-10 footerTitle">Pages</h1>
                <div className="flex flex-col gap-4">
                  <Link className="duration-200 footerText hover:text-black">
                    Blog
                  </Link>
                  <Link className="duration-200 footerText hover:text-black">
                    Browse the Shop
                  </Link>
                  <Link className="duration-200 footerText hover:text-black">
                    Category
                  </Link>
                  <Link className="duration-200 footerText hover:text-black">
                    Pre-Built Pages
                  </Link>
                  <Link className="duration-200 footerText hover:text-black">
                    Visual Composer Elements
                  </Link>
                  <Link className="duration-200 footerText hover:text-black">
                    WooCommerce Pages
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
