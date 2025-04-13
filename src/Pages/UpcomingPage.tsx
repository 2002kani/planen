import { useLoaderData } from "react-router"
import { useState } from "react"

import { Models } from "appwrite"

import Head from "@/Components/Head"
import { Page, PageHeader, PageTitle, PageList } from "@/Components/PageStructure"
import TopAppBar from "@/Components/TopAppBar"
import TaskCard from "@/Components/TaskCard"
import EmptyTaskState from "@/Components/EmptyTaskState"

const TITLE_OF_PAGE = "Anstehend"

const UpcomingPage = () => {

    const { upcomingTasks } = useLoaderData<{ upcomingTasks: Models.DocumentList<Models.Document>}>();
    const [taskFormShow, setTaskFormShow] = useState(false);
    
  return (
    <>
        <Head title="Anstehende ToDos - planen" />
        <TopAppBar title="Anstehend" taskCount={upcomingTasks.total} />

        <Page>
            <PageHeader>
                <PageTitle>{TITLE_OF_PAGE}</PageTitle>
            </PageHeader>
            <PageList>
                {upcomingTasks && upcomingTasks.documents && upcomingTasks.documents.map(({ $id, content, completed, due_date, projectId }) => (
                    <TaskCard key={$id} id={$id} content={content} completed={completed} due_date={due_date} project={projectId} />
                ))}

                {!upcomingTasks && !taskFormShow && (
                    <>
                        <EmptyTaskState type="upcoming" />
                        <h1>hi</h1>
                    </>
                )} 
            </PageList>
        </Page>
    </>
  )
}

export default UpcomingPage