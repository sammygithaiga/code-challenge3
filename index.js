function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates and deductions
    const taxRates = [
        { min: 0, max: 24000, rate: 10 },
        { min: 24001, max: 32333, rate: 15 },
        { min: 32334, max: 40667, rate: 20 },
        { min: 40668, max: 49000, rate: 25 },
        { min: 49001, max: Infinity, rate: 30 }
    ];
    const nhifRates = [
        { min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 7999, deduction: 300 },
        { min: 8000, max: 11999, deduction: 400 },
        { min: 12000, max: 14999, deduction: 500 },
        { min: 15000, max: 19999, deduction: 600 },
        { min: 20000, max: 24999, deduction: 750 },
        { min: 25000, max: 29999, deduction: 850 },
        { min: 30000, max: 34999, deduction: 900 },
        { min: 35000, max: 39999, deduction: 950 },
        { min: 40000, max: 44999, deduction: 1000 },
        { min: 45000, max: 49999, deduction: 1100 },
        { min: 50000, max: 59999, deduction: 1200 },
        { min: 60000, max: 69999, deduction: 1300 },
        { min: 70000, max: 79999, deduction: 1400 },
        { min: 80000, max: 89999, deduction: 1500 },
        { min: 90000, max: 99999, deduction: 1600 },
        { min: 100000, max: Infinity, deduction: 1700 }
    ];
    const nssfRate = 0.06;

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate tax (PAYE)
    let taxableIncome = grossSalary - 24000; // Initial tax band
    let tax = 0;
    for (const rate of taxRates) {
        if (taxableIncome <= 0) {
            break;
        }
        const taxableAmount = Math.min(taxableIncome, rate.max - rate.min);
        tax += taxableAmount * (rate.rate / 100);
        taxableIncome -= taxableAmount;
    }

    // Calculate NHIF deduction
    let nhifDeduction = 0;
    for (const rate of nhifRates) {
        if (grossSalary >= rate.min && grossSalary <= rate.max) {
            nhifDeduction = rate.deduction;
            break;
        }
    }

    // Calculate NSSF deduction
    const nssfDeduction = grossSalary * nssfRate;

    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

    // Print results
    console.log("Gross Salary:", grossSalary);
    console.log("Tax (PAYE):", tax);
    console.log("NHIF Deduction:", nhifDeduction);
    console.log("NSSF Deduction:", nssfDeduction);
    console.log("Net Salary:", netSalary);
}

// Example usage:
const basicSalary = 50000;
const benefits = 10000;
calculateNetSalary(basicSalary, benefits);
const bs = 10000;
const nefits = 1000
calculateNetSalary(bs, nefits)