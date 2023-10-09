import PropTypes from "prop-types"
const FeaturedDetailsTop = ({title}) => {
  return (
    <div className="bg-shadeColor py-[80px]">
      <div className="container mx-auto">
            <h1 className="text-[#101750] text-xl font-bold md:text-4xl">Product Details: {title}</h1>
      </div>
    </div>
  )
}

FeaturedDetailsTop.propTypes = {
    title: PropTypes.string,
}
export default FeaturedDetailsTop
