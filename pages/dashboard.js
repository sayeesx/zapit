export default function Dashboard() {
    // Placeholder for submissions; you might connect this to a database in real implementation
    const submissions = [
        { id: 1, type: 'Website', description: 'E-commerce site with modern design' },
        { id: 2, type: 'App', description: 'Simple social media app for connecting users' }
    ];

    return (
        <div className="dashboard-container">
            <header className="header">
                <h1>Admin Dashboard</h1>
            </header>
            <div className="submissions">
                <h2>Submissions</h2>
                <ul>
                    {submissions.map(sub => (
                        <li key={sub.id}>
                            <strong>{sub.type}:</strong> {sub.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
