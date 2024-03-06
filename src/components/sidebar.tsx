import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Sidebar({ folders }: any) {
    return (
        <div>
            <input type="checkbox" id="menu-open" className="hidden" />

            <header className="bg-slate-700 text-gray-100 flex justify-between md:hidden absolute top-0 left-0 right-0 z-10">
                <a href="/" className="block p-4 text-white font-bold whitespace-nowrap truncate">
                    Waifu Pics
                </a>

                <label htmlFor="menu-open" id="mobile-menu-button" className="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md">
                    <svg
                        id="menu-open-icon"
                        className="h-6 w-6 transition duration-200 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg
                        id="menu-close-icon"
                        className="h-6 w-6 transition duration-200 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </label>
            </header>

            <aside
                id="sidebar"
                className="bg-slate-700 text-gray-100 md:w-[20%] w-[65%] space-y-6 pt-6 px-0 absolute top-0 bottom-0 left-0 transform md:translate-x-0 transition duration-200 ease-in-out md:flex md:flex-col md:justify-between overflow-y-auto z-40 border-r-2 border-slate-500 md:border-0"
            >
                <div className="flex flex-col space-y-6">
                    <Marquee>
                        <a href="#" className="text-white flex items-center space-x-2 px-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                />
                            </svg>
                            <span className="text-2xl font-extrabold whitespace-nowrap truncate">Anime Girls Holding Programming Books</span>
                        </a>
                    </Marquee>

                    <nav data-dev-hint="main navigation">
                        {folders.map((folder: any) => (
                            <Link
                                key={folder.sha}
                                href={`/folders/${folder.name.toLowerCase()}`}
                                className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-violet-900 hover:text-white"
                            >
                                <span>{folder.name}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </aside>
        </div>
    );
}
