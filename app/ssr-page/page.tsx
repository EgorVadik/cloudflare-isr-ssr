import { Post } from '@/app/page'
import styles from '@/app/page.module.css'
import Link from 'next/link'
import { SERVER_URL } from '@/constants'

export const runtime = 'edge'
export const revalidate = 0
export const dynamic = 'force-dynamic'

export default async function page() {
    const data: Post[] = await fetch(`${SERVER_URL}/api/ssr`).then((res) =>
        res.json()
    )

    // const data: Post[] = await fetch(
    //     'https://cloudflare-worker-t1.hello-test-workers.workers.dev/',
    //     {
    //         next: {
    //             revalidate: 0,
    //         },
    //     }
    // ).then((res) => res.json())

    // data.sort(() => Math.random() - 0.5)

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
