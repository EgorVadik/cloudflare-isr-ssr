import { Post } from '@/app/page'
import { NextResponse } from 'next/server'

export async function GET(_req: Request) {
    const data: Post[] = await fetch(
        'https://cloudflare-worker-t1.hello-test-workers.workers.dev/',
        {
            cache: 'no-cache',
        }
    ).then((res) => res.json())

    data.sort(() => Math.random() - 0.5)
    return new NextResponse(JSON.stringify(data), {
        status: 200,
    })
}
