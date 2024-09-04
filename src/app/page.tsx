import Image from "next/image";
import { client } from "./client";
import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900">
      <Head>
        <title>SurveyChain - Decentralized Surveys</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-20">
        <nav className="flex justify-between items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white"
          >
            SurveyChain
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-x-4"
          >
            <a href="#" className="btn btn-ghost text-white">Home</a>
            <a href="#" className="btn btn-ghost text-white">About</a>
            <a href="#" className="btn btn-ghost text-white">Contact</a>
          </motion.div>
        </nav>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-1/2 text-white"
          >
            <h1 className="text-5xl font-bold mb-6">
              Revolutionize Your Surveys with Blockchain
            </h1>
            <p className="text-xl mb-8">
              Create, participate, and earn rewards in a decentralized survey ecosystem.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary btn-lg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get Started
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:w-1/2 mt-12 lg:mt-0"
          >
            <Spline scene="https://prod.spline.design/6Yk7nFGwYEwXCfge/scene.splinecode" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {['Create', 'Participate', 'Earn'].map((item, index) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 p-8 rounded-lg text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">{item}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra justo eu nulla efficitur.</p>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <footer className="text-center py-8 text-white">
        <p>&copy; 2024 SurveyChain. All rights reserved.</p>
      </footer>
    </div>
  );
}