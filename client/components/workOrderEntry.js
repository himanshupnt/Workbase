angular.module('work-orders')

.controller('WorkOrderEntryCtrl', function(dataHandler) {

})

//bindings  come from workOrderFeed.js which is the parent to workOrderEntry.js and workOrderEntry.html
.component('workOrderEntry', {
  bindings: {
    order: '<',
    appGetWorkOrders: '<',
    index: '<'
  },
  controller: 'WorkOrderEntryCtrl',
  templateUrl: '../templates/workOrderEntry.html'
});