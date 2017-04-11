<!DOCTYPE html>
<html ng-app="fblikeCount">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Scintilla Leaderboard</title>
		<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="style.css">
		<link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet">
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js"></script>
		<script type="text/javascript" src="main.js"></script>
		<script>
		  (adsbygoogle = window.adsbygoogle || []).push({
		    google_ad_client: "ca-pub-9966250112306141",
		    enable_page_level_ads: true
		  });
	</script>
	<!--Keywords-->
		<meta name="keywords" content="LeaderBoard, Selfie Contest, Scintills, Btkit, ">
		<meta name="description" content="Check your rank in the LeaderBoard #scintilla #selfie #contest"/>
		<meta name="rating" content="General">
		<meta name="robots" content="all">
		<meta name="audience" content="all">
		<!--fb-->
		<meta property="og:locale" content="en_US" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content="LeaderBoard Scintilla Selfie Contest" />
		<meta property="og:description" content="Check your rank in the LeaderBoard #scintilla #selfie #contest"/>
		<meta property="og:site_name" content="Shubham Pandey" />
		<meta property="fb:admins" content="100004093912988" />
		<meta property="og:image" content="https://raw.githubusercontent.com/shubham9411/scintilla-leaderboard/master/Scintilla.png" />
		<!--twitter-->
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:description" content="Check your rank in the LeaderBoard #scintilla #selfie #contest" />
		<meta name="twitter:title" content="LeaderBoard Scintilla Selfie Contest" />
		<meta name="twitter:site" content="@shubham9411" />
		<meta name="twitter:image" content="https://raw.githubusercontent.com/shubham9411/scintilla-leaderboard/master/Scintilla.png" />
		<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-90186372-4', 'auto');
  ga('send', 'pageview');

</script>
	</head>
	<body ng-controller="likeController">
	<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8&appId=1854666834798225";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
		<div class="heading">
			<img src="Scintilla.png" alt="Scintilla" class="img-responsive header-image col-xs-7 col-sm-6 col-md-5">
			<h1 class="header-text col-xs-5 col-sm-6 col-md-7"><b>Selfie Contest</b></h1>
		</div>
		<div class="alert alert-danger container text-center">
			<p><b>Final Winners will not be declared according to this LeaderBoard.</b></p>
			<p><b>There are other criteria too. e.g. Likes, Comments, Shares, Insta Likes etc</b></p>
		</div>
		<div class="container">
			<input type="text" id="myInput" onkeyup="search()" placeholder="Search for Name..">
		</div>
		<div class="container" id="table-wrap">
			<table class="table table-hover list-table table-bordered" id="rank">
				<thead>
					<tr>
						<th>Rank</th>
						<th>Contestant Name</th>
						<th>Branch &amp; Year</th>
						<th>Likes</th>
					</tr>
				</thead>
				<tbody>
					<tr ng-repeat="hero in likeArray | orderBy: '-likes' | limitTo : 100 : 1 track by $index " id="top-{{$index + 1}}">
						<td class="text-center">{{$index + 1}}</td>
						<td><a href="https://www.facebook.com/Scintilla123/photos/a.265026233957574.1073741828.264965970630267/{{hero.user_id}}" target="_BLANK">{{hero.name}}</a></td>
						<td>{{hero.branch}}</td>
						<td>{{hero.likes}}</td>
					</tr>
				</tbody>
			</table>
			<div class="fb-like" data-href="https://facebook.com/shubhampandey.in" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
		<div class="text-center footer">
			Made with <b style="color: red">❤</b></strong> By <a href="https://shubhampandey.in/" rel="designer"><b>Shubham Pandey</b></a> and <a href="https://github.com/umeshdhauni/" rel=designer><b>Umesh Dhauni</b></a>
		</div>
			<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
			<!-- Responsive1 -->
			<ins class="adsbygoogle"
			     style="display:block"
			     data-ad-client="ca-pub-9988984114062347"
			     data-ad-slot="9554576317"
			     data-ad-format="auto"></ins>
			<script>
			(adsbygoogle = window.adsbygoogle || []).push({});
			</script>
		</div>
	</body>
</html>