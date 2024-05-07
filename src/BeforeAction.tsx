import { useState } from "react";
import { updateName } from "./api/name";

// Before Actions
export function BeforeAction() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async () => {
    setIsPending(true);
    try {
      await updateName(name);
      setError('');
      window.alert('이름 변경 성공');
    } catch (error) {
      setError('이름 변경 실패');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {error && <p style={{ color: 'crimson' }}>{error}</p>}
    </div>
  );
}
