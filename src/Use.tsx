
import { use } from "react";

export function Use({ namesPromise }: { namesPromise: Promise<{ id: number, name: string }[]> }) {
  if(!namesPromise) { // 조건문 안에서 사용이 가능 테스트
    return null;
  }

  /**
   * @description
   * usePromise 또는 context 와 같은 리소스의 값을 읽을 수 있게 해주는 React API입니다.
   * 공통
      - 조건문 안에서 사용이 가능합니다.
   * promise 관련
      - `use`는 Promise가 해결될 때까지 일시 중지됩니다.
      - 일시 중지 중에는 Suspense 가 표시됩니다.
      - use렌더링 시 생성된 Promise를 지원하지 않습니다.
   * context 관련 
      - 전달한 컨텍스트에 대한 값을 반환합니다. <ThemeContext.Provider value="dark"> 에서 value 를 의미.
      - 특정 컨텍스트에 대해 위에서 가장 가까운 컨텍스트 Provider 를 찾습니다.
   * @see https://react.dev/reference/react/use
   */
  const names = use(namesPromise);

  console.log('names', names); // 일시 중지 테스트

  return names.map(({ id, name }) => <div key={id}>{name}</div>)
}