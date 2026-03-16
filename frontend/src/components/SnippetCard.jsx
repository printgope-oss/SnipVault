import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { splitTags } from "../utils/tagUtils";

function SnippetCard({ snippet, onDelete }) {
  const [copied, setCopied] = useState(false);
  const tags = splitTags(snippet.tags);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (error) {
      setCopied(false);
    }
  };

  const handleDelete = () => {
    const confirmed = window.confirm(`Delete snippet "${snippet.title}"?`);
    if (confirmed) {
      onDelete(snippet.id);
    }
  };

  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-lg shadow-slate-950/20">
      <header className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{snippet.title}</h3>
          <span className="mt-1 inline-block rounded-full bg-cyan-500/15 px-2 py-1 text-xs font-medium text-cyan-300">
            {snippet.language}
          </span>
        </div>

        <button
          type="button"
          onClick={handleDelete}
          className="rounded-md bg-rose-500 px-3 py-1 text-xs font-semibold text-white hover:bg-rose-400"
        >
          Delete
        </button>
      </header>

      {snippet.description ? <p className="mb-3 text-sm text-slate-300">{snippet.description}</p> : null}

      {tags.length ? (
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-200">
              #{tag}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mb-3 overflow-hidden rounded-lg">
        <SyntaxHighlighter language={snippet.language.toLowerCase()} style={oneDark} customStyle={{ margin: 0, minHeight: "180px" }}>
          {snippet.code}
        </SyntaxHighlighter>
      </div>

      <button
        type="button"
        onClick={handleCopy}
        className="mt-auto rounded-md border border-cyan-400 px-3 py-2 text-sm font-medium text-cyan-300 hover:bg-cyan-500/10"
      >
        {copied ? "Copied!" : "Copy to Clipboard"}
      </button>
    </article>
  );
}

export default SnippetCard;
