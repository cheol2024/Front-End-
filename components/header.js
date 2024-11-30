import Link from 'next/link';
import Image from 'next/image';
import ThemeSwitchButton from './theme-switch';

export default function Header() {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                    <Link href="/">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <Image
                                src="/inhatc.png" // public 디렉토리 기준 경로
                                alt="Inhatc Logo"
                                width={70} // 이미지 너비
                                height={70} // 이미지 높이
                                className="rounded-full" // 이미지 둥글게 처리 (원 형태)
                            />
                            <span className="ml-3 text-xl">202244034 한희철</span>
                        </a>
                    </Link>

                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

                        <Link href="/">
                            <a className="mr-5 hover:text-gray-900">홈</a>
                        </Link>

                        <Link href="/projects">
                            <a className="mr-5 hover:text-gray-900">프로젝트</a>
                        </Link>

                        <a href="https://open.kakao.com/o/sBuDMm2g" className="mr-5 hover:text-gray-900">연락하기</a>

                    </nav>
                    {/* 다크모드 토글 버튼 작업해야함 */}
                    <ThemeSwitchButton />
                </div>
            </header>
        </>
    );
}
