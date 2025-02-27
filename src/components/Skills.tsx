import React from 'react';

interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
  category: string;
  related?: string[];
}

const skills: Skill[] = [
  // Cloud & Infrastructure
  {
    name: "AWS & Cloud Platforms",
    level: "Expert",
    category: "Cloud & Infrastructure",
    related: ["GCP", "DigitalOcean", "Linode", "Vultr"],
  },
  {
    name: "Docker & Containers",
    level: "Advanced",
    category: "Cloud & Infrastructure",
    related: ["VMs", "Networking"],
  },
  {
    name: "Cloudflare & Nginx",
    level: "Expert",
    category: "Cloud & Infrastructure",
    related: ["Minio S3", "Proxy Management"],
  },

  // Systems & MDM
  {
    name: "Jamf Pro & School",
    level: "Expert",
    category: "Systems & MDM",
    related: ["Jamf Expert Certified","MDM Frameworks"],
  },
  {
    name: "Apple Hardware Management",
    level: "Expert",
    category: "Systems & MDM",
    related: ["MacOS Management"],
  },
  {
    name: "Windows/Linux Admin",
    level: "Advanced",
    category: "Systems & MDM",
    related: ["Server", "Windows 11/10"],
  },

  // Automation & Development
  {
    name: "Scripting",
    level: "Advanced",
    category: "Automation & Development",
    related: ["Bash", "Ansible", "Python"],
  },
  {
    name: "Web Development",
    level: "Advanced",
    category: "Automation & Development",
    related: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    name: "Monitoring Stack",
    level: "Expert",
    category: "Automation & Development",
    related: ["Grafana", "InfluxDB", "Loki"],
  },

  // Support & Tools
  {
    name: "Helpdesk & Support",
    level: "Expert",
    category: "Support & Tools",
    related: ["Troubleshooting", "Documentation", "Communication"],
  },
  {
    name: "Workspace Management",
    level: "Advanced",
    category: "Support & Tools",
    related: ["Office 365", "Google Workspace"],
  },
  {
    name: "Security & Asset Mgmt",
    level: "Advanced",
    category: "Support & Tools",
    related: ["Vaultwarden", "Snipe-IT"],
  },

  // Maker & Content
  {
    name: "3D Printing",
    level: "Expert",
    category: "Maker & Content",
    related: ["Maker Space Equipment"],
  },
  {
    name: "Content Management",
    level: "Advanced",
    category: "Maker & Content",
    related: ["Hugo", "Git/Github"],
  },
  {
    name: "Adobe Admin",
    level: "Advanced",
    category: "Maker & Content",
  },
];

export const Skills: React.FC = () => {
  return (
    <section className="relative z-10 py-8 px-4 mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Technical Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {['Cloud & Infrastructure', 'Systems & MDM', 'Automation & Development', 'Support & Tools', 'Maker & Content'].map((category) => (
            <div key={category} className="bg-black/40 backdrop-blur-md rounded-lg p-4 transform hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">{category}</h3>
              <div className="space-y-3">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="flex items-baseline justify-between border-b border-white/10 py-1.5 last:border-0">
                      <div className="flex-1 min-w-0">
                        <span className="text-white text-sm font-medium inline-block">{skill.name}</span>
                        {skill.related && (
                          <span className="text-white/40 text-xs ml-2 truncate inline-block">
                            {skill.related.join(' · ')}
                          </span>
                        )}
                      </div>
                      <span className={`text-xs font-semibold px-2 ml-3 rounded-full ${
                        skill.level === 'Expert' ? 'bg-blue-500/20 text-blue-300' :
                        skill.level === 'Advanced' ? 'bg-purple-500/20 text-purple-300' :
                        skill.level === 'Intermediate' ? 'bg-green-500/20 text-green-300' :
                        'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
