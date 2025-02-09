* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #ffdde1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    position: relative;
}

.container {
    text-align: center;
    background-color: #ff5c8d;
    border-radius: 15px;
    padding: 40px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 10;
}

h1 {
    font-size: 3em;
    margin-bottom: 30px;
    color: #fff;
    font-weight: bold;
}

.buttons {
    margin: 20px 0;
}

.btn {
    background-color: #ff6f91;
    color: white;
    border: none;
    padding: 15px 30px;
    margin: 10px;
    border-radius: 25px;
    font-size: 1.2em;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.btn:hover {
    transform: scale(1.1);
}

.response-popup {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;
}

.popup-content {
    background-color: #fff;
    color: #333;
    border-radius: 15px;
    padding: 30px;
    text-align: center;
    position: relative;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    z-index: 20;
}

.flowers-image {
    width: 100px;
    height: 100px;
    margin: 20px 0;
    border-radius: 50%;
}

#close-btn {
    background-color: #ff5c8d;
    color: white;
    padding: 10px 20px;
    font-size: 1.1em;
    border: none;
    border-radius: 25px;
    cursor: pointer;
}

/* Flower animations */
@keyframes flowerFall {
    0% {
        transform: translateY(-100px) rotate(0deg);
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
    }
}

.flower {
    position: absolute;
    top: -50px;
    width: 50px;
    height: 50px;
    background-image: url('https://www.w3schools.com/w3images/flowers.jpg');
    background-size: cover;
    animation: flowerFall linear infinite;
}

#flowers {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

/* Flower color randomness */
.flower:nth-child(odd) {
    background-image: url('https://www.w3schools.com/w3images/flowers.jpg');
}

.flower:nth-child(even) {
    background-image: url('https://www.w3schools.com/w3images/flowers2.jpg');
}
