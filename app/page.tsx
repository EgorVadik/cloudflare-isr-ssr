import styles from './page.module.css'
import Link from 'next/link'

export type Post = {
    id: number
    userId: number
    title: string
    body: string
}

export default async function Home() {
    return (
        <main
            className={styles.main}
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
            }}
        >
            <Link
                href='/ssr-page'
                style={{
                    fontSize: '2rem',
                }}
            >
                SSR
            </Link>
            <Link
                href='/isr-page'
                style={{
                    fontSize: '2rem',
                }}
            >
                ISR
            </Link>
        </main>
    )
}
