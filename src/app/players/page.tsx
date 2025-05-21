'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const players = [
  {
    name: 'Michael Olunga',
    position: 'Forward',
    age: 29,
    club: 'Al Duhail SC',
    achievements: [
      'Top Scorer - 2023 Season',
      'Player of the Month - March 2023',
      'International Debut - 2015'
    ],
    image: '/images/players/olunga.jpg',
    stats: {
      matches: {
        played: 24,
        started: 22,
        minutes: 1980
      },
      goals: {
        total: 15,
        assists: 8,
        shots: 45,
        shotsOnTarget: 28,
        conversionRate: '33.3%'
      },
      passing: {
        accuracy: '82%',
        keyPasses: 24,
        crosses: 18,
        longBalls: 12
      },
      dribbling: {
        attempts: 68,
        successful: 42,
        successRate: '61.8%'
      },
      defensive: {
        tackles: 12,
        interceptions: 8,
        clearances: 5
      }
    }
  },
  {
    name: 'Victor Wanyama',
    position: 'Midfielder',
    age: 32,
    club: 'CF Montréal',
    achievements: [
      'Captain - Kenya National Team',
      'Premier League Winner - 2016/17',
      'Scottish Premier League Winner - 2012/13'
    ],
    image: '/images/players/wanyama.jpg',
    stats: {
      matches: {
        played: 28,
        started: 26,
        minutes: 2340
      },
      goals: {
        total: 8,
        assists: 12,
        shots: 32,
        shotsOnTarget: 18,
        conversionRate: '25%'
      },
      passing: {
        accuracy: '88%',
        keyPasses: 42,
        crosses: 35,
        longBalls: 68
      },
      dribbling: {
        attempts: 85,
        successful: 58,
        successRate: '68.2%'
      },
      defensive: {
        tackles: 45,
        interceptions: 38,
        clearances: 22
      }
    }
  },
  {
    name: 'Joseph Okumu',
    position: 'Defender',
    age: 26,
    club: 'Stade de Reims',
    achievements: [
      'Ligue 1 Debut - 2023',
      'Kenya Premier League Winner - 2018',
      'National Team Regular'
    ],
    image: '/images/players/okumu.jpg',
    stats: {
      matches: {
        played: 30,
        started: 30,
        minutes: 2700
      },
      goals: {
        total: 3,
        assists: 5,
        shots: 15,
        shotsOnTarget: 8,
        conversionRate: '20%'
      },
      passing: {
        accuracy: '85%',
        keyPasses: 18,
        crosses: 12,
        longBalls: 95
      },
      dribbling: {
        attempts: 35,
        successful: 22,
        successRate: '62.9%'
      },
      defensive: {
        tackles: 78,
        interceptions: 65,
        clearances: 142,
        blocks: 28,
        duelsWon: '68%'
      }
    }
  },
  {
    name: 'Richard Odada',
    position: 'Midfielder',
    age: 22,
    club: 'Philadelphia Union',
    achievements: [
      'MLS Debut - 2022',
      'Young Player of the Year - 2021',
      'National Team Call-up - 2020'
    ],
    image: '/images/players/odada.jpg',
    stats: {
      matches: {
        played: 24,
        started: 22,
        minutes: 1980
      },
      goals: {
        total: 15,
        assists: 8,
        shots: 45,
        shotsOnTarget: 28,
        conversionRate: '33.3%'
      },
      passing: {
        accuracy: '82%',
        keyPasses: 24,
        crosses: 18,
        longBalls: 12
      },
      dribbling: {
        attempts: 68,
        successful: 42,
        successRate: '61.8%'
      },
      defensive: {
        tackles: 12,
        interceptions: 8,
        clearances: 5
      }
    }
  },
  {
    name: 'Ayub Timbe',
    position: 'Forward',
    age: 31,
    club: 'Vissel Kobe',
    achievements: [
      'J1 League Debut - 2023',
      'Belgian Pro League Experience',
      'National Team Regular'
    ],
    image: '/images/players/timbe.jpg',
    stats: {
      matches: {
        played: 28,
        started: 26,
        minutes: 2340
      },
      goals: {
        total: 8,
        assists: 12,
        shots: 32,
        shotsOnTarget: 18,
        conversionRate: '25%'
      },
      passing: {
        accuracy: '88%',
        keyPasses: 42,
        crosses: 35,
        longBalls: 68
      },
      dribbling: {
        attempts: 85,
        successful: 58,
        successRate: '68.2%'
      },
      defensive: {
        tackles: 45,
        interceptions: 38,
        clearances: 22
      }
    }
  },
  {
    name: 'Brian Mandela',
    position: 'Defender',
    age: 29,
    club: 'Maritzburg United',
    achievements: [
      'South African Premier League Experience',
      'National Team Regular',
      'Defensive Leader'
    ],
    image: '/images/players/mandela.jpg',
    stats: {
      matches: {
        played: 30,
        started: 30,
        minutes: 2700
      },
      goals: {
        total: 3,
        assists: 5,
        shots: 15,
        shotsOnTarget: 8,
        conversionRate: '20%'
      },
      passing: {
        accuracy: '85%',
        keyPasses: 18,
        crosses: 12,
        longBalls: 95
      },
      dribbling: {
        attempts: 35,
        successful: 22,
        successRate: '62.9%'
      },
      defensive: {
        tackles: 78,
        interceptions: 65,
        clearances: 142,
        blocks: 28,
        duelsWon: '68%'
      }
    }
  }
];

const categories = [
  { name: 'All Players', value: 'all' },
  { name: 'Forwards', value: 'forward' },
  { name: 'Midfielders', value: 'midfielder' },
  { name: 'Defenders', value: 'defender' },
  { name: 'Goalkeepers', value: 'goalkeeper' }
];

function StatCard({ title, value, subtitle, icon }: { title: string; value: string | number; subtitle?: string; icon?: React.ReactNode }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      {icon && <div className="text-primary mb-2">{icon}</div>}
      <div className="text-2xl font-bold text-primary">{value}</div>
      <div className="text-small text-gray-600">{title}</div>
      {subtitle && <div className="text-xs text-gray-500 mt-1">{subtitle}</div>}
    </div>
  );
}

export default function PlayersPage() {
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
            <h1 className="heading-1 mb-6">
              Our <span className="text-primary">Players</span>
            </h1>
            <p className="text-body">
              Meet our talented roster of Kenyan footballers making their mark on the global stage
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.value}
                className="px-6 py-2 rounded-full bg-white text-gray-600 hover:bg-primary hover:text-white transition-colors border border-gray-200"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {players.map((player, index) => (
              <motion.div
                key={player.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Player Image */}
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Player Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="heading-3 text-white mb-2">{player.name}</h3>
                  <div className="flex items-center gap-2 text-white/90">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-medium">{player.club}</span>
                  </div>
                </div>

                {/* View Profile Link (invisible overlay) */}
                <Link
                  href={`/players/${player.name.toLowerCase().replace(' ', '-')}`}
                  className="absolute inset-0"
                  aria-label={`View ${player.name}'s profile`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="heading-1 text-white mb-6"
            >
              Join Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              Take your football career to the next level with our professional management and development programs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="btn-primary bg-white text-primary hover:bg-white/90"
              >
                Apply Now
              </Link>
              <Link
                href="/services"
                className="btn-secondary border-white text-white hover:bg-white/10"
              >
                Learn About Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 