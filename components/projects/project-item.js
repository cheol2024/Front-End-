import Image from 'next/image';

export default function ProjectItem({ data }) {
    const title =
        data.properties?.['이름\\n']?.title?.[0]?.plain_text || '제목 없음';
    const youtube = data.properties?.Youtube?.url || '유튜브 주소 없음';

    const github = data.properties?.Github?.url || '깃허브 주소 없음';
    const description =
        data.properties?.Description?.rich_text?.[0]?.plain_text ||
        '설명이 없습니다.';

    const imgSrc =
        data.cover?.file?.url || data.cover?.external?.url || '/placeholder.png';

    const tags = data.properties?.Tags?.multi_select || [];
    const start = data.properties?.WorkPeriod?.date?.start || '시작일 없음';
    const end = data.properties?.WorkPeriod?.date?.end || '종료일 없음';

    const calculatedPeriod = (start, end) => {
        if (!start || !end) return '기간 정보 없음';

        const startDate = new Date(start);
        const endDate = new Date(end);

        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);

        return `${result}일`;
    };

    return (
        <div className="project-card">
            <Image
                className="rounded-t-xl"
                src={imgSrc}
                alt="cover image"
                width="100%"
                height="50%"
                layout="responsive"
                objectFit="cover"
                quality={100}
            />

            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-4 text-xl">{description}</h3>
                <a href={github}>깃허브 바로가기</a>

                <a href={youtube}>유튜브 시연영상 보러가기</a>

                <p className="my-1">
                    작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)})
                </p>
                <div className="flex items-start mt-2">
                    {tags.map((aTag) => (
                        <h1
                            className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
                            key={aTag.id}
                        >
                            {aTag.name}
                        </h1>
                    ))}
                </div>
            </div>
        </div>
    );
}
