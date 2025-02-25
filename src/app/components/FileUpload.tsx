import { useState } from "react";


interface FileUploadProps {
    onFileChange: (file: File) => void;
}

export default function FileUpload({ onFileChange }: FileUploadProps) {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files?.[0];
        if (uploadedFile) {
            if (uploadedFile.type === "application/pdf") {
                setFile(uploadedFile);
                setError(null);
                onFileChange(uploadedFile);
            } else {
                setFile(null);
                setError("Please upload a PDF file.");
            }
        }
    }

return (
        <div>
            <label htmlFor="file-upload" className="custom-file-upload">
                Upload PDF
            </label>
            <input id="file-upload" type="file" onChange={handleChange}/>
            {file && <p>{file.name}</p>}
            {error && <p className="text-red-500">{error}</p>}
        </div>
    )
}