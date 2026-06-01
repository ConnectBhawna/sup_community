import { SectionPage } from "@/components/site/section-page";

export default function ProfilePage() {
  return (
    <SectionPage
      badge="Profile"
      title="Track your learning journey across workflows and lessons"
      description="Your profile can become the place where progress, saved templates, contribution history, and attended events come together."
      highlights={[
        "Saved lessons and workflows",
        "Contribution history",
        "Progress milestones",
        "Upcoming event registrations",
      ]}
    />
  );
}
