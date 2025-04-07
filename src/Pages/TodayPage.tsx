import { useLoaderData } from "react-router";

import { Models } from "appwrite"

import Head from "@/Components/Head"
import TopAppBar from "@/Components/TopAppBar"
import { Page, PageHeader, PageTitle, PageList } from "@/Components/PageStructure"
import EmptyTaskState from "@/Components/EmptyTaskState";
import { useState } from "react";
import TaskCard from "@/Components/TaskCard";

const TITLE_OF_PAGE = "Heute";

const TodayPage = () => {

   const { todayTasks } = useLoaderData<{ todayTasks: Models.DocumentList<Models.Document>}>(); 
   const [taskFormShow, setTaskFormShow] = useState(false)   

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
                {todayTasks && todayTasks.documents && todayTasks.documents.map(({ $id, content, due_date, completed, projectId }) => (
                    <TaskCard key={$id} id={$id} content={content} completed={completed} due_date={due_date} project={projectId} />
                ))}

                {!taskFormShow && !todayTasks && (
                    <EmptyTaskState type="today" />
                )}
            </PageList>
        </Page>
    </>
  )
}

export default TodayPage