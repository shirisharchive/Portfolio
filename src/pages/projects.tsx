import React, { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description?: string;
};

const GITHUB_USERNAME = "shirisharchive";
const REPOS_API = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

const MyProjects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(REPOS_API)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repositories");
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">My Projects</h2>
      <p className="mb-4 text-gray-700">
        You can find more of my work on my GitHub profile:
        <a
          href="https://github.com/shirisharchive"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline ml-1"
        >
          github.com/shirisharchive
        </a>
      </p>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        Public Repositories
      </h3>
      {loading && <p className="text-gray-500">Loading repositories...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-3">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="border p-4 rounded hover:bg-gray-50 transition"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-blue-600 hover:underline"
            >
              {repo.name}
            </a>
            {repo.description && (
              <p className="text-gray-600 mt-1">{repo.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyProjects;
