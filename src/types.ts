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