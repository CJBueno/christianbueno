import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-topleft',
  templateUrl: './topleft.component.html',
  styleUrls: ['./topleft.component.css']
})
export class TopleftComponent implements OnInit {
  constructor() { }

  ngOnInit(){
    $('.showTweezBtn').click(function(){
      $('.tweezTextOverflow').show();
      $('.tweezDesc').slideDown('fast');
      $(this).hide();
      $('.hideTweezBtn').show();
      $('.nsaTextOverflow').hide();
      $('.nsaDesc').slideUp('fast');
      $('.fakeTextOverflow').hide();
      $('.fakeDesc').slideUp('fast');
      $(this).hide();
      $('.showNsaBtn').show();
      $('.hideNsaBtn').hide();
      $('.showFakeBtn').show();
      $('.hideFakeBtn').hide();
    })
    $('.hideTweezBtn').click(function(){
      $('.tweezTextOverflow').hide();
      $('.tweezDesc').slideUp('fast');
      $(this).hide();
      $('.showTweezBtn').show();
    })

    $('.showFakeBtn').click(function(){
      $('.fakeTextOverflow').show();
      $('.fakeDesc').slideDown('fast');
      $(this).hide();
      $('.hideFakeBtn').show();
      $('.nsaTextOverflow').hide();
      $('.nsaDesc').slideUp('fast');
      $('.tweezTextOverflow').hide();
      $('.tweezDesc').slideUp('fast');
      $(this).hide();
      $('.showNsaBtn').show();
      $('.hideNsaBtn').hide();
      $('.showTweezBtn').show();
      $('.hideTweezBtn').hide();
    })
    $('.hideFakeBtn').click(function(){
      $('.fakeTextOverflow').hide();
      $('.fakeDesc').slideUp('fast');
      $(this).hide();
      $('.showFakeBtn').show();
    })

    $('.showNsaBtn').click(function(){
      $('.nsaTextOverflow').show();
      $('.nsaDesc').slideDown('fast');
      $(this).hide();
      $('.hideNsaBtn').show();
      $('.fakeTextOverflow').hide();
      $('.fakeDesc').slideUp('fast');
      $('.tweezTextOverflow').hide();
      $('.tweezDesc').slideUp('fast');
      $(this).hide();
      $('.showFakeBtn').show();
      $('.hideFakeBtn').hide();
      $('.showTweezBtn').show();
      $('.hideTweezBtn').hide();
    })
    $('.hideNsaBtn').click(function(){
      $('.nsaTextOverflow').hide();
      $('.nsaDesc').slideUp('fast');
      $(this).hide();
      $('.showNsaBtn').show();
    })
  }

}
