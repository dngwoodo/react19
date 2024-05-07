import { ReactNode, useActionState } from "react";
import { updateName } from "./api/name";
import { useFormStatus } from "react-dom";

// Using pending state from Actions
export function FormStatus() {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      try {
        await updateName(formData.get('name'));
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
