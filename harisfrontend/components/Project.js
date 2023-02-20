export default function Project({title, image, description}) {
  return (
  <div className="">
      <div className="relative">
        <img src={image} alt="" className="object-cover rounded-2xl" />
        <div className="absolute text-gray-400 font-bold bottom-6 left-6">
          {title}
        </div>
      </div>
      <div className="flex">
        <div>
          <p className="font-semibold">{title}</p>
          <p>{description}</p>

        </div>

      </div>
  </div>
  )
}
