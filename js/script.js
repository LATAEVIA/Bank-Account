function BankAccount(name, initialDeposit, balance){
this.name = name;
this.initialDeposit = initialDeposit;
this.balance = balance;
}

BankAccount.prototype.withdrawl= function(withdrawlAmount){
return this.balance -= withdrawlAmount;
}

BankAccount.prototype.deposit = function(depositAmount){
return this.balance += depositAmount;
}

$(document).ready(function(){
  $('form#sign-up').submit(function(event){
    event.preventDefault();
    var inputName = $("input#account-name").val();
    var inputInitDeposit = $("input#initial-deposit").val();
    var balance = parseInt(inputInitDeposit);
    var newPerson = new BankAccount(inputName, inputInitDeposit, balance);
    // $("input#account-name").val("");
    // $("input#initial-deposit").val("");
    $('#hide-sign-up').hide();
    $('#show-transaction-form').show();
    $("#new-person-initial-deposit").text(inputInitDeposit);

    $('form#deposit-withdrawl').submit(function(event){
      event.preventDefault();
      var withdrawlAmount = parseInt($("input#withdrawl-field").val());
      var depositAmount = parseInt($("input#deposit-field").val());

      if (withdrawlAmount > 0 && depositAmount > 0) {
        $("#current-balance").text(newPerson.deposit(depositAmount));
        $("#current-balance").text(newPerson.withdrawl(withdrawlAmount));
      } else if (depositAmount > 0) {
        $("#current-balance").text(newPerson.deposit(depositAmount));
      } else if (withdrawlAmount > 0) {
        $("#current-balance").text(newPerson.withdrawl(withdrawlAmount));
      }

      $("input#withdrawl-field").val("");
      $("input#deposit-field").val("");
    });
  });
});
