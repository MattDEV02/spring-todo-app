Object.prototype.equals = function (todo) { // override
   return (
      (this.id === todo.id) &&
      (this.nome === todo.nome) &&
      (this.scadenza === todo.scadenza)
   );;
};

String.prototype.isDate = function () { // override
   const d = new Date(this);
   return (
      (d !== 'Invalid Date') &&
      (!isNaN(d))
   );
};

const checkTodo = todo => {
   console.log(todo);
   let result = false;
   if (todo.nome !== null && todo.nome !== undefined)
      result = (
         (todo.id > 0) &&
         (todo.nome.length >= 3) &&
         (todo.scadenza.isDate())
      );
   return result;
};


export default checkTodo;