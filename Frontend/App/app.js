var app = angular.module("myapp",[]);
app.controller("myctrl",function($scope,$http){
    $scope.id = 0;
    $scope.display = function(){
        $http.get("Backend/Api/Display.php").success(function(data){
            $scope.item = data;
        });
    }

    $scope.insertData = function(){
        $http.post(
            "Backend/Api/Insert.php",
            {'title':$scope.title, 'notes':$scope.notes, 'id':$scope.id}
        ).success(function(data){
            alert(data);
            $scope.title = null;
            $scope.notes = null;
            $scope.id = null;
            $scope.display();
        });
    }

    $scope.deleteData=function(id){
        if(confirm("Are you sure want to delete the note")){
            $http.post(
                "Backend/Api/Delete.php",
                {'id' : id}
                ).success(function(data){
                    alert(data);
                    $scope.display();
                })
        }
    }

    $scope.update = function(){
        $http.post(
            "Backend/Api/Update.php",
            {'id':$scope.id, 'title':$scope.title, 'notes':$scope.notes}
        ).success(function(data){
            alert(data);
            $scope.title = null;
            $scope.notes = null;
            $scope.id = null;
            $scope.display(); 
        })
    }

    $scope.updateData = function(id,title,notes){
        $scope.id = id;
        $scope.title = title;
        $scope.notes = notes;
     }

     $scope.seeData = function(title,notes){
        $scope.title = title;
        $scope.notes = notes;
     }
     $scope.dataclear = function(){
        $scope.id = null;
        $scope.title = null;
        $scope.notes = null;
     }
});