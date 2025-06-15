import { useState } from "react";
import axios from "axios";
import type { Repo } from "./types/github";
import RepoCard from "./components/RepoCard";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRepos = async () => {
    if (!userName) return;

    setLoading(true);
    setError("");
    setRepos([]);

    try {
      const response = await axios.get<Repo[]>(
        `https://api.github.com/users/${userName}/repos`
      );
      setRepos(response.data);
    } catch (err: any) {
      setError("Failed to Fetch Repositories. Make sure the user Exists.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-custom-blue text-white p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl text-center p-10 font-bold mb-4">
          GitHub Repo Explorer
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="flex-1 px-4 py-2 rounded text-black border border-gray-300 focus:outline-none focus:ring-2 focus:blue-700"
          />

          <button
            onClick={fetchRepos}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid gap-4">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
