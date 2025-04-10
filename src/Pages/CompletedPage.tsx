import { useLoaderData } from "react-router"
import { Models } from "appwrite"

import { Page, PageHeader, PageTitle, PageList } from "@/Components/PageStructure"
import Head from "@/Components/Head"
import TopAppBar from "@/Components/TopAppBar"
import EmptyTaskState from "@/Components/EmptyTaskState"
import TaskCard from "@/Components/TaskCard"

const TITLE_OF_PAGE = "Abgeschlossen"

const CompletedPage = () => {

  const { completedTasks } = useLoaderData<{ completedTasks: Models.DocumentList<Models.Document>}>();
  
  return (
    <>
        <Head title="Abgeschlossene ToDos - planen" />
        <TopAppBar title="Abgeschlossen" taskCount={20} />

        <Page>
            <PageHeader>
                <PageTitle>{TITLE_OF_PAGE}</PageTitle>
            </PageHeader>

            <PageList>
              {!completedTasks && (
                <EmptyTaskState type="completed" />
              )}

              {completedTasks && completedTasks.documents && completedTasks.documents.map(({$id, content, completed, due_date, project}) => (
                <TaskCard key={$id} id={$id} content={content} completed={completed} due_date={due_date} project={project} />
              ))}
            </PageList>
        </Page>
    </>
  )
}

export default CompletedPage