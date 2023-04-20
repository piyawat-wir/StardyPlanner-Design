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