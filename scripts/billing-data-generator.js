// ES Module version of the billing data generator
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Utility functions
const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Generate a random date between two dates
const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// Current date and last year date
const currentDate = new Date();
const oneYearAgo = new Date();
oneYearAgo.setFullYear(currentDate.getFullYear() - 1);

// Generate random account name
const generateAccountName = () => {
  const companies = [
    "Acme Corp",
    "Globex",
    "Soylent",
    "Initech",
    "Umbrella",
    "Stark Industries",
    "Wayne Enterprises",
    "Cyberdyne",
    "Massive Dynamic",
    "Aperture Science",
    "Virtucon",
    "LexCorp",
    "Weyland-Yutani",
    "Oscorp",
    "Dharma Initiative",
  ];

  const suffixes = [
    "Inc",
    "LLC",
    "Corp",
    "Industries",
    "Technologies",
    "Solutions",
    "Software",
    "Group",
  ];

  if (Math.random() > 0.5) {
    return `${randomChoice(companies)} ${randomChoice(suffixes)}`;
  } else {
    return randomChoice(companies);
  }
};

// Generate charge description
const generateChargeDescription = () => {
  const tiers = ["Small", "Medium", "Large", "Basic", "Premium", "Enterprise", "Standard"];
  const types = [
    "Installation",
    "Setup",
    "Support",
    "Maintenance",
    "Usage",
    "License",
    "Service",
    "Access",
    "Storage",
    "Processing",
  ];

  return `${randomChoice(tiers)} - ${randomChoice(types)}`;
};

// Generate monthly data for a row - only 2024 data
const generateMonthlyData = (startMonth, amount) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const year = 2024;

  // For charges, distribute the amount over the months
  let remainingAmount = amount;
  const monthlyValues = {};
  const monthlyRevenue = {};
  const monthlyBalance = {};

  // Ensure all 2024 months have data
  for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
    const key = `month_${months[monthIndex]}_${year}`;
    const revenueKey = `revenue_${months[monthIndex]}_${year}`;
    const balanceKey = `balance_${months[monthIndex]}_${year}`;

    // Calculate monthly amount based on remaining budget
    // Use a balanced distribution with less variance
    const baseMonthlyAmount = remainingAmount / (12 - monthIndex);
    const variability = 0.3; // 30% variability
    const variance = baseMonthlyAmount * variability * (Math.random() * 2 - 1);
    let monthlyAmount = Math.min(remainingAmount, baseMonthlyAmount + variance);

    // Ensure we don't exceed the remaining amount and round to 2 decimals
    monthlyAmount = parseFloat(Math.min(remainingAmount, monthlyAmount).toFixed(2));

    // Ensure non-zero values for all 2024 months
    if (monthlyAmount < 1 && remainingAmount > 0) {
      monthlyAmount = parseFloat((1 + Math.random() * 10).toFixed(2));
    }

    remainingAmount -= monthlyAmount;
    monthlyValues[key] = monthlyAmount;

    // Split the monthly amount between revenue and balance
    // Revenue is typically 70-95% of the amount
    const revenuePercentage = 0.7 + Math.random() * 0.25;
    monthlyRevenue[revenueKey] = parseFloat((monthlyValues[key] * revenuePercentage).toFixed(2));
    monthlyBalance[balanceKey] = parseFloat(
      (monthlyValues[key] - monthlyRevenue[revenueKey]).toFixed(2)
    );
  }

  // If we still have remaining amount, distribute it
  if (remainingAmount > 0.01) {
    // Add it to a random month
    const randomMonthIndex = randomBetween(0, 11);
    const randomMonthKey = `month_${months[randomMonthIndex]}_${year}`;
    const randomRevenueKey = `revenue_${months[randomMonthIndex]}_${year}`;
    const randomBalanceKey = `balance_${months[randomMonthIndex]}_${year}`;

    monthlyValues[randomMonthKey] += parseFloat(remainingAmount.toFixed(2));

    // Recalculate revenue and balance
    const revenuePercentage = 0.7 + Math.random() * 0.25;
    monthlyRevenue[randomRevenueKey] = parseFloat(
      (monthlyValues[randomMonthKey] * revenuePercentage).toFixed(2)
    );
    monthlyBalance[randomBalanceKey] = parseFloat(
      (monthlyValues[randomMonthKey] - monthlyRevenue[randomRevenueKey]).toFixed(2)
    );
  }

  return {
    ...monthlyValues,
    ...monthlyRevenue,
    ...monthlyBalance,
  };
};

