function calculateGrossSalary(basicSalary, benefits) {
    return basicSalary + benefits;
}

function calculatePAYE(grossSalary) {
    let paye = 0;

    if (grossSalary <= 24000) {
        paye = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        paye = 24000 * 0.10 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
        paye = 24000 * 0.10 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.30;
    } else if (grossSalary <= 800000) {
        paye = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (grossSalary - 500000) * 0.325;
    } else {
        paye = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (800000 - 500000) * 0.325 + (grossSalary - 800000) * 0.35;
    }

    // Subtract personal relief of 2400
    paye -= 2400;

    return paye;
}

function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700;
}

function calculateNSSF(grossSalary) {
    const tier1 = Math.min(grossSalary, 7000) * 0.06;
    const tier2 = Math.max(0, grossSalary - 7000) * 0.06;
    return tier1 + tier2;
}

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = calculateGrossSalary(basicSalary, benefits);
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const housingLevy = grossSalary * 0.015; // 1.5% of gross salary for housing levy
    const netSalary = grossSalary - paye - nhif - nssf - housingLevy;

    return {
        grossSalary,
        paye,
        nhif,
        nssf,
        housingLevy,
        netSalary
    };
}

const basicSalary = 120000;
const benefits = 10000;

const result = calculateNetSalary(basicSalary, benefits);
console.log(`Gross Salary: ${result.grossSalary}`);
console.log(`PAYE (Tax): ${result.paye}`);
console.log(`NHIF Deduction: ${result.nhif}`);
console.log(`NSSF Deduction: ${result.nssf}`);
console.log(`Housing Levy: ${result.housingLevy}`);
console.log(`Net Salary: ${result.netSalary}`);


