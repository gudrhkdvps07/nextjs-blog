import Image from 'next/image'

export default function Home() {
  return (
    <div className="text-center pt-1">
      <span className="bg-blue-500 font-bold px-4 py-1 rounded-lg">
        Tailwind란?
      </span>
      <p className="pt-10 m-10">
        Utility-First를 지향하는 CSS 프레임워크입니다.
        <br />
        <br />
        Utility-First: 미리 세팅된 유틸리티 클래스를 활용하여 HTML 코드 내에서
        스타일링 CSS의 각 속성들을 클래스에 직관적으로 표현함으로써 효율적으로
        사용할 수 있게 됩니다. <br />
        <br />
        스타일링에 필요한 대부분의 속성들이 클래스 형태로 사전에 정의되어 있고
        사용자는 클래스들을 조합해서 사용하면 됩니다.
      </p>
    </div>
  )
}
