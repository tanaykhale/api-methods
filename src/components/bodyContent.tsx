export default function bodyContent({ data }: { data: any[] }) {
  return (
    <>
      <div>
        {data.map((value: any) => (
          <p>{value.body}</p>
        ))}
      </div>
      ;
    </>
  );
}
