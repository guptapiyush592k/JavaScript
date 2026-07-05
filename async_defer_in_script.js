// ## Normal `<script>` Tag


// <script src="currying.js"></script>

// * The browser starts parsing the HTML.
// * As soon as it encounters the `<script>` tag, HTML parsing **stops**.
// * The browser fetches the JavaScript file (from the cache or the server).
// * After the file is downloaded, it executes the script immediately.
// * Once the script execution is complete, the browser resumes HTML parsing.



// ## `async` Script Tag


// <script async src="currying.js"></script>


// * The browser starts parsing the HTML.
// * When it encounters the `<script>` tag, it starts downloading the JavaScript file **in parallel** with HTML parsing.
// * As soon as the download finishes, HTML parsing pauses temporarily.
// * The browser executes the JavaScript file immediately.
// * After execution, HTML parsing continues.

// > **Note:** Since the script executes as soon as it finishes downloading, the execution order of multiple `async` scripts is **not guaranteed**.



// ## `defer` Script Tag


// <script defer src="currying.js"></script>


// * The browser starts parsing the HTML.
// * When it encounters the `<script>` tag, it starts downloading the JavaScript file **in parallel** with HTML parsing.
// * HTML parsing continues without interruption until the entire document is parsed.
// * After HTML parsing is complete, the browser executes the deferred script.
// * If there are multiple `defer` scripts, they execute **in the order they appear** in the HTML.
