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
      <br />
      <br />
      <br />
      <br />
      <br />

      <span className="bg-blue-400 font-bold px-4 py-1 rounded-lg">
        Tailwind 장점
      </span>
      <br />
      <ol className="pt-10 m-10">
        <li>
          1. 코드의 직관성은 좋으나 가시성은 떨어집니다. Headwind와 같은
          플러그인( 정렬 기능 )을 활용해 가독성을 높일 수 있습니다.
        </li>
        <br />
        <li>
          2. 미리 정의된 스타일 시트( CSS 파일 )의 용량이 매우 커집니다.
          클래스명을 재사용하기 때문에 컴포넌트가 많아져도 CSS 파일 용량이
          상대적으로 늘어나지 않는 장점은 있습니다.
        </li>
        <br />
        <li>
          3. 개발모드: 2.1 버전부터 JIT(Just-In-Time Mode)모드를 지원하면서
          변경된 소스파일을 탐지하여 해당 클래스만 스타일시트에 추가
        </li>
        <br />
        <li>
          4. 배포모드: 사용하지 않는 유틸리티 스타일 시트( CSS 파일 ) 제거하는
          purge 옵션 제공
        </li>
        <br />
        <li>
          5. SS 속성들의 우선순위 문제: Tailwind CSS는 클래스가 출현한 빈도 /
          출현한 순서에 상관없이 정의한 순서에 따라 스타일을 구성합니다.
          twin.macro를 통해 class에 선언된 여러 클래스 중 뒤에 위치한 클래스가
          최종적으로 적용시킬 수 있습니다. v3에서 아직 twin.macro 이슈가
          존재합니다. ( 불안정 )
        </li>
        <br />
        <li>
          6. 특정 프리픽스는 모든 CSS 속성을 지원하지 않습니다. hover: / focus:
          등 특정 프리픽스는 일부 속성만 사용 가능합니다. 모든 속성을 지원하기
          위해서는 커스터마이징을 통해 추가 설정을 넣어주면 됩니다.
        </li>
        <br />
        <br />
        <br />
        <br />
        <br />
      </ol>

      <span className="bg-blue-300 font-bold px-4 py-1 rounded-lg">
        Tailwind 단점
      </span>
      <br />
      <ol className="pt-10 m-10">
        <li>
          1. 클래스의 이름을 고민하지 않아도 됩니다. 쉽게 반응형 페이지를 구현할
          수 있도록 지원합니다. 기본적으로 제공하는 BreakPoint가 존재하기 때문에
          복잡한 반응형 디자인도 쉽게 구현할 수 있습니다.
        </li>
        <br />
        <li>
          2. 따로 커스터마이징이 가능합니다. 기본 정의된 테마를 확장할 수도 있고
          새로운 속성을 추가할 수 있습니다.
        </li>
        <br />
        <li>
          3. 반복되는 스타일은 컴포넌트 추상화, 클래스 추상화를 통해서 재사용
          가능합니다.
        </li>
        <br />
        <li>4. 공식문서가 매우 친절하고 학습 난이도가 낮습니다.</li>
        <br />
        <li>
          5. 다크 모드 지원 dark: 프리픽스 방식으로 지원 ( 스타일을 직접 추가
          하는 방식 ) 조금 불편한 방법일 수도 있지만 모듈화가 잘 이루어지면
          나중에 dark 클래스 추가만으로도 손쉽게 다크모드를 적용할 수 있습니다.
        </li>
        <br />
        <li>
          6. Tailwind CSS 공식 커뮤니티가 존재하며 컴포넌트 또는 완성된
          페이지들도 제공합니다.
        </li>
        <br />
        <br />
        <br />
        <br />
        <br />
      </ol>
    </div>
  )
}
