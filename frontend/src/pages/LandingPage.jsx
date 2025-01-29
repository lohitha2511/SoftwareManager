import { Link } from "react-router-dom";
import {
  CheckCircleIcon,
  ClockIcon,
  ChartBarIcon,
  UserGroupIcon,
  BellAlertIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";

const features = [
  {
    name: "Real-time Issue Tracking",
    description:
      "Track and manage issues in real-time with instant updates and notifications.",
    icon: ClockIcon,
  },
  {
    name: "Team Collaboration",
    description:
      "Work together seamlessly with team members on resolving issues.",
    icon: UserGroupIcon,
  },
  {
    name: "Priority Management",
    description:
      "Prioritize issues effectively with customizable priority levels.",
    icon: BellAlertIcon,
  },
  {
    name: "Progress Monitoring",
    description:
      "Monitor issue resolution progress with detailed status tracking.",
    icon: CheckCircleIcon,
  },
  {
    name: "Analytics Dashboard",
    description:
      "Gain insights with comprehensive analytics and reporting tools.",
    icon: ChartBarIcon,
  },
  {
    name: "Performance Metrics",
    description: "Track team performance and issue resolution efficiency.",
    icon: ArrowTrendingUpIcon,
  },
];

function LandingPage() {
  return (
    <div className="bg-white">
      <Navbar />

      <div className="relative pt-16">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-indigo-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Track Issues, Boost Productivity
              </h1>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600 border-l-4 border-indigo-200 pl-4">
              Streamline your project management with our powerful issue
              tracking system. Keep your team organized, focused, and efficient
              with real-time updates and comprehensive tracking features.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/register"
                className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white
                  shadow-md hover:shadow-xl hover:bg-indigo-500 transform hover:scale-105
                  transition-all duration-200 border border-indigo-600"
              >
                Start Free Trial
              </Link>
              <Link
                to="/login"
                className="group text-lg font-semibold leading-6 text-gray-900 flex items-center"
              >
                Learn more{" "}
                <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-white to-indigo-50/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <div
              className="inline-flex items-center rounded-full px-4 py-1 border border-indigo-200 
              bg-indigo-50 mb-4"
            >
              <span className="text-base font-semibold leading-7 text-indigo-600">
                Powerful Features
              </span>
            </div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to manage issues effectively
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our comprehensive suite of features helps you stay on top of
              issues and deliver results faster.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard key={feature.name} {...feature} />
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-50 border-t border-indigo-100">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-100 via-white to-indigo-100 opacity-50 blur-3xl" />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to get started?
              <br />
              Try Issue Tracker today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Join thousands of teams who use Issue Tracker to streamline their
              workflow and boost productivity.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/register"
                className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white
                  shadow-md hover:shadow-xl hover:bg-indigo-500 transform hover:scale-105
                  transition-all duration-200 border border-indigo-600"
              >
                Get started
              </Link>
              <Link
                to="/login"
                className="group text-sm font-semibold leading-6 text-gray-900 flex items-center"
              >
                Learn more{" "}
                <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
