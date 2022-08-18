import Image from 'next/image'

const NotFound = () => {
  return (
    <div className="flex flex-col space-y-12 text-center justify-center items-center font-extrabold bg-gradient-to-br from-boiOrange via-purple-600 to-header">
      <p className="text-7xl text-boiOrange">404</p>
      <p className="text-3xl text-orange-400">Page you are looking for does not exist</p>
    </div>
  )
}

export default NotFound
