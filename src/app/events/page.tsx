import { SectionPage } from "@/components/site/section-page";

export default function EventsPage() {
  return (
    <SectionPage
      badge="Events"
      title="See live sessions focused on modern DevOps operations"
      description="Track workshops, office hours, release walk-throughs, and workflow demos that help teams understand how to automate production safely."
      highlights={[
        "Live workflow walkthroughs",
        "Office hours with operators",
        "Release readiness sessions",
        "Community showcases",
      ]}
    />
  );
}
