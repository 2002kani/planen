import Head from "@/Components/Head"
import TopAppBar from "@/Components/TopAppBar"
import { Page, PageHeader, PageTitle, PageList } from "@/Components/PageStructure"
import TaskCreateButton from "@/Components/TaskCreateButton"

const TITLE_OF_PAGE = "Inbox"

const Inbox = () => {
  return (
   <>
    <Head title="Eingang ToDos - planen"></Head>
    <TopAppBar title="Inbox" taskCount={20} />

    <Page>
      <PageHeader>
        <PageTitle>{TITLE_OF_PAGE}</PageTitle>
      </PageHeader>

      <PageList>
        <TaskCreateButton />
      </PageList>
    </Page>
   </>
  )
}

export default Inbox