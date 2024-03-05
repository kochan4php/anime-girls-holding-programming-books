import Link from "next/link";

export default function NotFound() {
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <h1 className="text-9xl md:text-[12rem] font-extrabold text-white tracking-wider">404</h1>
            <div className="bg-[#FF6A3D] px-2 text-lg rounded rotate-12 absolute">Page Not Found</div>
            <Link
                href="/"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                Go Home
            </Link>
        </main>
    );
}
