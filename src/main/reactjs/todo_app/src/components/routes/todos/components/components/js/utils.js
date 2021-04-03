Object.prototype.equals = function (todo) { // override
   const result = (
      (this.id === todo.id) &&
      (this.nome === todo.nome) &&
      (this.scadenza === todo.scadenza)
   );
   return result;
};

String.prototype.isDate = function () { // override
   const d = new Date(this);
   const result = ((d !== 'Invalid Date') && (!isNaN(d)));
   return result;
};

const checkTodo = todo => {
   const result = ((todo.id > 0) && (todo.nome.length >= 3) && (todo.scadenza.isDate()));
   return result;
};


export default checkTodo;