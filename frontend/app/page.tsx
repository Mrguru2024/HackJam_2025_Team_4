import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import StepCard from "@/components/StepCard";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-surface-subtle dark:bg-surface-default flex flex-col items-center px-0 sm:px-0">
      {/* Hero Section */}
      <Hero />

      {/* Steps Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-title">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard
            number="1"
            title="Complete Onboarding"
            description="Select your focus areas and set up your profile in just 3 simple steps."
            icon="🎯"
          />
          <StepCard
            number="2"
            title="Log Your Progress"
            description="Track your learning, career, and community activities to earn XP."
            icon="📝"
          />
          <StepCard
            number="3"
            title="Level Up & Earn Badges"
            description="Watch your progress grow and unlock achievements as you advance."
            icon="🏆"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-surface-subtle dark:bg-surface-default py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-title">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="XP Tracking"
              description="Earn experience points for every task you complete and track your progress."
              icon="⭐"
            />
            <FeatureCard
              title="Badge System"
              description="Unlock badges and titles based on your achievements and focus areas."
              icon="🏅"
            />
            <FeatureCard
              title="Leaderboard"
              description="See how you rank among other Per Scholas alumni and stay motivated."
              icon="📊"
            />
            <FeatureCard
              title="Community"
              description="Connect with fellow alumni and share your career journey."
              icon="👥"
            />
            <FeatureCard
              title="Progress Analytics"
              description="Get insights into your learning patterns and career growth."
              icon="📈"
            />
            <FeatureCard
              title="Gamified Learning"
              description="Make career development fun with challenges and rewards."
              icon="🎮"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-primary-subtle to-primary-lighter rounded-2xl p-8 md:p-12 text-center">
          <div className="text-4xl mb-4">💬</div>
          <blockquote className="text-xl md:text-2xl font-medium text-body mb-4">
            "LevelUp helped me stay motivated in my career transition. The
            gamification made learning fun and the community support was
            incredible!"
          </blockquote>
          <cite className="text-lg text-caption">
            - Sarah M., Per Scholas Graduate
          </cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-primary-default to-primary-lighter py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-negative">
            Ready to Level Up Your Career?
          </h2>
          <p className="text-xl mb-8 text-text-negative opacity-90">
            Join thousands of Per Scholas alumni who are already tracking their
            progress and earning badges.
          </p>
          <Link
            href="/auth/signup"
            className="bg-surface-default text-primary-default font-bold py-4 px-12 rounded-[16px] text-xl hover:bg-surface-subtle hover:text-primary-lighter transition-all duration-200 inline-block"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-surface-default dark:bg-surface-subtle py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-caption">
            © 2025 LevelUp. Built for Per Scholas alumni community.
          </p>
        </div>
      </footer>
    </main>
  );
}
