import { act, useState } from "react"
import { useFetcher } from "react-router"

import Head from "@/Components/Head"
import TopAppBar from "@/Components/TopAppBar"
import { Page, PageHeader, PageTitle, PageList } from "@/Components/PageStructure"
import TaskCreateButton from "@/Components/TaskCreateButton"
import EmptyTaskState from "@/Components/EmptyTaskState"
import TaskForm from "@/Components/TaskForm"

const TITLE_OF_PAGE = "Inbox"

const Inbox = () => {

  const fetcher = useFetcher();

  const [taskFormShow, setTaskFormShow] = useState(false);

  return (
   <>
    <Head title="Eingang ToDos - planen"></Head>
    <TopAppBar title="Inbox" taskCount={20} />

    <Page>
      <PageHeader>
        <PageTitle>{TITLE_OF_PAGE}</PageTitle>
      </PageHeader>

      <PageList>
        {!taskFormShow && <TaskCreateButton onClick={() =>setTaskFormShow(!taskFormShow)}/>}

        {!taskFormShow && (
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