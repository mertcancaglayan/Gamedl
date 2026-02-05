import { useTimeContext } from "../../../hooks/useTimeContext"

function TimeStat() {
    const { time } = useTimeContext()
    return (
        <div className="stat">
            <div className={`stat-value timer ${time <= 10 ? "warning" : ""}`}>
                {time}
            </div>
            <div className="stat-label">Seconds</div>
        </div>
    )
}

export default TimeStat
