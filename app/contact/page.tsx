import type { Metadata } from "next";
import { ArrowUpRight, Github, Mail, Linkedin } from "lucide-react";
import Page from "@/components/BasicPageLayout";
export const metadata: Metadata = { title: "Contact — Sanjay Kumar", description: "Get in touch with Sanjay Kumar about software engineering, machine learning, and collaboration." };
const contacts = [
  { label: "Email", value: "svk2121@columbia.edu", description: "Start a conversation.", href: "mailto:svk2121@columbia.edu", icon: Mail },
  { label: "LinkedIn", value: "sanjayvkumar31", description: "Connect professionally.", href: "https://www.linkedin.com/in/sanjayvkumar31/", icon: Linkedin },
  { label: "GitHub", value: "sanjito31", description: "Explore the code behind the work.", href: "https://github.com/sanjito31/", icon: Github },
];
export default function Contact() {
  return (<Page pageTitle="Open a conversation." eyebrow="04 / Contact" intro="Have a project, an opportunity, or a challenging engineering problem? I’d like to hear about it.">
    <div className="contact-list">{contacts.map(({ label, value, description, href, icon: Icon }, index) => <a key={label} href={href} className="contact-row" {...(href.startsWith("https") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      <span className="eyebrow">0{index + 1} / {label}</span><Icon size={28} strokeWidth={1.25} aria-hidden="true" /><div><h2>{value}</h2><p>{description}</p></div><ArrowUpRight className="contact-row-arrow" aria-hidden="true" />
    </a>)}</div>
  </Page>);
}
