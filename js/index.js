"use strict";

import { loadHTML } from "./ajax_html.js";

// Programme PRINCIPAL
window.addEventListener("load", () => {
  loadHTML("id-header", "../_header.html");
  loadHTML("id-footer", "../_footer.html");
});