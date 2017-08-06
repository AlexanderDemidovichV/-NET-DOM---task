

$(document).ready(function(){
	$("#list_form").submit(add_list_item);

	$("#button_create_list_item").on("click", add_list_item);
	$("#button_delete_list_item").on("click", delete_list_item);
	$("#button_change_list_item").on("click", change_list_item);

	$("ul").on("click", mark_selected);
});


function mark_selected( event){
	remove_selected_class_list();

	if ( $(event.target).is("li"))
	{
		$(event.target).addClass("li-selected");
		var text = $(event.target).text();
		var color = $(event.target).css("color");
		var marker = $(event.target).css("list-style-type");

		$("#input_text").val(text);
		$("#input_color").val(color);
		$("#input_marker").val(marker);
	}
	
}

function remove_selected_class_list(){
	$("li.li-selected").removeClass("li-selected");
}

function delete_list_item(event){
	if(is_selected_item_exist())
	{
		$('.li-selected').off("click", mark_selected);
		$('.li-selected').remove();
	}
	else{
		alert("Please select list item.");
	}
}

function is_selected_item_exist(){
	return $('.li-selected').length;
}

function add_list_item(event){
	event.preventDefault();
	var text = $("#input_text").val();
	var color = $("#input_color").val();
	var marker = $("#input_marker").val();

	$('#list').append('<li>'+text+'</li>');
	$("li:last").css("color", color).css("list-style-type", marker);
}

function change_list_item(event){
	if(is_selected_item_exist())
	{
		var text = $("#input_text").val();
		var color = $("#input_color").val();
		var marker = $("#input_marker").val();
		$('.li-selected').css("color", color).css("list-style-type", marker).text(text);
		}
	else{
		alert("Please select list item.");
	}
}
