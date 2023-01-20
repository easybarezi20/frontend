import React from 'react'
import './Home.css'

function Home(props) {
  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
  return (
    <div id='container'>
        <div id='home-title-container'>
            <p className='title'><span className='colorchange'>Hi, my name is</span></p>
            <p className='title-name'><span className='colorchange2'>Barezi Morales.</span></p>
            <p className='description-home'>
              I build stuff, with 
              <a href="" class="typewrite" data-period="2000" data-type='[ " JavaScript.", " Python.", " Java.", " ReactJS." ]'>
              <span class="wrap"></span>
              </a>
            </p>
            <p className='description-home-2'>Im a <span className='colorchange'>software engineer</span> specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I've graduated 
              from General Assembly and building side projects on my spare time.
            </p>
        </div>
    </div>
  )
}

export default Home