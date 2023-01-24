function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,

    getIncomeInDollars: (income) => (`$${income}`),
    getIncomeInEuros: (income) => (`${income} euros`),
  };

  return fullBudget;
}
