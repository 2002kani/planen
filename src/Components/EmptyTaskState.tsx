import { inBoxBlueEmptyState, todayTaskEmptyState, upcomingTaskEmptyState, completedTaskEmptyState, projectTaskEmptyState } from "@/Assets"

type EmptyStateType = "today" | "inbox" | "upcoming" | "completed" | "project"

interface IEmptyTaskTypeProps {
    type?: EmptyStateType
}

const emptyStates = {
    today: {
      img: {
        src: todayTaskEmptyState,
        width: 226,
        height: 260,
      },
      title: 'Was musst du heute erledigen?',
      description:
        'Neue Aufgaben sind standardmäßig heute fällig. Klicke auf +, um eine hinzuzufügen!“',
    },
    inbox: {
      img: {
        src: inBoxBlueEmptyState,
        width: 344,
        height: 260,
      },
      title: 'Was geht dir durch den Kopf?',
      description:
        'Hier kannst du Aufgaben erfassen, die keiner bestimmten Kategorie zugeordnet sind. Klicke auf +, um eine hinzuzufügen!',
    },
    upcoming: {
      img: {
        src: upcomingTaskEmptyState,
        width: 208,
        height: 260,
      },
      title: 'Plane voraus – ganz entspannt!',
      description:
        'Aufgaben, die hier hinzugefügt werden, sind für die Zukunft geplant. Klicke auf +, um eine Aufgabe zu terminieren!',
    },
    completed: {
      img: {
        src: completedTaskEmptyState,
        width: 231,
        height: 260,
      },
      title: 'Du warst produktiv!',
      description:
        'Alle Aufgaben, die du erledigt hast, erscheinen hier. Mach weiter so!',
    },
    project: {
      img: {
        src: projectTaskEmptyState,
        width: 228,
        height: 260,
      },
      title: 'Lass uns etwas Großartiges bauen!',
      description:
        'Füge Aufgaben hinzu, die zu diesem Projekt gehören. Klicke auf +, um mit der Planung zu beginnen!',
    },
};

const EmptyTaskState: React.FC<IEmptyTaskTypeProps> = ({ type = "inbox" }) => {

    const { img, title, description } = emptyStates[type];

  return (
    <div className="max-w-[360px] mx-auto flex flex-col items-center text-center">
        {img && (
            <figure>
                <img 
                src={img.src} 
                alt="Inbox"
                width={img.width}
                height={img.height} 
                />
            </figure>
        )}

        <div className="mt-4 mb-2">{title}</div>
        <p className="text-sm text-muted-foreground px-4">{description}</p>
    </div>
  )
}

export default EmptyTaskState