import { SectionPage } from "@/components/site/section-page";

export default function WorkflowsPage() {
  return (
    <SectionPage
      badge="Workflow Library"
      title="Run platform workflows that mirror production reality"
      description="Explore policy-gated deploys, rollback paths, approval steps, and incident response flows designed to teach how Superplane connects engineers and agents in real operations."
      highlights={[
        "Policy-gated deployments",
        "Human approvals in the loop",
        "Automated rollback paths",
        "Incident response orchestration",
      ]}
    />
  );
}
