type RestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS" | "TRACE" | "CONNECT"
type RestHandler = (req: Request, res: Response) => void
type datetime = string
type Time = string
type AccessMode = "Private" | "Public"
type RecurringType = "Daily" | "Weekly" | "Monthly"
type DayOfWeek = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun"
type Month = "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec"
type GradingStandardType = "Simple" | "Normal" | "Extended" | "DoubleExtended"
type ReminderType = string

class Server {
	public start() { }
	public stop() { }

	public authenticate(req: Request) { }
	public addRequestHandler(method: RestMethod, handler: RestHandler) { }
	public sendResponse(res: Response) { }
}

class BackendServer extends Server {
	private dataManager: DataManager = new DataManager
	private userManager: UserManager = new UserManager
	private scheduleManager: ScheduleManager = new ScheduleManager
	private classManager: ClassManager = new ClassManager
	private todosManager: TodoManager = new TodoManager

	private getHandler: RestHandler = (req, res) => { }
	private postHandler: RestHandler = (req, res) => { }
	private deleteHandler: RestHandler = (req, res) => { }
}

class FrontendServer extends Server {
	private getUserdata(req: Request): User { return new User }
	private getSchedules(req: Request): Schedule { return new Schedule }
	private getTodoList(req: Request): TodoItem[] { return [] }
	private getWebpage(path: string): string { return "" }

	private getHandler: RestHandler = (req, res) => { }
	private postHandler: RestHandler = (req, res) => { }
	private deleteHandler: RestHandler = (req, res) => { }
}

class User {
	private id: string = ""
	private username: string = ""
	private password: string = ""
	private email: string = ""
	private name: string = ""
	private profilePicture: string = ""

	private friends: User[] = []
	private schedules: Schedule[] = []
	private todos: TodoItem[] = []

	public getID() { }
	public getUsername() { }
	public getEmail() { }
	public getName() { }
	public getProfilePicture() { }

	public getScheduleList() { }
	public addSchedule() { }
	public deleteSchedule() { }

	public getTodoList() { }
	public addTodoItem() { }
	public deleteTodoItem() { }

	public verifyPassword(password: string) { }
	public changeUsername(username: string) { }
	public changePassword(password: string) { }
	public changeEmail(email: string) { }
	public changeProfilePicture(picture: string) { }

	public getFriendList() { }
	public addFriend(id: string) { }
	public removeFriend(id: string) { }
}

class Schedule {
	private id: string = ""
	private name: string = ""
	private color: string = ""
	private icon: string = ""
	private accessMode: AccessMode = "Private"

	private classes: Class[] = []

	public getID() { }
	public getName() { }
	public getColor() { }
	public getIcon() { }
	public getAccessMode() { }

	public setName(name: string) { }
	public setColor(color: string) { }
	public setIcon(icon: string) { }
	public setAccessMode(mode: AccessMode) { }

	public getClassList() { }
	public addClass(c: Class) { }
	public removeClass(id: string) { }
}

class Class {
	private id: string = ""
	private name: string = ""
	private roomNo: string = ""
	private professorName: string = ""

	private grading: Grading = new Grading
	private routines: Routine[] = []
	private works: ClassWork[] = []

	public getID() { }
	public getName() { }
	public getRoomNo() { }
	public getProfessorName() { }

	public setName(name: string) { }
	public setRoomNo(no: string) { }
	public setProfessorName(name: string) { }

	public updateGrading(grading: Grading) { }

	public addRoutine(routine: Routine) { }
	public updateRoutine(id: string, routine: Routine) { }
	public removeRoutine(id: string) { }
}

class Routine {
	private id: string = ""
	private dayOfWeek: DayOfWeek = "Mon"
	private startTime: Time = "0:00:00"
	private endTime: Time = "0:00:00"
	private startMonth: Month = "Jan"
	private endMonth: Month = "Jan"

	public getID() { }
	public getDayOfWeek() { }
	public getStartTime() { }
	public getEndTime() { }
	public getStartMonth() { }
	public getEndMonth() { }

