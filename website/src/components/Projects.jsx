const items = [{title: "Study Streak CLI", desc: "Track daily study sessions and streaks.", tech: ["Python","CLI"] , link:"https://github.com/yourname/study-streak"},
{title: "Expense Splitter", desc: "Split group expenses fairly.", tech: ["JS","HTML/CSS"], link:"https://github.com/yourname/expense-splitter"}
];

export default function Projects(){
    return(
        <section id="projects">
            <h2>Projects</h2>
            {items.map(p =>(
                <article className="card" key={p.title}>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <p><strong>Tech:</strong>{p.tech.join(", ")}</p>
                    <a href={p.link} target="_blank">View on Github</a>
                </article>
            ))}
        </section>
    );
}