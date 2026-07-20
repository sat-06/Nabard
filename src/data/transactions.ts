// Mock transaction data — would be replaced with real API
export type Transaction = {
  id: string;
  date: string;
  description: string;
  type: 'upi_in' | 'upi_out' | 'mandi_sale' | 'supplier_pay' | 'loan_emi';
  amount: number;
  category: string;
};

export const transactions: Transaction[] = [
  { id: 't1', date: '2026-07-20', description: 'Customer UPI payment', type: 'upi_in', amount: 1250, category: 'Sales' },
  { id: 't2', date: '2026-07-20', description: 'Mandi vegetable sale', type: 'mandi_sale', amount: 4200, category: 'Sales' },
  { id: 't3', date: '2026-07-19', description: 'Supplier — Ramesh Kirana', type: 'supplier_pay', amount: 3200, category: 'Inventory' },
  { id: 't4', date: '2026-07-19', description: 'Customer UPI payment', type: 'upi_in', amount: 850, category: 'Sales' },
  { id: 't5', date: '2026-07-18', description: 'Loan EMI — SBI', type: 'loan_emi', amount: 2500, category: 'Loan' },
  { id: 't6', date: '2026-07-18', description: 'Customer UPI payment', type: 'upi_in', amount: 2100, category: 'Sales' },
  { id: 't7', date: '2026-07-17', description: 'Mandi onion sale', type: 'mandi_sale', amount: 5600, category: 'Sales' },
  { id: 't8', date: '2026-07-17', description: 'Electricity bill', type: 'upi_out', amount: 1100, category: 'Utilities' },
  { id: 't9', date: '2026-07-16', description: 'Customer UPI payment', type: 'upi_in', amount: 750, category: 'Sales' },
  { id: 't10', date: '2026-07-16', description: 'Supplier — Devi Agrovet', type: 'supplier_pay', amount: 4800, category: 'Inventory' },
  { id: 't11', date: '2026-07-15', description: 'Mandi potato sale', type: 'mandi_sale', amount: 3200, category: 'Sales' },
  { id: 't12', date: '2026-07-14', description: 'Customer UPI payment', type: 'upi_in', amount: 1600, category: 'Sales' },
];

export type RiskAlert = {
  id: string;
  severity: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  date: string;
  impact: string;
  recommendation: string;
  status: 'active' | 'acknowledged' | 'resolved';
};

export const riskAlerts: RiskAlert[] = [
  { id: 'r1', severity: 'medium', title: 'Low-inflow pattern detected', description: 'Daily UPI inflows have dropped 18% over the last 5 days compared to the 30-day average.', date: '2026-07-20', impact: 'Potential ₹4,200 cash shortfall by Jul 28', recommendation: 'Defer supplier payment by 3 days. Prioritise mandi sales this week.', status: 'active' },
  { id: 'r2', severity: 'low', title: 'Onion price volatility', description: 'Mandi onion prices in Barabanki are up 14% week-on-week due to supply disruption from Maharashtra.', date: '2026-07-19', impact: 'Inventory cost may rise ₹800–1,200 next restock', recommendation: 'Consider stocking potato as a substitute. Raise retail onion price by ₹2/kg.', status: 'active' },
  { id: 'r3', severity: 'high', title: 'EMI due in 5 days', description: 'SBI Mudra loan EMI of ₹2,500 is due on July 25. Current 7-day balance projection shows a shortfall risk.', date: '2026-07-18', impact: 'Late payment penalty of ₹150 + credit score impact', recommendation: 'Accelerate 3 pending customer collections (total ₹3,100).', status: 'active' },
  { id: 'r4', severity: 'low', title: 'Monsoon delay — crop risk', description: 'IMD reports 12-day monsoon delay in Eastern UP. This may affect local vegetable supply and prices in August.', date: '2026-07-16', impact: 'August mandi prices may rise 8–15%', recommendation: 'Pre-book supplier contracts at current rates for August.', status: 'acknowledged' },
  { id: 'r5', severity: 'medium', title: 'Customer payment delayed', description: 'Regular wholesale customer (Sharma Canteen) has not paid July bill of ₹1,800 — 6 days overdue.', date: '2026-07-15', impact: 'Working capital gap of ₹1,800', recommendation: 'Send gentle reminder via WhatsApp template.', status: 'acknowledged' },
];

export type HealthFactor = {
  name: string;
  score: number;
  weight: number;
  trend: 'up' | 'down' | 'stable';
  detail: string;
};

export const healthFactors: HealthFactor[] = [
  { name: 'Cash Flow Stability', score: 72, weight: 30, trend: 'stable', detail: 'Consistent UPI inflows with moderate seasonal variation' },
  { name: 'Debt Service Coverage', score: 58, weight: 25, trend: 'down', detail: 'Loan EMI consumes 22% of monthly cash flow — above 15% threshold' },
  { name: 'Customer Diversification', score: 81, weight: 15, trend: 'up', detail: '28 unique UPI payers in last 30 days — well distributed' },
  { name: 'Savings Buffer', score: 45, weight: 15, trend: 'down', detail: '7-day running balance averaging ₹4,300 — below ₹8,000 safe threshold' },
  { name: 'Seasonal Preparedness', score: 67, weight: 10, trend: 'stable', detail: 'Monsoon contingency plan in place; mandi price hedge active' },
  { name: 'Credit Mix', score: 74, weight: 5, trend: 'up', detail: 'One active loan, on-time repayment history (11/12 months)' },
];

export const cashFlowProjection = {
  currentBalance: 48250,
  days: ['Jul 14', 'Jul 16', 'Jul 18', 'Jul 20', 'Jul 22', 'Jul 24', 'Jul 26', 'Jul 28', 'Jul 30', 'Aug 1', 'Aug 3', 'Aug 5', 'Aug 7', 'Aug 9'],
  actual: [43800, 45100, 47200, 48250, null, null, null, null, null, null, null, null, null, null],
  projected: [null, null, null, null, 49500, 47200, 45100, 42800, 41800, 43200, 46100, 48900, 50200, 51800],
  pessimistic: [null, null, null, null, 48200, 44500, 41000, 37500, 35200, 36100, 37800, 40100, 41200, 42800],
};

export const monthlySummary = [
  { month: 'Jan', inflow: 78000, outflow: 62000 },
  { month: 'Feb', inflow: 72000, outflow: 65000 },
  { month: 'Mar', inflow: 85000, outflow: 69000 },
  { month: 'Apr', inflow: 91000, outflow: 72000 },
  { month: 'May', inflow: 82000, outflow: 74000 },
  { month: 'Jun', inflow: 76000, outflow: 71000 },
  { month: 'Jul', inflow: 52000, outflow: 38000 },
];
