import { Post } from '@/app/page'
import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(_req: Request) {
    console.log('SSR API called')

    const data: Post[] = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
    ).then((res) => res.json())

    console.log('SSR API data', { data })

    data.sort(() => Math.random() - 0.5)
    return new NextResponse(JSON.stringify(data), {
        status: 200,
    })
}
