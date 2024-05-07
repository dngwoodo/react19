import { useActionState } from "react";
import { updateName } from "./api/name";

// Using pending state from Actions
export function ActionState() {
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
        <button type="submit" disabled={isPending}>Update</button>
        {error && <p style={{ color: 'crimson' }}>{error}</p>}
      </form>
    </>
  );
}
