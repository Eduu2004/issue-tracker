import Pagintaion from "./components/Pagintaion";

export default function Home() {
  return (
    <div>
      Hello World
      <Pagintaion itemCount={100} pageSize={10} currentPage={2} />
    </div>
  )
}
