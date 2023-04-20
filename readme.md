# Stardy Planner

A web application design for an Software Engineering project. The goal is to make it easier for students to manage their schedules by offering user-friendly interfaces and practical tools, such to-do lists and grade calculators.

## Class Diagram

![SoftwareEn_ClassDiagram](https://user-images.githubusercontent.com/77828805/233421427-a35a554d-b354-43f3-ac6f-d8fc27488f3d.png)

### Class properties & methods

#### User

- [User](/src/User.ts)

#### Schedule

- [Schedule](/src/Schedule.ts)
  
#### Class related

- [Class](/src/class/Class.ts)
- [Grading](/src/class/Grading.ts)
- [Routine](/src/class/Routine.ts)
- [ScorePortion](/src/class/ScorePortion.ts)

#### Grading standards

- [Simple](/src/gradingStandards/Simple.ts)
- [Normal](/src/gradingStandards/Normal.ts)
- [Extended](/src/gradingStandards/Extended.ts)
- [Double Extended](/src/gradingStandards/DoubleExtended.ts)

#### Managers

- [Data Manager](/src/managers/DataManager.ts)
- [User Manager](/src/managers/UserManager.ts)
- [Class Manager](/src/managers/ClassManager.ts)
- [Schedule Manager](/src/managers/ScheduleManager.ts)
- [Todo Manager](/src/managers/TodoManager.ts)

#### Servers

- [Server](/src/servers/Server.ts)
- [Frontend](/src/servers/Frontend.ts)
- [Backend](/src/servers/Backend.ts)

#### Todo items

- [Item](/src/todos/Item.ts)
- [ClassWork](/src/todos/ClassWork.ts)
- [Appointment](/src/todos/Appointment.ts)
