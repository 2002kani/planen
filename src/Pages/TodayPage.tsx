import Head from "@/Components/Head"
import TopAppBar from "@/Components/TopAppBar"
import { Page, PageHeader, PageTitle, PageList } from "@/Components/PageStructure"
import { todayTaskEmptyState } from "@/Assets";

const TITLE_OF_PAGE = "Heute";

const TodayPage = () => {
  return (
    <>
        <Head title="Heutige ToDos - planen" />
        <TopAppBar title="Eingang" taskCount={10} />

        <Page>
            <PageHeader>
                <PageTitle>
                    {TITLE_OF_PAGE}
                </PageTitle>
            </PageHeader>

            <PageList>
                
            </PageList>
        </Page>
    </>
  )
}

export default TodayPage