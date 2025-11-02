import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Mail, Phone, MapPin, Linkedin, Github, Youtube, Music, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Shafeek.</div>
          <div className="hidden md:flex gap-8 items-center">
            {["home", "about", "experience", "education", "skills", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium transition-colors text-sm ${
                  activeSection === item
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-accent" />
            ) : (
              <Moon className="w-5 h-5 text-accent" />
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  Shafeek Ahmad
                </h1>
                <p className="text-2xl font-semibold text-accent">
                  Finance Professional
                </p>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                A passionate and detail-oriented finance professional with hands-on experience in auditing, accounting, and banking operations. I transform complex financial data into actionable insights.
              </p>
              <div className="flex gap-4 pt-4">
                <Button
                  onClick={() => window.open("/shafeek-resume.pdf", "_blank")}
                  className="bg-primary hover:bg-primary/90 text-white px-8"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-primary text-primary hover:bg-primary/10 px-8"
                >
                  Contact Me
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://linkedin.com/in/shafeek-ahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="mailto:shafeekms400@gmail.com"
                  className="w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all"
                >
                  <Mail className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="tel:+94772417293"
                  className="w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all"
                >
                  <Phone className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>

            {/* Circular Profile Frame */}
            <div className="flex justify-center items-center relative">
              <div className="relative w-80 h-80">
                {/* Animated circular border */}
                <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-br from-primary via-accent to-primary bg-clip-border animate-spin" style={{ animationDuration: "20s" }}></div>
                <div className="absolute inset-1 rounded-full bg-background"></div>
                
                {/* Profile image */}
                <img
                  src="/shafeek-profile.jpg"
                  alt="Shafeek Ahmad"
                  className="absolute inset-2 rounded-full object-cover w-full h-full"
                />

                {/* Decorative elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Hello! I'm Shafeek Ahmad, a dedicated undergraduate specializing in Banking and Finance at the Wayamba University of Sri Lanka.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My academic background and practical experience at institutions like HSBC Sri Lanka and the Central Bank of Sri Lanka have strengthened my expertise in accounting systems, taxation, and financial reporting.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a fast learner, a team player, and someone who thrives in analytical and dynamic environments.
              </p>
            </div>
            <Card className="bg-accent/10 border-accent/30 p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Career Goal</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                To secure a challenging position in a reputable organization where I can contribute effectively to financial management and auditing processes while continuously developing my professional skills.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary">Education</h2>
          <div className="space-y-6">
            <Card className="p-8 border-l-4 border-l-primary bg-card/50 hover:bg-card transition-colors">
              <h3 className="text-2xl font-bold text-primary mb-2">BSc (Hons) in Banking and Finance</h3>
              <p className="text-lg text-accent font-semibold mb-2">Wayamba University of Sri Lanka</p>
              <p className="text-foreground/70">Currently pursuing degree in Banking and Finance with focus on financial systems and accounting practices.</p>
            </Card>

            <Card className="p-8 border-l-4 border-l-accent bg-card/50 hover:bg-card transition-colors">
              <h3 className="text-2xl font-bold text-primary mb-2">CA Strategic Level (Reading)</h3>
              <p className="text-lg text-accent font-semibold mb-2">Institute of Chartered Accountants of Sri Lanka</p>
              <p className="text-foreground/70">Advanced accounting and financial management studies.</p>
            </Card>

            <Card className="p-8 border-l-4 border-l-primary bg-card/50 hover:bg-card transition-colors">
              <h3 className="text-2xl font-bold text-primary mb-2">Diploma in Information Communication Technology</h3>
              <p className="text-lg text-accent font-semibold mb-2">Esoft Metro Campus</p>
              <p className="text-foreground/70">Technical skills in ICT and business systems.</p>
            </Card>

            <Card className="p-8 border-l-4 border-l-accent bg-card/50 hover:bg-card transition-colors">
              <h3 className="text-2xl font-bold text-primary mb-2">G.C.E Advanced Level (2019)</h3>
              <p className="text-lg text-accent font-semibold mb-2">Commerce Stream</p>
              <p className="text-foreground/70">Results: 2A, 1B</p>
            </Card>

            <Card className="p-8 border-l-4 border-l-primary bg-card/50 hover:bg-card transition-colors">
              <h3 className="text-2xl font-bold text-primary mb-2">G.C.E Ordinary Level (2015)</h3>
              <p className="text-lg text-accent font-semibold mb-2">General Education</p>
              <p className="text-foreground/70">Results: 6A, 2B, 1C</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary">Work Experience</h2>
          <div className="space-y-8">
            <Card className="p-8 border-t-4 border-t-primary bg-background/50">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">Finance Intern</h3>
                  <p className="text-lg text-accent font-semibold">HSBC Sri Lanka</p>
                </div>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold text-sm">6 Months</span>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Assisted in the preparation of various tax returns related to the bank</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Handled issues raised by the Inland Revenue Department</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Gained experience in financial statements, VAT, WHT, and Stamp Duty procedures</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-t-4 border-t-accent bg-background/50">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">Accounts Trainee</h3>
                  <p className="text-lg text-accent font-semibold">Central Bank of Sri Lanka</p>
                </div>
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full font-semibold text-sm">1 Year</span>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Assisted in preparing monthly financial statements</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Maintained the bank's fixed asset module and performed bank reconciliations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Supported the maintenance of Central Bank Funds and Withholding Tax returns</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary">Skills</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card/50">
                <h4 className="font-bold text-accent mb-4">Finance Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {["MS Dynamics 365", "Sage 50", "QuickBooks", "Xero", "Tally", "SAP"].map((skill) => (
                    <span key={skill} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-card/50">
                <h4 className="font-bold text-accent mb-4">Data Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {["Power BI", "MS Excel"].map((skill) => (
                    <span key={skill} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-card/50">
                <h4 className="font-bold text-primary mb-4">Office Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {["MS Office Suite"].map((skill) => (
                    <span key={skill} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-card/50">
                <h4 className="font-bold text-accent mb-4">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {["English", "Sinhala", "Tamil"].map((skill) => (
                    <span key={skill} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Professional Skills</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Time Management",
                "Adaptability & Quick Learning",
                "Critical Thinking",
                "Negotiation Skills",
                "Interpersonal Communication",
                "Team Collaboration",
                "Creativity",
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary">Contact</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-primary">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Address</h4>
                    <p className="text-foreground/70">No. 39, "Fathima Manzil", Bandara Koswattha, Kurunegala</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Email</h4>
                    <a href="mailto:shafeekms400@gmail.com" className="text-primary hover:underline">
                      shafeekms400@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Phone</h4>
                    <a href="tel:+94772417293" className="text-primary hover:underline">
                      077 241 7293
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Linkedin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">LinkedIn</h4>
                    <a
                      href="https://linkedin.com/in/shafeek-ahmad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      linkedin.com/in/shafeek-ahmad
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-primary">Let's Connect</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                I'm always interested in hearing about new opportunities and projects. Feel free to reach out through any of the contact methods.
              </p>
              <Button
                onClick={() => window.location.href = "mailto:shafeekms400@gmail.com"}
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                Send Email
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Shafeek Ahmad</p>
          <p className="text-primary-foreground/80">Finance Professional | Banking & Finance Specialist</p>
          <p className="text-primary-foreground/60 mt-4">© 2025 Shafeek Ahmad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
