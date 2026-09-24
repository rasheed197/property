import Image from "next/image"

const PropertyHeaderImage = ({ image }) => {
return (
<section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
                  src={image}
                  sizes="100vw"
                  width={1800}
                  height={400}
                  alt=""
                  className="w-full h-[400px] rounded-t-xl"
                />
        </div>
      </div>
    </section>
  )
}

export default PropertyHeaderImage
