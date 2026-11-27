document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. МОБИЛНО МЕНЮ
       ========================================= */
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    /* =========================================
       2. МИТОВЕ И ФАКТИ
       ========================================= */
    const mythsData = [
        {
            statement: "„ХИВ се предава чрез прегръдка, ръкостискане или целувка по бузата.“",
            type: "МИТ",
            isFact: false,
            explanation: "ХИВ не се предава чрез ежедневен физически или социален контакт. Вирусът не прониква през здрава кожа и не се предава чрез пот или сълзи."
        },
        {
            statement: "„ХИВ може да се предаде чрез ухапване от комар.“",
            type: "МИТ",
            isFact: false,
            explanation: "Комарите не пренасят ХИВ. Когато комарът ухапе, той не инжектира кръв от предишния човек, а вирусът не може да оцелее и да се размножава в организма на насекомото."
        },
        {
            statement: "„Хората с ХИВ могат да водят напълно нормален и дълъг живот.“",
            type: "ФАКТ",
            isFact: true,
            explanation: "Благодарение на съвременната антиретровирусна терапия (АРТ), хората с ХИВ имат продължителност на живота, сравнима с тази на останалото население, могат да учат, работят и създават семейства."
        },
        {
            statement: "„Човек може да изглежда напълно здрав и да живее с ХИВ.“",
            type: "ФАКТ",
            isFact: true,
            explanation: "ХИВ инфекцията може да протича без никакви външни симптоми в продължение на години. Единственият начин за установяване е изследване."
        },
        {
            statement: "„Ако човек с ХИВ приема редовно терапията си и има неоткриваем вирусен товар, той не предава вируса по полов път.“",
            type: "ФАКТ",
            isFact: true,
            explanation: "Това е научно доказаният принцип U=U (Неоткриваем = Непредаваем), потвърден от Световната здравна организация."
        },
        {
            statement: "„Използването на общи прибори за хранене или общ басейн води до заразяване с ХИВ.“",
            type: "МИТ",
            isFact: false,
            explanation: "ХИВ е много неустойчив извън човешкото тяло и загива бързо във въздушна или водна среда. Общите прибори, чаши и басейни са напълно безопасни."
        }
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
            card.addEventListener('click', () => {
                card.classList.toggle('revealed');
            });
            mythsContainer.appendChild(card);
        });
    }

    /* =========================================
       3. ИНТЕРАКТИВЕН ТЕСТ
       ========================================= */
    const quizQuestions = [
        {
            question: "1. Каква е основната разлика между ХИВ и СПИН?",
            options: [
                "Няма разлика, двете думи означават едно и също",
                "ХИВ е вирусът, а СПИН е най-напредналият стадий на нелекуваната инфекция",
                "СПИН е вирусът, а ХИВ е лечението"
            ],
            correct: 1,
            explanation: "ХИВ е човешкият имунодефицитен вирус. СПИН е синдромът, който се развива само ако инфекцията с ХИВ не се лекува."
        },
        {
            question: "2. Кои клетки на имунната система атакува ХИВ?",
            options: [
                "Червените кръвни клетки (еритроцити)",
                "CD4 Т-лимфоцитите (бели кръвни клетки)",
                "Нервните клетки в мозъка"
            ],
            correct: 1,
            explanation: "ХИВ атакува CD4 Т-лимфоцитите, които координират защитата на организма срещу инфекции."
        },
        {
            question: "3. По кой от изброените начини МОЖЕ да се предаде ХИВ?",
            options: [
                "При незащитен полов контакт или споделяне на общи игли",
                "При пиене от една и съща чаша",
                "При ухапване от комар"
            ],
            correct: 0,
            explanation: "ХИВ се предава чрез кръв, семенна течност, вагинален секрет и кърма при директен контакт с кръвообращението или лигавиците."
        },
        {
            question: "4. Какво означава медицинският принцип U = U?",
            options: [
                "Универсален = Устойчив",
                "Неоткриваем вирусен товар = Непредаваем по полов път",
                "Ускорено = Успешно изследване"
            ],
            correct: 1,
            explanation: "Undetectable = Untransmittable: Когато терапията потисне вируса до неоткриваеми нива, рискът от предаване по полов път е нулев."
        },
        {
            question: "5. Какво представлява PEP (постекспозиционна профилактика)?",
            options: [
                "Ваксина, която се поставя в детството",
                "Спешен 28-дневен прием на лекарства до 72 часа след рискова ситуация",
                "Витамини за подсилване на имунитета"
            ],
            correct: 1,
            explanation: "PEP е спешна медикаментозна профилактика, която трябва да започне възможно най-бързо (до 72 часа) след евентуално излагане на ХИВ."
        },
        {
            question: "6. Какво е PrEP (предекспозиционна профилактика)?",
            options: [
                "Лекарство за прием от ХИВ-негативни хора преди рисков контакт за предотвратяване на заразяване",
                "Тест за домашна употреба",
                "Антибиотик срещу грип"
            ],
            correct: 0,
            explanation: "PrEP предпазва ХИВ-негативните хора от заразяване при правилен прием по лекарско предписание."
        },
        {
            question: "7. Къде в България всеки може да се изследва безплатно и анонимно за ХИВ?",
            options: [
                "В кабинетите КАБКИС към Регионалните здравни инспекции (РЗИ)",
                "Само при постъпване в болница за операция",
                "Изследването в България винаги се заплаща"
            ],
            correct: 0,
            explanation: "Кабинетите за анонимно и безплатно консултиране и изследване за ХИВ/СПИН (КАБКИС) предлагат безплатни и поверителни тестове."
        },
        {
            question: "8. Може ли да се разбере дали един човек има ХИВ по външния му вид?",
            options: [
                "Да, хората с ХИВ винаги имат видими симптоми",
                "Не, човек може да изглежда и да се чувства напълно здрав години наред",
                "Да, по цвета на кожата"
            ],
            correct: 1,
            explanation: "ХИВ няма специфични външни белези. Единственият сигурен начин да се знае ХИВ статусът е чрез тест."
        },
        {
            question: "9. Кой е международният символ на солидарност с хората, живеещи с ХИВ?",
            options: [
                "Синята звезда",
                "Червената лента (Red Ribbon)",
                "Зеленият кръг"
            ],
            correct: 1,
            explanation: "Червената лента е създадена през 1991 г. и е световен символ на осведоменост, съпричастност и подкрепа."
        },
        {
            question: "10. Защо борбата със стигмата и дискриминацията е важна за общественото здраве?",
            options: [
                "Защото страхът от осъждане спира хората да се тестват и лекуват навреме",
                "Няма връзка между стигмата и здравето",
                "Защото стигмата лекува вируса"
            ],
            correct: 0,
            explanation: "Когато обществото е информирано и подкрепящо, хората се изследват по-спокойно, започват терапия навреме и спират разпространението на вируса."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionCounter = document.getElementById('questionCounter');
    const progressFill = document.getElementById('progressFill');
    const questionText = document.getElementById('questionText');
    const optionsList = document.getElementById('optionsList');
    const feedbackBox = document.getElementById('feedbackBox');
    const nextBtn = document.getElementById('nextBtn');
    const quizBody = document.getElementById('quizBody');
    const quizResult = document.getElementById('quizResult');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    const restartBtn = document.getElementById('restartBtn');

    if (quizBody) {
        function loadQuestion() {
            const currentQ = quizQuestions[currentQuestionIndex];
            questionCounter.textContent = `Въпрос ${currentQuestionIndex + 1} от ${quizQuestions.length}`;
            progressFill.style.width = `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`;
            questionText.textContent = currentQ.question;

            optionsList.innerHTML = '';
            feedbackBox.classList.add('hidden');
            nextBtn.classList.add('hidden');

            currentQ.options.forEach((option, index) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.textContent = option;
                btn.addEventListener('click', () => selectAnswer(index, btn));
                optionsList.appendChild(btn);
            });
        }

        function selectAnswer(selectedIndex, selectedBtn) {
            const currentQ = quizQuestions[currentQuestionIndex];
            const allButtons = optionsList.querySelectorAll('.option-btn');

            allButtons.forEach(btn => btn.disabled = true);

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
            if (currentQuestionIndex < quizQuestions.length) {
                loadQuestion();
            } else {
                showResult();
            }
        });

        function showResult() {
            quizBody.classList.add('hidden');
            quizResult.classList.remove('hidden');
            scoreDisplay.textContent = `${score}/${quizQuestions.length}`;

            if (score >= 9) {
                resultTitle.textContent = "Отличен резултат! Ти си посланик на знанието!";
                resultMessage.textContent = "Притежаваш задълбочени и научно точни познания за ХИВ и СПИН. Сподели наученото с приятели, за да помогнеш в борбата с предразсъдъците.";
            } else if (score >= 6) {
                resultTitle.textContent = "Много добър резултат!";
                resultMessage.textContent = "Познаваш основните факти за превенцията и лечението на ХИВ. Прегледай секциите по-горе, за да затвърдиш всички детайли.";
            } else {
                resultTitle.textContent = "Добро начало!";
                resultMessage.textContent = "Информираността е най-добрата защита. Прочети внимателно информацията на сайта и опитай теста отново!";
            }
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

    /* =========================================
       4. FAQ АКОРДЕОН
       ========================================= */
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            item.classList.toggle('active');
        });
    });

    /* =========================================
       5. БУТОН ЗА ВРЪЩАНЕ НАЙ-ГОРЕ
       ========================================= */
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollTopBtn.style.display = 'flex';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* =========================================
       6. СПОДЕЛЯНЕ НА КАМПАНИЯТА
       ========================================= */
    const shareBtn = document.getElementById('shareBtn');
    const shareFeedback = document.getElementById('shareFeedback');
    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                shareFeedback.textContent = "Линкът към кампанията е копиран в клипборда!";
                setTimeout(() => { shareFeedback.textContent = ""; }, 3500);
            }
        });
    }

    /* =========================================
       7. АНИМАЦИИ ПРИ СКРОЛИРАНЕ
       ========================================= */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    /* =========================================
       8. 3D МОДЕЛ НА ВИРУСА ХИВ (THREE.JS - БЕЗ ВЪНШНИ КОНТРОЛИ)
       ========================================= */
    const container3D = document.getElementById('hiv3dContainer');
    if (container3D && typeof THREE !== 'undefined') {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, container3D.clientWidth / container3D.clientHeight, 0.1, 1000);
        camera.position.z = 7.5;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container3D.clientWidth, container3D.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container3D.appendChild(renderer.domElement);

        // Осветление
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
        dirLight.position.set(5, 5, 5);
        scene.add(dirLight);

        const virusGroup = new THREE.Group();
        scene.add(virusGroup);

        // 1. Външна липидна обвивка
        const shellGeo = new THREE.SphereGeometry(2, 32, 32);
        const shellMat = new THREE.MeshStandardMaterial({
            color: 0x374151,
            roughness: 0.4,
            metalness: 0.1,
            transparent: true,
            opacity: 1
        });
        const shellMesh = new THREE.Mesh(shellGeo, shellMat);
        virusGroup.add(shellMesh);

        // 2. Вътрешен капсид
        const coreGeo = new THREE.CylinderGeometry(0.35, 0.6, 1.6, 16);
        const coreMat = new THREE.MeshStandardMaterial({
            color: 0xFFB74D,
            roughness: 0.3
        });
        const coreMesh = new THREE.Mesh(coreGeo, coreMat);
        coreMesh.rotation.z = 0.3;
        virusGroup.add(coreMesh);

        // 3. Шипове
        const spikeGroup = new THREE.Group();
        const stalkGeo = new THREE.CylinderGeometry(0.05, 0.07, 0.4, 8);
        const stalkMat = new THREE.MeshStandardMaterial({ color: 0x9CA3AF });
        const headGeo = new THREE.SphereGeometry(0.16, 12, 12);
        const headMat = new THREE.MeshStandardMaterial({ color: 0xD32F2F });

        const spikeCount = 36;
        const goldenRatio = (1 + Math.sqrt(5)) / 2;

        for (let i = 0; i < spikeCount; i++) {
            const theta = 2 * Math.PI * i / goldenRatio;
            const phi = Math.acos(1 - 2 * (i + 0.5) / spikeCount);

            const dir = new THREE.Vector3(
                Math.sin(phi) * Math.cos(theta),
                Math.sin(phi) * Math.sin(theta),
                Math.cos(phi)
            );

            const singleSpike = new THREE.Group();
            const stalk = new THREE.Mesh(stalkGeo, stalkMat);
            stalk.position.y = 2.1;

            const head = new THREE.Mesh(headGeo, headMat);
            head.position.y = 2.35;

            singleSpike.add(stalk);
            singleSpike.add(head);
            singleSpike.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
            spikeGroup.add(singleSpike);
        }
        virusGroup.add(spikeGroup);

        // Бутон за разрез
        let isCutaway = false;
        const toggleBtn = document.getElementById('toggleCutawayBtn');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                isCutaway = !isCutaway;
                shellMat.opacity = isCutaway ? 0.25 : 1;
                toggleBtn.innerHTML = isCutaway
                    ? '<i class="fas fa-eye-slash"></i> Скрий разреза (плътна обвивка)'
                    : '<i class="fas fa-eye"></i> Покажи вътрешността (разрез)';
            });
        }

        // Плавна анимация на въртене
        function animate() {
            requestAnimationFrame(animate);
            virusGroup.rotation.y += 0.005;
            virusGroup.rotation.x += 0.002;
            renderer.render(scene, camera);
        }
        animate();

        // Преоразмеряване
        window.addEventListener('resize', () => {
            if (!container3D) return;
            camera.aspect = container3D.clientWidth / container3D.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container3D.clientWidth, container3D.clientHeight);
        });
    }
});
