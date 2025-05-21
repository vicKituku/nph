'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

type EventType = 'camp' | 'tryout' | 'showcase';

interface Event {
  id: string;
  title: string;
  type: EventType;
  date: string;
  time: string;
  location: string;
  description: string;
  ageGroup: string;
  spotsLeft?: number;
  registrationDeadline: string;
}

const events: Event[] = [
  {
    id: '1',
    title: 'Elite Training Camp',
    type: 'camp',
    date: '2024-04-15',
    time: '09:00 - 16:00',
    location: 'Main Training Facility',
    description: 'Intensive 5-day training camp focusing on technical skills, tactical understanding, and physical conditioning.',
    ageGroup: 'U16-U18',
    spotsLeft: 12,
    registrationDeadline: '2024-04-01',
  },
  {
    id: '2',
    title: 'Professional Tryouts',
    type: 'tryout',
    date: '2024-04-20',
    time: '14:00 - 17:00',
    location: 'Stadium Field',
    description: 'Open tryouts for professional club scouts. Showcase your skills in front of top-tier club representatives.',
    ageGroup: 'U18+',
    spotsLeft: 25,
    registrationDeadline: '2024-04-15',
  },
  {
    id: '3',
    title: 'Summer Showcase Tournament',
    type: 'showcase',
    date: '2024-05-01',
    time: '10:00 - 18:00',
    location: 'Sports Complex',
    description: 'Annual showcase tournament featuring top youth teams and professional scouts from across the country.',
    ageGroup: 'U14-U18',
    spotsLeft: 8,
    registrationDeadline: '2024-04-20',
  },
  {
    id: '4',
    title: 'Goalkeeper Training Camp',
    type: 'camp',
    date: '2024-04-25',
    time: '15:00 - 18:00',
    location: 'Training Ground A',
    description: 'Specialized goalkeeper training focusing on shot-stopping, distribution, and game management.',
    ageGroup: 'U14-U18',
    spotsLeft: 6,
    registrationDeadline: '2024-04-18',
  },
];

const eventTypeStyles = {
  camp: 'bg-blue-100 text-blue-800',
  tryout: 'bg-green-100 text-green-800',
  showcase: 'bg-purple-100 text-purple-800',
};

const eventTypeLabels = {
  camp: 'Training Camp',
  tryout: 'Tryouts',
  showcase: 'Showcase Event',
};

export default function Events() {
  const [selectedType, setSelectedType] = useState<EventType | 'all'>('all');

  const filteredEvents = selectedType === 'all'
    ? events
    : events.filter(event => event.type === selectedType);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-2"
          >
            Upcoming Events
          </motion.h2>
          <p className="text-body max-w-2xl mx-auto mb-8">
            Join our upcoming training camps, tryouts, and showcase events to take your game to the next level
          </p>

          {/* Event Type Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedType === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              All Events
            </button>
            {Object.entries(eventTypeLabels).map(([type, label]) => (
              <button
                key={type}
                onClick={() => setSelectedType(type as EventType)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedType === type
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card bg-white group hover:shadow-lg transition-shadow"
            >
              {/* Event Type Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${eventTypeStyles[event.type]}`}>
                {eventTypeLabels[event.type]}
              </div>

              {/* Event Title */}
              <h3 className="heading-3 mb-2 group-hover:text-primary transition-colors">
                {event.title}
              </h3>

              {/* Event Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>{event.ageGroup}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-body text-gray-600 mb-6">
                {event.description}
              </p>

              {/* Registration Info */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-gray-600">
                    Registration Deadline: {new Date(event.registrationDeadline).toLocaleDateString()}
                  </div>
                  {event.spotsLeft && (
                    <div className="text-sm font-medium text-primary">
                      {event.spotsLeft} spots left
                    </div>
                  )}
                </div>
                <Link
                  href={`/events/${event.id}`}
                  className="btn btn-primary w-full text-center"
                >
                  Register Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <Link
            href="/events"
            className="btn btn-outline-primary"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
} 