import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'PeopleFinder',
    description: 'Quick Name Search',
}

type Props = {
    children: React.ReactNode
}

export default function RootLayout(props: Props) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="flex min-h-screen flex-col overflow-y-auto overflow-x-hidden items-center p-5 md:p-10 lg:p-24 bg-custom-bg">
                    <Header />
                    <section className="flex flex-col items-center w-full flex-1">
                        {props.children}
                    </section>
                    <Footer />
                </main>
            </body>
        </html>
    )
}
