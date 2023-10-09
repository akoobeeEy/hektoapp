import { BsSearch } from "react-icons/bs"
import { Link } from "react-router-dom"

export  const Navbar = () => {
  return (
    <div className="py-2 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between">
            <div className="flex gap-[88px] items-center">
              <Link className="text-3xl font-bold text-titleColor ">
                <h1 className="duration-200 hover:-translate-y-1">Hekto</h1>
              </Link>
              <div className="flex gap-8">
                <Link>
                  <p className="navLink">
                    Home
                  </p>
                </Link>
                <Link>
                  <p className="navLink">
                    Pages
                  </p>
                </Link>
                <Link>
                  <p className="navLink">
                    Products
                  </p>
                </Link>
                <Link>
                  <p className="navLink">
                    Blog
                  </p>
                </Link>
                <Link>
                  <p className="navLink">
                    Shop
                  </p>
                </Link>
                <Link>
                  <p className="navLink">
                    Contact
                  </p>
                </Link>
              </div>
            </div>
            <div className="hidden h-10 w-[371px] xl:flex">
                <input type="text" className="w-full h-full border-[1px] px-4 border-gray-200 outline-none" />
                <button className="h-full px-3 py-2 bg-designColor">
                  <BsSearch className="text-xl text-white"/>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

