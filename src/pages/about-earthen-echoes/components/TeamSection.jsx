import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Abhijat Guha Neogi",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "to be given later",
      expertise: ["Cultural Preservation", "Sustainable Commerce", "Community Development"],
      linkedin: "#"
    },
    {
      name: "Rajesh Patel",
      role: "Co-Founder & Chief Artisan Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Third-generation craftsman turned advocate, specializing in traditional textile techniques and artisan empowerment programs.",
      expertise: ["Traditional Crafts", "Artisan Relations", "Quality Assurance"],
      linkedin: "#"
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Cultural Curation",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Museum curator and cultural historian with expertise in Latin American and Southeast Asian craft traditions.",
      expertise: ["Cultural Research", "Product Curation", "Educational Content"],
      linkedin: "#"
    },
    {
      name: "David Kim",
      role: "Director of Sustainability",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Environmental scientist focused on sustainable supply chains and carbon-neutral shipping solutions.",
      expertise: ["Environmental Impact", "Supply Chain", "Sustainability Reporting"],
      linkedin: "#"
    },
    {
      name: "Priya Sharma",
      role: "Head of Artisan Relations",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
      bio: "Social entrepreneur with deep connections in craft communities across India, Nepal, and Bangladesh.",
      expertise: ["Community Outreach", "Fair Trade", "Artisan Support"],
      linkedin: "#"
    },
    {
      name: "James Wilson",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      bio: "Former e-commerce platform architect passionate about using technology to preserve cultural heritage.",
      expertise: ["Platform Development", "Digital Innovation", "User Experience"],
      linkedin: "#"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our diverse team brings together expertise in cultural preservation, sustainable commerce, and artisan advocacy to create meaningful connections between makers and conscious consumers.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-background rounded-xl border border-border overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 group">
              {/* Member Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Member Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">
                    {member.role}
                  </p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Link */}
                <div className="pt-2">
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <Icon name="Linkedin" size={16} />
                    <span className="text-sm">Connect</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center bg-card border border-border rounded-2xl p-8">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
            Join Our Mission
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals who share our commitment to cultural preservation and artisan empowerment. Explore opportunities to make a meaningful impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:demo.careers@email.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              <Icon name="Mail" size={18} className="mr-2" />
              View Open Positions
            </a>
            <a
              href="mailto:demo.partnership@email.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors duration-200"
            >
              <Icon name="Handshake" size={18} className="mr-2" />
              Partnership Inquiries
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;