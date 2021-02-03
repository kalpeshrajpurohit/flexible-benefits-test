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
  let multiplierValue  = $('.multiplierValue');
  let healthMulti =  $('#healthMulti')
  let lifeMulti =  $('#lifeMulti')
  let accidentMulti = $('#accidentMulti')
  $('.result_table').hide()
  let getPriceCard = (cardPrice,count,multiplier,countTotal,multiValue)=>{
    
    let SelectCardPrice = $(cardPrice).find('.top-price p').text()

    let selectMultipleValue = $(cardPrice).find('.multiplierValue').text()
    $(multiValue).text(selectMultipleValue)

    count.text(SelectCardPrice);
      countTotal.text(SelectCardPrice * selectMultipleValue);
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
      let extraPayamount = finalTotalAmount - 1400
      if(finalTotalAmount > 1400){
        $(extraPay).text(extraPayamount)
      }
      else{
       $(extraPay).text(0) 
      }
}



    $('.lifeCard').click(function(){
      getPriceCard(this,lifeCount,this,lifeCountTotal,lifeMulti)
      $('.lifeCard').find('input').attr('checked', false).triggerHandler('click');
      $(this).find('input').attr('checked', true).triggerHandler('click');
      $('.lifeCard').removeClass('activeCard')
      $(this).addClass('activeCard')
    })

    $('.healthCard').click(function(){
      $('.healthCard').find('input').attr('checked', false).triggerHandler('click');
      getPriceCard(this,healthCount,this,healthCountTotal,healthMulti)
      $(this).find('input').attr('checked', true).triggerHandler('click');
      $('.healthCard').removeClass('activeCard')
      $(this).addClass('activeCard')
      
    })
    
    $('.accidenCard').click(function(){
      $('.accidenCard').find('input').attr('checked', false).triggerHandler('click');
      getPriceCard(this,accidentCount,multiplierValue,accidentCountTotal,accidentMulti)
      $(this).find('input').attr('checked', true).triggerHandler('click');
      $('.accidenCard').removeClass('activeCard')
      $(this).addClass('activeCard')
    })


    $('#checkout').click(function(){
       let pdfHelth = $(healthCount).text();
       let pdflife = $(lifeCount).text();
       let pdfaccident = $(accidentCount).text();


       let  Pdfhealtmulti = $(healthMulti).text()
       let  Pdflifemulti = $(lifeMulti).text()
       let  Pdfacciendmulti = $(accidentMulti).text()
 
       // Pdfhealtmulti
       // Pdflifemulti
       // Pdfacciendmulti

       $('#Pdfhealtmulti').text(Pdfhealtmulti)
       $('#Pdflifemulti').text(Pdflifemulti)
       $('#Pdfacciendmulti').text(Pdfacciendmulti)




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
