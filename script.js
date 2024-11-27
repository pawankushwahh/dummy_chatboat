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
// Expanded Similar Questions Mapping for All Questions

// 1. How can I join the AI Club
const similarQuestions = {

"what is the ai club": [
        "ai club", "what is ai", "ai", "tell me about the ai club", "what does the ai club do",
        "what is the ai club about", "ai club details", "what are the goals of the ai club", 
        "about ai club", "club details", "ai club activities", "club goals", "what does ai mean"],

"how can i join": [
    "how do i become a member", "how can i register for the club", "how to join the ai club",
    "what are the steps to join the club", "how do i sign up", "join ai club", "becoming a member", 
    "joining process", "registration", "membership", "steps to join", "club registration",
    "how to apply to the ai club", "how to sign up for the club", "do i need to fill a form", 
    "how do i join the ai club", "how do i become part of the club", "joining rules", 
    "requirements for joining", "is there any eligibility", "can anyone join", 
    "how do i participate in the ai club", "how can i register", "is there an interview process",
    "how to become a part of the ai club", "how do i sign up for ai club", "joining procedure",
    "do i need to apply for the ai club", "club joining process", "how to become a part of ai"
],

// 2. Membership Fee
"membership fee": [
    "do i need to pay to join", "is there any cost to join the ai club", "is membership free",
    "is there a fee to join", "do i need to pay for membership", "membership cost", "fee to join",
    "club fee", "cost to join club", "ai club fees", "membership charges", "cost details",
    "what are the charges", "is the club free", "is joining free", "do you charge anything",
    "how much is the membership", "is there any charge for registration", "ai club fees details",
    "how much do i have to pay", "fees for members", "does the club charge a fee", "how much is it",
    "membership cost breakdown", "is membership fee required", "is it free to join ai club",
    "are there any hidden costs", "fees required to join", "how much for joining"
],

// 3. Who are the coordinators
"who are the coordinators": [
    "who are the current coordinators", "who leads the club", "who is managing the club",
    "who are the heads of the ai club", "who are the leaders of the club", "who runs the ai club",
    "coordinator details", "club coordinators", "coordinator contact", "head of club",
    "leaders of ai club", "club management", "who are coordinators", "who supervises the club",
    "who are in charge of the club", "coordinators name", "contact info for coordinators",
    "how to reach coordinators", "who is responsible for ai club", "who runs ai club",
    "who is managing ai club", "is there a leader for ai club", "how are the coordinators chosen",
    "current club coordinators", "coordinator details and roles", "who manages club projects",
    "ai club team leads"
],

// 4. Do you host guest lectures
"do you host guest lectures": [
    "do you invite guest speakers", "do you have expert lectures", "are guest lectures hosted",
    "do you organize lectures by professionals", "do you organize guest lectures", "guest lectures",
    "guest speakers", "lectures by experts", "expert talks", "special lectures", 
    "ai guest lectures", "club guest speakers", "invite speakers", "guest speaker sessions",
    "guest talks", "how often do you invite speakers", "are the lectures free", 
    "does the club hold any lectures", "can i attend lectures", "how to become a guest speaker",
    "what topics are discussed in guest lectures", "can i be a speaker", "how to become a guest speaker",
    "does the club hold events with experts", "what’s the guest lecture schedule"
],

// 5. Projects working on
"what projects are you working on": [
    "what projects are you currently working on", "what kind of projects are you working on",
    "what projects are available in the ai club", "are there any ongoing ai projects", 
    "what is the club developing", "what ai projects are in development", "current ai projects",
    "ongoing projects", "ai club projects", "projects being worked on", "details about club projects",
    "ai-based projects", "what projects can i join", "ai research projects", "what ai initiatives",
    "project ideas", "how to join a project", "how do i participate in a project",
    "are there any group projects", "ai club team projects", "upcoming ai projects", "project availability"
],

// 6. How do you learn AI in the club
"how do you learn ai in the club": [
    "how is learning organized in the ai club", "how do you teach ai", "is there a learning program in the club",
    "how to learn ai with ai club", "learning ai", "how can i learn ai here", "ai workshops", 
    "ai learning program", "ai classes", "learning in club", "ai club learning process",
    "does the club offer ai courses", "what do you learn in the club", "how do i start learning ai",
    "learn ai with peers", "is there a mentorship program", "do you have online learning resources",
    "do you teach deep learning", "what’s the learning structure", "is there a coding bootcamp",
    "what's the schedule for learning", "is ai learning focused on projects", "how to get better at ai",
    "learning environment in the club", "how do i become good at ai"
],

// 7. Do you offer online resources
"do you offer online resources": [
    "does the club provide online material", "are there online tutorials", "do you have online learning materials",
    "are there free online resources", "do you offer online training", "what online resources do you provide", 
    "is there a library of resources", "does the club offer video tutorials", "can i learn online", 
    "do you have a website for learning", "ai club online learning", "online ai resources", "ai study material",
    "do you have videos on ai", "are there study guides", "are tutorials available online", "what do you offer online",
    "how to access online resources", "how to learn through online resources", "ai online courses"
],

// 8. How can I contact coordinators
"how can i contact coordinators": [
    "how to reach out to coordinators", "how do i contact the club coordinators", 
    "who do i talk to in the club", "coordinator contact details", "how can i get in touch with the coordinators", 
    "where to find the coordinator’s contact", "how can i communicate with the coordinators", "how to contact club coordinators",
    "coordinator details", "who to contact for information", "contact information for club leaders",
    "email details for coordinators", "coordinator phone number", "how can i talk to coordinators",
    "how to get the coordinators contact info", "where to reach coordinators", "coordinator direct contact",
    "contact details for ai club"
],

// 9. What is the minimum requirement to join
"what is the minimum requirement to join": [
    "do i need any qualifications to join", "are there any prerequisites to join", 
    "is there an experience requirement", "do i need a certain level of knowledge", "can anyone join",
    "do i need prior experience in ai", "minimum requirements to join", "is coding experience needed",
    "how experienced should i be", "what knowledge do i need", "do i need a specific degree", 
    "can a beginner join", "what are the club entry requirements", "do i need any skills"
],

// 10. What is your club’s biggest achievement
"what is your club’s biggest achievement": [
    "what’s the biggest success of the club", "what’s the most notable achievement of the club", 
    "what is the ai club proud of", "best accomplishments of the club", "major achievements of the club",
    "ai club top success", "biggest project completed", "what has the club achieved", 
    "most successful project", "what is your club’s greatest achievement", "what’s been the club’s biggest win",
    "biggest contribution of the club", "most significant outcome", "what is ai club known for",
    "what's the club most proud of", "biggest milestone of the club"
],

// 11. Do you work on real-world projects
"do you work on real-world projects": [
    "do you work on projects for the real world", "are your projects practical", "do your projects solve real problems",
    "do you work on industry-related projects", "do you do practical ai projects", "are your projects applicable in real life",
    "how real are the projects", "do you create products", "what’s the real-world impact of your projects",
    "is ai club working on practical problems", "real world applications of ai club", "hands-on projects"
],

// 12. How to suggest a project
"how to suggest a project": [
    "can i submit a project idea", "how can i pitch a project", "how do i recommend a project", 
    "where can i suggest a project", "can i submit project ideas", "how to suggest new projects",
    "how can i propose a project", "what’s the process for suggesting a project", "how to share my project ideas",
    "project idea submission", "how to introduce a project", "who do i talk to about project ideas", 
    "how to pitch ideas to the coordinators", "project idea submission process", "suggesting ideas"
],

// 13. What is machine learning
"what is machine learning": [
    "what is ml", "define machine learning", "how does machine learning work", "what is the concept of machine learning",
    "explain machine learning", "what is ml in ai", "what’s machine learning", "how does ml work",
    "how to learn machine learning", "is machine learning the same as ai", "machine learning details",
    "what are the types of machine learning", "how is machine learning used", "machine learning in ai"
],
// 14. How can I participate in projects
"how can i participate in projects": [
    "how to participate in a project", "can i join a project", "how can i work on a project",
    "what projects can i join", "how to get involved in ai projects", "how do i join the ai projects",
    "where can i participate in projects", "how do i become part of a project", "how to become a part of a project team",
    "is there any project participation", "join ai projects", "project involvement", "how do i join an ongoing project",
    "how do i work on ai projects", "can i lead a project", "how to contribute to projects", "how can i help with a project",
    "can i join a machine learning project", "how to be a part of data science projects", "project signup",
    "ai club project teams", "project roles in ai club", "is there a project management opportunity", "how to start a new project",
    "can i suggest a project", "how to get into a project team", "how to work on machine learning projects",
    "how do i get involved in research projects", "project management in ai club"
],

// 15. How do I attend a guest lecture
"how can i attend a guest lecture": [
    "how do i participate in a guest lecture", "can i attend guest lectures", "how to join guest lectures",
    "are guest lectures open to all", "how can i attend the guest lectures", "is there a schedule for guest lectures",
    "do guest lectures require registration", "can anyone join the guest lectures", "how to sign up for guest lectures",
    "where can i find guest lecture details", "how to become a part of guest lectures", "are guest lectures held regularly",
    "guest lecture schedule", "how do i know when a guest lecture is", "when is the next guest lecture",
    "is there a guest lecture every month", "how do i participate in lectures by experts", "do guest lectures have fees",
    "guest lecture participation", "how to get information about guest lectures", "guest lectures available for students",
    "how to attend special lectures", "can i be part of guest speaker events", "how do guest speaker sessions work"
],

// 16. How can I contact coordinators
"how can i contact coordinators": [
    "how to reach out to coordinators", "how can i get in touch with the coordinators", 
    "who do i talk to in the club", "coordinator contact details", "how can i communicate with the coordinators", 
    "where to find the coordinator’s contact", "how to contact the coordinators", "coordinator email",
    "how to get in touch with club coordinators", "who is responsible for ai club", "who runs the club",
    "how do i contact club members", "coordinator information", "can i contact coordinators directly", 
    "what’s the best way to contact a coordinator", "do i need an appointment to contact a coordinator", 
    "how to get the contact info for coordinators", "coordinator phone number", "how do i send an email to the coordinator",
    "who is the head of the club", "coordinator details and roles", "where can i find the contact information", 
    "coordinator office hours", "contact coordinators for project discussions"
],

// 17. Can I learn data science here
"can i learn data science here": [
    "is data science taught in the club", "do you offer data science classes", "can i learn data science through ai club", 
    "are there data science workshops", "how to start learning data science", "does the ai club teach data science",
    "is there a data science program in ai club", "do you teach data science skills", "how to learn data science basics",
    "can i work on data science projects", "data science learning opportunities", "data science curriculum in the club", 
    "is data science taught in the workshops", "does the club offer data science training", "data science with machine learning", 
    "learning data science in the ai club", "how do i get started with data science", "how can i build data science skills",
    "data science for beginners", "do you focus on data analysis", "learning big data in the club", "can i get data science resources", 
    "ai and data science", "project based learning in data science", "do you offer resources for data science learning"
],
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
