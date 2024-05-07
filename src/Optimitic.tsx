import { ReactNode, useActionState, useOptimistic, useState } from "react";
import { updateName } from "./api/name";
import { useFormStatus } from "react-dom";

// Using pending state from Actions
export function Optimistic() {
  const [names, setNames] = useState(['Alice']);

  /**
   * @see https://ko.react.dev/reference/react/useOptimistic
   */
  const [
    optimisticNames, 
    setOptimisticName
  ] = useOptimistic(
    names, 
    (currentName, optimisticName: string) => ([
      ...currentName,
      optimisticName
    ])
  ) // 비동기 작업 완료 or 오류 발생 시 기본 값으로 업데이트

  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      try {
        const newName = formData.get('name');
        setOptimisticName(newName); // 비동기 작업동안 UI를 업데이트
        await updateName(newName);
        setNames(prev => [...prev, newName]);
        window.alert('이름 변경 성공');
      } catch (error) {
        return '이름 변경 실패';
      }
    },
    null,
  );

  return (
    <>
      {isPending && <p>Loading...</p>}
      <p>Your name is: {optimisticNames.join('->')}</p>
      <form action={submitAction}>
        <input type="text" name="name" />
        <DsButton>Update</DsButton>
        {error && <p style={{ color: 'crimson' }}>{error}</p>}
      </form>
    </>
  );
}

function DsButton ({ children }: { children: ReactNode }) {
  /**
   * @description
   * Context 와 같이 props drilling 을 만들지 않고 사용할 수 있습니다.
   * @see https://ko.react.dev/reference/react-dom/hooks/useFormStatus
   */
  const { pending, data, method, action } = useFormStatus()

  console.log(data && data.get('name'), method, action)

  return (
    <button type="submit" disabled={pending}>{children}</button>
  )
}
