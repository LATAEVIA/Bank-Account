function BankAccount(name, initialDeposit, balance){
this.name = name;
this.initialDeposit = initialDeposit;
this.balance = balance;
}

BankAccount.prototype.withdrawl= function(){
this.balance -= withdrawl;
}

BankAccount.prototype.deposit = function(){
this.balance += deposit;
}


$(document).ready(function(){
  $('form#sign-up').submit(function(event){
    event.preventDefault();
    var inputName = $("input#account-name").val();
    console.log(inputName);
    var inputInitDeposit = $("input#initial-deposit").val();
    console.log(inputInitDeposit);
    var balance = inputInitDeposit;
    console.log(balance);
    var newPerson = new BankAccount(inputName, inputInitDeposit, balance);
    console.log(newPerson);
    $("input#account-name").val("");
    $("input#initial-deposit").val("");
    $('form#sign-up').hide();
  });
  $('form#deposit-withdrawl').submit(function(event){
    event.preventDefault();
    var inputDeposit = $("input#deposit-field").val();
    console.log(inputDeposit);
    var inputWithdrawl = $("input#withdrawl-field").val();
    console.log(inputWithdrawl);
    if (inputDeposit ){

    }


    var balance = inputDeposit;
    console.log(balance);


    var newPerson = new BankAccount(inputName, inputDeposit, balance);
    console.log(newPerson);
    $("input#account-name").val("");
    $("input#initial-deposit").val("");
    $('form#sign-up').hide();
  });
});
