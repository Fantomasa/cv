export default async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <div>Project id: {id}</div>;
}
