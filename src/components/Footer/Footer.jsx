import Image from 'next/image'

import Link from 'next/link'
import { Logo } from '@/components/Logo'
export const Footer = () => {
  const date = new Date()

  return (
    <>
      <footer className="text-white text-center text-base font-light after:absolute after:top-0 after:right-0 after:w-full after:h-full after:clip-path-footer after:-z-50 after:bg-footer relative mt-10 px-6 pb-6 pt-24 lg:text-start lg:mt-24 lg:px-32 lg:pb-14 lg:pt-56 flex flex-col">
        <div
          className="
            hidden
            lg:block
            absolute
            lg:right-[110px]
            lg:top-11
            md:-translate-y-[295px]
            md:w-[600px]
            md:h-[600px]
            "
        >
          <Image src={'/img/people.png'} alt="group" width={500} height={500} />
        </div>{' '}
        <div className="lg:w-[5.5rem] lg:h-[4.75rem] absolute top-16">
          <Logo variant="white" />
        </div>
        <div className="grid justify-items-center gap-y-4 lg:flex lg:justify-between lg:pr-8">
          <div className="space-y-2 lg:space-y-9">
            <p className="font-semibold">SERVICES</p>
            <div className="grid space-y-4">
              <Link href="/">
                <a>Strategy Design</a>
              </Link>
              <Link href="/">
                <a>Product Design</a>
              </Link>
              <Link href="/">
                <a>Content Strategy</a>
              </Link>
              <Link href="/">
                <a>Brand Strategy</a>
              </Link>
              <Link href="/">
                <a>Development</a>
              </Link>
            </div>
          </div>
          <div className="space-y-2 lg:space-y-9">
            <p className="font-semibold">HELP AND ADVICE</p>
            <div className="grid space-y-4">
              <Link href="/">
                <a>How it works</a>
              </Link>
              <Link href="/">
                <a>Contact Support</a>
              </Link>
              <Link href="/">
                <a>Privacy Policy</a>
              </Link>
              <Link href="/">
                <a>FAQ</a>
              </Link>
            </div>
          </div>
          <div className="space-y-2 lg:space-y-9">
            <p className="font-semibold">COMPANY</p>
            <div className="grid space-y-4">
              <Link href="/">
                <a>About</a>
              </Link>
              <Link href="/">
                <a>Blog</a>
              </Link>
              <Link href="/">
                <a>Contact</a>
              </Link>
              <Link href="/">
                <a>Jobs</a>
              </Link>
            </div>
          </div>
          <div className="min-h-full mb-6 border-l border-l-white hidden lg:block"></div>
          <div className="space-y-2 lg:space-y-9">
            <p className="font-semibold">GET IN TOUCH</p>
            <div className="grid space-y-4">
              <Link href="/">
                <a>Feel free to get in touch with us via email</a>
              </Link>
              <p className="text-lg lg:text-2xl font-bold">info.boi@gmail.com</p>
              <div className="flex justify-center space-x-3 lg:justify-start">
                <span className="rounded-full w-6 h-6 bg-white bg-opacity-[0.34]"></span>
                <span className="rounded-full w-6 h-6 bg-white bg-opacity-[0.34]"></span>
                <span className="rounded-full w-6 h-6 bg-white"></span>
                <span className="rounded-full w-6 h-6 bg-white bg-opacity-[0.34]"></span>
              </div>
            </div>
          </div>
        </div>
        <span className="border-t border-t-white my-12"></span>
        <p className="text-base lg:text-right lg:pr-5">
          &copy; {date.getFullYear()}@boi. All Rights Reserved.
        </p>
      </footer>
    </>
  )
}
