import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <div className='min-h-screen flex flex-col'>
            <div className='flex flex-col md:flex-row flex-1'>
                <aside class="relative md:flex w-64" aria-label="Sidebar">
                    <div class=" py-4 px-3 bg-gray-50 rounded bg-gray-300">
                        <img
                            src="/./dummy-logo.png"
                            className="mb-8"
                        />

                        <div className="bg-white">
                            <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-white-800">
                                <h1 className="font-medium text-blue-800 mb-4">NAVIGASI</h1>
                                <ul class="space-y-2">
                                    <li>
                                        <button type="button" class="flex items-center p-2 w-full font-medium text-gray-900 rounded-lg transition duration-75 group bg-gray-100 ">
                                            <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                                            <span class="flex-1 ml-3 text-left whitespace-nowrap" >Tiket</span>
                                            <svg  class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </button>
                                        <ul id="dropdown-example" class=" py-2 space-y-2">
                                            <li>
                                                <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 ">Tiket Support</a>
                                            </li>
                                        </ul>
                                    </li>
                                
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>
                <main class="flex-1">{children}</main>
            </div>
        </div>
                
    );
  }