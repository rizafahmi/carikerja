<script>
  export let segment;
</script>

<style>

</style>

<nav class="terminal-nav">
  <header class="terminal-logo">
    <div class="terminal-prompt">
      <a href="/" class="no-style">PHK.id</a>
    </div>
  </header>
  <div class="terminal-menu">
    <ul typeof="BreadcrumbList">
      <li>
        <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
          Tentang
        </a>
      </li>

    </ul>

  </div>
</nav>
