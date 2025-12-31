// ===== GLOBAL VARIABLES =====
const nameInput = document.getElementById('nameInput');
const nameInputSection = document.getElementById('nameInputSection');
const passwordSection = document.getElementById('passwordSection');
const passwordInput = document.getElementById('passwordInput');
const passwordError = document.getElementById('passwordError');
const reflectionSection = document.getElementById('reflectionSection');
const greeting = document.getElementById('greeting');
const messageCardDisplay = document.getElementById('messageCardDisplay');
const cardCounter = document.getElementById('cardCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// State variables
let currentMessages = [];
let currentCardIndex = 0;
let currentTheme = '';
let pendingName = ''; // Store name for password check

// ===== EVENT LISTENERS =====
// Allow pressing Enter to submit name
nameInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        showReflection();
    }
});

// Allow pressing Enter to submit password
passwordInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
});

// Auto-focus input on page load
window.addEventListener('load', function () {
    nameInput.focus();
});

// ===== MAIN FUNCTION: SHOW REFLECTION =====
function showReflection() {
    // Get the input value and normalize it (trim whitespace, convert to lowercase)
    const name = nameInput.value.trim().toLowerCase();

    // Validation: Check if name is empty
    if (name === '') {
        alert('Please enter a name to continue.');
        nameInput.focus();
        return;
    }

    // SPECIAL CASE: SHAGUN
    if (name === 'shagun' || name === 'shagun sharma') { // Adjust last name if needed
        pendingName = 'shagun';
        // Go to password screen
        nameInputSection.classList.add('hidden');
        passwordSection.classList.remove('hidden');
        passwordInput.value = '';
        passwordError.style.display = 'none';
        passwordInput.focus();
        return;
    }

    // FOR EVERYONE ELSE
    revealContent(name);
}

// ===== CHECK PASSWORD FUNCTION =====
function checkPassword() {
    const password = passwordInput.value.trim();
    const correctPassword = "I love you Aadarsh";

    if (password === correctPassword) {
        // Correct Password
        passwordSection.classList.add('hidden');

        // Send Email Notification
        sendNotificationEmail();

        // Reveal Content for Shagun
        revealContent(pendingName);
    } else {
        // Incorrect Password
        passwordError.style.display = 'block';
        passwordInput.classList.add('shake');
        setTimeout(() => passwordInput.classList.remove('shake'), 500);
    }
}

