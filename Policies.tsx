import React from 'react';
import { Newspaper, Calendar, AlertCircle, CheckCircle, ExternalLink, Clock } from 'lucide-react';
import { useAppStore } from '../store';
import { CITIES } from '../types';

const Policies: React.FC = () => {
  const { policies } = useAppStore();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'announced':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
            <AlertCircle className="w-3 h-3" />
            已发布
          </span>
        );
      case 'upcoming':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
            <Clock className="w-3 h-3" />
            即将生效
          </span>
        );
      case 'effective':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
            <CheckCircle className="w-3 h-3" />
            已生效
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
            <Newspaper className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">政策变动</h1>
            <p className="text-xs text-gray-500">最新政策推送</p>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl mx-auto space-y-4">
          {policies.map((policy) => (
            <div key={policy.id} className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {getStatusBadge(policy.status)}
                    <span className="text-xs text-gray-500">
                      {CITIES.find((c) => c.code === policy.city)?.name}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{policy.title}</h3>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">{policy.impactSummary}</p>

              <div className="space-y-2 mb-4">
                {policy.actionItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>生效日期：{policy.effectiveDate}</span>
                </div>
                <a
                  href={policy.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700 font-medium"
                >
                  查看原文
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Policies;
