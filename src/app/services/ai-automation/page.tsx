import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "AI & Automation — LM Solutions",
  description:
    "Practical AI and automation workflows that remove repetitive work. Invoice processing, lead triage, document parsing, and custom AI integrations.",
};

export default function AIAutomationPage() {
  return (
    <ServicePageTemplate
      kicker="AI & AUTOMATION"
      headline="AI that earns its keep."
      limeText="earns its keep."
      subhead="No AI for AI's sake. We build automations and intelligent workflows that quietly remove the repetitive work — invoice processing, lead triage, customer enquiries, document parsing — so your team spends time on the parts that need a human."
      includes={[
        "AI workflow design and feasibility assessment",
        "Custom model integration (OpenAI, Claude, open-source)",
        "Document parsing and data extraction pipelines",
        "Automated lead triage and routing",
        "Integration with your existing CRM, email, and tools",
        "Monitoring dashboard for AI performance",
        "Full documentation and handover",
      ]}
      idealFor="Businesses spending hours on repetitive, rules-based tasks that a well-designed AI workflow could handle in seconds. If your team is copy-pasting between tools, manually sorting inbound requests, or processing documents by hand, this is the service."
      techBadges={["OpenAI", "Anthropic Claude", "LangChain", "n8n", "Zapier", "Vector DBs", "Custom RAG", "Python", "Node.js"]}
      pricingNote="AI & automation projects typically start from $14,500. Final pricing depends on the complexity of integrations and data sources."
    />
  );
}
