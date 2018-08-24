
  
  const catValidator = store => next => action => {
      const isCAT = action.type && action.type.startsWith('Category');
      if (isCAT) {
        try {
          const category = action.payload;
          const notValid = !category.budget || !category.name;
          if (notValid) {
            throw new Error('Category must include name and budget');
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
  
  export default catValidator;
