document.addEventListener("DOMContentLoaded", () => {
    // Header scroll effect
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Reveal elements on scroll
    const revealElements = document.querySelectorAll(".about-content, .card, .contact-container, .section-title");

    // Add initial styles for animation
    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Translation Logic
    const translations = {
        en: {
            navAbout: "About",
            navServices: "Services",
            navGoals: "Goals",
            navContact: "Contact",
            heroTitle: "Mehmet USLU",
            heroSubtitle: "Junior Software Developer | IT Specialist | Technology Enthusiast",
            heroBtn: "Discover My Work",
            aboutTitle: "About Me",
            aboutP1: "Hello! I'm Mehmet USLU, born in 2006. I am a technology enthusiast with a strong interest in both software development and IT systems. I currently work as an IT Specialist at a logistics company, handling technical support, network management, and system administration.",
            aboutP2: "In addition to software development, I have practical experience with technologies used in logistics operations. In particular, I work with barcode systems and operational IT solutions, including their setup, usage, and basic management. This experience has given me valuable problem-solving skills and the ability to manage systems efficiently in real-world environments.",
            aboutP3: "My career goal is to specialize in computer programming and develop innovative software projects. I continuously work on improving my skills by learning new technologies and building personal projects. I enjoy coding, solving technical problems, and turning ideas into functional systems.",
            servicesTitle: "What I Do",
            serv1Title: "Software Development",
            serv1Desc: "Developing simple applications and software using modern programming languages.",
            serv2Title: "IT Support",
            serv2Desc: "Providing technical support and troubleshooting for hardware and software issues efficiently.",
            serv3Title: "Learning & Development",
            serv3Desc: "Continuously enhancing my skills in programming and IT through courses and individual projects.",
            goalsTitle: "My Goals",
            goal1Title: "Proficiency",
            goal1Desc: "Become a proficient software developer with expertise in multiple programming languages.",
            goal2Title: "Open Source",
            goal2Desc: "Contribute to open-source projects and collaborate effectively with other developers.",
            goal3Title: "Stay Updated",
            goal3Desc: "Stay continually updated with the latest technology trends and paradigm advancements.",
            contactTitle: "Get In Touch",
            contactDesc: "Interested in collaborating or just want to discuss technology? I'd love to hear from you!",
            footerRights: "&copy; 2026 Mehmet USLU. All rights reserved.",
            backToTop: 'Başa Dön <i class="fa-solid fa-arrow-up"></i>'
        },
        tr: {
            navAbout: "Hakkımda",
            navServices: "Ne Yapıyorum",
            navGoals: "Hedeflerim",
            navContact: "İletişim",
            heroTitle: "Mehmet USLU",
            heroSubtitle: "Junior Yazılım Geliştirici | IT Uzmanı | Teknoloji Tutkunu",
            heroBtn: "Çalışmalarımı Keşfet",
            aboutTitle: "Hakkımda",
            aboutP1: "Merhaba! Ben Mehmet USLU, 2006 doğumluyum. Yazılım geliştirme ve IT sistemlerine yoğun ilgi duyan bir teknoloji tutkunuyum. Şu an bir lojistik şirketinde IT Uzmanı olarak çalışıyor; teknik destek, ağ yönetimi ve sistem yönetimi görevlerini yürütüyorum.",
            aboutP2: "Yazılım geliştirmenin yanı sıra, lojistik operasyonlarında kullanılan teknolojilerle ilgili pratik deneyime sahibim. Özellikle barkod sistemleri ve operasyonel IT çözümlerinin kurulumu, kullanımı ve temel yönetimi konularında çalışıyorum. Bu deneyim bana, gerçek dünya ortamlarda problem çözme ve sistemleri verimli bir şekilde yönetme becerileri kazandırdı.",
            aboutP3: "Kariyer hedefim bilgisayar programlama alanında uzmanlaşmak ve yenilikçi yazılım projeleri geliştirmektir. Yeni teknolojiler öğrenerek ve kişisel projeler geliştirerek becerilerimi sürekli olarak geliştirmeye çalışıyorum. Kod yazmaktan, teknik problemleri çözmekten ve fikirleri işlevsel sistemlere dönüştürmekten keyif alıyorum.",
            servicesTitle: "Neler Yapıyorum?",
            serv1Title: "Yazılım Geliştirme",
            serv1Desc: "Modern programlama dillerini kullanarak basit uygulamalar ve yazılımlar geliştiriyorum.",
            serv2Title: "IT Destek",
            serv2Desc: "Donanım ve yazılım sorunları için hızlı ve etkili teknik destek ve sorun giderme sağlıyorum.",
            serv3Title: "Öğrenim & Gelişim",
            serv3Desc: "Kurslar ve bireysel projeler aracılığıyla programlama ve IT alanındaki becerilerimi sürekli artırıyorum.",
            goalsTitle: "Hedeflerim",
            goal1Title: "Uzmanlık",
            goal1Desc: "Birden çok programlama dilinde uzmanlığa sahip yetkin bir yazılım geliştirici olmak.",
            goal2Title: "Açık Kaynak",
            goal2Desc: "Açık kaynak projelere katkıda bulunmak ve diğer geliştiricilerle etkili işbirlikleri yapmak.",
            goal3Title: "Güncel Kalmak",
            goal3Desc: "En son teknoloji trendlerini ve paradigma değişimlerini sürekli olarak takip etmek.",
            contactTitle: "İletişime Geç",
            contactDesc: "İşbirliği yapmak veya teknoloji hakkında konuşmak mı istiyorsunuz? Sizden haber almaktan mutluluk duyarım!",
            footerRights: "&copy; 2026 Mehmet USLU. Tüm hakları saklıdır.",
            backToTop: 'Başa Dön <i class="fa-solid fa-arrow-up"></i>'
        }
    };

    const langBtns = document.querySelectorAll(".lang-btn");
    const translateElements = document.querySelectorAll("[data-translate]");

    langBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Avoid redundant clicks completely
            if (btn.classList.contains("active")) return;

            // Update active class
            langBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // Change language texts
            const lang = btn.getAttribute("data-lang");

            // Toggle slider switch effect
            document.getElementById("langSwitch").setAttribute("data-active", lang);

            translateElements.forEach(el => {
                const key = el.getAttribute("data-translate");
                if (translations[lang] && translations[lang][key]) {
                    // Slight fade effect to feel modern
                    el.style.transition = 'opacity 0.15s ease';
                    el.style.opacity = '0';
                    setTimeout(() => {
                        el.innerHTML = translations[lang][key];
                        el.style.opacity = '1';
                    }, 150);
                }
            });
        });
    });
});
