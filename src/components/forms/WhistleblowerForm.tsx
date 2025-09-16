"use client";

import { useState } from "react";

interface UploadFile {
  file: File;
}

const fieldClass = "w-full border border-[#D6D3D1] bg-white px-3 py-2 text-sm outline-none focus:ring-0 focus:border-[#1F2937] rounded-none shadow-none";
const labelClass = "block text-sm mb-2";

const WhistleblowerForm = () => {
  const [files, setFiles] = useState<UploadFile[]>([]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files).map((file) => ({ file }));
    setFiles((prev) => [...prev, ...dropped]);
  };

  const handleFilePick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const picked = Array.from(e.target.files).map((file) => ({ file }));
    setFiles((prev) => [...prev, ...picked]);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire up API endpoint / secure transport
    // For now, noop to keep production-safe without errors
  };

  return (
    <form
      className="space-y-5 p-6 md:p-8"
      onSubmit={onSubmit}
      noValidate
      style={{ border: '1px solid #1F2937', backgroundColor: '#EFE8DD' }}
    >
      <div>
        <label className={labelClass}>Name (optional)</label>
        <div className="grid grid-cols-2 gap-3">
          <input className={fieldClass} placeholder="First" aria-label="First name" />
          <input className={fieldClass} placeholder="Last" aria-label="Last name" />
        </div>
      </div>

      <div>
        <label className={labelClass}>Email (optional)</label>
        <input className={fieldClass} type="email" placeholder="Type" aria-label="Email address" />
        <p className="text-xs mt-2" style={{ color: "#6B7280" }}>
          Please provide your email address if you would like to be contacted or updated
        </p>
      </div>

      <div>
        <label className={labelClass}>
          To which brand, legal entity, or individual is your information connected?
        </label>
        <input className={fieldClass} placeholder="Type" aria-label="Connected entity or individual" />
      </div>

      <div>
        <label className={labelClass}>Please let us have your information</label>
        <textarea className={fieldClass} rows={8} placeholder="Type" aria-label="Information details" />
      </div>

      <div>
        <label className={labelClass}>Do you want to upload documents or files?</label>
        <div className="flex items-center gap-8 text-sm mt-1">
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="uploadChoice" aria-label="Yes upload files" /> Yes
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="uploadChoice" aria-label="No upload files" /> No
          </label>
        </div>
        <p className="text-xs mt-2" style={{ color: "#6B7280" }}>
          Any document supporting your information would be highly appreciated (e.g. payment documents,
          agreements, emails, chat communications etc.)
        </p>
      </div>

      <div>
        <label className={labelClass}>Please provide instructions how to use your information (if any)</label>
        <textarea className={fieldClass} rows={6} placeholder="Type" aria-label="Instructions for using your information" />
        <p className="text-xs mt-1" style={{ color: "#6B7280" }}>
          e.g. If you want us not to publish screenshots or copies of your documents please let us know
        </p>
      </div>

      <div>
        <label className={labelClass}>Please upload your files</label>
        <div
          className="border border-dashed border-[#D6D3D1] p-4 text-center mt-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          style={{ backgroundColor: '#FAF7F2' }}
        >
          <p className="text-sm">Drag & drop files here</p>
          <div className="my-2 text-xs">or</div>
          <label className="inline-block bg-white border border-[#D6D3D1] px-3 py-2 cursor-pointer text-sm">
            Attach Files
            <input type="file" multiple className="hidden" onChange={handleFilePick} />
          </label>
          {files.length > 0 && (
            <ul className="mt-3 text-left text-sm">
              {files.map(({ file }, idx) => (
                <li key={idx}>{file.name}</li>
              ))}
            </ul>
          )}
        </div>
        <p className="text-xs mt-2" style={{ color: "#6B7280" }}>
          Click or drag a file to this area to upload
        </p>
      </div>

      <p className="text-xs" style={{ color: "#6B7280" }}>
        By clicking the button &quot;Submit information&quot; you accept our Terms of Submission Whistleblower
        Information
      </p>
      <a href="#" className="text-sm" style={{ color: '#2563EB' }}>Read More</a>

      <button type="submit" className="px-6 py-2 text-sm text-white" style={{ backgroundColor: '#2B2B2B' }}>
        Submit information
      </button>
    </form>
  );
};

export default WhistleblowerForm;


