import Image from 'next/image'

export const Footer = () => {
  const date = new Date()

  return (
    <>
      <footer className="relative  text-xs px-2 py-3 flex flex-col">
        <div className="h-full w-full -z-50 clip-path-footer absolute bottom-0 left-0 bg-footer"></div>
        <div className=" flex justify-between relative flex-row text-right mb-32">
          <div>BOI</div>
          <div>
            <Image src={'/img/people.png'} alt="group" width={300} height={300} />
          </div>
        </div>
        <div className="flex justify-between gap-20">
          <div>
            <p>Services</p>
            <p>Strategy Design</p>
            <p>Product Design</p>
            <p>Content Strategy</p>
            <p>Brand Strategy</p>
            <p>Development</p>
          </div>
          <div>
            <p>Help and advice</p>
            <p>How it works</p>
            <p>Contact Support</p>
            <p>Privacy Policy</p>
            <p>FAQ</p>
          </div>
          <div>
            <p>Company</p>
            <p>About</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>Jobs</p>
          </div>
          <div></div>
          <div>
            <p>Get in touch</p>
            <p>Feel free to get in touch with us via email</p>
            <p>info.boi@gmail.com</p>
            <div>
              <div>O</div>
              <div>O</div>
              <div>O</div>
              <div>O</div>
            </div>
          </div>
        </div>
        <p className="text-right">&copy; {date.getFullYear()}@boi. All Rights Reserved.</p>
      </footer>
    </>
  )
}
