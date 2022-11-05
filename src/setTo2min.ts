
interface estimatedTimeLib extends PlugIn.Library {
    setEstimatedTime?: (task: Task, minutes: number) => void
}

(() => {
    const action = new PlugIn.Action(async function (selection: Selection, sender) {

        const selectedTasks = [...selection.tasks, ...selection.projects]

        this.estimatedTimeLib.setEstimatedTimes(selectedTasks, 2)
    })

    action.validate = function (selection, sender) {
        return selection.tasks.length > 0 || selection.projects.length > 0
    }

    return action
})()
