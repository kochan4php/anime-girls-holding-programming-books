import api from "@/configs/axios";
import blurDataUrl from "@/data/blur-data-url";
import Main from "@/layouts/main";
import Image from "next/image";
import Link from "next/link";

export default async function FolderName({ params }: any) {
    const response = await api.get(`/repos/cat-milk/Anime-Girls-Holding-Programming-Books/contents/${params.name}`);
    const contents = response.data.map((item: any) => ({ url: item.download_url, name: item.name, path: item.path }));

    return (
        <Main title={`Anime Girls Holding ${decodeURIComponent(params.name)} Books`}>
            {contents.map(({ url: content, name }: any, index: number) => (
                <div key={index} className="min-w-full h-auto sm:min-h-full rounded overflow-hidden shadow-md border border-slate-950 m-auto">
                    <Link href={content}>
                        <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="rounded-sm h-auto sm:h-[275px] w-full object-cover"
                            priority={true}
                            unoptimized={content.endsWith(".gif") ? true : false}
                            loading="eager"
                            quality={100}
                            src={content}
                            alt={name}
                            placeholder="blur"
                            blurDataURL={blurDataUrl}
                        />
                    </Link>
                </div>
            ))}
        </Main>
    );
}
