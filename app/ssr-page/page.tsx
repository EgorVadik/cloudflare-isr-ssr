import { Post } from '@/app/page'
import styles from '@/app/page.module.css'
import Link from 'next/link'

export const revalidate = 0

export default async function page() {
    const data: Post[] = await fetch('http://localhost:3000/api/ssr', {
        cache: 'no-cache',
    }).then((res) => res.json())

    return (
        <main className={styles.main}>
            <h1>SSR</h1>
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