// ===== SEND NOTIFICATION EMAIL =====
function sendNotificationEmail() {
    // NOTE: You must replace these with your actual EmailJS credentials
    // Service ID, Template ID, Public Key (Public Key is in index.html init)

    // Check if emailjs is defined (it should be from index.html)
    if (typeof emailjs !== 'undefined') {
        const templateParams = {
            to_name: 'Aadarsh',
            from_name: 'Reflection App',
            message: 'Shagun has successfully logged in and accessed her messages!',
            reply_to: 'noreply@example.com'
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    } else {
        console.warn('EmailJS not loaded');
    }
}


// ===== REVEAL CONTENT FUNCTION =====
function revealContent(name) {
    // Hide input section (redundant check for Shagun but needed for others)
    nameInputSection.classList.add('hidden');
    reflectionSection.classList.remove('hidden');

    // Variables to hold personalized content
    let greetingText = '';
    let messages = [];
    let theme = '';

    // ===== CONDITIONAL LOGIC FOR PERSONALIZED MESSAGES =====

    if (name === 'shagun' || name === 'shagun sharma') {
        // Multiple messages for girlfriend (Renamed from Priya)
        greetingText = 'My Dearest Shagun ♥';
        theme = 'theme-girlfriend';
        messages = [
            {
                title: '💝 The Love of My Life',
                content: `This year has been extraordinary, and it's all because of you. You've been my anchor in the storm and my light in the darkness. Every moment with you has taught me what it means to truly love and be loved.`
            },
            {
                title: '🌟 My Greatest Support',
                content: `Your unwavering belief in me has pushed me to become better every single day. When I doubted myself, you reminded me of my strength. Your encouragement has been the wind beneath my wings.`
            },
            {
                title: '✨ My Best Friend',
                content: `Beyond being my partner, you're my best friend. The late-night conversations, the silly inside jokes, the comfortable silence—these moments with you are my most treasured memories. Thank you for understanding me like no one else does.`
            },
            {
                title: '💕 Forever Grateful',
                content: `Thank you for being patient with my flaws, for celebrating my wins, and for standing by me through every challenge. You make everything better just by being you. Here's to many more beautiful years together.<br><span class="signature">— Forever yours</span>`
            }
        ];
    }
    else if (name === 'rahul' || name === 'rahul verma') {
        // Multiple messages for best friend 1 (Autumn theme)
        greetingText = 'Hey Rahul! 🙌';
        theme = 'theme-friend1';
        messages = [
            {
                title: '🎮 The Gaming Buddy',
                content: `From epic gaming marathons to those clutch victories at 2 AM—this year's gaming sessions with you have been legendary. You're the only person who understands my competitive spirit and matches it perfectly.`
            },
            {
                title: '💪 The Real One',
                content: `Your loyalty is unmatched, bro. You've been there through thick and thin, no questions asked. Whether I needed advice or just someone to vent to, you always showed up. That's real friendship.`
            },
            {
                title: '🧠 The Deep Thinker',
                content: `Those 3 AM philosophical conversations about life, dreams, and everything in between—they've shaped my perspective in ways I can't even fully express. You challenge me to think deeper and see the world differently.`
            },
            {
                title: '👊 Brotherhood',
                content: `You're not just a friend, you're family. Thank you for being the brother I chose. Here's to many more years of adventures, laughter, and having each other's backs.<br><span class="signature">— Your brother from another mother</span>`
            }
        ];
    }
    else if (name === 'ananya' || name === 'ananya singh') {
        // Multiple messages for best friend 2 (Ocean Teal theme)
        greetingText = 'Dear Ananya! ✨';
        theme = 'theme-friend2';
        messages = [
            {
                title: '☀️ The Sunshine',
                content: `You have this incredible ability to brighten even my darkest days. Your infectious positivity and genuine smile are gifts I cherish deeply. This year, you've been my ray of sunshine.`
            },
            {
                title: '💖 The Empath',
                content: `Your kindness and empathy are rare treasures. You listen without judgment, understand without needing explanations, and care in the most genuine way. Thank you for having such a beautiful heart.`
            },
            {
                title: '☕ The Coffee Companion',
                content: `Our random coffee dates have been some of the highlights of my year. Those spontaneous meetups, endless conversations, and shared laughter have created memories I'll always treasure.`
            },
            {
                title: '🌈 Unbreakable Bond',
                content: `You've shown me what true friendship looks like—resilient, supportive, and unconditional. Thank you for being you and for letting me be me. You're irreplaceable.<br><span class="signature">— Your forever friend</span>`
            }
        ];
    }
    else if (name === 'arjun' || name === 'arjun das') {
        // Multiple messages for best friend 3 (Sunset theme)
        greetingText = 'Yo Arjun! 🎸';
        theme = 'theme-friend3';
        messages = [
            {
                title: '🚀 The Adventure Seeker',
                content: `Dude, this year's adventures with you have been absolutely wild! From spontaneous road trips to trying crazy new things, you've made every moment memorable. Life with you is never boring.`
            },
            {
                title: '😂 The Comedy King',
                content: `Your sense of humor is unmatched. You can turn any situation into something hilarious, and your ability to make me laugh even when I'm down is a superpower. Thanks for keeping life fun.`
            },
            {
                title: '💯 The Honest Truth',
                content: `Your brutal honesty is something I value immensely. You tell me what I need to hear, not just what I want to hear. You challenge me to be better, and that's what real friends do.`
            },
            {
                title: '🤝 Partners in Crime',
                content: `From quiet heart-to-hearts to wild adventures, you've been the perfect partner in crime. Here's to creating even more crazy memories and growing together. You're one of a kind, my friend.<br><span class="signature">— Your adventure buddy</span>`
            }
        ];
    }
    else {
        // Default message for unknown names
        greetingText = `Hello, ${capitalizeFirstLetter(nameInput.value.trim())}! 👋`;
        theme = ''; // Default theme
        messages = [
            {
                title: '🙏 A Warm Welcome',
                content: `Thank you for taking the time to visit this special page. While this reflection was created for some very special people in my life, I appreciate your presence here. May this year bring you joy, growth, and beautiful connections with the people you care about.<br><span class="signature">— With warm regards</span>`
            }
        ];
    }

    // Apply theme to body
    applyTheme(theme);

    // Update the greeting
    greeting.innerHTML = greetingText;

    // Store messages and reset card index
    currentMessages = messages;
    currentCardIndex = 0;
    currentTheme = theme;

    // Display the first card
    displayCard(0);
}

// ===== APPLY THEME FUNCTION =====
function applyTheme(theme) {
    // Remove all theme classes
    document.body.classList.remove('theme-girlfriend', 'theme-friend1', 'theme-friend2', 'theme-friend3');

    // Apply new theme if specified
    if (theme) {
        document.body.classList.add(theme);
    }
}

// ===== DISPLAY CARD FUNCTION =====
function displayCard(index) {
    if (index < 0 || index >= currentMessages.length) {
        return;
    }

    currentCardIndex = index;
    const msg = currentMessages[index];

    // Create card HTML
    let cardHTML = '<div class="message-card">';
    if (msg.title) {
        cardHTML += `<div class="card-title">${msg.title}</div>`;
    }
    cardHTML += `<p>${msg.content}</p>`;
    cardHTML += '</div>';

    // Update display
    messageCardDisplay.innerHTML = cardHTML;

    // Update counter
    cardCounter.textContent = `Card ${index + 1} of ${currentMessages.length}`;

    // Update button states
    updateNavigationButtons();
}

// ===== UPDATE NAVIGATION BUTTONS =====
function updateNavigationButtons() {
    // Disable Previous button if on first card
    prevBtn.disabled = (currentCardIndex === 0);

    // Disable Next button if on last card
    nextBtn.disabled = (currentCardIndex === currentMessages.length - 1);
}

// ===== NAVIGATION FUNCTIONS =====
function nextCard() {
    if (currentCardIndex < currentMessages.length - 1) {
        displayCard(currentCardIndex + 1);
    }
}

function previousCard() {
    if (currentCardIndex > 0) {
        displayCard(currentCardIndex - 1);
    }
}

// ===== RESET FUNCTION =====
function resetApp() {
    // Clear the input
    nameInput.value = '';
    passwordInput.value = ''; // Clear password

    // Reset theme to default
    applyTheme('');

    // Reset state
    currentMessages = [];
    currentCardIndex = 0;
    currentTheme = '';
    pendingName = '';

    // Show input section, hide reflection and password sections
    reflectionSection.classList.add('hidden');
    passwordSection.classList.add('hidden');
    nameInputSection.classList.remove('hidden');

    // Refocus the input
    setTimeout(() => {
        nameInput.focus();
    }, 100);
}

// ===== UTILITY FUNCTION: CAPITALIZE FIRST LETTER =====
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
