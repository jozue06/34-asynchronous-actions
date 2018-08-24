
  
  const expValidator = store => next => action => {
    const isEXP = action.type && action.type.startsWith('Expense');
    if (isEXP) {
      try {
        const expense = action.payload;
        const notValid = !expense.amount || !expense.name;
        if (notValid) {
          throw new Error('Expense must include name and budget');
        } else {
          return next(action);
        }
      } catch (err) {
        alert(err);
    }
  } else {
    return next(action);
  }
}

export default expValidator;
