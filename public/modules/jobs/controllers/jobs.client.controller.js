"use strict";

// Jobs Controller
angular.module('jobs').controller('JobsController', [
  '$scope', '$stateParams', '$location', 'Authentication', 'Jobs', function($scope, $stateParams, $location, Authentication, Jobs){
    $scope.authentication = Autentication;
    
    // Create a new job
    $scope.create = function() {
			// Create new Job object
			var job = new Jobs ({
				company: this.company,
				title: this.title,
				job_type: this.job_type,
                location: this.location,
                how_to_apply: this.how_to_apply,
                contact_email: this.contact_email,
                contact_website: this.contact_website,
                contact_phone: this.contact_phone,
                job_description: this.job_description
			});
    
    // Redirect after saving
    job.$save(function(response) {
				$location.path('jobs/' + response._id);
      
      // Clear form fields
				$scope.name = '';
    }, function(errorResponse) {
				$scope.error = errorResponse.data.message;
		});
  };
    
]);