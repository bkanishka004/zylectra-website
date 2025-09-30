import React from "react";
import {
  CheckCircle,
  BatteryWarning,
  Star,
  Zap,
  AlertTriangle,
  TrendingDown,
} from "lucide-react";

const Section6 = () => {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-400 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-red-400 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Be the charging network{" "}
            <span className="relative inline-block">
              <span className="text-emerald-600">operators trust</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
            </span>
          </h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* With Zylectra - Success Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white rounded-2xl shadow-xl border-2 border-emerald-200 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              {/* Header with Badge */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-emerald-700 flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  With Zylectra
                </h3>
                <div className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full">
                  SMART INFRASTRUCTURE
                </div>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">Maximum uptime & revenue per charger</span>
                </div>

                <div className="flex items-center gap-4 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">Predictive maintenance prevents failures</span>
                </div>

                <div className="flex items-center gap-4 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">Leading the EV charging revolution</span>
                </div>
              </div>

              {/* Success Indicator */}
              <div className="mt-6 flex items-center justify-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-semibold">
                  <div className="w-2 h-2 bg-emerald-200 rounded-full animate-pulse"></div>
                  <span>Industry Leader Status</span>
                </div>
              </div>
            </div>
          </div>

          {/* Without Zylectra - Problem Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative bg-white rounded-2xl shadow-xl border-2 border-gray-300 p-8 hover:shadow-2xl transition-all duration-300">
              {/* Header with Warning Badge */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-700 flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                  Without Zylectra
                </h3>
                <div className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                  HIGH RISK
                </div>
              </div>

              {/* Problems List */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-red-50 rounded-xl border border-red-100">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <BatteryWarning className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700">Unexpected downtime</span>
                </div>

                <div className="flex items-center gap-4 p-3 bg-red-50 rounded-xl border border-red-100">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700">Lost revenue from poor utilization</span>
                </div>

                <div className="flex items-center gap-4 p-3 bg-red-50 rounded-xl border border-red-100">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700">Frustrated drivers & negative reviews</span>
                </div>
              </div>

              {/* Problem Indicator */}
              <div className="mt-6 flex items-center justify-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-full text-sm font-semibold">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  <span>Revenue Leakage Mode</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Hint */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg">
            Which charging network do you want to operate?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section6;