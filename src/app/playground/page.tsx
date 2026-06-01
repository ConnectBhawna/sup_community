import { SectionPage } from "@/components/site/section-page";

export default function PlaygroundPage() {
  return (
    <SectionPage
      badge="Playground"
      title="Experiment with workflow ideas before they reach production"
      description="Use the playground to test approval logic, branching conditions, escalation paths, and release patterns in a safe learning environment."
      highlights={[
        "Prototype agent-assisted flows",
        "Test approval sequences",
        "Simulate release conditions",
        "Practice rollback scenarios",
      ]}
    />
  );
}
