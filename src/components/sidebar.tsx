import Link from "next/link";

export default function Sidebar({ folders }: any) {
    return (
        <>
            <input type="checkbox" id="menu-open" className="hidden" />

            <label htmlFor="menu-open" className="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden" data-dev-hint="floating action button">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </label>

            <header className="bg-gray-600 text-gray-100 flex justify-between md:hidden" data-dev-hint="mobile menu bar">
                <a href="#" className="block p-4 text-white font-bold whitespace-nowrap truncate">
                    Your App is cool
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
                className="bg-gray-800 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 fixed inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out md:flex md:flex-col md:justify-between overflow-y-auto"
                data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
            >
                <div className="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
                    <a href="#" className="text-white flex items-center space-x-2 px-4" title="Your App is cool">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                        </svg>
                        <span className="text-2xl font-extrabold whitespace-nowrap truncate">Waifu Pics</span>
                    </a>

                    <nav data-dev-hint="main navigation">
                        {folders.map((folder: any) => (
                            <Link
                                key={folder.sha}
                                href={`/folders/${folder.name.toLowerCase()}`}
                                className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
                            >
                                <span>{folder.name}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </aside>
        </>
    );
}
