angular.module('work-orders').
  service('dataHandler', function() {

    this.setOrderInfo = function(order, index){
      this.orderData = order;
      this.index = index + 1;
    }

  });