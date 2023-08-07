const Error = ({ mensaje }) => {

  return (
    <div className="my-5 p-2 font-bold uppercase text-center rounded-md text-white bg-red-700">
      <p>{mensaje}</p>
    </div>
  )
}

export default Error