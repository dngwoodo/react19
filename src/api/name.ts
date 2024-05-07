export async function updateName(name: string) {
  const response = await fetch("http://localhost:5173/api/v1/name", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  return await response.json();
}