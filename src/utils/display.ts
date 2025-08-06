import type { Phase } from "../stores/pomodoro/pomodoroTypes";

export function formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`;
}

export function getLabel(phase: Phase): string {
    const labels: Record<Phase, string> = {
        focus: "FOCUS TIME",
        shortBreak: "SHORT BREAK",
        longBreak: "LONG BREAK",
    };

    return labels[phase] || "FOCUS TIME";
}
