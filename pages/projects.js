import Layout from "../components/layout";
import Head from "next/head";
import ProjectItem from "../components/projects/project-item";
import { useState } from "react";

export default function Projects({ projects }) {
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
    const itemsPerPage = 6; // 한 페이지에 표시할 프로젝트 수

    // 데이터 검증 및 기본값 설정
    const results = projects?.results || [];
    const totalProjects = results.length;

    // 현재 페이지의 시작 및 끝 인덱스 계산
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // 현재 페이지에 표시할 프로젝트
    const currentItems = results.slice(startIndex, endIndex);

    // 총 페이지 수 계산
    const totalPages = Math.ceil(totalProjects / itemsPerPage);

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
                <Head>
                    <title>202244034 한희철</title>
                    <meta name="description" content="안녕하세요" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                {/* 프로젝트 목록 */}
                <div className="grid grid-cols-1 gap-8 p-12 m-4 sm:grid-cols-2 lg:grid-cols-3">
                    {currentItems.map((aProject) => (
                        <ProjectItem key={aProject.id} data={aProject} />
                    ))}
                </div>

                {/* 페이지네이션 */}
                {totalPages > 1 && (
                    <div className="flex mt-4">
                        <button
                            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:opacity-50"
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            이전
                        </button>
                        <span className="px-4 py-2">
                            {currentPage} / {totalPages}
                        </span>
                        <button
                            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:opacity-50"
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            다음
                        </button>
                    </div>
                )}
            </div>
        </Layout>
    );
}

// 각 요청 때마다 호출
export async function getServerSideProps() {
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
            Authorization: 'Bearer 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',
        },
        body: JSON.stringify({
            sorts: [
                {
                    property: "title",
                    direction: "descending",
                },
            ],
            page_size: 100,
        }),
    };

    const res = await fetch('https://api.notion.com/v1/databases/14b845da-efb7-8063-af09-da9c569b8a9d/query', options);

    const projects = await res.json();

    return {
        props: { projects }, // 데이터를 props로 전달
    };
}