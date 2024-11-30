import Animation from "./animation";
import Link from 'next/link';

export default function Icon() {
    return (
        <>
            <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Animation />
                </div>
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Front-End 개발실습
                            <br className="hidden lg:inline-block" />
                            202244034 한희철
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            이번 학기 동안 Front-End 개발실습 강의를 통해 많은 것을 배울 수 있었습니다.
                            처음에는 낯설고 어렵게 느껴졌던 기술들이었지만, 교수님의 꼼꼼하고 친절한 설명 덕분에 점차 이해하고 실력을 쌓을 수 있었습니다.

                            특히 실무에서 활용 가능한 실습과 프로젝트를 통해 이론뿐만 아니라 실제 개발 환경에 대한 감각도 익힐 수 있어 정말 유익한 시간이었습니다.
                            교수님께서 수업 시간뿐만 아니라 항상 학생들의 질문에 성심껏 답해 주시고, 끝까지 격려해 주신 점 진심으로 감사드립니다.

                            이번 강의를 통해 얻은 지식과 경험을 바탕으로 앞으로도 꾸준히 성장하며 개발자로서의 꿈을 실현해 나가겠습니다.
                            다시 한 번 감사드리며, 항상 건강하시고 행복 가득하시길 바랍니다! 😊
                        </p>
                        <div className="flex justify-center">
                            <Link href="/projects">
                                <a className="btn-project">
                                    프로젝트 보러가기
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
