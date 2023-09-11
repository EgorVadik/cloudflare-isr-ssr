'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function RevalidateBtn() {
    const router = useRouter()

    return (
        <button
            style={{
                padding: '0.5rem 1rem',
                cursor: 'pointer',
            }}
            onClick={async () => {
                const data = await fetch('/api/revalidate?path=/isr-page', {
                    method: 'POST',
                }).then((res) => res.json())
                console.log(data)

                router.refresh()
            }}
        >
            Force Revalidate
        </button>
    )
}
