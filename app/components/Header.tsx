'use client'
import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname,  } from 'next/navigation';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const currentRoute = usePathname();
  
  const navigation = [
    { name: "Home", href: "/news", current: currentRoute === "/news" },
    { name: "Top", href: "/news/top", current: currentRoute === "/news/top" },
    {
      name: "England",
      href: "/news/live/england",
      current: currentRoute === "/news/live/england",
    },
    {
      name: "World",
      href: "/news/live/world",
      current: currentRoute === "/news/live/world",
    },
    {
      name: "Tech",
      href: "/news/live/technology",
      current: currentRoute === "/news/live/technology",
    },
    {
      name: "Ents & Arts",
      href: "/news/live/entertainment_and_arts",
      current: currentRoute === "/news/live/entertainment_and_arts",
    },
    {
      name: "Education",
      href: "/news/live/education",
      current: currentRoute === "/news/live/education",
    },
    {
      name: "Business",
      href: "/news/live/business",
      current: currentRoute === "/news/live/business",
    },
  ]
  
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <Image
                      className="block h-8 w-auto lg:hidden"
                      src="/images/favicon-32x32.png"
                      width="32"
                      height="32"
                      alt="Positive Press"
                    />
                    <Image
                      className="hidden h-8 w-auto lg:block"
                      src="/images/favicon-32x32.png"
                      width="32"
                      height="32"
                      alt="Positive Press"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => {
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          data-testid={`nav-${item.name}`}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium",
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium",
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
