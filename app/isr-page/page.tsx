import { Post } from '@/app/page'
import styles from '@/app/page.module.css'
import RevalidateBtn from '@/components/revalidate-btn'
import Link from 'next/link'

export const revalidate = 30

export default async function page() {
    const data: Post[] = await fetch('http://localhost:3000/api/ssr').then(
        (res) => res.json()
    )

    return (
        <main className={styles.main}>
            <div
                style={{
                    display: 'flex',
                    gap: '1rem',
                }}
            >
                <h1>ISR</h1>
                <RevalidateBtn />
            </div>
            <Link href='/'> Home </Link>
            {data.map((post) => (
                <Link
                    href={`/post/${post.id}`}
                    key={post.id}
                    className={styles.post}
                >
                    <h2>
                        {post.title} (id: {post.id})
                    </h2>
                    <p>{post.body}</p>
                </Link>
            ))}
        </main>
    )
}