// Calculate revenue recognition
const calculateRevenueRecognition = (amount, createdDate) => {
  const diffMonths =
    currentDate.getMonth() -
    createdDate.getMonth() +
    12 * (currentDate.getFullYear() - createdDate.getFullYear());

  // Calculate how much revenue has been recognized based on time elapsed
  const recognitionPeriod = randomBetween(1, 12); // Revenue is recognized over 1-12 months
  const recognizedPercentage = Math.min(1, diffMonths / recognitionPeriod);
  const recognizedRevenue = parseFloat((amount * recognizedPercentage).toFixed(2));
  const deferredRevenue = parseFloat((amount - recognizedRevenue).toFixed(2));

  return {
    recognizedRevenue,
    deferredRevenue,
  };
};

// Generate billing data with accounts -> invoices -> charges
const generateBillingData = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const accounts = [];
  let globalId = 1;

  // Invoice statuses and probabilities
  const invoiceStatuses = ["paid", "overdue", "pending", "partial", "cancelled"];
  const invoiceStatusProbs = [0.6, 0.1, 0.15, 0.1, 0.05]; // 60% paid, 10% overdue, etc.

  // Account statuses
  const accountStatuses = ["active", "pending", "cancelled"];
  const accountStatusProbs = [0.85, 0.1, 0.05]; // 85% active, 10% pending, 5% cancelled

  // Generate 5-8 accounts
  const accountCount = randomBetween(5, 8);

  for (let a = 0; a < accountCount; a++) {
    // Generate account data
    const accountName = generateAccountName();
    const accountId = `ACC-${100000 + randomBetween(1, 99999)}`;

    // Create a date in 2024
    const accountCreatedDate = new Date(2024, randomBetween(0, 3), randomBetween(1, 28));

    // Determine account status based on probability
    let accountStatus = "active";
    const statusRoll = Math.random();
    let cumProb = 0;

    for (let i = 0; i < accountStatuses.length; i++) {
      cumProb += accountStatusProbs[i];
      if (statusRoll <= cumProb) {
        accountStatus = accountStatuses[i];
        break;
      }
    }

    // Generate invoices for this account
    const invoiceCount = randomBetween(3, 8);
    const invoices = [];
    let accountTotal = 0;
    let accountRemaining = 0;
    let accountRecognizedRevenue = 0;
    let accountDeferredRevenue = 0;

    for (let i = 0; i < invoiceCount; i++) {
      // Create invoice date in 2024
      const invoiceMonth = randomBetween(0, 11);
      const invoiceCreatedDate = new Date(2024, invoiceMonth, randomBetween(1, 28));

      // Generate random due date (10-30 days after invoice date)
      const dueDate = new Date(invoiceCreatedDate);
      dueDate.setDate(dueDate.getDate() + randomBetween(10, 30));

      const invoiceNumber = randomBetween(100, 999);
      const invoiceId = `INV-${invoiceNumber}`;
      const invoiceName = `I-${invoiceNumber}`;

      const invoiceAmount = randomBetween(1000, 20000) + Math.random();
      const invoiceAmountRounded = parseFloat(invoiceAmount.toFixed(2));

      // Determine invoice status based on probability
      let invoiceStatus = "paid";
      const statusRoll = Math.random();
      let cumProb = 0;

      for (let j = 0; j < invoiceStatuses.length; j++) {
        cumProb += invoiceStatusProbs[j];
        if (statusRoll <= cumProb) {
          invoiceStatus = invoiceStatuses[j];
          break;
        }
      }

      // Calculate remaining amount based on status
      let remainingAmount = 0;
      switch (invoiceStatus) {
        case "paid":
          remainingAmount = 0;
          break;
        case "overdue":
        case "pending":
          remainingAmount = invoiceAmountRounded;
          break;
        case "partial":
          remainingAmount = parseFloat((invoiceAmountRounded * Math.random() * 0.8).toFixed(2));
          break;
        case "cancelled":
          remainingAmount = 0;
          break;
      }

      // Generate charges for this invoice
      const chargeCount = randomBetween(2, 5);
      const charges = [];
      let invoiceRecognizedRevenue = 0;
      let invoiceDeferredRevenue = 0;
      const chargeTotalAmount = invoiceAmountRounded;
      let currentChargeTotal = 0;

      for (let c = 0; c < chargeCount; c++) {
        // Calculate charge amount (divide invoice amount among charges)
        let chargeAmount;

        if (c === chargeCount - 1) {
          // Last charge gets the remainder to ensure sum equals invoice amount
          chargeAmount = parseFloat((chargeTotalAmount - currentChargeTotal).toFixed(2));
        } else {
          // Random portion of remaining amount
          const remainingForCharges = chargeTotalAmount - currentChargeTotal;
          const portion = Math.random() * 0.7; // Take up to 70% of what's left
          chargeAmount = parseFloat((remainingForCharges * portion).toFixed(2));
          currentChargeTotal += chargeAmount;
        }

        const chargeId = `CHG-${100000 + randomBetween(1, 999999)}`;

        // Calculate revenue recognition
        const { recognizedRevenue, deferredRevenue } = calculateRevenueRecognition(
          chargeAmount,
          invoiceCreatedDate
        );

        invoiceRecognizedRevenue += recognizedRevenue;
        invoiceDeferredRevenue += deferredRevenue;

        // Generate monthly distribution for this charge - only 2024 data
        const monthlyData = generateMonthlyData(invoiceMonth, chargeAmount);

        // Create charge object
        charges.push({
          id: chargeId,
          type: "charge",
          name: generateChargeDescription(),
          createdDate: invoiceCreatedDate.toISOString(),
          amount: chargeAmount,
          recognizedRevenue,
          deferredRevenue,
          ...monthlyData,
        });
      }

      // Calculate monthly data for the invoice by summing its charges
      const invoiceMonthlyData = {};
      const invoiceMonthlyRevenue = {};
      const invoiceMonthlyBalance = {};

      // Only process 2024 months
      for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
        const year = 2024;
        const key = `month_${months[monthIndex]}_${year}`;
        const revenueKey = `revenue_${months[monthIndex]}_${year}`;
        const balanceKey = `balance_${months[monthIndex]}_${year}`;

        // Sum this month's value from all charges
        invoiceMonthlyData[key] = charges.reduce((sum, charge) => {
          return sum + (charge[key] || 0);
        }, 0);

        // Sum this month's revenue from all charges
        invoiceMonthlyRevenue[revenueKey] = charges.reduce((sum, charge) => {
          return sum + (charge[revenueKey] || 0);
        }, 0);

        // Sum this month's balance from all charges
        invoiceMonthlyBalance[balanceKey] = charges.reduce((sum, charge) => {
          return sum + (charge[balanceKey] || 0);
        }, 0);
      }

      // Update account totals
      accountTotal += invoiceAmountRounded;
      accountRemaining += remainingAmount;
      accountRecognizedRevenue += invoiceRecognizedRevenue;
      accountDeferredRevenue += invoiceDeferredRevenue;

      // Create invoice object
      invoices.push({
        id: invoiceId,
        type: "invoice",
        name: invoiceName,
        status: invoiceStatus,
        createdDate: invoiceCreatedDate.toISOString(),
        dueDate: dueDate.toISOString(),
        amount: invoiceAmountRounded,
        remaining: remainingAmount,
        recognizedRevenue: parseFloat(invoiceRecognizedRevenue.toFixed(2)),
        deferredRevenue: parseFloat(invoiceDeferredRevenue.toFixed(2)),
        charges, // Add charges as a nested array
        ...invoiceMonthlyData,
        ...invoiceMonthlyRevenue,
        ...invoiceMonthlyBalance,
      });
    }

    // Calculate monthly data for the account by summing its invoices
    const accountMonthlyData = {};
    const accountMonthlyRevenue = {};
    const accountMonthlyBalance = {};

    // Only process 2024 months
    for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
      const year = 2024;
      const key = `month_${months[monthIndex]}_${year}`;
      const revenueKey = `revenue_${months[monthIndex]}_${year}`;
      const balanceKey = `balance_${months[monthIndex]}_${year}`;

      // Sum this month's value from all invoices
      accountMonthlyData[key] = invoices.reduce((sum, invoice) => {
        return sum + (invoice[key] || 0);
      }, 0);

      // Sum this month's revenue from all invoices
      accountMonthlyRevenue[revenueKey] = invoices.reduce((sum, invoice) => {
        return sum + (invoice[revenueKey] || 0);
      }, 0);

      // Sum this month's balance from all invoices
      accountMonthlyBalance[balanceKey] = invoices.reduce((sum, invoice) => {
        return sum + (invoice[balanceKey] || 0);
      }, 0);
    }

    // Create account object
    accounts.push({
      id: accountId,
      type: "account",
      name: accountName,
      status: accountStatus,
      createdDate: accountCreatedDate.toISOString(),
      total: parseFloat(accountTotal.toFixed(2)),
      remaining: parseFloat(accountRemaining.toFixed(2)),
      recognizedRevenue: parseFloat(accountRecognizedRevenue.toFixed(2)),
      deferredRevenue: parseFloat(accountDeferredRevenue.toFixed(2)),
      invoices, // Add invoices as a nested array
      ...accountMonthlyData,
      ...accountMonthlyRevenue,
      ...accountMonthlyBalance,
    });
  }

  return accounts;
};

// Run the generation and save to a file
async function saveDataToFile() {
  console.log("Generating realistic billing dataset...");
  const data = generateBillingData();
  console.log(`Generated data with ${data.length} accounts`);

  const filePath = path.join(__dirname, "../src/examples/billing/billing-data.json");
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Data saved to ${filePath}`);
}

// Execute the function
saveDataToFile();
