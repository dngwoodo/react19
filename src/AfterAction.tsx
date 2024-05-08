import { useState, useTransition } from "react";
import { updateName } from "./api/name";

// Using pending state from Actions
export function AfterAction() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    /**
     * @description
     * - useTransition 은 UI를 차단하지 않고 상태를 업데이트할 수 있는 React Hook입니다.
     * - 즉, 상태변화의 우선순위를 낮춰주는 역할을 수행합니다.
     * - 원래 렌더링 과정에 리액트가 개입할 수 없지만 react18 에서 제공하는 동시성을 통해 렌더링 도중에 리액트가 개입될 수 있습니다.
     * - 동시성 관련되서는 해당 문서를 참고하시면 좋습니다. 
     *   https://deview.kr/data/deview/session/attach/1_Inside%20React%20(%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%B5%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%80%E1%85%AE%E1%84%92%E1%85%A7%E1%86%AB%E1%84%92%E1%85%A1%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%80%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF).pdf
     * @see https://ko.react.dev/reference/react/useTransition#marking-a-state-update-as-a-non-blocking-transition
     */
    startTransition(async () => {
      try {
        await updateName(name);
        setError('');
        window.alert('이름 변경 성공');
      } catch (error) {
        setError('이름 변경 실패');
      }
    })
  };

  return (
    <div>
      {isPending && <p>Loading...</p>}
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {error && <p style={{ color: 'crimson' }}>{error}</p>}
    </div>
  );
}
