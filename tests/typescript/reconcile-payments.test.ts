import { describe, test, expect } from 'vitest';
import { reconcilePayments } from '../../tasks/7.typescript/reconcile-payments';

describe('reconcilePayments', () => {
  const samplePaymentList = [
    { _id: 'other', sum: 3508, in: 3508 },
    { _id: 'cash', sum: 13863, in: 13863 },
    { _id: 'Room', sum: 3819, in: 3819 },
    { _id: 'UPI', sum: 1634, in: 1634 },
    { _id: 'card', sum: 4233, in: 4233 }
  ];

  const sampleRefundList = [
    { _id: 'other', sum: 4915, out: 4915 },
    { _id: 'cash', sum: 0, out: 0 }
  ];

  test('should reconcile payments and refunds correctly', () => {
    const expected = [
      { _id: 'other', sum: -1407, in: 3508, out: 4915 },
      { _id: 'cash', sum: 13863, in: 13863, out: 0 },
      { _id: 'Room', sum: 3819, in: 3819, out: 0 },
      { _id: 'UPI', sum: 1634, in: 1634, out: 0 },
      { _id: 'card', sum: 4233, in: 4233, out: 0 }
    ];
    
    expect(reconcilePayments(samplePaymentList, sampleRefundList)).toEqual(expected);
  });

  test('should handle empty refund list', () => {
    const expected = [
      { _id: 'other', sum: 3508, in: 3508, out: 0 },
      { _id: 'cash', sum: 13863, in: 13863, out: 0 },
      { _id: 'Room', sum: 3819, in: 3819, out: 0 },
      { _id: 'UPI', sum: 1634, in: 1634, out: 0 },
      { _id: 'card', sum: 4233, in: 4233, out: 0 }
    ];
    
    expect(reconcilePayments(samplePaymentList, [])).toEqual(expected);
  });

  test('should handle empty payment list', () => {
    const refundList = [
      { _id: 'other', sum: 4915, out: 4915 },
      { _id: 'cash', sum: 100, out: 100 }
    ];
    const expected = [
      { _id: 'other', sum: -4915, in: 0, out: 4915 },
      { _id: 'cash', sum: -100, in: 0, out: 100 }
    ];
    
    expect(reconcilePayments([], refundList)).toEqual(expected);
  });

  test('should handle both lists empty', () => {
    expect(reconcilePayments([], [])).toEqual([]);
  });

  test('should handle refunds without corresponding payments', () => {
    const paymentList = [
      { _id: 'cash', sum: 1000, in: 1000 }
    ];
    const refundList = [
      { _id: 'cash', sum: 200, out: 200 },
      { _id: 'card', sum: 300, out: 300 }
    ];
    const expected = [
      { _id: 'cash', sum: 800, in: 1000, out: 200 },
      { _id: 'card', sum: -300, in: 0, out: 300 }
    ];
    
    expect(reconcilePayments(paymentList, refundList)).toEqual(expected);
  });

  test('should handle payments without corresponding refunds', () => {
    const paymentList = [
      { _id: 'cash', sum: 1000, in: 1000 },
      { _id: 'card', sum: 500, in: 500 }
    ];
    const refundList = [
      { _id: 'cash', sum: 200, out: 200 }
    ];
    const expected = [
      { _id: 'cash', sum: 800, in: 1000, out: 200 },
      { _id: 'card', sum: 500, in: 500, out: 0 }
    ];
    
    expect(reconcilePayments(paymentList, refundList)).toEqual(expected);
  });

  test('should handle equal payments and refunds', () => {
    const paymentList = [
      { _id: 'cash', sum: 1000, in: 1000 }
    ];
    const refundList = [
      { _id: 'cash', sum: 1000, out: 1000 }
    ];
    const expected = [
      { _id: 'cash', sum: 0, in: 1000, out: 1000 }
    ];
    
    expect(reconcilePayments(paymentList, refundList)).toEqual(expected);
  });

  test('should handle multiple refunds for same payment method', () => {
    const paymentList = [
      { _id: 'cash', sum: 1000, in: 1000 }
    ];
    const refundList = [
      { _id: 'cash', sum: 300, out: 300 },
      { _id: 'cash', sum: 200, out: 200 }
    ];
    const expected = [
      { _id: 'cash', sum: 500, in: 1000, out: 500 }
    ];
    
    expect(reconcilePayments(paymentList, refundList)).toEqual(expected);
  });
});