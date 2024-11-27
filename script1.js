// DOM Elements
const questionDropdown = document.getElementById("question-dropdown");
const userInput = document.getElementById("user-input");
const askButton = document.getElementById("ask-button");
const chatOutput = document.getElementById("chat-output");

// Predefined Responses for Important Questions
const responses = {
    "what is the ai club": "The AI Club is a community of students passionate about Artificial Intelligence and its applications.",
    "how can i join": "You can join the AI Club by filling out the membership form available on our website and attending our meetings.",
    "membership fee": "There is no membership fee for joining the AI Club. It’s free for all university students!",
    "who are the coordinators": "Our coordinators are senior students with expertise in AI, machine learning, and related fields.",
    "do you host guest lectures": "Yes, we host guest lectures by AI experts and researchers to inspire and educate our members.",
    "ai club purpose": "The AI Club aims to foster interest in AI, provide learning opportunities, and work on exciting AI projects.",
    "join membership": "To become a member, please fill out the membership form available on the website and attend our first orientation session.",
    "how to suggest a project": "You can suggest a project by submitting your idea through our website or by talking to the coordinators directly.",
    "what projects are you working on": "Our projects include chatbots, recommendation systems, computer vision, and AI-powered apps.",
    "how do you learn ai in the club": "We organize workshops, webinars, and peer learning sessions where you can learn AI and related technologies.",
    "ai for beginners": "The AI Club offers resources and guidance for beginners to learn the fundamentals of AI, such as machine learning and deep learning.",
    "do you work on real-world projects": "Yes, we work on real-world projects and try to build solutions that have practical applications.",
    "can i lead a project": "If you have the skills and a good idea, you can definitely lead a project within the AI Club.",
    "what is the age limit to join": "There is no specific age limit for joining the AI Club. Anyone passionate about AI can become a member!",
    "when are the club meetings held": "The AI Club holds regular meetings every week. The schedule is updated on our website.",
    "how can i contact coordinators": "You can contact the coordinators via email or directly during club meetings. Their details are available on the website.",
    "is there any ai competition": "Yes, we organize AI hackathons and coding challenges periodically for members to showcase their skills.",
    "how do i become a coordinator": "To become a coordinator, you need to be an active member, contribute significantly, and be recommended by the current coordinators.",
    "what is the minimum requirement to join": "There are no minimum requirements to join the AI Club. All you need is an interest in learning about AI.",
    "how can i attend a guest lecture": "Guest lectures are open to all members of the AI Club. We announce the schedule in advance on our website and through social media.",
    "how can i participate in projects": "You can join any ongoing project by attending our project meetings or reaching out to the project lead.",
    "do you offer online resources": "Yes, we provide online resources such as tutorials, videos, and reading material for members to learn at their own pace.",
    "what is the best way to get involved": "The best way to get involved is by attending our weekly meetings, signing up for a project, and actively participating in discussions and events.",
    "what is your club’s biggest achievement": "Our club’s biggest achievement is the successful development of an AI-based recommendation system used by our university’s library.",
    "can i work on ai without coding experience": "Yes, we offer resources for beginners, and you can start learning AI even without prior coding experience. We also have non-coding roles in projects.",
    "is there any coding challenge": "Yes, we host coding challenges where members can compete and solve problems related to AI and machine learning.",
    "are there any internship opportunities": "We often collaborate with companies and organizations to offer internship opportunities in AI and data science.",
    "do you use python in ai projects": "Yes, Python is one of the most commonly used programming languages in our AI projects due to its extensive libraries and community support.",
    "what is machine learning": "Machine learning is a subset of AI where machines learn from data and improve their performance over time without explicit programming.",
    "can i learn data science here": "Yes, many of our AI projects involve data science, and we provide resources to help you learn data science as part of AI.",
    "do you collaborate with other clubs": "Yes, we collaborate with other tech clubs, especially those focused on robotics, data science, and software engineering.",
    "what are the benefits of joining ai club": "As a member, you'll gain hands-on experience, networking opportunities, and exposure to real-world AI applications.",
    "how can i become an ai expert": "To become an AI expert, you need consistent learning, hands-on projects, and collaboration with experienced members. The AI Club provides a platform for all of this."
};

