interface PaymentItem {
  _id: string;
  sum: number;
  in: number;
}

interface RefundItem {
  _id: string;
  sum: number;
  out: number;
}

interface ReconciledItem {
  _id: string;
  sum: number;
  in: number;
  out: number;
}

/**
 * Reconcile payment and refund lists by merging and calculating net amounts
 * @param paymentList - Array of payment items
 * @param refundList - Array of refund items
 * @returns Merged array with net calculations (sum = in - out)
 */
export function reconcilePayments(
  paymentList: PaymentItem[], 
  refundList: RefundItem[]
): ReconciledItem[] {
  // Implementation goes here
}