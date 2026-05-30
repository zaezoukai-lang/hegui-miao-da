import { useState } from "react";
import { MessageSquare, Calculator, Newspaper, BookOpen } from "lucide-react";
import Home from "@/pages/Home";
import CalculatorPage from "@/pages/Calculator";
import Policies from "@/pages/Policies";
import Knowledge from "@/pages/Knowledge";

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'calculator' | 'policies' | 'knowledge'>('home');

  const tabs = [
    { id: 'home', label: '合规问答', icon: MessageSquare },
    { id: 'calculator', label: '赔偿计算', icon: Calculator },
    { id: 'policies', label: '政策变动', icon: Newspaper },
    { id: 'knowledge', label: '知识库', icon: BookOpen },
  ] as const;

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'calculator':
        return <CalculatorPage />;
      case 'policies':
        return <Policies />;
      case 'knowledge':
        return <Knowledge />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-white shadow-2xl">
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 px-2 py-1.5">
        <div className="flex items-center justify-around">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-0.5 py-2 px-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'fill-current' : ''}`} />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
