var fblikeCount=angular.module("fblikeCount",[]);
fblikeCount.controller('likeController',['$scope','$http',function($scope,$http){
	$scope.likeArray = []
	$scope.rank = 1
	$scope.heading="Scintilla Selfie Contest";
	$scope.contest_id = [{"id":"266600173800180"},{"id":"266599497133581"},{"id":"266598887133642"},{"id":"266598187133712"},{"id":"266597470467117"},{"id":"266595880467276"},{"id":"266593173800880"},{"id":"266592257134305"},{"id":"266588550468009"},{"id":"266582503801947"},{"id":"266580587135472"},{"id":"266562873803910"},{"id":"266414760485388"},{"id":"266308670495997"},{"id":"266260877167443"},{"id":"266259403834257"},{"id":"266258347167696"},{"id":"266258027167728"},{"id":"266256717167859"},{"id":"266256517167879"},{"id":"266255813834616"},{"id":"266255677167963"},{"id":"266255460501318"},{"id":"266255090501355"},{"id":"266254443834753"},{"id":"266252590501605"},{"id":"266252120501652"},{"id":"266251303835067"},{"id":"266250850501779"},{"id":"266250247168506"},{"id":"266249830501881"},{"id":"266249413835256"},{"id":"266246907168840"},{"id":"266246283835569"},{"id":"266243310502533"},{"id":"266243040502560"},{"id":"266242227169308"},{"id":"266241560502708"},{"id":"266241257169405"},{"id":"266240953836102"},{"id":"266240630502801"},{"id":"266232030503661"},{"id":"266231687170362"},{"id":"266230833837114"},{"id":"266228297170701"},{"id":"266227613837436"},{"id":"266225523837645"},{"id":"266224720504392"},{"id":"266223733837824"},{"id":"266222287171302"},{"id":"266177290509135"},{"id":"266175253842672"},{"id":"266174760509388"},{"id":"266172690509595"},{"id":"266172043842993"},{"id":"266171510509713"},{"id":"266170997176431"},{"id":"266170627176468"},{"id":"266153747178156"},{"id":"266151767178354"},{"id":"266133493846848"},{"id":"266132620513602"},{"id":"266129967180534"},{"id":"266127407180790"},{"id":"266098680516996"},{"id":"266096857183845"},{"id":"266096473850550"},{"id":"266094527184078"},{"id":"266093700517494"},{"id":"266090263851171"},{"id":"266087793851418"},{"id":"266080737185457"},{"id":"266080207185510"},{"id":"266079880518876"},{"id":"266078753852322"},{"id":"266076727185858"},{"id":"266075290519335"},{"id":"266037960523068"},{"id":"266036570523207"},{"id":"266034617190069"},{"id":"265982577195273"},{"id":"265981580528706"},{"id":"265981473862050"},{"id":"265964500530414"},{"id":"265961153864082"},{"id":"265960720530792"},{"id":"265957313864466"},{"id":"265951930531671"},{"id":"265949637198567"},{"id":"265947910532073"},{"id":"265947647198766"},{"id":"265940383866159"},{"id":"265937990533065"},{"id":"265937750533089"},{"id":"265937383866459"},{"id":"265936770533187"},{"id":"265936580533206"},{"id":"265935100533354"},{"id":"265934883866709"},{"id":"265934283866769"},{"id":"265934040533460"},{"id":"265933773866820"},{"id":"265933540533510"},{"id":"265930203867177"},{"id":"265804533879744"},{"id":"265802250546639"},{"id":"265801447213386"},{"id":"265780287215502"},{"id":"265779680548896"},{"id":"265779470548917"},{"id":"265779183882279"},{"id":"265778693882328"},{"id":"265778443882353"},{"id":"265778227215708"},{"id":"265777910549073"},{"id":"265775577215973"},{"id":"265774237216107"},{"id":"265773473882850"},{"id":"265767950550069"},{"id":"265767800550084"},{"id":"265767593883438"},{"id":"265766770550187"},{"id":"265765793883618"},{"id":"265765840550280"},{"id":"265764393883758"},{"id":"265763587217172"},{"id":"265763173883880"},{"id":"265762717217259"},{"id":"265762617217269"},{"id":"265761810550683"},{"id":"265758907217640"},{"id":"265758550551009"},{"id":"265758343884363"},{"id":"265758150551049"},{"id":"265757553884442"},{"id":"265757673884430"},{"id":"265756653884532"},{"id":"265755067218024"},{"id":"265753763884821"},{"id":"265752860551578"},{"id":"265752590551605"},{"id":"265752493884948"},{"id":"265752373884960"},{"id":"265751293885068"},{"id":"265750567218474"},{"id":"265748907218640"},{"id":"265748453885352"},{"id":"265748533885344"},{"id":"265748287218702"},{"id":"265748237218707"},{"id":"265747987218732"},{"id":"265747750552089"},{"id":"265747327218798"},{"id":"265746047218926"},{"id":"265744803885717"},{"id":"265743903885807"},{"id":"265742430552621"},{"id":"265741783886019"},{"id":"265740737219457"},{"id":"265739697219561"},{"id":"265737570553107"},{"id":"265737153886482"},{"id":"265736747219856"},{"id":"265736297219901"},{"id":"265733943886803"},{"id":"265733270553537"},{"id":"265725923887605"},{"id":"265725253887672"},{"id":"265725463887651"},{"id":"265723630554501"},{"id":"265722820554582"},{"id":"265716907221840"},{"id":"265672037226327"},{"id":"265671357226395"},{"id":"265671157226415"},{"id":"265670650559799"},{"id":"265670200559844"},{"id":"265669983893199"},{"id":"265667837226747"},{"id":"265667320560132"},{"id":"265666280560236"},{"id":"265662753893922"},{"id":"265662507227280"},{"id":"265661523894045"},{"id":"265660957227435"},{"id":"265660493894148"},{"id":"265657773894420"},{"id":"265657727227758"},{"id":"265657667227764"},{"id":"265655223894675"},{"id":"265654697228061"},{"id":"265654043894793"},{"id":"265653827228148"},{"id":"265653077228223"},{"id":"265652900561574"},{"id":"265652063894991"},{"id":"265651307228400"},{"id":"265621803898017"},{"id":"265614033898794"},{"id":"265612810565583"},{"id":"265612373898960"},{"id":"265608677232663"},{"id":"265607107232820"},{"id":"265605940566270"},{"id":"265598447233686"},{"id":"265598370567027"},{"id":"265598177233713"},{"id":"265596327233898"},{"id":"265571287236402"},{"id":"265565857236945"},{"id":"265560547237476"},{"id":"265561023904095"},{"id":"265559760570888"},{"id":"265559163904281"},{"id":"265556023904595"},{"id":"265548220572042"},{"id":"265546263905571"},{"id":"265542540572610"},{"id":"265540997239431"},{"id":"265540703906127"},{"id":"265538523906345"},{"id":"265536927239838"},{"id":"265529390573925"},{"id":"265529227240608"},{"id":"265526297240901"},{"id":"265525357240995"},{"id":"265510120575852"},{"id":"265508097242721"},{"id":"265502727243258"},{"id":"265502557243275"},{"id":"265500160576848"},{"id":"265497287243802"},{"id":"265497103910487"},{"id":"265488447244686"},{"id":"265487200578144"},{"id":"265486473911550"},{"id":"265485683911629"},{"id":"265484513911746"},{"id":"265484130578451"},{"id":"265472027246328"},{"id":"265468307246700"},{"id":"265467200580144"},{"id":"265465587246972"},{"id":"265462060580658"},{"id":"265450980581766"},{"id":"265441370582727"},{"id":"265435263916671"},{"id":"265429753917222"},{"id":"265427817250749"}]
	$scope.urls = []
	$scope.url = "https://graph.facebook.com/v2.8/?ids="
	$scope.query = "&fields=likes.limit(0).summary(true),name%2Cid"
	//Facebook API token
	$scope.token = "{your-api-token}"
	$scope.ids = [];

	var re = new RegExp('^(#)(C|c)(ontest)');

	for ( var i = 0; i < 5; i++ ) {
		var list = []
		for (var j = i*50; j < (i+1)*50; j++) {
			if($scope.contest_id[j] != undefined)
			list.push($scope.contest_id[j].id)
		}
		$scope.ids.push(list.join()) 
	}
	for (var i = $scope.ids.length - 1; i >= 0; i--) {
		var url = $scope.url + $scope.ids[i] + $scope.query + '&access_token=' + $scope.token;
		$http.get(url).then(function(response) {
			for ( var j = 0 in response.data){
				var likes = response.data[j].likes.summary.total_count
				var message = response.data[j].name
				var ar = []
				ar = message.split('\n')
				if(re.test(ar[0])){
					var name = ar[1]
					var branch = ar[2]
					$scope.likeArray.push({'likes':likes,'name':name,'branch':branch})
				}
			}
		}).catch(function(data) {
			console.error("Error While Parsing sorry for inconvience ");
		});
	}
}]);

function search() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("rank");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}