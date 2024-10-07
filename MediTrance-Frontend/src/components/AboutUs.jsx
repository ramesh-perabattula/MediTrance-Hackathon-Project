import '../styles/AboutUs.css'; 

function AboutUs (){
    return (
        <div className="meditation-timer-page">
            <header className="hero-section">
                <h1>🧘‍♂ MediTrance</h1>
                <p>An innovative project we're proud to share!</p>
            </header>
            
            <section className="features-section">
                <h2>What's Special About Our Application?</h2>
                <div className="feature-cards">
                    <div className="feature-card">
                        <h3>🔔 Customizable Bell Sounds</h3>
                        <p>Choose from three calming bell sounds to signal the end of your meditation, creating a tranquil transition back to the present.</p>
                    </div>
                    <div className="feature-card">
                        <h3>🔐 Secure Registration and Login</h3>
                        <p>Your privacy is our priority. Our app uses secure login and registration, letting you save your favorite meditation sessions and personal details like age with confidence.</p>
                    </div>
                    <div className="feature-card">
                        <h3>🔄 Personalized Meditation Suggestions</h3>
                        <p>We suggest meditation durations based on your age, helping you find the ideal time for your sessions.</p>
                    </div>
                    <div className="feature-card">
                        <h3>⭐ Favorite Sessions Feature</h3>
                        <p>Save your preferred meditation sessions and access them quickly for a personalized experience every time.</p>
                    </div>
                    <div className="feature-card">
                        <h3>🌐 Adaptable Platform</h3>
                        <p>Built on the MERN stack, our application adapts to each user's credentials, ensuring a seamless and tailored experience.</p>
                    </div>
                </div>
            </section>

            <section className="developers-section">
                <h2>The OG Coders</h2>
                <p id="meet-the">Meet the team that made this project possible:</p>
                <div className="developer-cards">
                    <div className="developer-card">
                        <h3>Chaitanya Kadali (Team Lead)</h3>
                        <p>Led the team, contributed backend code, and implemented the "Favorite Sessions" feature on both frontend and backend. Structured the System Design.</p>
                    </div>
                    <div className="developer-card">
                        <h3>Deva Ganesh Vatturi</h3>
                        <p>Cheif Frontend Developer. Built and styled the whole frontend part by employing the advanced React JS concepts </p>
                    </div>
                    <div className="developer-card">
                        <h3>Sai Venkat</h3>
                        <p>Designed Sophisticated MongoDB database Scheama , Developed Password Hashing for security, generated optimaized DB quiries.</p>
                    </div>
                    <div className="developer-card">
                        <h3>Sai Nagendra Thota</h3>
                        <p>Assistant Frontend Developer , contributed in system design with innovative thoughts. </p>
                    </div>
                    <div className="developer-card">
                        <h3>Subbu Kancharla</h3>
                        <p>Frontend Developer styled few components, worked on documentation and referential works.</p>
                    </div>
                    <div className="developer-card">
                        <h3>Jayanth Venkat B.</h3>
                        <p>Frontend Developer styled few components, worked on documentation and referential works. </p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>🚀 Join us in embracing mindfulness with the "MediTrance" Whether you're a beginner or an experienced practitioner, our platform offers a range of features to support your journey towards a more balanced and harmonious way of life.</p>
            </footer>
        </div>
    );
};

export default AboutUs;
