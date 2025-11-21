import Pagintaion from "./components/Pagintaion";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <div>
      Hello World
      <Pagintaion itemCount={100} pageSize={10} currentPage={parseInt(searchParams.page)} />
    </div>
  );
}
