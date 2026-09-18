import { ArrowUpRight } from "lucide-react";
export default function Footer() {
  return (<footer>
    <div className="contact-banner">
      <div><p className="eyebrow">04 / Get in touch</p><h2>Let’s build something useful.</h2><a className="eyebrow email-link" href="mailto:svk2121@columbia.edu">svk2121@columbia.edu</a></div>
      <a href="mailto:svk2121@columbia.edu" aria-label="Email Sanjay" className="contact-arrow"><ArrowUpRight aria-hidden="true" /></a>
    </div>
    <div className="site-footer eyebrow"><span>© Sanjay Kumar / 2026</span><div><a href="https://github.com/sanjito31/" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/sanjayvkumar31/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="#top">Back to top ↑</a></div></div>
  </footer>);
}
