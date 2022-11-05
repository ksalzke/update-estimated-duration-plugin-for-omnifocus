
# About

This is a commissioned Omni Automation plug-in for OmniFocus that allows the user to quickly set or add to estimated times.

_Please note that all scripts on my GitHub account (or shared elsewhere) are works in progress. If you encounter any issues or have any suggestions please let me know--and do please make sure you backup your database before running scripts from the internet!)_

## Known issues 

Refer to ['issues'](https://github.com/ksalzke/update-estimated-time-plugin-for-omnifocus/issues) for known issues and planned changes/enhancements.

# Installation & Set-Up

## Installation

1. Download the [latest release](https://github.com/ksalzke/update-estimated-time-plugin-for-omnifocus/releases/latest).
2. Unzip the downloaded file.
3. Move the `.omnifocusjs` file to your OmniFocus plug-in library folder (or open it to install).

# Actions

This plug-in contains the following types of actions:

## Set Estimated Time To...

* Set Estimated Time To 2 Minutes
* Set Estimated Time To 5 Minutes
* Set Estimated Time To 10 Minutes
* Set Estimated Time To 15 Minutes
* Set Estimated Time To 30 Minutes
* Set Estimated Time To 45 Minutes
* Set Estimated Time To 1 Hour

## Add X To Estimated Time

* Add 2 Minutes To Estimated Time
* Add 5 Minutes To Estimated Time
* Add 10 Minutes To Estimated Time
* Add 15 Minutes To Estimated Time
* Add 30 Minutes To Estimated Time
* Add 45 Minutes To Estimated Time
* Add 1 Hour To Estimated Time

# Functions

The following functions are contained within the `estimatedTimeLib`.

## setEstimatedTimes (tasks: TaskArray, minutes: number) 

Sets the estimated time of the given tasks to the number of minutes provided.

## setEstimatedTime (task: Task, minutes: number)

Sets the estimated time of the given task to the number of minutes provided.

## addTimes (tasks: TaskArray, minutes: number) 

Adds the number of minutes provided to the estimated time of the given tasks.

## addTime (task: Task, minutes: number)

Adds the number of minutes provided to the estimated time of the given task.