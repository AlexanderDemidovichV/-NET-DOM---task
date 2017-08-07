(function()
{

	var input_parameters = new function() {

		this.update_fields = function(text, color, marker) {
			this.text = text;
			this.color = color;
			this.marker = marker;
		}
	}

	$("#button_create_list_item").on("click", add_list_item);
	$("#button_delete_list_item").on("click", delete_list_item);
	$("#button_change_list_item").on("click", change_list_item);

	$("ul").on("click", mark_selected);

	function mark_selected(event){
		remove_selected_class_list();

		if ( $(event.target).is("li")){
			$(event.target).addClass("li-selected");

			input_parameters.update_fields($(event.target).text(), 
				$(event.target).css("color"), 
				$(event.target).css("list-style-type"))

			update_input_fields(input_parameters);
		}
		
	}

	function remove_selected_class_list(){
		$("li.li-selected").removeClass("li-selected");
	}

	function update_input_fields(input_parameters){
		$("#input_text").val(input_parameters.text);
		$("#input_color").val(input_parameters.color);
		$("#input_marker").val(input_parameters.marker);
	}

	function delete_list_item(event){
		if(is_selected_item_exist())
		{
			$(".li-selected").off("click", mark_selected);
			$(".li-selected").remove();
		}
		else{
			alert("Please select list item.");
		}
	}

	function is_selected_item_exist(){
		return $('.li-selected').length;
	}

	function add_list_item(event){
		input_parameters.update_fields($("#input_text").val(), 
				$("#input_color").val(), 
				$("#input_marker").val());

		$('#list').append($('<li>').append(input_parameters.text));
		$("li:last")
			.css("color", input_parameters.color)
			.css("list-style-type", input_parameters.marker);
	}

	function change_list_item(event){
		if(is_selected_item_exist())
		{
			input_parameters.update_fields($("#input_text").val(), 
				$("#input_color").val(), 
				$("#input_marker").val());

			$(".li-selected")
				.css("color", input_parameters.color)
				.css("list-style-type", input_parameters.marker)
				.text(input_parameters.text);
		}
		else{
			alert("Please select list item.");
		}
	}
	
})();
