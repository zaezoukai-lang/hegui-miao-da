import React from 'react';
import { Calculator as CalculatorIcon, Coins, AlertTriangle, CheckCircle, FileText, RefreshCw } from 'lucide-react';
import { useAppStore } from '../store';
import { CITIES } from '../types';
import { cn } from '../lib/utils';

const Calculator: React.FC = () => {
  const {
    calculationInput,
    calculationResult,
    setCalculationInput,
    calculateCompensation,
    clearCalculation,
  } = useAppStore();

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
            <CalculatorIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">赔偿计算器</h1>
            <p className="text-xs text-gray-500">快速计算经济补偿金</p>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Result Card */}
          {calculationResult && (
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">计算结果</h2>
                <Coins className="w-6 h-6 opacity-80" />
              </div>
              <div className="mb-4">
                <p className="text-sm opacity-80 mb-1">补偿金额</p>
                <p className="text-4xl font-bold">
                  ¥{calculationResult.compensationAmount.toLocaleString()}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="opacity-70">补偿月数</p>
                  <p className="font-semibold">{calculationResult.compensationMonths}个月</p>
                </div>
                <div>
                  <p className="opacity-70">是否封顶</p>
                  <p className="font-semibold">{calculationResult.capped ? '是' : '否'}</p>
                </div>
              </div>
            </div>
          )}

          {/* Input Form */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-gray-500" />
              输入信息
            </h2>

            <div className="space-y-4">
              {/* City */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  所在城市
                </label>
                <select
                  value={calculationInput.city}
                  onChange={(e) => setCalculationInput({ city: e.target.value })}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {CITIES.map((city) => (
                    <option key={city.code} value={city.code}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Years of Service */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                工作年限（年）
              </label>
                <input
                  type="number"
                  step="0.1"
                  value={calculationInput.yearsOfService}
                  onChange={(e) => setCalculationInput({ yearsOfService: parseFloat(e.target.value) || 0 })}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="例如：3.5"
                />
              </div>

              {/* Monthly Salary */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                离职前12个月平均工资（元）
              </label>
                <input
                  type="number"
                  value={calculationInput.monthlySalary}
                  onChange={(e) => setCalculationInput({ monthlySalary: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="例如：15000"
                />
              </div>

              {/* Termination Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                解除类型
              </label>
                <div className="space-y-2">
                  {[
                    { value: 'negotiation', label: '协商解除', desc: '双方协商一致解除劳动合同' },
                    { value: 'fault', label: '过失性辞退', desc: '员工严重违纪等情况' },
                    { value: 'non_fault', label: '非过失性辞退', desc: '医疗期满、不能胜任等' },
                    { value: 'retrenchment', label: '经济性裁员', desc: '企业经营困难裁员' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={cn(
                        'flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all',
                        calculationInput.terminationType === option.value
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300'
                      )}
                    >
                      <input
                        type="radio"
                        name="terminationType"
                        value={option.value}
                        checked={calculationInput.terminationType === option.value}
                        onChange={(e) => setCalculationInput({ terminationType: e.target.value as any })}
                        className="mt-0.5"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{option.label}</p>
                        <p className="text-xs text-gray-500">{option.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Is Illegal? */}
              <div>
                <label className="flex items-center gap-3 p-3 rounded-xl border-2 border-gray-200 hover:border-gray-300 cursor-pointer transition-all">
                  <input
                    type="checkbox"
                    checked={calculationInput.isIllegal}
                    onChange={(e) => setCalculationInput({ isIllegal: e.target.checked })}
                  />
                  <div>
                    <p className="font-medium text-gray-900">是否为违法解除</p>
                    <p className="text-xs text-gray-500">如违法解除，赔偿为2N</p>
                  </div>
                </label>
              </div>

              {/* Advance Notice */}
              {!calculationInput.isIllegal && (
                <div>
                  <label className="flex items-center gap-3 p-3 rounded-xl border-2 border-gray-200 hover:border-gray-300 cursor-pointer transition-all">
                    <input
                      type="checkbox"
                      checked={calculationInput.advanceNotice}
                      onChange={(e) => setCalculationInput({ advanceNotice: e.target.checked })}
                    />
                    <div>
                      <p className="font-medium text-gray-900">已提前30天通知</p>
                      <p className="text-xs text-gray-500">未提前通知需支付代通知金（+1个月工资）</p>
                    </div>
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Result Details */}
          {calculationResult && (
            <>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  计算明细
                </h2>
                <div className="space-y-3">
                  {calculationResult.breakdown.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="font-medium text-gray-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-500" />
                  法律依据
                </h2>
                <div className="space-y-2">
                  {calculationResult.legalRefs.map((ref, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {ref}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  操作建议
                </h2>
                <div className="space-y-2">
                  {calculationResult.actionItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-orange-800">{calculationResult.riskWarning}</p>
                </div>
              </div>
            </>
          )}

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={calculateCompensation}
              className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/25"
            >
              {calculationResult ? '重新计算' : '开始计算'}
            </button>
            {calculationResult && (
              <button
                onClick={clearCalculation}
                className="px-4 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
