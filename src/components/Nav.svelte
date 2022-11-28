<script>
  import {page} from "$app/stores";
  import {theme} from "$src/stores/theme.js";

  $: segment = $page.url.pathname;
  $: dark = $theme === "Dark";

  function toggleTheme() {
    // jika di localStorage tidak ada data tema maka ganti tema menjadi tema Gelap
    const newTheme =
      $theme === null ? "Dark" : $theme === "Light" ? "Dark" : "Light";
    theme.set(newTheme);
    localStorage.setItem("theme", newTheme);
  }
</script>

<nav class="terminal-nav">
  <header class="terminal-logo">
    <div class="terminal-prompt">
      <a href="/" class="no-style">Carikerja</a>
    </div>
  </header>
  <div class="terminal-menu">
    <ul typeof="BreadcrumbList">
      <li>
        <a aria-current={segment === "about" ? "page" : undefined} href="about">
          Tentang
        </a>
      </li>
      <li>
        <a
          aria-current={segment === "hiring" ? "page" : undefined}
          href="hiring"
        >
          Hiring?
        </a>
      </li>
      {#if $theme !== null}
        <li>
          <button on:click={toggleTheme} class="button-switch-theme" class:dark>
            {$theme === "Dark" ? "🌜 " + $theme : "🌞 " + $theme}
          </button>
        </li>
      {/if}
    </ul>
  </div>
</nav>

<style>
  .button-switch-theme {
    padding: 0.25em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    border-width: 0;
    border-radius: 1em;
    display: inline-block;
    background: #eee;
    cursor: pointer;
  }
  .dark {
    background: #162a44;
    color: #fff;
  }
</style>
