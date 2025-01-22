<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invitación Interactiva</title>
    {{-- <link rel="stylesheet" href="style.css"> --}}
    <style>
        body,
        html {
            margin: 0;
            padding: 0;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0e8d9;
        }

        .invitation-container {
            perspective: 1000px;
        }

        .invitation-card {
            width: 300px;
            height: 400px;
            transform-style: preserve-3d;
            transition: transform 0.8s;
        }

        .card-front,
        .card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #fff;
            font-family: 'Arial', sans-serif;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .card-front {
            background-color: #fa7268;
        }

        .card-back {
            background-color: #47b8e0;
            transform: rotateY(180deg);
        }

        button {
            border: none;
            outline: none;
            cursor: pointer;
            padding: 10px 20px;
            border-radius: 5px;
            background-color: #fff;
            color: #333;
            transition: background-color 0.3s, color 0.3s;
        }

        button:hover {
            background-color: #333;
            color: #fff;
        }

        .floating-message {
            position: fixed;
            left: 50%;
            bottom: 20px;
            transform: translateX(-50%);
            background-color: #4CAF50;
            color: white;
            padding: 16px;
            border-radius: 5px;
            display: none;
            z-index: 10;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            animation: fadeInOut 3s forwards;
        }

        @keyframes fadeInOut {

            0%,
            100% {
                opacity: 0;
            }

            10%,
            90% {
                opacity: 1;
            }
        }
    </style>
</head>

<body>

    <div class="invitation-container">
        <div class="invitation-card">
            <div class="card-front">
                <h1>¡Estás Invitado!</h1>
                <p>A un evento especial</p>
                <button class="open-invitation">Ver Detalles</button>
            </div>
            <div class="card-back">
                <h2>Detalles del Evento</h2>
                <p>Fecha: 24 de Marzo</p>
                <p>Lugar: Casa de la Cultura, Ciudad Nueva</p>
                <button class="close-invitation">Cerrar</button>
                <button class="attend-button">Asistiré</button>
            </div>
            <div class="floating-message">¡Gracias por confirmar tu asistencia!</div>
        </div>
    </div>

    {{-- <script src="script.js"></script> --}}
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const openButton = document.querySelector('.open-invitation');
            const closeButton = document.querySelector('.close-invitation');
            const attendButton = document.querySelector('.attend-button');
            const invitationCard = document.querySelector('.invitation-card');
            const floatingMessage = document.querySelector('.floating-message');

            openButton.addEventListener('click', () => {
                invitationCard.style.transform = 'rotateY(180deg)';
            });

            closeButton.addEventListener('click', () => {
                invitationCard.style.transform = '';
            });

            attendButton.addEventListener('click', () => {
                floatingMessage.style.display = 'block';
                setTimeout(() => {
                    floatingMessage.style.display = 'none';
                }, 3000); // El mensaje se oculta después de 3 segundos
            });
        });
    </script>
</body>

</html>
