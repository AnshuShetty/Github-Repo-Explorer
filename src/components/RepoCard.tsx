import type React from "react";
import type { Repo } from "../types/github.ts";

interface Props {
  repo: Repo;
}

const RepoCard: React.FC<Props> = ({ repo }) => {
  return (
    <div className=" w-full border p-4 rounded-md shadow hover:shadow-lg transition">
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-bold text-blue-600"
      >
        {repo.name}
      </a>
      <p className="text-sm text-gray-700">{repo.description}</p>
      <div className="flex items-center justify-between mt-2 text-sm">
        <span>⭐ {repo.stargazers_count}</span>
        <span>{repo.language}</span>
      </div>
    </div>
  );
};

export default RepoCard;