// Expanded Similar Questions Mapping
const similarQuestions = {
    "what is the ai club": [
        "ai club", "what is ai", "ai", "tell me about the ai club", "what does the ai club do",
        "what is the ai club about", "ai club details", "what are the goals of the ai club", 
        "about ai club", "club details", "ai club activities", "club goals", "what does ai mean"
    ],
    "how can i join": [
        "how do i become a member", "how can i register for the club", "how to join the ai club",
        "what are the steps to join the club", "how do i sign up", "join ai club", "becoming a member", 
        "joining process", "registration", "membership", "steps to join", "club registration"
    ],
    "membership fee": [
        "do i need to pay to join", "is there any cost to join the ai club", "is membership free",
        "is there a fee to join", "do i need to pay for membership", "membership cost", "fee to join",
        "club fee", "cost to join club", "ai club fees", "membership charges", "cost details"
    ],
    "who are the coordinators": [
        "who are the current coordinators", "who leads the club", "who is managing the club",
        "who are the heads of the ai club", "who are the leaders of the club", "who runs the ai club",
        "coordinator details", "club coordinators", "coordinator contact", "head of club",
        "leaders of ai club", "club management", "who are coordinators"
    ],
    "do you host guest lectures": [
        "do you invite guest speakers", "do you have expert lectures", "are guest lectures hosted",
        "do you organize lectures by professionals", "do you organize guest lectures", "guest lectures",
        "guest speakers", "lectures by experts", "expert talks", "special lectures", 
        "ai guest lectures", "club guest speakers", "invite speakers"
    ],
    "ai for beginners": [
        "can i learn ai as a beginner", "is ai beginner-friendly", "is there a starting point for beginners",
        "how to learn ai from scratch", "how to get started with ai", "ai for newbies", "beginner ai course",
        "learning ai basics", "start with ai", "basic ai knowledge", "getting started with ai", 
        "ai fundamentals", "ai beginner"
    ],
    "projects working on": [
        "what are your current projects", "what kind of projects are you working on", "what is the club working on",
        "what ai projects are happening", "what projects are going on in the ai club", "what projects are under development",
        "current projects", "ongoing projects", "ai club projects", "ai research projects", "project details"
    ],
    "how do you learn ai in the club": [
        "how is learning organized in the ai club", "how do you teach ai", "is there a learning program in the club",
        "how to learn ai with ai club", "learning ai", "how can i learn ai here", "ai workshops", 
        "ai learning program", "ai classes", "learning in club", "ai club learning process"
    ],
    "how can i contact coordinators": [
        "how to reach out to coordinators", "how can i get in touch with the coordinators", "contact details of coordinators",
        "how can i communicate with coordinators", "how to contact club coordinators", "coordinator contact", 
        "contact club heads", "reach coordinators", "coordinator communication", "ai club coordinator contact"
    ],
    "online resources": [
        "do you provide online materials", "are there any learning resources online", "does the club offer tutorials",
        "do you have online ai resources", "what online resources do you provide", "ai club online resources",
        "ai tutorials", "online learning materials", "ai study materials", "ai learning resources"
    ],
    "is there any competition": [
        "are there any ai competitions", "does the club organize competitions", "do you host any contests",
        "are there any coding challenges", "ai competition", "does the club have any competitions", "competitions in club",
        "ai club contests", "coding contests", "competitive events", "club competition details"
    ],
    "how do i join a project": [
        "how to participate in a project", "how can i work on a project", "can i join a project",
        "how to start working on a project", "how to become a part of a project", "how do i become part of a project team",
        "project participation", "join ai project", "becoming part of a project", "working on a project"
    ],
    "how can i attend a guest lecture": [
        "how do i participate in a guest lecture", "how can i be part of guest lectures", "are guest lectures open to all",
        "can i join the guest lectures", "how to attend guest lectures", "guest lecture participation",
        "attend guest talks", "participate in lectures", "guest lecture details", "ai club lectures"
    ],
    "how do i become a coordinator": [
        "how to be a coordinator", "what are the requirements to be a coordinator", "can i become a coordinator",
        "how to lead the club", "what does it take to be a coordinator", "how to take a leadership role",
        "club leadership", "becoming coordinator", "coordinator role", "lead ai club"
    ],
    "is there any internship opportunities": [
        "are internships available", "can i get an internship", "does the club offer internships",
        "are there any job opportunities through the club", "internship offers", "does the club provide internships",
        "ai club internships", "club internship opportunities", "internships in ai", "internship details"
    ],
    "what is machine learning": [
        "what does machine learning mean", "define machine learning", "what is ml", "machine learning explanation",
        "what is the meaning of machine learning", "tell me about machine learning", "what is machine learning about",
        "machine learning definition", "what is ml in ai", "ml details", "ml in ai club"
    ],
    "can i learn data science here": [
        "do you teach data science", "is data science taught here", "data science learning", "can i join a data science project",
        "data science courses", "data science in ai club", "learning data science", "data science with ai", 
        "data science curriculum", "ai data science", "data science workshops"
    ],
    "do you use python in ai projects": [
        "do you use python for ai", "is python used in ai", "is python involved in ai projects", "do ai projects require python",
        "ai python usage", "python programming for ai", "python for ai projects", "using python in projects", 
        "python in machine learning", "python in ai"
    ],
    "what is the best way to get involved": [
        "how to get involved with ai club", "how do i start participating", "best way to join ai club",
        "how can i become more active", "how to be active in ai club", "ai club involvement", "getting involved",
        "participation in ai club", "how to contribute to the ai club", "club involvement"
    ],
    "how can i become an ai expert": [
        "how to become an expert in ai", "what does it take to be an ai expert", "how to get really good at ai",
        "steps to become an ai expert", "how to master ai", "expert in ai", "becoming an ai professional", 
        "how to specialize in ai", "ai mastery", "becoming a pro in ai"
    ],
    "can i work on ai without coding experience": [
        "do you need coding experience for ai", "can beginners with no coding knowledge work on ai projects",
        "can i join ai without knowing coding", "can i start ai with no coding skills", "ai without coding", 
        "learn ai without coding", "no coding ai projects", "ai for non-coders", "coding not required for ai"
    ],
    "how can i learn ai from scratch": [
        "how do i start learning ai", "learning ai from the beginning", "what are the basics of ai",
        "how can i learn ai step by step", "starting ai from scratch", "ai learning process", "ai basics",
        "beginner ai program", "how to learn ai with no experience", "learning path for ai"
    ],
    "what are the benefits of joining ai club": [
        "why should i join the ai club", "what can i gain from joining the ai club", "advantages of joining ai club",
        "benefits of ai club membership", "why become a member of the ai club", "what do i get by joining ai club",
        "ai club perks", "ai club advantages", "what are the benefits of joining","benefits"
    ],
    "how to suggest a project": [
        "can i suggest a project idea", "how to propose a project", "suggesting a project idea",
        "how can i pitch a project", "project proposals", "suggest a project", "how to recommend a project",
        "submit project idea", "suggesting new projects", "how to introduce a project idea","project"
    ],
    "is the club open to all students": [
        "is the club only for certain students", "who can join the ai club", "can any student join the ai club",
        "who is eligible to join", "is there any eligibility criteria to join", "student eligibility", 
        "open for all students", "ai club membership criteria", "who can be a member"
    ],
    "how often do you meet": [
        "how frequent are the club meetings", "how often does the ai club meet", "how many meetings in a month",
        "meeting schedule", "ai club meeting frequency", "meeting dates", "how regular are the meetings",
        "meeting frequency", "club events", "how many times does the club meet",
    ]
};

