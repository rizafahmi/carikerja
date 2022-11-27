import {writable} from "svelte/store";

/**
 * @type {import("svelte/store").Writable<string | null>}
 */
export let theme;

if (typeof window !== "undefined") {
  theme = writable(localStorage.getItem("theme") || "Light");
} else {
  theme = writable(null);
}

theme.subscribe((val) => {
  if (typeof window !== "undefined") {
    if (val === "Dark") {
      window.document.body.classList.add("dark-mode");
    } else {
      window.document.body.classList.remove("dark-mode");
    }
  }
});
