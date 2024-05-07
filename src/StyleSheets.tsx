export function StyleSheets() {
  /**
   * @description
   * 이제 우선순위를 사용하여 스타일 시트를 삽입할 수 있습니다.
   * DOM에 중복된 스타일시트 링크가 발생하지 않습니다. (같은 컴포넌트를 렌더링하더라도 한개만 들어가게 됩니다.)
   * 
   */

  return (
    <div>
      <StyleSheet1 />
      <StyleSheet2 />
    </div>
  )
}

function StyleSheet1() {
  return (
    <div>
      <link rel="stylesheet" href="bar" precedence="high" />
      <link rel="stylesheet" href="foo" precedence="default" />
    </div>
  )
}

function StyleSheet2() {
  return (
    <div>
      {/* 우선순위에 따라 삽입되며 현재 상황에선 bar 밑으로 들어가게 됨. */}
      <link rel="stylesheet" href="foobar" precedence="high" />
    </div>
  )
}