// Function to handle user input and provide the response
function chatbotResponse(userQuestion) {
    const loweredQuestion = userQuestion.toLowerCase();

    // Check if exact match exists
    if (responses[loweredQuestion]) {
        return responses[loweredQuestion];
    }

    // Check for similar questions and provide answer
    for (const question in similarQuestions) {
        const questionVariants = similarQuestions[question];
        for (let i = 0; i < questionVariants.length; i++) {
            if (loweredQuestion.includes(questionVariants[i])) {
                return `I couldn't find an exact match for your question, but here is something similar: "${question}". Answer: ${responses[question]}`;
            }
        }
    }

    // Default response if no match is found
    return "Sorry, I couldn't find an answer to that question. Please ask something else about the AI Club.";
}

// Event Listener for Dropdown Selection and Custom Input
askButton.addEventListener("click", () => {
    const selectedQuestion = questionDropdown.value;
    const typedQuestion = userInput.value.trim();

    let questionToAsk;

    if (selectedQuestion) {
        questionToAsk = selectedQuestion.toLowerCase();
    } else if (typedQuestion) {
        questionToAsk = typedQuestion;
    }

    if (questionToAsk) {
        // Display user question
        const userChat = `<div class="user-message">${questionToAsk}</div>`;
        chatOutput.innerHTML += userChat;

        // Get chatbot response
        const botMessage = chatbotResponse(questionToAsk);
        const botChat = `<div class="bot-message">${botMessage}</div>`;
        chatOutput.innerHTML += botChat;

        // Clear the input fields and reset dropdown
        userInput.value = '';
        questionDropdown.value = '';
        chatOutput.scrollTop = chatOutput.scrollHeight;
    } else {
        alert("Please select or type a question!");
    }
});
