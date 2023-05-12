
var clsValidate = (function(){
	this.self = this;
	this.callBackObj = null;
	this.init = function(callBackObj){
        
		self.callBackObj = callBackObj;
		$.validator.addMethod("checkEmail", function(value, element) {
			return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,40}$/i.test(value);
		}, "Please enter a valid email address.");
		$.validator.addMethod("validatorDate", function(value, element) {
			return value.match(/^(0?[1-9]|[12][0-9]|3[0-1])[/., -](0?[1-9]|1[0-2])[/., -](19|20)?\d{2}$/);
		}, "Please enter a date in the format dd/mm/yyyy!");
        $.validator.addMethod("validatorQuestion4Group",
            function(value, element) {
                return $('input[name="question41"]').is(':checked') && 
                $('input[name="question42"]').is(':checked') && 
                $('input[name="question43"]').is(':checked') && 
                $('input[name="question44"]').is(':checked') && 
                $('input[name="question45"]').is(':checked');
            },
			
		);

        $(document).on("click", ".btn-submit", function(){
            $("#surveyForm").submit();
            return false;
        });

        self.validationSurveyForm();
	};

	this.validationSurveyForm = function(){
		$('#surveyForm').validate({
			ignore: "",
			rules: {
				'question1': {
					required: true
				},
                'question2': {
					required: true
				},
                'question3': {
					required: true
				},
                'question41': {
					required: true
				},
                'question42': {
					required: true
				},
                'question43': {
					required: true
				},
                'question44': {
					required: true
				},
                'question45': {
					required: true
				},
                'question4group': {
					validatorQuestion4Group: true
				},
                'question5': {
					required: true
				}
			},
			messages: {
			},
			errorLabelContainer: $('.error-class'),
			focusInvalid: true,
			submitHandler: function(form) {
                //alert("SUBMIT");
                form.submit();
			},
			invalidHandler: function(form, validator) {},
			errorPlacement: function(error, element) {},
			highlight: function(element, errorClass, validClass) {
				$(element).removeClass(validClass).addClass(errorClass);
                
                var name = $(element).attr("name");
                if(name.indexOf("question4") >= 0){
                    $(element).parents('div.form-group').find('h4[for="'+name+'"]').removeClass(validClass).addClass(errorClass);
                }else{
                    $(element).parents('div.form-group').find('h2').removeClass(validClass).addClass(errorClass);
                }
                if(name == "question4group"){
                    $(element).parents('div.form-group').find('h2').removeClass(validClass).addClass(errorClass);
                }
                $(".message-survey").addClass("error").show();
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).removeClass(errorClass).addClass(validClass);
				
                var name = $(element).attr("name");
                if(name.indexOf("question4") >= 0){
                    $(element).parents('div.form-group').find('h4[for="'+name+'"]').removeClass(errorClass).addClass(validClass);
                }else{
                    $(element).parents('div.form-group').find('h2').removeClass(errorClass).addClass(validClass);
                }

                if(name == "question4group"){
                    $(element).parents('div.form-group').find('h2').removeClass(errorClass).addClass(validClass);
                }
			}
		});

        $(document).on("click", "#surveyForm", function(){
            if($(".form-group h2").hasClass("error") || $(".form-group h2").hasClass("valid")){
                if($("#surveyForm").valid()){
                    $(".message-survey").removeClass("error").hide();
                }else{
                    $(".message-survey").addClass("error").show();
                }

                if(name == "question4group"){
                    
                }
            }
        });

		$(document).on("click", "#Q5_1", function(){
			$("#question5sub").style.display = "block";
		});

		$(document).on("click", "#Q5_2", function(){
			$("#question5sub").style.display = "none";
		});
	};
	return {
		init:init,
	}
})();


clsValidate.init();