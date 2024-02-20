
$(document).ready(function(){
    $('.phone').each(function(){
        window.intlTelInput(this, {
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
        separateDialCode: true,
    });
    })
    $('.phone').mask('000-000-000',{placeholder:"000-000-000"}, {autoclear: true});

    $('.select').select2();
    // $(".select").select2().change(function() {
    //     $(this).valid();
    // });

function flagTemplate(country){
    return $("<span class='flag-icon flag-icon-" + country.id + " '></span><span class='flag-text'>" + country.text + "</span>");
  }

function generateUrl(params){
    if(params.term){
      return "https://restcountries.com/v3.1/name/" + params.term;
    } else {
      return "https://restcountries.com/v3.1/all";
    }
  }
  
  // Initialise select2 using flagTemplate function for both result and selection
  $('.county-select').select2({
    // Set template for results and selection
    templateResult: flagTemplate,
    templateSelection: flagTemplate,
    // Set placeholder text
    placeholder: 'Сountry',
    // Load country list from https://restcountries.com
    ajax: {
      url: generateUrl,
      cache: 250,
      dataType: "json",
      processResults: function(data) {      
        return {
          results: data
            .map(x => ({id: x.cca2.toLowerCase(), text: x.name.common}))
            .sort((a, b) => ('' + a.text).localeCompare(b.text))
        };
      }
    }
  });

    $.validator.addMethod("emailRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "");       
     
    $(".form-clients").validate({
        rules: {
            "name": {
                required: true,
            },
            "phone": {
                required: true,
                // number: true,
                // min: 9,
            },
            "email": {
                required: true,
                emailRegex: true,
            },
            "item": {
                required: true,
            },
        },
        messages: {
            "name": {
                required: "Required field",
            },
            "phone": {
                required: "Required field",
                // number: "Enter only number",
                // min: "Enter full phone number",
            },
            "email": {
                required: "Required field",
                emailRegex: "Please, enter valid email address",
            },
            "item": {
                required: "Required field",
            },
            
        },
    });  
    const swiper = new Swiper('.slider_marketplace', {
        speed: 400,
        loop: false,
        rewind: true,
        slidesPerView: 1,
        autoplay: true,
        pagination: {
            el: '.swiper-pagination',
            type: "fraction",
        },
           
           // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $('.faq__content').hide();
        $('.faq__accordion-sec').click(function () {
        $(this).toggleClass('active');
        $('.faq__accordion-sec').not(this).removeClass('active');
        $('.faq__accordion-sec').not(this).find('.faq__content').slideUp();
        $(this).find('.faq__content').slideToggle();
        return false;
    });
});
  
