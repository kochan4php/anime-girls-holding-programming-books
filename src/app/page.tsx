import Sidebar from "@/components/sidebar";
import api from "@/configs/axios";

export default async function Home() {
    const folderRequest = await api.get("/repos/cat-milk/Anime-Girls-Holding-Programming-Books/contents");
    const folders = folderRequest.data.filter((folder: any) => {
        return !["README.md", ".DS_Store", "CONTRIBUTING.md"].includes(folder.name);
    });

    return (
        <div className="relative min-h-screen md:flex" data-dev-hint="container">
            <Sidebar folders={folders} />

            <main id="content" className="flex-1 p-6 lg:px-8 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}
