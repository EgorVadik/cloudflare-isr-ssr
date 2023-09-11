import { Post } from '@/app/page'
import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(_req: Request) {
    const data: Post[] = await fetch(
        'https://cloudflare-worker-t1.hello-test-workers.workers.dev/',
        {
            next: {
                revalidate: 30,
            },
        }
    ).then((res) => res.json())

    data.sort(() => Math.random() - 0.5)
    return new NextResponse(JSON.stringify(data), {
        status: 200,
    })
}
