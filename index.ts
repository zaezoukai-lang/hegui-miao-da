export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface Chat {
  id: string;
  messages: Message[];
  createdAt: Date;
}

export interface City {
  code: string;
  name: string;
}

export interface Policy {
  id: string;
  title: string;
  city: string;
  category: string;
  effectiveDate: string;
  status: 'announced' | 'effective' | 'upcoming';
  impactSummary: string;
  actionItems: string[];
  sourceUrl: string;
  sourceName: string;
}

export interface KnowledgeArticle {
  id: string;
  title: string;
  category: string;
  subCategory: string;
  tags: string[];
  summary: string;
  content: string;
  difficulty: 'basic' | 'intermediate' | 'advanced';
  updatedAt: string;
  viewCount: number;
  helpfulCount: number;
}

export interface CalculationInput {
  yearsOfService: number;
  monthlySalary: number;
  city: string;
  terminationType: 'negotiation' | 'fault' | 'non_fault' | 'retrenchment';
  advanceNotice: boolean;
  isIllegal: boolean;
}

export interface CalculationResult {
  compensationMonths: number;
  compensationAmount: number;
  capped: boolean;
  breakdown: {
    label: string;
    value: string;
  }[];
  legalRefs: string[];
  actionItems: string[];
  riskWarning: string;
}

export interface User {
  id: string;
  nickname: string;
  avatar?: string;
  enterprise?: {
    name: string;
    size: string;
    industry: string;
    city: string;
  };
  subscription: {
    plan: 'free' | 'pro' | 'team';
    startedAt: string;
    expiresAt: string;
    autoRenew: boolean;
    trialEndsAt?: string;
  };
  usage: {
    questionsToday: number;
    questionsTotal: number;
    calculationsTotal: number;
    lastActiveAt: string;
  };
  preferences: {
    watchedCities: string[];
    notificationEnabled: boolean;
    pushCategories: string[];
  };
}

export const CITIES: City[] = [
  { code: 'shanghai', name: '上海' },
  { code: 'beijing', name: '北京' },
  { code: 'guangzhou', name: '广州' },
  { code: 'shenzhen', name: '深圳' },
  { code: 'hangzhou', name: '杭州' },
  { code: 'chengdu', name: '成都' },
];

export const SOCIAL_INSURANCE_RATES = {
  shanghai: {
    enterprise: {
      pension: 0.16,
      medical: 0.095,
      unemployment: 0.005,
      workInjury: 0.005,
      maternity: 0.01,
      housingFund: 0.07,
    },
    personal: {
      pension: 0.08,
      medical: 0.02,
      unemployment: 0.005,
      workInjury: 0,
      maternity: 0,
      housingFund: 0.07,
    },
    averageSalary3x: 36549,
    minBase: 7310,
    maxBase: 36549,
  },
  beijing: {
    enterprise: {
      pension: 0.16,
      medical: 0.09,
      unemployment: 0.005,
      workInjury: 0.004,
      maternity: 0.008,
      housingFund: 0.05,
    },
    personal: {
      pension: 0.08,
      medical: 0.02,
      unemployment: 0.005,
      workInjury: 0,
      maternity: 0,
      housingFund: 0.05,
    },
    averageSalary3x: 34857,
    minBase: 6971,
    maxBase: 34857,
  },
  shenzhen: {
    enterprise: {
      pension: 0.14,
      medical: 0.05,
      unemployment: 0.007,
      workInjury: 0.0016,
      maternity: 0.0045,
      housingFund: 0.05,
    },
    personal: {
      pension: 0.08,
      medical: 0.02,
      unemployment: 0.003,
      workInjury: 0,
      maternity: 0,
      housingFund: 0.05,
    },
    averageSalary3x: 30876,
    minBase: 2360,
    maxBase: 30876,
  },
};

export const SAMPLE_POLICIES: Policy[] = [
  {
    id: 'pol_001',
    title: '上海市2026年度社保缴费基数调整',
    city: 'shanghai',
    category: 'social_insurance',
    effectiveDate: '2026-07-01',
    status: 'announced',
    impactSummary: '社保缴费基数上下限上调约5%，企业每月每员工社保支出预计增加约¥200',
    actionItems: [
      '核实员工社保基数是否低于新下限',
      '7月payroll前完成基数调整',
      '通知员工个人部分同步调整',
    ],
    sourceUrl: 'https://rsj.sh.gov.cn/',
    sourceName: '上海市人力资源和社会保障局',
  },
  {
    id: 'pol_002',
    title: '北京市最低工资标准上调',
    city: 'beijing',
    category: 'minimum_wage',
    effectiveDate: '2026-09-01',
    status: 'upcoming',
    impactSummary: '最低工资标准从¥2420上调至¥2620，加班费计算基数同步调整',
    actionItems: [
      '检查低于新标准的员工工资',
      '更新劳动合同中的工资条款',
      '调整加班工资计算公式',
    ],
    sourceUrl: 'https://rsj.beijing.gov.cn/',
    sourceName: '北京市人力资源和社会保障局',
  },
  {
    id: 'pol_003',
    title: '深圳市竞业限制新规',
    city: 'shenzhen',
    category: 'non_compete',
    effectiveDate: '2026-01-01',
    status: 'effective',
    impactSummary: '竞业限制补偿金最低标准调整为离职前月平均工资的50%',
    actionItems: [
      '审查现有竞业限制协议',
      '更新协议中的补偿标准',
      '评估竞业限制的必要性',
    ],
    sourceUrl: 'https://hrss.sz.gov.cn/',
    sourceName: '深圳市人力资源和社会保障局',
  },
];

