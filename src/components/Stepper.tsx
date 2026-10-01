"use client";

/** Step data */
interface StepData {
  title: string;
  desc: string;
}

/** Stepper component props */
interface StepperProps {
  steps: StepData[];
  currentStep: number;
}

/**
 * Step indicator for multi-step processes.
 * Connected dots with progress line showing completion.
 */
export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "0" }}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;

        return (
          <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, position: "relative" }}>
            {index < steps.length - 1 && (
              <div
                style={{
                  position: "absolute", top: "1rem", left: "calc(50% + 1rem)", right: "calc(-50% + 1rem)",
                  height: "2px",
                  background: isCompleted ? "var(--color-primary)" : "var(--color-border)",
                  transition: "background 0.3s ease",
                }}
              />
            )}
            <div
              style={{
                width: "2rem", height: "2rem", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: isCompleted ? "var(--color-primary)" : isCurrent ? "var(--color-primary-dim)" : "var(--color-card)",
                border: `2px solid ${isCompleted || isCurrent ? "var(--color-primary)" : "var(--color-border)"}`,
                color: isCompleted ? "#fff" : isCurrent ? "var(--color-primary)" : "var(--color-text-muted)",
                fontSize: "0.75rem", fontWeight: 700, zIndex: 1, transition: "all 0.3s ease",
              }}
            >
              {isCompleted ? "✓" : index + 1}
            </div>
            <div style={{ marginTop: "0.5rem", textAlign: "center" }}>
              <div className="font-heading" style={{ fontSize: "0.85rem", color: isCurrent ? "var(--color-primary)" : "var(--color-text)", fontWeight: 600 }}>
                {step.title}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginTop: "0.15rem" }}>
                {step.desc}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
