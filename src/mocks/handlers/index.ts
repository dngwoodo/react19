import { http, HttpResponse } from 'msw';

export const handlers = [
  http.put('http://localhost:5173/api/v1/name', async ({ request }) =>
    {
      const { name } = await request.json() as { name: string };

      if(name === '') {
        throw new HttpResponse(null, { status: 400 })
      }

      return HttpResponse.json({
        id: 'abc-123',
      });
    }
  ),
];
