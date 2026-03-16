import { useState } from "react";

import { normalizeTags } from "../utils/tagUtils";

const LANGUAGE_OPTIONS = [
  "Python",
  "JavaScript",
  "TypeScript",
  "Java",
  "C++",
  "HTML",
  "CSS",
  "SQL",
  "Other",
];

const initialForm = {
  title: "",
  language: "Python",
  tags: "",
  description: "",
  code: "",
};

function SnippetForm({ onSave, isSaving }) {
  const [form, setForm] = useState(initialForm);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onSave({ ...form, tags: normalizeTags(form.tags) });
    setForm(initialForm);
  };

  return (
    <form className="space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-5" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold text-white">Add New Snippet</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="rounded-md border border-slate-700 bg-slate-950 p-2 text-slate-100"
          name="title"
          placeholder="Snippet title"
          value={form.title}
          onChange={updateField}
          required
        />

        <select
          className="rounded-md border border-slate-700 bg-slate-950 p-2 text-slate-100"
          name="language"
          value={form.language}
          onChange={updateField}
          required
        >
          {LANGUAGE_OPTIONS.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>

      <input
        className="w-full rounded-md border border-slate-700 bg-slate-950 p-2 text-slate-100"
        name="tags"
        placeholder="Tags (comma separated)"
        value={form.tags}
        onChange={updateField}
      />

      <textarea
        className="h-20 w-full rounded-md border border-slate-700 bg-slate-950 p-2 text-slate-100"
        name="description"
        placeholder="Short description"
        value={form.description}
        onChange={updateField}
      />

      <textarea
        className="h-44 w-full rounded-md border border-slate-700 bg-slate-950 p-2 font-mono text-slate-100"
        name="code"
        placeholder="Paste your code here..."
        value={form.code}
        onChange={updateField}
        required
      />

      <button
        className="rounded-md bg-cyan-500 px-4 py-2 font-semibold text-slate-950 hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={isSaving}
      >
        {isSaving ? "Saving..." : "Save Snippet"}
      </button>
    </form>
  );
}

export default SnippetForm;
