import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export const runtime = 'edge'

export async function POST(request: Request) {
    console.log('Revalidate API called')
    const { searchParams } = new URL(request.url)
    const path = searchParams.get('path')

    if (!path) {
        return NextResponse.json(
            { message: 'Missing path param' },
            { status: 400 }
        )
    }

    revalidatePath(path)

    console.log('Revalidate API data', { path })

    return new NextResponse(
        JSON.stringify({ revalidated: true, now: Date.now() }),
        {
            status: 200,
        }
    )
}
