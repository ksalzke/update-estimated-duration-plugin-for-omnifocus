interface estimatedTimeLibrary extends PlugIn.Library {
    setEstimatedTimes?: (tasks: TaskArray, minutes: number) => void
    setEstimatedTime?: (task: Task, minutes: number) => void
    addTimes?: (tasks: TaskArray, minutes: number) => void
    addTime?: (task: Task, minutes: number) => void
}

(() => {
    const estimatedTimeLib: estimatedTimeLibrary = new PlugIn.Library(new Version('1.0'))

    estimatedTimeLib.setEstimatedTimes = (tasks: TaskArray, minutes: number) => {
        for (const task of tasks) estimatedTimeLib.setEstimatedTime(task, minutes)
    }

    estimatedTimeLib.setEstimatedTime = (task: Task, minutes: number) => {
        task.estimatedMinutes = minutes
    }

    estimatedTimeLib.addTimes = (tasks: TaskArray, minutes: number) => {
        for (const task of tasks) estimatedTimeLib.addTime(task, minutes)
    }

    estimatedTimeLib.addTime = (task: Task, minutes: number) => {
        task.estimatedMinutes += minutes
    }

    return estimatedTimeLib
})()
