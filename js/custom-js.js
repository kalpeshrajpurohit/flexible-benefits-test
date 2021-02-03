  let totalAllocation = document.querySelectorAll('.wallat_allocation_total')
  let healthCount =  $('#healthCount')
  let healthCountTotal =  $('#healthCount-total')
  let lifeCount =    $('#lifeCount')
  let lifeCountTotal =  $('#lifeCount-total')
  let accidentCount = $('#accidentCount')
  let accidentCountTotal = $('#accidentCount-total')
  let useAmount = $('#usedAmoutFromWallet')
  let wallatAvailbleAmout = $('#wallatAvailbleAmout')
  let extraPay = $('#extraPay')
  $('.result_table').hide(); 
 
  let getPriceCard = (cardPrice,count,multiplier,countTotal)=>{
    
    let SelectCardPrice = $(cardPrice).find('.top-price p').text()
    count.text(SelectCardPrice);
      countTotal.text(SelectCardPrice * multiplier);
      let gethealthTotal = parseInt($(healthCountTotal).text());
      let getlifeCountTotal =  parseInt($(lifeCountTotal).text());
      let getaccidentCountTotal = parseInt($(accidentCountTotal).text());
      let finalTotalAmount = gethealthTotal + getlifeCountTotal + getaccidentCountTotal
      $(totalAllocation).text(finalTotalAmount);
      $(useAmount).text(finalTotalAmount)
      $(wallatAvailbleAmout).text(1400 - finalTotalAmount)
      if(wallatAvailbleAmout.text() < 0){
        $(wallatAvailbleAmout).text(0)
      }
      switch(true){
        case finalTotalAmount > 1400:
        $(extraPay).text(finalTotalAmount - 1400)
        default:
        console.log('fasd') 
      }
}



    $('.lifeCard').click(function(){
      getPriceCard(this,lifeCount,1,lifeCountTotal)
      $('.lifeCard').find('input').attr('checked', false).triggerHandler('click');
      $(this).find('input').attr('checked', true).triggerHandler('click');
      $('.lifeCard').removeClass('activeCard')
      $(this).addClass('activeCard')
    })

    $('.healthCard').click(function(){
      $('.healthCard').find('input').attr('checked', false).triggerHandler('click');
      getPriceCard(this,healthCount,2,healthCountTotal)
      $(this).find('input').attr('checked', true).triggerHandler('click');
      $('.healthCard').removeClass('activeCard')
      $(this).addClass('activeCard')
      
    })
    
    $('.accidenCard').click(function(){
      $('.accidenCard').find('input').attr('checked', false).triggerHandler('click');
      getPriceCard(this,accidentCount,1,accidentCountTotal)
      $(this).find('input').attr('checked', true).triggerHandler('click');
      $('.accidenCard').removeClass('activeCard')
      $(this).addClass('activeCard')
    })


    $('#checkout').click(function(){
       let pdfHelth = $(healthCount).text();
       let pdflife = $(lifeCount).text();
       let pdfaccident = $(accidentCount).text();
       $('#PdfhealtCount').text(pdfHelth)
       $('#PdflifeCount').text(pdflife)
       $('#PdfacciendCount').text(pdfaccident)

       let gethealthTotal = parseInt($(healthCount).text());
       let getlifeCountTotal =  parseInt($(lifeCount).text());
       let getaccidentCountTotal = parseInt($(accidentCount).text());
       $('#PdfcountTotal').text(gethealthTotal + getlifeCountTotal + getaccidentCountTotal)


      let pdfhealthCountTotal =  $(healthCountTotal).text()
      let pdflifeCountTotal =  $(lifeCountTotal).text()
      let pdfaccidentCountTotal = $(accidentCountTotal).text()

       $('#PdfhealtCount-total').text(pdfhealthCountTotal)
       $('#pdflifeCount-total').text(pdflifeCountTotal)
       $('#PdfacciendCount-total').text(pdfaccidentCountTotal)
       let pdfTotalFind = $(totalAllocation).text()
       $('#pdffinalCount').text(pdfTotalFind)
      
         $('.result_table').show(); 
    })
