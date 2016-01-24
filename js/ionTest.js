
        function PaymentsController(scope) {
            scope.payments = [{
                id: 1,
                counterparty: "Wood-u-like",
                amount: "2,240.00",
                currency: "GBP",
                valueDate: "22/10/2015",
                creditAccount: "68794832"
            }, {
                id: 2,
                counterparty: "Bag o' nails",
                amount: "1,500.00",
                currency: "GBP",
                valueDate: "22/10/2015",
                creditAccount: "30921782"
            }, {
                id: 3,
                counterparty: "Fatcat Investors",
                amount: "22,000.00",
                currency: "USD",
                valueDate: "31/10/2015",
                creditAccount: "44236712"
            }];
            
            scope.selectedPayment = null;
            
            scope.isSelected = function( id ){
                scope.delete = scope.selectedPayment && scope.selectedPayment.id === id;
                return scope.delete ? 'active' : '';
            }
            
            scope.selectPayment = function( id ){
                var i;
              
              for ( i = 0; i < scope.payments.length; i++ ){
                if ( scope.payments[i].id === id ){
                        scope.selectedPayment = angular.copy( scope.payments[ i ] );
                  //alert( JSON.stringify(scope.selectedPayment) )
                  break;
                }
              }
            }
            
            scope.savePayment = function(){
                if ( scope.save ){
                scope.payments.push( scope.selectedPayment );
                scope.save = false;
              }else{
                        scope.payments[ scope.selectedPayment.id - 1 ] = scope.selectedPayment;
              }
              scope.selectedPayment = null;
            }
            
            scope.createPayment = function(){
                 scope.selectedPayment = {};
               scope.save = true;
               scope.delete = false;
            }
            scope.deletePayment = function(){
                scope.payments.pop(scope.selectedPayment);
              scope.save = false;
              scope.delate = false;
              scope.selectedPayment = null;
            }
        }

        angular.module("paymentsApp", [])
        .controller("PaymentsController", ["$scope", PaymentsController]);    