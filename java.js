let playerscore=0;
	let computerscore=0;
    const playerscore_span=document.getElementById("playerScore");
    const computerscore_span=document.getElementById("computerScore");
	const akk=document.getElementById("container");
	const sm=document.getElementById("sm");
    let soundonClick = new Audio();
soundonClick.src = "zapsplat_cartoon_pop_pull_finger_out_of_tube_002_35234.mp3";
	function computerPlay() {
		let num=parseInt(Math.random()*3);
		if(num==0){return "rock";}
		else if(num==1){return "paper";}
		else if(num==2){return "scissor";}
	
	}
	function rock(){
		
		let ps="rock";
		let cs=computerPlay();
		
        const container = document.querySelector('#container');
		const content = document.createElement('div');
akk.innerHTML="the player score is :"+playerscore+" and the computer score is :"+computerscore;
sm.innerHTML=(getresult(ps,cs));
playerscore_span.innerHTML=playerscore;
    commputerscore_span.innerHTML=computerscore;
    if(playerscore==5){alert("wooHoo! you won the series!!!");}
	if(computerscore==5){alert("the computer won the series. Beter luck next time.");
	


	}
}
function paper(){
		let ps="paper";
		let cs=computerPlay();
		
		sm.innerHTML=(getresult(ps,cs));
		akk.innerHTML="the player score is :"+playerscore+" and the computer score is :"+computerscore;
playerscore_span.innerHTML=playerscore;
    computerscore_span.innerHTML=computerscore;
    if(playerscore==5){alert("wooHoo! you won the series!!!");}
	if(computerscore==5){alert("the computer won the series. Beter luck next time.");
	
	}
}
function scissor(){
		let ps="scissor";
		let cs=computerPlay();
		
		sm.innerHTML=(getresult(ps,cs));
		akk.innerHTML="the player score is :"+playerscore+" and the computer score is :"+computerscore;
playerscore_span.innerHTML=playerscore;
    computerscore_span.innerHTML=computerscore;
    if(playerscore==5){alert("wooHoo! you won the series!!!");}
	if(computerscore==5){alert("the computer won the series. Beter luck next time.");
	
	}
}
	
	
	
	function getresult(ps,cs){
		if(ps=="rock"&&cs=="paper"){computerscore++;
			return "You lose! paper beats rock";
		}
		if(ps=="paper"&&cs=="scissor"){computerscore++;
			return "You lose! scissor beats paper";
		}
		if(ps=="scissor"&&cs=="rock"){computerscore++;
			return "You lose! rock beats scissor";
		}
		if(ps=="paper"&&cs=="rock"){playerscore++;
			return "You win! paper beats rock";
		}
		if(ps=="rock"&&cs=="scissor"){playerscore++;
			return "You win! rock beats scissor";
		}
		if(ps=="scissor"&&cs=="paper"){playerscore++;
			return "You win! scissor beats paper";
		}
		if(ps=="rock"&&cs=="rock")return "You both got rock!";
		if(ps=="paper"&&cs=="paper")return "You both got paper!";
		if(ps=="scissor"&&cs=="scissor")return "You both got scissor!";

	}
	