	public setDayOfWeek(day: DayOfWeek) { }
	public setStartTime(time: Time) { }
	public setEndTime(time: Time) { }
	public setStartMonth(month: Month) { }
	public setEndMonth(month: Month) { }
}

class Grading {
	private portion: ScorePortion[] = []
	private sumOfScore: number = 0
	private overallScore: number = 0
	private percentScore: number = 0
	private standardType: GradingStandardType = "Normal"

	private standard: SimpleStandard = new SimpleStandard

	public calculate() { }
	public getPortion() { }
	public getStandard() { }
}

class ScorePortion {
	private name: string = ""
	private fullscore: number = 0
	private score: number = 0

	public getName() { }
	public getFullscore() { }
	public getScore() { }

	public setName(name: string) { }
	public setFullscore(n: number) { }
	public setScore(n: number) { }
}

class SimpleStandard {
	protected minimumPass: number = 0 // F 

	public getValue() { }
	public setValue(value: string) { }
}

class NormalStandard extends SimpleStandard {
	protected A: number = 0
	protected B: number = 0
	protected C: number = 0
	protected D: number = 0
}

class ExtendedStandard extends NormalStandard {
	protected Aplus: number = 0
	protected Bplus: number = 0
	protected Cplus: number = 0
	protected Dplus: number = 0
}

class DoubleExtendedStandard extends ExtendedStandard {
	protected Aminus: number = 0
	protected Bminus: number = 0
	protected Cminus: number = 0
	protected Dminus: number = 0
}

class TodoItem {
	protected id: string = ""
	protected name: string = ""
	protected description: string = ""
	protected datetime: datetime = ""
	protected remindTime: datetime = ""
	protected done: boolean = false

	public getID() { }
	public getName() { }
	public getDescription() { }
	public getDatetime() { }
	public getRemindTime() { }

	public setName(name: string) { }
	public setDescription(desc: string) { }
	public setDatetime(datetime: datetime) { }
	public setRemindTime(datetime: datetime) { }

	public markDone() { }
	public unmarkDone() { }
}

class Appointment extends TodoItem {
	protected endDatetime: datetime = ""

	public getEndDatetime() { }
	public setEndDatetime(datetime: datetime) { }
}

class ClassWork extends TodoItem {
	private subjectID: string = ""
	protected fullscore: number = 0
	protected score: number = 0
	protected deadline: datetime = this.datetime

	public getSubject() { }
	public getFullscore() { }
	public getScore() { }
	public getDeadline() { }

	public setSubject(id: string) { }
	public setFullscore(n: number) { }
	public setScore(n: number) { }
	public setDeadline(datetime: datetime) { }
}

class DataManager {
	public addData(table: string, data: string) { }
	public getData(table: string, id: string) { }
	public updateData(table: string, id: string, data: string) { }
	public deleteData(table: string, id: string) { }
}

class UserManager { // use DataManager
	public createUser(userdata: User) { }
	public getUser(username: string) { }
	public updateUser(userdata: User) { }
	public deleteUser(username: string) { }

	public getFriendList() { }
	public addFriend(id: string) { }
	public removeFriend(id: string) { }
}

class ScheduleManager { // use DataManager
	public createSchedule(schedule: Schedule) { }
	public getSchedule(id: string) { }
	public updateSchedule(schedule: Schedule) { }
	public deleteSchedule(id: string) { }
}

class ClassManager { // use DataManager
	public createClass(c: Class) { }
	public getClass(id: string) { }
	public updateClass(c: Class) { }
	public deleteClass(id: string) { }

	public updateRoutine(routine: Routine) { }
	public updateGrading(grading: Grading) { }
}

class TodoManager { // use DataManager
	public createClassWork(work: ClassWork) { }
	public getClassWork(id: string) { }
	public updateClassWork(work: ClassWork) { }
	public deleteClassWork(id: string) { }

	public createAppointment(appoint: Appointment) { }
	public getAppointment(id: string) { }
	public updateAppointment(appoint: Appointment) { }
	public deleteAppointment(id: string) { }
}
