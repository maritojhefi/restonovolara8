<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cotave</title>
    <link rel="icon" type="image/x-icon" href="{{asset('vino.jpeg')}}">
    <style>
        .confetti {
            max-width: 640px;
            display: block;
            margin: 0 auto;
            border: 1px solid #ddd;
            user-select: none;
        }
    </style>
    <style>
        @import "https://fonts.googleapis.com/css?family=Karla|Slackey|Sriracha";
    
        body {
            background: radial-gradient(ellipse at center, #d3e87d 0%, #efc035 100%);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            perspective: 1000px;
            margin: 0;
            height: 100vh;
            overflow: hidden;
        }
    
        @media (min-width: 320px) and (max-width: 1023px) {
            body {
                transform: scale(0.8);
            }
        }
    
        * {
            outline: none;
        }
    
        .invitation {
            width: 500px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    
        .envelope {
            background: #ff3c41;
            width: 100%;
            height: 307.6923076923px;
            position: relative;
            z-index: 1;
        }
    
        .envelope.is-open:before,
        .envelope.is-open:after {
            z-index: -2;
        }
    
        .envelope:before,
        .envelope:after {
            content: "";
            position: absolute;
            bottom: 0;
        }
    
        .envelope:before {
            right: 0;
            border-bottom: 0px solid transparent;
            border-top: 307.6923076923px solid transparent;
            border-right: 500px solid #3e3737;
            z-index: 1;
        }
    
        .envelope:after {
            left: 0;
            border-bottom: 0px solid transparent;
            border-top: 307.6923076923px solid transparent;
            border-left: 500px solid #323030;
            z-index: 1;
        }
    
        .flap {
            border-right: 250px solid transparent;
            border-top: 153.8461538462px solid #615c5c;
            border-left: 250px solid transparent;
            position: absolute;
            left: 0;
            top: 0;
            transform-origin: 50% 0%;
            z-index: 2;
        }
    
        .mask {
            box-sizing: border-box;
            -webkit-clip-path: inset(0 0 50% 0);
            clip-path: inset(0 0 50% 0);
            overflow: hidden;
            position: relative;
            width: 480px;
            height: 2010px;
            z-index: 0;
            margin: auto;
            top: 50%;
            transform: translate(0, -50%);
            perspective: 1200px;
        }
    
        .card {
            position: relative;
            width: 480px;
            height: 670px;
            margin: auto;
            transform-style: preserve-3d;
            transform-origin: 50% 10%;
            transform: translate(0, 128%) rotateY(0deg);
        }
    
        .face {
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            position: absolute;
            background: transparent 50% 100%/auto 100% no-repeat;
            box-shadow: 0 3px 6x rgba(0, 0, 0, 0.3);
        }
    
        .face:last-of-type {
            transform: translateZ(-3px) rotateY(180deg);
            background-size: 100% auto;
        }
    
        .front {
            background-image: url({{ asset('invitacion2.png') }});
        }
    
        .front h1 {
            position: relative;
            font: normal 3em/0.9 "Slackey", sans-serif;
            letter-spacing: -2px;
            color: #ffce00;
            padding: 30px 0 0;
            margin: 0;
            -webkit-font-smoothing: subpixel-antialiased;
        }
    
        .front h1 img {
            width: 90%;
            display: block;
            margin: auto;
        }
    
        .front h1 span {
            display: block;
            text-align: center;
            margin-top: 40px;
            padding: 0 20%;
            margin: auto;
            line-height: 1.3;
        }
    
        .front h1 .extrude {
            text-shadow: 0 1px 0 #e6b900, 0 2px 0 #cca500, 0 3px 0 #b39000, 0 4px 0 #997c00, 0 5px 0 #806700, 0 6px 1px rgba(0, 0, 0, 0.0980392), 0 0 5px rgba(0, 0, 0, 0.0980392), 0 1px 3px rgba(0, 0, 0, 0.298039), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.247059);
        }
    
        .face.back {
            background-image: url({{ asset('invitacion5.png') }});
            color: #000;
            overflow: hidden;
        }
    
        .face.back img {
            position: absolute;
            top: 60px;
            display: inline-block;
            width: 90%;
            left: 50%;
            transform: translate(-50%, 0);
        }
    
        button {
            font: normal 1.25em "Karla", sans-serif;
            padding: 15px 30px;
            border-radius: 30px;
            background: #ffce00;
            color: #343030;
            border: none;
            position: absolute;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
            left: 50%;
            top: 200px;
            transform: translate(-50%, -50%);
            transform-origin: 50% 50%;
            z-index: 1;
            cursor: pointer;
            transition: background 0.3s ease-out, color 0.3s ease-out;
        }
    
        button.invert {
            color: #ffce00;
            background: #ef0006;
        }
    </style>
</head>



<body>

    <div class="invitation">
        <div class="envelope">
            <div class="mask">
                <div class="card">
                    <div class="face front">

                    </div>
                    <div class="face back"></div>
                </div>
            </div>
        </div>
        <div class="flap"></div>
        <button id="button">Estas invitado!</button>
    </div>

    {{-- <canvas class="confetti" id="canvas"></canvas> --}}
    <script src="https://code.jquery.com/jquery-3.6.3.min.js"
        integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.﻿cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TimelineMax.min.js"></script>
    <script>
        const button = $('button');
        const envelope = $('.envelope');
        var flipped = false;

        function pullOut() {
            return new TimelineMax()
                .to('.flap', 1, {
                    rotationX: 180,
                    ease: Power1.easeInOut
                }, 'scaleBack')
                .to('.invitation', 1, {
                    scale: 0.8,
                    ease: Power4.easeInOut,
                }, 'scaleBack')
                .set('.flap', {
                    zIndex: 0
                })
                .to('.card', 1, {
                    y: '0%',
                    scaleY: 1.2,
                    ease: Circ.easeInOut,
                })
                .set('.mask', {
                    //- Change overflow on mask
                    overflow: 'visible',
                    onComplete: function() {
                        //- Change Z-Index on Pseudo element
                        envelope.toggleClass('is-open');
                    }
                })
                .to('.mask', 1.3, {
                    'clip-path': 'inset(0 0 0% 0)',
                    ease: Circ.easeInOut,
                }, 'moveDown')
                .to('.card', 1.3, {
                    y: '100%',
                    scaleY: 1,
                    ease: Circ.easeInOut,
                }, 'moveDown')
                .to('button', 1, {
                    y: '180px',
                    ease: Circ.easeInOut,
                    onComplete: toggleText
                }, 'moveDown+=0.15');
        }

        function toggleFlip() {
            if (!envelope.hasClass('is-open')) {
                return;
            }

            const ry = (!flipped) ? 180 : 0;
            flipped = (!flipped) ? true : false;

            TweenMax.to('.card', 1, {
                rotationY: ry,
                ease: Power4.easeInOut,
                onComplete: toggleText
            });
        }

        function toggleText() {
            var text = !flipped ? 'Mas informacion!' : 'Nos vemos ahi';
            button.toggleClass('invert', !flipped).text(text);
        }

        button.one('click', pullOut);
        button.on('click', toggleFlip);

        var audio = document.createElement("AUDIO")
        document.body.appendChild(audio);
        audio.src = "/lunita.mp3"
        document.body.addEventListener("mousemove", function() {
            audio.play()
        })
    </script>
    <script src="{{asset('js/confetti.js')}}"></script>
    <script>
        'use strict';
        var btnCompanies = document.getElementById("button");
        btnCompanies.onclick = function() {
  // Globals
  var random = Math.random
    , cos = Math.cos
    , sin = Math.sin
    , PI = Math.PI
    , PI2 = PI * 2
    , timer = undefined
    , frame = undefined
    , confetti = [];

  var particles = 10
    , spread = 40
    , sizeMin = 3
    , sizeMax = 12 - sizeMin
    , eccentricity = 10
    , deviation = 100
    , dxThetaMin = -.1
    , dxThetaMax = -dxThetaMin - dxThetaMin
    , dyMin = .13
    , dyMax = .18
    , dThetaMin = .4
    , dThetaMax = .7 - dThetaMin;

  var colorThemes = [
    function() {
      return color(200 * random()|0, 200 * random()|0, 200 * random()|0);
    }, function() {
      var black = 200 * random()|0; return color(200, black, black);
    }, function() {
      var black = 200 * random()|0; return color(black, 200, black);
    }, function() {
      var black = 200 * random()|0; return color(black, black, 200);
    }, function() {
      return color(200, 100, 200 * random()|0);
    }, function() {
      return color(200 * random()|0, 200, 200);
    }, function() {
      var black = 256 * random()|0; return color(black, black, black);
    }, function() {
      return colorThemes[random() < .5 ? 1 : 2]();
    }, function() {
      return colorThemes[random() < .5 ? 3 : 5]();
    }, function() {
      return colorThemes[random() < .5 ? 2 : 4]();
    }
  ];
  function color(r, g, b) {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  // Cosine interpolation
  function interpolation(a, b, t) {
    return (1-cos(PI*t))/2 * (b-a) + a;
  }

  // Create a 1D Maximal Poisson Disc over [0, 1]
  var radius = 1/eccentricity, radius2 = radius+radius;
  function createPoisson() {
    // domain is the set of points which are still available to pick from
    // D = union{ [d_i, d_i+1] | i is even }
    var domain = [radius, 1-radius], measure = 1-radius2, spline = [0, 1];
    while (measure) {
      var dart = measure * random(), i, l, interval, a, b, c, d;

      // Find where dart lies
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        a = domain[i], b = domain[i+1], interval = b-a;
        if (dart < measure+interval) {
          spline.push(dart += a-measure);
          break;
        }
        measure += interval;
      }
      c = dart-radius, d = dart+radius;

      // Update the domain
      for (i = domain.length-1; i > 0; i -= 2) {
        l = i-1, a = domain[l], b = domain[i];
        // c---d          c---d  Do nothing
        //   c-----d  c-----d    Move interior
        //   c--------------d    Delete interval
        //         c--d          Split interval
        //       a------b
        if (a >= c && a < d)
          if (b > d) domain[l] = d; // Move interior (Left case)
          else domain.splice(l, 2); // Delete interval
        else if (a < c && b > c)
          if (b <= d) domain[i] = c; // Move interior (Right case)
          else domain.splice(i, 0, c, d); // Split interval
      }

      // Re-measure the domain
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
        measure += domain[i+1]-domain[i];
    }

    return spline.sort();
  }

  // Create the overarching container
  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top      = '0';
  container.style.left     = '0';
  container.style.width    = '100%';
  container.style.height   = '0';
  container.style.overflow = 'visible';
  container.style.zIndex   = '9999';

  // Confetto constructor
  function Confetto(theme) {
    this.frame = 0;
    this.outer = document.createElement('div');
    this.inner = document.createElement('div');
    this.outer.appendChild(this.inner);

    var outerStyle = this.outer.style, innerStyle = this.inner.style;
    outerStyle.position = 'absolute';
    outerStyle.width  = (sizeMin + sizeMax * random()) + 'px';
    outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
    innerStyle.width  = '100%';
    innerStyle.height = '100%';
    innerStyle.backgroundColor = theme();

    outerStyle.perspective = '50px';
    outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
    this.axis = 'rotate3D(' +
      cos(360 * random()) + ',' +
      cos(360 * random()) + ',0,';
    this.theta = 360 * random();
    this.dTheta = dThetaMin + dThetaMax * random();
    innerStyle.transform = this.axis + this.theta + 'deg)';

    this.x = window.innerWidth * random();
    this.y = -deviation;
    this.dx = sin(dxThetaMin + dxThetaMax * random());
    this.dy = dyMin + dyMax * random();
    outerStyle.left = this.x + 'px';
    outerStyle.top  = this.y + 'px';

    // Create the periodic spline
    this.splineX = createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length-1; i < l; ++i)
      this.splineY[i] = deviation * random();
    this.splineY[0] = this.splineY[l] = deviation * random();

    this.update = function(height, delta) {
      this.frame += delta;
      this.x += this.dx * delta;
      this.y += this.dy * delta;
      this.theta += this.dTheta * delta;

      // Compute spline and convert to polar
      var phi = this.frame % 7777 / 7777, i = 0, j = 1;
      while (phi >= this.splineX[j]) i = j++;
      var rho = interpolation(
        this.splineY[i],
        this.splineY[j],
        (phi-this.splineX[i]) / (this.splineX[j]-this.splineX[i])
      );
      phi *= PI2;

      outerStyle.left = this.x + rho * cos(phi) + 'px';
      outerStyle.top  = this.y + rho * sin(phi) + 'px';
      innerStyle.transform = this.axis + this.theta + 'deg)';
      return this.y > height+deviation;
    };
  }

  function poof() {
    if (!frame) {
      // Append the container
      document.body.appendChild(container);

      // Add confetti
      var theme = colorThemes[0]
        , count = 0;
      (function addConfetto() {
        var confetto = new Confetto(theme);
        confetti.push(confetto);
        container.appendChild(confetto.outer);
        timer = setTimeout(addConfetto, spread * random());
      })(0);

      // Start the loop
      var prev = undefined;
      requestAnimationFrame(function loop(timestamp) {
        var delta = prev ? timestamp - prev : 0;
        prev = timestamp;
        var height = window.innerHeight;

        for (var i = confetti.length-1; i >= 0; --i) {
          if (confetti[i].update(height, delta)) {
            container.removeChild(confetti[i].outer);
            confetti.splice(i, 1);
          }
        }

        if (timer || confetti.length)
          return frame = requestAnimationFrame(loop);

        // Cleanup
        document.body.removeChild(container);
        frame = undefined;
      });
    }
  }

  poof();
};

    </script>
</body>

</html>
