import Head from "@/Components/Head"
import TopAppBar from "@/Components/TopAppBar"

const Inbox = () => {
  return (
   <>
    <Head title="Eingang ToDos - planen"></Head>
    <TopAppBar title="Inbox" taskCount={20} />

    <div className="h-[400vh]"></div>
   </>
  )
}

export default Inbox