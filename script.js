document.addEventListener('DOMContentLoaded', () => {

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => navLinks.classList.toggle('active'));
        document.querySelectorAll('.nav-item').forEach(link => {
            link.addEventListener('click', () => navLinks.classList.remove('active'));
        });
    }

    const mythsData = [
        { statement: "„ХИВ се предава чрез прегръдка, ръкостискане или целувка по бузата.“", type: "МИТ", isFact: false, explanation: "ХИВ не се предава чрез ежедневен физически или социален контакт." },
        { statement: "„ХИВ може да се предаде чрез ухапване от комар.“", type: "МИТ", isFact: false, explanation: "Комарите не пренасят ХИВ, тъй като вирусът не оцелява в тях." },
        { statement: "„Хората с ХИВ могат да водят напълно нормален и дълъг живот.“", type: "ФАКТ", isFact: true, explanation: "Благодарение на АРТ терапията, продължителността на живота е нормална." },
        { statement: "„Човек може да изглежда напълно здрав и да живее с ХИВ.“", type: "ФАКТ", isFact: true, explanation: "Инфекцията може да протича без симптоми с години." },
        { statement: "„Ако човек с ХИВ приема редовно терапията си и има неоткриваем вирусен товар, той не предава вируса по полов път.“", type: "ФАКТ", isFact: true, explanation: "Това е научно доказаният принцип U=U." },
        { statement: "„Използването на общи прибори за хранене или общ басейн води до заразяване.“", type: "МИТ", isFact: false, explanation: "Вирусът е изключително неустойчив извън човешкото тяло." }
    ];

    const mythsContainer = document.getElementById('mythsContainer');
    if (mythsContainer) {
        mythsData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'myth-card';
            card.innerHTML = `
                <div class="myth-prompt">${item.statement}</div>
                <div class="myth-hint"><i class="fas fa-hand-pointer"></i> Натисни, за да провериш</div>
                <div class="myth-reveal">
                    <span class="${item.isFact ? 'tag-fact' : 'tag-myth'}">${item.type}</span>
                    <p>${item.explanation}</p>
                </div>
            `;
            card.addEventListener('click', () => card.classList.toggle('revealed'));
            mythsContainer.appendChild(card);
        });
    }

    const quizQuestions = [
        { question: "1. Каква е основната разлика между ХИВ и СПИН?", options: ["Няма разлика", "ХИВ е вирусът, а СПИН е най-напредналият стадий", "СПИН е вирусът"], correct: 1, explanation: "ХИВ е вирусът, а СПИН е състоянието при липса на лечение." },
        { question: "2. Кои клетки на имунната система атакува ХИВ?", options: ["Еритроцити", "CD4 Т-лимфоцити", "Нервни клетки"], correct: 1, explanation: "ХИВ атакува CD4 белите кръвни клетки." },
        { question: "3. По кой от изброените начини МОЖЕ да се предаде ХИВ?", options: ["При незащитен полов контакт или споделяне на игли", "При пиене от обща чаша", "При ухапване от комар"], correct: 0, explanation: "ХИВ се предава по полов и кръвен път." },
        { question: "4. Какво означава медицинският принцип U = U?", options: ["Универсален = Устойчив", "Неоткриваем вирусен товар = Непредаваем", "Успешно изследване"], correct: 1, explanation: "Неоткриваем вирусен товар означава невъзможност за предаване по полов път." },
        { question: "5. Какво представлява PEP?", options: ["Ваксина", "Спешен курс с лекарства до 72 часа след рисков контакт", "Витамини"], correct: 1, explanation: "PEP е постекспозиционна профилактика." },
        { question: "6. Какво е PrEP?", options: ["Профилактични медикаменти преди евентуален контакт", "Домашен тест", "Антибиотик"], correct: 0, explanation: "PrEP предпазва от заразяване." },
        { question: "7. Къде в България се правят безплатни изследвания?", options: ["В КАБКИС към РЗИ", "Само в чужбина", "Платено е навсякъде"], correct: 0, explanation: "КАБКИС към РЗИ предлага безплатни тестове." },
        { question: "8. Може ли да се разбере ХИВ статусът по външния вид?", options: ["Да", "Не, човек може да изглежда напълно здрав", "Само по очите"], correct: 1, explanation: "Тестът е единственият начин." },
        { question: "9. Кой е международният символ на солидарност?", options: ["Синята звезда", "Червената лента", "Зеленият кръг"], correct: 1, explanation: "Червената лента е символът." },
        { question: "10. Защо борбата със стигмата е важна?", options: ["Насърчава ранното тестване и лечение", "Няма значение", "Лекува вируса"], correct: 0, explanation: "Премахването на страха води до по-добро здраве." }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    const quizBody = document.getElementById('quizBody');

    if (quizBody) {
        const questionCounter = document.getElementById('questionCounter');
        const progressFill = document.getElementById('progressFill');
        const questionText = document.getElementById('questionText');
        const optionsList = document.getElementById('optionsList');
        const feedbackBox = document.getElementById('feedbackBox');
        const nextBtn = document.getElementById('nextBtn');
        const quizResult = document.getElementById('quizResult');
        const scoreDisplay = document.getElementById('scoreDisplay');
        const resultTitle = document.getElementById('resultTitle');
        const resultMessage = document.getElementById('resultMessage');
        const restartBtn = document.getElementById('restartBtn');

        function loadQuestion() {
            const currentQ = quizQuestions[currentQuestionIndex];
            questionCounter.textContent = `Въпрос ${currentQuestionIndex + 1} от ${quizQuestions.length}`;
            progressFill.style.width = `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`;
            questionText.textContent = currentQ.question;
            optionsList.innerHTML = '';
            feedbackBox.classList.add('hidden');
            nextBtn.classList.add('hidden');

            currentQ.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.textContent = opt;
                btn.addEventListener('click', () => selectAnswer(idx, btn));
                optionsList.appendChild(btn);
            });
        }

        function selectAnswer(selectedIndex, selectedBtn) {
            const currentQ = quizQuestions[currentQuestionIndex];
            const allButtons = optionsList.querySelectorAll('.option-btn');
            allButtons.forEach(b => b.disabled = true);

            if (selectedIndex === currentQ.correct) {
                selectedBtn.classList.add('correct');
                score++;
                feedbackBox.innerHTML = `<strong>Верен отговор!</strong> ${currentQ.explanation}`;
            } else {
                selectedBtn.classList.add('wrong');
                allButtons[currentQ.correct].classList.add('correct');
                feedbackBox.innerHTML = `<strong>Неточен отговор.</strong> ${currentQ.explanation}`;
            }
            feedbackBox.classList.remove('hidden');
            nextBtn.classList.remove('hidden');
            nextBtn.textContent = currentQuestionIndex === quizQuestions.length - 1 ? 'Виж резултата' : 'Следващ въпрос';
        }

        nextBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizQuestions.length) loadQuestion();
            else showResult();
        });

        function showResult() {
            quizBody.classList.add('hidden');
            quizResult.classList.remove('hidden');
            scoreDisplay.textContent = `${score}/${quizQuestions.length}`;
            resultTitle.textContent = score >= 9 ? "Отличен резултат!" : score >= 6 ? "Много добър резултат!" : "Добро начало!";
            resultMessage.textContent = "Информираността е най-добрата защита срещу предразсъдъците.";
        }

        restartBtn.addEventListener('click', () => {
            currentQuestionIndex = 0;
            score = 0;
            quizResult.classList.add('hidden');
            quizBody.classList.remove('hidden');
            loadQuestion();
        });

        loadQuestion();
    }

    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => btn.parentElement.classList.toggle('active'));
    });

    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            scrollTopBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
        });
        scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    const shareBtn = document.getElementById('shareBtn');
    const shareFeedback = document.getElementById('shareFeedback');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href);
            shareFeedback.textContent = "Линкът е копиран в клипборда!";
            setTimeout(() => shareFeedback.textContent = "", 3500);
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // 3D МОДЕЛ НА ВИРУСА ХИВ
    const container3D = document.getElementById('hiv3dContainer');
    if (container3D && typeof THREE !== 'undefined') {
        const width = container3D.clientWidth || 450;
        const height = container3D.clientHeight || 380;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
        camera.position.set(0, 0, 6.5);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        container3D.innerHTML = "";
        container3D.appendChild(renderer.domElement);

        scene.add(new THREE.AmbientLight(0xffffff, 0.8));
        const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
        dirLight.position.set(5, 5, 5);
        scene.add(dirLight);

        const virusGroup = new THREE.Group();
        scene.add(virusGroup);

        const shellGeo = new THREE.SphereGeometry(1.8, 32, 32);
        const shellMat = new THREE.MeshStandardMaterial({ color: 0x374151, roughness: 0.4, metalness: 0.2, transparent: true, opacity: 1 });
        virusGroup.add(new THREE.Mesh(shellGeo, shellMat));

        const coreGeo = new THREE.CylinderGeometry(0.3, 0.5, 1.4, 16);
        const coreMesh = new THREE.Mesh(coreGeo, new THREE.MeshStandardMaterial({ color: 0xFFB74D, roughness: 0.3 }));
        coreMesh.rotation.z = 0.3;
        virusGroup.add(coreMesh);

        const spikeGroup = new THREE.Group();
        const stalkGeo = new THREE.CylinderGeometry(0.04, 0.06, 0.35, 8);
        const stalkMat = new THREE.MeshStandardMaterial({ color: 0x9CA3AF });
        const headGeo = new THREE.SphereGeometry(0.14, 12, 12);
        const headMat = new THREE.MeshStandardMaterial({ color: 0xD32F2F });

        const spikeCount = 32;
        const goldenRatio = (1 + Math.sqrt(5)) / 2;
        for (let i = 0; i < spikeCount; i++) {
            const theta = 2 * Math.PI * i / goldenRatio;
            const phi = Math.acos(1 - 2 * (i + 0.5) / spikeCount);
            const dir = new THREE.Vector3(Math.sin(phi) * Math.cos(theta), Math.sin(phi) * Math.sin(theta), Math.cos(phi));
            const singleSpike = new THREE.Group();
            const stalk = new THREE.Mesh(stalkGeo, stalkMat);
            stalk.position.y = 1.95;
            const head = new THREE.Mesh(headGeo, headMat);
            head.position.y = 2.18;
            singleSpike.add(stalk);
            singleSpike.add(head);
            singleSpike.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
            spikeGroup.add(singleSpike);
        }
        virusGroup.add(spikeGroup);

        let isCutaway = false;
        const toggleBtn = document.getElementById('toggleCutawayBtn');
        if (toggleBtn) {
            toggleBtn.onclick = () => {
                isCutaway = !isCutaway;
                shellMat.opacity = isCutaway ? 0.25 : 1;
                toggleBtn.innerHTML = isCutaway ? '<i class="fas fa-eye-slash"></i> Скрий разреза (плътна обвивка)' : '<i class="fas fa-eye"></i> Покажи вътрешността (разрез)';
            };
        }

        function animate() {
            requestAnimationFrame(animate);
            virusGroup.rotation.y += 0.006;
            virusGroup.rotation.x += 0.0025;
            renderer.render(scene, camera);
        }
        animate();
    }
});
