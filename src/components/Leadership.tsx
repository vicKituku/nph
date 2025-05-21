'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const leaders = [
  {
    name: 'James Kamau',
    role: 'Head of Player Development',
    image: '/images/team/james-kamau.jpg',
    bio: 'Former professional player with extensive experience in player development and scouting. Specializes in identifying and nurturing young Kenyan talent for international opportunities.',
    achievements: ['Ex-Professional Player', 'UEFA Pro License', 'Sports Management MBA'],
  },
  {
    name: 'Wanjiku Muthoni',
    role: 'Senior Agent',
    image: '/images/team/wanjiku-muthoni.jpg',
    bio: 'Expert in contract negotiations and player representation with a proven track record of successful deals. Focuses on securing the best opportunities for Kenyan players abroad.',
    achievements: ['Youth Development Expert', 'FIFA Technical Expert', 'Sports Psychology Certification'],
  },
  {
    name: 'Ochieng Otieno',
    role: 'Technical Director',
    image: '/images/team/ochieng-otieno.jpg',
    bio: 'UEFA Pro License holder with deep expertise in technical training and tactical development. Dedicated to elevating the technical standards of Kenyan football.',
    achievements: ['National Team Coach', 'UEFA A License', 'Sports Science Degree'],
  },
];

export default function Leadership() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-2"
          >
            Our Leadership Team
          </motion.h2>
          <p className="text-body max-w-2xl mx-auto">
            Meet the experienced professionals guiding our athletes towards excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{leader.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{leader.role}</p>
              <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>
              
              <div className="space-y-2">
                {leader.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {achievement}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 