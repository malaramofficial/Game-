function declareWinner() {

            alert("बधाई हो! आपने खेल जीत लिया!");

            playAchievementSound();

            createConfetti();

        }

        function startTimer() {

            timerDisplay.innerText = `टाइमर: 02:00`;

            timeLeft = 120; // 2 मिनट

            progressBar.style.width = '100%';

            timer = setInterval(() => {

                timeLeft--;

                const minutes = Math.floor(timeLeft / 60);

                const seconds = timeLeft % 60;

                timerDisplay.innerText = `टाइमर: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

                const progressPercentage = (timeLeft / 120) * 100;

                progressBar.style.width = `${progressPercentage}%`;

                if (timeLeft <= 0) {

                    clearInterval(timer);

                    declareLoser();

                }

            }, 1000);

        }

        function declareLoser() {

            alert("खेल खत्म हो गया! आप हार गए!");

            playGameOverSound();

            resetPuzzle();

        }

        function resetPuzzle() {

            numbers = [...Array(16).keys()].sort(() => Math.random() - 0.5);

            emptyCellIndex = numbers.indexOf(0);

            renderPuzzle();

            startTimer();

        }

        function createConfetti() {

            for (let i = 0; i < 100; i++) {

                const confettiPiece = document.createElement('div');

                confettiPiece.className = 'confetti-piece';

                confettiPiece.style.backgroundColor = getRandomColor();

                confettiPiece.style.left = Math.random() * 100 + 'vw';

                confettiPiece.style.animationDuration = (Math.random() * 3 + 2) + 's';

                confettiPiece.style.opacity = Math.random();

                confettiContainer.appendChild(confettiPiece);

                setTimeout(() => {

                    confettiPiece.remove();

                }, 5000); // 5 सेकंड बाद कन्फेटी हटाना

            }

        }

        function getRandomColor() {

            const colors = ['#FFC700', '#FF3D00', '#D5006D', '#6200EA', '#00B8D4', '#76FF03'];

            return colors[Math.floor(Math.random() * colors.length)];

        }

        function resetConfetti() {

            confettiContainer.innerHTML = '';

        }

        function playBeepSound() {

            const beepSound = new Audio('https://www.soundjay.com/button/beep-07.wav'); // साउंड फाइल के लिए लिंक

            beepSound.play();

        }

        function playGameStartSound() {

            gameStartSound.currentTime = 0; // Reset the sound

            gameStartSound.play();

        }

        function playAchievementSound() {

            achievementSound.currentTime = 0; // Reset the sound

            achievementSound.play();

        }

        function playGameOverSound() {

            gameOverSound.currentTime = 0; // Reset the sound

            gameOverSound.play();

        }

        window.onload = initializePuzzle;

    </script>

</body>

</html>