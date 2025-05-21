'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-2 text-white mb-6"
          >
            Start Your Professional Journey Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body text-white/90 mb-8"
          >
            Join our elite training programs and take the first step towards your professional football career.
            Our expert team is ready to guide you through every stage of your development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="btn btn-white"
            >
              Get Started
            </Link>
            <Link
              href="/programs"
              className="btn btn-outline-white"
            >
              Explore Programs
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 