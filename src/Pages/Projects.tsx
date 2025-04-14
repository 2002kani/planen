import { Models } from "appwrite"
import { useLoaderData } from "react-router"

import Head from "@/Components/Head"
import TopAppBar from "@/Components/TopAppBar"
import { Page, PageHeader, PageTitle, PageList } from "@/Components/PageStructure"
import EmptyTaskState from "@/Components/EmptyTaskState"
import ProjectFormPopup from "@/Components/ProjectFormPopup"
import { Button } from "@/Components/ui/button"

import { Plus } from "lucide-react"
import ProjectCard from "@/Components/ProjectCard"

const TITLE_OF_PAGE = "Projekte";

type DataType = {
  projects: Models.DocumentList<Models.Document>;
}

const Projects = () => {

  const loaderData = useLoaderData() as DataType;
  const { projects } = loaderData

  console.log(projects);

  return (
    <>
      <Head title="Projektübersicht - planen" />
      <TopAppBar title={TITLE_OF_PAGE}/>

      <Page>
        <PageHeader>
          <div className="flex items-center gap-2">
            <PageTitle>{TITLE_OF_PAGE}</PageTitle>

            <ProjectFormPopup method="POST">
              <Button 
              variant="ghost" 
              size="icon"
              className="w-8 h-8"
              aria-label="Erstelle ein Projekt"
              >
                <Plus />
              </Button>
            </ProjectFormPopup>
          </div>
        </PageHeader>

        <PageList>
          <div className="h-8 flex items-center border-b">
            <div className="text-sm">
              {projects.total} Projekte
            </div>
          </div>

          <div className="">
            {projects && projects.documents && projects.documents.map((project) => (
              <ProjectCard key={project.$id} project={project} />
            ))}    
          </div>

          {projects.total === 0 && (
              <div className="mt-8">
                <EmptyTaskState type="project" />
              </div>
          )}
        </PageList>
      </Page>
    </>
  )
}

export default Projects