import Head from "@/Components/Head"
import { Page, PageHeader, PageTitle, PageList } from "@/Components/PageStructure"
import TopAppBar from "@/Components/TopAppBar"

const TITLE_OF_PAGE = "Anstehend"

const UpcomingPage = () => {
  return (
    <>
        <Head title="Anstehende ToDos - planen" />
        <TopAppBar title="Anstehend" taskCount={20} />

        <Page>
            <PageHeader>
                <PageTitle>{TITLE_OF_PAGE}</PageTitle>
            </PageHeader>
        </Page>
    </>
  )
}

export default UpcomingPage