'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function BackBtn() {
    const router = useRouter()

    return (
        <button
            onClick={() => {
                router.back()
            }}
            style={{
                background: 'none',
                width: 'fit-content',
                border: 'none',
                fontSize: '1rem',
                cursor: 'pointer',
            }}
        >
            back
        </button>
    )
}
