import { createContext, useCallback, useEffect, useMemo, useState } from "react";

interface TimerContextType {
    time: number;
    start: (seconds: number) => void;
    stop: () => void;
    isRunning: boolean;
}

const TimerContext = createContext<TimerContextType | null>(null)

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
    const [time, setTime] = useState<number>(15);
    const [isRunning, setIsRunning] = useState<boolean>(false)

    useEffect(() => {
        if (!isRunning || time <= 0) return;

        const id = setTimeout(() => {
            setTime(t => t - 1);
        }, 1000);

        return () => clearTimeout(id);
    }, [time, isRunning]);


    const start = useCallback((seconds: number) => {
        setTime(seconds);
        setIsRunning(true);
    }, []);

    const stop = useCallback(() => setIsRunning(false), []);

    const contextValue = useMemo(() => ({ time, start, stop, isRunning }), [time, isRunning, start, stop])

    return (
        <TimerContext.Provider value={contextValue}>
            {children}
        </TimerContext.Provider>
    )
}


export default TimerContext;
