import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { CalculatorIcon, CurrencyRupeeIcon, HomeIcon, DocumentTextIcon, BanknotesIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

const taxSlabs = [
  { min: 0, max: 300000, rate: 0 },
  { min: 300001, max: 600000, rate: 5 },
  { min: 600001, max: 900000, rate: 10 },
  { min: 900001, max: 1200000, rate: 15 },
  { min: 1200001, max: 1500000, rate: 20 },
  { min: 1500001, max: Infinity, rate: 30 }
];

const standardDeduction = 50000;
const max80C = 150000;
const maxHRA = 0.4; // 40% of basic salary

export default function TaxCalculator() {
  const [taxResult, setTaxResult] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const calculateTax = (data) => {
    const {
      annualIncome,
      basicSalary,
      hraReceived,
      rentPaid,
      deductions80C,
      otherDeductions
    } = data;

    // Calculate HRA exemption
    const hraExemption = Math.min(
      hraReceived,
      rentPaid - (0.1 * basicSalary),
      maxHRA * basicSalary
    );

    // Calculate total deductions
    const totalDeductions = standardDeduction + 
      Math.min(deductions80C, max80C) + 
      hraExemption + 
      Number(otherDeductions || 0);

    // Calculate taxable income
    const taxableIncome = annualIncome - totalDeductions;

    // Calculate tax for each slab
    let totalTax = 0;
    let remainingIncome = taxableIncome;

    for (const slab of taxSlabs) {
      if (remainingIncome <= 0) break;

      const slabAmount = Math.min(
        remainingIncome,
        slab.max - slab.min
      );

      if (slabAmount > 0) {
        totalTax += (slabAmount * slab.rate) / 100;
        remainingIncome -= slabAmount;
      }
    }

    // Add 4% health and education cess
    const cess = totalTax * 0.04;
    const finalTax = totalTax + cess;

    setTaxResult({
      taxableIncome,
      totalDeductions,
      taxBeforeCess: totalTax,
      cess,
      finalTax,
      effectiveTaxRate: (finalTax / annualIncome) * 100
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center gap-3 mb-8">
        <CalculatorIcon className="w-8 h-8 text-primary-600" />
        <h2 className="text-2xl font-bold text-gray-900">Income Tax Calculator</h2>
      </div>
      
      <form onSubmit={handleSubmit(calculateTax)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Annual Income
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CurrencyRupeeIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                {...register('annualIncome', { required: true, min: 0 })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                placeholder="Enter annual income"
              />
            </div>
            {errors.annualIncome && (
              <p className="mt-1 text-sm text-red-600">Annual income is required</p>
            )}
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Basic Salary
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BanknotesIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                {...register('basicSalary', { required: true, min: 0 })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                placeholder="Enter basic salary"
              />
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <label className="block text-sm font-medium text-gray-700 mb-2">
              HRA Received
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HomeIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                {...register('hraReceived', { min: 0 })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                placeholder="Enter HRA received"
              />
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rent Paid
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HomeIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                {...register('rentPaid', { min: 0 })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                placeholder="Enter rent paid"
              />
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Section 80C Deductions
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DocumentTextIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                {...register('deductions80C', { min: 0, max: max80C })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                placeholder="Enter 80C deductions"
              />
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Other Deductions
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <PlusCircleIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                {...register('otherDeductions', { min: 0 })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                placeholder="Enter other deductions"
              />
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 flex items-center gap-2"
          >
            <CalculatorIcon className="w-5 h-5" />
            Calculate Tax
          </motion.button>
        </div>
      </form>

      {taxResult && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <CalculatorIcon className="w-6 h-6 text-primary-600" />
            Tax Calculation Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">Total Deductions</p>
              <p className="text-xl font-semibold text-primary-600">₹{taxResult.totalDeductions.toLocaleString()}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">Taxable Income</p>
              <p className="text-xl font-semibold text-primary-600">₹{taxResult.taxableIncome.toLocaleString()}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">Tax Before Cess</p>
              <p className="text-xl font-semibold text-primary-600">₹{taxResult.taxBeforeCess.toLocaleString()}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">Health & Education Cess</p>
              <p className="text-xl font-semibold text-primary-600">₹{taxResult.cess.toLocaleString()}</p>
            </div>
            <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">Total Tax Liability</p>
              <p className="text-3xl font-bold text-primary-600">
                ₹{taxResult.finalTax.toLocaleString()}
              </p>
            </div>
            <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">Effective Tax Rate</p>
              <p className="text-xl font-semibold text-primary-600">{taxResult.effectiveTaxRate.toFixed(2)}%</p>
            </div>
          </div>
        </motion.div>
      )}

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <p className="font-medium text-gray-900 mb-4 flex items-center gap-2">
          <DocumentTextIcon className="w-5 h-5 text-primary-600" />
          Important Notes
        </p>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start gap-2">
            <span className="text-primary-600">•</span>
            <span>Standard deduction of ₹50,000 is automatically applied</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">•</span>
            <span>Maximum deduction under Section 80C is ₹1,50,000</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">•</span>
            <span>HRA exemption is calculated based on the lowest of:
              <ul className="ml-6 mt-2 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">◦</span>
                  <span>Actual HRA received</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">◦</span>
                  <span>Rent paid minus 10% of basic salary</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">◦</span>
                  <span>40% of basic salary (50% for metro cities)</span>
                </li>
              </ul>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">•</span>
            <span>4% Health and Education Cess is added to the total tax</span>
          </li>
        </ul>
      </div>
    </div>
  );
} 