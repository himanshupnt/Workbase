angular.module('work-orders')

.controller('WorkOrderSummaryCtrl', function() {
  var newsFeed = this;
})
.component('workOrderSummary', {
  bindings: {
    completeWorkOrders: '<',
    inProgressWorkOrders: '<'
  },
  controller: 'WorkOrderSummaryCtrl',
  templateUrl: '../templates/workOrderSummary.html'
});