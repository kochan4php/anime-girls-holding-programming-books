import Sidebar from "@/components/sidebar";
import api from "@/configs/axios";

export default async function Main({ children }: { children: React.ReactNode }) {
    const folderRequest = await api.get("/repos/cat-milk/Anime-Girls-Holding-Programming-Books/contents");
    const folders = folderRequest.data.filter((folder: any) => {
        return !["README.md", ".DS_Store", "CONTRIBUTING.md"].includes(folder.name);
    });

    return (
        <div className="relative min-h-screen md:flex md:justify-between w-[100%]">
            <Sidebar folders={folders} />

            <main className="w-full absolute right-0 top-0 bottom-0 md:w-[80%] py-8 px-4 md:p-6 mt-10 md:mt-0 overflow-y-auto">
                <h1 className="text-center mb-5 text-2xl md:text-3xl font-bold">Anime Girls Holding Programming Books</h1>
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-content-center gap-4 justify-center">{children}</div>
            </main>
        </div>
    );
}