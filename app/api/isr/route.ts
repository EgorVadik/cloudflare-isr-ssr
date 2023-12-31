import { Post } from '@/app/page'
import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(_req: Request) {
    console.log('ISR API called')

    const data: Post[] = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            next: {
                revalidate: 30,
            },
        }
    ).then((res) => res.json())

    console.log('ISR API data', { data })

    data.sort(() => Math.random() - 0.5)
    return new NextResponse(JSON.stringify(data), {
        status: 200,
    })
}
