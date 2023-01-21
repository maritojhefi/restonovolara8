<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
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
        background-image: url({{asset('invitacion2.png')}});
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
        background-image: url({{asset('invitacion3.png')}});
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
        <button>Estas invitado!</button>
    </div>
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
    </script>
</body>

</html>
