import { useLoaderData, useFetcher } from "react-router"
import { useState } from "react"

import Head from "@/Components/Head"
import TopAppBar from "@/Components/TopAppBar"
import EmptyTaskState from "@/Components/EmptyTaskState"
import { Page, PageHeader, PageList, PageTitle } from "@/Components/PageStructure"
import { Button } from "@/Components/ui/button"
import TaskCard from "@/Components/TaskCard"
import ProjectActionMenu from "@/Components/ProjectActionMenu"
import TaskCardSkeleton from "@/Components/TaskCardSkeleton"
import TaskCreateButton from "@/Components/TaskCreateButton"
import TaskForm from "@/Components/TaskForm"

import { MoreHorizontal } from "lucide-react"

import type { Models } from "appwrite"

const ProjectDetails = () => {

    const fetcher = useFetcher();
    const { projects } = useLoaderData<{ projects: Models.Document }>()
    
    // Get uncompleted Tasks
    const projectTasks = projects.tasks.filter(
        (i: Models.Document) => !i.completed) as Models.Document[];

    // Sort tasks by due date
    projectTasks.sort((a, b) => {
        return a.due_date < b.due_date ? -1 : 1;
    });

    const [taskFormShow, setTaskFormShow] = useState(false);

  return (
    <>
        <Head title="Projekt Informationen - planen" />
        <TopAppBar title="Projekt Details" taskCount={10} />

        <Page>
            <PageHeader>
                <div className="flex items-center gap-3">
                    <PageTitle> {projects.name} </PageTitle>
                    <ProjectActionMenu 
                    defaultFormData={{
                        id: projects.$id,
                        name: projects.name,
                        color_name: projects.color_name,
                        color_hex: projects.color_hex
                    }}>
                        <Button variant="ghost" size="icon" className="w-8 h-8 shrink-0" aria-label="Mehr">
                            <MoreHorizontal />
                        </Button>
                    </ProjectActionMenu>
                </div>
            </PageHeader>

            <PageList>
                {projectTasks.map(({ $id, content, completed, due_date }) => (
                    <TaskCard key={$id} id={$id} content={content} completed={completed} due_date={due_date} project={projects} />
                ))}

                {fetcher.state !== "idle" && <TaskCardSkeleton />}

                {!taskFormShow && (
                    <TaskCreateButton onClick={() => setTaskFormShow(true)} />
                )}

                {!projectTasks.length && !taskFormShow && (
                    <EmptyTaskState type="project" />
                )}

                {taskFormShow && (
                    <TaskForm
                    className="mt-2"
                    mode="create"
                    onCancel={() => setTaskFormShow(false)}
                    defaultFormData={{
                        content: "",
                        due_date: null,
                        projectId: projects.$id
                    }}
                    onSubmit={(formData) => {
                        fetcher.submit(JSON.stringify(formData), {
                            action: "/app",
                            method: "POST",
                            encType: "application/json"
                        });
                    }}
                    />
                )}
            </PageList>
        </Page>
    </>
  )
}

export default ProjectDetails