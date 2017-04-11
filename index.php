<!DOCTYPE html>
<html ng-app="fblikeCount">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="style.css">
		<link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet">
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js"></script>
		<script type="text/javascript" src="main.js"></script>
	</head>
	<body ng-controller="likeController">
		<div class="heading">
			<img src="Scintilla.png" alt="Scintilla" class="img-responsive header-image col-xs-7 col-sm-6 col-md-5">
			<h1 class="header-text col-xs-5 col-sm-6 col-md-7"><b>Selfie Contest</b></h1>
		</div>
		<div class="container" id="table-wrap">
			<table class="table table-hover list-table table-bordered">
				<thead>
					<tr>
						<th>Rank</th>
						<th>Contestant Name</th>
						<th>Branch &amp; Year</th>
						<th>Likes</th>
					</tr>
				</thead>
				<tbody>
					<tr ng-repeat="hero in likeArray | orderBy: '-likes' track by $index " id="top-{{$index + 1}}">
						<td class="text-center">{{$index + 1}}</td>
						<td>{{hero.name}}</td>
						<td>{{hero.branch}}</td>
						<td>{{hero.likes}}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</body>
</html>