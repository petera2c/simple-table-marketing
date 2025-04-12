import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";
import Link from "next/link";
import SEO from "../../components/SEO";

interface MobileUnsupportedPageProps {
  featureName: string;
}

export default function MobileUnsupportedPage({ featureName }: MobileUnsupportedPageProps) {
  return (
    <>
      <SEO
        title={`${featureName} - Desktop Only`}
        description={`The ${featureName} is available only on desktop devices due to its advanced interface requirements.`}
        canonicalUrl="/mobile-unsupported"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center p-8 min-h-[60vh] text-center">
          <div className="flex items-center justify-center mb-6 text-4xl text-gray-400">
            <FontAwesomeIcon icon={faMobileAlt} className="mr-4" />
            <span className="text-gray-300">→</span>
            <FontAwesomeIcon icon={faDesktop} className="ml-4 text-blue-500" />
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {featureName} is only available on desktop
          </h1>

          <p className="text-gray-600 mb-8 max-w-md">
            The {featureName} requires a larger screen for the best experience. Please visit this
            page on a desktop device to access all features.
          </p>

          <div className="space-y-4">
            <Link href="/docs">
              <Button type="primary" size="large">
                Go to Documentation
              </Button>
            </Link>

            <div>
              <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
