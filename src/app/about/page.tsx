'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Our <span className="text-primary">Story</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Building the future of football through excellence, integrity, and innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold tracking-tight">
                A Legacy of <span className="text-primary">Excellence</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2010, we&apos;ve been at the forefront of football management, 
                transforming the careers of hundreds of athletes worldwide. Our journey 
                began with a simple mission: to provide comprehensive support and 
                opportunities for talented players to reach their full potential.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Over the years, we&apos;ve built strong relationships with top clubs, 
                developed innovative training programs, and created pathways for 
                players to achieve their dreams of professional success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/about-history.jpg"
                alt="Our journey in football management"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Success <span className="text-primary">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real achievements from our talented players
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{story.name}</h3>
                    <p className="text-primary">{story.achievement}</p>
                  </div>
                </div>
                <p className="text-gray-600">{story.story}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our approach to player development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Update team members data
const teamMembers = [
  {
    name: "James Kamau",
    role: "Head of Player Development",
    image: "/images/team/james-kamau.jpg",
    bio: "Former professional player with extensive experience in player development and scouting. Specializes in identifying and nurturing young Kenyan talent for international opportunities."
  },
  {
    name: "Wanjiku Muthoni",
    role: "Senior Agent",
    image: "/images/team/wanjiku-muthoni.jpg",
    bio: "Expert in contract negotiations and player representation with a proven track record of successful deals. Focuses on securing the best opportunities for Kenyan players abroad."
  },
  {
    name: "Ochieng Otieno",
    role: "Technical Director",
    image: "/images/team/ochieng-otieno.jpg",
    bio: "UEFA Pro License holder with deep expertise in technical training and tactical development. Dedicated to elevating the technical standards of Kenyan football."
  }
];

// Update success stories data
const successStories = [
  {
    name: "Peter Mwangi",
    achievement: "Signed with European Club",
    image: "/images/success/peter-mwangi.jpg",
    story: "From local Kenyan league to European professional football, Peter's journey exemplifies our commitment to developing local talent for international success."
  },
  {
    name: "Grace Wanjiru",
    achievement: "National Team Star",
    image: "/images/success/grace-wanjiru.jpg",
    story: "Grace's rise to national team prominence showcases our dedication to nurturing women's football talent in Kenya and creating pathways to professional success."
  }
];

// Data for values
const values = [
  {
    title: "Excellence",
    icon: "⭐",
    description: "We strive for the highest standards in everything we do, from player development to professional representation."
  },
  {
    title: "Integrity",
    icon: "🤝",
    description: "Honest and transparent relationships with players, clubs, and partners form the foundation of our work."
  },
  {
    title: "Innovation",
    icon: "💡",
    description: "We continuously evolve our methods and approaches to stay at the forefront of football development."
  }
]; 