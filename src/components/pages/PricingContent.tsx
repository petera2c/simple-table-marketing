"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageWrapper from "@/components/PageWrapper";
import {
  faCheck,
  faRocket,
  faStar,
  faHeart,
  faBolt,
  faCrown,
  faGift,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { redirectToCheckout } from "@/utils/stripe";
import { getStripePriceId, STRIPE_CUSTOMER_PORTAL_URL } from "@/constants/stripe";

interface PlanFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface Plan {
  name: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  billingCycle: string;
  description: string;
  features: PlanFeature[];
  cta: string;
  ctaVariant: "default" | "primary";
  popular?: boolean;
  icon: any;
  iconColor: string;
  borderColor: string;
  backgroundColor: string;
  specialOffer?: string;
}

const PricingContent: React.FC = () => {
  const router = useRouter();
  const [isAnnual, setIsAnnual] = useState(false);

  const plans: Plan[] = [
    {
      name: "FREE",
      subtitle: "For Individuals & Startups",
      price: "$0",
      billingCycle: "forever",
      description:
        "Perfect for fun projects, bootstrapped startups, and pre-revenue companies. Unlimited users per product license.",
      features: [
        { text: "Full Simple Table library access", included: true, highlight: true },
        { text: "Unlimited users per product", included: true, highlight: true },
        { text: "No per-engineer pricing", included: true, highlight: true },
        { text: "All core features (sorting, filtering, editing)", included: true },
        { text: "Built-in themes & TypeScript support", included: true },
        { text: "MIT License & commercial use", included: true },
        { text: "Community support", included: true },
        { text: "Priority support", included: false },
        { text: "Direct developer access", included: false },
      ],
      cta: "Get Started Free",
      ctaVariant: "default",
      icon: faHeart,
      iconColor: "text-green-500",
      borderColor: "border-green-200 dark:border-green-800",
      backgroundColor: "bg-green-50 dark:bg-green-950",
    },
    {
      name: "PRO",
      subtitle: "For Growing Businesses",
      price: isAnnual ? "$850" : "$85",
      originalPrice: isAnnual ? "$1,020" : undefined,
      billingCycle: isAnnual ? "per year" : "per month",
      description:
        "Enhanced support and priority access to new features. Unlimited users per product license.",
      features: [
        { text: "Everything in FREE", included: true, highlight: true },
        { text: "Priority email & Discord support", included: true, highlight: true },
        { text: "Direct developer access", included: true },
        { text: "Feature request prioritization", included: true },
        { text: "Early access to new features", included: true },
        { text: "Custom implementation guidance", included: true },
        { text: "30-day money-back guarantee", included: true, highlight: true },
      ],
      cta: "Start Pro Plan",
      ctaVariant: "primary",
      popular: true,
      icon: faCrown,
      iconColor: "text-blue-500",
      borderColor: "border-blue-200 dark:border-blue-800",
      backgroundColor: "bg-blue-50 dark:bg-blue-950",
      specialOffer: "50% off for first 50 customers! Use code: first_50",
    },
  ];

  const handleGetStarted = async (planName: string) => {
    if (planName === "FREE") {
      router.push("/docs/installation");
    } else {
      try {
        // Redirect to Stripe Checkout for PRO plan
        const priceId = getStripePriceId(isAnnual ? "annual" : "monthly");

        console.log("Redirecting to checkout with:", { priceId, isAnnual });

        await redirectToCheckout(priceId, isAnnual);
      } catch (error) {
        console.error("Error starting checkout:", error);
        alert("There was an error starting the checkout process. Please try again.");
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero section */}
        <motion.section
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Simple Pricing
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Simple, transparent pricing that never changes based on your revenue or team size. Pay
            once per software product that uses Simple Table - no matter how big your company grows.
          </motion.p>

          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="relative flex items-center gap-4">
              <span
                className={`text-lg ${
                  !isAnnual
                    ? "font-semibold text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                Monthly
              </span>
              <button
                className={`relative w-16 h-8 rounded-full transition-colors duration-200 ${
                  isAnnual ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
                }`}
                onClick={() => setIsAnnual(!isAnnual)}
              >
                <div
                  className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-transform duration-200 ${
                    isAnnual ? "translate-x-9" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`text-lg ${
                  isAnnual
                    ? "font-semibold text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                Annual
              </span>
              {isAnnual && (
                <span className="absolute -right-32 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <FontAwesomeIcon icon={faGift} />
                  Save 17%
                </span>
              )}
            </div>
          </motion.div>
        </motion.section>

        {/* Pricing Cards */}
        <motion.section
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 ${
                plan.borderColor
              } ${plan.popular ? "scale-105 shadow-2xl" : ""}`}
              variants={itemVariants}
              whileHover={{ scale: plan.popular ? 1.05 : 1.02, transition: { duration: 0.2 } }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <FontAwesomeIcon icon={faStar} />
                    Most Popular
                  </span>
                </div>
              )}

              {plan.specialOffer && (
                <div className="absolute -top-2 -right-2">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                    Limited Time
                  </span>
                </div>
              )}

              <div
                className={`w-12 h-12 rounded-full ${plan.backgroundColor} flex items-center justify-center mb-4`}
              >
                <FontAwesomeIcon icon={plan.icon} className={`text-lg ${plan.iconColor}`} />
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{plan.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{plan.subtitle}</p>

              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-800 dark:text-white">
                    {plan.price}
                  </span>
                  {plan.originalPrice && (
                    <span className="text-lg text-gray-500 dark:text-gray-400 line-through">
                      {plan.originalPrice}
                    </span>
                  )}
                  <span className="text-gray-600 dark:text-gray-400">/{plan.billingCycle}</span>
                </div>
                {plan.specialOffer && (
                  <p className="text-sm text-red-600 dark:text-red-400 font-medium mt-2">
                    {plan.specialOffer}
                  </p>
                )}
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>

              <Button
                type={plan.ctaVariant}
                size="large"
                className="w-full mb-4 h-10"
                onClick={() => handleGetStarted(plan.name)}
              >
                <FontAwesomeIcon icon={plan.name === "FREE" ? faRocket : faBolt} className="mr-2" />
                {plan.cta}
              </Button>

              <div className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div
                      className={`${
                        feature.included ? "text-green-500" : "text-gray-300 dark:text-gray-600"
                      }`}
                    >
                      <FontAwesomeIcon icon={faCheck} className="text-sm" />
                    </div>
                    <span
                      className={`text-sm ${
                        feature.included
                          ? feature.highlight
                            ? "text-gray-800 dark:text-white font-medium"
                            : "text-gray-700 dark:text-gray-300"
                          : "text-gray-400 dark:text-gray-500 line-through"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.section>
        {/* Existing Customer Billing Management */}
        <motion.section
          className="mt-16 text-center border-t border-gray-200 dark:border-gray-700 pt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
            Already have an account?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Manage your billing, update payment methods, or cancel your subscription anytime.
          </p>
          <button
            onClick={() => window.open(STRIPE_CUSTOMER_PORTAL_URL, "_blank")}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            <FontAwesomeIcon icon={faCreditCard} />
            Manage your billing here
          </button>
        </motion.section>
        {/* Call to Action */}
        <motion.section
          className="mt-20 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Ready to Build Amazing Tables?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who trust Simple Table for their data visualization needs.
            No per-user fees - one license covers unlimited users per product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              type="primary"
              size="large"
              onClick={() => handleGetStarted("FREE")}
              className="h-12 px-8"
            >
              <FontAwesomeIcon icon={faRocket} className="mr-2" />
              Start Free Today
            </Button>
            <Button size="large" onClick={() => handleGetStarted("PRO")} className="h-12 px-8">
              <FontAwesomeIcon icon={faCrown} className="mr-2" />
              Upgrade to PRO
            </Button>
          </div>
        </motion.section>
      </div>
    </PageWrapper>
  );
};

export default PricingContent;
