# ToDos Application API

## What we will have in this application?

### Project
- Start on the left hand side
- The project will have many todos board view
- CRUD a project
- Project will have: uuid, title, position, create_at, updated_at, deleted_at
- Project may be have multiple tags (**will implement in the future**)

### Priority
- Will have 4 master priority and can't be CRUD this.
- 4 master priority: low, normal, high, highest
- Priority will have: uuid, title, color, is_master, created_at, updated_at, deleted_at

### Task
- CRUD a task
- Task will have many tags
- Task will have one priority
- Task will have: uuid, priority_id, project_id, title, description, status, start_time, end_time, created_at, updated_at, deleted_at

    - Status will be open, in-progress, completed and archived
        - Open: new task
        - In-progress: working task
        - Completed: complete task
        - Archived: archive task. We will have a link or a button that direct to archived list view and can recover a archived task

    - Start Time: can null. This is the start time of the task.
        - 10 mins notification before start task: "The task will start at hh:mm."

    - End Time: can null. This is the end time of the task.
        - 10 mins notification before end task: "The task will end at hh:mm."
        - 1 mins or 30 second notification after end task: "The task has been ended."

    - Priority: low, normal, high, highest. This will map to priority table

### Tag
- CRUD a tag
- Tag will have: uuid, title, color, created_at, updated_at, deleted_at
- Tag belong to many tasks => we will have a taggable

### Taggable
- Taggable will have: tag_id, taggable_id, taggable_type

## What a technical achieve in this application?

### Common
- Typescript
- NodeJS
- ExpressJS
- Sequelize
- MySQL