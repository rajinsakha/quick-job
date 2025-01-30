import TermsAndConditions from "@/components/containers/TermsAndConditions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | WorkSpace Nepal",
  description: "Read our terms and conditions for using WorkSpace Nepal.",
};

export default function TermsPage() {
  return <TermsAndConditions />;
}
