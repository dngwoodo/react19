import { http, HttpResponse, delay } from 'msw';

export const handlers = [
  http.put('http://localhost:5173/api/v1/name', async ({ request }) =>
    {
      await delay(2000);

      const { name } = await request.json() as { name: string };

      if(name === '') {
        throw new HttpResponse(null, { status: 400 })
      }

      return HttpResponse.json({
        id: 'abc-123',
      });
    }
  ),

  http.get('http://localhost:5173/api/v1/name', async () =>
    {
      await delay(2000);

      return HttpResponse.json([
        {
          id: 1,
          name: 'Alice',
        },
        {
          id: 2,
          name: 'Bob',
        },
        {
          id: 3,
          name: 'Charlie',
        }
    ]);
    }
  ),
];
