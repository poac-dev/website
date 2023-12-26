import { HomePage } from './home-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Poac: Package Manager for C++",
};

export default function Home() {
    return (
        <main className="container mx-auto max-w-7xl px-6 flex-grow">
            <section className="flex flex-col items-center justify-center">
                <div className="text-center">
                    <div className="inline-block">
                        <h1 className="text-3xl lg:text-6xl">A Poac's comminity registry</h1>
                        {/* <HomePage /> */}
                    </div>
                </div>
            </section>
        </main>
    )
};
