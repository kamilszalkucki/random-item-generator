function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}



$(document).ready(function(){
		
	
	 $('.button').click(function(){
		
			
		
		var timer = 300;
        $('.button').text(timer).css('display', 'none');

        var interval = setInterval(function() {
			--timer;
			var minutes = Math.floor(timer / 60);
			var sec = timer % 60;
			if(sec<10) sec = '0' + sec;
			var text = minutes + ':' +sec;
		       if(timer > -1) { 
                $('.button').html(text).attr('disabled', 'disabled').css('cursor', 'default').css('opacity', '1');
            } else {
                $('.button').html(text).removeAttr('disabled');
                $('.button').text('Losuj').css('cursor', 'pointer');
				
				
			
			clearInterval(interval);
		
			}
			
			
		if(timer > 296) {
					$('.ok').attr('disabled', 'disabled').css('box-shadow', 'none');
				}else
				{
					$('.ok').removeAttr('disabled', 'disabled').css('box-shadow', '0px 20px 25px rgba(46, 229, 157, 0.4)').css('cursor', 'pointer').text('Akceptuj');
				}
				
				
           
        }, 1000);
		
		$('.ok').fadeIn(900);
		
		$('.info').show(function(){
			$('.button').hide();
			$('.info').fadeIn(900);
			
	
			
			var items = new Array("Amazon_Helmet.gif", "Blue_Robe.gif", "Batwing_hat.png", "Brass_armor.gif", "Chain_armor.png", "Chain_helmet.gif", "Crown_armor.gif", "Crown_helmet.gif", "Crusader_Helmet.gif", "Crystaline_armor.png", "Dark_armor.png", "Dark_Helmet.gif", "Demon_armor.png", "Demon_helmet.gif", "Devil_helmet.gif", "Divine_plate.png", "Dragon_robe.png", "Dragon_scale_mail.gif", "Dwarven_armor.gif", "Focus_cape.png", "Frozen_plate.gif", "Golden_armor.gif", "Golden_helmet.gif", "Hat_of_the_mad.gif", "Jacket.gif", "Knight_armor.gif", "Lavos_armor.gif", "Lightning_headband.png", "Lightning_robe.gif", "Magic_plate_armor.gif", "Magician's_robe.gif", "Magma_coat.gif", "Master_archer's_armor.gif", "Mystic_turban.gif", "Paladin_armor.gif", "Prismatic_helmet.gif", "Royal_helmet.gif", "Scale_armor.gif", "Soldier_helmet.gif", "Spirit_cloak.gif", "Steel_helmet.gif", "Strange_helmet.gif", "Terra_hood.gif", "Velvet_mantle.gif", "Viking_helmet.gif", "Yalahari_armor.gif", "Yalahari_mask.gif", "Zaoan_helmet.gif");
				
            //var y = Math.round(Math.random()*(items.length-1));   
           // var obraz = "url(inventory/"+items[y];
		   
	//			$('.random').each(function() {
	//
			var y = Math.round(Math.random()*(items.length-1));
                        var id = Math.floor(Math.random() * 500);

					$('#randitem').html('<img src="inventory/'+items[y]+'" alt="" id="'+id+'" draggable="true" ondragstart="drag(event)" />');
			
					
	$('.ok').click(function(){
		$('.button').show();
		$('.info').hide();
		$('.ok').hide();
	});

});
});
});
