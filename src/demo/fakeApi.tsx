export interface Data {
  id: number;
  title: string;
}

export default function fakeApi(page: number) {
  const perPage = 10;
  const start = page * perPage;
  const end = start + perPage;
  const data: Data[] = [];
  for (let i = start; i < end; i++) {
    data.push({ id: i, title: `User ${i}` });
  }

  return new Promise<Data[]>(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
}
