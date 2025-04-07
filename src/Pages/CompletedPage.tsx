import { Page, PageHeader, PageTitle, PageList } from "@/Components/PageStructure"
import Head from "@/Components/Head"
import TopAppBar from "@/Components/TopAppBar"

const TITLE_OF_PAGE = "Abgeschlossen"

const CompletedPage = () => {
  return (
    <>
        <Head title="Abgeschlossene ToDos - planen" />
        <TopAppBar title="Completed" taskCount={20} />

        <Page>
            <PageHeader>
                <PageTitle>{TITLE_OF_PAGE}</PageTitle>
            </PageHeader>
        </Page>
    </>
  )
}

export default CompletedPage