export const SAMPLE_ARTICLES: KnowledgeArticle[] = [
  {
    id: 'art_001',
    title: '员工自愿放弃社保，公司还需要补缴吗？',
    category: 'social_insurance',
    subCategory: 'common_questions',
    tags: ['社保', '自愿放弃', '补缴', '风险'],
    summary: '员工自愿放弃社保的声明无效，公司仍须补缴，并承担滞纳金和罚款风险。',
    content: `## 法律依据

《社会保险法》第58条、第86条规定，用人单位应当自用工之日起30日内为其职工向社会保险经办机构申请办理社会保险登记。缴纳社保是法定义务，不能通过协议免除。

## 司法实践

各地法院均认定"自愿放弃社保"协议无效。以上海地区为例，2025年社保类争议中企业败诉率达82%，平均赔付金额4.1万元/案。

## 操作建议

1. 立即停止让员工签署"自愿放弃社保"协议
2. 对已签署协议的员工，尽快补缴社保
3. 补缴时需缴纳每日万分之五的滞纳金（逾期部分）
4. 如被投诉，可能面临欠缴数额1-3倍的罚款`,
    difficulty: 'basic',
    updatedAt: '2026-05-20',
    viewCount: 1234,
    helpfulCount: 892,
  },
  {
    id: 'art_002',
    title: '试用期不交社保合法吗？',
    category: 'social_insurance',
    subCategory: 'common_questions',
    tags: ['社保', '试用期', '违法', '补缴'],
    summary: '试用期必须缴纳社保，这是法律明确规定的义务。',
    content: `## 法律规定

试用期包含在劳动合同期限内，企业必须为试用期员工缴纳社保。《社会保险法》第58条规定，用人单位应当自用工之日起30日内为其职工办理社会保险登记。

## 法律后果

- 员工可以随时解除劳动合同并要求经济补偿
- 社保部门可以责令限期补缴，并处以滞纳金
- 可能面临行政处罚

## 正确做法

1. 入职当日即办理社保登记
2. 按实际工资足额缴纳
3. 保留社保缴纳凭证`,
    difficulty: 'basic',
    updatedAt: '2026-05-18',
    viewCount: 987,
    helpfulCount: 756,
  },
  {
    id: 'art_003',
    title: 'N+1和2N的区别是什么？',
    category: 'termination',
    subCategory: 'compensation',
    tags: ['经济补偿', '赔偿金', '解除劳动合同', 'N+1', '2N'],
    summary: 'N+1是合法解除的经济补偿，2N是违法解除的赔偿金，两者性质不同，不能同时主张。',
    content: `## N的计算

N = 工作年限 × 离职前12个月平均工资

- 工作满1年支付1个月工资
- 6个月以上不满1年按1年计算
- 不满6个月支付半个月工资
- 工资超过当地社平3倍的按3倍封顶

## N+1的适用场景

- 医疗期满不能工作
- 不能胜任工作，经培训或调岗后仍不能胜任
- 客观情况发生重大变化
- +1是未提前30天通知的代通知金

## 2N的适用场景

- 违法解除劳动合同
- 违法终止劳动合同
- 2N是赔偿金，具有惩罚性质
- 2N和N+1不能同时主张`,
    difficulty: 'intermediate',
    updatedAt: '2026-05-15',
    viewCount: 2345,
    helpfulCount: 1890,
  },
];

export const HOT_QUESTIONS = [
  '员工自愿放弃社保，公司还需要补缴吗？',
  '试用期不交社保合法吗？',
  'N+1和2N的区别是什么？',
  '末位淘汰合法吗？',
  '竞业限制补偿金最低多少？',
  '加班工资怎么算？',
];

export const KNOWLEDGE_CATEGORIES = [
  { id: 'social_insurance', name: '社保公积金', icon: 'shield' },
  { id: 'work_hours', name: '工时与加班', icon: 'clock' },
  { id: 'labor_contract', name: '劳动合同', icon: 'file-text' },
  { id: 'termination', name: '解除与裁员', icon: 'user-x' },
  { id: 'non_compete', name: '竞业限制', icon: 'lock' },
];
