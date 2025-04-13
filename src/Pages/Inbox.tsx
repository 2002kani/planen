import { useState } from "react"
import { useFetcher, useLoaderData } from "react-router"

import { Models } from "appwrite"

import Head from "@/Components/Head"
import TopAppBar from "@/Components/TopAppBar"
import { Page, PageHeader, PageTitle, PageList } from "@/Components/PageStructure"
import TaskCreateButton from "@/Components/TaskCreateButton"
import EmptyTaskState from "@/Components/EmptyTaskState"
import TaskForm from "@/Components/TaskForm"
import TaskCard from "@/Components/TaskCard"
import TaskCardSkeleton from "@/Components/TaskCardSkeleton"

const TITLE_OF_PAGE = "Eingang"

const Inbox = () => {

  const fetcher = useFetcher();
  const { tasks } = useLoaderData<{ tasks: Models.DocumentList<Models.Document>}>();

  const [taskFormShow, setTaskFormShow] = useState(false);

  return (
   <>
    <Head title="Eingang ToDos - planen"></Head>
    <TopAppBar title={TITLE_OF_PAGE} taskCount={tasks.total} />

    <Page>
      <PageHeader>
        <PageTitle>{TITLE_OF_PAGE}</PageTitle>
      </PageHeader>

      <PageList>
        {tasks.documents.map(({ $id, content, completed, due_date, projectId }) => (
          <TaskCard key={$id} id={$id} content={content} completed={completed} due_date={due_date} project={projectId} />
        ))}

        {fetcher.state !== "idle" && <TaskCardSkeleton />}

        {!taskFormShow && <TaskCreateButton onClick={() => setTaskFormShow(!taskFormShow)}/>}

        {!taskFormShow && !tasks && (
          <EmptyTaskState type="inbox"/>
        )} 

        {taskFormShow && (
          <TaskForm 
          mode="create" 
          className="mt-12" 
          onCancel={() => setTaskFormShow(!taskFormShow)}
          onSubmit={(formData) => {{
            fetcher.submit(JSON.stringify(formData), {
              action: "/app",
              method: "POST",
              encType: "application/json"
            })
          }; setTaskFormShow(!taskFormShow);}}
          />
        )}
      </PageList>
    </Page>
   </>
  )
}

export default Inbox