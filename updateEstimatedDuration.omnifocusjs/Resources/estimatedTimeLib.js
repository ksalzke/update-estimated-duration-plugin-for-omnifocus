(function () {
    var estimatedTimeLib = new PlugIn.Library(new Version('1.0'));
    estimatedTimeLib.setEstimatedTimes = function (tasks, minutes) {
        for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
            var task = tasks_1[_i];
            estimatedTimeLib.setEstimatedTime(task, minutes);
        }
    };
    estimatedTimeLib.setEstimatedTime = function (task, minutes) {
        task.estimatedMinutes = minutes;
    };
    estimatedTimeLib.addTimes = function (tasks, minutes) {
        for (var _i = 0, tasks_2 = tasks; _i < tasks_2.length; _i++) {
            var task = tasks_2[_i];
            estimatedTimeLib.addTime(task, minutes);
        }
    };
    estimatedTimeLib.addTime = function (task, minutes) {
        task.estimatedMinutes += minutes;
    };
    return estimatedTimeLib;
})();
