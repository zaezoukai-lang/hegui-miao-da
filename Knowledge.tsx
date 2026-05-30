import React, { useState } from 'react';
import { BookOpen, Search, Tag, Clock, ThumbsUp, ChevronRight, Shield, Briefcase, FileText, UserX, Lock } from 'lucide-react';
import { useAppStore } from '../store';
import { KNOWLEDGE_CATEGORIES } from '../types';

const Knowledge: React.FC = () => {
  const { articles } = useAppStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'social_insurance':
        return <Shield className="w-4 h-4" />;
      case 'work_hours':
        return <Clock className="w-4 h-4" />;
      case 'labor_contract':
        return <FileText className="w-4 h-4" />;
      case 'termination':
        return <UserX className="w-4 h-4" />;
      case 'non_compete':
        return <Lock className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'basic':
        return 'bg-green-100 text-green-700';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-700';
      case 'advanced':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  if (selectedArticle) {
    return (
      <div className="flex flex-col h-full bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedArticle(null)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 rotate-180" />
            </button>
            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-semibold text-gray-900 truncate">{selectedArticle.title}</h1>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="max-w-2xl mx-auto">
            <article className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span className={getDifficultyColor(selectedArticle.difficulty)} className="px-2.5 py-1 rounded-full text-xs font-medium">
                  {selectedArticle.difficulty === 'basic' ? '基础' : selectedArticle.difficulty === 'intermediate' ? '进阶' : '高级'}
                </span>
                <span className="text-xs text-gray-500">
                  更新于 {selectedArticle.updatedAt}
                </span>
              </div>

              <p className="text-gray-600 mb-6">{selectedArticle.summary}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedArticle.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="prose prose-sm max-w-none">
                {selectedArticle.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                        {paragraph.slice(3)}
                      </h2>
                    );
                  }
                  if (paragraph.trim() === '') {
                    return <br key={index} />;
                  }
                  return (
                    <p key={index} className="text-gray-700 mb-3 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {selectedArticle.viewCount} 次阅读
                    </span>
                    <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      {selectedArticle.helpfulCount} 人觉得有帮助
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">合规知识库</h1>
            <p className="text-xs text-gray-500">专业劳动法律知识</p>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl mx-auto space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索合规知识..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                !selectedCategory
                  ? 'bg-purple-500 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300'
              }`}
            >
              全部
            </button>
            {KNOWLEDGE_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedCategory === category.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300'
                }`}
              >
                {category.icon === 'shield' && <Shield className="w-3.5 h-3.5" />}
                {category.icon === 'clock' && <Clock className="w-3.5 h-3.5" />}
                {category.icon === 'file-text' && <FileText className="w-3.5 h-3.5" />}
                {category.icon === 'user-x' && <UserX className="w-3.5 h-3.5" />}
                {category.icon === 'lock' && <Lock className="w-3.5 h-3.5" />}
                {category.name}
              </button>
            ))}
          </div>

          {/* Articles */}
          <div className="space-y-3">
            {filteredArticles.map((article) => (
              <button
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="w-full text-left bg-white rounded-2xl p-5 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      {getCategoryIcon(article.category)}
                      <span className={getDifficultyColor(article.difficulty)} className="px-2 py-0.5 rounded-full text-xs font-medium">
                        {article.difficulty === 'basic' ? '基础' : article.difficulty === 'intermediate' ? '进阶' : '高级'}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 leading-tight">{article.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{article.summary}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" />
                        {article.viewCount}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-3.5 h-3.5" />
                        {article.helpfulCount}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 ml-3" />
                </div>
              </button>
            ))}
            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">没有找到相关知识</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
