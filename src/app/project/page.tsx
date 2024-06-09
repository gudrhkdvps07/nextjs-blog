import React from 'react'
import Link from 'next/link'

export default function ProjectPage() {
  const name = '박윤지'

  return (
    <div className="text-center font-bold text-black">
      <h1> {name}의 프로젝트</h1>
      <ul>
        <li>
          <Link href="/project/demo">HCJ Demo</Link>
        </li>
        <li>
          <a href="https://midterm-jbu-yun.vercel.app/">중간고사 홈페이지</a>
        </li>
      </ul>
    </div>
  )
}
