<script>
  export let segment;

  import { theme } from "../stores/theme.js";
  $: dark = $theme === "Dark";

  function toggleTheme() {
    // jika di localStorage tidak ada data tema maka ganti tema menjadi tema Gelap
    const newTheme =
      $theme === null ? "Dark" : $theme === "Light" ? "Dark" : "Light";
    theme.set(newTheme);
    localStorage.setItem("theme", newTheme);
  }
</script>

<style>
  .button-switch-theme {
    padding: 0.25em;
    padding-left: 0.5em;
    padding-right: 0.5em;
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

<nav class="terminal-nav">
  <header class="terminal-logo">
    <div class="terminal-prompt">
      <a href="/" class="no-style">Carikerja</a>
    </div>
  </header>
  <div class="terminal-menu">
    <ul typeof="BreadcrumbList">
      <li>
        <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
          Tentang
        </a>
      </li>
      <li>
        <a
          aria-current={segment === 'hiring' ? 'page' : undefined}
          href="hiring">
          Hiring?
        </a>
      </li>
      {#if $theme !== null}
        <li>
          <span on:click={toggleTheme} class="button-switch-theme" class:dark>
            {$theme === 'Dark' ? '🌜 ' + $theme : '🌞 ' + $theme}
          </span>
        </li>
      {/if}
    </ul>
  </div>
</nav>
