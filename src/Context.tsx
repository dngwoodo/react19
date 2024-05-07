import { createContext, use } from "react";

/**
 * @description
 * 이제 NameContext.Provider 를 사용하지 않고 NameContext 그대로 사용할 수 있습니다.
 * codemod 제공 예정
 */
export const NameContext = createContext('');

export function NameContextChild() { 
  const value = use(NameContext)

  return <div>{value}</div>
}