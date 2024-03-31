import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

const banks = [
  {
    id: 1,
    name: 'Maybank',
    avatar:
      'https://assets.nst.com.my/images/articles/maybank_30a_1506600376.jpg',
  },
  {
    id: 2,
    name: 'Oversea-Chinese Banking Corporation Bank',
    avatar:
      'https://www.fintechfutures.com/files/2016/11/OCBC.png',
  },
  {
    id: 3,
    name: 'DBS Bank',
    avatar:
      'https://yt3.ggpht.com/a/AATXAJw0gccnv-lsupnOw66jFKbYr0AlCVLlhwe6aw=s900-c-k-c0xffffffff-no-rj-mo',
  },
  {
    id: 4,
    name: 'United Overseas Bank',
    avatar:
      'https://th.bing.com/th/id/OIP.syXo7HWMVKA3tcw2hZantAHaHa?rs=1&pid=ImgDetMain',
  },
  {
    id: 5,
    name: 'CIMB',
    avatar:
      'https://th.bing.com/th/id/OIP.5a7MmMQEkaOYDZBeqjTfeAAAAA?rs=1&pid=ImgDetMain',
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDownBank() {
  const [selected, setSelected] = useState(banks[3])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-gray-600 font-bold leading-6 text-8x1">Choose Your Bank Account</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <img src={selected.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {banks.map((bank) => (
                  <Listbox.Option
                    key={bank.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={bank}
                  >
                    {({ selected, active }) => (
                      <Link href="/auth/Login" legacyBehavior> 
                        <a>
                          <div className="flex items-center">
                            <img src={bank.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                            <span
                              className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                            >
                              {bank.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </a>
                      </Link>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
