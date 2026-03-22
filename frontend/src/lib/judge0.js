//Judge0 API runs our code
const JUDGE0_API = "https://ce.judge0.com/submissions?wait=true";

// const LANGUAGE_VERSIONS = {
//   javascript: { language_id: 63 },
//   python: { language_id: 71 },
//   java: { language_id: 62 },
// };

const LANGUAGE_VERSIONS = {
  c: { language_id: 50 },
  cpp: { language_id: 54 },
  javascript: { language_id: 63 },
  python: { language_id: 71 },
  java: { language_id: 62 },
  csharp: { language_id: 51 },
  php: { language_id: 68 },
};
/**
 * @param {string} language - programming language
 * @param {string} code - source code to execute
 * @returns {Promise<{success:boolean, output?:string, error?:string}>}
 */

export async function executeCode(language, code) {
  try {
    const languageConfig = LANGUAGE_VERSIONS[language];

    if (!languageConfig) {
      return {
        success: false,
        error: `Unsupported Language: ${language}`,
      };
    }

    const response = await fetch(JUDGE0_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language_id: languageConfig.language_id,
        source_code: code,
      }),
    });

    if (!response.ok) {
      return {
        success: false,
        error: `HTTP error!: ${response.status}`,
      };
    }

    const data = await response.json();

    const output = data.stdout || "";
    const stderr = data.stderr || "";
    const compileError = data.compile_output || "";

    if (stderr || compileError) {
      return {
        success: false,
        output: output,
        error: stderr || compileError,
      };
    }

    return {
      success: true,
      output: output || "No Output",
    };
  } catch (error) {
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
}
